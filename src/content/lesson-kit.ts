import type { Actor, ActorId, Block, Check, ExamQuestion, Lesson, Prov, TeachRubric } from './types';
import type { LessonDiagramSpec } from './lesson-diagrams';

export type TeachingBlock = Omit<Block, 'id' | 'graph' | 'graphNote' | 'prov'> & {
  id: string; refs: string[]; provenance?: Prov['kind']; diagram?: LessonDiagramSpec;
  graph?: Block['graph']; graphNote?: string;
};
export type LessonConfig = {
  id: string; topic: string; node: string; title: string; mechanism: string; teaser: string;
  actors: Record<ActorId, Actor>; blocks: TeachingBlock[]; chain: Lesson['chain']; teach: TeachRubric;
  exam: ExamQuestion; ladder: Check[][]; acceptance: { text: string; why: string[] }[];
};

export function actors(roles: Partial<Record<ActorId, [name: string, role: string, wants: string]>>): Record<ActorId, Actor> {
  const colors: Record<ActorId, string> = { buyer: 'var(--buyer)', producer: 'var(--producer)', third: 'var(--third)', planner: 'var(--society)', gov: 'var(--gov)' };
  return Object.fromEntries(Object.entries(colors).map(([id, color]) => {
    const [name, role, wants] = roles[id as ActorId] ?? ['Observateur', 'Aucun rôle actif dans cette situation.', 'Comprendre le résultat.'];
    return [id, { name, short: name.slice(0, 2).toUpperCase(), role, wants, color }];
  })) as Record<ActorId, Actor>;
}

export function guidedLesson(config: LessonConfig): Lesson {
  const qualify = (check: Check): Check => ({ ...check, id: `${config.id}:check:${check.id}`, tags: [...new Set([config.node, ...check.tags])] });
  const blocks: Block[] = config.blocks.map(({ refs, provenance, ...block }) => ({
    ...block, id: `${config.id}:${block.id}`, graph: block.graph ?? { show: [] },
    graphNote: block.graphNote ?? block.diagram?.note ?? '',
    checks: block.checks?.map(qualify),
    prov: refs.map((ref) => ({ kind: provenance ?? 'peda', ref, note: provenance === 'doc' ? 'Mécanisme du dossier' : provenance === 'recalc' ? 'Résultat recalculé dans le dossier' : 'Application pédagogique fondée sur le dossier' })),
  }));
  const last = blocks.at(-1)!;
  const tail = (special: NonNullable<Block['special']>, title: string, human: string): Block => ({
    id: `${config.id}:${special}`, title, human, special, graph: last.graph, diagram: last.diagram,
    graphNote: last.graphNote, why: config.chain.map((s) => s.because), example: config.teach.model,
    me: 'Explique la décision en te mettant à la place de chaque acteur, puis vérifie ce qui change quand sa contrainte change.',
    prov: [{ kind: 'peda', ref: config.exam.ref, note: 'Entraînement construit ; pas de corrigé officiel' }],
    checks: special === 'chain' ? [qualify({ kind: 'order', id: 'causal-order', q: 'Remets les causes et conséquences dans l’ordre.', items: config.chain.map((step) => step.text), dim: 'intuition', tags: [config.node], explain: 'Chaque étape explique pourquoi la suivante arrive. Reprends les liens « parce que » si tu hésites.' })] : undefined,
  });
  blocks.push(
    tail('chain', 'Relie les causes avant de calculer', 'Reconstruis le mécanisme dans l’ordre. Chaque flèche doit expliquer pourquoi l’étape suivante arrive.'),
    tail('teachback', 'Explique-le avec tes mots', config.teach.prompt),
    tail('exam', 'À toi : une réponse d’examen en anglais', 'Choisis le modèle, pose les relations et justifie le résultat. La correction apparaît après avoir rendu ta copie.'),
    tail('finish', 'Ce que tu sais reconstruire', 'Tu as parcouru le mécanisme. La compréhension se consolide maintenant par le rappel espacé, dans un autre contexte et sans regarder la leçon.'),
  );
  return { ...config, blocks, exam: { ...config.exam, parts: config.exam.parts.map((part) => ({ ...part, tags: [...new Set([config.node, ...part.tags])] })) }, examId: config.exam.id, ladder: config.ladder.map((level) => level.map(qualify)) };
}
