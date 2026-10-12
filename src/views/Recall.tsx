import { useMemo, useState } from 'react';
import { TOPICS } from '../content/catalog';
import { GLOSS } from '../content/glossary';
import { LESSONS } from '../content/externalities';
import { CARDS, type Card } from '../content/training';
import type { Check, Dim } from '../content/types';
import { Checkpoint } from '../components/learning';
import { Rich } from '../components/text';
import { DOSSIER } from '../dossier';
import { rateCard, record, reviewResult, useProgress } from '../store';

const LEVELS = ['', 'Décoder les sigles', 'Expliquer pourquoi', 'Reconstruire la formule à partir des acteurs', 'Transférer à un nouveau contexte', 'Écrire la réponse SSE en anglais'];

const EXT_KEYS = new Set(['MPC', 'MEC', 'MSC', 'MPB', 'MEB', 'MSB', 'MAC', 'EC', 'CPR', 'Qpriv', 'QPoll']);
const INFO_KEYS = new Set(['IC', 'IR', 'H', 'B', 'R', 'E[X]', 'pH', 'd', 'F']);
const GAME_KEYS = new Set(['BR', 'NE', 'SPNE', 'S']);
const OLIGO_KEYS = new Set(['PC', 'PPT', 'QC', 'MC_i', 'n']);
const MATH_SKIP = new Set(['Delta', 'd/dx', 'partial', 'prime', 'max/min', 'sqrt(x)', 'barre', 's.t.']);

function topicOfAbbr(section: string, key: string) {
  if (section === '18.1') return 'costs';
  if (section === '18.2') return 'consumer';
  if (section === '18.3') return EXT_KEYS.has(key) ? 'ext' : 'welfare';
  if (section === '18.4') return INFO_KEYS.has(key) ? 'info' : GAME_KEYS.has(key) ? 'games' : OLIGO_KEYS.has(key) ? 'oligopoly' : 'monopoly';
  return 'complements';
}
const primary = (topic: string) => TOPICS.find((t) => t.id === topic)?.nodes[0] ?? topic;

function buildDeck(): Card[] {
  const abbr: Card[] = DOSSIER.abbr.filter((a) => !MATH_SKIP.has(a.names[0])).map((a) => {
    const key = a.names[0];
    const topic = topicOfAbbr(a.section, key);
    const g = GLOSS[key];
    return {
      id: `abbr-${a.line}`, topic, dim: 'terminology' as Dim,
      front: `Que signifie ${a.names.join(' / ')} ?`,
      back: `${a.english ? `${a.english} — ` : ''}${a.french}${g ? ` Littéralement : ${g.literal}.` : ''} (§${a.section})`,
      tags: [primary(topic), `abbr:${key}`],
    };
  });
  const defs: Card[] = DOSSIER.defs.map((d) => {
    const topic = /elastic/i.test(d.id) ? 'elasticity' : /(isoquant|isocost|product|returns|economies|technical)/i.test(d.id) ? 'costs' : 'consumer';
    return { id: `def-${d.id}`, topic, dim: 'english' as Dim, front: `Define in English: ${d.id}`, back: `${d.text} (§20.4)`, tags: [primary(topic)] };
  });
  return [...CARDS, ...abbr, ...defs];
}

export function Recall() {
  const [tab, setTab] = useState<'reviews' | 'cards'>('reviews');
  return (
    <div className="page">
      <header className="page-head">
        <h1>Reconstruire plutôt que réciter</h1>
        <p className="lead">Les révisions espacées montent en difficulté : décoder → expliquer → reconstruire → transférer → rédiger en anglais. Le rappel rapide entraîne le vocabulaire de tout le cours.</p>
      </header>
      <div className="seg" role="tablist">
        <button role="tab" aria-selected={tab === 'reviews'} className={tab === 'reviews' ? 'on' : ''} onClick={() => setTab('reviews')}>Révisions espacées</button>
        <button role="tab" aria-selected={tab === 'cards'} className={tab === 'cards' ? 'on' : ''} onClick={() => setTab('cards')}>Rappel rapide</button>
      </div>
      {tab === 'reviews' ? <Reviews /> : <Cards />}
    </div>
  );
}

