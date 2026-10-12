// Teach-back and free-text grading. Offline heuristics: we look for CAUSAL LINKS (in French or English,
// technical or intuitive wording), never for exact vocabulary. The student can correct the machine.

import { useState } from 'react';
import type { RubricItem, TeachRubric } from '../content/types';
import { misById } from '../content/training';
import { addTeachback, flagMisconception, record } from '../store';
import { Rich } from './text';
import { Caution, Check, Cross, Ring } from './icons';

/** Lowercase + strip accents, keeping string length identical so match indices map back to the original. */
export const normalize = (s: string) =>
  Array.from(s, (c) => {
    if (c.length > 1) return c; // astral chars (emoji) kept as-is so indices stay aligned
    if (c === '’' || c === '‘') return "'";
    const l = c.normalize('NFD')[0].toLowerCase();
    return l.length === 1 ? l : c;
  }).join('');

function find(text: string, norm: string, patterns: RegExp[]) {
  for (const p of patterns) {
    const re = new RegExp(p.source, p.flags.replace('g', ''));
    const m = re.exec(norm);
    if (m) {
      const a = Math.max(0, m.index - 12), b = Math.min(text.length, m.index + m[0].length + 12);
      return `${a > 0 ? '…' : ''}${text.slice(a, b).trim()}${b < text.length ? '…' : ''}`;
    }
  }
  return null;
}

const FR_WORDS = /\b(le|la|les|des|est|une|du|que|qui|pour|pas|avec|dans|sur|cette|sont|aux|leur|donc|parce)\b/g;
const EN_WORDS = /\b(the|is|are|of|and|to|because|which|that|this|with|so|than|does|not|they|their)\b/g;
export function languageOf(text: string): 'fr' | 'en' | '?' {
  const n = normalize(text);
  const fr = (n.match(FR_WORDS) ?? []).length, en = (n.match(EN_WORDS) ?? []).length;
  if (fr + en < 3) return '?';
  return fr > en ? 'fr' : 'en';
}

type LinkState = 'auto' | 'self' | 'missing';

export function TeachBack({ rubric, lessonId, tags }: { rubric: TeachRubric; lessonId: string; tags: string[] }) {
  const [text, setText] = useState('');
  const [analysed, setAnalysed] = useState(false);
  const [links, setLinks] = useState<{ state: LinkState; snippet: string | null; term: boolean; open: boolean }[]>([]);
  const [errors, setErrors] = useState<{ mis: string; snippet: string; refine: string; dismissed: boolean }[]>([]);
  const [validated, setValidated] = useState(false);
  const [showModel, setShowModel] = useState(false);

  const analyse = () => {
    const norm = normalize(text);
    setLinks(rubric.links.map((l) => {
      const snippet = find(text, norm, l.patterns);
      return { state: snippet ? 'auto' : 'missing', snippet, term: l.term ? l.term.test(norm) : true, open: false };
    }));
    setErrors(rubric.errors.flatMap((e) => {
      const snippet = find(text, norm, e.patterns);
      return snippet ? [{ mis: e.mis, snippet, refine: e.refine, dismissed: false }] : [];
    }));
    setAnalysed(true);
    setValidated(false);
  };

  const okCount = links.filter((l) => l.state !== 'missing').length;
  const liveErrors = errors.filter((e) => !e.dismissed);

  const validate = () => {
    const ok = okCount >= rubric.links.length - 1 && liveErrors.length === 0;
    record({ tags, dim: 'intuition', ok, src: 'teachback', item: lessonId, assisted: links.some((l) => l.state === 'self') && ok });
    liveErrors.forEach((e) => flagMisconception(e.mis));
    addTeachback({ lesson: lessonId, t: Date.now(), text, score: okCount / rubric.links.length });
    setValidated(true);
  };

  return (
    <div className="teach">
      <p className="teach-prompt"><Rich text={rubric.prompt} /></p>
      <textarea value={text} onChange={(e) => { setText(e.target.value); setAnalysed(false); }} rows={7} placeholder="Explique avec tes mots — analogies bienvenues." aria-label="Ton explication" />
      <div className="row">
        <button type="button" className="primary" disabled={text.trim().length < 40} onClick={analyse}>Analyser mes liens de cause</button>
        <span className="muted small">{text.trim().length < 40 ? 'Écris au moins quelques phrases.' : ''}</span>
      </div>

      {analysed && (
        <div className="teach-result">
          <ul className="links">
            {rubric.links.map((l, i) => {
              const s = links[i];
              return (
                <li key={l.id} className={`link-${s.state}`}>
                  <span className="link-icon">{s.state === 'missing' ? <Ring label="maillon non détecté" /> : <Check label="maillon présent" />}</span>
                  <div>
                    <b>{l.label}</b>
                    {s.state === 'auto' && s.snippet && <span className="snippet">« {s.snippet} »</span>}
                    {s.state === 'self' && <span className="muted small"> — tu l’as exprimé autrement</span>}
                    {s.state !== 'missing' && !s.term && l.termHint && <p className="vocab"><Caution size={15} /><span>Vocabulaire à affiner : <Rich text={l.termHint} /></span></p>}
                    {s.state === 'missing' && !validated && (
                      <div className="row small">
                        <button type="button" className="ghost small" onClick={() => setLinks(links.map((x, j) => (j === i ? { ...x, state: 'self' } : x)))}>Je l’ai dit autrement</button>
                        <button type="button" className="ghost small" onClick={() => setLinks(links.map((x, j) => (j === i ? { ...x, open: !x.open } : x)))}>Montre-moi ce maillon</button>
                      </div>
                    )}
                    {s.open && <p className="muted"><Rich text={l.explain} /></p>}
                  </div>
                </li>
              );
            })}
          </ul>
          {errors.map((e, i) => (
            <div key={i} className={`teach-error ${e.dismissed ? 'dismissed' : ''}`}>
              <b><Cross size={14} /> Erreur de concept possible</b> <span className="snippet">« {e.snippet} »</span>
              <p><Rich text={e.refine} /></p>
              <p className="muted small">{misById(e.mis)?.label}</p>
              {!validated && !e.dismissed && (
                <button type="button" className="ghost small" onClick={() => setErrors(errors.map((x, j) => (j === i ? { ...x, dismissed: true } : x)))}>
                  Ce n’est pas ce que je voulais dire
                </button>
              )}
            </div>
          ))}
          <p className="teach-score">
            {okCount}/{rubric.links.length} maillons de cause {liveErrors.length ? `· ${liveErrors.length} erreur(s) à corriger` : ''}
          </p>
          {!validated ? (
            <button type="button" className="primary" onClick={validate}>Valider mon explication</button>
          ) : (
            <p className={`feedback ${okCount >= rubric.links.length - 1 && !liveErrors.length ? 'good' : 'bad'}`}>
              {okCount >= rubric.links.length - 1 && !liveErrors.length
                ? 'Chaîne causale solide. Ce qui compte, c’est que chaque maillon cause le suivant — ton vocabulaire peut encore s’affiner.'
                : 'Il manque des maillons : relis-les ci-dessus, puis réessaie demain sans regarder.'}
            </p>
          )}
          <button type="button" className="link" onClick={() => setShowModel(!showModel)}>{showModel ? 'Masquer' : 'Voir'} une explication modèle</button>
          {showModel && <blockquote className="model"><Rich text={rubric.model} /></blockquote>}
        </div>
      )}
    </div>
  );
}

