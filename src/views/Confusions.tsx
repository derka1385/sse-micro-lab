import { useState } from 'react';
import { TOPICS } from '../content/catalog';
import { PAIRS, type Pair } from '../content/training';
import { Rich, SourceRef } from '../components/text';
import { normalize } from '../components/TeachBack';
import { record, useProgress } from '../store';
import { ArrowLeft, Caution, Check } from '../components/icons';

export function Confusions({ id }: { id?: string }) {
  const p = useProgress();
  const pair = PAIRS.find((x) => x.id === id);
  if (pair) return <PairRunner key={pair.id} pair={pair} />;
  return (
    <div className="page">
      <header className="page-head">
        <h1>Deux notions proches : explique la différence</h1>
        <p className="lead">Écris d’abord ta propre distinction (français ou anglais). Ensuite seulement, compare avec le contraste du dossier.</p>
      </header>
      <div className="pairs">
        {PAIRS.map((x) => {
          const tries = p.attempts.filter((a) => a.src === 'confusion' && a.item === x.id);
          const ok = tries.some((a) => a.ok);
          return (
            <a key={x.id} href={`#/confusions/${x.id}`} className="pair-card">
              <span className="pair-a">{x.a.term}</span>
              <span className="pair-vs">vs</span>
              <span className="pair-b">{x.b.term}</span>
              <span className="muted small">
                {TOPICS.find((t) => t.id === x.topic)?.title}
                {tries.length > 0 && <span className="status"> · {ok ? <Check size={13} label="réussi" /> : <Caution size={13} label="à retravailler" />}</span>}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function PairRunner({ pair }: { pair: Pair }) {
  const [text, setText] = useState('');
  const [ticks, setTicks] = useState<boolean[] | null>(null);
  const [saved, setSaved] = useState(false);
  const compare = () => {
    const n = normalize(text);
    setTicks(pair.points.map((pt) => pt.patterns.every((re) => re.test(n))));
  };
  return (
    <div className="page">
      <a href="#/confusions" className="back"><ArrowLeft size={14} /> Confusions</a>
      <header className="page-head">
        <h1>{pair.a.term} <span className="muted">vs</span> {pair.b.term}</h1>
      </header>
      <article className="card">
        <p className="check-q">Explique la différence avec tes mots. Qui est concerné, qu’est-ce qui change, où cela se voit sur un graphique ?</p>
        <textarea rows={5} value={text} disabled={!!ticks} onChange={(e) => setText(e.target.value)} placeholder="Ta distinction…" />
        {!ticks ? (
          <button type="button" className="primary" disabled={text.trim().length < 20} onClick={compare}>Comparer</button>
        ) : (
          <>
            <div className="contrast">
              <div><span className="contrast-term">{pair.a.term}</span><p><Rich text={pair.a.text} /></p></div>
              <div><span className="contrast-term">{pair.b.term}</span><p><Rich text={pair.b.text} /></p></div>
            </div>
            <p className="key"><Rich text={pair.key} /></p>
            <p className="small muted">Coche les points que ta distinction contient vraiment (pré-cochés quand on les a détectés) :</p>
            {pair.points.map((pt, i) => (
              <label key={pt.label} className="tick">
                <input type="checkbox" checked={ticks[i]} disabled={saved} onChange={() => setTicks(ticks.map((x, j) => (j === i ? !x : x)))} />
                {pt.label}
              </label>
            ))}
            {!saved ? (
              <button type="button" className="primary" onClick={() => {
                const ok = ticks.filter(Boolean).length >= Math.ceil(pair.points.length * 0.67);
                record({ tags: [TOPICS.find((t) => t.id === pair.topic)?.nodes[0] ?? pair.topic], dim: 'terminology', ok, src: 'confusion', item: pair.id, mis: ok ? undefined : pair.mis });
                setSaved(true);
              }}>Valider</button>
            ) : (
              <p className="feedback good">Enregistré. {pair.mis ? 'Si cette confusion revient deux fois, une micro-leçon ciblée apparaîtra.' : ''}</p>
            )}
            <p className="small">Sources : {pair.refs.map((r) => <SourceRef key={r} r={r} />)}</p>
          </>
        )}
      </article>
    </div>
  );
}
