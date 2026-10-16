// Topics, mastery-map nodes and observed exam history.
// History is OBSERVED in six past finals (2020–2025) — never a probability of appearance.
// "dossier §1" = counts stated in the dossier; "recompté §16" = recounted from the dossier's exam map.

export type History = { years: number[]; label: string; basis: 'dossier §1' | 'recompté §16' | 'aucun comptage' };

export type Topic = {
  id: string;
  title: string;
  en: string;
  lecture: string;
  refs: string[];
  nodes: string[]; // map nodes covered (first = primary)
  history: History[];
  formulas: string[]; // §17 ids
  graphs: string[]; // §20.3 ids
  lesson?: string;
};

const ALL = [2020, 2021, 2022, 2023, 2024, 2025];

export const TOPICS: Topic[] = [
  { id: 'sd', lesson: 'sd-guided', title: 'Offre, demande et équilibre', en: 'Supply and demand', lecture: 'L2', refs: ['3', '2.4'], nodes: ['sd', 'marginal'],
    history: [{ years: ALL, label: 'outil d’équilibre dans des questions de chaque sujet (ex. E2020 Q3a, E2021 Q2a, E2024 Q1d)', basis: 'recompté §16' }],
    formulas: ['F01', 'F02'], graphs: ['G1'] },
  { id: 'consumer', lesson: 'consumer-guided', title: 'Choix du consommateur', en: 'Consumer choice', lecture: 'L3–L4', refs: ['4'], nodes: ['consumer'],
    history: [{ years: ALL, label: 'définitions Q5 chaque année (MRS, indifférence, substituts/compléments parfaits, Engel, bien normal/inférieur) ; compensation E2022 Q5', basis: 'recompté §16' }],
    formulas: ['F03', 'F04', 'F05', 'F06'], graphs: ['G2', 'G3'] },
  { id: 'elasticity', lesson: 'elasticity-guided', title: 'Élasticités', en: 'Elasticities', lecture: 'L4, A2', refs: ['5'], nodes: ['elasticity'],
    history: [{ years: ALL, label: 'Q5 2020–2023 (calcul, unitaire, croisée, revenu) ; incidence ou marge en E2021 Q2c, E2024 Q2a, E2025 Q2a', basis: 'recompté §16' }],
    formulas: ['F07', 'F08', 'F09', 'F10'], graphs: [] },
  { id: 'costs', lesson: 'costs-guided', title: 'Production, coûts et offre concurrentielle', en: 'Production, costs, competitive supply', lecture: 'L5–L6', refs: ['6'], nodes: ['costs', 'mc', 'pc'],
    history: [{ years: ALL, label: 'rendements d’échelle en Q5 chaque année ; offre et arrêt E2020 Q5, E2024 Q5 ; isoquante/isocoût', basis: 'recompté §16' }],
    formulas: ['F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18'], graphs: ['G4', 'G5'] },
  { id: 'welfare', lesson: 'welfare-guided', title: 'Surplus, taxes, subventions, prix réglementés', en: 'Welfare, taxes, subsidies', lecture: 'L7', refs: ['7'], nodes: ['welfare', 'dwl', 'taxes'],
    history: [{ years: ALL, label: 'taxes, subventions ou réglementation avec raisonnement de surplus (inclut droits de douane et plafond en 2023)', basis: 'dossier §1' }],
    formulas: ['F19', 'F20', 'F21', 'F22', 'F23', 'F24'], graphs: ['G6', 'G7', 'G8'] },
  { id: 'monopoly', lesson: 'monopoly-guided', title: 'Monopole et concurrence monopolistique', en: 'Monopoly', lecture: 'L8', refs: ['8'], nodes: ['monopoly'],
    history: [{ years: ALL, label: 'pouvoir de marché et tarification/discrimination', basis: 'dossier §1' }],
    formulas: ['F25', 'F26', 'F27'], graphs: ['G9'] },
  { id: 'pd', lesson: 'pd-guided', title: 'Discrimination, bundling et tarifs', en: 'Price discrimination', lecture: 'L9', refs: ['9'], nodes: ['pd'],
    history: [{ years: ALL, label: 'présent dans les six anciens examens (L9)', basis: 'dossier §1' }],
    formulas: ['F28', 'F29'], graphs: ['G10', 'G11'] },
  { id: 'oligopoly', lesson: 'oligopoly-guided', title: 'Oligopole : Cournot, Bertrand, Stackelberg', en: 'Oligopoly', lecture: 'L10', refs: ['10'], nodes: ['oligopoly'],
    history: [
      { years: [2020, 2021, 2022, 2023], label: 'calcul d’équilibre Cournot (comparaison qualitative aussi en 2025)', basis: 'dossier §1' },
      { years: [2024, 2025], label: 'Bertrand différencié', basis: 'dossier §1' },
      { years: [2021, 2024], label: 'leadership séquentiel numérique', basis: 'dossier §1' },
    ],
    formulas: ['F30', 'F31', 'F32', 'F33'], graphs: ['G12', 'G13', 'G14'] },
  { id: 'ext', title: 'Externalités et pollution', en: 'Externalities', lecture: 'L11', refs: ['11.1', '11.2', '11.3', '11.4', '11.5', '11.6'], nodes: ['ext', 'pigou'],
    history: [{ years: [2020, 2021, 2023, 2024, 2025], label: 'externalités explicitement traitées', basis: 'dossier §1' }],
    formulas: ['F34', 'F35', 'F36'], graphs: ['G15', 'G16', 'G17'], lesson: 'ext-positive' },
  { id: 'public', lesson: 'public-guided', title: 'Biens publics et ressources communes', en: 'Public goods, commons', lecture: 'L11', refs: ['11.7', '11.8', '11.9'], nodes: ['public'],
    history: [
      { years: [2020, 2021, 2022, 2024, 2025], label: 'biens publics au sens strict', basis: 'dossier §1' },
      { years: [2023], label: 'ressource commune (spectre) — public OU commun : 6/6', basis: 'dossier §1' },
    ],
    formulas: ['F37', 'F44'], graphs: ['G18'] },
  { id: 'info', lesson: 'info-guided', title: 'Information asymétrique et contrats', en: 'Asymmetric information', lecture: 'L12', refs: ['12'], nodes: ['ev', 'asym', 'adverse', 'moral', 'ic'],
    history: [{ years: ALL, label: 'information asymétrique', basis: 'dossier §1' }],
    formulas: ['F38', 'F39', 'F40'], graphs: [] },
  { id: 'games', lesson: 'games-guided', title: 'Théorie des jeux', en: 'Game theory', lecture: 'A3', refs: ['13'], nodes: ['games'],
    history: [{ years: [], label: 'pas de comptage dans le dossier ; Assignment 3 seulement (Nash réutilisé en oligopole)', basis: 'aucun comptage' }],
    formulas: [], graphs: ['G22'] },
  { id: 'complements', lesson: 'complements-guided', title: 'Commerce, plateformes, enchères, Edgeworth', en: 'Trade, platforms, auctions', lecture: 'L13–L14', refs: ['14'], nodes: ['trade', 'complements'],
    history: [
      { years: [2020, 2021, 2022, 2024, 2025], label: 'commerce international ou avantage comparatif', basis: 'dossier §1' },
      { years: [2023, 2025], label: 'enchères explicites', basis: 'dossier §1' },
      { years: [2022, 2025], label: 'plateformes / effets de réseau', basis: 'dossier §1' },
    ],
    formulas: ['F41', 'F42', 'F43'], graphs: ['G19', 'G20', 'G21'] },
];