/** Free-text answer graded on rubric items (auto-detected, then confirmed by the student). */
export function TextAnswer({ rubric, model, lang, onGraded }: { rubric: RubricItem[]; model: string; lang?: 'en' | 'fr'; onGraded: (ok: boolean, ticked: boolean[], langOk: boolean) => void }) {
  const [text, setText] = useState('');
  const [ticks, setTicks] = useState<boolean[] | null>(null);
  const [done, setDone] = useState(false);
  const detected = (t: string) => rubric.map((r) => !!find(t, normalize(t), r.patterns));
  const language = languageOf(text);
  const langOk = !lang || language === lang || language === '?';
  return (
    <div className="textans">
      <textarea value={text} rows={4} onChange={(e) => { setText(e.target.value); setTicks(null); }} placeholder={lang === 'en' ? 'Answer in English…' : 'Ta réponse…'} aria-label="Ta réponse écrite" />
      {!ticks ? (
        <button type="button" className="primary" disabled={text.trim().length < 15} onClick={() => setTicks(detected(text))}>Comparer à la réponse modèle</button>
      ) : (
        <div className="rubric">
          <blockquote className="model"><Rich text={model} /></blockquote>
          <p className="small muted">Coche ce que ta réponse contient vraiment (pré-coché quand on l’a détecté) :</p>
          {rubric.map((r, i) => (
            <label key={r.id} className="tick">
              <input type="checkbox" checked={ticks[i]} disabled={done} onChange={() => setTicks(ticks.map((x, j) => (j === i ? !x : x)))} />
              {r.label}
            </label>
          ))}
          {lang === 'en' && !langOk && <p className="feedback bad">Langue : ta réponse semble en français. À l’examen, réponds en anglais.</p>}
          {!done && (
            <button type="button" className="primary" onClick={() => {
              const n = ticks.filter(Boolean).length;
              const ok = n >= Math.ceil(rubric.length * 0.75) && langOk;
              setDone(true);
              onGraded(ok, ticks, langOk);
            }}>Valider</button>
          )}
        </div>
      )}
    </div>
  );
}
