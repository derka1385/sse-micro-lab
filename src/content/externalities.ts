// Vertical slice: positive externality — solar panels (A6.3), with the rest of the externality topic
// (vaccines E2020 Q3, gasoline L11/E2023, textiles E2024) for practice, graph lab and exam mode.
// Numbers come from the dossier (§11, §15 A6, §16). Stories, analogies and the MEB = 30 − Q variant
// are pedagogical complements and are tagged as such.

import type { Lesson, Concept, FormulaSheet, WhyItem, Problem, ExamQuestion, Step } from './types';
import type { ExtModel } from '../econ';

const T = ['ext'];

export const SOLAR_LESSON: Lesson = {
  id: 'ext-positive',
  node: 'ext',
  title: 'Externalité positive — les panneaux solaires',
  mechanism: 'Externalités positives',
  teaser: 'Tu achètes des panneaux solaires. Tes voisins respirent mieux. Qui paie, qui gagne — et pourquoi le marché s’arrête trop tôt ?',
  actors: {
    buyer: { name: 'Toi, l’acheteur', short: 'A', role: 'achète pour son toit', wants: 'un panneau qui lui rapporte plus qu’il ne le paie', color: 'var(--buyer)' },
    producer: { name: 'Le fabricant', short: 'P', role: 'fabrique et vend', wants: 'un prix qui couvre le coût du panneau suivant', color: 'var(--producer)' },
    third: { name: 'Les voisins', short: 'T', role: 'hors de la transaction', wants: 'ils ne décident rien : ils respirent l’air de la ville', color: 'var(--third)' },
    planner: { name: 'La société', short: 'S', role: 'compte tout le monde', wants: 'le plus grand bien-être total', color: 'var(--society)' },
    gov: { name: 'L’État', short: 'É', role: 'taxe, subventionne', wants: 'aligner l’intérêt privé sur l’intérêt social', color: 'var(--gov)' },
  },
  blocks: [
    {
      id: 'scene',
      title: 'La scène',
      human: 'Tu veux installer des panneaux solaires sur ton toit. Un fabricant les vend. Tes voisins, eux, n’achètent rien — mais ils respirent l’air de la ville. Et l’État observe.',
      economist: 'Un marché concurrentiel (acheteurs, vendeurs price takers) dont l’échange a un effet sur des personnes qui n’y participent pas.',
      exam: 'A competitive market for solar panels, where each panel also affects people outside the transaction.',
      why: [
        'Une transaction a deux signataires — l’acheteur et le vendeur — mais ses conséquences physiques (moins de pollution) ne s’arrêtent pas à eux.',
        'Le prix ne « voit » que ce qui est payé. Les voisins ne paient rien et ne reçoivent rien de la transaction : leur gain n’apparaît dans aucun prix.',
        'C’est exactement ce que le cours appelle un effet sur un tiers non pris en compte dans la transaction (§11.1). On lui donnera son nom dans quelques étapes.',
      ],
      example: 'Comme un voisin qui fleurit son balcon : toute la rue en profite, mais lui seul a payé les fleurs.',
      me: 'Tu signes le bon de commande. Ton voisin n’a rien signé — mais demain il respire un air un peu plus propre grâce à toi.',
      graphNote: 'Le graphique est vide pour l’instant : on va le remplir acteur par acteur. Horizontalement, le nombre de panneaux Q ; verticalement, des € par panneau.',
      graph: { show: [], cursor: 10 },
      focusActors: ['buyer', 'producer', 'third', 'planner', 'gov'],
      checks: [
        {
          kind: 'choice', id: 'scene-1', dim: 'intuition', tags: T,
          q: 'Qui est affecté par ton achat sans participer à la transaction ?',
          options: [
            { text: 'Le fabricant', feedback: 'Il participe : c’est lui qui vend. Cherche quelqu’un qui n’a rien signé.' },
            { text: 'Tes voisins', correct: true, feedback: 'Oui. Ils ne paient rien, ne signent rien, mais l’électricité solaire remplace une électricité plus polluante dans l’air qu’ils respirent.' },
            { text: 'L’État', feedback: 'L’État n’est pas directement touché ici : il observe et pourra intervenir plus tard.' },
            { text: 'Personne', feedback: 'Regarde l’air que respirent tes voisins.' },
          ],
        },
      ],
      prov: [{ kind: 'doc', ref: '15:A6#6.3', note: 'exercice solaire A6.3' }, { kind: 'peda', note: 'mise en scène des acteurs' }],
    },
    {
      id: 'buyer',
      title: 'Que regarde l’acheteur ?',
      result: ['MPB(10), valeur du 10e panneau', '70 €'],
      human: 'Pour chaque panneau de plus, tu te poses une seule question : « combien vaut CE panneau supplémentaire pour moi ? » Le premier couvre tes usages les plus utiles ; les suivants servent des usages de moins en moins importants. Ta valeur pour « un panneau de plus » baisse donc à mesure que tu en as.',
      economist: 'La demande mesure le [[MPB]] : la disposition à payer (WTP) pour l’unité marginale. Dans A6 : {{MPB = 100 − 3Q}}.',
      exam: 'Consumers buy panels as long as their marginal private benefit (MPB) is at least the price.',
      decode: ['MPB'],
      callout: { kind: 'analogy', title: 'Toi → tous les acheteurs', text: 'Tu peux imaginer UN acheteur (toi). Sur le marché, la courbe {{MPB = 100 − 3Q}} range tous les acheteurs du plus enthousiaste au moins enthousiaste : le point Q donne la valeur du Q-ième panneau pour celui qui l’achète.' },
      why: [
        'La courbe descend parce que chaque panneau supplémentaire sert un usage moins important que le précédent (utilité marginale décroissante, §4.1).',
        'On raisonne « au marginal » parce que ta décision se prend unité par unité : acheter le 11e panneau ou pas. Ce qui compte, c’est ce que CE panneau ajoute (§2.1).',
        'C’est la demande : si le prix est p, tu achètes tant que le panneau suivant vaut au moins p pour toi. À chaque prix, la quantité achetée est celle où MPB = p. La courbe MPB EST la demande, en forme inverse (§2.4).',
      ],
      example: 'Ton 1er panneau alimente le frigo et l’éclairage (très utile). Le 8e chauffe la piscine (agréable, moins vital). Le 30e produit un surplus revendu presque rien.',
      me: 'Le vendeur te propose un panneau de plus à 70 €. Tu te demandes : « est-ce que CE panneau me rapporte au moins 70 € ? » Si oui, tu l’achètes. C’est tout ce que tu regardes.',
      graphNote: 'La courbe bleue MPB : sa hauteur au point Q = ce que vaut le Q-ième panneau pour l’acheteur. Déplace le curseur : au point Q = 10, elle vaut 70.',
      graph: { show: ['MPB'], focus: 'MPB', cursor: 10 },
      actors: { buyer: 'voit MPB : sa valeur du panneau suivant' },
      focusActors: ['buyer'],
      checks: [
        {
          kind: 'numeric', id: 'buyer-1', dim: 'calculation', tags: [...T, 'abbr:MPB'], answer: 70, unit: '€',
          q: 'Avec {{MPB = 100 − 3Q}}, combien vaut le 10e panneau pour l’acheteur ?',
          hint: 'Remplace Q par 10 — ou place le curseur du graphique sur Q = 10.',
          explain: 'MPB(10) = 100 − 3 × 10 = 70 €.',
          traps: [{ value: 100, feedback: '100 est la valeur du tout premier panneau (Q = 0). Le 10e vaut moins.' }],
        },
        {
          kind: 'choice', id: 'buyer-2', dim: 'terminology', tags: [...T, 'abbr:MPB'],
          q: 'Dans [[MPB]], que veut dire « marginal » ?',
          options: [
            { text: 'Le bénéfice total de tous les panneaux achetés', feedback: 'Ça, c’est un total (l’aire sous la courbe). Marginal = une unité de plus.', mis: 'marginal-vs-total-external' },
            { text: 'Le bénéfice du panneau SUIVANT, un seul', correct: true, feedback: 'Exact : marginal = l’effet d’une unité supplémentaire.' },
            { text: 'Un bénéfice faible, presque négligeable', feedback: 'Non : en économie, « marginal » ne veut pas dire « petit ». Il veut dire « pour une unité de plus ».' },
          ],
        },
      ],
      prov: [{ kind: 'doc', ref: '15:A6#6.3', note: 'MPB = 100 − 3Q' }, { kind: 'doc', ref: '11.1', note: 'définition MPB' }],
    },
    {
      id: 'producer',
      title: 'Que regarde le producteur ?',
      result: ['MPC(18), coût du 18e panneau', '46 €'],
      human: 'Le fabricant se pose la question symétrique : « combien me coûte UN panneau de plus ? » Les premiers sortent des machines les plus efficaces ; pour en faire davantage, il faut des heures sup et des matériaux plus chers. Le coût du panneau suivant monte.',
      economist: 'En concurrence, l’offre est la courbe de [[MPC]] : la firme produit tant que p ≥ MC (§6.5). Dans A6 : {{MPC = 10 + 2Q}}.',
      exam: 'Firms supply panels as long as the price covers their marginal private cost (MPC).',
      decode: ['MPC'],
      why: [
        'La courbe monte : produire plus oblige à utiliser des ressources de plus en plus coûteuses, donc le coût de l’unité SUIVANTE augmente (§6.4).',
        'C’est l’offre : une firme price taker produit tant que le prix couvre le coût du panneau suivant, et s’arrête où p = MC (§6.5). À chaque prix, la quantité offerte se lit sur MPC.',
        '« Privé » parce que c’est le coût que LE PRODUCTEUR paie. Si son usine imposait un coût à d’autres (bruit, fumée), il ne serait pas dedans. Ici, on suppose qu’il n’y en a pas.',
      ],
      example: 'Les 10 premiers panneaux sortent de la ligne principale ; à partir du 15e il faut ouvrir l’atelier le samedi, avec des salaires majorés.',
      me: 'Tu es le fabricant. Un client veut un panneau de plus. Tu calcules : matériaux + heures pour CE panneau = 46 €. En dessous de 46 €, tu perds de l’argent sur ce panneau-là.',
      graphNote: 'La courbe orange MPC : sa hauteur au point Q = ce que coûte au fabricant le Q-ième panneau.',
      graph: { show: ['MPB', 'MPC'], focus: 'MPC', cursor: 18 },
      actors: { producer: 'voit MPC : son coût du panneau suivant' },
      focusActors: ['producer'],
      checks: [
        {
          kind: 'numeric', id: 'producer-1', dim: 'calculation', tags: [...T, 'abbr:MPC'], answer: 46, unit: '€',
          q: 'Avec {{MPC = 10 + 2Q}}, combien coûte la fabrication du 18e panneau ?',
          hint: 'Remplace Q par 18.',
          explain: 'MPC(18) = 10 + 2 × 18 = 46 €.',
        },
      ],
      prov: [{ kind: 'doc', ref: '15:A6#6.3', note: 'MPC = 10 + 2Q' }, { kind: 'doc', ref: '6.5', note: 'p = MC' }],
    },
    {
      id: 'market',
      title: 'Où l’échange s’arrête-t-il ?',
      result: ['Qm, où l’échange s’arrête', '18'],
      human: 'Tant qu’un panneau vaut plus pour l’acheteur qu’il ne coûte au fabricant, il existe un prix qui arrange les deux : il est vendu. Au 18e panneau, valeur = coût = 46 €. Au 19e, il vaut 43 € pour l’acheteur mais coûte 48 € à fabriquer : aucun prix n’arrange les deux. L’échange s’arrête à 18.',
      economist: 'Équilibre de marché (market equilibrium) : {{MPB = MPC}} ⇒ [[Qm]] = 18, p = 46. Au-delà, MPB < MPC.',
      exam: 'The competitive market reaches equilibrium where MPB = MPC, at Qm = 18 and p = 46.',
      decode: ['Qm'],
      reveal: {
        q: 'Quelle égalité décrit ce point d’arrêt ?',
        options: [
          { text: 'MPB = MPC', correct: true, feedback: 'Oui : la valeur du dernier panneau pour l’acheteur = son coût pour le fabricant.' },
          { text: 'MPB = 0', feedback: 'Ça, c’est où l’acheteur ne voudrait plus rien même gratuitement. Le coût compte aussi.' },
          { text: 'MPC = 0', feedback: 'Le coût n’est jamais nul ici. Compare la valeur et le coût.' },
          { text: 'MPB + MPC = 100', feedback: 'On ne fait pas la somme : on compare ce que l’un gagne à ce que l’autre dépense.' },
        ],
        formula: 'MPB = MPC ⇒ 100 − 3Q = 10 + 2Q ⇒ 5Q = 90 ⇒ Qm = 18 ; p = 100 − 3 × 18 = 46',
        tags: T,
      },
      why: [
        'Tant que MPB > MPC, un prix entre les deux (par ex. 45 pour un panneau qui vaut 50 et coûte 40) fait gagner les DEUX. Les échanges mutuellement avantageux ont lieu.',
        'Au 19e : 43 < 48. Pour que le fabricant accepte, il faut un prix ≥ 48 ; pour que l’acheteur accepte, un prix ≤ 43. Aucun prix ne satisfait les deux.',
        'À p = 46, la quantité que les acheteurs veulent (18) égale celle que les vendeurs veulent (18) : personne n’a intérêt à changer. C’est l’équilibre (§3, F01).',
      ],
      example: 'Au marché du samedi, chaque panneau vendu est une poignée de main. Le 19e : le vendeur dit « 48 minimum », l’acheteur « 43 maximum ». Pas de poignée de main.',
      me: 'Tu as 18 panneaux. Le vendeur te propose le 19e à 48 €. Il ne te rapporterait que 43 €. Tu refuses — et tu as raison, de TON point de vue.',
      graphNote: 'Qm = 18 est l’intersection de MPB et MPC. Le curseur est sur Q = 19 : regarde, MPB (43) est sous MPC (48).',
      graph: { show: ['MPB', 'MPC', 'QM'], focus: 'QM', cursor: 19 },
      focusActors: ['buyer', 'producer'],
      checks: [
        {
          kind: 'choice', id: 'market-1', dim: 'intuition', tags: T,
          q: 'Après Q = 18, pourquoi le marché ne produit-il plus de panneaux ?',
          options: [
            { text: 'Le fabricant n’a plus de stock', feedback: 'Rien ne l’empêche de produire : il pourrait — mais à un coût que personne ne veut payer.' },
            { text: 'Le panneau suivant coûte plus à produire qu’il ne vaut pour l’acheteur', correct: true, feedback: 'Oui : MPB < MPC. Aucun prix n’arrange les deux.' },
            { text: 'L’État l’interdit', feedback: 'Il n’y a aucune intervention à ce stade.' },
            { text: 'Les voisins ne veulent plus de panneaux', feedback: 'Les voisins n’ont aucune voix dans la transaction — c’est justement le problème qu’on va découvrir.' },
          ],
        },
        {
          kind: 'pick', id: 'market-2', dim: 'graph', tags: T, target: 18, tol: 0.6,
          q: 'Sur le graphique, place le curseur exactement là où le dernier échange a lieu, puis valide.',
          explain: 'Qm = 18 : l’intersection de MPB (bleu) et MPC (orange).',
        },
      ],
      prov: [{ kind: 'recalc', ref: '15:A6#6.3', note: 'Qpriv 18, p 46' }, { kind: 'doc', ref: '11.1', note: 'équilibre privé MPB = MPC' }],
    },
    {
      id: 'neighbors',
      title: 'Et ceux qui sont hors de la transaction ?',
      human: 'Chaque panneau installé remplace un peu d’électricité produite au gaz ou au charbon : un peu moins de pollution dans l’air que respirent tes voisins. Dans l’exercice A6, chaque panneau supplémentaire leur apporte l’équivalent de 20 €. Ils n’ont rien payé et personne ne leur demande leur avis.',
      economist: 'Les tiers reçoivent un bénéfice par unité, non compensé et non reflété dans les prix.',
      exam: 'Each panel benefits third parties, who are not part of the transaction.',
      why: [
        'Tu ne comptes pas ces 20 € parce que ta décision compare ce que TU gagnes à ce que TU paies. Ces 20 € ne passent par aucune poche dans la transaction.',
        'Personne ne les fait payer : il faudrait identifier chaque voisin, mesurer son gain et lui faire payer sa part. En pratique, les coûts de transaction l’empêchent (§11.6).',
        'Il manque donc une information dans le prix : le prix du marché reflète la valeur pour l’acheteur et le coût du vendeur — rien d’autre.',
      ],
      example: 'Vaccination (E2020 Q3) : te vacciner te protège, mais réduit aussi le risque que tu contamines les autres. Tu ne reçois rien pour cette protection des autres.',
      me: 'Aucun voisin ne sonnera jamais à ta porte pour te donner 20 € par panneau. Donc dans ta tête, ces 20 € n’existent pas.',
      graphNote: 'Rien ne bouge encore sur le graphique : les 20 € des voisins n’apparaissent sur aucune courbe de marché. C’est le cœur du problème.',
      graph: { show: ['MPB', 'MPC', 'QM'], cursor: 18 },
      actors: { third: 'gagnent sans rien décider' },
      focusActors: ['third'],
      checks: [
        {
          kind: 'choice', id: 'neighbors-1', dim: 'intuition', tags: T,
          q: 'Quand tu décides d’acheter ton 19e panneau, comptes-tu les 20 € de tes voisins ?',
          options: [
            { text: 'Oui, puisque je les reçois', feedback: 'Tu ne les reçois pas : ils vont aux voisins.' },
            { text: 'Non : ces 20 € vont aux voisins, ils n’entrent pas dans mon calcul', correct: true, feedback: 'Exact. Ta décision privée ignore ce bénéfice.' },
            { text: 'Oui, car le vendeur me les rembourse', feedback: 'Le vendeur ne gagne rien non plus avec ces 20 € : personne ne les paie.' },
          ],
        },
      ],
      prov: [{ kind: 'doc', ref: '15:A6#6.3', note: 'MEB = 20' }, { kind: 'peda', note: 'mécanisme pollution évitée' }],
    },
    {
      id: 'externality',
      title: 'Comment s’appelle cet effet ?',
      human: 'Un effet sur des tiers qui n’est pas pris en compte dans la transaction s’appelle une **externalité** (externality). Quand l’effet est bon pour les tiers, c’est une **externalité positive**. La pollution d’une usine serait une externalité négative.',
      economist: 'Externality : effet sur un tiers, non pris en compte dans la transaction (§11.1). Positive : vaccination, recherche, réseau. Négative : pollution, bruit.',
      exam: 'A positive externality is a benefit to third parties that is not taken into account by the buyer and the seller.',
      why: [
        '« Externe » parce que l’effet sort du cercle acheteur–vendeur : il touche quelqu’un d’extérieur.',
        'Un effet qui passe PAR un prix n’en est pas une : si le prix du lait monte et renchérit ton café, tu paies et quelqu’un reçoit. Une externalité est précisément un effet qui n’a PAS de prix.',
        'C’est important parce que le marché n’additionne que ce qui a un prix. Ce qui n’en a pas est ignoré dans la décision — d’où une quantité qui peut être mauvaise pour la société.',
      ],
      example: 'Positives : vaccination, recherche diffusée, ruches à côté d’un verger. Négatives : pollution, bruit (E2025 Q1c), centrale à charbon (E2021 Q1c).',
      me: 'Ton geste (acheter des panneaux) a une conséquence (un air plus propre) pour des gens qui ne sont pas dans ta transaction. Voilà, c’est ça une externalité.',
      graphNote: 'Toujours rien de nouveau sur le graphique : nommer l’effet ne le fait pas entrer dans les prix.',
      graph: { show: ['MPB', 'MPC', 'QM'], cursor: 18 },
      focusActors: ['third'],
      checks: [
        {
          kind: 'choice', id: 'externality-1', dim: 'recognition', tags: T,
          q: 'Lequel de ces cas est une externalité POSITIVE ?',
          options: [
            { text: 'Une usine rejette des fumées dans la rivière', feedback: 'C’est une externalité, mais négative : un dommage pour des tiers.', mis: 'meb-vs-mec' },
            { text: 'Un chercheur publie une découverte que d’autres entreprises utilisent gratuitement', correct: true, feedback: 'Oui : un bénéfice pour des tiers, sans paiement.' },
            { text: 'Ton café coûte plus cher parce que le prix du lait a monté', feedback: 'Cet effet passe par un prix (quelqu’un est payé) : ce n’est pas une externalité.' },
            { text: 'Le fabricant baisse ses prix', feedback: 'Un changement de prix n’est pas un effet externe.' },
          ],
        },
      ],
      prov: [{ kind: 'doc', ref: '11.1', note: 'définition et exemples' }],
    },
    {
      id: 'meb',
      title: 'Combien vaut cet effet, panneau par panneau ?',
      result: ['MPB(18) + MEB, valeur sociale du 18e', '66 €'],
      human: 'On mesure l’externalité comme tout le reste : pour UN panneau de plus. Le bénéfice qu’un panneau supplémentaire crée pour les autres s’appelle le [[MEB]]. Ici, chaque panneau en plus apporte 20 € aux voisins, quel que soit le nombre déjà installé.',
      economist: '[[MEB]] = 20, constant : chaque unité supplémentaire procure 20 de bénéfice aux tiers. Le bénéfice externe TOTAL de Q unités est l’aire sous MEB (20Q).',
      exam: 'The marginal external benefit (MEB) is the benefit to third parties of one additional unit; here MEB = 20.',
      decode: ['MEB'],
      why: [
        'On mesure « par panneau » parce que toutes les décisions se prennent à la marge. L’externalité doit être dans la même unité (€ par panneau) pour pouvoir s’additionner aux autres valeurs.',
        'Constant ici par hypothèse de l’exercice A6 : chaque panneau remplace la même quantité de pollution. Ce n’est pas une loi — MEB peut dépendre de Q (dernier bloc).',
        'MEB est un MARGINAL, pas un total : le bénéfice externe TOTAL de 18 panneaux est 18 × 20 = 360, l’aire sous MEB (§11.1).',
      ],
      example: 'Si chaque panneau évitait 0,1 tonne de CO₂ valorisée à 200 € la tonne, on aurait MEB = 20 € par panneau (chiffres d’illustration).',
      me: 'Chaque fois que tu visses un panneau, imagine 20 € qui tombent dans la poche (invisible) de tes voisins — pas dans la tienne.',
      graphNote: 'La ligne violette MEB = 20 : ce n’est pas une courbe de marché (personne ne l’achète). C’est la valeur, pour les tiers, de chaque panneau supplémentaire.',
      graph: { show: ['MPB', 'MPC', 'QM', 'MEB'], focus: 'MEB', cursor: 18 },
      actors: { third: 'reçoivent MEB = 20 €' },
      focusActors: ['third'],
      checks: [
        {
          kind: 'numeric', id: 'meb-1', dim: 'formula', tags: [...T, 'abbr:MEB'], answer: 66, unit: '€',
          q: 'Au 18e panneau, combien la société ENTIÈRE (toi + tes voisins) gagne-t-elle grâce à ce panneau ?',
          hint: 'Ta part : MPB(18). La part des voisins : MEB.',
          explain: 'MPB(18) + MEB = 46 + 20 = 66 €. Tu viens de calculer un point de la future courbe MSB.',
          traps: [
            { value: 20, feedback: '20, c’est seulement la part des voisins (MEB). Ajoute la tienne.' },
            { value: 46, feedback: '46, c’est seulement ta part (MPB(18)). Et les voisins ?' },
            { value: 26, feedback: 'Une valeur pour les voisins s’AJOUTE à la tienne : elle ne se soustrait pas.', mis: 'meb-vs-mec' },
          ],
        },
      ],
      prov: [{ kind: 'doc', ref: '15:A6#6.3', note: 'MEB = 20' }, { kind: 'doc', ref: '11.1', note: 'marginal vs total' }],
    },
    {
      id: 'msb',
      title: 'Combien vaut un panneau pour la société ?',
      result: ['MSB = MPB + MEB', '120 − 3Q'],
      human: 'Tu viens de le calculer pour le 18e panneau : 46 pour toi + 20 pour les voisins = 66 pour la société. Fais-le pour chaque Q : tu obtiens une nouvelle courbe, 20 au-dessus de MPB.',
      economist: '{{MSB = MPB + MEB = 120 − 3Q}} (A6). MSB > MPB parce que MEB > 0.',
      exam: 'With a positive externality, MSB = MPB + MEB, so MSB lies above the demand (MPB) curve.',
      decode: ['MSB'],
      reveal: {
        q: 'La valeur d’un panneau supplémentaire pour la société entière, c’est…',
        options: [
          { text: 'MPB − MEB', feedback: 'Le bénéfice des voisins est un gain, pas une perte : il s’ajoute.', mis: 'meb-vs-mec' },
          { text: 'MPB + MEB', correct: true, feedback: 'Oui : la valeur pour l’acheteur + la valeur pour les tiers.' },
          { text: 'MPB × MEB', feedback: 'On additionne des € par panneau ; multiplier n’a pas de sens ici.' },
          { text: 'MEB seulement', feedback: 'Tu oublies l’acheteur : il fait partie de la société.' },
        ],
        formula: 'MSB = MPB + MEB = (100 − 3Q) + 20 = 120 − 3Q',
        after: 'Tu as construit MSB à partir des acteurs : c’est la formule du cours (§11.1, F34).',
        tags: T,
      },
      callout: { kind: 'warn', title: 'MSB n’est PAS l’argent du gouvernement', text: 'Personne ne « verse » MSB. C’est une mesure de VALEUR : ce que vaut le panneau pour tout le monde réuni. L’État pourra plus tard dépenser de l’argent (une subvention), mais MSB existe même s’il ne fait rien.' },
      why: [
        'On additionne parce que la société, c’est tout le monde. Si un panneau vaut 46 à l’un et 20 aux autres, il vaut 66 à l’ensemble : les valeurs de personnes différentes pour la MÊME unité s’additionnent.',
        'On additionne verticalement, au même Q, parce que c’est le MÊME panneau qui profite à l’acheteur et aux voisins — exactement comme pour un bien public (§11.8).',
        'MSB est au-dessus de MPB parce que MEB > 0 : chaque unité a une valeur en plus de celle que voit l’acheteur.',
      ],
      example: 'Vaccins (E2020 Q3) : demande 100 − Q et MEB = 20 donnent MSB = 120 − Q.',
      me: 'Si tu pouvais encaisser les 20 € de tes voisins à chaque panneau, ta valeur pour un panneau ne serait plus MPB mais MPB + 20 = MSB. MSB, c’est « toi, si tu touchais aussi le gain des autres ».',
      graphNote: 'La courbe verte MSB est exactement 20 au-dessus de MPB à chaque Q : la flèche violette au curseur montre ce +20.',
      graph: { show: ['MPB', 'MPC', 'QM', 'MEB', 'MSB'], focus: 'MSB', cursor: 18 },
      actors: { planner: 'voit MSB = MPB + MEB' },
      focusActors: ['buyer', 'third', 'planner'],
      checks: [
        {
          kind: 'choice', id: 'msb-1', dim: 'terminology', tags: [...T, 'abbr:MSB'],
          q: '[[MSB]] représente…',
          options: [
            { text: 'L’argent que l’État dépense pour chaque panneau', feedback: 'C’est LA confusion classique. MSB est une valeur, pas un flux d’argent : elle existe même si l’État ne fait rien.', mis: 'msb-government-money' },
            { text: 'La valeur d’un panneau supplémentaire pour l’acheteur et pour les tiers réunis', correct: true, feedback: 'Exact.' },
            { text: 'Le prix payé par l’acheteur', feedback: 'Le prix payé se lit sur MPB (la demande) à la quantité échangée.' },
            { text: 'Le bénéfice des voisins seulement', feedback: 'Ça, c’est MEB. MSB ajoute la valeur pour l’acheteur.', mis: 'meb-vs-mec' },
          ],
        },
      ],
      prov: [{ kind: 'recalc', ref: '15:A6#6.3', note: 'MSB = 120 − 3Q' }, { kind: 'doc', ref: '17:F34', note: 'MSB = MPB + MEB' }],
    },
    {
      id: 'msc',
      title: 'Et le coût pour la société ?',
      result: ['MEC dans A6', '0 €'],
      human: 'Même question côté coût : le panneau coûte-t-il quelque chose à quelqu’un d’autre que le fabricant ? Dans cet exercice, non. Le coût pour la société d’un panneau de plus est donc simplement son coût de fabrication.',
      economist: '{{MSC = MPC + MEC}} ; ici [[MEC]] = 0 donc {{MSC = MPC = 10 + 2Q}}.',
      exam: 'There is no external cost, so MSC = MPC.',
      decode: ['MEC', 'MSC'],
      reveal: {
        q: 'Coût d’un panneau de plus pour la société = coût pour le producteur + … ?',
        options: [
          { text: '+ le coût imposé aux tiers (MEC)', correct: true, feedback: 'Oui. Ici ce coût externe est nul.' },
          { text: '+ le bénéfice des tiers (MEB)', feedback: 'Un bénéfice n’est pas un coût : MEB est déjà dans MSB.', mis: 'meb-vs-mec' },
          { text: '+ la subvention', feedback: 'Une subvention est un transfert d’argent, pas un coût réel de production.', mis: 'transfer-is-dwl' },
        ],
        formula: 'MSC = MPC + MEC = (10 + 2Q) + 0 = 10 + 2Q',
        tags: T,
      },
      why: [
        'On se pose la question parce que l’optimum social compare TOUS les bénéfices à TOUS les coûts. Oublier un coût externe ferait surestimer la bonne quantité.',
        'MEC = 0 par hypothèse de l’exercice. Dans d’autres exercices (essence L11/E2023, textiles E2024), MEC > 0 et MSC passe au-dessus de MPC.',
      ],
      example: 'Si l’usine de panneaux faisait du bruit la nuit, ses riverains subiraient un coût : ce serait un MEC. Ici, on suppose que non.',
      me: 'Le fabricant paie tout ce que coûte son panneau, et personne d’autre ne paie quoi que ce soit. Donc pour la société, un panneau coûte exactement ce qu’il coûte au fabricant.',
      graphNote: 'Pas de nouvelle courbe : MSC se confond avec MPC (orange). Seul le côté « bénéfice » a bougé.',
      graph: { show: ['MPB', 'MPC', 'QM', 'MEB', 'MSB'], focus: 'MPC', cursor: 18 },
      actors: { planner: 'compare MSB et MSC' },
      focusActors: ['producer', 'planner'],
      checks: [
        {
          kind: 'choice', id: 'msc-1', dim: 'graph', tags: [...T, 'abbr:MSC'],
          q: 'Pourquoi n’y a-t-il pas de courbe MSC distincte sur le graphique ?',
          options: [
            { text: 'Parce que MEC = 0 : la fabrication n’impose aucun coût aux tiers dans ce modèle', correct: true, feedback: 'Exact : MSC = MPC.' },
            { text: 'Parce que l’État paie les coûts', feedback: 'Aucune intervention n’est en place, et une dépense publique ne changerait pas le coût réel.' },
            { text: 'Parce qu’avec une externalité positive, MSC = MSB', feedback: 'Non : MSB et MSC sont deux courbes différentes qui se croisent en Q*.' },
          ],
        },
      ],
      prov: [{ kind: 'doc', ref: '11.1', note: 'MSC = MPC + MEC' }, { kind: 'doc', ref: '15:A6#6.3', note: 'pas de MEC dans A6' }],
    },
    {
      id: 'optimum',
      title: 'Combien de panneaux la société voudrait-elle ?',
      result: ['Q*, optimum social', '22'],
      human: 'Imagine un planificateur bienveillant qui compte tout le monde. Il ajoute des panneaux tant qu’un panneau de plus vaut plus pour la société qu’il ne lui coûte. Il s’arrête quand les deux sont égaux.',
      economist: 'Optimum social : {{MSB = MSC}} ⇒ 120 − 3Q = 10 + 2Q ⇒ [[Q*]] = 22. La règle universelle est MSB = MSC (§11.1).',
      exam: 'The socially optimal quantity satisfies MSB = MSC: 120 − 3Q = 10 + 2Q, so Q* = 22.',
      decode: ['Q*'],
      reveal: {
        q: 'Quelle égalité utilise le planificateur ?',
        options: [
          { text: 'MPB = MPC', feedback: 'Ça, c’est la règle du marché : elle ignore les voisins.', mis: 'market-eq-is-optimum' },
          { text: 'MSB = MSC', correct: true, feedback: 'Oui : valeur sociale du dernier panneau = son coût social.' },
          { text: 'MSB = MPB', feedback: 'Ces deux courbes ne se croisent jamais ici : elles sont parallèles, à 20 d’écart.' },
          { text: 'MEB = MPC', feedback: 'Tu oublies la valeur pour l’acheteur.' },
        ],
        formula: 'MSB = MSC ⇒ 120 − 3Q = 10 + 2Q ⇒ 5Q = 110 ⇒ Q* = 22',
        tags: T,
      },
      why: [
        'Avant 22, chaque panneau ajoute plus de valeur sociale qu’il ne coûte → l’ajouter augmente le bien-être. Après 22, c’est l’inverse → l’ajouter le diminue. Le maximum est au croisement.',
        'Le marché ne le fait pas tout seul parce que personne dans la transaction ne reçoit les 20 € des voisins : la décision privée compare MPB à MPC, pas MSB à MSC.',
        'C’est la règle universelle : quelle que soit l’externalité (positive, négative, production, consommation), l’optimum social est MSB = MSC. Seul change le côté du graphique qui bouge (§11.1).',
      ],
      example: 'E2020 Q3 vaccins : 120 − Q = 10 + Q ⇒ Q* = 55, au-dessus du marché (45).',
      me: 'Si tu étais à la fois l’acheteur ET tous tes voisins, tu achèterais 22 panneaux : tu compterais 46 + 20 pour le 18e, et tu continuerais jusqu’à ce que ta valeur + celle des voisins = le coût.',
      graphNote: 'Q* = 22 : intersection de MSB (vert) et MPC (orange, = MSC). Qm = 18 reste là où le marché s’arrête.',
      graph: { show: ['MPB', 'MPC', 'MEB', 'MSB', 'QM', 'QS'], focus: 'QS', cursor: 22 },
      actors: { planner: 'veut Q* = 22' },
      focusActors: ['planner'],
      checks: [
        {
          kind: 'numeric', id: 'optimum-1', dim: 'calculation', tags: [...T, 'abbr:Q*'], answer: 54, unit: '€',
          q: 'Vérifie le croisement : que vaut MSB(22) ? (Ce doit être égal au coût MPC(22).)',
          explain: 'MSB(22) = 120 − 66 = 54 = MPC(22) = 10 + 44 = 54 ✓ : au point Q*, valeur sociale = coût social.',
          hint: 'MSB = 120 − 3Q.',
          traps: [{ value: 34, feedback: '34 = MPB(22) : la valeur pour l’acheteur seul. Ajoute MEB.' }],
        },
        {
          kind: 'choice', id: 'optimum-2', dim: 'intuition', tags: T,
          q: 'Sans aucune intervention, le marché atteint-il Q* = 22 ?',
          options: [
            { text: 'Oui, un marché concurrentiel trouve toujours l’optimum', feedback: 'Seulement si la demande = MSB et l’offre = MSC (§7.1). Une externalité casse ce résultat.', mis: 'market-eq-is-optimum' },
            { text: 'Non : il s’arrête à 18, car les acheteurs ne comptent que MPB', correct: true, feedback: 'Exact : Qm = 18 < Q* = 22.' },
            { text: 'Oui, parce que Q* est le point d’équilibre', feedback: 'Q* ici = optimum SOCIAL, pas l’équilibre du marché. L’étoile ne dit pas « équilibre » (§18.3).', mis: 'q-star-is-market-eq' },
          ],
        },
      ],
      prov: [{ kind: 'recalc', ref: '15:A6#6.3', note: 'Qeff 22' }, { kind: 'doc', ref: '11.1', note: 'optimum MSB = MSC' }],
    },
    {
      id: 'gap',
      title: 'Les panneaux qui manquent',
      result: ['Unités manquantes entre Qm et Q*', '4'],
      human: 'Le marché s’arrête à 18. La société en voudrait 22. Les panneaux entre 18 et 22 vaudraient chacun plus pour la société qu’ils ne coûtent — mais ils ne sont pas produits, parce que l’acheteur seul ne les juge pas rentables.',
      economist: 'Sur ]Qm, Q*] : MPB < MPC (pas d’échange privé) mais MSB > MSC (échange socialement souhaitable).',
      exam: 'Between Qm and Q*, each unit has a social benefit above its social cost, but buyers do not purchase it because MPB < MPC.',
      why: [
        'Ces panneaux « manquent » au sens où ce ne sont pas des panneaux détruits : ce sont des échanges qui auraient créé de la valeur et qui n’ont jamais eu lieu.',
        'Pour le panneau au point 20, l’acheteur devrait payer au moins 50 (le coût) pour une valeur personnelle de 40. Les 20 € des voisins ne sont pas dans sa poche.',
        'L’écart diminue de 18 vers 22 parce que MSB baisse et MPC monte : la perte du panneau au point 19 (63 − 48 = 15) est plus grande que celle du point 22 (0).',
      ],
      example: 'Clique les petites barres sur le graphique : chacune est un panneau manquant, avec sa valeur sociale et son coût.',
      me: 'Tu refuses le panneau au point 20 : il te coûterait 50 pour 40 de valeur. Raisonnable pour toi. Mais tes voisins y auraient gagné 20 : à vous tous, 60 de valeur pour 50 de coût. Un bon accord collectif que personne ne signe.',
      graphNote: 'Les barres entre 18 et 22 sont les panneaux manquants. Chaque barre va de MPC (coût) à MSB (valeur sociale) : sa hauteur est ce que la société perd sur ce panneau.',
      graph: { show: ['MPB', 'MPC', 'MSB', 'QM', 'QS', 'UNITS'], focus: 'UNITS', cursor: 20 },
      focusActors: ['buyer', 'third', 'planner'],
      checks: [
        {
          kind: 'numeric', id: 'gap-1', dim: 'graph', tags: [...T, 'dwl'], answer: 10, unit: '€',
          q: 'Panneau au point Q = 20 : combien la société perd-elle parce qu’il n’est pas produit ? (MSB − MPC)',
          hint: 'MSB(20) = 120 − 60 ; MPC(20) = 10 + 40.',
          explain: 'MSB(20) − MPC(20) = 60 − 50 = 10 €.',
          traps: [
            { value: 20, feedback: '20 = MEB : c’est l’écart MSB − MPB. On cherche valeur sociale − coût : MSB − MPC.' },
            { value: -10, feedback: 'MPB − MPC = 40 − 50 = −10 : c’est pourquoi l’acheteur refuse. Mais la perte sociale compare MSB à MPC.' },
          ],
        },
      ],
      prov: [{ kind: 'recalc', ref: '15:A6#6.3', note: 'courbes A6' }, { kind: 'peda', note: 'raisonnement unité par unité' }],
    },
    {
      id: 'dwl',
      title: 'Ce que la société perd : la perte sèche',
      result: ['DWL, valeur jamais créée', '40 €'],
      human: 'Pour chaque panneau manquant, la société perd (sa valeur sociale − son coût). Le panneau au point 18 aurait apporté 20 de plus, celui au point 22 : 0. Additionne toutes ces pertes : tu obtiens l’aire du triangle entre MSB et MPC, de 18 à 22.',
      economist: '[[DWL]] = aire entre MSB et MSC sur [Qm, Q*] = ½ × (22 − 18) × 20 = 40.',
      exam: 'The deadweight loss is the area between MSB and MSC from Qm to Q*: ½ × 4 × 20 = 40. These units are not produced even though their social benefit exceeds their social cost.',
      decode: ['DWL'],
      reveal: {
        q: 'Cette zone a la forme d’un triangle. Base et hauteur ?',
        options: [
          { text: 'Base 22 − 18 = 4 ; hauteur 66 − 46 = 20 (l’écart à Q = 18)', correct: true, feedback: 'Oui : l’écart vaut 20 au point 18 et tombe à 0 au point 22.' },
          { text: 'Base 22 ; hauteur 20', feedback: 'La base ne part pas de 0 : seules les unités entre 18 et 22 manquent.', mis: 'dwl-private-benchmark' },
          { text: 'Base 4 ; hauteur 46', feedback: '46 est un prix, pas l’écart entre valeur sociale et coût.' },
        ],
        formula: 'DWL = ½ × (Q* − Qm) × [MSB(Qm) − MSC(Qm)] = ½ × 4 × 20 = 40',
        after: 'Vérification par le bien-être total : W(22) − W(18) = 1210 − 1170 = 40 (§15 A6).',
        tags: [...T, 'dwl'],
      },
      why: [
        'Prends un panneau manquant entre 18 et 22. Sa hauteur dans le triangle = ce qu’il vaut pour la société (MSB) − ce qu’il coûte à produire (MPC). Cette différence, c’est du bien-être qu’on aurait pu créer et qu’on n’a pas créé. Fais-le pour chaque panneau manquant : les tranches empilées forment le triangle.',
        'C’est un triangle parce que l’écart vaut 20 au point 18 et 0 au point 22, et qu’il diminue en ligne droite (courbes linéaires) : la somme des tranches = ½ × base × hauteur (§2.3).',
        'Le benchmark est SOCIAL : on mesure ce que la société perd par rapport au MEILLEUR résultat pour elle (Q* = 22), pas par rapport au marché. Entre 18 et 22, il n’y a d’ailleurs rien entre MPB et MPC : MPB est SOUS MPC (§11.2, §20.2).',
        'Vérification : W = CS + PS + bénéfice externe. Sans intervention : 486 + 324 + 360 = 1170. À l’optimum : 1210. Écart : 40 = DWL (§15 A6).',
      ],
      example: 'Vaccins E2020 Q3 : DWL = ½ × (55 − 45) × 20 = 100.',
      me: 'Tes voisins et toi auriez pu, ensemble, payer 4 panneaux de plus et en sortir plus riches de 40 € au total. Ces 40 € ne sont allés à personne : ils n’ont jamais existé.',
      graphNote: 'Clique le triangle rouge : chaque tranche verticale est un panneau manquant ; sa hauteur = MSB − MSC à ce point.',
      graph: { show: ['MPB', 'MPC', 'MSB', 'QM', 'QS', 'DWL'], focus: 'DWL', cursor: 20 },
      focusActors: ['planner'],
      checks: [
        {
          kind: 'numeric', id: 'dwl-1', dim: 'calculation', tags: [...T, 'dwl', 'abbr:DWL'], answer: 40, unit: '€',
          q: 'Calcule la DWL du marché sans intervention.',
          explain: '½ × (22 − 18) × 20 = 40.',
          traps: [
            { value: 80, feedback: 'Tu as oublié le ½ : l’écart n’est pas 20 pour chaque panneau manquant, il passe de 20 à 0.' },
            { value: 360, feedback: '360 = 20 × 18 = bénéfice externe TOTAL des panneaux produits. Ce n’est pas une perte.', mis: 'marginal-vs-total-external' },
            { value: 440, feedback: '440 = 20 × 22 : dépense de la subvention optimale. C’est un transfert, pas la DWL.', mis: 'transfer-is-dwl' },
          ],
        },
        {
          kind: 'choice', id: 'dwl-2', dim: 'graph', tags: [...T, 'dwl'],
          q: 'Pourquoi le triangle est-il AU-DESSUS de MPC et EN DESSOUS de MSB ?',
          options: [
            { text: 'Parce que la hauteur de chaque tranche = valeur sociale du panneau manquant − son coût', correct: true, feedback: 'Exactement : c’est la valeur nette perdue, unité par unité.' },
            { text: 'Parce qu’une DWL est toujours entre l’offre et la demande', feedback: 'Pas ici : entre 18 et 22, MPB est sous MPC. Avec une externalité, le benchmark est SOCIAL (MSB, MSC).', mis: 'dwl-private-benchmark' },
            { text: 'Parce que l’État paie ce triangle', feedback: 'Personne ne paie ce triangle : c’est une valeur qui n’existe pas.', mis: 'transfer-is-dwl' },
          ],
        },
      ],
      prov: [{ kind: 'recalc', ref: '15:A6#6.3', note: 'DWL 40 ; W 1170 → 1210' }, { kind: 'doc', ref: '11.2', note: 'mesure de la DWL' }],
    },
    {
      id: 'subsidy',
      title: 'Comment faire acheter les panneaux manquants ?',
      result: ['s* = MEB(Q*)', '20 €'],
      human: 'Le problème : l’acheteur ignore les 20 € des voisins. Idée : l’État verse 20 € par panneau. Ton calcul privé devient alors « ma valeur + 20 » = exactement la valeur pour la société. Tu achètes donc comme si tu comptais tes voisins.',
      economist: 'Subvention pigouvienne : {{s* = MEB(Q*) = 20}}. Équilibre : MPB + s = MPC ⇒ Q = 22 ; p_b = 34, p_s = 54.',
      exam: 'A Pigouvian subsidy equal to the marginal external benefit at the optimum, s* = MEB(Q*) = 20, makes buyers internalize the external benefit, so the market produces Q* = 22.',
      decode: ['s*'],
      reveal: {
        q: 'De combien doit être la subvention par panneau pour que le marché s’arrête exactement à 22 ?',
        options: [
          { text: '20 = MEB(22)', correct: true, feedback: 'Oui : elle comble exactement l’écart entre MPB et MSB au point Q*.' },
          { text: '40 = la DWL', feedback: 'La DWL est une aire (€), la subvention un montant par unité (€/panneau).' },
          { text: '54 = le coût du 22e panneau', feedback: 'L’État ne paie pas tout le panneau : seulement l’écart entre valeur sociale et valeur privée.' },
          { text: '440 = 20 × 22', feedback: 'C’est la dépense TOTALE de l’État, pas le montant par panneau.' },
        ],
        formula: 's* = MEB(Q*) = 20 ⇒ 100 − 3Q + 20 = 10 + 2Q ⇒ Q = 22 ; p_b = 34, p_s = 54',
        tags: [...T, 'pigou'],
      },
      callout: { kind: 'analogy', title: 'Ton analogie est juste', text: '« J’achèterais 18 panneaux. La société en voudrait 22. L’État aide à rendre les panneaux supplémentaires rentables pour moi. » ✓ Version précise : une subvention par unité {{s* = MEB(Q*) = 20}} fait passer ton incitation de MPB à MPB + 20 = MSB.' },
      why: [
        '20 exactement parce qu’il faut que la décision privée (MPB + s = MPC) tombe au même endroit que la décision sociale (MSB = MPC). Comme MSB = MPB + 20, il suffit que s = 20.',
        'On l’évalue au point Q* parce que la subvention doit payer exactement le bénéfice externe de la DERNIÈRE unité qu’on veut voir produite. Ici MEB est constant, donc MEB(22) = 20. Si MEB dépend de Q, il faut MEB(Q*) — bloc suivant.',
        'Peu importe qui reçoit juridiquement la subvention (acheteur ou vendeur) : seul l’écart p_s − p_b = s compte, la quantité est la même (§7.2–7.3).',
        'Le bien-être augmente malgré la dépense : W = CS + PS − subvention + bénéfice externe = 726 + 484 − 440 + 440 = 1210 > 1170. La subvention est un transfert ; le vrai gain = les 40 de DWL récupérés (§15 A6).',
      ],
      example: 'Bonus écologique par panneau ou par véhicule électrique : une aide par unité achetée.',
      me: 'L’État te dit : « pour chaque panneau, je te rembourse 20 € ». Le panneau au point 20, qui valait 40 pour toi, vaut maintenant 60 pour ton portefeuille — plus que son coût de 50 : tu l’achètes. Tu t’arrêtes au 22e, où ta valeur + 20 = coût = 54.',
      graphNote: 'La courbe pointillée bleue MPB + s se superpose à MSB quand s = 20. Bouge le curseur de subvention : à 20, l’équilibre tombe exactement sur Q* = 22. Le rectangle gris = dépense de l’État (20 × 22 = 440).',
      graph: { show: ['MPB', 'MPC', 'MSB', 'QM', 'QS', 'POL', 'QP', 'PRICES', 'GOV', 'DWL'], focus: 'POL', policy: 20, policyControl: true, cursor: 22 },
      actors: { gov: 'verse s* = 20 €' },
      focusActors: ['gov', 'buyer'],
      checks: [
        {
          kind: 'numeric', id: 'subsidy-1', dim: 'calculation', tags: [...T, 'pigou'], answer: 34, unit: '€',
          q: 'Avec s = 20, quel prix PAIE l’acheteur pour le 22e panneau ?',
          hint: 'L’acheteur paie sa valeur marginale : p_b = MPB(22).',
          explain: 'p_b = MPB(22) = 100 − 66 = 34. Le vendeur reçoit p_s = 34 + 20 = 54 = MPC(22).',
          traps: [{ value: 54, feedback: '54 est ce que REÇOIT le vendeur (p_s). L’acheteur paie 20 de moins.' }],
        },
        {
          kind: 'choice', id: 'subsidy-2', dim: 'intuition', tags: [...T, 'pigou'],
          q: 'La dépense publique de 440 (= 20 × 22) est-elle une perte sèche ?',
          options: [
            { text: 'Oui, c’est de l’argent perdu par l’État', feedback: 'L’argent n’est pas détruit : il passe des contribuables aux acheteurs et vendeurs.', mis: 'transfer-is-dwl' },
            { text: 'Non : c’est un transfert. Dans W on le soustrait, mais il réapparaît dans CS et PS', correct: true, feedback: 'Exact. Le bien-être passe de 1170 à 1210.' },
            { text: 'On ne la compte pas dans le bien-être', feedback: 'Il FAUT la compter (− 440), sinon on surestime W ; elle est compensée par les gains qu’elle finance.', mis: 'ignore-subsidy-cost' },
          ],
        },
      ],
      prov: [{ kind: 'recalc', ref: '15:A6#6.3', note: 's* 20 ; p_b 34 ; p_s 54 ; W 1210' }, { kind: 'doc', ref: '11.3', note: 'Pigou' }, { kind: 'peda', note: 'analogie de l’élève' }],
    },
    {
      id: 'variable-meb',
      title: 'Et si le bénéfice externe dépend de Q ?',
      result: ['s* = MEB(Q*) quand MEB = 30 − Q', '10 €'],
      human: 'Imagine que les premiers panneaux de la ville remplacent les centrales les plus sales, et les suivants des sources plus propres : chaque panneau supplémentaire aide un peu moins. MEB n’est plus constant : {{MEB = 30 − Q}}. Quelle subvention faut-il alors ?',
      economist: 'MSB = 130 − 4Q ⇒ Q* = 20. {{s* = MEB(Q*) = 10}} — pas l’intercept 30, pas MEB(Qm) = 12.',
      exam: 'When MEB varies with Q, the optimal subsidy is MEB evaluated at the efficient quantity: s* = MEB(Q*) = 10, not the intercept of MEB.',
      callout: { kind: 'warn', title: 'Variante construite', text: 'MEB = 30 − Q n’est pas dans le cours : c’est un complément pour entraîner la règle documentée en §11.3 (« évaluer à la quantité efficiente »). Le cours l’applique côté négatif : essence, MEC = Q ⇒ t* = MEC(30) = 30, pas MEC(45) = 45.' },
      why: [
        'Au point Q*, l’acheteur subventionné doit être indifférent entre acheter et ne pas acheter : MPB(Q*) + s = MPC(Q*). Comme MPC(Q*) = MSB(Q*) = MPB(Q*) + MEB(Q*), on obtient s = MEB(Q*).',
        'Pas l’intercept : 30 est le bénéfice externe du TOUT PREMIER panneau, pas du 20e. Une subvention de 30 paierait chaque panneau comme s’il était le plus utile : sur-incitation, le marché irait jusqu’à 24.',
        'Pas MEB(Qm) non plus : le marché ne restera pas à Qm une fois subventionné. La bonne valeur est celle de la dernière unité SOUHAITABLE (§11.3, §20.2).',
      ],
      example: 'Même logique côté négatif (L11, E2023) : MEC = Q, Q* = 30 ⇒ taxe t* = MEC(30) = 30, pas 45.',
      me: 'L’État te paie pour le service que rend TON DERNIER panneau aux voisins — pas pour celui que rendait le premier panneau de la ville.',
      graphNote: 'Graphique de la variante : MEB descend, MSB = MPB + MEB est plus pentue. Essaie s = 30 (trop), s = 12, puis s = 10 : seule la dernière tombe pile sur Q* = 20.',
      graph: { preset: 'variant', show: ['MPB', 'MPC', 'MEB', 'MSB', 'QM', 'QS', 'POL', 'QP', 'DWL'], focus: 'MEB', policy: 0, policyControl: true, cursor: 20 },
      focusActors: ['gov', 'third'],
      checks: [
        {
          kind: 'choice', id: 'variable-1', dim: 'formula', tags: [...T, 'pigou'],
          q: 'Avec MEB = 30 − Q et Q* = 20, quelle subvention par panneau implémente l’optimum ?',
          options: [
            { text: '30 (la valeur de MEB à l’origine)', feedback: 'Avec s = 30, le marché irait jusqu’à Q = 24 > 20 : trop de panneaux, nouvelle DWL de 48. Essaie sur le graphique.', mis: 'pigou-intercept' },
            { text: '12 = MEB(18), évalué au marché initial', feedback: 'Mauvais point : avec s = 12 le marché irait à 20,4. Il faut la valeur à la quantité visée.', mis: 'pigou-intercept' },
            { text: '10 = MEB(20), évalué à Q*', correct: true, feedback: 'Oui : 100 − 3Q + 10 = 10 + 2Q ⇒ Q = 20 = Q*.' },
          ],
        },
        {
          kind: 'numeric', id: 'variable-2', dim: 'calculation', tags: [...T, 'pigou'], answer: 24, unit: 'panneaux',
          q: 'Si l’État verse quand même s = 30, quelle quantité le marché échange-t-il ?',
          hint: 'Résous 100 − 3Q + 30 = 10 + 2Q.',
          explain: '130 − 3Q = 10 + 2Q ⇒ Q = 24 > Q* = 20 : sur-production, DWL = ½ × 4 × 24 = 48.',
          traps: [{ value: 20, feedback: '20 serait atteint avec s = 10. Avec 30, la subvention pousse plus loin.', mis: 'oversubsidy' }],
        },
      ],
      prov: [{ kind: 'peda', note: 'variante construite MEB = 30 − Q' }, { kind: 'doc', ref: '11.3', note: 'évaluer à Qeff' }, { kind: 'recalc', ref: '11.2', note: 'essence t* = 30' }],
    },
    {
      id: 'recap',
      title: 'La chaîne complète',
      human: 'Remets le mécanisme dans l’ordre : chaque maillon CAUSE le suivant.',
      why: ['Chaque étape n’est vraie que parce que la précédente l’est : si les voisins ne gagnaient rien (MEB = 0), Qm serait déjà optimal et il n’y aurait ni DWL ni subvention.'],
      example: 'Remplace « panneaux » par « vaccins » : la chaîne est identique, seuls les chiffres changent (E2020 Q3).',
      me: 'J’achète pour moi → mes voisins gagnent aussi → je ne le compte pas → j’achète trop peu → la société perd → l’État paie la différence → j’achète la bonne quantité.',
      graphNote: 'Le graphique complet : les deux quantités, l’écart MEB entre MPB et MSB, et la perte sèche.',
      graph: { show: ['MPB', 'MPC', 'MEB', 'MSB', 'QM', 'QS', 'DWL'], cursor: 20 },
      special: 'chain',
      checks: [
        {
          kind: 'order', id: 'recap-1', dim: 'intuition', tags: T,
          q: 'Clique les maillons dans l’ordre causal.',
          items: [
            'L’acheteur compare sa valeur privée (MPB) au prix',
            'Chaque panneau procure aussi 20 aux voisins (MEB)',
            'Le marché ignore ce bénéfice : il s’arrête à Qm = 18',
            'La société voudrait Q* = 22 (MSB = MSC)',
            'Les panneaux manquants créent une DWL de 40',
            'Une subvention s* = MEB(Q*) = 20 aligne l’incitation privée sur la valeur sociale',
          ],
        },
      ],
      prov: [{ kind: 'recalc', ref: '15:A6#6.3' }],
    },
    {
      id: 'teachback',
      title: 'Explique-le-moi',
      human: 'Sans regarder au-dessus, explique avec tes mots pourquoi le marché des panneaux solaires s’arrête trop tôt et ce que peut faire l’État. Les analogies sont bienvenues : on évalue les LIENS DE CAUSE, pas le vocabulaire.',
      why: ['Expliquer force à reconstruire la chaîne au lieu de la reconnaître : c’est ce qui révèle les maillons manquants.'],
      example: 'Commence par « Quand j’achète un panneau, je regarde… ».',
      me: 'Raconte-le comme si tu l’expliquais à un ami qui hésite à acheter des panneaux.',
      graphNote: 'Le graphique reste visible : tu peux t’en servir pour raconter.',
      graph: { show: ['MPB', 'MPC', 'MEB', 'MSB', 'QM', 'QS', 'DWL'], cursor: 20 },
      special: 'teachback',
      prov: [{ kind: 'peda' }],
    },
    {
      id: 'exam',
      title: 'Question d’examen (EN)',
      human: 'Nouveau contexte, même mécanisme : les vaccins, tirés de E2020 Q3. Réponds en anglais, sans indice. Le corrigé détaillé s’affiche ensuite.',
      why: ['Changer de contexte vérifie que tu as compris le mécanisme, pas mémorisé « 18 et 22 ».'],
      example: 'Commence par identifier le modèle : quelle courbe s’écarte de sa version privée ?',
      me: 'Tu es à l’examen. Personne ne te dit « externalité positive » : c’est à toi de le voir dans l’énoncé.',
      graphNote: 'Pas de graphique en mode examen : dessine-le de tête sur une feuille (axes, MPB, MSB, MPC, Qm, Q*, DWL).',
      graph: { show: [] },
      special: 'exam',
      prov: [{ kind: 'recalc', ref: '16:E2020#Q3' }],
    },
    {
      id: 'finish',
      title: 'Ce que tu sais faire maintenant',
      human: 'La leçon est terminée. Ta maîtrise ne monte vraiment qu’avec des rappels sur plusieurs jours : le premier rappel espacé t’attend dans « Révisions ».',
      why: ['Une réussite le jour même prouve la compréhension ; une réussite trois jours plus tard prouve la mémoire. L’examen demande les deux.'],
      example: 'Prochaine étape suggérée : Graph Lab (essence, textiles) pour voir le cas négatif avec les mêmes outils.',
      me: 'Demain, tu devras reconstruire MSB sans aide. Pas réciter : reconstruire.',
      graphNote: 'Le graphique complet de la leçon.',
      graph: { show: ['MPB', 'MPC', 'MEB', 'MSB', 'QM', 'QS', 'DWL'], cursor: 20 },
      special: 'finish',
      prov: [{ kind: 'peda' }],
    },
  ],
  chain: [
    { text: 'J’achète un panneau pour moi', because: 'je compare sa valeur pour MOI (MPB) à son prix' },
    { text: 'Mes voisins respirent mieux', because: 'chaque panneau remplace une électricité plus polluante : MEB = 20 pour eux' },
    { text: 'Personne ne compte ces 20 €', because: 'ils ne passent par aucun prix : ni l’acheteur ni le vendeur ne les reçoivent' },
    { text: 'Le marché s’arrête à Qm = 18', because: 'là où MPB = MPC ; au-delà, l’acheteur seul ne trouve plus le panneau rentable' },
    { text: 'La société voudrait Q* = 22', because: 'elle compte acheteur + voisins : MSB = MPB + MEB = MSC' },
    { text: 'Les panneaux 18 → 22 manquent : DWL = 40', because: 'chacun valait plus pour la société (MSB) qu’il ne coûtait (MSC)' },
    { text: 'Subvention s* = MEB(Q*) = 20', because: 'elle ajoute à l’incitation privée exactement le bénéfice externe de la dernière unité souhaitable' },
  ],
  teach: {
    prompt: 'Pourquoi le marché des panneaux solaires produit-il trop peu, et que peut faire l’État ?',
    links: [
      {
        id: 'private', label: 'L’acheteur regarde sa valeur privée',
        explain: 'Point de départ : l’acheteur compare ce que vaut le panneau POUR LUI (MPB) à son prix.',
        patterns: [/\bmpb\b/, /(acheteur|consommateur|buyer|consumer|individu|menage|household|particulier|\bje\b|\bj'|\bmoi\b|\btu\b|\btoi\b|\bi\b|\bme\b).{0,80}(valeur|benefice|benefit|value|utile|vaut|gagne|interet|avantage|wtp|disposition|pour (lui|moi|toi|eux)|rentable|worth)/, /(prive|private)/],
        term: /\bmpb\b|marginal private benefit|benefice marginal prive/, termHint: 'En économiste : MPB (Marginal Private Benefit) = la valeur d’un panneau de plus pour l’acheteur.',
      },
      {
        id: 'third', label: 'Les tiers en profitent aussi',
        explain: 'Chaque panneau procure un bénéfice à des gens hors de la transaction (moins de pollution) : MEB.',
        patterns: [/\bmeb\b/, /(voisin|tiers|autres|others|third|externe|external|tout le monde|everyone|people|gens|societe|society).{0,60}(benefic|profit|gagn|benefit|gain|mieux|air|pollution|respir)/, /(moins de pollution|less pollution|reduit la pollution|reduces? pollution)/, /externalite positive|positive externalit/],
        term: /\bmeb\b|marginal external benefit|benefice marginal externe|externalite|externalit/, termHint: 'En économiste : externalité positive ; MEB (Marginal External Benefit) = bénéfice pour les autres d’un panneau de plus.',
      },
      {
        id: 'ignored', label: 'Le marché ignore ce bénéfice',
        explain: 'Le maillon central : personne dans la transaction ne reçoit le bénéfice des tiers, donc personne ne le compte. C’est POURQUOI le marché s’arrête trop tôt.',
        patterns: [/(ignor|ne (le |les )?(prend|compte|tient|considere|voit)|pas (pris|compte)|sans (compter|tenir)|not (take|account|consider|internaliz|count)|doesn'?t (take|consider|account|internaliz|count)|don'?t (consider|take|count|account)|n'integre pas|oubli|neglect|ne recoit pas|ne touche pas)/, /(internalis|internaliz)/],
        term: /internalis|internaliz/, termHint: 'En économiste : les acheteurs n’« internalisent » pas le bénéfice externe.',
      },
      {
        id: 'low', label: 'Le marché produit trop peu',
        explain: 'Conséquence : la quantité de marché (18) est inférieure à l’optimum social (22).',
        patterns: [/(trop peu|pas assez|sous[- ]?(produ|fourni|optimal|investi|consomm|provision)|under[- ]?(produc|provi|suppl|consum|invest)|too (few|little|low)|less than (the )?(social|optimal|efficient)|moins que (l'|le )?(optim|social)|inferieur|lower than|insuffisant)/, /\b18\b.{0,120}\b22\b/],
        term: /\bqm\b|qpriv|market (quantity|equilibrium)|equilibre (de|du) marche/, termHint: 'En économiste : Qm (équilibre de marché, MPB = MPC) < Q* (optimum social).',
      },
      {
        id: 'optimum', label: 'L’optimum social est plus élevé',
        explain: 'La société, qui compte acheteur + tiers, voudrait plus de panneaux : Q* où MSB = MSC.',
        patterns: [/(optimum social|socialement (optimal|souhaitable|efficace)|socially (optimal|efficient|desirable)|social optimum|q\*|qeff|q eff|efficient quantity|quantite (efficace|efficiente|optimale))/, /msb\s*=\s*msc/, /\b22\b/, /(societe|society).{0,50}(voudrait|want|prefer|aimerait|benefit|besoin|would|souhait)/],
        term: /\bmsb\b|marginal social benefit|benefice marginal social|\bq\*/, termHint: 'En économiste : Q* où MSB = MSC, avec MSB = MPB + MEB.',
      },
      {
        id: 'subsidy', label: 'Une subvention peut internaliser le bénéfice',
        explain: 'Remède : une subvention par unité égale à MEB(Q*) aligne l’incitation privée sur la valeur sociale.',
        patterns: [/(subvention|subsid|aide|incitation|incentive|pigou|government|gouvernement|\betat\b|\bstate\b|public).{0,90}(20|meb|externe|external|align|internalis|internaliz|rentable|worthwhile|helps?|aide|encourage|paie|pay|rembours|compens)/],
        term: /pigou|s\*|meb\(q\*\)|subvention (optimale|pigouvienne)|optimal subsidy/, termHint: 'En économiste : subvention pigouvienne s* = MEB(Q*) = 20.',
      },
    ],
    errors: [
      { mis: 'msb-government-money', patterns: [/msb\s*(=|est|is|c'?est|represente|represents|correspond)\s*(a |aux? )?(l'|the |de l'|le |du )?(argent|money|budget|depense|spending|subvention|subsidy|paiement|payment)/, /msb.{0,15}(argent|money).{0,20}(etat|gouvernement|government|state)/], refine: 'MSB n’est pas de l’argent versé : c’est la VALEUR d’un panneau de plus pour toute la société (MPB + MEB). La subvention, elle, est de l’argent.' },
      { mis: 'pos-ext-direction', patterns: [/(marche|market).{0,50}(trop de|surprodu|over[- ]?produc|too (much|many)|produit trop\b)/], refine: 'Avec une externalité POSITIVE, le marché produit TROP PEU (18 < 22). C’est l’externalité négative qui mène à la surproduction.' },
      { mis: 'transfer-is-dwl', patterns: [/(dwl|perte seche|deadweight).{0,30}(=|est|is|egal|equals?|correspond).{0,25}(subvention|subsid|depense|spending|recette|revenue|440)/], refine: 'La dépense de subvention est un transfert (contribuables → acheteurs/vendeurs). La DWL, ce sont les panneaux utiles jamais produits.' },
      { mis: 'q-star-is-market-eq', patterns: [/(sans|without).{0,30}(intervention|subvention|subsid|etat|government).{0,60}(atteint|reach|produit|produces).{0,25}(q\*|22|optimum)/], refine: 'Sans intervention, le marché s’arrête à Qm = 18. Q* = 22 n’est atteint qu’avec la subvention.' },
    ],
    model: 'Quand j’achète un panneau, je compare ce qu’il vaut POUR MOI (MPB) à son prix. Mais chaque panneau réduit aussi la pollution pour mes voisins : un bénéfice externe (MEB = 20) que personne dans la transaction ne reçoit, donc que personne ne compte. Le marché s’arrête là où MPB = MPC (18 panneaux), alors que la société, qui compte aussi les voisins (MSB = MPB + MEB), voudrait aller jusqu’à MSB = MSC (22). Les panneaux 18 → 22 valaient plus pour la société qu’ils ne coûtaient : c’est la perte sèche (40). Une subvention par panneau égale à MEB(Q*) = 20 rend ces panneaux rentables pour l’acheteur et amène le marché à 22.',
  },
  examId: 'e2020q3',
  ladder: [
    // Level 1 — terminology
    [
      {
        kind: 'choice', id: 'l1-meb', dim: 'terminology', tags: [...T, 'abbr:MEB'], q: 'Que signifie [[MEB]], littéralement ?',
        options: [
          { text: 'Marginal External Benefit : le bénéfice pour les AUTRES d’une unité de plus', correct: true, feedback: 'Exact.' },
          { text: 'Marginal Economic Benefit : le profit du producteur', feedback: 'E = External : il s’agit des tiers.' },
          { text: 'Le bénéfice externe total de toutes les unités', feedback: 'Marginal = UNE unité de plus. Le total est l’aire sous MEB.', mis: 'marginal-vs-total-external' },
        ],
      },
      {
        kind: 'choice', id: 'l1-msb', dim: 'terminology', tags: [...T, 'abbr:MSB'], q: 'Que signifie [[MSB]] ?',
        options: [
          { text: 'La valeur d’une unité de plus pour toute la société : acheteur + tiers', correct: true, feedback: 'Exact : MSB = MPB + MEB.' },
          { text: 'Le budget que l’État consacre à chaque unité', feedback: 'MSB est une valeur, pas une dépense publique.', mis: 'msb-government-money' },
          { text: 'Le bénéfice marginal du vendeur', feedback: 'Le vendeur n’a pas de « bénéfice marginal » ici : il a un coût (MPC) et un surplus (PS).' },
        ],
      },
      {
        kind: 'choice', id: 'l1-mpb', dim: 'terminology', tags: [...T, 'abbr:MPB'], q: 'Qui reçoit le bénéfice mesuré par [[MPB]] ?',
        options: [
          { text: 'L’acheteur, et lui seul', correct: true, feedback: 'Exact : P = Private.' },
          { text: 'Les voisins', feedback: 'Ça, c’est MEB.', mis: 'meb-vs-mec' },
          { text: 'La société entière', feedback: 'Ça, c’est MSB.' },
        ],
      },
    ],
    // Level 2 — intuition
    [
      {
        kind: 'choice', id: 'l2-above', dim: 'intuition', tags: T, q: 'Pourquoi MSB est-elle au-dessus de MPB ?',
        options: [
          { text: 'Parce que chaque unité procure aussi un bénéfice aux tiers (MEB > 0)', correct: true, feedback: 'Exact : l’écart vertical = MEB.' },
          { text: 'Parce que l’État ajoute de l’argent', feedback: 'Aucune intervention n’est nécessaire pour que MSB existe.', mis: 'msb-government-money' },
          { text: 'Parce que le coût social est plus élevé', feedback: 'Ça concernerait MSC et MEC (externalité négative).', mis: 'meb-vs-mec' },
        ],
      },
      {
        kind: 'choice', id: 'l2-stop', dim: 'intuition', tags: T, q: 'Pourquoi le marché s’arrête-t-il à Qm et pas à Q* ?',
        options: [
          { text: 'Au-delà de Qm, l’acheteur ne valorise pas assez le panneau suivant (MPB < MPC) car il ne compte pas le bénéfice des voisins', correct: true, feedback: 'Exact.' },
          { text: 'Parce que Qm est l’optimum social', feedback: 'Qm est l’équilibre privé ; l’optimum social est Q*.', mis: 'market-eq-is-optimum' },
          { text: 'Parce que les producteurs n’arrivent pas à produire plus', feedback: 'Ils le pourraient, mais aucun acheteur ne paierait le coût.' },
        ],
      },
      {
        kind: 'choice', id: 'l2-dwl', dim: 'graph', tags: [...T, 'dwl'], q: 'Qu’est-ce qui est perdu dans le triangle de DWL ?',
        options: [
          { text: 'La valeur nette des unités jamais produites alors que leur bénéfice social dépassait leur coût social', correct: true, feedback: 'Exact.' },
          { text: 'L’argent dépensé par l’État', feedback: 'Une dépense publique est un transfert.', mis: 'transfer-is-dwl' },
          { text: 'Le bénéfice total des voisins', feedback: 'Le bénéfice externe des unités produites est bien reçu ; la DWL concerne les unités manquantes.', mis: 'marginal-vs-total-external' },
        ],
      },
    ],
    // Level 3 — formula reconstruction
    [
      {
        kind: 'build', id: 'l3-msb', dim: 'formula', tags: [...T, 'abbr:MSB'], q: 'Reconstruis MSB à partir des acteurs.', lhs: 'MSB =',
        tokens: ['MPB', '+', 'MEB', '−', 'MPC', 'MEC'], accept: [['MPB', '+', 'MEB'], ['MEB', '+', 'MPB']],
        traps: [{ seq: ['MPB', '−', 'MEB'], feedback: 'Le bénéfice des tiers s’ajoute, il ne se soustrait pas.', mis: 'meb-vs-mec' }, { seq: ['MPB', '+', 'MEC'], feedback: 'MEC est un coût externe : il va dans MSC, pas dans MSB.', mis: 'meb-vs-mec' }],
        explain: 'Valeur pour la société = valeur pour l’acheteur (MPB) + valeur pour les tiers (MEB).',
      },
      {
        kind: 'build', id: 'l3-opt', dim: 'formula', tags: T, q: 'Reconstruis la condition de l’optimum social.', lhs: 'Optimum :',
        tokens: ['MSB', '=', 'MSC', 'MPB', 'MPC'], accept: [['MSB', '=', 'MSC'], ['MSC', '=', 'MSB']],
        traps: [{ seq: ['MPB', '=', 'MPC'], feedback: 'C’est l’équilibre du MARCHÉ, pas l’optimum social.', mis: 'market-eq-is-optimum' }],
        explain: 'La société ajoute des unités tant que leur valeur sociale dépasse leur coût social : MSB = MSC.',
      },
      {
        kind: 'build', id: 'l3-pigou', dim: 'formula', tags: [...T, 'pigou'], q: 'Reconstruis la subvention optimale.', lhs: 's* =',
        tokens: ['MEB(Q*)', 'MEB(Qm)', 'MEB(0)', 'MPB(Q*)'], accept: [['MEB(Q*)']],
        traps: [{ seq: ['MEB(0)'], feedback: 'L’intercept est le bénéfice externe de la PREMIÈRE unité, pas de la dernière souhaitable.', mis: 'pigou-intercept' }, { seq: ['MEB(Qm)'], feedback: 'Une fois subventionné, le marché ne reste pas à Qm : évalue à Q*.', mis: 'pigou-intercept' }],
        explain: 'Au point Q*, il faut MPB + s = MPC = MSB, donc s = MSB − MPB = MEB(Q*).',
      },
    ],
    // Level 4 — transfer: new context, which curves change?
    [
      {
        kind: 'choice', id: 'l4-bees', dim: 'recognition', tags: T,
        q: 'Un apiculteur installe des ruches pour son miel. Ses abeilles pollinisent gratuitement les vergers voisins. Sur le marché du miel, quelle courbe change ?',
        options: [
          { text: 'MSB passe au-dessus de MPB : externalité positive, le marché produit trop peu de ruches', correct: true, feedback: 'Exact : même mécanisme que les panneaux.' },
          { text: 'MSC passe au-dessus de MPC : externalité négative', feedback: 'Les vergers gagnent : c’est un bénéfice externe, pas un coût.', mis: 'meb-vs-mec' },
          { text: 'Rien : les vergers ne font pas partie du marché du miel', feedback: 'C’est précisément ce qui crée l’externalité : ils sont affectés sans être dans la transaction.' },
        ],
      },
      {
        kind: 'choice', id: 'l4-research', dim: 'recognition', tags: T,
        q: 'Une entreprise fait de la recherche ; ses découvertes, publiées, servent gratuitement à d’autres firmes. Sans intervention, la quantité de recherche est…',
        options: [
          { text: 'Trop faible : MSB > MPB, l’entreprise ignore le bénéfice des autres', correct: true, feedback: 'Exact (§11.1 : recherche = externalité positive).' },
          { text: 'Trop élevée : la recherche coûte cher', feedback: 'Le coût est supporté par l’entreprise ; c’est le bénéfice qui déborde.', mis: 'pos-ext-direction' },
          { text: 'Optimale : le marché est concurrentiel', feedback: 'La concurrence ne suffit pas quand un bénéfice échappe aux prix (§7.1).', mis: 'market-eq-is-optimum' },
        ],
      },
      {
        kind: 'numeric', id: 'l4-new', dim: 'calculation', tags: T, answer: 35, unit: 'unités',
        q: 'Nouveau marché : MPB = 60 − Q, MPC = Q, MEB = 10. Quelle est la quantité socialement optimale ?',
        explain: 'MSB = 70 − Q = Q ⇒ Q* = 35 (le marché s’arrêterait à 30).',
        traps: [{ value: 30, feedback: '30 = équilibre de marché (60 − Q = Q).', mis: 'q-star-is-market-eq' }, { value: 25, feedback: 'Tu as soustrait MEB : 50 − Q = Q.', mis: 'meb-vs-mec' }],
      },
    ],
    // Level 5 — exam English
    [
      {
        kind: 'text', id: 'l5-sse', dim: 'english', tags: T, lang: 'en',
        q: 'Write the 2-sentence SSE answer: why does a competitive market underprovide solar panels, and what policy fixes it?',
        rubric: [
          { id: 'ext', label: 'positive externality / external benefit', patterns: [/positive externalit|external benefit|\bmeb\b|benefit (to|for) (third|others|other people)/] },
          { id: 'msb', label: 'MSB > MPB (social benefit exceeds private benefit)', patterns: [/(social benefit|msb).{0,40}(exceed|above|greater|higher|larger)/, /msb\s*>\s*mpb/, /(private benefit|mpb).{0,40}(below|less|lower|smaller)/] },
          { id: 'not', label: 'buyers do not internalize / take it into account', patterns: [/(not|n't|fail to) (internaliz|take|account|consider|include)/, /ignor/] },
          { id: 'less', label: 'market quantity below the optimum', patterns: [/(underprovid|underproduc|under-provid|under-produc|too (few|little|low)|less than (the )?(socially )?(optimal|efficient)|below (the )?(socially )?(optimal|efficient))/] },
          { id: 'sub', label: 'subsidy = MEB at the optimum', patterns: [/(subsid).{0,60}(meb|marginal external benefit|external benefit|20)/, /pigouvian/] },
        ],
        model: 'There is a positive externality: each panel also benefits third parties, so the marginal social benefit exceeds the marginal private benefit (MSB = MPB + MEB). Because buyers do not internalize this external benefit, the competitive market produces less than the socially optimal quantity; a Pigouvian subsidy equal to MEB at the optimum (here 20 per panel) restores the efficient quantity.',
      },
    ],
  ],
};

// ————————————————————————————————————————————————————————————————————————
// Concept sheets (Fiche concept) for the slice

const C = (x: Concept) => x;
export const CONCEPTS: Record<string, Concept> = Object.fromEntries(
  [
    C({
      id: 'posext', name: 'Externalité positive', englishName: 'Positive externality', frenchName: 'externalité positive',
      literalMeaning: 'un effet bénéfique sur des tiers, qui n’est pas pris en compte dans la transaction',
      actors: ['buyer', 'producer', 'third', 'planner', 'gov'],
      intuition: 'Ton achat fait du bien à des gens qui ne paient rien ; comme tu ne reçois pas ce bien, tu ne le comptes pas, et tu achètes moins que ce que la société voudrait.',
      causalChain: ['achat privé', 'bénéfice pour des tiers (MEB)', 'non compté dans la décision', 'Qm < Q*', 'DWL', 'subvention s* = MEB(Q*)'],
      formula: ['MSB = MPB + MEB', 'Optimum : MSB = MSC'], units: 'MEB, MSB en € par unité ; DWL en €',
      graphMeaning: 'MSB parallèle au-dessus de la demande ; Q* à droite de Qm ; triangle DWL entre MSB et MSC.',
      assumptions: ['marché concurrentiel par ailleurs', 'MEB mesurable en monnaie', 'pas de coût externe (MSC = MPC) dans A6'],
      whenToUse: ['« benefit to others », « spillover », vaccination, recherche, éducation, panneaux solaires'],
      whenNotToUse: ['l’effet passe par un prix (effet pécuniaire)', 'le bien est non rival et non excluable : c’est un bien public (sommation verticale des MB individuels)'],
      misconceptions: ['pos-ext-direction', 'msb-government-money', 'market-eq-is-optimum'],
      examples: ['panneaux solaires (A6.3)', 'vaccins (E2020 Q3)', 'recherche verte (E2021 Q1b)'],
      examTriggers: ['benefit to third parties', 'not taken into account', 'spillover', 'vaccination'],
      examAnswer: 'There is a positive externality, so the marginal social benefit exceeds the marginal private benefit. The competitive market therefore produces less than the socially optimal quantity.',
      sourceRefs: ['11.1', '11.3', '15:A6#6.3', '16:E2020#Q3'],
      levels: {
        human: 'L’acheteur ignore le bénéfice que son panneau crée pour d’autres.',
        economist: 'Avec une externalité positive, MPB < MSB car MEB > 0 ; Qm < Q*.',
        exam: 'The competitive market underprovides the good because consumers do not internalize the marginal external benefit.',
      },
    }),
    C({
      id: 'MPB', name: 'Bénéfice marginal privé', englishName: 'Marginal Private Benefit', frenchName: 'bénéfice marginal privé', abbreviation: 'MPB',
      literalMeaning: 'la valeur, pour l’acheteur, d’une unité supplémentaire', actors: ['buyer'],
      intuition: 'Ce que tu serais prêt à payer pour UN panneau de plus.',
      causalChain: ['usages de moins en moins importants', 'valeur de l’unité suivante décroissante', 'courbe de demande'],
      formula: ['A6 : MPB = 100 − 3Q'], units: '€ par unité', graphMeaning: 'la demande (forme inverse)',
      assumptions: ['préférences usuelles (utilité marginale décroissante)'], whenToUse: ['décision de l’acheteur, équilibre privé'],
      whenNotToUse: ['mesurer la valeur sociale quand il y a un bénéfice externe : utiliser MSB'],
      misconceptions: ['direct-vs-inverse'], examples: ['le 10e panneau vaut 70 (A6)'], examTriggers: ['demand', 'willingness to pay', 'private benefit'],
      examAnswer: 'Demand reflects the marginal private benefit of buyers.', sourceRefs: ['11.1', '15:A6#6.3'],
      levels: { human: 'Ta valeur pour un panneau de plus.', economist: 'MPB(Q) = demande inverse = WTP marginale.', exam: 'The demand curve measures buyers’ marginal private benefit.' },
    }),
    C({
      id: 'MPC', name: 'Coût marginal privé', englishName: 'Marginal Private Cost', frenchName: 'coût marginal privé', abbreviation: 'MPC',
      literalMeaning: 'ce que coûte au producteur une unité supplémentaire', actors: ['producer'],
      intuition: 'Ce que coûte au fabricant le panneau suivant.',
      causalChain: ['ressources plus chères pour produire plus', 'coût de l’unité suivante croissant', 'courbe d’offre (p = MC)'],
      formula: ['A6 : MPC = 10 + 2Q'], units: '€ par unité', graphMeaning: 'l’offre en concurrence',
      assumptions: ['firmes price takers'], whenToUse: ['décision du producteur, équilibre privé'],
      whenNotToUse: ['mesurer le coût social quand il y a un dommage externe : utiliser MSC'],
      misconceptions: ['mc-vs-atc'], examples: ['le 18e panneau coûte 46 (A6)'], examTriggers: ['supply', 'marginal cost', 'private cost'],
      examAnswer: 'Supply reflects producers’ marginal private cost.', sourceRefs: ['11.1', '6.5', '15:A6#6.3'],
      levels: { human: 'Ce que coûte le panneau suivant au fabricant.', economist: 'MPC(Q) = offre inverse (p = MC).', exam: 'The supply curve measures firms’ marginal private cost.' },
    }),
    C({
      id: 'MEB', name: 'Bénéfice marginal externe', englishName: 'Marginal External Benefit', frenchName: 'bénéfice marginal externe', abbreviation: 'MEB',
      literalMeaning: 'le bénéfice créé pour les autres par une unité supplémentaire', actors: ['third'],
      intuition: 'Ce que gagnent tes voisins chaque fois que tu installes un panneau de plus.',
      causalChain: ['unité produite', 'effet sur des tiers', 'aucun prix ne le transmet'],
      formula: ['MEB = MSB − MPB'], units: '€ par unité', graphMeaning: 'écart vertical entre MPB et MSB ; le total est l’aire sous MEB',
      assumptions: ['effet mesurable en monnaie'], whenToUse: ['bénéfice pour des tiers'], whenNotToUse: ['dommage pour des tiers : MEC'],
      misconceptions: ['meb-vs-mec', 'marginal-vs-total-external'], examples: ['MEB = 20 (A6, E2020)'], examTriggers: ['external benefit', 'benefit to others'],
      examAnswer: 'MEB is the benefit to third parties of one additional unit.', sourceRefs: ['11.1'],
      levels: { human: 'Le gain des voisins pour un panneau de plus.', economist: 'MEB = MSB − MPB.', exam: 'The marginal external benefit is the benefit to third parties of an extra unit.' },
    }),
    C({
      id: 'MSB', name: 'Bénéfice marginal social', englishName: 'Marginal Social Benefit', frenchName: 'bénéfice marginal social', abbreviation: 'MSB',
      literalMeaning: 'la valeur d’une unité supplémentaire pour toute la société', actors: ['buyer', 'third', 'planner'],
      intuition: 'La valeur d’un panneau de plus si on compte toi ET tes voisins. Ce n’est pas de l’argent versé.',
      causalChain: ['valeur pour l’acheteur (MPB)', '+ valeur pour les tiers (MEB)', '= valeur sociale'],
      formula: ['MSB = MPB + MEB', 'A6 : MSB = 120 − 3Q'], units: '€ par unité', graphMeaning: 'MPB décalée vers le haut de MEB',
      assumptions: ['valeurs additionnables en €'], whenToUse: ['optimum social, DWL'], whenNotToUse: ['prédire la quantité du marché (il utilise MPB)'],
      misconceptions: ['msb-government-money', 'meb-vs-mec'], examples: ['MSB(18) = 66 dans A6'], examTriggers: ['social benefit', 'socially optimal'],
      examAnswer: 'MSB = MPB + MEB: the value of an extra unit to buyers and third parties together.', sourceRefs: ['11.1', '17:F34'],
      levels: { human: 'Ce que vaut un panneau de plus pour tout le monde.', economist: 'MSB = MPB + MEB ; MSB > MPB si MEB > 0.', exam: 'The marginal social benefit equals the marginal private benefit plus the marginal external benefit.' },
    }),
    C({
      id: 'MEC', name: 'Coût marginal externe', englishName: 'Marginal External Cost', frenchName: 'coût marginal externe', abbreviation: 'MEC',
      literalMeaning: 'le dommage imposé aux autres par une unité supplémentaire', actors: ['third'],
      intuition: 'Ce que subissent les riverains chaque fois que l’usine produit une unité de plus.',
      causalChain: ['unité produite', 'dommage pour des tiers', 'non payé par le producteur'],
      formula: ['MEC = MSC − MPC'], units: '€ par unité', graphMeaning: 'écart vertical entre MPC et MSC ; dommage total = aire sous MEC',
      assumptions: ['dommage mesurable'], whenToUse: ['pollution, bruit, congestion'], whenNotToUse: ['bénéfice pour des tiers : MEB'],
      misconceptions: ['meb-vs-mec', 'marginal-vs-total-external'], examples: ['MEC = Q (essence L11, textiles E2024)'], examTriggers: ['external cost', 'pollution', 'damage'],
      examAnswer: 'MEC is the damage imposed on third parties by one additional unit.', sourceRefs: ['11.1'],
      levels: { human: 'Le dommage subi par d’autres pour une unité de plus.', economist: 'MEC = MSC − MPC ; dommage total = ∫MEC.', exam: 'The marginal external cost is the damage to third parties from an extra unit.' },
    }),
    C({
      id: 'MSC', name: 'Coût marginal social', englishName: 'Marginal Social Cost', frenchName: 'coût marginal social', abbreviation: 'MSC',
      literalMeaning: 'le coût d’une unité supplémentaire pour toute la société', actors: ['producer', 'third', 'planner'],
      intuition: 'Ce que coûte vraiment une unité de plus : au fabricant ET aux riverains.',
      causalChain: ['coût du producteur (MPC)', '+ dommage aux tiers (MEC)', '= coût social'],
      formula: ['MSC = MPC + MEC'], units: '€ par unité', graphMeaning: 'MPC décalée vers le haut de MEC',
      assumptions: ['coûts additionnables'], whenToUse: ['optimum social, taxe pigouvienne'], whenNotToUse: ['prédire la quantité du marché (il utilise MPC)'],
      misconceptions: ['meb-vs-mec'], examples: ['essence : MSC = 10 + 2Q'], examTriggers: ['social cost'],
      examAnswer: 'MSC = MPC + MEC.', sourceRefs: ['11.1', '17:F34'],
      levels: { human: 'Le vrai coût d’une unité de plus, pour tous.', economist: 'MSC = MPC + MEC.', exam: 'The marginal social cost equals the marginal private cost plus the marginal external cost.' },
    }),
    C({
      id: 'Qm', name: 'Équilibre de marché', englishName: 'Market (private) equilibrium', frenchName: 'équilibre de marché', abbreviation: 'Qm',
      literalMeaning: 'la quantité échangée par un marché sans intervention', actors: ['buyer', 'producer'],
      intuition: 'Là où s’arrêtent les poignées de main : la valeur du dernier panneau pour l’acheteur = son coût pour le fabricant.',
      causalChain: ['MPB > MPC : échange', 'MPB < MPC : pas d’échange', 'arrêt à MPB = MPC'],
      formula: ['MPB = MPC'], units: 'unités', graphMeaning: 'intersection demande–offre',
      assumptions: ['concurrence, price takers'], whenToUse: ['prédire ce que fait le marché'], whenNotToUse: ['juger ce qui est optimal pour la société'],
      misconceptions: ['market-eq-is-optimum', 'q-star-is-market-eq'], examples: ['A6 : 18 ; vaccins : 45 ; essence : 45'], examTriggers: ['market equilibrium', 'unregulated market'],
      examAnswer: 'The unregulated market produces where MPB = MPC.', sourceRefs: ['11.1'],
      levels: { human: 'Où le marché s’arrête tout seul.', economist: 'Qm : MPB = MPC.', exam: 'The competitive equilibrium is where marginal private benefit equals marginal private cost.' },
    }),
    C({
      id: 'Qstar', name: 'Optimum social', englishName: 'Socially optimal quantity', frenchName: 'quantité socialement optimale', abbreviation: 'Q*',
      literalMeaning: 'la quantité qui maximise le bien-être total', actors: ['planner'],
      intuition: 'La quantité que choisirait quelqu’un qui compte tout le monde.',
      causalChain: ['MSB > MSC : ajouter augmente W', 'MSB < MSC : ajouter diminue W', 'maximum à MSB = MSC'],
      formula: ['MSB = MSC'], units: 'unités', graphMeaning: 'intersection MSB–MSC',
      assumptions: ['bien-être = somme des surplus en €'], whenToUse: ['benchmark de la DWL et des politiques'], whenNotToUse: ['ce n’est pas ce que fait le marché sans intervention'],
      misconceptions: ['q-star-is-market-eq', 'dwl-private-benchmark'], examples: ['A6 : 22 ; vaccins : 55 ; essence : 30'], examTriggers: ['socially optimal', 'efficient', 'welfare maximizing'],
      examAnswer: 'The socially optimal quantity is where MSB = MSC.', sourceRefs: ['11.1', '18:Q*'],
      levels: { human: 'Ce que voudrait la société entière.', economist: 'Q* : MSB = MSC.', exam: 'Welfare is maximized where marginal social benefit equals marginal social cost.' },
    }),
    C({
      id: 'DWL', name: 'Perte sèche', englishName: 'Deadweight Loss', frenchName: 'perte sèche', abbreviation: 'DWL',
      literalMeaning: 'le surplus social net perdu par rapport au benchmark efficient', actors: ['planner'],
      intuition: 'La valeur des échanges utiles qui n’ont pas eu lieu (ou la valeur détruite par les échanges nuisibles).',
      causalChain: ['unité manquante ou en trop', 'écart MSB − MSC pour cette unité', 'somme des écarts = aire'],
      formula: ['DWL = W(Q*) − W(Q)', 'linéaire : ½ × |Q* − Q| × écart'], units: '€',
      graphMeaning: 'triangle entre MSB et MSC, entre Q observé et Q*',
      assumptions: ['benchmark = optimum social', 'courbes linéaires pour la formule du triangle'], whenToUse: ['comparer une situation à l’optimum'],
      whenNotToUse: ['les transferts (taxe, subvention) ne sont pas des DWL'],
      misconceptions: ['transfer-is-dwl', 'dwl-private-benchmark'], examples: ['A6 : 40 ; vaccins : 100 ; essence : 337.5'], examTriggers: ['deadweight loss', 'welfare loss', 'efficiency loss'],
      examAnswer: 'The deadweight loss is the net surplus lost relative to the efficient outcome.', sourceRefs: ['7.1', '11.2'],
      levels: { human: 'Ce que la société aurait pu gagner et n’a pas gagné.', economist: 'DWL = aire entre MSB et MSC sur [Q, Q*].', exam: 'These units are not produced even though their social benefit exceeds their social cost.' },
    }),
    C({
      id: 'pigou', name: 'Subvention pigouvienne', englishName: 'Pigouvian subsidy', frenchName: 'subvention pigouvienne', abbreviation: 's*',
      literalMeaning: 'une aide par unité qui fait intégrer le bénéfice externe dans la décision privée', actors: ['gov', 'buyer'],
      intuition: 'L’État te paie le service que ton dernier panneau rend aux voisins : tu décides alors comme si tu les comptais.',
      causalChain: ['incitation privée = MPB + s', 's = MEB(Q*)', 'MPB + s = MSB au point Q*', 'marché à Q*'],
      formula: ['s* = MEB(Q*)'], units: '€ par unité', graphMeaning: 'MPB + s coupe MPC en Q* ; rectangle s × Q = dépense publique',
      assumptions: ['marché concurrentiel par ailleurs', 'externalité non déjà internalisée'], whenToUse: ['externalité positive'],
      whenNotToUse: ['externalité négative : taxe t* = MEC(Q*)', 'MEB variable : jamais l’intercept'],
      misconceptions: ['pigou-intercept', 'transfer-is-dwl', 'ignore-subsidy-cost', 'oversubsidy'], examples: ['A6 : 20 ; variante : 10'], examTriggers: ['subsidy', 'internalize', 'Pigouvian'],
      examAnswer: 'A subsidy equal to the marginal external benefit at the efficient quantity makes buyers internalize the externality.', sourceRefs: ['11.3', '17:F35'],
      levels: { human: 'L’État comble l’écart entre ta valeur et celle de la société.', economist: 's* = MEB(Q*) ⇒ MPB + s* = MPC en Q*.', exam: 'The optimal subsidy equals MEB at the social optimum.' },
    }),
  ].map((c) => [c.id, c]),
);

// ————————————————————————————————————————————————————————————————————————
// Formula sheets: derivation, terms, units, assumptions, use / don't use, confusion, triggers

export const FORMULAS: FormulaSheet[] = [
  {
    id: 'f-market', title: 'Équilibre de marché', formula: 'MPB = MPC',
    derivation: ['Que compare l’acheteur ? Sa valeur MPB au prix.', 'Que compare le vendeur ? Son coût MPC au prix.', 'Tant que MPB > MPC, un prix arrange les deux. Où s’arrêtent les échanges ? Là où MPB = MPC.'],
    terms: [{ sym: 'MPB', meaning: 'valeur de l’unité suivante pour l’acheteur' }, { sym: 'MPC', meaning: 'coût de l’unité suivante pour le producteur' }],
    units: '€ par unité des deux côtés', assumptions: ['concurrence, price takers', 'pas d’intervention'],
    use: ['prédire Qm et le prix du marché'], notUse: ['juger l’optimum quand il y a une externalité'],
    confusion: 'Ce n’est pas l’optimum social : MPB = MPC ignore les tiers.', triggers: ['competitive market', 'unregulated', 'equilibrium'], refs: ['11.1', '17:F01'],
  },
  {
    id: 'f-msb', title: 'Bénéfice marginal social', formula: 'MSB = MPB + MEB',
    derivation: ['Qui gagne quand une unité de plus est produite ? L’acheteur…', '…et les tiers.', 'Valeur totale pour la société = valeur acheteur + valeur tiers.'],
    terms: [{ sym: 'MSB', meaning: 'valeur sociale de l’unité suivante' }, { sym: 'MPB', meaning: 'valeur pour l’acheteur' }, { sym: 'MEB', meaning: 'valeur pour les tiers' }],
    units: '€ par unité', assumptions: ['valeurs mesurables en €, additionnables'],
    use: ['externalité positive de consommation (vaccins, panneaux)'], notUse: ['dommage aux tiers (→ MSC = MPC + MEC)', 'bien public : on somme les MB de chaque personne pour le même Q'],
    confusion: 'MSB n’est pas un budget public ; c’est une valeur.', triggers: ['benefit to others', 'positive externality'], refs: ['11.1', '17:F34'],
  },
  {
    id: 'f-msc', title: 'Coût marginal social', formula: 'MSC = MPC + MEC',
    derivation: ['Quel coût le producteur paie-t-il ? MPC.', 'Son activité impose-t-elle un coût à d’autres ? MEC.', 'Coût total pour la société = MPC + MEC.'],
    terms: [{ sym: 'MSC', meaning: 'coût social de l’unité suivante' }, { sym: 'MPC', meaning: 'coût pour le producteur' }, { sym: 'MEC', meaning: 'dommage pour les tiers' }],
    units: '€ par unité', assumptions: ['dommage mesurable'], use: ['pollution, bruit, congestion'], notUse: ['bénéfice externe (→ MSB)'],
    confusion: 'MEC est marginal : le dommage total est l’aire sous MEC.', triggers: ['pollution', 'external cost'], refs: ['11.1', '17:F34'],
  },
  {
    id: 'f-opt', title: 'Optimum social', formula: 'MSB = MSC',
    derivation: ['Une unité de plus augmente-t-elle le bien-être ? Oui si MSB > MSC.', 'Elle le diminue si MSB < MSC.', 'Le bien-être est maximal quand MSB = MSC.'],
    terms: [{ sym: 'MSB', meaning: 'valeur sociale de l’unité suivante' }, { sym: 'MSC', meaning: 'coût social de l’unité suivante' }],
    units: '€ par unité', assumptions: ['W = somme des surplus en €'], use: ['tout benchmark d’efficacité, avec ou sans externalité'], notUse: ['prédire le marché'],
    confusion: 'Règle universelle : seul change le côté qui bouge (bénéfice ou coût).', triggers: ['socially optimal', 'efficient', 'welfare maximizing'], refs: ['11.1', '17:F34'],
  },
  {
    id: 'f-pigou', title: 'Subvention / taxe pigouvienne', formula: 's* = MEB(Q*)   ·   t* = MEC(Q*)',
    derivation: ['Avec une subvention s, l’acheteur décide sur MPB + s.', 'On veut que la décision privée tombe sur Q* : MPB(Q*) + s = MSC(Q*) = MSB(Q*).', 'Donc s = MSB(Q*) − MPB(Q*) = MEB(Q*).'],
    terms: [{ sym: 's*', meaning: 'subvention optimale par unité' }, { sym: 'MEB(Q*)', meaning: 'bénéfice externe de la dernière unité souhaitable' }, { sym: 't*', meaning: 'taxe optimale par unité' }],
    units: '€ par unité', assumptions: ['marché concurrentiel par ailleurs', 'externalité non internalisée'],
    use: ['corriger une externalité par un prix'], notUse: ['monopole (autre distorsion)', 'MEB/MEC variable évalué à l’intercept ou à Qm'],
    confusion: 'Évaluer à Q*, pas à Qm ni à Q = 0.', triggers: ['optimal tax', 'optimal subsidy', 'internalize'], refs: ['11.3', '17:F35'],
  },
  {
    id: 'f-dwl', title: 'Perte sèche (cas linéaire)', formula: 'DWL = ½ × |Q* − Q| × |MSB(Q) − MSC(Q)|',
    derivation: ['Quelles unités posent problème ? Celles entre Q et Q*.', 'Combien perd-on sur chacune ? |MSB − MSC|.', 'Les écarts décroissent linéairement jusqu’à 0 en Q* : un triangle.'],
    terms: [{ sym: 'Q', meaning: 'quantité observée (marché ou avec politique)' }, { sym: 'Q*', meaning: 'optimum social' }],
    units: '€ (€/unité × unités)', assumptions: ['courbes linéaires sur l’intervalle'], use: ['mesurer l’inefficacité'], notUse: ['courbes non linéaires (intégrer)', 'benchmark privé quand une externalité existe'],
    confusion: 'Le benchmark est social : entre MSB et MSC, pas entre demande et offre privées.', triggers: ['deadweight loss', 'welfare loss'], refs: ['11.2', '2.3'],
  },
  {
    id: 'f-w', title: 'Bien-être avec État et externalité', formula: 'W = CS + PS + recettes − subventions + bénéfices externes − dommages externes',
    derivation: ['Qui gagne ou perd ? Acheteurs (CS), vendeurs (PS), contribuables (État), tiers (externes).', 'Les transferts apparaissent des deux côtés et s’annulent.', 'Il reste W = ∫(MSB − MSC).'],
    terms: [{ sym: 'CS', meaning: 'surplus des acheteurs' }, { sym: 'PS', meaning: 'surplus des vendeurs' }],
    units: '€', assumptions: ['coûts fixes inchangés'], use: ['comparer des politiques'], notUse: ['oublier un groupe'],
    confusion: 'Recette fiscale et dépense de subvention sont des transferts, pas des pertes.', triggers: ['welfare', 'total surplus'], refs: ['7.1', '11.2', '17:F21'],
  },
];

// ————————————————————————————————————————————————————————————————————————
// Why-chains (one causal layer deeper per click), used by Why mode and the graph inspector

export const WHY: Record<string, WhyItem> = Object.fromEntries(
  ([
    { id: 'f:market', group: 'Formules', title: 'Équilibre de marché', formula: 'MPB = MPC', refs: ['11.1'], layers: [
      'Tant que MPB > MPC, un prix entre les deux fait gagner l’acheteur ET le vendeur : l’échange a lieu.',
      'Dès que MPB < MPC, aucun prix ne convient aux deux : l’acheteur refuse de payer le coût, le vendeur refuse de vendre à perte.',
      'Le dernier échange se fait donc là où les deux sont égaux. À ce prix, quantité demandée = quantité offerte (§3).',
      'Fond : chacun ne compare que SES gains et SES coûts. C’est l’hypothèse de comportement du modèle concurrentiel.',
    ] },
    { id: 'f:msb', group: 'Formules', title: 'Bénéfice marginal social', formula: 'MSB = MPB + MEB', refs: ['11.1', '17:F34'], layers: [
      'La société, c’est tout le monde : l’acheteur ET les tiers.',
      'Une même unité profite à l’acheteur (MPB) et aux tiers (MEB) : pour CETTE unité, les valeurs s’additionnent.',
      'On additionne verticalement, au même Q, parce que c’est la même unité qui profite à plusieurs personnes — comme pour un bien public (§11.8).',
      'Fond : le bien-être est une somme de gains monétaires de toutes les personnes concernées (§7.1). Une valeur oubliée est une erreur de mesure.',
    ] },
    { id: 'f:msc', group: 'Formules', title: 'Coût marginal social', formula: 'MSC = MPC + MEC', refs: ['11.1', '17:F34'], layers: [
      'Une unité de plus coûte au producteur (MPC)…',
      '…et peut imposer un dommage à d’autres (MEC) que le producteur ne paie pas.',
      'Le coût réel pour la société additionne les deux, pour la même unité.',
      'Fond : un coût est une ressource ou un bien-être sacrifié, quel que soit celui qui le supporte.',
    ] },
    { id: 'f:opt', group: 'Formules', title: 'Optimum social', formula: 'MSB = MSC', refs: ['11.1', '11.2'], layers: [
      'Avant Q*, une unité de plus vaut plus pour la société qu’elle ne lui coûte : l’ajouter augmente le bien-être.',
      'Après Q*, c’est l’inverse : l’ajouter le diminue.',
      'Le bien-être est donc maximal au croisement. C’est la règle universelle, quel que soit le type d’externalité (§11.1).',
      'Fond : W(Q) = ∫(MSB − MSC) ; à l’optimum intérieur, sa dérivée MSB(Q) − MSC(Q) est nulle (§11.2).',
    ] },
    { id: 'f:pigou', group: 'Formules', title: 'Subvention pigouvienne', formula: 's* = MEB(Q*)', refs: ['11.3', '17:F35'], layers: [
      'Avec une subvention s, l’acheteur décide comme si sa valeur était MPB + s.',
      'On veut que cette décision privée tombe sur Q* : il faut MPB(Q*) + s = MPC(Q*) = MSC(Q*).',
      'Or MSB(Q*) = MSC(Q*) et MSB = MPB + MEB. Donc s = MEB(Q*).',
      'Si MEB dépend de Q, seule sa valeur au point Q* convient : à l’intercept ou à Qm, la subvention serait trop forte ou trop faible (§11.3).',
    ] },
    { id: 'f:dwl', group: 'Formules', title: 'Perte sèche', formula: 'DWL = ½ × (Q* − Qm) × [MSB(Qm) − MSC(Qm)]', refs: ['11.2', '2.3'], layers: [
      'Chaque unité manquante entre Qm et Q* aurait rapporté MSB − MSC à la société.',
      'Ces écarts vont de 20 (à Qm) à 0 (à Q*) et diminuent en ligne droite (courbes linéaires).',
      'La somme de tranches qui décroissent linéairement = l’aire d’un triangle = ½ × base × hauteur (§2.3).',
      'Si les courbes ne sont pas linéaires, on intègre la différence MSB − MSC entre les deux quantités (§11.2).',
    ] },
    { id: 'f:w', group: 'Formules', title: 'Bien-être total', formula: 'W = CS + PS − S + EB', refs: ['7.1', '11.2'], layers: [
      'Le bien-être additionne les gains nets de TOUS : acheteurs (CS), vendeurs (PS), contribuables (− dépense S), tiers (+ bénéfice externe EB).',
      'La subvention apparaît deux fois : + dans CS et PS (elle augmente leurs gains) et − pour l’État. C’est un transfert qui s’annule.',
      'Ce qui reste est ∫(MSB − MSC) : la vraie valeur créée moins le vrai coût (§11.2).',
    ] },
    { id: 'c:MPB', group: 'Courbes', title: 'MPB — demande', formula: 'MPB(Q)', refs: ['11.1', '4.1'], layers: [
      'Sa hauteur au point Q = ce que vaut la Q-ième unité pour l’acheteur qui l’achète.',
      'Elle descend parce que chaque unité supplémentaire sert un usage moins important (utilité marginale décroissante, §4.1).',
      'C’est la demande : à un prix p, les acheteurs achètent jusqu’à ce que MPB = p.',
      'Elle ne contient QUE la valeur pour l’acheteur — pas celle des tiers.',
    ] },
    { id: 'c:MPC', group: 'Courbes', title: 'MPC — offre', formula: 'MPC(Q)', refs: ['11.1', '6.5'], layers: [
      'Sa hauteur au point Q = ce que coûte au producteur la Q-ième unité.',
      'Elle monte parce que produire davantage oblige à utiliser des ressources plus coûteuses (§6.4).',
      'C’est l’offre : une firme price taker produit jusqu’à p = MC (§6.5).',
      'Elle ne contient QUE le coût du producteur — pas les dommages éventuels aux tiers.',
    ] },
    { id: 'c:MEB', group: 'Courbes', title: 'MEB — bénéfice externe', formula: 'MEB(Q)', refs: ['11.1'], layers: [
      'Sa hauteur = ce qu’UNE unité de plus apporte aux tiers.',
      'Personne ne paie ni ne reçoit cet effet : il n’est dans aucun prix.',
      'C’est une courbe de VALEUR, pas une courbe de marché : on ne peut pas y lire un prix.',
      'L’aire sous MEB de 0 à Q = bénéfice externe TOTAL des unités produites.',
    ] },
    { id: 'c:MSB', group: 'Courbes', title: 'MSB — bénéfice social', formula: 'MSB = MPB + MEB', refs: ['11.1'], layers: [
      'Elle additionne la valeur pour l’acheteur et la valeur pour les tiers.',
      'Elle est au-dessus de MPB d’exactement MEB.',
      'Ce n’est pas de l’argent versé par qui que ce soit : c’est une mesure de valeur sociale.',
    ] },
    { id: 'c:MEC', group: 'Courbes', title: 'MEC — coût externe', formula: 'MEC(Q)', refs: ['11.1'], layers: [
      'Sa hauteur = le dommage qu’impose aux tiers UNE unité de plus (pollution, bruit).',
      'Le producteur ne le paie pas : il n’est pas dans MPC.',
      'C’est un coût MARGINAL : le dommage TOTAL est l’aire sous MEC (si MEC = Q, dommage total = Q²/2, §11.1).',
    ] },
    { id: 'c:MSC', group: 'Courbes', title: 'MSC — coût social', formula: 'MSC = MPC + MEC', refs: ['11.1'], layers: [
      'Elle additionne le coût du producteur et le dommage aux tiers.',
      'Elle est au-dessus de MPC d’exactement MEC.',
      'La société compare MSB à MSC ; le marché compare MPB à MPC.',
    ] },
    { id: 'c:POL+', group: 'Courbes', title: 'MPB + s — incitation de l’acheteur subventionné', formula: 'MPB + s', refs: ['7.3', '11.3'], layers: [
      'L’acheteur reçoit s par unité (directement ou via un prix plus bas) : sa décision privée devient MPB + s face à MPC.',
      'Si s = MEB(Q*), cette courbe coupe MPC exactement en Q*.',
      'Qui reçoit juridiquement la subvention ne change pas la quantité : seul l’écart p_s − p_b = s compte (§7.3).',
    ] },
    { id: 'c:POL-', group: 'Courbes', title: 'MPC + t — coût du producteur taxé', formula: 'MPC + t', refs: ['7.2', '11.3'], layers: [
      'Le producteur doit payer t par unité : son coût privé devient MPC + t.',
      'Si t = MEC(Q*), cette courbe coupe MPB exactement en Q*.',
      'Qui verse juridiquement la taxe ne change pas l’équilibre de ce modèle (§7.2).',
    ] },
    { id: 'r:qm', group: 'Résultats', title: 'Qm = 18', formula: '100 − 3Q = 10 + 2Q', refs: ['15:A6#6.3'], layers: [
      '100 − 3Q = 10 + 2Q ⇒ 5Q = 90 ⇒ Q = 18.',
      'À 18 : valeur pour l’acheteur = coût = 46. Au 19e : 43 < 48.',
      'C’est le point où les incitations PRIVÉES s’équilibrent — pas forcément le meilleur point pour la société.',
    ] },
    { id: 'r:qs', group: 'Résultats', title: 'Q* = 22', formula: '120 − 3Q = 10 + 2Q', refs: ['15:A6#6.3'], layers: [
      '120 − 3Q = 10 + 2Q ⇒ 5Q = 110 ⇒ Q = 22.',
      'À 22 : valeur pour la société (34 + 20 = 54) = coût (54).',
      'Q* > Qm parce que MSB > MPB : la société valorise chaque panneau 20 de plus que l’acheteur.',
    ] },
    { id: 'r:dwl', group: 'Résultats', title: 'DWL = 40', formula: '½ × 4 × 20', refs: ['15:A6#6.3'], layers: [
      'Base : 22 − 18 = 4 panneaux manquants.',
      'Hauteur : à Q = 18, MSB − MPC = 66 − 46 = 20.',
      'Triangle : ½ × 4 × 20 = 40.',
      'Vérification : W(22) − W(18) = 1210 − 1170 = 40 (§15 A6).',
    ] },
    { id: 'r:s', group: 'Résultats', title: 's* = 20', formula: 'MEB(22) = 20', refs: ['15:A6#6.3', '11.3'], layers: [
      'MEB est constant à 20 : le bénéfice externe du 22e panneau est 20.',
      'Avec s = 20 : 100 − 3Q + 20 = 10 + 2Q ⇒ Q = 22.',
      'p_b = 34, p_s = 54 : l’écart de 20 est payé par l’État.',
    ] },
    { id: 'r:w', group: 'Résultats', title: 'W : 1170 → 1210', formula: '486 + 324 + 360 → 726 + 484 − 440 + 440', refs: ['15:A6#6.3'], layers: [
      'Sans intervention : CS 486 + PS 324 + bénéfice externe 360 = 1170.',
      'Avec s* : CS 726 + PS 484 − subvention 440 + bénéfice externe 440 = 1210.',
      'Gain = 40 = la DWL récupérée. La dépense de 440 n’est pas une perte : c’est un transfert.',
    ] },
    { id: 'r:gov', group: 'Résultats', title: 'La dépense de 440 n’est pas une DWL', formula: 's × Q = 440', refs: ['7.1', '7.3'], layers: [
      'L’État paie 440 ; acheteurs et vendeurs reçoivent ces 440 (prix payé plus bas, prix reçu plus haut).',
      'Un transfert change QUI gagne, pas COMBIEN la société gagne au total (§7.1).',
      'La DWL mesure des échanges qui créent (ou détruisent) de la valeur réelle — pas des euros qui changent de poche.',
    ] },
    { id: 'a:dwl-under', group: 'Zones', title: 'Triangle DWL — unités manquantes', refs: ['11.2'], layers: [
      'Prends une unité manquante entre la quantité échangée et Q*. Sa hauteur dans le triangle = ce qu’elle vaut pour la société (MSB) − ce qu’elle coûte (MSC). C’est du bien-être qu’on aurait pu créer et qu’on n’a pas créé.',
      'Fais-le pour chaque unité manquante : les tranches empilées forment le triangle.',
      'Le triangle est au-dessus de MSC et sous MSB parce que ce sont les deux seules grandeurs qui comptent pour la société : valeur sociale et coût social.',
      'Il n’est PAS entre MPB et MPC : sur cet intervalle, MPB < MPC — c’est justement pour ça que le marché ne produit pas ces unités.',
    ] },
    { id: 'a:dwl-over', group: 'Zones', title: 'Triangle DWL — unités en trop', refs: ['11.2'], layers: [
      'Prends une unité produite au-delà de Q*. Sa hauteur = ce qu’elle coûte à la société (MSC) − ce qu’elle lui rapporte (MSB). C’est de la valeur détruite.',
      'Elle est produite quand même parce que l’acheteur et le vendeur ne voient que MPB et MPC (ou parce qu’une subvention trop forte les pousse).',
      'Toutes ces tranches empilées forment le triangle entre MSC (en haut) et MSB (en bas).',
    ] },
    { id: 'a:cs', group: 'Zones', title: 'Surplus du consommateur (CS)', refs: ['7.1'], layers: [
      'Pour chaque unité achetée : ce qu’elle vaut pour l’acheteur (hauteur de MPB) − ce qu’il a payé (p_b).',
      'Somme sur toutes les unités achetées = gain net des acheteurs.',
    ] },
    { id: 'a:ps', group: 'Zones', title: 'Surplus du producteur (PS)', refs: ['7.1'], layers: [
      'Pour chaque unité vendue : prix reçu (p_s) − coût de cette unité (hauteur de MPC).',
      'Somme = gain net des vendeurs, avant coûts fixes (PS ≠ profit).',
    ] },
    { id: 'a:gov+', group: 'Zones', title: 'Dépense de subvention', refs: ['7.3'], layers: [
      'Rectangle = s × Q : ce que paient les contribuables.',
      'Cet argent n’est pas détruit : il finance la baisse de p_b et la hausse de p_s.',
      'Dans W, on le soustrait (contribuables) et il réapparaît dans CS + PS : c’est un transfert.',
    ] },
    { id: 'a:gov-', group: 'Zones', title: 'Recette fiscale', refs: ['7.2'], layers: [
      'Rectangle = t × Q : ce que reçoit l’État.',
      'C’est un transfert des acheteurs et vendeurs vers l’État, pas une perte sèche (§7.2).',
      'Elle peut financer d’autres dépenses : la DWL d’une taxe ne suffit pas à juger toute la politique.',
    ] },
    { id: 'a:ext+', group: 'Zones', title: 'Bénéfice externe total', refs: ['11.1', '15:A6#6.3'], layers: [
      'Aire sous MEB de 0 à Q : somme des bénéfices externes de chaque unité produite.',
      'Exemple A6 : 20 × 18 = 360 sans intervention, 20 × 22 = 440 à l’optimum.',
    ] },
    { id: 'a:ext-', group: 'Zones', title: 'Dommage externe total', refs: ['11.1'], layers: [
      'Aire sous MEC de 0 à Q : somme des dommages de chaque unité produite.',
      'Si MEC = Q : dommage total = Q²/2, pas Q² (§11.1).',
    ] },
  ] as WhyItem[]).map((w) => [w.id, w]),
);

// ————————————————————————————————————————————————————————————————————————
// Practice problems (Pratique)

const step = (s: Step) => s;
export const PROBLEMS: Problem[] = [
  {
    id: 'p-solar', title: 'Panneaux solaires — exercice complet', ref: '15:A6#6.3', prov: 'recalc', preset: 'solar', show: ['MPB', 'MPC'],
    context: '{{MPB = 100 − 3Q}}, {{MPC = 10 + 2Q}}, chaque panneau procure {{MEB = 20}} aux tiers.',
    steps: [
      step({ id: 's1', q: 'Quantité de marché Qm (MPB = MPC) ?', answer: 18, dim: 'calculation', tags: T, explain: '100 − 3Q = 10 + 2Q ⇒ 5Q = 90 ⇒ Qm = 18.', reveal: ['QM'],
        traps: [{ value: 22, feedback: '22 utilise MSB : c’est l’optimum social, pas le marché.', mis: 'market-eq-is-optimum' }] }),
      step({ id: 's2', q: 'Prix de marché ?', answer: 46, dim: 'calculation', tags: T, explain: 'p = MPB(18) = 100 − 54 = 46.',
        traps: [{ value: 34, feedback: '34 = MPB(22), le prix acheteur avec subvention.' }] }),
      step({ id: 's3', q: 'MSB = ? − 3Q : quelle est l’ordonnée à l’origine ?', answer: 120, dim: 'formula', tags: T, explain: 'MSB = MPB + MEB = 100 − 3Q + 20 = 120 − 3Q.', reveal: ['MEB', 'MSB'],
        traps: [{ value: 80, feedback: 'Tu as soustrait MEB : un bénéfice externe s’AJOUTE.', mis: 'meb-vs-mec' }] }),
      step({ id: 's4', q: 'Quantité socialement optimale Q* ?', answer: 22, dim: 'calculation', tags: T, explain: '120 − 3Q = 10 + 2Q ⇒ Q* = 22.', reveal: ['QS'],
        traps: [{ value: 18, feedback: '18 = Qm. L’optimum utilise MSB.', mis: 'q-star-is-market-eq' }] }),
      step({ id: 's5', q: 'DWL sans intervention ?', answer: 40, dim: 'calculation', tags: [...T, 'dwl'], explain: '½ × (22 − 18) × 20 = 40.', reveal: ['DWL'],
        traps: [{ value: 80, feedback: 'Oubli du ½ : l’écart passe de 20 à 0.' }, { value: 360, feedback: '360 = bénéfice externe total (20 × 18), pas la DWL.', mis: 'marginal-vs-total-external' }] }),
      step({ id: 's6', q: 'Subvention optimale par panneau s* ?', answer: 20, dim: 'formula', tags: [...T, 'pigou'], explain: 's* = MEB(Q*) = 20.', reveal: ['POL', 'QP', 'PRICES', 'GOV'], policy: 20,
        traps: [{ value: 40, feedback: '40 est la DWL (une aire), pas un montant par unité.' }, { value: 440, feedback: '440 = dépense totale (20 × 22).' }] }),
      step({ id: 's7', q: 'Avec s*, prix payé par l’acheteur ?', answer: 34, dim: 'calculation', tags: [...T, 'pigou'], explain: 'p_b = MPB(22) = 34.', traps: [{ value: 54, feedback: '54 = prix reçu par le vendeur.' }] }),
      step({ id: 's8', q: 'Avec s*, prix reçu par le vendeur ?', answer: 54, dim: 'calculation', tags: [...T, 'pigou'], explain: 'p_s = MPC(22) = 54 = p_b + 20.' }),
      step({ id: 's9', q: 'Bien-être W sans intervention (CS + PS + bénéfice externe) ?', answer: 1170, dim: 'calculation', tags: T, explain: '486 + 324 + 360 = 1170.',
        traps: [{ value: 810, feedback: 'Tu as oublié le bénéfice externe (360).', mis: 'omit-external-in-w' }] }),
      step({ id: 's10', q: 'Bien-être W avec s* ?', answer: 1210, dim: 'calculation', tags: [...T, 'pigou'], explain: '726 + 484 − 440 + 440 = 1210 (gain 40 = DWL récupérée).',
        traps: [{ value: 1650, feedback: 'Il faut soustraire la dépense publique (440).', mis: 'ignore-subsidy-cost' }, { value: 770, feedback: 'Tu as oublié le bénéfice externe (440).', mis: 'omit-external-in-w' }] }),
    ],
  },
  {
    id: 'p-vaccines', title: 'Vaccins — subvention trop forte', ref: '16:E2020#Q3', prov: 'recalc', preset: 'vaccines', show: ['MPB', 'MPC'],
    context: 'Demande {{p = 100 − Q}}, offre {{p = 10 + Q}}, {{MEB = 20}} par dose. Puis l’État verse 30 par dose.',
    steps: [
      step({ id: 'v1', q: 'Qm ?', answer: 45, dim: 'calculation', tags: T, explain: '100 − Q = 10 + Q ⇒ 45.', reveal: ['QM'] }),
      step({ id: 'v2', q: 'Prix de marché ?', answer: 55, dim: 'calculation', tags: T, explain: '100 − 45 = 55.' }),
      step({ id: 'v3', q: 'Q* ?', answer: 55, dim: 'calculation', tags: T, explain: 'MSB = 120 − Q = 10 + Q ⇒ 55.', reveal: ['MEB', 'MSB', 'QS'], traps: [{ value: 45, feedback: '45 = Qm.', mis: 'q-star-is-market-eq' }] }),
      step({ id: 'v4', q: 'DWL sans intervention ?', answer: 100, dim: 'calculation', tags: [...T, 'dwl'], explain: '½ × 10 × 20 = 100.', reveal: ['DWL'], traps: [{ value: 200, feedback: 'Oubli du ½.' }] }),
      step({ id: 'v5', q: 'Avec s = 30 : quantité échangée ?', answer: 60, dim: 'calculation', tags: [...T, 'pigou'], explain: '100 − Q + 30 = 10 + Q ⇒ Q = 60.', reveal: ['POL', 'QP', 'PRICES'], policy: 30,
        traps: [{ value: 55, feedback: '55 serait atteint avec s = 20 = MEB. 30 pousse plus loin.', mis: 'oversubsidy' }] }),
      step({ id: 'v6', q: 'Prix payé par l’acheteur ?', answer: 40, dim: 'calculation', tags: T, explain: 'p_b = 100 − 60 = 40.' }),
      step({ id: 'v7', q: 'Prix reçu par le vendeur ?', answer: 70, dim: 'calculation', tags: T, explain: 'p_s = 10 + 60 = 70 = 40 + 30.' }),
      step({ id: 'v8', q: 'DWL avec s = 30 (benchmark Q* = 55) ?', answer: 25, dim: 'calculation', tags: [...T, 'dwl'], explain: 'À 60 : MSC = 70, MSB = 60 ⇒ écart 10. ½ × 5 × 10 = 25.',
        traps: [{ value: 0, feedback: 'Une subvention n’est pas automatiquement bonne : au-delà de Q*, chaque dose coûte plus à la société qu’elle ne lui rapporte.', mis: 'oversubsidy' }, { value: 75, feedback: 'Benchmark erroné : la DWL se mesure par rapport à Q* = 55, pas à Qm = 45.', mis: 'dwl-private-benchmark' }] }),
    ],
  },
  {
    id: 'p-variant', title: 'MEB décroissant — où évaluer la subvention ?', ref: '11.3', prov: 'peda', preset: 'variant', show: ['MPB', 'MPC', 'MEB'],
    context: 'Variante construite : {{MPB = 100 − 3Q}}, {{MPC = 10 + 2Q}}, {{MEB = 30 − Q}}.',
    steps: [
      step({ id: 'w1', q: 'MSB = 130 − ?Q : quelle pente ?', answer: 4, dim: 'formula', tags: T, explain: '100 − 3Q + 30 − Q = 130 − 4Q.', reveal: ['MSB'] }),
      step({ id: 'w2', q: 'Q* ?', answer: 20, dim: 'calculation', tags: T, explain: '130 − 4Q = 10 + 2Q ⇒ Q* = 20.', reveal: ['QM', 'QS'] }),
      step({ id: 'w3', q: 'Subvention optimale s* ?', answer: 10, dim: 'formula', tags: [...T, 'pigou'], explain: 's* = MEB(20) = 10.', reveal: ['POL', 'QP'], policy: 10,
        traps: [{ value: 30, feedback: '30 = intercept : bénéfice externe du premier panneau.', mis: 'pigou-intercept' }, { value: 12, feedback: '12 = MEB(18) : évalué au marché initial.', mis: 'pigou-intercept' }] }),
      step({ id: 'w4', q: 'Si l’État verse 30 : quantité ?', answer: 24, dim: 'calculation', tags: [...T, 'pigou'], explain: '130 − 3Q = 10 + 2Q ⇒ 24.', policy: 30 }),
      step({ id: 'w5', q: 'DWL avec s = 30 ?', answer: 48, dim: 'calculation', tags: [...T, 'dwl'], explain: 'À 24 : MSC − MSB = 58 − 34 = 24 ; ½ × 4 × 24 = 48.', reveal: ['DWL'] }),
    ],
  },
  {
    id: 'p-gasoline', title: 'Essence — externalité négative et taxe', ref: '11.2', prov: 'recalc', preset: 'gasoline', show: ['MPB', 'MPC'],
    context: '{{MPB = 100 − Q}}, {{MPC = 10 + Q}}, {{MEC = Q}} (L11 p.5–8, E2023 Q4c–d).',
    steps: [
      step({ id: 'g1', q: 'Qm ?', answer: 45, dim: 'calculation', tags: T, explain: '100 − Q = 10 + Q ⇒ 45.', reveal: ['QM'] }),
      step({ id: 'g2', q: 'MSC = 10 + ?Q : quelle pente ?', answer: 2, dim: 'formula', tags: T, explain: 'MSC = MPC + MEC = 10 + Q + Q = 10 + 2Q.', reveal: ['MEC', 'MSC'] }),
      step({ id: 'g3', q: 'Q* ?', answer: 30, dim: 'calculation', tags: T, explain: '100 − Q = 10 + 2Q ⇒ 30.', reveal: ['QS'], traps: [{ value: 45, feedback: '45 = Qm.', mis: 'q-star-is-market-eq' }] }),
      step({ id: 'g4', q: 'DWL sans intervention ?', answer: 337.5, dim: 'calculation', tags: [...T, 'dwl'], explain: 'À 45 : MSC = 100, MSB = 55 ⇒ écart 45. ½ × 15 × 45 = 337.5.', reveal: ['DWL'], traps: [{ value: 675, feedback: 'Oubli du ½.' }] }),
      step({ id: 'g5', q: 'Taxe optimale t* ?', answer: 30, dim: 'formula', tags: [...T, 'pigou'], explain: 't* = MEC(Q*) = MEC(30) = 30.', traps: [{ value: 45, feedback: '45 = MEC(45), évalué au marché : mauvais point.', mis: 'pigou-intercept' }] }),
      step({ id: 'g6', q: 'Avec t = 20 : quantité ?', answer: 35, dim: 'calculation', tags: T, explain: '100 − Q = 10 + Q + 20 ⇒ 35.', reveal: ['POL', 'QP', 'PRICES', 'GOV'], policy: 20 }),
      step({ id: 'g7', q: 'Prix payé par l’acheteur (t = 20) ?', answer: 65, dim: 'calculation', tags: T, explain: 'p_b = 100 − 35 = 65.' }),
      step({ id: 'g8', q: 'Prix reçu par le vendeur (t = 20) ?', answer: 45, dim: 'calculation', tags: T, explain: 'p_s = 10 + 35 = 45 = 65 − 20.' }),
      step({ id: 'g9', q: 'DWL restante avec t = 20 ?', answer: 37.5, dim: 'calculation', tags: [...T, 'dwl'], explain: 'À 35 : MSC − MSB = 80 − 65 = 15 ; ½ × 5 × 15 = 37.5.',
        traps: [{ value: 0, feedback: 'La taxe est insuffisante (20 < 30) : il reste trop d’unités.' }] }),
    ],
  },
  {
    id: 'p-textiles', title: 'Textiles — pollution d’une rivière', ref: '16:E2024#Q3', prov: 'recalc', preset: 'textiles', show: ['MPB', 'MPC'],
    context: 'Demande {{p = 200 − Q}}, {{MPC = 80 + Q}}, {{MEC = Q}} (E2024 Q3).',
    steps: [
      step({ id: 't1', q: 'Qm ?', answer: 60, dim: 'calculation', tags: T, explain: '200 − Q = 80 + Q ⇒ 60.', reveal: ['QM'] }),
      step({ id: 't2', q: 'Prix de marché ?', answer: 140, dim: 'calculation', tags: T, explain: '200 − 60 = 140.' }),
      step({ id: 't3', q: 'Q* ?', answer: 40, dim: 'calculation', tags: T, explain: '200 − Q = 80 + 2Q ⇒ 40.', reveal: ['MEC', 'MSC', 'QS'] }),
      step({ id: 't4', q: 'DWL ?', answer: 600, dim: 'calculation', tags: [...T, 'dwl'], explain: 'À 60 : MSC = 200, MSB = 140 ⇒ 60. ½ × 20 × 60 = 600.', reveal: ['DWL'] }),
      step({ id: 't5', q: 'Taxe optimale t* ?', answer: 40, dim: 'formula', tags: [...T, 'pigou'], explain: 't* = MEC(40) = 40.', reveal: ['POL', 'QP'], policy: 40,
        traps: [{ value: 60, feedback: '60 = MEC(60) : évalué au marché.', mis: 'pigou-intercept' }] }),
    ],
  },
];

/** Seeded generator for unlimited linear externality problems with integer answers. */
export function generateProblem(kind: 'positive' | 'negative', seed: number): { problem: Problem; model: ExtModel } {
  let s = seed >>> 0;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  const pick = <X,>(xs: X[]) => xs[Math.floor(rnd() * xs.length)];
  const b = pick([1, 2, 3]), d = pick([1, 2]), gap = pick([2, 3, 4, 5]), c = pick([5, 10, 15, 20]);
  const e = gap * (b + d);
  if (kind === 'positive') {
    const qm = pick([10, 12, 14, 15, 16, 18, 20, 24]);
    const a = c + (b + d) * qm, qs = qm + gap, p = c + d * qm;
    const model: ExtModel = { id: `gen-${seed}`, name: 'Exercice généré', ref: '11.3', kind: 'positive', a, b, c, d, e0: e, e1: 0,
      qMax: Math.ceil(qs * 1.5), pMax: Math.ceil((a + e) * 1.08), unit: 'unités', constructed: true, story: 'Exercice généré' };
    return { model, problem: {
      id: `gen-pos-${seed}`, title: 'Externalité positive — exercice généré', ref: '11.3', prov: 'peda', show: ['MPB', 'MPC', 'MEB'],
      context: `{{MPB = ${a} − ${b}Q}}, {{MPC = ${c} + ${d}Q}}, {{MEB = ${e}}}.`,
      steps: [
        step({ id: 'q1', q: 'Qm ?', answer: qm, dim: 'calculation', tags: T, explain: `${a} − ${b}Q = ${c} + ${d}Q ⇒ Q = ${qm}.`, reveal: ['QM'], traps: [{ value: qs, feedback: 'C’est Q* : le marché utilise MPB.', mis: 'market-eq-is-optimum' }] }),
        step({ id: 'q2', q: 'Prix de marché ?', answer: p, dim: 'calculation', tags: T, explain: `p = ${c} + ${d} × ${qm} = ${p}.` }),
        step({ id: 'q3', q: 'Q* ?', answer: qs, dim: 'calculation', tags: T, explain: `${a + e} − ${b}Q = ${c} + ${d}Q ⇒ Q* = ${qs}.`, reveal: ['MSB', 'QS'], traps: [{ value: qm, feedback: 'C’est Qm.', mis: 'q-star-is-market-eq' }] }),
        step({ id: 'q4', q: 'DWL ?', answer: (gap * e) / 2, dim: 'calculation', tags: [...T, 'dwl'], explain: `½ × ${gap} × ${e} = ${(gap * e) / 2}.`, reveal: ['DWL'], traps: [{ value: gap * e, feedback: 'Oubli du ½.' }] }),
        step({ id: 'q5', q: 'Subvention optimale ?', answer: e, dim: 'formula', tags: [...T, 'pigou'], explain: `s* = MEB(Q*) = ${e}.`, reveal: ['POL', 'QP', 'PRICES'], policy: e }),
        step({ id: 'q6', q: 'Prix payé par l’acheteur avec s* ?', answer: a - b * qs, dim: 'calculation', tags: T, explain: `p_b = ${a} − ${b} × ${qs} = ${a - b * qs}.` }),
      ],
    } };
  }
  const qs = pick([10, 12, 15, 18, 20, 24]);
  const qm = qs + gap, a = c + (b + d) * qm, p = c + d * qm;
  const model: ExtModel = { id: `gen-${seed}`, name: 'Exercice généré', ref: '11.3', kind: 'negative', a, b, c, d, k0: e, k1: 0,
    qMax: Math.ceil(qm * 1.5), pMax: Math.ceil(Math.max(a, c + e + d * qm * 1.5) * 1.08), unit: 'unités', constructed: true, story: 'Exercice généré' };
  return { model, problem: {
    id: `gen-neg-${seed}`, title: 'Externalité négative — exercice généré', ref: '11.3', prov: 'peda', show: ['MPB', 'MPC', 'MEC'],
    context: `{{MPB = ${a} − ${b}Q}}, {{MPC = ${c} + ${d}Q}}, {{MEC = ${e}}}.`,
    steps: [
      step({ id: 'q1', q: 'Qm ?', answer: qm, dim: 'calculation', tags: T, explain: `${a} − ${b}Q = ${c} + ${d}Q ⇒ Q = ${qm}.`, reveal: ['QM'] }),
      step({ id: 'q2', q: 'Prix de marché ?', answer: p, dim: 'calculation', tags: T, explain: `p = ${p}.` }),
      step({ id: 'q3', q: 'Q* ?', answer: qs, dim: 'calculation', tags: T, explain: `${a} − ${b}Q = ${c + e} + ${d}Q ⇒ Q* = ${qs}.`, reveal: ['MSC', 'QS'], traps: [{ value: qm, feedback: 'C’est Qm.', mis: 'q-star-is-market-eq' }] }),
      step({ id: 'q4', q: 'DWL ?', answer: (gap * e) / 2, dim: 'calculation', tags: [...T, 'dwl'], explain: `½ × ${gap} × ${e} = ${(gap * e) / 2}.`, reveal: ['DWL'] }),
      step({ id: 'q5', q: 'Taxe optimale ?', answer: e, dim: 'formula', tags: [...T, 'pigou'], explain: `t* = MEC(Q*) = ${e}.`, reveal: ['POL', 'QP', 'PRICES'], policy: e }),
      step({ id: 'q6', q: 'Recette fiscale avec t* ?', answer: e * qs, dim: 'calculation', tags: T, explain: `t* × Q* = ${e} × ${qs} = ${e * qs} : un transfert, pas une perte.`, reveal: ['GOV'], traps: [{ value: (gap * e) / 2, feedback: 'C’est la DWL initiale, pas la recette.', mis: 'transfer-is-dwl' }] }),
    ],
  } };
}

// ————————————————————————————————————————————————————————————————————————
// Exam mode (English). Statements are reconstructed from the dossier's data — not official wording.

const R = (id: string, label: string, ...patterns: RegExp[]) => ({ id, label, patterns });

export const EXAMS: ExamQuestion[] = [
  {
    id: 'e2020q3', title: 'E2020 Q3 — Vaccines: positive externality and subsidy', ref: '16:E2020#Q3', practice: 'p-vaccines',
    note: 'Énoncé reconstruit à partir des données du dossier (§16, E2020 Q3) — pas la formulation officielle.',
    statement: 'A vaccine is sold in a competitive market with inverse demand p = 100 − Q and inverse supply p = 10 + Q.\n(a) Find the market equilibrium.\n(b) Explain what a positive externality is and why vaccination is an example.\n(b′) Each vaccination creates a marginal external benefit of 20. Find the socially optimal quantity and the deadweight loss of the unregulated market.\n(c) The government pays a subsidy of 30 per dose. Find the quantity traded, the price paid by buyers and the price received by sellers, and the deadweight loss. Is this subsidy optimal? Explain.',
    parts: [
      { kind: 'num', id: 'a', prompt: '(a) Market equilibrium', answers: [{ label: 'Q', value: 45 }, { label: 'p', value: 55 }], explain: '100 − Q = 10 + Q ⇒ Q = 45, p = 55.', tags: T },
      { kind: 'choice', id: 'model', prompt: 'Model: which curve differs from its private counterpart?', tags: T, options: [
        { text: 'MSB lies above demand (MPB)', correct: true, feedback: 'Positive consumption externality: MSB = MPB + MEB.' },
        { text: 'MSC lies above supply (MPC)', feedback: 'That would be a negative externality (external cost).', mis: 'meb-vs-mec' },
        { text: 'No curve: the competitive market is efficient', feedback: 'An externality breaks the efficiency of the competitive outcome.', mis: 'market-eq-is-optimum' },
      ] },
      { kind: 'text', id: 'b', prompt: '(b) Define a positive externality; why is vaccination an example?', tags: T,
        rubric: [
          R('third', 'affects third parties / others', /(third part|others|other people|outsider|bystander|people (who|that) (are )?not)/),
          R('not', 'not taken into account / not priced', /(not (taken into account|accounted|reflected|internaliz|included|paid|priced|compensated)|without (paying|compensation)|ignored|uncompensated|not part of the (transaction|market))/),
          R('benefit', 'it is a benefit', /(benefit|positive effect|gain)/),
          R('vacc', 'vaccination protects others (lower transmission)', /(transmi|infect|spread|contagio|herd|protect(s|ing)? (other|people)|risk (to|for) others|catch)/),
        ],
        model: 'A positive externality is a benefit to third parties that is not taken into account by the buyer and the seller, so it is not reflected in the market price. Vaccination is an example: a vaccinated person also lowers the risk of infecting others, who do not pay for this protection.' },
      { kind: 'num', id: 'b2', prompt: '(b′) Social optimum and deadweight loss', answers: [{ label: 'Q*', value: 55 }, { label: 'DWL', value: 100 }], explain: 'MSB = 120 − Q = 10 + Q ⇒ Q* = 55. DWL = ½ × (55 − 45) × 20 = 100.', tags: [...T, 'dwl'] },
      { kind: 'num', id: 'c', prompt: '(c) Subsidy of 30', answers: [{ label: 'Q', value: 60 }, { label: 'p_b', value: 40 }, { label: 'p_s', value: 70 }, { label: 'DWL', value: 25 }], explain: '100 − Q + 30 = 10 + Q ⇒ Q = 60; p_b = 40, p_s = 70. At 60, MSC − MSB = 70 − 60 = 10 ⇒ DWL = ½ × 5 × 10 = 25.', tags: [...T, 'pigou'] },
      { kind: 'text', id: 'c2', prompt: '(c) Is the subsidy optimal? Explain.', tags: [...T, 'pigou'],
        rubric: [
          R('opt', 'optimal subsidy = MEB = 20', /(\b20\b|marginal external benefit|\bmeb\b)/),
          R('high', '30 is too high → too many doses', /(too (high|large|much|many|big)|over[- ]?(provi|produc|subsid|consum|shoot)|exceed|beyond|more than (the )?(optimal|efficient|social))/),
          R('cost', 'extra doses cost more than they are worth to society', /(cost.{0,60}(exceed|more than|greater|higher|above).{0,40}(benefit|worth|value)|msc.{0,10}>.{0,10}msb|social cost.{0,40}(higher|greater|above|exceed))/),
          R('dwl', 'DWL of 25 measured from Q* = 55', /\b25\b/),
        ],
        model: 'No. The optimal subsidy equals the marginal external benefit at the optimum, s* = 20. A subsidy of 30 overshoots: the market produces 60 > 55, so the doses between 55 and 60 cost society more (MSC) than they are worth to society (MSB). This creates a deadweight loss of 25.' },
    ],
    logic: [
      'Modèle : externalité positive de consommation → MSB = MPB + MEB au-dessus de la demande ; offre inchangée (MEC = 0, MSC = MPC).',
      'Le marché ignore MEB → Qm = 45 < Q* = 55.',
      'Une subvention corrige si s = MEB(Q*) = 20 ; 30 dépasse → trop de doses → nouvelle DWL, mesurée par rapport à Q* = 55 (pas à 45).',
    ],
    calc: [
      '(a) 100 − Q = 10 + Q ⇒ Q = 45 ; p = 55.',
      '(b′) MSB = 120 − Q ; 120 − Q = 10 + Q ⇒ Q* = 55. À Q = 45 : MSB − MSC = 75 − 55 = 20. DWL = ½ × 10 × 20 = 100.',
      '(c) p_s = p_b + 30 : 100 − Q + 30 = 10 + Q ⇒ Q = 60 ; p_b = 40 ; p_s = 70.',
      'À Q = 60 : MSC = 70, MSB = 60 → écart 10. DWL = ½ × (60 − 55) × 10 = 25.',
    ],
    graph: [
      'Axes : Q horizontal, € vertical ; demande (MPB) et MSB = MPB + 20, parallèle au-dessus ; offre = MPC = MSC.',
      'Qm = 45 (MPB = MPC), Q* = 55 (MSB = MSC) ; triangle DWL entre MSB et MSC de 45 à 55.',
      'Avec s = 30 : courbe MPB + 30, Q = 60, p_b = 40, p_s = 70 ; petit triangle DWL entre MSC (au-dessus) et MSB, de 55 à 60.',
    ],
    modelAnswer: '(a) Q = 45, p = 55. (b) A positive externality is a benefit to third parties that buyers and sellers do not take into account; vaccination also protects others from infection. (b′) MSB = 120 − Q, so MSB = MSC gives Q* = 55; the unregulated market underprovides vaccines and the deadweight loss is ½ × 10 × 20 = 100. (c) With s = 30, Q = 60, p_b = 40, p_s = 70. The subsidy is too high: the optimal subsidy is MEB = 20. Doses between 55 and 60 have a social cost above their social benefit, so the deadweight loss is ½ × 5 × 10 = 25.',
  },
  {
    id: 'a6-solar', title: 'Solar panels — full welfare analysis', ref: '15:A6#6.3', practice: 'p-solar',
    note: 'Reconstruit d’après l’assignment A6.3 (§15) — formulation non officielle.',
    statement: 'Buyers’ marginal private benefit from solar panels is MPB = 100 − 3Q and the marginal private cost of production is MPC = 10 + 2Q. Each panel reduces pollution, creating a marginal external benefit MEB = 20 for third parties.\n(a) Find the market quantity and price.\n(b) Find the socially optimal quantity.\n(c) Compute the deadweight loss without intervention and explain what it represents.\n(d) Which per-unit subsidy implements the optimum? Give the price paid by buyers and received by sellers.\n(e) Compute welfare with and without the subsidy and explain why welfare rises although the government spends money.',
    parts: [
      { kind: 'num', id: 'a', prompt: '(a) Market outcome', answers: [{ label: 'Qm', value: 18 }, { label: 'p', value: 46 }], explain: '100 − 3Q = 10 + 2Q ⇒ 18 ; p = 46.', tags: T },
      { kind: 'num', id: 'b', prompt: '(b) Social optimum', answers: [{ label: 'Q*', value: 22 }], explain: 'MSB = 120 − 3Q = 10 + 2Q ⇒ 22.', tags: T },
      { kind: 'num', id: 'c', prompt: '(c) Deadweight loss', answers: [{ label: 'DWL', value: 40 }], explain: '½ × 4 × 20 = 40.', tags: [...T, 'dwl'] },
      { kind: 'text', id: 'c2', prompt: '(c) What does the deadweight loss represent?', tags: [...T, 'dwl'],
        rubric: [
          R('units', 'units between 18 and 22 are not produced', /(not produced|are not (bought|sold|traded)|missing|between 18 and 22|units? (that|which) (are|were) not)/),
          R('exceed', 'their social benefit exceeds their social cost', /(social benefit.{0,40}(exceed|above|greater|higher|more)|msb.{0,10}>.{0,10}(msc|mpc)|worth more (to society )?than (they|it) cost)/),
        ],
        model: 'The panels between Qm = 18 and Q* = 22 are not produced even though their social benefit exceeds their social cost; the deadweight loss is the net surplus these missing units would have created.' },
      { kind: 'num', id: 'd', prompt: '(d) Optimal subsidy and prices', answers: [{ label: 's*', value: 20 }, { label: 'p_b', value: 34 }, { label: 'p_s', value: 54 }], explain: 's* = MEB(Q*) = 20 ; p_b = 34 ; p_s = 54.', tags: [...T, 'pigou'] },
      { kind: 'num', id: 'e', prompt: '(e) Welfare', answers: [{ label: 'W without', value: 1170 }, { label: 'W with s*', value: 1210 }], explain: '486 + 324 + 360 = 1170 ; 726 + 484 − 440 + 440 = 1210.', tags: [...T, 'pigou'] },
      { kind: 'text', id: 'e2', prompt: '(e) Why does welfare rise although the government spends 440?', tags: [...T, 'pigou'],
        rubric: [
          R('transfer', 'the subsidy is a transfer', /(transfer|redistribut|moves? money|paid to|received by|goes to (buyers|sellers|consumers|producers))/),
          R('ext', 'external benefit of the extra panels counted', /(external benefit|\bmeb\b|third part|benefit to others)/),
          R('gain', 'net gain = 40 = DWL eliminated', /\b40\b|deadweight loss (is )?(eliminated|removed|recovered)|dwl (is )?(zero|0|eliminated|removed)/),
        ],
        model: 'The 440 of subsidy spending is a transfer from taxpayers to buyers and sellers: it is subtracted from welfare but appears again in consumer and producer surplus. What remains is the value of the four extra panels, whose social benefit (including the external benefit) exceeds their cost, so welfare rises by 40, the deadweight loss eliminated.' },
    ],
    logic: ['Externalité positive : MSB = MPB + MEB.', 'Qm = 18 < Q* = 22 : DWL = panneaux manquants.', 's* = MEB(Q*) = 20 ; la dépense est un transfert, le gain net = 40.'],
    calc: ['Qm : 100 − 3Q = 10 + 2Q ⇒ 18 ; p = 46.', 'Q* : 120 − 3Q = 10 + 2Q ⇒ 22.', 'DWL = ½ × 4 × 20 = 40.', 'W sans : 486 + 324 + 360 = 1170 ; avec : 726 + 484 − 440 + 440 = 1210.'],
    graph: ['MPB, MSB (+20), MPC ; Qm = 18, Q* = 22 ; triangle DWL entre MSB et MPC.', 'Avec s* : MPB + 20 confondue avec MSB ; p_b = 34, p_s = 54 ; rectangle de dépense 20 × 22.'],
    modelAnswer: 'The market produces Qm = 18 at p = 46, where MPB = MPC. Because each panel also benefits third parties, MSB = 120 − 3Q and the efficient quantity is Q* = 22, where MSB = MSC. The deadweight loss of ½ × 4 × 20 = 40 is the net surplus of the panels between 18 and 22 that are not produced although their social benefit exceeds their social cost. A Pigouvian subsidy s* = MEB(Q*) = 20 implements Q* with p_b = 34 and p_s = 54. Welfare rises from 1170 to 1210: the 440 of spending is a transfer, and the net gain of 40 is the deadweight loss eliminated.',
  },
  {
    id: 'e2023q4', title: 'E2023 Q4c–d — Gasoline: negative externality and an insufficient tax', ref: '11.2', practice: 'p-gasoline',
    note: 'Reconstruit d’après L11 p.5–8 et E2023 Q4c–d (§11.2–11.3, §16) — formulation non officielle. (d) prolonge l’exercice avec la taxe optimale documentée en §11.2.',
    statement: 'In the gasoline market, MPB = 100 − Q and MPC = 10 + Q. Each unit causes a marginal external cost MEC = Q.\n(a) Find the private market quantity and the socially optimal quantity.\n(b) Compute the deadweight loss of the unregulated market.\n(c) The government introduces a tax of 20 per unit. Find the quantity, the price paid by buyers, the price received by sellers and the remaining deadweight loss.\n(d) What is the optimal tax? Explain why it is not the marginal external cost at the market quantity.',
    parts: [
      { kind: 'choice', id: 'model', prompt: 'Model: which curve differs from its private counterpart?', tags: T, options: [
        { text: 'MSC lies above supply (MPC)', correct: true, feedback: 'Negative production externality: MSC = MPC + MEC.' },
        { text: 'MSB lies above demand (MPB)', feedback: 'That is a positive externality (external benefit).', mis: 'meb-vs-mec' },
        { text: 'Demand shifts right', feedback: 'Nothing in the statement changes demand.' },
      ] },
      { kind: 'num', id: 'a', prompt: '(a) Quantities', answers: [{ label: 'Qm', value: 45 }, { label: 'Q*', value: 30 }], explain: '100 − Q = 10 + Q ⇒ 45 ; 100 − Q = 10 + 2Q ⇒ 30.', tags: T },
      { kind: 'num', id: 'b', prompt: '(b) Deadweight loss', answers: [{ label: 'DWL', value: 337.5 }], explain: 'À 45 : MSC − MSB = 100 − 55 = 45 ; ½ × 15 × 45 = 337.5.', tags: [...T, 'dwl'] },
      { kind: 'num', id: 'c', prompt: '(c) Tax of 20', answers: [{ label: 'Q', value: 35 }, { label: 'p_b', value: 65 }, { label: 'p_s', value: 45 }, { label: 'DWL', value: 37.5 }], explain: '100 − Q = 10 + Q + 20 ⇒ 35 ; p_b = 65, p_s = 45 ; ½ × 5 × 15 = 37.5.', tags: [...T, 'pigou'] },
      { kind: 'num', id: 'd', prompt: '(d) Optimal tax', answers: [{ label: 't*', value: 30 }], explain: 't* = MEC(Q*) = 30.', tags: [...T, 'pigou'] },
      { kind: 'text', id: 'd2', prompt: '(d) Why not MEC at the market quantity (45)?', tags: [...T, 'pigou'],
        rubric: [
          R('opt', 'evaluate MEC at the efficient quantity', /(at (the )?(efficient|optimal|social(ly optimal)?) (quantity|level|output|optimum)|at q\*|mec\(30\)|q\* ?= ?30)/),
          R('depends', 'MEC depends on Q / falls as output falls', /(depends on|varies with|increases with|rises with|changes with) (q|quantity|output)|mec ?= ?q/),
          R('toohigh', 'a tax of 45 would cut output below the optimum', /(45.{0,60}(too (high|much|large)|below|over[- ]?correct|reduce.{0,20}too much))|too (high|large)/),
        ],
        model: 'The optimal tax equals the marginal external cost at the efficient quantity, t* = MEC(Q*) = 30. Because MEC = Q depends on output, MEC at the market quantity (45) overstates the damage of the last unit that should be produced; a tax of 45 would push output below the optimum and create a new deadweight loss.' },
    ],
    logic: ['Externalité négative de production : MSC = MPC + MEC au-dessus de l’offre ; demande = MPB = MSB.', 'Le marché produit trop (45 > 30) ; DWL = unités en trop dont MSC > MSB.', 'La taxe 20 est insuffisante ; t* = MEC(30) = 30, évaluée à Q*.'],
    calc: ['Qm : 100 − Q = 10 + Q ⇒ 45. Q* : 100 − Q = 10 + 2Q ⇒ 30.', 'DWL = ½ × (45 − 30) × (100 − 55) = 337.5.', 't = 20 : 100 − Q = 30 + Q ⇒ 35 ; p_b = 65 ; p_s = 45 ; DWL = ½ × 5 × (80 − 65) = 37.5.'],
    graph: ['Demande = MPB = MSB ; offre MPC ; MSC = 10 + 2Q au-dessus.', 'Qm = 45, Q* = 30 ; triangle DWL entre MSC (haut) et MSB (bas) de 30 à 45.', 'Avec t = 20 : MPC + 20 ; Q = 35 ; petit triangle restant de 30 à 35.'],
    modelAnswer: '(a) The market produces where MPB = MPC: Qm = 45. Society also counts the external cost, MSC = 10 + 2Q, so Q* = 30. (b) The units between 30 and 45 cost society more than they are worth: DWL = ½ × 15 × 45 = 337.5. (c) With t = 20, Q = 35, p_b = 65, p_s = 45; the tax is too low and DWL = 37.5 remains. (d) The optimal tax is t* = MEC(Q*) = 30. Since MEC rises with Q, evaluating it at 45 would overstate the damage of the last efficient unit and over-correct.',
  },
  {
    id: 'e2024q3', title: 'E2024 Q3 — Textiles and a spa: negative externality, permits, one owner', ref: '16:E2024#Q3', practice: 'p-textiles',
    note: 'Reconstruit d’après E2024 Q3 (§16) — formulation non officielle.',
    statement: 'A textile plant pollutes a river used by a spa. Demand is p = 200 − Q, the marginal private cost is MPC = 80 + Q and the marginal external cost is MEC = Q.\n(a) Find the market outcome.\n(b) Find the efficient quantity and the deadweight loss.\n(c) The authorities consider giving each textile mill a quota on the chemicals it may use; some propose that mills may buy and sell their quotas (tradable permits). Explain why allowing trade could increase efficiency compared with fixed quotas.\n(c′) Not in the exam: which per-unit tax implements the efficient quantity?\n(d) Explain why merging the plant and the spa under one owner may internalize the externality, and what new problem may arise.',
    parts: [
      { kind: 'num', id: 'a', prompt: '(a) Market outcome', answers: [{ label: 'Q', value: 60 }, { label: 'p', value: 140 }], explain: '200 − Q = 80 + Q ⇒ 60 ; p = 140.', tags: T },
      { kind: 'num', id: 'b', prompt: '(b) Efficient quantity and DWL', answers: [{ label: 'Q*', value: 40 }, { label: 'DWL', value: 600 }], explain: '200 − Q = 80 + 2Q ⇒ 40 ; à 60 : 200 − 140 = 60 ; ½ × 20 × 60 = 600.', tags: [...T, 'dwl'] },
      { kind: 'text', id: 'permits', prompt: '(c) Why can trading quotas increase efficiency?', tags: T,
        rubric: [
          R('differ', 'mills have different costs of cutting chemical use (MAC)', /(differ|some (mills|firms) (can|cut)|cheaper|lower cost).{0,80}(abat|reduc|cut)|marginal abatement cost|\bmac\b/),
          R('trade', 'low-cost mills cut more and sell quotas to high-cost mills', /(sell|buy|trade).{0,80}(quota|permit)/),
          R('same', 'the same total cap is reached at a lower total cost (MACs equalised)', /(same (total|overall) (cap|amount|emission|limit)|lower (total )?cost|equali[sz]e|cost.?effective|cheapest)/),
        ],
        model: 'Fixed quotas ask every mill for the same cut, although some can reduce chemical use cheaply and others only at a high cost. If quotas can be traded, a mill with a low cost of cutting reduces more and sells its spare quotas to a mill with a high cost, which buys them instead of making expensive cuts. Both gain from the trade, and the same total amount of chemicals is used at a lower total cost: trading continues until marginal abatement costs are equal across mills.' },
      { kind: 'num', id: 'c', prompt: '(c′) Optimal tax (not in the exam)', answers: [{ label: 't*', value: 40 }], explain: 't* = MEC(40) = 40.', tags: [...T, 'pigou'] },
      { kind: 'text', id: 'd', prompt: '(d) Merger of plant and spa', tags: T,
        rubric: [
          R('intern', 'the damage enters the joint profit (internalized)', /(internaliz|own (profit|loss|cost)|joint profit|bears? the (damage|cost)|spa('s)? (profit|loss))/),
          R('power', 'a merged firm may have market power', /(market power|monopol|raise (the )?price|restrict (output|quantity))/),
          R('notauto', 'so the outcome is not automatically efficient', /(not (automatically|necessarily) (efficient|optimal|social)|another distortion|new (distortion|problem|inefficiency))/),
        ],
        model: 'A single owner of both the plant and the spa bears the pollution damage as lost spa profit, so the external cost enters its own decision: the externality is internalized. However, the merged firm may have market power and restrict output or raise prices, which is another distortion, so the outcome is not automatically the efficient one.' },
    ],
    logic: ['Externalité négative : MSC = 80 + 2Q.', 'Marché 60 > optimum 40 ; DWL = unités en trop.', 't* = MEC(Q*) = 40 ; la fusion internalise mais peut créer du pouvoir de marché (§11.6).'],
    calc: ['200 − Q = 80 + Q ⇒ 60, p = 140.', '200 − Q = 80 + 2Q ⇒ 40 ; MSB(40) = 160, MPC(40) = 120.', 'DWL = ½ × 20 × (200 − 140) = 600 ; t* = 40.'],
    graph: ['Demande, MPC, MSC = MPC + Q.', 'Qm = 60, Q* = 40 ; triangle DWL entre MSC et la demande de 40 à 60.'],
    modelAnswer: '(a) Q = 60, p = 140. (b) With MSC = 80 + 2Q, the efficient quantity is 40; the 20 extra units cost society more than they are worth, DWL = ½ × 20 × 60 = 600. (c) t* = MEC(40) = 40. (d) A merged owner bears the damage to the spa, so the externality is internalized in its profit; but if it gains market power it may restrict output, so efficiency is not guaranteed.',
  },
];

export const LESSONS: Record<string, Lesson> = { [SOLAR_LESSON.id]: SOLAR_LESSON };
export const exam = (id: string) => EXAMS.find((e) => e.id === id)!;