export const topicById = (id: string) => TOPICS.find((t) => t.id === id);

export type MapNode = { id: string; label: string; sub: string; topic: string; prereqs: string[]; col: number; row: number; refs: string[] };

// Causal prerequisite map. Columns flow left → right: every prerequisite sits in an earlier column.
export const NODES: MapNode[] = [
  { id: 'sd', label: 'Offre & demande', sub: 'L2 · §3', topic: 'sd', prereqs: [], col: 0, row: 1, refs: ['3'] },
  { id: 'elasticity', label: 'Élasticités', sub: 'L4 · §5', topic: 'elasticity', prereqs: ['sd'], col: 1, row: 0, refs: ['5'] },
  { id: 'marginal', label: 'Raisonnement marginal', sub: '§2.1', topic: 'sd', prereqs: ['sd'], col: 1, row: 1, refs: ['2.1'] },
  { id: 'consumer', label: 'Choix du consommateur', sub: 'L3–L4 · §4', topic: 'consumer', prereqs: ['marginal'], col: 2, row: 0, refs: ['4'] },
  { id: 'welfare', label: 'Surplus & bien-être', sub: 'L7 · §7.1', topic: 'welfare', prereqs: ['sd', 'marginal'], col: 2, row: 1, refs: ['7.1'] },
  { id: 'dwl', label: 'Perte sèche (DWL)', sub: 'L7 · §7.1', topic: 'welfare', prereqs: ['welfare'], col: 3, row: 1, refs: ['7.1', '11.2'] },
  { id: 'taxes', label: 'Taxes, subventions, plafonds', sub: 'L7 · §7.2–7.4', topic: 'welfare', prereqs: ['dwl', 'elasticity'], col: 4, row: 0, refs: ['7.2', '7.3', '7.4'] },
  { id: 'ext', label: 'Externalités', sub: 'L11 · §11.1–11.2', topic: 'ext', prereqs: ['dwl', 'mc'], col: 4, row: 1, refs: ['11.1', '11.2'] },
  { id: 'trade', label: 'Commerce & droits de douane', sub: '§14.1–14.3', topic: 'complements', prereqs: ['taxes'], col: 5, row: 0, refs: ['14.1', '14.2'] },
  { id: 'pigou', label: 'Taxe / subvention pigouvienne', sub: 'L11 · §11.3', topic: 'ext', prereqs: ['ext', 'taxes'], col: 5, row: 1, refs: ['11.3'] },
  { id: 'public', label: 'Biens publics & communs', sub: 'L11 · §11.7–11.9', topic: 'public', prereqs: ['ext', 'welfare'], col: 5, row: 2, refs: ['11.8'] },
  { id: 'costs', label: 'Production & coûts', sub: 'L5 · §6.1–6.4', topic: 'costs', prereqs: ['marginal'], col: 2, row: 3, refs: ['6.4'] },
  { id: 'mc', label: 'Coût marginal (MC)', sub: 'L5 · §6.4', topic: 'costs', prereqs: ['costs'], col: 3, row: 3, refs: ['6.4'] },
  { id: 'pc', label: 'Concurrence parfaite', sub: 'L6 · §6.5–6.7', topic: 'costs', prereqs: ['mc', 'sd'], col: 4, row: 3, refs: ['6.5', '6.6'] },
  { id: 'monopoly', label: 'Monopole : MR = MC', sub: 'L8 · §8', topic: 'monopoly', prereqs: ['pc', 'elasticity'], col: 5, row: 3, refs: ['8.1', '8.2'] },
  { id: 'oligopoly', label: 'Cournot / Bertrand / Stackelberg', sub: 'L10 · §10', topic: 'oligopoly', prereqs: ['monopoly', 'games'], col: 6, row: 3, refs: ['10.1'] },
  { id: 'pd', label: 'Discrimination & tarifs', sub: 'L9 · §9', topic: 'pd', prereqs: ['monopoly'], col: 6, row: 4, refs: ['9.1'] },
  { id: 'ev', label: 'Valeur espérée', sub: '§2.2', topic: 'info', prereqs: [], col: 0, row: 5, refs: ['2.2'] },
  { id: 'asym', label: 'Information asymétrique', sub: 'L12 · §12.1', topic: 'info', prereqs: ['ev'], col: 1, row: 5, refs: ['12.1'] },
  { id: 'moral', label: 'Aléa moral', sub: 'L12 · §12.4–12.6', topic: 'info', prereqs: ['asym'], col: 2, row: 5, refs: ['12.4', '12.5'] },
  { id: 'adverse', label: 'Antisélection', sub: 'L12 · §12.2–12.3', topic: 'info', prereqs: ['asym'], col: 2, row: 6, refs: ['12.2', '12.3'] },
  { id: 'ic', label: 'Contraintes IC / IR', sub: 'L9 · L12 · §12.5', topic: 'info', prereqs: ['moral'], col: 3, row: 5, refs: ['12.5', '9.2'] },
  { id: 'games', label: 'Théorie des jeux (Nash)', sub: 'A3 · §13', topic: 'games', prereqs: [], col: 4, row: 5, refs: ['13.1'] },
  { id: 'complements', label: 'Plateformes, enchères, Edgeworth', sub: '§14.4–14.6', topic: 'complements', prereqs: ['games', 'consumer'], col: 5, row: 6, refs: ['14.4', '14.5', '14.6'] },
];

export const nodeById = (id: string) => NODES.find((n) => n.id === id);

/** Number of nodes that (transitively) depend on this one: a computed measure of conceptual importance. */
export function downstream(id: string): number {
  const seen = new Set<string>();
  const walk = (x: string) => NODES.filter((n) => n.prereqs.includes(x)).forEach((n) => { if (!seen.has(n.id)) { seen.add(n.id); walk(n.id); } });
  walk(id);
  return seen.size;
}

/** Final date stated in L1 p.17–18 — to be checked against the student's own convocation. */
export const EXAM_DATE = new Date('2026-10-23T08:00:00+02:00'); // Friday 23 October, 08:00 Stockholm time
