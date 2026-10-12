import { Fragment, type ReactNode } from 'react';
import { GLOSS, TONE_VAR } from '../content/glossary';
import type { Prov } from '../content/types';
import { decode, resolve } from '../dossier';
import { familiarity, openOverlay, useProgress } from '../store';

/** French typography: non-breaking space before ? ! : ; » and after «. */
const typo = (s: string) => s.replace(/ ([?!:;»])/g, ' $1').replace(/« /g, '« ');

const TOKEN = /(\[\[[^\]]+\]\]|\*\*[^*]+\*\*|\{\{[^}]+\}\}|§\d{1,2}(?:\.\d{1,2})?(?::[A-Z0-9]+)?(?:#[A-Za-z0-9.]+)?)/g;

/** Inline markup: [[MSB]] abbreviation chip · **bold** · {{formula}} · §11.3 source reference. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((p, i) => {
        if (!p) return null;
        if (p.startsWith('[[')) return <Abbr key={i} k={p.slice(2, -2)} />;
        if (p.startsWith('**')) return <strong key={i}>{typo(p.slice(2, -2))}</strong>;
        if (p.startsWith('{{')) return <Formula key={i} f={p.slice(2, -2)} />;
        if (p.startsWith('§')) return <SourceRef key={i} r={p.slice(1)} />;
        return <Fragment key={i}>{typo(p)}</Fragment>;
      })}
    </>
  );
}

/** Abbreviation chip: hover = short decode, click = full decode drawer. Gets quieter as recall succeeds. */
export function Abbr({ k }: { k: string }) {
  const p = useProgress();
  const g = decode(k);
  if (!g) return <>{k}</>;
  const fam = familiarity(p, `abbr:${k}`);
  return (
    <span className="abbr-wrap">
      <button
        type="button"
        className={`abbr ${fam >= 2 ? 'abbr--known' : ''}`}
        style={{ ['--tone' as string]: TONE_VAR[g.tone] }}
        onClick={() => openOverlay({ kind: 'abbr', key: k })}
        aria-label={`${k} : ${g.english || g.french}. Ouvrir la fiche`}
      >
        {k}
      </button>
      <span className="abbr-tip" role="tooltip">
        <b>{g.english || k}</b>
        {g.french && <i> · {g.french}</i>}
        <br />
        {g.literal}
      </span>
    </span>
  );
}

/** Full decode card shown the first time an abbreviation appears in a lesson. */
export function DecodeCard({ k }: { k: string }) {
  const p = useProgress();
  const g = decode(k);
  if (!g) return null;
  // The glyph's weight is how well the abbreviation is known: hairline when new, black once recalled on two days.
  const fam = familiarity(p, `abbr:${k}`);
  return (
    <div className="decode" style={{ ['--tone' as string]: TONE_VAR[g.tone] }}>
      <div className="decode-head">
        <span className="decode-key" style={{ fontWeight: fam >= 2 ? 840 : fam === 1 ? 520 : 170 }}>{k}</span>
        <span>
          <b>{g.english}</b>
          <br />
          <span className="muted">{g.french}</span>
        </span>
      </div>
      <dl className="decode-grid">
        <dt>Littéralement</dt>
        <dd>{typo(g.literal)}</dd>
        {g.who && (<><dt>Qui ?</dt><dd>{typo(g.who)}</dd></>)}
        {g.marginal && (<><dt>« Marginal » ici</dt><dd>{typo(g.marginal)}</dd></>)}
        {g.units && (<><dt>Unités</dt><dd>{g.units}</dd></>)}
        {g.curve && (<><dt>Sur le graphique</dt><dd>{typo(g.curve)}</dd></>)}
      </dl>
      {g.note && <p className="decode-note">{typo(g.note)}</p>}
    </div>
  );
}

const KEYS = Object.keys(GLOSS).sort((a, b) => b.length - a.length);
const KEY_RE = new RegExp(`(?<![A-Za-z_])(${KEYS.map((k) => k.replace(/[*]/g, '\\*')).join('|')})(?![A-Za-z_])`, 'g');

/** Formula with each symbol coloured by the actor it belongs to (buyer, producer, third parties, society, state). */
export function Formula({ f, block, onWhy }: { f: string; block?: boolean; onWhy?: () => void }) {
  const parts = f.split(KEY_RE);
  const body: ReactNode[] = parts.map((p, i) => {
    const g = GLOSS[p];
    if (i % 2 === 1 && g) {
      return (
        <span key={i} className="abbr-wrap">
          <button type="button" className="f-sym" style={{ color: TONE_VAR[g.tone] }} onClick={() => openOverlay({ kind: 'abbr', key: p })}>
            {p}
          </button>
          <span className="abbr-tip" role="tooltip">
            <b>{g.english}</b> · <i>{g.french}</i>
            <br />
            {g.literal}
          </span>
        </span>
      );
    }
    return <Fragment key={i}>{p}</Fragment>;
  });
  if (!block) return <span className="formula">{body}</span>;
  return (
    <div className="formula-block">
      <span className="formula">{body}</span>
      {onWhy && (
        <button type="button" className="why-mini" onClick={onWhy} aria-label="Pourquoi cette formule ?">
          Pourquoi ?
        </button>
      )}
    </div>
  );
}

export function SourceRef({ r }: { r: string }) {
  const res = resolve(r);
  return (
    <button type="button" className="src" title={res ? res.title : 'référence du dossier'} onClick={() => openOverlay({ kind: 'source', ref: r })}>
      §{r.replace(':', ' ').replace('#', ' ')}
    </button>
  );
}

const PROV_LABEL: Record<Prov['kind'], string> = { doc: 'Documenté', recalc: 'Recalculé (dossier)', peda: 'Complément pédagogique' };

export function ProvTags({ prov }: { prov: Prov[] }) {
  return (
    <div className="prov">
      {prov.map((p, i) => (
        <span key={i} className={`prov-tag prov-${p.kind}`}>
          {PROV_LABEL[p.kind]}
          {p.ref && <SourceRef r={p.ref} />}
          {p.note && <span className="muted"> {p.note}</span>}
        </span>
      ))}
    </div>
  );
}
