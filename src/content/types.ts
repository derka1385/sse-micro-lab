export type Dim = 'intuition' | 'terminology' | 'formula' | 'graph' | 'calculation' | 'recognition' | 'english';

export const DIMS: { id: Dim; label: string; hint: string }[] = [
  { id: 'intuition', label: 'Intuition', hint: 'expliquer le mécanisme avec des acteurs' },
  { id: 'terminology', label: 'Vocabulaire', hint: 'décoder chaque sigle' },
  { id: 'formula', label: 'Reconstruire la formule', hint: 'retrouver l’équation à partir des acteurs' },
  { id: 'graph', label: 'Lire le graphique', hint: 'courbes, points, aires' },
  { id: 'calculation', label: 'Calcul', hint: 'résoudre sans erreur' },
  { id: 'recognition', label: 'Reconnaître le modèle', hint: 'identifier le modèle dans un énoncé' },
  { id: 'english', label: 'Réponse d’examen (EN)', hint: 'réponse SSE concise en anglais' },
];

/** doc = documented in the dossier · recalc = result recalculated in the dossier · peda = pedagogical complement */
export type Prov = { kind: 'doc' | 'recalc' | 'peda'; ref?: string; note?: string };

export type Choice = { text: string; correct?: boolean; feedback: string; mis?: string };
export type Trap = { value: number; feedback: string; mis?: string };
export type RubricItem = { id: string; label: string; patterns: RegExp[] };

type CheckBase = { id: string; q: string; dim: Dim; tags: string[]; explain?: string };
export type Check =
  | (CheckBase & { kind: 'choice'; options: Choice[] })
  | (CheckBase & { kind: 'numeric'; answer: number; tol?: number; unit?: string; hint?: string; traps?: Trap[] })
  | (CheckBase & { kind: 'order'; items: string[] })
  | (CheckBase & { kind: 'build'; lhs: string; tokens: string[]; accept: string[][]; traps?: { seq: string[]; feedback: string; mis?: string }[] })
  | (CheckBase & { kind: 'pick'; target: number; tol: number })
  | (CheckBase & { kind: 'text'; rubric: RubricItem[]; model: string; lang?: 'en' | 'fr' });

/** Graph elements: curves, markers, areas. */
export type El =
  | 'MPB' | 'MPC' | 'MEB' | 'MSB' | 'MEC' | 'MSC' | 'POL'
  | 'QM' | 'QS' | 'QP' | 'PRICES'
  | 'CS' | 'PS' | 'GOV' | 'EXT' | 'DWL' | 'UNITS';

export type GraphView = { preset?: string; show: El[]; focus?: El; policy?: number; cursor?: number; policyControl?: boolean };

export type ActorId = 'buyer' | 'producer' | 'third' | 'planner' | 'gov';
export type Actor = { name: string; short: string; role: string; wants: string; color: string };

export type Block = {
  id: string;
  title: string;
  human: string; // level A — real people, real incentives
  economist?: string; // level B — vocabulary and abbreviations
  exam?: string; // level C — concise SSE English
  decode?: string[]; // abbreviations introduced here (full decode card)
  reveal?: { q: string; options: Choice[]; formula: string; after?: string; tags: string[] }; // earned formula
  callout?: { kind: 'warn' | 'analogy'; title: string; text: string };
  why: string[]; // each click goes one causal layer deeper
  example: string;
  me: string; // "Si c'était moi ?" — the mechanism with the student as one of the agents
  graphNote: string;
  graph: GraphView;
  checks?: Check[];
  result?: [label: string, value: string]; // what the block earns, set large once its checks pass
  actors?: Partial<Record<ActorId, string>>; // what each actor "sees", revealed progressively
  focusActors?: ActorId[];
  prov: Prov[];
  special?: 'chain' | 'teachback' | 'exam' | 'finish';
};

export type ChainStep = { text: string; because: string };
export type TeachLink = { id: string; label: string; explain: string; patterns: RegExp[]; term?: RegExp; termHint?: string };
export type TeachError = { mis: string; patterns: RegExp[]; refine: string };
export type TeachRubric = { prompt: string; links: TeachLink[]; errors: TeachError[]; model: string };

export type Lesson = {
  id: string;
  node: string; // mastery-map node
  title: string;
  mechanism: string;
  teaser: string;
  actors: Record<ActorId, Actor>;
  blocks: Block[];
  chain: ChainStep[];
  teach: TeachRubric;
  examId: string;
  ladder: Check[][]; // spaced reconstruction: level 1..5, variants per level
};

export type Concept = {
  id: string;
  name: string;
  englishName: string;
  frenchName: string;
  abbreviation?: string;
  literalMeaning: string;
  actors: ActorId[];
  intuition: string;
  causalChain: string[];
  formula?: string[];
  units?: string;
  graphMeaning?: string;
  assumptions: string[];
  whenToUse: string[];
  whenNotToUse: string[];
  misconceptions: string[];
  examples: string[];
  examTriggers: string[];
  examAnswer: string;
  sourceRefs: string[];
  levels: { human: string; economist: string; exam: string };
};

export type FormulaSheet = {
  id: string;
  title: string;
  formula: string;
  derivation: string[]; // the questions that make the formula inevitable
  terms: { sym: string; meaning: string }[];
  units: string;
  assumptions: string[];
  use: string[];
  notUse: string[];
  confusion: string;
  triggers: string[];
  refs: string[];
};

export type WhyItem = { id: string; group: 'Formules' | 'Courbes' | 'Résultats' | 'Zones'; title: string; formula?: string; layers: string[]; refs: string[] };

export type Step = {
  id: string; q: string; answer: number; tol?: number; unit?: string;
  dim: Dim; tags: string[]; explain: string; traps?: Trap[]; reveal?: El[];
  policy?: number; // policy shown on the graph once this step is solved
};
export type Problem = { id: string; title: string; ref: string; prov: Prov['kind']; context: string; preset?: string; show?: El[]; steps: Step[] };

export type ExamPart =
  | { kind: 'num'; id: string; prompt: string; answers: { label: string; value: number; tol?: number }[]; explain: string; tags: string[] }
  | { kind: 'choice'; id: string; prompt: string; options: Choice[]; tags: string[] }
  | { kind: 'text'; id: string; prompt: string; rubric: RubricItem[]; model: string; tags: string[] };

export type ExamQuestion = {
  id: string; title: string; ref: string; note: string;
  statement: string; parts: ExamPart[];
  logic: string[]; calc: string[]; graph: string[]; modelAnswer: string;
  practice?: string; // practice problem id
};