function Reviews() {
  const p = useProgress();
  const [early, setEarly] = useState<string | null>(null);
  const [round, setRound] = useState(0);
  // Once answered, an item stays on screen (with its feedback) until "Continuer", even though the schedule moved.
  const [held, setHeld] = useState<Record<string, { check: Check; schedule: boolean }>>({});
  const entries = Object.entries(p.reviews);
  if (!entries.length) {
    return <div className="card"><p>Aucune révision programmée pour l’instant : termine une leçon guidée et le premier rappel apparaîtra ici. <a href="#/learn">Voir les leçons</a></p></div>;
  }
  return (
    <>
      {entries.map(([id, r]) => {
        const l = LESSONS[id];
        if (!l) return null;
        const due = r.due <= Date.now();
        const variants = l.ladder[r.level - 1] ?? [];
        const n = p.attempts.filter((a) => a.src === 'review' && a.tags.includes(l.node)).length;
        const fresh = variants[(n + round) % Math.max(1, variants.length)];
        const shown = held[id] ?? ((due || early === id) && fresh ? { check: fresh, schedule: due && early !== id } : null);
        const hours = Math.max(0, Math.round((r.due - Date.now()) / 3_600_000));
        return (
          <article key={id} className="card">
            <h3>{LEVELS[r.level]}</h3>
            <p className="meta">{l.mechanism} · niveau {r.level}/5</p>
            {!shown ? (
              <div className="row wrap">
                <span>Prochain rappel dans {hours < 1 ? 'moins d’une heure' : hours < 24 ? `${hours} h` : `${Math.round(hours / 24)} jour(s)`}.</span>
                <button type="button" className="ghost small" onClick={() => setEarly(id)}>Réviser en avance (sans compter pour l’agenda)</button>
              </div>
            ) : (
              <ReviewItem
                key={`${shown.check.id}-${round}`}
                check={shown.check}
                schedule={shown.schedule}
                onFirstResult={(ok) => {
                  setHeld((h) => ({ ...h, [id]: shown }));
                  if (shown.schedule) reviewResult(id, ok);
                }}
                onNext={() => {
                  setHeld((h) => { const c = { ...h }; delete c[id]; return c; });
                  setEarly(null);
                  setRound(round + 1);
                }}
              />
            )}
          </article>
        );
      })}
    </>
  );
}

function ReviewItem({ check, schedule, onFirstResult, onNext }: { check: Check; schedule: boolean; onFirstResult: (ok: boolean) => void; onNext: () => void }) {
  const [result, setResult] = useState<boolean | null>(null);
  return (
    <div>
      <Checkpoint check={check} src="review" onPass={() => undefined} onResult={(ok) => {
        if (result === null) { setResult(ok); onFirstResult(ok); }
      }} />
      {result !== null && (
        <div className="row">
          <span className={`feedback ${result ? 'good' : 'bad'}`}>{result ? (schedule ? 'Réussi du premier coup : niveau suivant programmé.' : 'Réussi (révision en avance, l’agenda ne bouge pas).') : schedule ? 'Raté du premier coup : on y revient dans 10 minutes.' : 'À retravailler.'}</span>
          <button type="button" className="ghost small" onClick={onNext}>Continuer</button>
        </div>
      )}
    </div>
  );
}

function Cards() {
  const p = useProgress();
  const deck = useMemo(buildDeck, []);
  const [topic, setTopic] = useState('ext');
  const [flipped, setFlipped] = useState(false);
  const [skip, setSkip] = useState<string[]>([]);
  const pool = deck.filter((c) => (topic === 'all' || c.topic === topic) && !skip.includes(c.id));
  const card = [...pool].sort((a, b) => {
    const A = p.cards[a.id] ?? { box: 0, last: 0 }, B = p.cards[b.id] ?? { box: 0, last: 0 };
    return A.box - B.box || A.last - B.last;
  })[0];
  const topics = TOPICS.filter((t) => deck.some((c) => c.topic === t.id));
  const rate = (r: 0 | 1 | 2) => {
    if (!card) return;
    rateCard(card.id, r);
    record({ tags: card.tags, dim: card.dim, ok: r === 2, src: 'recall', item: card.id });
    setFlipped(false);
    setSkip([...skip.slice(-8), card.id]);
  };
  return (
    <div>
      <label className="row small">Thème :
        <select value={topic} onChange={(e) => { setTopic(e.target.value); setSkip([]); setFlipped(false); }}>
          <option value="all">Tous</option>
          {topics.map((t) => <option key={t.id} value={t.id}>{t.title}</option>)}
        </select>
        <span className="muted">{deck.filter((c) => topic === 'all' || c.topic === topic).length} cartes</span>
      </label>
      {card ? (
        <article className="flash card">
          <p className="flash-front" lang={card.dim === 'english' ? 'en' : 'fr'}><Rich text={card.front} /></p>
          {!flipped ? (
            <button type="button" className="primary" onClick={() => setFlipped(true)}>Réponds de tête, puis montre la réponse</button>
          ) : (
            <>
              <p className="flash-back" lang={card.dim === 'english' ? 'en' : 'fr'}><Rich text={card.back} /></p>
              <div className="row wrap">
                <button type="button" className="ghost" onClick={() => rate(0)}>À revoir</button>
                <button type="button" className="ghost" onClick={() => rate(1)}>Hésitant</button>
                <button type="button" className="primary" onClick={() => rate(2)}>Je savais</button>
              </div>
            </>
          )}
          <p className="small muted">Boîte {p.cards[card.id]?.box ?? 0}/5 · les cartes ratées reviennent en premier.</p>
        </article>
      ) : (
        <p className="card">Plus de carte dans ce thème pour l’instant. <button type="button" className="link" onClick={() => setSkip([])}>Recommencer</button></p>
      )}
    </div>
  );
}
