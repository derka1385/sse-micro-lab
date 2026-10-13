import { useMemo, useState, type ReactNode } from 'react';
import { TOPICS } from '../content/catalog';
import { SCENARIOS, type Scenario } from '../content/training';
import { shuffled } from '../components/learning';
import { Rich, SourceRef } from '../components/text';
import { record, useProgress } from '../store';
import { ArrowLeft, ArrowRight, Caution, Check } from '../components/icons';
import { t } from '../i18n';

function highlight(text: string, triggers: string[]): ReactNode[] {
  if (!triggers.length) return [text];
  const re = new RegExp(`(${triggers.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  return text.split(re).map((part, i) => (i % 2 === 1 ? <mark key={i}>{part}</mark> : part));
}

export function Recognition({ id }: { id?: string }) {
  const p = useProgress();
  const s = SCENARIOS.find((x) => x.id === id);
  if (s) return <ScenarioRunner key={s.id} s={s} />;
  const status = (sc: Scenario) => {
    const tries = p.attempts.filter((a) => a.src === 'recognition' && a.item === sc.id);
    if (!tries.length) return null;
    return tries.some((a) => a.ok && !a.assisted) ? <Check size={13} label={t('reconnu')} /> : <Caution size={13} label={t('à revoir')} />;
  };
  const random = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
  return (
    <div className="page">
      <header className="page-head">
        <h1>{t('D’abord le modèle, ensuite le calcul')}</h1>
        <p className="lead">{t('Contextes tirés de la carte des finals 2020–2025 (paraphrasés, en anglais). Avant de nommer le modèle : qui décide, que choisit-il, avec quelle information, y a-t-il un effet sur des tiers, un rival stratégique, un prix ou une quantité ?')}</p>
        <a className="button primary" href={`#/recognize/${random.id}`}>{t('Scénario au hasard')} <ArrowRight /></a>
      </header>
      {TOPICS.filter((tp) => SCENARIOS.some((x) => x.topic === tp.id)).map((tp) => (
        <section key={tp.id} className="rec-group">
          <h3>{tp.title}</h3>
          <div className="chips">
            {SCENARIOS.filter((x) => x.topic === tp.id).map((x) => (
              <a key={x.id} href={`#/recognize/${x.id}`} className="chip chip-link">{x.title} {status(x)}</a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ScenarioRunner({ s }: { s: Scenario }) {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [modelTries, setModelTries] = useState(0);
  const [done, setDone] = useState(false);
  const isModel = step >= s.qs.length;
  const question = isModel ? { label: t('Alors, quel modèle ?'), options: s.model } : s.qs[step];
  const opts = useMemo(() => shuffled(question.options, `${s.id}-${step}`), [question, s.id, step]);
  const right = picked !== null && opts[picked].correct;
  const next = SCENARIOS[(SCENARIOS.indexOf(s) + 1) % SCENARIOS.length];
  const topic = TOPICS.find((tp) => tp.id === s.topic);

  const choose = (i: number) => {
    if (right || done) return;
    setPicked(i);
    if (isModel) {
      const o = opts[i];
      record({ tags: [s.node], dim: 'recognition', ok: !!o.correct, src: 'recognition', item: s.id, mis: o.correct ? undefined : o.mis, assisted: !!o.correct && modelTries > 0 });
      setModelTries(modelTries + 1);
      if (o.correct) setDone(true);
    }
  };

  return (
    <div className="page">
      <a href="#/recognize" className="back"><ArrowLeft size={14} /> {t('Reconnaître le modèle')}</a>
      <header className="page-head">
        <h1>{s.title}</h1>
        <p className="meta">{topic?.title} · <SourceRef r={s.ref} /></p>
      </header>
      <article className="card">
        <blockquote className="scenario" lang="en">{done ? highlight(s.text, s.triggers) : s.text}</blockquote>
        {!done && (
          <>
            <p className="rec-progress small muted">{t('Question {i} / {n}', { i: Math.min(step + 1, s.qs.length + 1), n: s.qs.length + 1 })}</p>
            <p className="check-q">{question.label}</p>
            <div className="options">
              {opts.map((o, i) => (
                <button key={i} type="button" className={`option ${picked === i ? (o.correct ? 'right' : 'wrong') : ''}`} onClick={() => choose(i)}>{o.text}</button>
              ))}
            </div>
            {picked !== null && <p className={`feedback ${right ? 'good' : 'bad'}`}><Rich text={opts[picked].feedback} /></p>}
            {right && !isModel && <button type="button" className="primary" onClick={() => { setStep(step + 1); setPicked(null); }}>{t('Suivant')}</button>}
          </>
        )}
        {done && (
          <div className="rec-done">
            <p className="feedback good">{s.model.find((o) => o.correct)?.text}</p>
            <p><b>{t('Mots déclencheurs')}</b> {t('(surlignés) :')} {s.triggers.map((w) => <mark key={w} className="trigger">{w}</mark>)}</p>
            <p><Rich text={s.explain} /></p>
            <div className="row wrap">
              {s.practice && <a className="button primary" href={`#/practice/${s.practice}`}>{t('Passer au calcul')}</a>}
              {topic?.lesson && <a className="button" href={`#/lesson/${topic.lesson}`}>{t('Leçon guidée')}</a>}
              <a className="button" href={`#/recognize/${next.id}`}>{t('Scénario suivant')} <ArrowRight /></a>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
