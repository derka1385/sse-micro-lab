// Pedagogical decode layer for abbreviations. English/French names follow the dossier's §18;
// "literal / who / marginal / units / curve" are pedagogical complements written for this app.
// Abbreviations not listed here fall back to the parsed §18 entry.

export type Tone = 'buyer' | 'producer' | 'third' | 'society' | 'gov' | 'dwl' | 'neutral';

export type Gloss = {
  key: string;
  english: string;
  french: string;
  literal: string;
  who?: string;
  marginal?: string;
  units?: string;
  curve?: string;
  note?: string;
  tone: Tone;
  concept?: string; // id in CONCEPTS (full sheet)
  ref?: string;
};

const g = (x: Gloss) => x;

export const GLOSS: Record<string, Gloss> = Object.fromEntries(
  [
    g({ key: 'MPB', english: 'Marginal Private Benefit', french: 'bénéfice marginal privé', tone: 'buyer', concept: 'MPB', ref: '11.1',
      literal: 'la valeur, pour l’acheteur, d’UNE unité supplémentaire',
      who: 'l’acheteur — et lui seul', marginal: 'l’unité suivante, pas l’ensemble des unités',
      units: '€ par unité', curve: 'la courbe de demande (forme inverse : p en fonction de Q)' }),
    g({ key: 'MPC', english: 'Marginal Private Cost', french: 'coût marginal privé', tone: 'producer', concept: 'MPC', ref: '11.1',
      literal: 'ce que coûte au producteur la fabrication d’UNE unité supplémentaire',
      who: 'le producteur', marginal: 'l’unité suivante', units: '€ par unité',
      curve: 'la courbe d’offre en concurrence (p = MC)', note: 'Le dossier note aussi PMC ou MC_p (E2024).' }),
    g({ key: 'MEB', english: 'Marginal External Benefit', french: 'bénéfice marginal externe', tone: 'third', concept: 'MEB', ref: '11.1',
      literal: 'le bénéfice créé pour les AUTRES par UNE unité supplémentaire',
      who: 'les tiers — des gens hors de la transaction', marginal: 'ce qu’apporte l’unité suivante, pas le total',
      units: '€ par unité', curve: 'l’écart vertical entre MPB et MSB' }),
    g({ key: 'MSB', english: 'Marginal Social Benefit', french: 'bénéfice marginal social', tone: 'society', concept: 'MSB', ref: '11.1',
      literal: 'la valeur d’UNE unité supplémentaire pour toute la société : acheteur + tiers',
      who: 'la société entière — ce n’est ni l’État ni un budget', marginal: 'l’unité suivante',
      units: '€ par unité', curve: 'MPB décalée vers le haut de MEB', note: 'Aussi noté SMB.' }),
    g({ key: 'MEC', english: 'Marginal External Cost', french: 'coût marginal externe', tone: 'third', concept: 'MEC', ref: '11.1',
      literal: 'le dommage imposé aux AUTRES par UNE unité supplémentaire',
      who: 'les tiers (riverains, victimes de la pollution)', marginal: 'le dommage de l’unité suivante, pas le dommage total',
      units: '€ par unité', curve: 'l’écart vertical entre MPC et MSC', note: 'Noté MC_e dans E2024.' }),
    g({ key: 'MSC', english: 'Marginal Social Cost', french: 'coût marginal social', tone: 'society', concept: 'MSC', ref: '11.1',
      literal: 'le coût d’UNE unité supplémentaire pour toute la société : producteur + tiers',
      who: 'la société entière', marginal: 'l’unité suivante', units: '€ par unité',
      curve: 'MPC décalée vers le haut de MEC', note: 'Aussi noté SMC.' }),
    g({ key: 'DWL', english: 'Deadweight Loss', french: 'perte sèche', tone: 'dwl', concept: 'DWL', ref: '7.1',
      literal: 'le surplus social net qu’on aurait pu créer et qui n’existe pas (ou qui est détruit)',
      who: 'personne ne le reçoit : c’est une perte pour tout le monde', units: '€ (une aire : €/unité × unités)',
      curve: 'aire entre MSB et MSC, entre la quantité observée et Q*' }),
    g({ key: 'Qm', english: 'Market (private) equilibrium quantity', french: 'quantité d’équilibre du marché', tone: 'neutral', concept: 'Qm', ref: '11.1',
      literal: 'la quantité que le marché, laissé à lui-même, échange : là où MPB = MPC',
      units: 'unités', curve: 'intersection de MPB et MPC', note: 'Le dossier écrit Qpriv.' }),
    g({ key: 'Q*', english: 'Socially optimal (efficient) quantity', french: 'quantité socialement optimale', tone: 'society', concept: 'Qstar', ref: '18:Q*',
      literal: 'ici : la quantité qui maximise le bien-être total, là où MSB = MSC',
      units: 'unités', curve: 'intersection de MSB et MSC',
      note: 'Attention (§18.3) : ailleurs, une étoile désigne parfois juste une solution d’équilibre. Lis la définition locale. Le dossier écrit aussi Qeff / Qopt.' }),
    g({ key: 's', english: 'Unit subsidy', french: 'subvention unitaire', tone: 'gov', concept: 'pigou', ref: '7.3',
      literal: 'le montant versé par l’État pour CHAQUE unité échangée',
      who: 'payée par l’État (les contribuables), reçue par acheteurs/vendeurs', units: '€ par unité',
      curve: 'écart vertical entre prix reçu par le vendeur et prix payé par l’acheteur' }),
    g({ key: 's*', english: 'Optimal (Pigouvian) subsidy', french: 'subvention optimale (pigouvienne)', tone: 'gov', concept: 'pigou', ref: '11.3',
      literal: 'la subvention par unité qui amène le marché exactement à Q* : s* = MEB(Q*)',
      units: '€ par unité' }),
    g({ key: 't', english: 'Unit tax', french: 'taxe unitaire', tone: 'gov', ref: '7.2',
      literal: 'le montant prélevé par l’État sur CHAQUE unité échangée', units: '€ par unité',
      curve: 'écart vertical entre prix payé (p_b) et prix reçu (p_s)' }),
    g({ key: 't*', english: 'Optimal (Pigouvian) tax', french: 'taxe optimale (pigouvienne)', tone: 'gov', ref: '11.3',
      literal: 'la taxe par unité qui amène le marché exactement à Q* : t* = MEC(Q*)', units: '€ par unité' }),
    g({ key: 'p_b', english: 'Buyer price', french: 'prix payé par l’acheteur', tone: 'buyer', ref: '7.2',
      literal: 'ce que l’acheteur débourse réellement par unité', units: '€ par unité', curve: 'se lit sur la demande (MPB) à la quantité échangée' }),
    g({ key: 'p_s', english: 'Seller price', french: 'prix reçu par le vendeur', tone: 'producer', ref: '7.2',
      literal: 'ce que le vendeur encaisse réellement par unité (taxe déduite, subvention ajoutée)', units: '€ par unité', curve: 'se lit sur l’offre (MPC) à la quantité échangée' }),
    g({ key: 'CS', english: 'Consumer Surplus', french: 'surplus du consommateur', tone: 'buyer', ref: '7.1',
      literal: 'pour chaque unité achetée : sa valeur pour l’acheteur moins le prix payé — additionné sur toutes les unités',
      who: 'les acheteurs', units: '€', curve: 'aire sous la demande, au-dessus du prix payé' }),
    g({ key: 'PS', english: 'Producer Surplus', french: 'surplus du producteur', tone: 'producer', ref: '7.1',
      literal: 'pour chaque unité vendue : le prix reçu moins son coût marginal — additionné (= recette − coût variable)',
      who: 'les vendeurs', units: '€', curve: 'aire au-dessus de l’offre, sous le prix reçu', note: 'PS ≠ profit : profit = PS − FC.' }),
    g({ key: 'W', english: 'Welfare (total surplus)', french: 'bien-être (surplus total)', tone: 'society', ref: '7.1',
      literal: 'la somme de tous les gains nets : CS + PS + recettes de l’État − dépenses + effets externes', units: '€' }),
    g({ key: 'MB', english: 'Marginal Benefit', french: 'bénéfice marginal', tone: 'buyer', ref: '18:MB',
      literal: 'ce que vaut l’unité suivante pour celui qui en profite (sa WTP pour cette unité)', units: '€ par unité' }),
    g({ key: 'MC', english: 'Marginal Cost', french: 'coût marginal', tone: 'producer', ref: '6.4',
      literal: 'le coût de l’unité suivante : dTC/dQ', units: '€ par unité',
      curve: 'coupe ATC et AVC en leur minimum', note: 'Ne dépend pas du coût fixe.' }),
    g({ key: 'MR', english: 'Marginal Revenue', french: 'recette marginale', tone: 'producer', ref: '8.1',
      literal: 'la recette en plus quand la firme vend UNE unité de plus : dR/dQ',
      units: '€ par unité', curve: 'en monopole, sous la demande : MR = p + Q·p′(Q) < p',
      note: 'Le prix se lit sur la DEMANDE, jamais sur MR.' }),
    g({ key: 'MU', english: 'Marginal Utility', french: 'utilité marginale', tone: 'buyer', ref: '4.1',
      literal: 'l’utilité ajoutée par une unité de plus d’un bien, l’autre bien restant fixe', units: 'unités d’utilité (ordinales)' }),
    g({ key: 'MRS', english: 'Marginal Rate of Substitution', french: 'taux marginal de substitution', tone: 'buyer', ref: '4.2',
      literal: 'combien d’un bien le consommateur accepte de céder pour une unité de plus de l’autre, en restant aussi satisfait (MU_x/MU_y)',
      curve: 'pente (en valeur absolue) de la courbe d’indifférence' }),
    g({ key: 'MRTS', english: 'Marginal Rate of Technical Substitution', french: 'taux marginal de substitution technique', tone: 'producer', ref: '6.2',
      literal: 'combien de capital la firme économise grâce à une unité de travail en plus, à production égale (MP_L/MP_K)',
      curve: 'pente (en valeur absolue) de l’isoquante' }),
    g({ key: 'MP', english: 'Marginal Product', french: 'produit marginal', tone: 'producer', ref: '6.1',
      literal: 'l’output en plus obtenu avec une unité d’input en plus, les autres inputs fixés', units: 'output par unité d’input' }),
    g({ key: 'ATC', english: 'Average Total Cost', french: 'coût total moyen', tone: 'producer', ref: '6.4',
      literal: 'le coût total divisé par la quantité : TC/Q', units: '€ par unité', note: 'Seuil de sortie à long terme : p < min ATC.' }),
    g({ key: 'AVC', english: 'Average Variable Cost', french: 'coût variable moyen', tone: 'producer', ref: '6.4',
      literal: 'le coût variable divisé par la quantité : VC/Q', units: '€ par unité', note: 'Seuil d’arrêt à court terme : p < min AVC.' }),
    g({ key: 'AFC', english: 'Average Fixed Cost', french: 'coût fixe moyen', tone: 'producer', ref: '6.4', literal: 'FC/Q', units: '€ par unité' }),
    g({ key: 'FC', english: 'Fixed Cost', french: 'coût fixe', tone: 'producer', ref: '6.4',
      literal: 'un coût qui ne varie pas avec Q dans l’horizon étudié', units: '€', note: 'F peut aussi désigner un frais fixe encaissé (abonnement) : vérifier le rôle.' }),
    g({ key: 'VC', english: 'Variable Cost', french: 'coût variable', tone: 'producer', ref: '6.4', literal: 'la partie du coût qui varie avec Q', units: '€' }),
    g({ key: 'TC', english: 'Total Cost', french: 'coût total', tone: 'producer', ref: '6.4', literal: 'TC = FC + VC(Q)', units: '€' }),
    g({ key: 'IC', english: 'Incentive Compatibility', french: 'compatibilité des incitations', tone: 'neutral', ref: '9.2',
      literal: 'le choix que le concepteur veut obtenir est bien le meilleur choix de l’agent' }),
    g({ key: 'IR', english: 'Individual Rationality', french: 'rationalité individuelle (participation)', tone: 'neutral', ref: '9.2',
      literal: 'le contrat vaut au moins autant que l’option extérieure : l’agent accepte de participer' }),
    g({ key: 'WTP', english: 'Willingness To Pay', french: 'disposition à payer', tone: 'buyer', ref: '18:WTP',
      literal: 'le prix maximal qu’une personne accepte de payer pour une unité', units: '€ par unité' }),
    g({ key: 'MAC', english: 'Marginal Abatement Cost', french: 'coût marginal d’abattement', tone: 'producer', ref: '11.4',
      literal: 'ce que coûte la réduction d’UNE unité de pollution supplémentaire', units: '€ par unité de pollution', note: 'Pas « marginal average cost ».' }),
  ].map((x) => [x.key, x]),
);

export const TONE_VAR: Record<Tone, string> = {
  buyer: 'var(--buyer)',
  producer: 'var(--producer)',
  third: 'var(--third)',
  society: 'var(--society)',
  gov: 'var(--gov)',
  dwl: 'var(--dwl)',
  neutral: 'var(--ink-2)',
};
