import{t as e}from"./react-CxvfCizx.js";import{a as t,c as n,d as r,f as i,i as a,l as o,n as s,r as c,t as l,u}from"./i18n-Bg3IJ5CT.js";import{t as d}from"./jsx-runtime-Cb_nOvS1.js";import{B as f,C as p,D as m,E as h,F as g,L as _,M as v,N as y,O as b,P as x,R as S,S as C,T as w,U as T,V as E,_ as ee,a as D,c as O,d as k,f as A,g as j,h as te,i as M,j as ne,k as re,l as N,m as P,n as ie,o as F,p as I,s as L,t as R,u as z,v as ae,x as B,z as oe}from"./econ-CIzme01L.js";import{t as se}from"./types-BxHvcxWP.js";import{A as ce,C as le,D as ue,E as de,O as fe,S as pe,T as me,_ as he,a as ge,b as V,c as _e,d as ve,f as ye,g as be,h as xe,i as Se,j as H,k as Ce,l as we,m as Te,n as Ee,o as De,p as Oe,r as ke,s as Ae,t as je,u as Me,v as U,w as W,x as Ne,y as Pe}from"./sync-yTLlOhJf.js";var G=e(),Fe=e=>/^={10,}\s*$/.test(e);function Ie(e,t,n,r){let i=e[t].trim(),a=t+1;for(;a<n&&r.test(e[a])&&e[a].trim();)i+=` `+e[a].trim(),a++;return{text:i,next:a}}function Le(e){let t=e.replace(/\r/g,``).split(`
`),n=[];for(let e=0;e+2<t.length;e++){if(!Fe(t[e])||!Fe(t[e+2]))continue;let r=t[e+1].match(/^(\d{1,2})\. (.+)$/);r&&(n.push({id:r[1],title:r[2].trim(),start:e+3,end:t.length}),e+=2)}n.forEach((e,t)=>{t+1<n.length&&(e.end=n[t+1].start-3)});let r=[],i=[];for(let e of n){let n=[],a=[];for(let r=e.start;r<e.end;r++){let i=t[r].match(/^(\d{1,2})\.(\d{1,2}) (\S.*)$/);i&&i[1]===e.id&&n.push({id:`${i[1]}.${i[2]}`,title:i[3].trim(),start:r,end:e.end});let o=t[r].match(/^(A\d|E20\d\d) — (.+)$/);o&&(e.id===`15`||e.id===`16`)&&a.push({id:`${e.id}:${o[1]}`,title:`${o[1]} — ${o[2].trim()}`,start:r,end:e.end})}n.forEach((e,t)=>{t+1<n.length&&(e.end=n[t+1].start)}),a.forEach((e,t)=>{t+1<a.length&&(e.end=a[t+1].start)}),r.push(...n),i.push(...a)}let a=e=>n.find(t=>t.id===e),o=e=>r.filter(t=>t.start<=e&&e<t.end).pop()?.id??``,s=[],c=a(`18`);if(c)for(let e=c.start;e<c.end;e++){let n=t[e].match(/^(\S.*?) \[([OAC/]+)\] — (.+)$/);if(!n)continue;let{text:r}=Ie(t,e,c.end,/^ {2}\S/),i=r.slice(r.indexOf(`] — `)+4),a=i.split(` — `),l=a.length>1&&/^[A-Z(]/.test(a[0])&&!a[0].includes(`[`);s.push({names:n[1].split(/,\s*/).map(e=>e.replace(/\s*\[[OAC/]+\]/g,``).trim()).filter(Boolean),tag:n[2],english:l?a[0].trim():``,french:(l?a.slice(1).join(` — `):i).trim(),section:o(e),line:e})}let l=[],u=a(`17`);if(u)for(let e=u.start;e<u.end;e++){let n=t[e].match(/^(F\d\d) (.+)$/);if(!n)continue;let{text:r}=Ie(t,e,u.end,/^ {4}\S/);l.push({id:n[1],text:r.slice(n[1].length).trim(),line:e})}let d=[],f=[],p=[],m=[],h=e=>r.find(t=>t.id===e),g=h(`20.4`);if(g)for(let e=g.start+1;e<g.end;e++){let n=t[e].match(/^([A-Z][A-Za-z' -]+): (.+)$/);if(!n)continue;let{text:r}=Ie(t,e,g.end,/^ {2}\S/);d.push({id:n[1],text:r.slice(n[1].length+1).trim(),line:e,section:`20.4`})}let _=h(`20.3`);if(_)for(let e=_.start+1;e<_.end;e++){let n=t[e].match(/^(G\d+) (.+)$/);if(!n)continue;let{text:r}=Ie(t,e,_.end,/^ {2,}\S/);f.push({id:n[1],text:r.slice(n[1].length).trim(),line:e,section:`20.3`})}let v=h(`20.2`);if(v)for(let e=v.start+1;e<v.end;e++){if(!t[e].startsWith(`- `))continue;let{text:n}=Ie(t,e,v.end,/^ {2}\S/);p.push({id:`P${p.length+1}`,text:n.slice(2),line:e,section:`20.2`})}let y=h(`20.1`);if(y)for(let e=y.start+1;e<y.end;e++){let n=t[e].match(/^(\d+)\) (.+)$/);if(!n)continue;let{text:r}=Ie(t,e,y.end,/^ {3,}\S/);m.push({id:`C${n[1]}`,text:r.slice(n[1].length+2).trim(),line:e,section:`20.1`})}let b=[],x=a(`19`);if(x)for(let e=x.start;e<x.end;e++){if(/^\d{1,2}\.\d{1,2} /.test(t[e])||!/^\S.*? — /.test(t[e]))continue;let{text:n}=Ie(t,e,x.end,/^ {2}\S/),r=n.indexOf(` — `),i=n.slice(r+3),a=i.indexOf(` : `);b.push({term:n.slice(0,r).trim(),french:(a>=0?i.slice(0,a):i).trim(),def:a>=0?i.slice(a+3).trim():``,section:o(e),line:e})}return{lines:t,chapters:n,subs:r,blocks:i,abbr:s,formulas:l,defs:d,lexicon:b,graphs:f,pitfalls:p,corrections:m}}function Re(e,t){let[n,r]=t.split(`#`);if(/^17:F\d\d$/.test(n)){let t=e.formulas.find(e=>e.id===n.slice(3)),r=e.chapters.find(e=>e.id===`17`);if(!t||!r)return null;let i=t.line+1;for(;i<r.end&&/^ {4}\S/.test(e.lines[i]);)i++;return{title:`§17 — ${t.id}`,start:r.start,end:r.end,hl:[t.line,i]}}if(/^18:/.test(n)){let t=n.slice(3),r=e.abbr.find(e=>e.names.includes(t)),i=r&&e.subs.find(e=>e.id===r.section);if(!r||!i)return null;let a=r.line+1;for(;a<i.end&&/^ {2}\S/.test(e.lines[a]);)a++;return{title:`§${i.id} ${i.title}`,start:i.start,end:i.end,hl:[r.line,a]}}let i=n.includes(`:`)?e.blocks.find(e=>e.id===n):n.includes(`.`)?e.subs.find(e=>e.id===n):e.chapters.find(e=>e.id===n);if(!i)return null;let a=n.includes(`:`)?`§${n.split(`:`)[0]} — ${i.title}`:`§${i.id} ${i.title}`;if(!r)return{title:a,start:i.start,end:i.end};let o=-1;for(let t=i.start;t<i.end;t++)if(e.lines[t].startsWith(r)){o=t;break}if(o<0)return{title:a,start:i.start,end:i.end};let s=o+1,c=/^Q\d/.test(r);for(;s<i.end;){let t=e.lines[s];if((c?/^Q\d/.test(t)&&!t.startsWith(r):/^\d\.\d /.test(t)||/^(A\d|E20\d\d) — /.test(t))||!t.trim())break;s++}return{title:a,start:i.start,end:i.end,hl:[o,s]}}var K=Le(s()??`MICROÉCONOMIE SSE — DOSSIER DE RÉVISION ET CONTEXTE POUR CHATGPT
Cours BE 501 — Richard Friberg — supports 2026 et examens 2020–2025
Préparé le 9 octobre 2026. Fichier texte UTF-8, autonome.

======================================================================
0. COMMENT UTILISER CE FICHIER ET CE QU'IL COUVRE
======================================================================

Objectif : comprendre les mécanismes, reconnaître le modèle à appliquer,
savoir reconstruire les formules, calculer, dessiner et expliquer en anglais.
Ce dossier est une synthèse pédagogique, pas un corrigé officiel de SSE.
Les résultats chiffrés présentés comme « recalculés » ont été dérivés des
énoncés. Les réponses personnelles dans les assignments ne sont pas traitées
comme une autorité. Les principales erreurs ou ambiguïtés sont signalées.

Corpus intégral du dossier Microeconomics : 23 PDF, 373 pages.
12 lectures, 5 assignments numérotés 2 à 6, 6 examens finaux 2020 à 2025.
Extraction du texte de toutes les pages ; examen visuel des cours et des
assignments, avec vérification des tableaux intégrés comme images et des
calculs utiles. La dernière page du sujet 2020 est blanche.
Les nombres de pages comprennent couvertures, consignes et pages blanches.

Limites du corpus, à conserver dans toute fiche produite à partir de lui :
- Aucun assignment 1 ou 7 n'est présent.
- Seules les lectures 1 à 12 sont présentes. Le calendrier de Lecture 1
  annonce encore plateformes et commerce international en semaine 7.
- Les enchères et certains éléments de théorie des jeux apparaissent dans
  les examens ou assignments sans cours complet correspondant ici.
- Les six PDF de past exams sont des énoncés de FINALS, pas des midterms,
  et ne contiennent pas de corrigés officiels.
- Une fréquence sur six anciens examens décrit cet échantillon ; elle ne
  constitue pas une probabilité de présence au prochain examen.
- Les dates, règles et exemples d'actualité cités sont ceux des supports.
  Ce dossier ne vérifie pas les règles administratives actuelles sur Canvas.

Repères de provenance : L1 à L12 = lectures ; A2 à A6 = assignments ;
E2020 à E2025 = examens. « p. » désigne la page PDF, comptée depuis 1.
« Complément » = explication standard reconstruite pour traiter un exercice,
et non affirmation qu'un cours supplémentaire a été trouvé.

PROMPT À DONNER À CHATGPT AVEC CE FICHIER
« Tu es mon tuteur de microéconomie pour l'examen SSE BE 501. Utilise ce
dossier comme contexte principal. Explique en français en conservant les
termes et abréviations anglais que je rencontrerai à l'examen. À chaque
nouveau symbole, développe son nom anglais, traduis-le, indique ses unités
et son rôle. Pour chaque formule, explique d'où elle vient, pourquoi elle
est valable, ses hypothèses, comment reconnaître son usage et quand elle
ne s'applique pas. Fais-moi d'abord identifier l'objectif, les contraintes,
la variable de choix et le modèle. Propose des exercices progressifs,
laisse-moi essayer puis corrige mon raisonnement et mes graphiques.
Entraîne-moi aussi à donner des réponses courtes et motivées en anglais.
Distingue les éléments documentés, les résultats recalculés et les
compléments. N'invente ni corrigé officiel, ni fréquence, ni programme
manquant. Si je demande des fiches, un site ou des exercices, couvre aussi
les cas limites et les pièges recensés ici. »

PLAN
1. Inventaire et correspondance entre cours, assignments et examens
2. Logique commune et outils mathématiques
3. Offre, demande, équilibre et chocs
4. Consommateur, préférences, budget et demande
5. Élasticités
6. Production, coûts et offre concurrentielle
7. Surplus, taxes, subventions et prix réglementés
8. Monopole et concurrence monopolistique
9. Discrimination, segmentation, bundling et tarifs
10. Oligopole, Cournot, Bertrand et Stackelberg
11. Externalités, pollution, biens publics et ressources communes
12. Information asymétrique, contrats et incitations
13. Théorie des jeux dans Assignment 3
14. Compléments d'examens : commerce, plateformes, enchères et échange
15. Assignments : résultats et méthodes recalculés
16. Examens : carte des questions et résultats de référence
17. Formulaire transversal et choix de méthode
18. Répertoire des abréviations et symboles
19. Lexique bilingue des notions et verbes d'examen
20. Pièges, corrections, graphiques et parcours de révision

======================================================================
1. INVENTAIRE ET CARTE DU PROGRAMME
======================================================================

Tous les noms ci-dessous sont relatifs au dossier Microeconomics.

S01 = assignments/Assignment3.pdf — 4 pages.
S02 = assignments/Assignment2.pdf — 3 pages.
S03 = assignments/Assignment4.pdf — 5 pages.
S04 = assignments/Assignment5.pdf — 6 pages.
S05 = assignments/Assignment6.pdf — 5 pages.
S06 = lectures/Lecture 01 Micro 2026 15.16.11.pdf — 21 pages.
S07 = lectures/Lecture 02 Micro 2026 15.16.11.pdf — 33 pages.
S08 = lectures/Lecture 03 Micro 2026 15.16.11.pdf — 24 pages.
S09 = lectures/Lecture 04 Micro 2026 15.16.11.pdf — 29 pages.
S10 = lectures/Lecture 05 Micro 2026 15.16.11.pdf — 33 pages.
S11 = lectures/Lecture 06 Micro 2026 15.16.11.pdf — 34 pages.
S12 = lectures/Lecture 07 Micro 2026.pdf — 23 pages.
S13 = lectures/Lecture 08 Micro 2026.pdf — 24 pages.
S14 = lectures/Lecture 09 Micro 2026.pdf — 25 pages.
S15 = lectures/Lecture 10 Micro 2026.pdf — 25 pages.
S16 = lectures/Lecture 11 Micro 2026.pdf — 25 pages.
S17 = lectures/Lecture 12 Mikro 2026.pdf — 20 pages.
S18 = past exams/2020.pdf — 7 pages.
S19 = past exams/2021.pdf — 5 pages.
S20 = past exams/2022.pdf — 5 pages.
S21 = past exams/2023.pdf — 6 pages.
S22 = past exams/2024.pdf — 5 pages.
S23 = past exams/2025.pdf — 6 pages.

COURS -> COMPÉTENCES -> APPLICATIONS
L1, Introduction, Friberg 1.1–2.1 et 19 : rareté, choix, allocation,
  efficacité et distribution, hypothèses des modèles, dérivées.
L2, Supply and demand, Friberg 2.2–2.5 : fonctions directes/inverses,
  déplacements de courbes, équilibre et effets de chocs.
  Sert de base à A4.2, A6.3 et aux politiques dans tous les examens.
L3, Consumer choice, Friberg 5.1–5.6 : préférences, utilité ordinale,
  indifférence, MRS, budget, choix intérieur ou en coin, biais comportementaux.
  A2.2 ; E2022 Q5 ; E2021 Q4e ; définitions de Q5.
L4, Demand curves and elasticities, Friberg 6.1–6.4 : demande individuelle,
  agrégation, compensation et élasticités. A2.1 ; E2020 Q5 ; Lerner.
L5, From technology to costs, Friberg 3.1–3.7 : production, MP, isoquantes,
  productivité, minimisation du coût, catégories de coûts, rendements.
  Q5 de E2021, E2023, E2025 ; définitions très récurrentes.
L6, Supply by price taking firms, Friberg 4.1–4.8 : MR=MC, p=MC,
  arrêt court terme, sortie long terme, agrégation, entrée et profit nul.
  E2020 Q5, E2024 Q5 ; mécanismes de concurrence monopolistique.
L7, Efficiency, Friberg 7.1–7.5 : CS, PS, welfare, DWL, plafond/plancher,
  taxe et subvention. A4.2 ; politiques et graphiques de tous les sujets.
L8, Monopoly and monopolistic competition, Friberg 9.1–9.3 : MR,
  pouvoir de marché, Lerner, barrières, entrée, firmes hétérogènes.
  A4.1/A4.3 ; E2021 Q3 ; E2022 Q3 ; E2023 Q1 ; E2025 Q3d.
L9, Price discrimination, Friberg 12.1 : premier/troisième/deuxième degrés,
  IC/IR, bundling, abonnement et two-part tariff.
  A5.1/A5.2 ; présent dans les six anciens examens.
L10, Oligopoly, Friberg 10.1–10.3 : Cournot, Nash, réaction, Stackelberg,
  Bertrand homogène et différencié, nombre de firmes, coûts asymétriques.
  A5.3 ; E2020/21/22/23 calculs Cournot ; E2024/25 calculs Bertrand.
L11, Externalities, Friberg 13.1–13.2 : coûts/bénéfices privés et sociaux,
  Pigou, émissions, permis, Coase, biens publics et ressources communes.
  A6.1/A6.3 ; grands exercices E2020/23/24 et biens publics E2025.
L12, Asymmetric information, Friberg 14.1–14.4 : adverse selection,
  lemons, signal/screening, moral hazard, principal-agent, partage du risque.
  A6.2 ; questions théoriques ou numériques dans les six examens.
A3 : jeux simultanés/séquentiels, préférences sociales, engagements.
  Extension du Nash évoqué en L10 ; provenance disciplinaire du devoir non
  précisée par sa couverture. Ne pas l'écarter parce qu'il est atypique.

FORMAT ET TENDANCES OBSERVÉS
Les sujets 2020–2025 durent 4 heures, ont quatre questions principales
totalisant 83 points et une Q5 de remplacement du midterm, sur 10 points.
Les consignes exigent des réponses en anglais, structurées et motivées.
Les sujets 2020–2023 précisent explicitement les aides/calculatrice ; ne pas
extrapoler une autorisation actuelle à partir d'un ancien sujet.
L1 p.17–18 annonce pour 2026 : examen le 23 octobre, midterm le 28 septembre,
midterm couvrant L1–L6, hand-ins 7 points, midterm 10, final 83, total 100.
Seuils affichés : Pass 50, Good 60, Very good 70, Excellent 80.

Comptage par ANNÉE, pas par nombre de sous-questions :
- Pouvoir de marché et tarification/discrimination : 6/6, 2020–2025.
- Taxes, subventions ou autre réglementation avec raisonnement de surplus :
  6/6, 2020–2025 ; inclut droits de douane et plafond en 2023.
- Information asymétrique : 6/6, 2020–2025.
- Biens publics au sens strict : 5/6, 2020, 2021, 2022, 2024, 2025.
  2023 traite une ressource commune/spectre ; public OU commun = 6/6.
- Externalités explicitement traitées hors simple définition de bien public :
  5/6, 2020, 2021, 2023, 2024, 2025.
- Commerce international ou avantage comparatif : 5/6,
  2020, 2021, 2022, 2024, 2025.
- Calcul d'équilibre Cournot : 4/6, 2020, 2021, 2022, 2023.
  Comparaison qualitative Cournot/Bertrand également en 2025.
- Calcul Bertrand différencié : 2/6, 2024, 2025.
- Leadership séquentiel numérique : 2/6, 2021 en quantités, 2024 en prix.
- Enchères explicites : 2/6, 2023 et 2025.
- Plateformes/effets de réseau/multihoming comme modèles explicites :
  2/6, 2022 et 2025 ; d'autres sujets utilisent des plateformes comme contexte.
- Cinq définitions élémentaires dans la Q5 optionnelle : 6/6.

PATTERN DE CONSTRUCTION D'UNE GRANDE QUESTION
Définir un mécanisme -> résoudre un cas de base -> modifier une hypothèse
(taxe, entrée, coûts, discrimination, information ou ordre des décisions)
-> comparer les équilibres -> dessiner -> expliquer l'intuition.
Les thèmes se combinent : monopole + taxe, Cournot + coûts asymétriques,
subvention + externalité, plateforme + discrimination, crédit + IC.

======================================================================
2. LOGIQUE COMMUNE ET OUTILS MATHÉMATIQUES
======================================================================

2.1 Le squelette de presque tous les problèmes
1) Qui décide ? Consommateur, firme, banque, autorité, enchérisseur.
2) Quel objectif ? Utilité, profit, coût minimal ou surplus SOCIAL.
3) Quelle variable choisit-il ? Quantité, prix, effort, inputs, contrat.
4) Qu'est-ce qui est donné ? Prix, revenu, rival, technologie, information.
5) Quelles contraintes ? Budget, production, capacité, non-négativité,
   participation, incitation, non-revente, réaction du suiveur.
6) Écrire la fonction objectif et les relations de cohérence.
7) Résoudre ; vérifier domaine, coins, optimum et participation.
8) Revenir aux prix, quantités, profits et surplus demandés.
9) Expliquer pourquoi une petite déviation n'améliore pas l'objectif.

« Marginal » signifie l'effet d'une unité supplémentaire, ou la dérivée
dans un modèle continu. « Average » signifie total divisé par quantité.
Une décision marginale compare bénéfice supplémentaire et coût
supplémentaire. Un coût fixe inévitable n'apparaît pas dans cette comparaison,
mais compte dans le profit total et la décision de rester à long terme.

2.2 Dérivées et conditions d'optimalité
y=f(x) : f'(x)=dy/dx, pente locale. Pour plusieurs variables, utiliser
une dérivée partielle en gardant les autres constantes.
d(k)/dx=0 ; d(ax)/dx=a ; d(x^n)/dx=n*x^(n-1).
d[f(x)g(x)]/dx=f'(x)g(x)+f(x)g'(x), règle du produit.
Pour p(Q)Q, MR=p(Q)+Q*p'(Q), et non seulement p'(Q)Q.
Pour une fonction concave, la FOC f'(x)=0 donne un maximum intérieur.
Vérifier f''(x)<0 ou comparer les valeurs aux frontières si nécessaire.
Une FOC seule ne garantit ni maximum, ni quantité admissible, ni production.

Pour une somme espérée : E[X]=somme(probabilité de l'état * résultat).
Calculer le résultat NET dans chaque état avant de pondérer.
Une pénalité appliquée avec probabilité d a un coût espéré d*F.

2.3 Aires et unités
Rectangle = base*hauteur ; triangle = base*hauteur/2.
Surplus = aire entre disposition marginale à payer et coût/prix pertinent.
Forme générale : aire = intégrale de la différence verticale en fonction Q.
Les triangles supposent des courbes linéaires sur l'intervalle considéré.
Prix en monnaie/unité * quantité en unités = monnaie.
Si Q est en MILLIERS de tonnes et p en dollars/tonne, l'aire est en
MILLIERS de dollars. Ce point change le résultat d'un facteur 1000.
Une élasticité n'a pas d'unité ; une pente en a généralement une.

2.4 Réécrire avant de calculer
Demande directe Q=a-bp -> demande inverse p=a/b-Q/b.
Offre directe Q=-c+dp -> offre inverse p=c/d+Q/d.
Sur un graphique de marché : Q horizontal, p vertical ; tracer les formes
inverses. Pour additionner les demandes privées : additionner les quantités
au même prix, pas les prix. Pour un bien public : additionner les bénéfices
marginaux au même Q, donc verticalement.

======================================================================
3. OFFRE, DEMANDE, ÉQUILIBRE ET CHOCS — L2
======================================================================

Demande : quantité que les acheteurs souhaitent acheter à chaque prix.
Offre : quantité que les vendeurs souhaitent vendre à chaque prix.
Hypothèses du modèle concurrentiel simple : nombreux agents, produits
homogènes, price takers ; pas d'interaction stratégique significative.
Définir le marché par produit, zone géographique et période.

Exemple L2 p.7/16/20 : QD=10-p, QS=-2+p.
Équilibre : QD=QS ->10-p=-2+p ->p*=6, Q*=4.
À p=4 : QD=6, QS=2, excès de demande de 4, pression à la hausse.
À p=8 : QD=2, QS=6, excès d'offre de 4, pression à la baisse.
Une quantité négative prédite hors domaine signifie en général quantité 0.

VARIATION DU PRIX DU BIEN -> mouvement LE LONG de sa courbe.
VARIATION D'UN DÉTERMINANT AUTRE QUE CE PRIX -> déplacement de la courbe.
Demande QD=f(p,T,p_r,I) : goûts/température T, autre prix p_r, revenu I.
Bien normal : revenu augmente -> demande se déplace à droite.
Bien inférieur : revenu augmente -> demande se déplace à gauche.
Substituts : prix de l'autre bien augmente -> demande à droite.
Compléments : prix de l'autre bien augmente -> demande à gauche.
Coût d'input augmente -> offre à gauche/vers le haut.
Technologie meilleure/entrée de producteurs -> offre à droite/vers le bas.

Toutes choses égales par ailleurs, pour courbes usuelles :
D à droite : p augmente, Q augmente. D à gauche : p baisse, Q baisse.
S à droite : p baisse, Q augmente. S à gauche : p augmente, Q baisse.
D à droite ET S à gauche : p augmente, effet sur Q ambigu.
D à droite ET S à droite : Q augmente, effet sur p ambigu.
D à gauche ET S à gauche : Q baisse, effet sur p ambigu.
D à gauche ET S à droite : p baisse, effet sur Q ambigu.
Ne pas conclure sur une variable ambiguë sans taille relative des chocs.

Sensibilité : pour un choc de demande donné, une offre raide implique
une forte variation de prix et une faible variation de quantité.
Une offre plus plate absorbe davantage le choc par la quantité.
Applications L2 : récoltes de blé, thé/café, riz, palladium.
Expliquer avec « à prix donné, davantage/moins serait offert/demandé »,
puis seulement chercher le nouvel équilibre.

======================================================================
4. CONSOMMATEUR, PRÉFÉRENCES, BUDGET ET DEMANDE — L3–L4
======================================================================

4.1 Préférences et utilité
Complétude : possibilité de classer deux paniers, y compris indifférence.
Transitivité : si A préféré à B et B à C, A préféré à C.
Non-satiété / more-is-better : davantage de biens désirables est préférable.
Utilité ordinale : U classe les paniers ; une utilité 100 n'indique pas
deux fois plus de bonheur qu'une utilité 50. Une transformation strictement
croissante représente les mêmes préférences.
Exemple L3 : U(E,F)=sqrt(EF), avec E entertainment, F food.
U=EF donne le même classement pour E,F positifs ; les niveaux numériques
et les dérivées changent, pas les choix optimaux.

MU_x = dérivée partielle de U par rapport à x : utilité marginale du bien x.
Utilité marginale décroissante : une unité de plus ajoute de moins en moins
d'utilité, à quantité de l'autre bien donnée. Ne pas confondre cette
propriété avec le caractère ordinal de l'utilité.

Courbe d'indifférence : paniers donnant le même U. Sous préférences usuelles,
elle est décroissante, convexe vers l'origine, ne croise pas une autre courbe
du même consommateur ; les courbes plus au nord-est sont préférées.
Deux biens désirables : pente positive incompatible avec more-is-better.
Si thé horizontal et café vertical, indifférences horizontales : seul le
café compte ; le thé ne procure pas d'utilité marginale (L3 p.10).

4.2 MRS et budget : ne jamais inverser les axes sans adapter les ratios
Avec x horizontal et y vertical, le long d'une indifférence :
0=MU_x*dx+MU_y*dy ->dy/dx=-MU_x/MU_y.
MRS_xy=MU_x/MU_y, valeur absolue de cette pente : quantité de y que le
consommateur est prêt à abandonner pour une unité supplémentaire de x.
Dans L3, F horizontal et E vertical : pente=-MU_F/MU_E.

Budget p_x*x+p_y*y <= I ; égalité à l'optimum si non-satiété et prix positifs.
y=I/p_y-(p_x/p_y)*x ; intercepts x=I/p_x et y=I/p_y.
Revenu augmente : déplacement parallèle vers l'extérieur, prix inchangés.
Prix x augmente : intercept y inchangé, intercept x baisse, budget plus raide.
Un changement de prix réduit le pouvoir d'achat ; il ne change pas forcément
le revenu nominal I.

4.3 Optimum intérieur
Max U(x,y) sous le budget. À une tangence intérieure :
MU_x/MU_y=p_x/p_y, soit MU_x/p_x=MU_y/p_y.
Intuition : le dernier euro apporte la même utilité marginale dans les deux
usages. Sinon déplacer une petite dépense vers le meilleur usage améliore U.
Utiliser cette condition AVEC le budget, pas à sa place.
Elle suppose une solution intérieure et des préférences suffisamment
régulières ; comparer les coins et les coudes lorsque nécessaire.

Complément calculatoire, Cobb-Douglas U=x^alpha*y^beta, alpha,beta>0 :
x*=alpha/(alpha+beta)*I/p_x ; y*=beta/(alpha+beta)*I/p_y.
Justification : MRS=(alpha/beta)*(y/x)=p_x/p_y, puis budget.
Pour U=xy : moitié du revenu sur chaque bien, pas moitié du nombre d'unités.

4.4 Substituts et compléments parfaits
Substituts parfaits U=ax+by : MRS=a/b constant ; comparer a/p_x à b/p_y.
Tout sur x si a/p_x>b/p_y ; tout sur y si inverse ; tout mélange sur le
budget est optimal si égalité. Une tangence unique n'est pas requise.
Exemple L4 p.10 : 2 macchiati équivalent à 1 cappuccino, mêmes prix :
acheter seulement des cappuccini, plus d'utilité par euro.
Compléments parfaits U=min(x/a,y/b) : choisir au coude x/a=y/b,
car des unités non appariées n'ajoutent rien. Exemple chaussures G/D.
Pour une paire 1:1 : x=y=I/(p_x+p_y).

4.5 Demande et revenu
Recalculer l'optimum pour chaque prix x, en gardant I et les autres prix
constants ; les couples (p_x,x*) tracent la demande individuelle.
Courbe d'Engel : quantité optimale en fonction du REVENU, prix constants.
Bien normal : quantité augmente avec I ; inférieur : baisse avec I.
Un même bien peut être normal à faible revenu et inférieur à haut revenu
(L4 exemple des nuits en auberge).
Bien de luxe : élasticité-revenu >1 ; nécessité normale : entre 0 et 1.
Ces qualificatifs ne classent pas la qualité intrinsèque du bien.

4.6 Substitution, revenu et compensation
Une hausse du prix rend x relativement plus cher : substitution vers y.
Elle diminue aussi le pouvoir d'achat : effet de revenu.
L4 p.11–13 : taxe sur l'essence, puis transfert forfaitaire suffisant pour
atteindre l'ANCIENNE indifférence aux NOUVEAUX prix. L'utilité peut être
maintenue alors que la consommation d'essence baisse par substitution.
Ce transfert ne supprime pas le nouveau prix relatif.
E2022 Q5 : transfert permettant d'acheter l'ANCIEN PANIER après retrait
d'une subvention alimentaire. L'ancien panier reste accessible ; avec une
ancienne solution intérieure et une indifférence strictement convexe,
rechoisir au nouveau budget donne généralement une utilité supérieure.
Ancien panier accessible et ancienne utilité juste atteinte sont deux
critères de compensation distincts. La garantie générale est « pas moins
bien », la stricte amélioration demande des conditions de tangence/coin.

4.7 Demande de marché
QD(p)=somme_i max(0,q_i(p)). Addition HORIZONTALE à prix donné.
L4 p.19 : q_H=10-p, q_L=5-p.
QD=0 pour p>=10 ; QD=10-p pour 5<p<10 ; QD=15-2p pour 0<=p<=5.
La demande inverse agrégée a un coude ; vérifier le segment de tout optimum.

4.8 Comportement, préférences sociales et limites
L3 : utilité peut intégrer altruisme, statut, respect, fierté et malveillance.
Maximiser l'utilité n'équivaut donc pas à maximiser sa seule consommation.
Ultimatum game : refus possible d'une offre monétaire positive pour équité.
Manque de self-control : gratification immédiate contre intérêt futur.
Heuristiques : règles simples lorsque l'optimisation est difficile.
Loss aversion : les pertes peuvent peser davantage que les gains comparables.
Framing : présentation d'un choix affecte la décision.
Overconfidence : confiance excessive dans ses capacités/informations.
Préférences sociales dans A3 : convertir les gains monétaires en UTILITÉS
avant de chercher les meilleures réponses.

======================================================================
5. ÉLASTICITÉS — L4 ET A2
======================================================================

Élasticité de Q par rapport à z : variation en % de Q pour variation de 1%
de z, localement. Forme discrète de L4 : (Delta Q/Q0)/(Delta z/z0).
Forme ponctuelle : epsilon_Q,z=(dQ/dz)*(z/Q) ; dérivée partielle si besoin.

Prix propre : epsilon_D=(dQD/dp)*(p/QD), généralement négative.
Offre : epsilon_S=(dQS/dp)*(p/QS), généralement positive.
Prix croisé : epsilon_ij=(partial Q_i/partial p_j)*(p_j/Q_i).
Revenu : eta=(partial Q/partial I)*(I/Q).
Prix croisé positif -> substituts ; négatif -> compléments.
Revenu négatif -> inférieur ; positif -> normal ; >1 -> luxe.
Demande inélastique : -1<epsilon_D<0 ; unitaire : -1 ; élastique : <-1.
Parfaitement inélastique : 0, courbe verticale. Parfaitement élastique :
valeur absolue infinie, courbe horizontale dans le cas limite.

Approximation de variation : %Delta Q ≈ epsilon * %Delta z.
Objectif de quantité : %Delta z ≈ %Delta Q / epsilon.
Garder le signe : baisse de prix et epsilon négatif donnent hausse de Q.
Pour une variation importante, préciser la convention ; l'approximation
linéaire n'est pas une identité d'une fonction à élasticité constante.
Si Q=A*p^epsilon, exact : Q1/Q0=(p1/p0)^epsilon.
Élasticité d'arc (complément) : utiliser les moyennes (Q0+Q1)/2 et
(p0+p1)/2 dans les deux pourcentages. Ne pas mélanger les conventions.

Exemples L4 : Q passe 6->4, p 1->2 : epsilon sur base initiale=-1/3.
epsilon=-1.5, prix baisse de 10% ->Q augmente approximativement de 15%.
epsilon=-0.5, objectif Q +5% ->prix environ -10%.
eta=-2, revenu +10% ->Q environ -20%.

Demande linéaire Q=a-bp : dérivée=-b constante, epsilon=-b*p/(a-bp)
VARIABLE. Plus p est élevé, plus |epsilon| est grand, à paramètres fixes.
Demande inverse p=A-BQ : epsilon=-p/(B*Q).
Ne pas utiliser dp/dQ à la place de dQ/dp sans prendre l'inverse.
Recette R=pQ : dR/dp=Q*(1+epsilon_D).
Demande élastique : hausse du prix baisse R ; inélastique : hausse du prix
augmente R ; unitaire : recette localement stationnaire.
Le profit dépend aussi des coûts : recette maximale et profit maximal
ne sont pas toujours au même prix.

Horizon long -> souvent davantage de possibilités de substitution.
Définition étroite d'un produit -> souvent davantage de substituts.
L4 étude alcool, valeurs du SUPPORT, pas règles universelles :
Own-price spirits -1.3, beer -0.9, wine -0.2 ; cross-price Danemark
0.3/0.5/0.2 ; income 1.4/1.0/0.6 ; stores et Fridays 0.1/0.2/0.2.
Ces nombres illustrent l'estimation empirique, pas une formule à mémoriser.

======================================================================
6. PRODUCTION, COÛTS ET OFFRE CONCURRENTIELLE — L5–L6
======================================================================

6.1 Technologie et produits marginaux
Fonction Q=f(K,L) : quantité obtenue avec capital K et travail L.
MP_L=partial Q/partial L ; MP_K=partial Q/partial K.
AP_L=Q/L, produit moyen ; discret MP=Delta Q/Delta L, K fixé.
L5 p.11 : Q=50 à L=9, 54 à L=10, 56 à L=11.
Produit du 10e travailleur=4 ; produit moyen à 10=54/10=5.4.
Rendement marginal décroissant : un input augmente, l'autre reste fixé.
Exemple L5 : Q=sqrt(KL), MP_L=0.5*sqrt(K/L), MP_K=0.5*sqrt(L/K).
Complément Cobb-Douglas Q=A*K^alpha*L^beta :
MP_L=beta*Q/L ; MP_K=alpha*Q/K.
A capture la productivité globale des facteurs, TFP : plus d'output avec
les mêmes inputs, ou moins d'inputs pour le même output.

Embauche, output vendu au prix p donné : continuer tant que p*MP_L>w.
À un optimum intérieur concurrentiel : p*MP_L=w.
Avec pouvoir de marché sur l'output, remplacer p par MR (complément).
L5 peste noire : moins de travail relativement à la terre peut augmenter
le produit marginal du travail et le salaire, technologie donnée.

6.2 Isoquantes, isocoûts et coût minimal
Isoquante : combinaisons K,L produisant le même Qbar.
Avec L horizontal, K vertical : pente=-MP_L/MP_K.
MRTS_LK=MP_L/MP_K : capital pouvant être économisé par unité de L ajoutée.
Isocoût : C=wL+rK ->K=C/r-(w/r)L, pente=-w/r.
Minimiser wL+rK sous f(K,L)>=Qbar ; égalité pour technologie usuelle.
Optimum intérieur : MP_L/MP_K=w/r, soit MP_L/w=MP_K/r.
Le dernier euro doit créer le même output marginal dans les deux inputs.
Hausse w : travail relativement plus cher -> combinaison plus intensive
en capital sur la même isoquante, si substitution possible. Le coût minimal
ne peut pas baisser lorsque le prix d'un input augmente, autres choses égales.
Ne pas faire seulement pivoter l'ancien isocoût : chercher aussi le nouvel
isocoût tangent, généralement plus coûteux, pour le Q imposé.

Exemple complément pour Q=sqrt(KL) : K/L=w/r ; KL=Qbar^2.
L*=Qbar*sqrt(r/w), K*=Qbar*sqrt(w/r), C*=2*Qbar*sqrt(wr).
Pour Q=K*L, isoquante K=Qbar/L, différente de sqrt(KL).
E2025 Q5 : isocoût 1000=50L+100K ->K=10-0.5L ; intercepts 20 et 10.
La production « bien comportée » ne fournit pas de valeurs numériques
de L*,K* sans fonction de production plus précise ; l'optimum se dessine.

6.3 Rendements d'échelle et économies d'échelle
Multiplier TOUS les inputs par t>1 et comparer f(tK,tL) à t*f(K,L).
Supérieur -> increasing returns to scale ; égal -> constant ; inférieur
-> decreasing. Cobb-Douglas : comparer alpha+beta à 1.
Les rendements concernent la TECHNOLOGIE. Les économies d'échelle concernent
le COÛT MOYEN à long terme : ATC baisse avec Q. Déséconomies : ATC augmente.
Un produit marginal décroissant d'un facteur n'implique pas des rendements
d'échelle décroissants : sqrt(KL) a MP décroissants et rendements constants.

6.4 Tableau des coûts
TC=C(Q)=FC+VC(Q).
ATC=AC=TC/Q ; AFC=FC/Q ; AVC=VC/Q ; ATC=AFC+AVC.
MC=dTC/dQ=dVC/dQ, car dérivée de FC constante=0.
MC discret de la prochaine unité : C(Q+1)-C(Q).
MC<ATC ->ATC baisse ; MC>ATC ->ATC augmente.
Au minimum intérieur de ATC : MC=ATC. Même logique pour AVC.
Coût fixe ne signifie pas automatiquement sunk : vérifier s'il est
récupérable/évitable dans l'horizon de la décision.
Court terme : au moins un input fixé. Long terme : tous ajustables,
sans durée calendaire universelle. Coût long terme <= coût court terme
à Q donné, car il offre davantage de choix d'inputs.

Exemple L5 C=30+Q^2 à Q=2 : TC34, FC30, VC4, ATC17, AVC2, AFC15,
MC continu4 ; coût discret de passer de 2 à 3=5.
Ne pas confondre ces deux sens du coût marginal.

6.5 Profit et offre d'une firme price taker
pi(q)=p*q-C(q). MR=p car une firme ne change pas le prix de marché.
La maximisation du profit est l'hypothèse du modèle. L6 p.3 invite aussi
à discuter horizon temporel, autres objectifs et corporate social
responsibility : responsabilité sociale de l'entreprise. Cela ne change
pas une FOC donnée tant qu'aucun autre objectif n'est spécifié dans l'énoncé.
FOC p=MC(q). L'offre est la partie pertinente de MC croissante au-dessus
du seuil d'arrêt, avec comparaison à q=0.
Exemple L6 C=10+q^2, p12 : MC2q ->q6 ; R72, C46, pi26.
Pour tout p admissible : q=p/2 ; à p0, q0.
Minimum ATC pour cet exemple : q=sqrt(10), prix=2sqrt(10)≈6.325.
pi=(p-ATC)*q. PS=pq-VC=pi+FC ; PS n'est pas forcément le profit.

6.6 Produire ou arrêter ?
Court terme, FC inévitable : produire si la meilleure quantité donne
R>=VC, soit p>=AVC(q*) ; sinon q=0 et perte=-FC.
Le seuil standard est min AVC, sous hypothèses usuelles.
Si AVC<p<ATC, produire à perte peut minimiser la perte : une partie de FC
est couverte. À égalité R=VC, indifférence entre produire et s'arrêter.
Long terme : rester/entrer seulement si le profit économique est >=0,
donc p>=ATC au niveau optimal. Sinon sortie lorsque possible.
L6 T-shirts : MC5 jusqu'à q10, puis MC15, p10 ->q10. FC25 donne pi25 ;
FC40 donne pi10. Le changement de FC ne modifie pas la quantité intérieure.

6.7 Offre de marché, entrée et coût d'opportunité
Additionner horizontalement les offres individuelles, en excluant les
quantités négatives. L6 q1=p-2, q2=p-4 :
QS=0 pour p<2 ; p-2 pour 2<=p<4 ; 2p-6 pour p>=4.
Hausse de demande : prix/profits montent à court terme -> entrée -> offre
du marché à droite -> baisse du prix/profit jusqu'au profit économique nul.
Dans le cas de firmes identiques réplicables à coût constant, p_LR=min ATC,
q par firme revient au niveau efficient, quantité de marché et nombre de
firmes augmentent. Ce résultat ne décrit pas tous les secteurs.
Input rare au niveau du secteur -> offre LR peut croître ; apprentissage
ou économies externes -> elle peut décroître.

Coût comptable : dépenses explicites. Coût économique : inclut la valeur
de la meilleure alternative sacrifiée, sans double comptage.
Naomi L6 : fournitures30 000 + livraison10 000 ->comptable40 000 ;
salaire alternatif50 000 ->économique90 000.
Profit économique nul n'implique ni salaire nul ni absence de revenu :
les facteurs reçoivent déjà leur rémunération d'opportunité.
Rente économique : revenu lié à une ressource rare au-delà de son usage
alternatif pertinent ; différent du simple loyer comptable.
======================================================================
7. SURPLUS, TAXES, SUBVENTIONS ET PRIX RÉGLEMENTÉS — L7
======================================================================

7.1 Qui reçoit quoi ?
CS, consumer surplus : valeur totale pour les acheteurs moins leurs paiements.
CS=intégrale_0^Q [p_D(q)-p_b] dq, si les unités vont aux acheteurs qui les
valorisent le plus. Pour p_D=a-bQ : CS=(a-p_b)*Q/2.
PS, producer surplus : recettes nettes de taxe moins coût variable.
PS=intégrale_0^Q [p_s-MC(q)] dq ; pour p_S=c+dQ : PS=(p_s-c)*Q/2.
Profit=PS-FC. En présence de prix différents, intégrer les recettes réelles
au lieu d'utiliser un rectangle pQ unique.
Welfare W=CS+PS dans le modèle sans État ni externalité, à coûts fixes
inchangés. Avec État : ajouter recettes fiscales, soustraire dépenses de
subvention. Avec externalité : ajouter bénéfices externes, soustraire dommages.
Lorsque l'entrée ou les coûts fixes changent, inclure aussi ces coûts réels.

Une somme de surplus mesure l'efficacité monétaire, pas l'équité.
Un transfert de CS vers PS n'est pas à lui seul une DWL. Une perte sèche
est une perte NETTE de surplus par rapport au benchmark efficient.
Le modèle concurrentiel maximise W si la demande est le bénéfice marginal
social, l'offre le coût marginal social et les autres hypothèses tiennent.
Monopole, externalité ou information asymétrique peuvent casser ce résultat.

L7 exemple : p_D=23-Q, p_S=2+2Q ->Q7,p16.
CS=(23-16)*7/2=24.5 ; PS=(16-2)*7/2=49 ; W73.5.
Si Q limité à 5 et prix18 : CS12.5 ; PS55 ; W67.5 ; DWL6.
Ici les producteurs gagnent 6 pendant que les consommateurs perdent12 :
la perte sociale est6, pas12.

7.2 Taxe unitaire : écrire TROIS relations
QD(p_b)=QS(p_s)=Q ; p_b=p_s+t.
Le consommateur paie p_b ; le producteur garde p_s ; l'État reçoit tQ.
Que la loi fasse verser la taxe par acheteur ou vendeur ne change pas
l'équilibre de ce modèle, à même taxe et mêmes possibilités de transaction.

Pour p_D=a-bQ et p_S=c+dQ, b,d>0, solution intérieure :
Q0=(a-c)/(b+d) ; Qt=(a-c-t)/(b+d).
p_b=a-bQt ; p_s=c+dQt ; T=tQt.
Hausse de prix acheteur=b*t/(b+d).
Baisse de prix vendeur=d*t/(b+d).
DWL=t*(Q0-Qt)/2=t^2/[2(b+d)], SANS externalité/pouvoir de marché.
Au-delà de la taxe prohibitive, Q=0 ; ne pas prolonger les formules vers Q<0.

Incidence économique : le côté le moins élastique supporte davantage.
Forme locale concurrentielle : part acheteur=epsilon_S/(epsilon_S+|epsilon_D|),
part vendeur=|epsilon_D|/(epsilon_S+|epsilon_D|).
Ces parts ne sont pas une règle générale d'oligopole ou de monopole.
Une base peu élastique génère moins de changement de Q, donc généralement
moins de DWL pour un même prélèvement, sous les hypothèses de comparaison.

L7 taxe t3 : Q6,p_b17,p_s14,T18 ; CS18,PS36,W72,DWL1.5.
Les rectangles transférés à l'État ne sont pas détruits.
Une taxe peut néanmoins financer un bien public ou corriger une externalité :
sa DWL ne suffit pas à juger toute la politique.

7.3 Subvention unitaire
QD(p_b)=QS(p_s)=Q ; p_s=p_b+s.
L'acheteur paie moins, le vendeur reçoit davantage, l'État paie sQ.
Qs=(a-c+s)/(b+d) ; W=CS+PS-sQ.
Sans externalité : DWL=s*(Qs-Q0)/2. Les unités additionnelles ont un coût
réel supérieur à leur bénéfice. Avec externalité positive, cette formule
sans correction externe peut donner le mauvais diagnostic.
L7 s3 : Q8,p_b15,p_s18 ; CS32,PS64,dépense24,W72,DWL1.5.

7.4 Prix plafond et plancher
Price ceiling / cap : prix maximal. Binding si plafond sous p* dans le
cas usuel. Quantité échangée souvent limitée par QS ; pénurie QD-QS.
Dessiner le plafond horizontal ; lire QS et QD séparément.
Le CS dépend aussi du rationnement : la formule standard suppose que les
unités disponibles vont aux acheteurs qui ont les plus fortes WTP.
Rationnement aléatoire, files d'attente et recherche peuvent ajouter des pertes.
Le PS baisse ; le CS peut monter OU baisser ; W baisse sans autre défaillance.
L7 plafond12 : QS5,QD11 ; échanges5 ; CS42.5,PS25,W67.5,DWL6.
Un plafond >=p* est non contraignant dans le modèle concurrentiel simple.

Price floor : prix minimal, binding au-dessus de p*. Excès d'offre.
Sans achats publics, quantité vendue limitée par QD ; ne pas compter QS
comme quantité consommée. Avec achats publics, inclure leur coût et le
sort des invendus. Le résultat de welfare dépend de ce dispositif.

E2023 pétrole russe : ne pas appliquer mécaniquement « plafond ->pénurie ».
Offre russe verticale au-delà de50, plafond60 au lieu de90 : même volume
8 millions de barils/jour ; transfert de rente30*8 millions=240 millions
USD/jour. Pas de baisse de cette offre sous les hypothèses ; le plafond
vise un fournisseur, pas nécessairement le prix de tout le marché mondial.

7.5 Taxes et revenus : une conclusion à vérifier
Revenue=t*Q(t). Baisser t réduit le prélèvement par unité mais peut augmenter
le volume. Le signe de Delta revenue n'est pas universel sans chiffres.
Avec demande inélastique et faible baisse de taxe, le volume varie peu et
les recettes diminuent généralement. Montrer les deux effets si l'énoncé
ne permet pas de chiffrer. Une TVA en % et une taxe unitaire ne sont pas
identiques ; E2025 autorise explicitement de traiter la TVA comme unitaire.

======================================================================
8. MONOPOLE ET CONCURRENCE MONOPOLISTIQUE — L8
======================================================================

8.1 Monopole à prix unique
Une firme fait face à la demande du marché, décroissante.
R(Q)=p(Q)*Q ; MR=p(Q)+Q*p'(Q).
pi(Q)=p(Q)*Q-C(Q) ; optimum intérieur MR=MC.
Trouver Q avec MR=MC, puis trouver le PRIX sur la DEMANDE, pas sur MR.
Quand vendre plus impose de baisser le prix de toutes les unités,
MR<p pour une demande strictement décroissante.
Demande inverse p=a-bQ : R=aQ-bQ^2 ; MR=a-2bQ, pente deux fois plus forte.
MC constant c, FC F : Qm=(a-c)/(2b), pm=(a+c)/2,
pi=(a-c)^2/(4b)-F, si produire est rentable dans l'horizon considéré.
L'efficacité hors externalité exige p_D=MC ->Qeff=(a-c)/b.
DWL=b*(Qeff-Qm)^2/2=(pm-c)*(Qeff-Qm)/2.

L8 p.8–11 : p=12-Q, C=3+Q^2 ->MR12-2Q, MC2Q,
Qm3,pm9,ATC4,profit15 ; Qeff4,p_eff8 ; DWL1.5.
Le prix élevé transfère du surplus sur les unités vendues ; les unités
non vendues malgré WTP>MC créent la perte sèche.
Un faible prix absolu est compatible avec le monopole si MC faible et/ou
demande élastique. Exemple de la levure E2023 Q1a.
Le monopole n'a pas une courbe d'offre indépendante de la demande : MR
dépend de sa forme, et un même prix peut correspondre à diverses quantités
optimales sous diverses demandes. Référence E2022 Q4c.

8.2 Lerner : dérivation à savoir expliquer
epsilon_D=(dQ/dp)*(p/Q), donc (dp/dQ)*(Q/p)=1/epsilon_D.
MR=p+Q*p'=p*(1+1/epsilon_D).
À MR=MC : (p-MC)/p=-1/epsilon_D.
Lerner L=(p-MC)/p : marge RELATIVE au prix, pas profit total ni (p-MC)/MC.
|epsilon| grand ->faible marge relative ; demande peu sensible ->marge forte.
Avec MC>0, optimum intérieur de prix unique sur la partie élastique,
epsilon<-1 ; MC=0 peut donner epsilon=-1.
Une figure appelée « inelastic demand » dans un support peut comparer
des sensibilités relatives ; un monopole à MC positif n'optimise pas sur
un point strictement inélastique. Une baisse de Q y augmenterait R et
économiserait des coûts.
Cette relation concerne la demande de la FIRME. En oligopole, ne pas
substituer aveuglément l'élasticité du marché à celle qu'elle perçoit.

8.3 Barrières et monopole naturel
Barrières : réglementation/licence, brevet, contrôle d'un input essentiel,
économies d'échelle/monopole naturel, comportements stratégiques.
Monopole naturel : une firme peut servir le marché à moindre coût que
plusieurs, sur la plage pertinente. Prix=MC peut ne pas couvrir FC.
Brevet : perte statique de surplus contre incitations à investir/innover,
à comparer dans le temps. E2024 Q2b ne demande pas de nier la DWL statique.
La durée légale précise mentionnée dans un exercice est une donnée de
l'énoncé, pas une vérification juridique par ce dossier.

8.4 Concurrence monopolistique
Nombreuses firmes, produits différenciés, entrée/sortie faciles ; une firme
a une demande décroissante mais néglige généralement la réaction d'une
concurrente précise. Elle choisit MR=MC.
Court terme : profit positif ou négatif possible.
Profit positif ->entrée ->demande par firme diminue et devient souvent
plus élastique ->profit économique nul dans le modèle symétrique LR.
Long terme : p=ATC MAIS p>MC ; profit nul ne signifie pas concurrence parfaite.
Typiquement production sous la quantité minimisant ATC, « excess capacity ».
Le nombre de firmes et la variété font partie de l'équilibre.

Choc de demande négatif ->pertes initiales ->sorties ->demande des survivantes
se redresse ->profit nul rétabli. Le nombre de firmes baisse ; la quantité
par survivante n'a pas un signe universel sans fonction de demande/coûts.
Si le choc ne change que la taille du marché dans un modèle standard à
taille optimale constante, elle peut revenir au niveau antérieur.
Choc de coût ->réoptimisation et entrée/sortie ; en oligopole avec barrières,
la discipline du profit nul par libre entrée ne s'applique pas de même.

8.5 Firmes hétérogènes
Plus productives ->MC plus faible, prix souvent plus bas, volume/part de
marché plus élevés. « Competitive reallocation » : croissance des efficaces,
réduction/sortie des moins efficaces.
Libre entrée peut impliquer E[pi]=0 AVANT de découvrir sa productivité,
sans imposer pi=0 pour chaque firme une fois son type connu.
L8 p.24, coût d'entrée20 et dé équiprobable : profits réalisés
28,16,4,-8,-20,-20 ; moyenne0. Au dernier tirage, profit variable potentiel
-12 : la firme s'arrête, limite sa perte à20. Cette table distingue
profit attendu, profit réalisé et arrêt après coût d'entrée irrécupérable.

======================================================================
9. DISCRIMINATION, SEGMENTATION, BUNDLING ET TARIFS — L9
======================================================================

9.1 Conditions et trois degrés
Discrimination : différentes unités d'un même bien vendues à différents
prix, pour des raisons de WTP au-delà des seules différences de coût.
Il faut du pouvoir de marché et limiter revente/arbitrage ; savoir classer
les clients, ou leur proposer un menu qui les fait se classer eux-mêmes.
Une différence de prix due exclusivement au coût n'établit pas à elle
seule une discrimination.

Premier degré / perfect price discrimination : chaque unité est vendue
à sa WTP maximale. Produire jusqu'à p_D=MC si absence d'autre distorsion.
CS0 ; PS capture tout le surplus variable ; DWL0 dans ce modèle idéal.
Profit=PS-FC. Efficacité élevée et répartition très favorable au vendeur.
Exige une information et une extraction très fortes, généralement irréalistes.

Troisième degré : groupes OBSERVABLES, par exemple étudiants, retraités,
pays. Résoudre MR_i=MC pour chaque groupe (ou MC du total si coût non constant).
À MC commun : (p_i-MC)/p_i=-1/epsilon_i.
Au point optimal, groupe moins sensible en valeur absolue ->prix plus haut.
Un statut observable ne suffit pas à prouver que la remise augmente le
profit : il faut considérer demande, capacité et coût d'opportunité.

Deuxième degré : type non observable, SELF-SELECTION par quantité, qualité,
horaire, attente, coupons, freemium, version premium ou confort.
Le vendeur veut que le type H choisisse l'offre H et le type L l'offre L.
Exemples L9 : trains 1re/2e classe, livres, réservations, jeux freemium.
Dégrader la version économique peut empêcher les clients H d'abandonner
la version chère, même si cette dégradation n'économise pas des coûts.

9.2 Contraintes IC et IR
Utilité nette du type i choisissant le menu j : V_i(B_j)-T_j.
IC_H : V_H(B_H)-T_H >= V_H(B_L)-T_L.
IC_L : V_L(B_L)-T_L >= V_L(B_H)-T_H.
IR_i : V_i(B_i)-T_i >= utilité extérieure (souvent normalisée à0).
L9 p.20 affiche surtout IC_H et IR_L, souvent contraignantes dans le modèle
usuel ; les autres ne doivent pas être oubliées sans justification.
IC empêche de choisir le « mauvais » contrat ; IR empêche de refuser tout
contrat. Prix et qualités doivent être choisis simultanément sous ces contraintes.
Une rente informationnelle peut devoir être laissée aux clients H.

9.3 Segmentation contre prix commun
Segmenté, p_i=a_i-b_i Q_i et MC=c constant :
Q_i=(a_i-c)/(2b_i) ; p_i=(a_i+c)/2 ; comparer à0 si a_i<=c.
Prix commun : Q(p)=somme_i max(0,(a_i-p)/b_i).
Méthode : trouver tous les prix d'exclusion, écrire chaque segment,
maximiser (p-c)*Q(p) sur chaque segment, vérifier les frontières,
comparer les profits. Il peut être optimal de ne servir qu'un groupe.
Ne pas sommer les demandes inverses pour obtenir une demande privée commune.

L9 Lowies p=1-Q_L/2, Highies p=2-Q_H, MC0 :
segmenté QL1,pL0.5,piL0.5 ; QH1,pH1,piH1 ; pi_total1.5.
Commun dans la zone où les deux achètent : Q=4-3p,
p=2/3,Q2,pi4/3. Vérifier aussi p>=1 où seuls Highies achètent.
La discrimination augmente le profit faisable, car le prix commun reste
une option. Le welfare et le CS de chaque groupe ont un signe AMBIGU.
Une ouverture à un groupe exclu peut améliorer W ; une simple réallocation
à quantité inchangée entre WTP différentes peut le diminuer.
Le pays plus pauvre n'est pas automatiquement le plus élastique : vérifier
la demande, au lieu de déduire les prix du revenu national seul.
Parallel imports/trade : acheter au marché bon marché et revendre au marché
cher ; cela compromet la segmentation.

9.4 Bundling
Pure bundling : seulement le lot ; mixed bundling : lot ET achats séparés.
Additionner les WTP d'une même personne pour trouver sa WTP du lot,
puis compter les achats à chaque prix candidat. Comparer les PROFITS,
donc inclure les coûts et les quantités vendues, pas seulement les recettes.
L9 p.22 et E2022 Q4d : deux clients représentatifs, coûts non précisés.
Gourmet : dinner100, room50, bundle150 ; Snoozer : dinner80, room70,
bundle150. À coûts nuls et une personne de chaque type :
dîner prix80 vendu2 ->160 ; chambre prix50 vendue2 ->100 ; total260.
Lot prix150 vendu2 ->300. Le lot extrait davantage des WTP négativement
corrélées. Sans coûts donnés, ce résultat numérique suppose coûts nuls ou
coûts par type/service qui ne renversent pas la comparaison.
Exemple : coûts réels très élevés d'un service peuvent changer le choix.

9.5 Abonnement fixe et two-part tariff : distinction essentielle
Tarif à deux parties : paiement T(q)=F+p*q.
Avec un seul client connu, coût marginal constant c et absence de contrainte
supplémentaire : prix d'usage p=c, quantité efficiente, F=CS(p=c).
Le vendeur extrait le surplus tout en donnant une incitation marginale efficace.
Avec types hétérogènes ou F commun, p=c n'est pas toujours optimal.
Prix uniquement FIXE : p=0 ; consommation jusqu'à WTP marginale0,
F=intégrale_0^q(0) p_D(x)dx ; profit=F-C(q(0)). Ce n'est pas la solution
à deux parties lorsque MC>0 : des usages excessifs coûtent réellement.

L9 p.23–25 : p_D=10-Q, C=2Q.
Monopole simple Q4,p6,pi16.
Deux parties p2,Q8,F32,pi32.
Abonnement seul p0,Q10,F50,coût20,pi30.
F est une recette de la firme et une dépense du client ; ne pas le
confondre avec le coût fixe de production, également souvent noté F.

9.6 Capacité et produits complémentaires — E2025 Q1
Capacité2000, 3000 fans WTP1200, 2000 étudiants WTP500, MC0 :
remplir avec2000 fans à1200 donne2 400 000 kr. Aucun siège disponible
pour ajouter des étudiants sans remplacer un fan qui paie davantage.
La discrimination ne permet donc pas d'augmenter le profit dans ce cas.
Le coût marginal physique est0, mais le siège a un coût d'opportunité.

Concert et T-shirts : maximiser le profit JOINT. Un billet moins cher
peut attirer un acheteur dont les achats de T-shirts ajoutent de la marge.
Qc=1000-pc, QT=Qc-2pT, MCc0,MCT20 :
pi=pc*(1000-pc)+(pT-20)*(1000-pc-2pT).
FOC : 1020-2pc-pT=0 ; 1040-pc-4pT=0.
pc=3040/7≈434.286 ; pT=1060/7≈151.429 ; Qc=3960/7≈565.714 ;
QT=1840/7≈262.857. Billet seul : pc500 ; produit complémentaire ->pc plus bas.
Vérifier QT>=0 et la validité des demandes ; ici l'optimum est intérieur.

======================================================================
10. OLIGOPOLE, COURNOT, BERTRAND ET STACKELBERG — L10
======================================================================

10.1 Choisir le bon jeu
Oligopole : petit nombre de firmes dont les décisions s'affectent directement.
Cournot : quantités choisies simultanément ; produit homogène dans le cas de base.
Bertrand : prix choisis simultanément ; préciser homogène ou différencié.
Stackelberg : un leader choisit d'abord, un suiveur observe et réagit.
Nash : aucune firme ne gagne à dévier UNILATÉRALEMENT, les autres stratégies
étant fixées. L'intersection des meilleures réponses est un Nash.
Une meilleure réponse est un choix conditionnel au rival, pas une promesse
de maintenir ce rival constant après toutes les modifications du modèle.

10.2 Cournot linéaire à deux firmes
p=a-b(q1+q2), coûts C_i=F_i+c_i*q_i.
pi1=[a-b(q1+q2)-c1]*q1-F1.
partial pi1/partial q1=a-2bq1-bq2-c1=0.
BR1(q2)=max(0,(a-c1-bq2)/(2b)), BR2 analogue.
Si toutes deux actives :
q1=(a-2c1+c2)/(3b), q2=(a-2c2+c1)/(3b),
Q=(2a-c1-c2)/(3b), p=(a+c1+c2)/3.
Si une quantité est négative, résoudre le coin où cette firme ne produit pas.
Calculer ensuite pi_i=(p-c_i)q_i-F_i.
À l'intérieur de ce modèle linéaire, p-c_i=bq_i ->profit variable=bq_i^2.
Différences de FC inévitables ne changent pas ces quantités ; elles changent
les profits et peuvent changer les décisions d'entrée/sortie.

L10 exemple a70,b1,c1=c2=10 : BR_i=30-q_j/2 ;
q1=q2=20,Q40,p30,pi_i400 sans FC.
Monopole commun Q30,p40 ; concurrence parfaite Q60,p10.
Avec MC Blue0, Red10 : qBlue80/3≈26.667, qRed50/3≈16.667,
p80/3≈26.667. La firme efficace prend plus de marché ; imposer l'égalité
des parts peut renchérir la production. Grandes parts ne prouvent pas
à elles seules une inefficacité.

10.3 Cournot à n firmes identiques
p=a-bQ, MCc : q_i=(a-c)/[b(n+1)],
Q=n(a-c)/[b(n+1)], p=(a+n*c)/(n+1).
Lerner=(p-c)/p=-(part de marché_i)/epsilon_marché pour ce modèle,
donc en symétrie -1/(n*epsilon_marché).
Avec n croissant : p tend vers c, Q vers la quantité concurrentielle.
Fusion réduisant n, sans synergie de coût : p augmente ; les non-fusionnées
profitent souvent de cette concurrence réduite dans ce modèle.
Ne pas généraliser ce résultat à toute fusion avec coûts/produits changeants.

10.4 Dessiner les réactions Cournot
Axes q1 horizontal/q2 vertical OU inverse, mais garder la même convention.
Si q1 horizontal : BR2 se trace directement q2=f(q1), et BR1 doit se
réécrire q2=(a-c1)/b-2q1 dans la zone intérieure.
Les deux sont décroissantes ; intersection = quantités de Nash.
Coût c1 augmente : la BR1 change, BR2 comme fonction de q1 ne change pas ;
le rival répond au nouvel équilibre. Taxe sur les deux firmes : déplace
les DEUX réactions vers une moindre production. C'est E2022 Q3e.

10.5 Stackelberg en quantités
Résoudre d'abord BR_suiveur(qL), la substituer dans le profit du leader,
puis dériver par rapport à qL. Ne pas traiter qF comme constant ici.
Cas symétrique p=a-bQ, MCc, sans contraintes de capacité :
qL=(a-c)/(2b), qF=(a-c)/(4b), Q=3(a-c)/(4b), p=(a+3c)/4.
Leader produit plus et gagne plus que sous Cournot ; suiveur produit moins.
Q total augmente, p baisse. Résultat dépend des hypothèses du modèle.
L10 a70,c10 : qL30,qF15,Q45,p25 ; profits450 et225.
L'équilibre Stackelberg est sur la réaction du suiveur, généralement pas
sur la réaction Cournot du leader, qui tient la quantité rivale fixe.

10.6 Bertrand homogène
Produits parfaitement substituables, mêmes MC constants, capacité suffisante,
clients achetant au moins cher : à deux firmes ou plus, p=MC.
Si p>MC, sous-enchérir légèrement peut capter le marché ; p<MC fait perdre
de l'argent sur chaque unité. Lerner0 pour p=MC>0.
Capacité limitée, différenciation, recherche ou répétition peuvent changer
le résultat ; le nombre de firmes seul ne détermine pas la marge.
Coûts différents : la firme la moins coûteuse peut garder une marge en
limitant son prix par le coût du concurrent le plus efficace.
E2024 MC5,7,8 et p_D10-Q : prix limite autour de7, souvent écrit7-epsilon.
Le prix de monopole sans concurrent serait7.5, donc la contrainte du rival
est pertinente. En prix continus, existence/tie-breaking demandent précision :
prix7 exact si règle appropriée d'allocation au producteur efficace ;
avec partage égal à égalité, l'approximation d'une légère sous-enchère est
plus juste qu'une affirmation d'équilibre pur à7.

10.7 Bertrand différencié
Demande q_i=A-B*p_i+D*p_j, B>0,D>=0, MCc_i.
pi_i=(p_i-c_i)*(A-Bp_i+Dp_j)-F_i.
FOC : A-2Bp_i+Dp_j+B*c_i=0.
BR_i(p_j)=(A+B*c_i+D*p_j)/(2B).
Réactions croissantes pour substituts : prix stratégiquement complémentaires.
En symétrie : p=(A+B*c)/(2B-D), si domaine/concavité admissibles.
Quantité via la DEMANDE ; profit=(p-c)q-F.
L10 A85,B1,D0.5,c11 ->p64,q53,pi2809 sans FC.
E2025 A10,B2,D1 : p=(10+2c)/3.
c2 ->p14/3 ; c1 ->p4. Baisse du coût1 ->baisse du prix2/3.
Ne pas appliquer le pass-through concurrentiel à cette structure de marché.

10.8 Leadership en prix
Substituer la réaction de PRIX du suiveur dans la demande du leader,
avant de maximiser son profit. Pas la formule Stackelberg en quantités.
E2024 Q4c/d : q1=6-2p1+p2, q2=6-2p2+p1 ; aucun coût n'est précisé.
Sous l'hypothèse explicite MC=FC=0 : simultané p1=p2=2, q1=q2=4, pi_i8.
Si firme2 leader : p1=(6+p2)/4 ; demande2=7.5-1.75p2 ;
p2=15/7≈2.143, p1=57/28≈2.036 ; pi2=225/28≈8.036,
pi1=3249/392≈8.288. Les DEUX gagnent ici ; le suiveur gagne davantage.
Le « first-mover advantage » en quantités n'est pas une loi universelle
pour tous les jeux, notamment lorsque les prix sont complémentaires.
======================================================================
11. EXTERNALITÉS, POLLUTION, BIENS PUBLICS ET COMMUNS — L11
======================================================================

11.1 Privé, externe, social
Externalité : effet sur un tiers, non pris en compte dans la transaction.
Négative : pollution, bruit ; positive : vaccination, recherche, réseau.
MPC / PMC = marginal private cost, coût marginal privé.
MEC = marginal external cost, coût marginal externe, DOMMAGE supplémentaire.
MSC / SMC = marginal social cost = MPC+MEC.
MPB / PMB = marginal private benefit, bénéfice marginal privé.
MEB = marginal external benefit, bénéfice externe supplémentaire.
MSB / SMB = marginal social benefit = MPB+MEB.
La notation MC_p et MC_e d'E2024 désigne respectivement MPC et MEC.
MEC(Q) est un coût MARGINAL ; le coût externe TOTAL est son intégrale,
pas MEC(Q) lui-même. Si MEC constant e, dommage total=eQ.
Si MEC(Q)=Q, dommage total=Q^2/2, pas Q^2.

Équilibre privé concurrentiel : MPB=MPC.
Optimum social : MSB=MSC.
Externalité négative de production seule : demande=MPB=MSB et offre=MPC ;
le marché produit trop. Externalité positive de consommation seule :
demande=MPB, MSB au-dessus ; le marché produit trop peu.
La règle universelle est MSB=MSC ; la distinction production/consommation
détermine le côté du graphique à ajuster.

11.2 Mesurer W et DWL
W(Q)=intégrale_0^Q [MSB(q)-MSC(q)]dq, moins coûts fixes réels pertinents.
DWL=W(Qeff)-W(Qobservé) : aire entre MSB et MSC sur l'intervalle d'écart.
Avec externalité négative : W=CS+PS+recette fiscale-dommage externe total.
Avec positive : W=CS+PS-dépense de subvention+bénéfice externe total.
La taxe/subvention est un transfert ; les dommages/bénéfices sont des effets
réels sur les tiers. Le « societal producer surplus » de L11 inclut les
dommages des tiers ; il diffère du PS privé des seules firmes.

L11 p.5–8 et E2023 : MPB=100-Q,MPC=10+Q,MEC=Q,MSC=10+2Q.
Privé : Q45,p55. Social : Q30,MPB70,MPC40,MEC30.
DWL non régulé=0.5*(45-30)*45=337.5.
À Q45 : MSC100,MSB55 ; hauteur45. Au social, un prix acheteur70 et un
prix vendeur40 peuvent être reliés par la taxe optimale30.

11.3 Pigou et intervention imparfaite
Taxe corrective t*=MEC(Qeff), dans le cas d'une externalité négative
non déjà internalisée et d'un marché autrement concurrentiel.
Subvention corrective s*=MEB(Qeff), cas positif analogue.
Évaluer la valeur marginale à la QUANTITÉ EFFICIENTE, pas automatiquement
à la quantité initiale. Si l'externalité dépend de Q, t* n'est pas arbitraire.
Une taxe peut réduire une DWL préexistante. Une subvention excessive peut
dépasser Qeff et recréer une DWL. Toujours comparer au social, pas au privé.

Exemple négatif ci-dessus, taxe20 : 100-Q=10+Q+20 ->Q35,
p_b65,p_s45. Q reste au-dessus de30 : DWL=0.5*5*15=37.5.
Taxe optimale30 ->Q30,DWL0 dans ce modèle.
E2024 textiles : demande200-Q,MPC80+Q,MECQ ->Qpriv60,Qeff40,
DWL0.5*20*60=600 ; taxe optimale40.
A6 solaire : MPB100-3Q,MPC10+2Q,MEB20 ->Qpriv18,p46,
MSB120-3Q ->Qeff22, subvention20 ; DWL non corrigée40.
Prix acheteur à Q22=34 ; vendeur54 ; écart20.

11.4 Pollution et abattement : regarder l'axe horizontal
MAC=marginal abatement cost, coût marginal de réduction de la pollution.
Si l'axe est l'ABATTEMENT a : MAC augmente souvent quand a augmente.
Si l'axe est la POLLUTION e restante : MAC de la réduction suivante est
souvent décroissant en e. Les deux graphiques sont compatibles.
Optimum : coût de réduire une unité = dommage de cette unité, MAC=MEC.
Taxe sur émissions : firme choisit MAC=t ; taxe optimale=MEC à l'optimum.
L11 p.13 : sur l'axe pollution Q, MAC=10-Q, MEC=Q/2.
Sans taxe Q10 ; taxe2 ->MAC2 ->Q8, MEC4. Ce n'est pas l'optimum :
optimum Q=20/3≈6.667, taxe10/3≈3.333.
Une taxe par OUTPUT n'est équivalente à une taxe par ÉMISSION que si
l'émission par unité est fixée ; sinon taxer directement l'émission peut
encourager aussi une technologie plus propre.

11.5 Quotas, permis et incertitude
Quota : fixe une quantité d'émission. Taxe : fixe le prix de polluer.
Permis échangeables : plafond total et droits transférables.
Si MAC_L<MAC_H au partage initial, L réduit plus ses émissions et vend
des permis ; H achète et réduit moins. Gain tant que MAC diffèrent.
À l'intérieur, MAC_L=MAC_H=prix du permis : même plafond atteint à coût
minimal. L'allocation initiale affecte les rentes, pas nécessairement
l'allocation finale efficiente sous échange sans frictions.
Quota identique par firme ne minimise généralement pas le coût total.

E2021 Q1d, complément « prices versus quantities » : coûts d'abattement
incertains et dommages marginaux très raides ->quota/plafond protège mieux
contre une forte erreur sur la quantité d'émissions. Dommages marginaux
relativement plats et MAC raides ->taxe peut mieux éviter un coût excessif
de respect du quota. Argument de pentes RELATIVES autour de l'optimum,
pas règle « quotas toujours meilleurs ». Dessiner deux MAC possibles.

11.6 Coase et droits de propriété
Droits bien définis et négociation sans coût ->parties peuvent négocier
une quantité efficace, quelle que soit l'attribution initiale des droits,
sous les hypothèses du théorème. L'attribution change qui paie et les revenus.
Intuition : gains à un accord lorsqu'une réduction du dommage vaut plus
que le profit qu'elle fait perdre ; négocier jusqu'à disparition du gain.
Coûts de transaction : temps, contrats, contrôle, grand nombre de parties,
passagers clandestins, coordination et normes sociales. Ils peuvent bloquer
les accords. Droit incertain ->condition du théorème non remplie.
Rassembler pollueur et victime sous un propriétaire peut internaliser
l'effet, mais un propriétaire devenu monopoliste peut introduire une autre
distorsion ; ne pas conclure automatiquement à la quantité concurrentielle
socialement optimale. E2024 Q3d et E2025 Q1c.

11.7 Quatre catégories de biens
Excluable : on peut empêcher l'accès. Rival : l'usage d'une personne
réduit les possibilités des autres.
                       Excluable                  Non excluable
Rival                  Bien privé                 Ressource commune
Non rival              Bien de club               Bien public pur
Privé : sandwich. Club : abonnement/service non congestionné.
Commun : pêche en libre accès ; spectre avec interférences (E2023).
Public : défense, recherche fondamentale diffusée, nettoyage de rue
dans le modèle de l'exercice. La congestion et les règles d'accès peuvent
changer la classification. Une route/tunnel n'est pas toujours un bien
public pur : péages possibles et rivalité lorsque congestionné.

11.8 Bien public : sommation VERTICALE
Tout le monde bénéficie du même Q. MB_social(Q)=somme_i max(0,MB_i(Q)).
Optimum intérieur : somme MB_i=MC, condition de Samuelson (nom standard,
non nécessairement employé dans les slides).
Tronquer chaque WTP négative à0 si le bien est simplement non désiré au-delà
d'une quantité ; si le bien fait réellement du tort, le modèle change.
Identifier les seuils où chaque MB s'annule, puis vérifier le segment.
Free rider : bénéficier même sans payer ->incitation à sous-contribuer et
à sous-révéler sa WTP. Fourniture volontaire généralement insuffisante,
pas nécessairement nulle. Impôt obligatoire/normes peuvent aider.

L11 p.25 : MB_L=10-h, MB_H=20-h.
Pour h<=10 : somme30-2h. MC26 ->h2 ; MC14 ->h8.
À MC14, H seul financerait h6, sous l'optimum collectif8.
À MC26, aucun individu seul ne finance même si h2 est collectivement utile.
E2024 tunnel : MB1=10-Q,MB2=5-Q,MB3=10-2Q,MC9.
Sur Q<=5, somme25-4Q ; Qeff4, toutes WTP positives à4.
E2025/A6 nettoyage : MB15-Q,12-Q,9-Q ; somme36-3Q ; MC27 ->Qeff3.
E2022 wifi : 300 personnes MB10-Q ; 300(10-Q)=1500 ->Qeff5.
Ne pas écrire Q=300(10-p) pour ce bien public : chaque personne consomme
la MÊME vitesse et non une fraction individuelle de la vitesse.

11.9 Ressource commune et accès libre
Chaque utilisateur impose aux autres une rareté/congestion qu'il ignore.
Tragedy of the commons : usage excessif, pas absence de valeur de la ressource.
Exemple pêche L11 : recette moyenne par bateau vs coût individuel ; entrée
jusqu'à recette moyenne=coût, alors que l'optimum utilise le produit
marginal SOCIAL d'un bateau supplémentaire. La pêche totale peut se dégrader
avec trop de bateaux. Ne pas utiliser MP et AP comme synonymes.
Solutions : droits de propriété, restrictions de quantité, permis,
redevance, règles locales et normes dans des interactions répétées.
Free rider du bien public = sous-contribution ; commun = surexploitation.

======================================================================
12. INFORMATION ASYMÉTRIQUE, CONTRATS ET INCITATIONS — L12
======================================================================

12.1 Identifier ce qui est caché
Asymmetric information : une partie sait quelque chose que l'autre ignore.
Adverse selection : TYPE/qualité/risque privé, souvent avant le contrat.
Moral hazard : ACTION/effort privé, souvent après le contrat.
La présence de risque seule n'est pas une asymétrie d'information.
Le diagnostic central : qui sait quoi, à quel moment, et quel choix cela affecte ?

12.2 Lemons / antisélection
L12 voitures : acheteur valorise haute qualité150, basse50 ; vendeur
haute130, basse30 ; initialement probabilité haute0.5.
Qualité observable : transactions possibles dans [130,150] et [30,50].
Qualité inconnue de TOUS : WTP moyenne100, réserve vendeur moyenne80 ;
transactions entre80 et100 possibles sous neutralité au risque du modèle.
Vendeur informé seul : prix moyen100 ne fait pas vendre les bonnes voitures
(réserve130). Elles sortent ; la qualité moyenne baisse ; acheteurs révisent
leur WTP ; marché haut de gamme peut disparaître malgré gains potentiels.
Il faut une croyance COHÉRENTE avec les vendeurs restant au prix offert.

Assurance permis de conduire L12 : ceux qui pensent échouer davantage
peuvent plus acheter, donc risque des assurés supérieur à la moyenne52%
si sélection défavorable ; le contrat peut aussi changer l'effort (moral hazard).
Réputation, garanties, certification, règles de qualité, droit au retour,
information partagée, contrats de groupe et assurance obligatoire peuvent
réduire l'antisélection ; leur efficacité dépend du mécanisme.
E2020 Klarna, E2023 avis clients, E2024 normes du vin : une certification
ou réputation collective peut permettre aux petites marques de garantir
leur qualité et réduire l'avantage informationnel des grandes marques.

12.3 Screening et signalling
Screening : partie MOINS informée collecte/teste/structure un menu pour
apprendre le type. Signalling : partie INFORMÉE entreprend une action
observable pour révéler son type.
Un signal crédible doit être suffisamment coûteux à imiter pour le mauvais
type, relativement au bénéfice obtenu ; « coûteux » seul ne suffit pas.
L12 éducation : salaire100 avec diplôme,60 sans ; coût C_A<C_S.
Séparation si100-C_A>60 et100-C_S<60, donc C_A<40<C_S.
Aux égalités, les types peuvent être indifférents ; préciser la sélection.
Pooling : types choisissent même signal ; separating : signaux différents.
La valeur de signal d'un diplôme ne prouve pas qu'il ne crée aucune compétence.

12.4 Principal-agent et partage du risque
Principal propose le contrat ; agent choisit un effort non parfaitement
observable. Le résultat dépend de l'effort ET de chocs.
Récompenser le résultat donne des incitations mais expose l'agent au risque.
Salaire fixe : faible incitation monétaire à l'effort si celui-ci est coûteux.
Partage de recette : agent conserve une partie du gain de l'effort et du risque.
Agent paie une redevance fixe et conserve la recette : fortes incitations
au gain marginal, mais supporte le risque. Franchise/location d'activité.
Risque, responsabilité limitée et richesse peuvent rendre ce contrat difficile.

L12 p.13–15, tableau vérifié : probabilité0.5 mauvais/bon état.
Effort H, coût privé10 : recettes40 ou100 ->recette espérée70,
surplus net total60. Effort L, coût0 : recettes20 ou40 ->espérance30.
Salaire fixe w indépendant de la recette : agent préfère L ; reçoit w,
propriétaire reçoit30-w ; le propriétaire porte le risque de recette.
Partage50/50 : H donne agent0.5*70-10=25, propriétaire35 ;
L donne agent15 ->H choisi. Risque partagé.
Redevance fixe F au propriétaire, agent garde recette : H donne agent60-F,
propriétaire F ; L30-F ->H. Agent porte le risque de recette.
La participation exige aussi que l'agent préfère le contrat à son option
extérieure ; une bonne incitation ne suffit pas à faire accepter le contrat.

12.5 Crédit avec action cachée : méthode générale
Projet coûte I0, recette R si succès,0 sinon. Emprunt D, remboursement Bk
seulement en cas de succès, responsabilité limitée. Succès p_H avec effort
H et p_L avec L, p_H>p_L. L procure bénéfice privé b.
Utilité/espérance entrepreneur H=p_H*(R-Bk).
Utilité entrepreneur L=p_L*(R-Bk)+b.
Si apport personnel A investi d'avance, soustraire A dans LES DEUX cas
lorsqu'on mesure le gain net depuis avant investissement ; il s'annule
dans la comparaison d'effort à contrat donné.
IC_H : (p_H-p_L)*(R-Bk)>=b.
Profit espéré banque=p_choisi*Bk-D, à taux/coûts bancaires normalisés à0.
Financement exige profit banque>=0 ET incitation H si le calcul repose sur H,
ainsi que participation de l'entrepreneur selon son option extérieure.
Remboursement trop haut peut détruire l'effort, diminuer p et réduire le
remboursement ESPÉRÉ malgré un remboursement nominal plus élevé.

A6/E2023 : R40,pH0.8,pL0.4,D20,Bk30.
H8 ; L4+b. b2 ->H8>L6, banque24-20=4.
b6 ->L10>H8, banque12-20=-8.
Apport10, D10,Bk15 : H20 ; L10+b=12 ou16 ->H pour b2 ET b6 ;
banque12-10=2 dans les deux cas. Après déduction de l'apport, gain
entrepreneur H10 ; ne pas déduire l'apport seulement pour un effort.
Condition sans apport : Bk<=40-b/0.4. Pour b6, Bk<=25 ; banque
à effort H exige Bk>=20/0.8=25. À l'égalité, effort indifférent.

12.6 Contrats, contrôle et pénalité
E2025 nettoyage : paiement110 ; coût haute qualité100 ; basse70.
Profit H10 ; profit L40-0.5*F. H au moins aussi bon siF>=60.
F=60 donne indifférence ; F>60 rend H strictement préféré.
Formule : pénalité minimale=(économie de coût privée)/(probabilité de détection),
si pénalité payable, agent neutre au risque et aucun autre effet du contrat.
Le paiement110 s'annule dans la comparaison ; il compte pour participation.

Carpenter E2022 : forfait incite à économiser temps/coût, mais risque de
sacrifier qualité cachée ; paiement horaire protège contre le risque de
durée mais peut inciter à étirer les heures. Beaucoup d'autres clients
augmentent le coût d'opportunité du temps et peuvent limiter cette incitation.
Tipping E2023 : client observe mieux la qualité du service que le patron ;
pourboire peut donner au serveur un lien entre qualité et rémunération.
Deductible/franchise d'assurance : assuré supporte une partie du coût et
garde une incitation à éviter le sinistre ; compromis assurance/incitation.
Private equity : contrôle, information et implication peuvent réduire
certains problèmes d'action cachée ; ne pas confondre automatiquement
financement bancaire et financement en fonds propres.

12.7 Bonus asymétrique : ne pas supposer le diagnostic avant le calcul
E2020 Q4d : A rapporte100 avec0.75 et80 avec0.25 ->E profit95.
B rapporte400 avec0.75 et-160 avec0.25 ->E profit260.
Bonus1% des profits positifs,0 si perte : espérance0.95 pour A,3 pour B.
Le dirigeant préfère B, et B maximise aussi le profit espéré brut ici ;
net du bonus,94.05 contre257. Sur ces seules données et à neutralité au
risque, le bonus ne crée pas de conflit sur le choix A/B. Un paiement
convexe peut favoriser un risque excessif dans D'AUTRES nombres, mais
ce n'est pas démontré par cet énoncé. Prudence si contraintes de faillite
ou préférences pour le risque sont ajoutées : elles ne sont pas chiffrées ici.

======================================================================
13. THÉORIE DES JEUX DANS ASSIGNMENT 3
======================================================================

13.1 Résoudre une matrice
Une stratégie pure est un choix déterminé. Une stratégie dans un jeu
séquentiel décrit l'action à CHAQUE nœud éventuel, même hors du chemin joué.
Dans une matrice : premier gain pour joueur de ligne, second pour colonne.
Pour chaque colonne, marquer meilleures réponses de ligne ; pour chaque
ligne, celles de colonne. Une case doublement marquée est un Nash pur.
Il peut y en avoir plusieurs, y compris avec indifférences.
Dominante : optimale quelles que soient les actions rivales ; strictement
dominante si toujours strictement meilleure. Un équilibre peut être
inefficient : aucun gain unilatéral n'implique pas gain collectif maximal.

13.2 Golden Balls — données A3 p.1, matrice vérifiée visuellement
              Colin S          Colin N
Rowena S      (10,10)           (0,20)
Rowena N      (20,0)            (0,0)
S=Split, N=Steal dans le fichier ; le symbole N n'est pas universel.
Égoïstes : N est faiblement dominante ; Nash purs (S,N),(N,S),(N,N).
Envie : retrancher1 à son utilité si l'autre reçoit davantage.
SS(10,10), SN(-1,20), NS(20,-1), NN(0,0) ->seul Nash NN.
Altruisme égal : u_i=argent_i+argent_j.
SS donne utilités(20,20), SN(20,20), NS(20,20), NN(0,0).
Nash purs SS,SN,NS. NN n'en est PAS un : dévier vers S face à N donne20
au lieu de0. La réponse personnelle « SS et NN » dans A3.1c est erronée.
Altruisme double : u_i=argent_i+2*argent_j.
SS(30,30), SN(40,20), NS(20,40), NN(0,0) ->S strictement dominante,
seul Nash SS. Préférences différentes ->jeu en utilités différent.
Ces listes portent sur les stratégies PURES ; ne pas les présenter comme
une classification complète de tous les équilibres mixtes.
Complément pour la classification de tous les Nash de cette matrice :
noter x la probabilité que Rowena choisisse S, y celle que Colin choisisse S.
Égoïstes : équilibres si x=0 OU y=0 ; l'autre peut mélanger arbitrairement.
Envie : x=y=0 uniquement. Altruisme égal : x=1 OU y=1 ; l'autre peut
mélanger arbitrairement. Altruisme double : x=y=1 uniquement.
On retrouve exactement les Nash purs ci-dessus aux valeurs0/1.

13.3 Armes et pétrole : induction à rebours
Pool pétrole6 ; coût d'armes X1,Y3. Si un seul armé, partage5/1 ; si aucun,
3/3 ; si les deux armés, aucun pétrole mais coûts payés.
Gains nets (X,Y) : ni armé(3,3), X seul(4,1), Y seul(1,2), deux(-1,-3).
X joue d'abord : Y choisit ne pas armer après X armé (1>-3).
Si X non armé, Y compare Y armé2 à Y non armé3 ->ne pas armer également.
Donc stratégie complète Y : ne pas armer après chaque action de X.
X compare armer4 et ne pas armer3 ->arme ; issue(4,1).
Y joue d'abord : X choisit ne pas armer après Y armé (1>-1), et
armer après Y non armé (4>3). Y compare armer2 et ne pas armer1 ->arme ;
issue(1,2). Le suiveur X resterait non armé face à Y armé, contrairement
à une réponse qui confond son gain1 et son coût d'armement.
Un SPNE spécifie aussi les réactions hors chemin, pas seulement l'issue.

13.4 Coordination paix/guerre — A3 p.3
                 Y paix       Y guerre
X paix           (9,9)        (0,8)
X guerre         (8,0)        (7,7)
Nash purs paix/paix et guerre/guerre. Paix/paix domine au sens de Pareto.
Crainte de l'autre et croyances peuvent rendre guerre/guerre plausible,
mais les seuls gains ne sélectionnent pas une issue simultanée unique.
Si X joue d'abord : Y répond paix à paix (9>8), guerre à guerre (7>0).
X anticipe9 contre7 ->paix ; issue paix/paix, SPNE par induction.
Communication peut coordonner les croyances ; cheap talk non contraignant
ne change pas nécessairement les incitations.

13.5 Engagements et menaces crédibles — A3.4
Pour analyser une promesse de sanction : au moment où elle devrait être
exécutée, le promettant a-t-il encore intérêt à la respecter ?
Écrit public peut imposer coûts de réputation/politiques, sans garantie
d'engagement irrévocable. Une clause militaire n'est dissuasive que si elle
change les incitations et/ou rend l'intervention crédible après l'attaque.
La question historique de l'assignment sert d'application théorique ;
ce dossier ne prétend pas vérifier l'histoire diplomatique du document.

======================================================================
14. COMPLÉMENTS PRÉSENTS DANS LES EXAMENS, COURS COMPLETS ABSENTS
======================================================================

Ces thèmes doivent être révisés parce qu'ils sont attestés dans les
énoncés. Leur traitement ici reconstruit les outils nécessaires. Les
slides correspondantes au-delà de L12 ne sont pas disponibles dans le dossier.

14.1 Avantage absolu et comparatif
Absolu : moins d'inputs nécessaires par unité. Comparatif : coût
d'opportunité plus faible relativement à l'autre bien.
Si a_X heures/unité X et a_Y heures/unité Y : coût d'opportunité de X
en Y =a_X/a_Y. Ne pas inverser ce ratio en passant d'heures aux quantités.
Deux pays peuvent gagner à échanger même si l'un est plus productif dans
TOUT. Prix relatif d'échange situé entre leurs coûts d'opportunité ->
gains possibles. Contraintes de demande/capacité limitent la spécialisation.
PPF linéaire : a_X*X+a_Y*Y=Lbar ; intercepts Lbar/a_X et Lbar/a_Y,
pente dY/dX=-a_X/a_Y. PPF courbe dans d'autres technologies.

E2025 : Northland blé3h, électronique6h ; Southland blé4h, électronique2h.
Southland avantage absolu électronique ; Northland avantage comparatif blé
(0.5 électronique/blé contre2). Avec120h :
North PPF : 3W+6E=120, intercepts W40,E20 ; South : 4W+2E=120, W30,E60.
Échange 1 électronique contre quantité de blé entre0.5 et2, ou équivalent
1 blé contre électronique entre0.5 et2 ici, permet des gains potentiels.
Attention : la symétrie numérique de ces intervalles est propre à ces nombres.

14.2 Petit pays, libre-échange et droit de douane
Prix mondial pw donné ; prix domestique=pw si libre commerce et absence
d'autre coût pertinent. Importations M=QD(pw)-QS(pw)>0.
Tarif unitaire tau, pays restant importateur : p_dom=pw+tau.
QD diminue, QS augmente, M diminue. CS baisse, PS domestique augmente,
État reçoit tau*M. Welfare NATIONAL=CS+PS+recettes ; la dépense aux
exportateurs étrangers ne devient pas un surplus national domestique.
DWL=triangle de production inefficace+triangle de consommation perdue.
Linéaire : DWL=0.5*tau*[(QS1-QS0)+(QD0-QD1)].
Si tarif dépasse l'écart entre prix autarcique et pw, il est prohibitif :
p domestique atteint l'autarcie, M0, ne pas appliquer pw+tau aveuglément.
Le cas grand pays/effet sur prix mondial n'est pas le benchmark ci-dessus.

E2022 : pD80-Q,pS20+Q,pw30 ->QD50,QS10,M40.
Tarif10 ->p40,QD40,QS20,M20 ; CS1250->800,PS50->200,
recettes200,DWL100. Vérification -450+150+200=-100.
E2025 acier : voir chiffres et conversion d'unités en section16.

14.3 Facteurs spécifiques et distribution
Capital spécifique aux manufactures, terre spécifique à agriculture,
travail mobile. Chaque secteur embauche selon p_j*MP_Lj=w ; mobilité
égalise les salaires, sous les hypothèses de concurrence du modèle.
Prix agricole baisse ->valeur du produit marginal agricole baisse ->
travail quitte l'agriculture ->revenu de la terre diminue ; capital de
l'autre secteur peut gagner avec l'afflux de travail. Effet du salaire réel
du travail dépend du panier consommé et des deux prix.
Pays importateur de nourriture (E2020) : prix importé plus bas améliore
ses termes de l'échange et peut augmenter bien-être agrégé, malgré pertes
des propriétaires de terre. Pays exportateur agricole (E2025) : prix
reçu plus bas dégrade les termes de l'échange et pénalise propriétaires.
Graphique PPF : production où prix relatif=MRT en valeur absolue ; budget
commercial tangent à PPF ; consommation sur une indifférence accessible
avec ce budget. Production et consommation peuvent différer grâce au commerce.
Ne pas faire du gain agrégé une preuve que chaque groupe gagne.

14.4 Plateformes et effets de réseau
Plateforme : facilite l'interaction entre groupes (locataires/loueurs,
public/artistes, acheteurs/vendeurs). Valeur dépend des participants et
des règles de mise en relation, pas seulement d'un catalogue numérique.
Effet de réseau direct : plus d'utilisateurs du même côté augmente la
valeur pour un utilisateur, ex. jeu multijoueur.
Effet indirect/croisé : plus d'un côté attire l'autre, ex. artistes/public.
Chicken-and-egg : sans loueurs peu de locataires, sans locataires peu de
loueurs. Subventionner un côté ou freemium peut aider à démarrer.
Freemium peut simultanément trier les WTP ET créer une base d'utilisateurs.
Autres ingrédients : confiance, avis, paiement, garantie, sécurité de la
transaction, liquidité de l'appariement, faible friction, règles et qualité.
Multi-homing : utiliser plusieurs plateformes. Single-homing : une seule.
Multi-homing facile réduit les coûts d'accès d'un entrant à une clientèle
déjà présente ailleurs ; exclusivité et switching costs peuvent renforcer
barrières. Effets de réseau peuvent favoriser concentration/tipping ;
ils ne prouvent pas que tout marché numérique est un monopole naturel.
E2022 Q1d location sports, E2025 Q1a/b concerts.

14.5 Enchères et marchés publics
Vickrey : enchère scellée au second prix, vente d'un objet, valeurs privées
indépendantes dans le modèle de base. Chacun a intérêt faiblement dominant
à annoncer sa valeur : son offre détermine s'il gagne, prix fixé par les
autres. Plus forte valeur gagne et paie la deuxième plus forte offre.
E2023 valeurs80,100,92 millions ->joueur2 gagne, paie92 millions.
Sur-offrir peut faire gagner à un prix supérieur à sa valeur ; sous-offrir
peut faire perdre une transaction profitable.
Procurement reverse second-price : plus faible coût/offre gagne, reçoit
deuxième plus faible offre, en supposant même qualité et données privées.
E2025 coûts20 000,24 000,28 000 ->A gagne et reçoit24 000.

Common value / coût commun incertain : offres peuvent révéler des
informations sur la même valeur ou le même coût. Winner's curse : gagner
peut signifier avoir été le plus optimiste ; le candidat rationnel tient
compte de cette sélection. Pour une procurement, risque de sous-estimer
le coût et de gagner un contrat déficitaire ->réviser l'offre vers le haut
relativement à une estimation naïve, si signaux privés corrélés.
E2025 précise un choc météo commun sans préciser les informations privées.
Si tous ont exactement la même distribution publique et aucun signal
privé, le choc commun seul ne prouve PAS une winner's curse informationnelle.
La règle « offrir son coût certain » ne se transpose pas mécaniquement ;
il faut préciser signaux, aversion au risque et exposition contractuelle.

14.6 Edgeworth et efficacité de Pareto — E2021 Q4e
Boîte d'Edgeworth : dimensions = dotations totales des deux biens ;
origines opposées pour les deux consommateurs. Une allocation détermine
la consommation de chacun, les totaux étant fixés.
Amélioration de Pareto : au moins un mieux, personne moins bien.
Efficace Pareto : aucune amélioration de ce type n'est faisable.
Gains à l'échange si leurs MRS diffèrent, avec biens disponibles.
Sous préférences lisses et optimum intérieur : MRS_A=MRS_B ; mais avec
substituts parfaits, les allocations efficaces se trouvent souvent aux bords.

E2021 : totaux20 drinks D et20 snacks S ; dotation chacun(10,10).
Christina U_C=D_C+S_C ; Sebastian U_S=D_S+2S_S, car il cède2 drinks
pour1 snack. Sebastian apprécie relativement plus les snacks.
Échange bénéfique : Sebastian donne des drinks contre snacks, à un prix
entre1 et2 drinks/snack. En coordonnées Sebastian (D,S), utilité initiale30,
Christina initiale20 ; gains faibles pour tous si D+2S>=30 et D+S<=20,
dans la boîte, avec au moins une inégalité stricte pour gain réel.
Allocations efficaces : Sebastian n'a plus de drinks (D=0), OU il possède
tous les snacks (S=20) ; sinon un échange marginal améliore les deux.
Sur les seules allocations accessibles sans perte depuis dotation,
le segment efficace D=0,15<=S<=20 satisfait les deux contraintes.
======================================================================
15. ASSIGNMENTS : RÉSULTATS DE RÉFÉRENCE RECALCULÉS
======================================================================

Les calculs ci-dessous sont reconstruits des ÉNONCÉS, pas validés par un
barème officiel. Les pages manuscrites ont servi à identifier les démarches
et à repérer les pièges ; elles ne remplacent pas la résolution.

A2 — ÉLASTICITÉS ET CONSOMMATEUR, S02 p.1–3
2.1 Essence, epsilon_SR=-0.25,epsilon_LR=-0.60.
a) Prix +5% ->quantité environ -1.25% à court terme, -3% à long terme.
   Ajustements possibles : trajets, transport collectif, véhicule, lieu de vie.
b) Objectif -15% LR ->%Delta p=(-15)/(-0.60)=+25%, selon la méthode
   proportionnelle enseignée. Si « élasticité constante à tout prix » est
   interprété comme Q=A*p^-0.6, calcul exact p1/p0=0.85^(-1/0.6),
   soit environ +31.11%. Préciser la convention ; 25% est l'approximation
   linéaire usuelle de l'exercice, pas la solution exacte de cette fonction.

2.2 I1200, p_L40,p_R120,U=L*R.
Budget40L+120R<=1200 ; L=30-3R si R horizontal,L vertical.
Interceptions : L30,R10.
Paniers de l'énoncé, y compris le doublon réellement imprimé :
(15,5) : dépense1200,U75,accessible.
(20,4) : dépense1280,U80,NON accessible.
(24,2) : dépense1200,U48,accessible.
(10,5) : dépense1000,U50,accessible.
(15,5) à nouveau : mêmes valeurs, ne pas inventer un cinquième panier distinct.
Préféré sans contrainte parmi la liste : (20,4). Meilleur accessible :
(15,5), également optimum global de U=LR sous ce budget.
Tangence avec R horizontal : MU_R/MU_L=L/R=p_R/p_L=3 ; budget ->R5,L15.
Après hausse p_R150 et achat R4 : L=(1200-600)/40=15,U60.
Nouveau budget L=30-3.75R, Rmax8 ; revenu I reste1200.
Ici (15,4) est aussi l'optimum global nouveau : dépenses600/600.
Utilité baisse75->60 ; ne pas dire que le revenu nominal a baissé.

A3 — JEUX, S01 p.1–4
3.1 Golden Balls : matrices et Nash corrigés en section13.2.
3.2 Pétrole/armes : gains nets et deux ordres de jeu en section13.3.
3.3 Paix/guerre : Nash PP et WW ; séquentiel ->PP ; simultané non unique.
3.4 Engagement : menace crédible, coût de réputation, incitation à exécuter
la sanction une fois l'agression survenue. Ne pas traiter la signature
comme un engagement automatiquement contraignant dans le jeu.

A4 — MONOPOLE, TAXE/SUBVENTION, ENTRÉE, S03 p.1–5
4.1 Allumettes, p30-Q,C5Q.
MR30-2Q=MC5 ->Qm12.5,pm17.5,pi156.25.
CS=(30-17.5)*12.5/2=78.125 ; PS=(17.5-5)*12.5=156.25.
Qeff25 ; DWL=(25-12.5)*(17.5-5)/2=78.125.
Schéma : demande, MR, MC horizontal5 ; Qm sur MR=MC, pm sur demande ;
CS triangle sous demande/au-dessus de17.5, PS rectangle17.5–5 ;
DWL entre Q12.5 et25, demande au-dessus de MC.

4.2 Vin, pD20-Q,pS5+Q.
Sans politique : Q7.5,p12.5 ; CS=PS=28.125,W56.25.
Taxe3 : 20-Q=5+Q+3 ->Q6,p_b14,p_s11,T18.
CS18,PS18,W54,DWL2.25.
Subvention3 à la place : 5+Q=20-Q+3 ->Q9,p_b11,p_s14,
dépense27 ; CS40.5,PS40.5,W54,DWL2.25.
Représenter le wedge vertical3 à la quantité échangée ; avec subvention,
prix vendeur AU-DESSUS du prix acheteur.

4.3 Caffeinia, p70-Q-2n,C30Q+100.
À n fixé : pi=(40-2n)Q-Q^2-100 ; MR70-2n-2Q=30,
Q*=20-n, p*=50-n, pi=(20-n)^2-100 pour solution positive.
n1 : Q19,p49,pi261. Le terme -2n s'applique aussi avec un seul café.
n10 : Q10,p40,pi0.
FC tombe100->25 : quantité/prix ne changent pas IMMÉDIATEMENT à n donné ;
profits augmentent75. Entrée ->n augmente, demande par café baisse,
Q et p baissent jusqu'à pi0. Dans la forme précise de cet exercice :
Q_LR=sqrt(25)=5,n15,p35. Ce calcul complète la question qualitative.

A5 — DISCRIMINATION ET COURNOT, S04 p.1–6
5.1 Identifiables : tarif étudiant Apple Music dans l'exemple du devoir.
Self-selection : versions de trajet Uber, confort/qualité. Pour établir
une discrimination, vérifier que les écarts ne reflètent pas seulement
des coûts différents. Ces exemples sont ceux du devoir, pas une enquête
sur les tarifs actuels des entreprises.

5.2 pA20-QA,pB30-2QB,MC5,FC non donnés, pris à0.
Segmenté : MRA20-2QA=5 ->QA7.5,pA12.5,piA56.25,CSA28.125.
MRB30-4QB=5 ->QB6.25,pB17.5,piB78.125,CSB39.0625.
Profit total134.375 ; quantité totale13.75.
Prix commun :
Q(p)=0 si p>=30 ; Q=(30-p)/2 si20<=p<30 ;
Q=(20-p)+(30-p)/2=35-1.5p si0<=p<20.
Sur le segment commun : pi=(p-5)(35-1.5p), FOC42.5-3p=0.
p=85/6≈14.1667 ; QA35/6≈5.8333 ; QB95/12≈7.9167 ;
Qtotal13.75 ; profit3025/24≈126.0417.
Le candidat monopole « seulement B » au prix17.5 n'appartient pas au
segment p>=20 ; vérifier ses frontières, il ne bat pas ce candidat commun.
Au commun : CSA≈17.0139,CSB≈62.6736,PSA≈53.4722,PSB≈72.5694.
Segmentation moins commun :
A : CS+11.1111,PS+2.7778,W+13.8889.
B : CS-23.6111,PS+5.5556,W-18.0556.
Total : profit+8.3333,CS-12.5,W-4.1667.
La quantité totale est identique, mais la répartition est moins efficace :
à la marge, WTP différentes entre marchés. Donc « même Q ->même W » est faux.

5.3 Cuivre, p90-Q,MC30,FC0, Q=q1+q2.
pi1=(60-q1-q2)q1 ; BR1=30-q2/2, BR2=30-q1/2.
Intersection q1=q2=20 ; Q40,p50,pi_i(50-30)*20=400.
Ne pas insérer Qtotal40 dans la fonction de coût d'une seule firme.

A6 — BIEN PUBLIC, CRÉDIT, EXTERNALITÉ POSITIVE, S05 p.1–5
6.1 Nettoyage : public dans le modèle, MB15-Q,12-Q,9-Q,MC27.
Somme36-3Q=27 ->Q3. WTP individuelles à3 :12,9,6, somme27.
Les trois courbes ne sont pas additionnées horizontalement.
6.2 Crédit : résultats H/L, b2/b6 et apport10 en section12.5.
Écrire d'abord les gains de l'ENTREPRENEUR, puis en déduire le risque de
la banque. Calculer seulement les remboursements bancaires ne détermine
pas quelle action sera réellement choisie.
6.3 Solaire : MPB100-3Q,MPC10+2Q,MEB20.
Qpriv18,p46 ; MSB120-3Q ; Qeff22 ; s*=20.
DWL0.5*(22-18)*20=40.
Sans correction : CS486,PS324,bénéfice externe360,W1170.
Avec correction : p_b34,p_s54,CS726,PS484,subvention440,
bénéfice externe440,W1210. Vérification gain social40.

======================================================================
16. EXAMENS : CARTE COMPLÈTE ET RÉSULTATS DE RÉFÉRENCE
======================================================================

Chaque entrée relie le contexte à la méthode à reconnaître. Les chiffres
sont des recalculs, pas des notes de corrigé officiel. Les valeurs sont
continues sauf indication ; ne pas arrondir les quantités avant la fin.

E2020 — S18, questions p.2–6
Q1a Amazon/Klarna : adverse selection, réputation et information sur la
qualité/retours ; intermédiaire connu peut diminuer l'avantage de réputation
d'une grande plateforme entrant sur le marché.
Q1b prix mondial unique d'un jeu : comparer segmentation et prix commun ;
groupe plus sensible pourrait payer moins sous segmentation, autre davantage ;
W ambigu, possibilité qu'un marché à faible WTP ne soit pas servi au prix commun.
Q1c jeu gratuit avec publicité/achats : self-selection, temps/publicité contre
paiement, différents WTP ; pas besoin de type observable.
Q1d musique, p20-Q,MC2,FC0 : MR20-2Q=2 ->Q9,p11,pi81.
Q1e abonnement uniquement fixe : p_usage0 ->Q20,F200,coût40,pi160.
Comparer à two-part tariff, non demandé : p_usage2,Q18,F162,pi162.
Le forfait accroît extraction ; p_usage0 entraîne consommation au-delà de
l'efficient18. Ne pas répondre162 si l'énoncé impose seulement une redevance fixe.

Q2a Esther data1h/writing2h, Abhijeet data2h/writing6h : Esther absolu dans
les deux ; coût de writing2 analyses pour Esther,3 pour Abhijeet ->
Esther writing, Abhijeet data selon avantage comparatif.
Q2b paix publique MB200-x et100-x,MC150 ->300-2x=150 ->x75,
dans le segment où les deux MB sont positifs. Dessiner addition verticale.
Q2c free rider : bénéfice d'un pays non conditionnel à sa contribution.
Q2d UK exporte vêtements/importe nourriture, facteurs spécifiques : prix
nourriture baisse ->terre perd, capital peut gagner, production se déplace
vers vêtements, possibilité de consommation accrue via meilleurs termes
de l'échange. PPF, nouvelle droite de prix et indifférence ; section14.3.

Q3a vaccins : pD100-Q,pS10+Q ->Q45,p55.
Q3b définition/exemple : vaccination réduit le risque transmis aux autres.
Le sujet répète la lettre b pour la sous-question numérique suivante.
Q3b numérique : MEB20 ->MSB120-Q, social120-Q=10+Q ->Q55.
DWL non corrigée0.5*10*20=100.
Q3c subvention30 : 10+Q=100-Q+30 ->Q60,p_b40,p_s70.
Subvention supérieure à l'optimum20 ; excès par rapport à Q55 ->
DWL0.5*5*10=25. Utiliser MSB et MSC, pas seulement l'ancien Q45.

Q4a Cournot/Bertrand homogènes : Nash en quantités ->marge positive ;
Nash en prix avec mêmes MC/capacité ->pMC,Lerner0 ; expliquer sous-enchère.
Q4b ciment Opet MC0,Siren MC2,p10-qO-qS : qO4,qS2,p4,
piO16,piS4. Réactions qO5-qS/2 ; qS4-qO/2.
Q4c parts de marché : davantage chez la firme à coût0 économise des
ressources ; égalité des parts ne constitue pas un objectif d'efficacité.
Q4d bonus : résultats95/260, bonus0.95/3, alignement du choix dans les
nombres donnés ; section12.7.

Q5 facultative : inferior good, decreasing returns, MP_K, isoquant,
perfect complements ; bière Q990-40p+20pd+30ps à prix10 ->Q1090.
epsilon_own=-400/1090≈-0.367 ; epsilon_cross_ps=300/1090≈0.275.
Yerba Mate C40+4q+q^2,p20 ->q8,pi24. Montrer p=MC4+2q.

E2021 — S19, questions p.2–5
Q1a interconnexion électrique : prix suédois initial inférieur ->commerce
élargi tend à augmenter prix suédois, baisser allemand ; CS Suède baisse,
CS Allemagne augmente, PS producteurs suédois augmente, hypothèses usuelles.
Q1b recherche verte : non-rivalité et non-exclusion, selon diffusion réelle.
Q1c charbon : coût imposé à tiers non incorporé dans le coût privé.
Q1d quota ou taxe sous incertitude et dommages raides : argument de
protection de la quantité, section11.5 ; motiver avec pentes et graphique.

Q2a pain pD10-Q,pS2+Q ->Q4,p6.
Q2b pain gratuit à l'usage : p_b0 ->QD10,p_s12,subvention12/unité.
CS50,PS50,dépense publique120,W=-20 ; Winitial16,DWL36.
Le W négatif inclut le coût de production réellement payé par la collectivité.
Q2c élasticité : forte réponse de Q crée davantage d'unités inefficaces,
à politique comparable ; préciser ce qui est gardé constant.
Q2d Colisée : skip-the-line=self-selection par valeur du temps ; retraités=
groupes observables ; billet combiné=bundling, comparer WTP des lots.

Q3a machine p56-2Q,C100+8Q ->MR56-4Q=8 ->Q12,p32,pi188.
Q3b Cournot c8 pour les deux,FC100 pour Lynn,50 pour Voytek :
BR_i=12-qj/2 ; q_i8,Q16,p24 ; profits28 et78.
Q3c Lynn leader : qL12,qV6,Q18,p20 ; profits44 et22.
Dessiner réactions : issue sur BR du suiveur ; comparer Q/prix à Cournot.

Q4a crédit : action cachée et responsabilité limitée, moral hazard.
Q4b private equity : information, surveillance, pouvoir de décision.
Q4c remboursement30 : effortH0.75*10=7.5 ; L0.25*10+4=6.5,
donc H ; banque0.75*30-20=2.5, contrat rentable dans le modèle.
Q4d remboursement34 : H4.5 ; L1.5+4=5.5 ->L ; banque8.5-20=-11.5.
IC impose remboursement<=32 ; financement à H exige>=80/3≈26.667.
Q4e boissons/snacks : Edgeworth, gains et bords efficaces en section14.6.
Q4f corn/wheat, A2h/4h,B4h/6h : A absolu corn et comparatif corn
(coût0.5 wheat contre2/3). Spécialisation et échange à prix intermédiaire.

Q5 : increasing returns, perfect substitutes, unit elasticity, luxury good,
MRTS ; isoquante/isocoût harnais puis hausse des salaires, quantité1000
imposée ->substitution vers machines et coût minimal plus élevé.

E2022 — S20, questions p.2–5
Q1a jeu freemium sans interaction : discrimination par self-selection.
Q1b ajout interactions : effets de réseau peuvent motiver gratuité.
Q1c prix minimum99 cents : limite la sous-enchère du modèle Bertrand
homogène, potentiellement marges au-dessus MC ; attention au prix discret.
Q1d plateforme matériel sports : deux côtés, confiance, appariement,
effets croisés, amorçage ; section14.4.
Q1e dériver Lerner depuis pi=p(Q)Q-C(Q), pas seulement réciter la formule.

Q2a/b/c wifi public : non-rival/non-excluable dans le modèle ; 300(10-Q)
=1500 ->Q5 ; contributions volontaires insuffisantes par free riding.
Q2d blé Indonésie : pw30,QD50,QS10,imports40.
Q2e tarif10 : p40,QD40,QS20,imports20 ; Delta CS=-450,
Delta PS=+150,recettes200,DWL100. Deux triangles, pas toute perte de CS.

Q3a monopole : transferts plus gains d'échanges perdus.
Q3b pompes p26-2Q,C2Q,taxe4 : MR26-4Q=6 ->Q5,p_b16,
p_s12,profit50,recettes20. Optimum social SANS distorsions : Q12,MC2.
DWL SOCIALE TOTALE =0.5*(12-5)*(16-2)=49.
Ne pas traiter les4 de taxe comme coût réel de production dans le welfare.
Sans taxe, monopole Q6,p14,DWL36 ; avec taxe, perte supplémentaire13.
Le triangle25 obtenu entre demande et MC+taxe ne mesure pas toute la
perte sociale, car la recette fiscale est un transfert.
Q3c redevable acheteur/vendeur : même wedge et même quantité.
Q3d sans taxe Cournot : q1=q2=4,Q8,p10,pi_i32.
Q3e taxe4 aux deux : deux réactions se déplacent vers l'origine ;
complément numérique non demandé : q_i10/3,Q20/3,p38/3.

Q4a/b charpentier : forfait/heure, qualité, durée, coût d'opportunité,
section12.6 ; aucun contrat ne règle tous les problèmes simultanément.
Q4c pas de courbe d'offre propre au monopole, car demande entre dans MR.
Q4d Gourmets/Snoozers : sous coûts nuls, separate260 contre bundle300
par paire de clients ; réserve sur coûts absents en section9.4.
Q5 : cross-price elasticity, increasing returns, MRS, indifference curve,
perfect substitutes ; remplacer subvention alimentaire par cash permettant
ancien panier ->pas moins bien, généralement mieux si ancien optimum
intérieur et tangences différentes ; section4.6.

E2023 — S21, questions p.2–6
Q1a levure bon marché : prix absolu ne mesure pas pouvoir de marché ;
Lerner, MC, élasticité. Q1b vétérinaires : libre entrée en concurrence
monopolistique vs barrières/interaction stratégique en oligopole ;
choc de coûts, profits LR0 seulement sous libre entrée du modèle symétrique.
Q1c pâte p25-Q,C5Q ->Q10,p15,pi100.
Q1d Cournot T MC5,G MC9 ->BR_T10-qG/2,BR_G8-qT/2 ;
qT8,qG4,Q12,p13 ; profits64 et16.

Q2a licences réseaux : spectre avec interférences peut être rival et
non excluable avant attribution ; libre accès peut provoquer surexploitation.
Ne pas confondre le réseau commercial et le spectre utilisé par celui-ci.
Q2b Vickrey80/100/92 : joueur2 gagne, paie92 millions.
Q2c abonnement fixe pD10-2Q,C10+2Q : usage0,Q5,F25,
coût20,pi5. Avec two-part tariff, p2,Q4,F16,pi6, à titre de comparaison.
Q2d chômage : remise profitable si clientèle plus sensible et revente limitée ;
version lente : auto-sélection, peut protéger les revenus du premium ;
smartphones chers : clients potentiellement WTP plus forte, remise ne suit
pas automatiquement cette logique. Argumenter, pas appliquer toute remise.

Q3a pourboires : inciter qualité observable par client, cachée au patron.
Q3b avis hôtels : réduisent antisélection et avantage de réputation des chaînes.
Q3c action H/L cachée : moral hazard. Q3d b2 ->H,banque+4 ; b6 ->L,banque-8.
Q3e apport10/remboursement15 ->H avec b2 et b6,banque+2.

Q4a plafond pétrole60 contre90,QS russe8 millions fixe ->PS russe
-240 millions USD/jour. Q4b même quantité russe sous ces hypothèses ;
pas de pénurie mondiale mécaniquement déduite ; section7.4.
Q4c essence MPB100-Q,MPC10+Q,MECQ ->Qpriv45,Qeff30.
Q4d taxe20 ->Q35,p_b65,p_s45 ; DWL37.5, car taxe insuffisante.
Q5 : income elasticity, decreasing returns, MRTS, indifference curve,
perfect complements ; opérations avec heures médecins/infirmiers,
hausse salaire médecins ->substitution vers infirmiers, même production100.

E2024 — S22, questions p.1–5
Q1a/b/c tunnel : public sous hypothèses ; somme MB25-4Q,MC9 ->Q4 ;
free rider. Discuter péage/congestion si question de classification réelle.
Q1d vin QD11-p_b/2,QS=-1.5+p_s,taxe1 :
11-(p_s+1)/2=-1.5+p_s ->p_s8,p_b9,Q6.5,recette6.5.
Sans taxe : p25/3,Q41/6 ; vérifier quantité légèrement plus basse avec taxe.
Q1e normes régionales vin : certification collective réduit lemons,
permet qualité crédible sans grande marque individuelle.

Q2a Novo : barrières maintiennent marges, taille augmente volume,
demande moins élastique accroît marge relative. Q2b brevet : arbitrage
efficacité statique/incitation dynamique à l'innovation.
Q2c US p8-Q,Mexique p6-Q/2,MC0 : USQ4,p4,profit16 ;
MexQ6,p3,profit18 ; total34. CS US8,Mex9.
Q2d commun : Q0 pour p>=8 ; Q8-p pour6<=p<8 ; Q20-3p pourp<6.
Optimum p10/3,Q10,profit100/3≈33.333 ; QUS14/3,QM16/3.
Vérifier frontières et zone où seul US achète.
Q2e segmentation : prix US monte10/3->4,CS baisse98/9->8 ;
prix Mex baisse10/3->3,CS monte64/9->9. Profit augmente2/3,
CS total baisse1 ; W total baisse1/3 dans ces nombres.

Q3a/b textiles : Qpriv60,p140 ; Qeff40,MSB160,MPC120 ; DWL600.
Q3c permis : égaliser MAC pour minimiser coût d'un plafond total.
Q3d propriétaire commun textile/spa : internalise dommage dans le profit
joint, mais peut aussi avoir pouvoir de marché ; effet à distinguer du
benchmark social de firmes price takers.

Q4a Athènes bread4h/olives2h,Sparta5h/5h : absolu bread Athènes,
comparatif bread Sparta (1 olive/bread contre2).
Q4b Bertrand homogène MC5/7/8 : autour de7, sous-enchère du rival efficace,
nuance des égalités/prix continus en section10.6.
Q4c/d Bertrand différencié simultané puis leader firme2 : coûts absents
de l'énoncé ; résultats sous hypothèse coûts nuls en section10.8.
Q5 : perfect complements, Engel curve, isoquant, diminishing MP_K,
increasing returns ; offre MC, arrêt SR sous AVC et sortie LR sous ATC.

E2025 — S23, questions p.1–6
Q1a/b LN concerts : effets de réseau, barrières, multihoming.
Q1c bruit : Coase, droits mal définis et coûts de négociation.
Q1d capacité2000 déjà remplie par fans1200 ->remise étudiant500
ne permet pas de profit additionnel ; coût d'opportunité des sièges.
Q1e billets/T-shirts : profit joint et résultats pc3040/7,pT1060/7,
profit1 961 600/7≈280 228.571, section9.6.

Q2a baisse taxe concurrentielle, D inélastique/S élastique : p_b baisse,
p_s monte, Q augmente ; acheteurs reçoivent grande part de la baisse.
Recettes : baisse du taux/unité contre hausse du volume ; signe à motiver,
pas garanti seulement par les mots « inélastique » et « élastique ».
Q2b taxe2, q_i10-2p_i+p_j,MC2 : BR_i=(14+p_j)/4,
p_i14/3,q_i16/3,pi_i128/9 ; recette totale64/3.
Q2c taxe1 : BR_i=(12+p_j)/4,p_i4,q_i6,pi_i18 ; recette totale12.
Prix baisse2/3, moins que taxe1 ; marge individuelle monte8/3->3.
Q2d modèles homogènes : Bertrand/capacité illimitée pMC ; Cournot marge
positive ; mêmes noms de firmes ne suffisent pas à choisir le modèle.

Q3a North/South : PPF et avantages en section14.1.
Q3b acier pD1100-Q,pS100+Q,pw400,Q en MILLIERS de tonnes :
libre-échange QD700,QS300,M400 ; tarif100 ->p500,QD600,QS400,M200.
CS245 000->180 000 ; PS45 000->80 000 ; recettes20 000 ;
DWL10 000, toutes ces aires en MILLIERS USD. Donc DWL=10 millions USD.
Deux triangles chacun5 millions ; Delta CS=-65 millions,
Delta PS=+35 millions,recettes20 millions ->net-10 millions.
Q3c pays exportateur agricole, prix reçu baisse : revenu propriétaire
terre baisse ; mécanisme de travail mobile et valeur du produit marginal.
Q3d vélos concurrence monopolistique : produits différenciés, demande firme
décroissante, entrée facile, interaction stratégique individuelle négligée ;
choc négatif ->pertes/sorties ->profit économique nul pour survivantes
dans modèle symétrique ; Q par survivante dépend de la forme du modèle.

Q4a/b/c nettoyage public : Qeff3,non-exclusion/non-rivalité,free rider.
Q4d reverse Vickrey coûts20 000/24 000/28 000 : A gagne, payé24 000.
Q4e météo coût commun incertain : discuter winner's curse ET informations
disponibles, ne pas inventer des signaux privés absents ; section14.5.
Q4f contrôle imparfait : F>=60 pour IC faible, F>60 pour qualité strictement
préférée ; paiement110,coûts100/70,détection0.5.
Q5 : normal good, constant returns, isocost, marginal utility,
increasing economies of scale ; isocoût K10-0.5L, isoquanteQ100,
optimum tangent MP_L/MP_K=50/100, sans calcul numérique d'inputs possible.
======================================================================
17. FORMULAIRE TRANSVERSAL : QUOI, QUAND ET POURQUOI
======================================================================

Les noms des paramètres changent selon l'exercice. Chaque ligne suppose
les domaines et conditions décrits dans les chapitres précédents.

F01 Équilibre concurrentiel : QD(p*)=QS(p*).
    Égalise quantités souhaitées des deux côtés au même prix.
F02 Inverse d'une demande Q=a-bp : p=a/b-Q/b, b>0.
    Sert à tracer et à dériver la recette en choisissant Q.
F03 Budget : p_x*x+p_y*y<=I ; pente avec x horizontal=-p_x/p_y.
    Contrainte de dépenses, distincte de l'objectif U.
F04 MU_x=partial U/partial x ; MRS_xy=MU_x/MU_y.
    Pente d'indifférence=-MRS_xy quand y vertical.
F05 Optimum consommateur intérieur : MRS_xy=p_x/p_y et budget saturé.
    Égalisation de l'utilité marginale par euro.
F06 Cobb-Douglas U=x^alpha*y^beta : parts budgétaires alpha/(alpha+beta)
    et beta/(alpha+beta). Ne pas utiliser pour substituts/compléments parfaits.
F07 Élasticité prix : epsilon=(partial Q/partial p)*(p/Q).
    Dérivée transforme variation de prix en variation de quantité ; p/Q
    convertit ces variations en pourcentages sans unité.
F08 Approximation %Delta Q≈epsilon*%Delta p ; cible %Delta p≈%Delta Q/epsilon.
    Exact constant-elasticity : Q1/Q0=(p1/p0)^epsilon.
F09 Cross-price : epsilon_ij=(partial Q_i/partial p_j)*p_j/Q_i.
    Signe positif substituts, négatif compléments.
F10 Income : eta=(partial Q/partial I)*I/Q.
    Signe et magnitude classent inférieur, normal, nécessité et luxe.
F11 MP_L=partial f/partial L ; AP_L=Q/L.
    Marginal et moyen répondent à deux questions différentes.
F12 Isoquante : dK/dL=-MP_L/MP_K ; isocoût K=C/r-(w/r)L.
F13 Coût minimal intérieur : MP_L/MP_K=w/r et f(K,L)=Qbar.
    Même quantité marginale d'output par euro d'input.
F14 Rendements : comparer f(tK,tL) à t*f(K,L).
    Cobb-Douglas : comparer somme des exposants à1.
F15 TC=FC+VC ; ATC=TC/Q ; AVC=VC/Q ; AFC=FC/Q ; MC=TC'.
    MC vient du coût de l'unité marginale, pas du coût moyen.
F16 pi=R-C ; MR=R' ; optimum intérieur MR=MC.
    Égalise gain et coût supplémentaires, après vérification de l'optimum.
F17 Price taker : MR=p ->p=MC ; arrêt si meilleur R<VC à court terme.
F18 pi=(p-ATC)Q ; PS=pQ-VC=pi+FC.
    Ne pas assimiler automatiquement PS et pi.
F19 CS=intégrale_0^Q p_D(q)dq-p_bQ.
F20 PS=p_sQ-intégrale_0^Q MC(q)dq.
F21 W=CS+PS+taxes-subventions+bénéfices externes-dommages externes,
    avec traitement cohérent des coûts fixes lorsque ceux-ci changent.
F22 Taxe : p_b-p_s=t ; subvention : p_s-p_b=s ; même Q des deux côtés.
F23 Linéaire p_D=a-bQ,p_S=c+dQ : Q0=(a-c)/(b+d),
    Qt=(a-c-t)/(b+d), Qs=(a-c+s)/(b+d), dans le domaine intérieur.
F24 DWL taxe sans autre distorsion=0.5*t*(Q0-Qt).
    DWL subvention sans externalité=0.5*s*(Qs-Q0).
F25 Monopole : MR=p+Qp' ; si p=a-bQ, MR=a-2bQ.
    Le terme Qp' représente la baisse de recette sur les unités déjà vendues.
F26 Monopole avec MCc constant : Qm=(a-c)/(2b),pm=(a+c)/2.
    Prix lu sur demande, quantité trouvée avec MR=MC.
F27 Lerner=(p-MC)/p=-1/epsilon_firme.
    Demande de la firme et optimum intérieur de prix unique.
F28 Segmentation : MR_i=MC ; agrégation commune Q(p)=somme max(0,q_i(p)).
F29 Tarif deux parties connu : p_usage=MC,F=CS(p_usage), sous cas simple.
F30 Cournot : BR_i=(a-c_i-bq_j)/(2b), tronquée à0.
    Deux actives : q_i=(a-2c_i+c_j)/(3b).
F31 Cournot n symétriques : q_i=(a-c)/[b(n+1)],p=(a+nc)/(n+1).
F32 Stackelberg quantité symétrique : qL=(a-c)/(2b),qF=(a-c)/(4b).
    Retrouver par substitution de la réaction du suiveur.
F33 Bertrand différencié q_i=A-Bp_i+Dp_j :
    BR_i=(A+B*c_i+D*p_j)/(2B) ; symétrique p=(A+B*c)/(2B-D).
F34 MSC=MPC+MEC ; MSB=MPB+MEB ; optimum social MSB=MSC.
F35 Pigou : t*=MEC(Qeff) ou s*=MEB(Qeff), cas concurrentiels simples.
F36 Pollution : MAC(e)=t ; optimum MAC(e)=MEC(e).
F37 Bien public : somme_i MB_i(Q)=MC(Q), somme verticale et segments.
F38 Espérance : E[X]=somme p_s*X_s, résultats nets par état.
F39 Crédit IC : (pH-pL)*(R-remboursement)>=bénéfice privé L.
    Banque : p_action*remboursement-emprunt>=0, dans modèle sans intérêt alternatif.
F40 Inspection : pénalité >= économie privée/probabilité de détection.
F41 Coût d'opportunité X en Y=a_X/a_Y si a est heures par unité.
F42 Tarif import : p_dom=pw+tau, import=QD-QS,recette=tau*import.
    DWL=0.5*tau*(hausse QS+baisse QD), pays petit restant importateur.
F43 Vickrey vente : plus forte offre gagne, paie deuxième plus forte.
    Procurement : plus faible offre gagne, reçoit deuxième plus faible.
F44 Bien public et privé : mêmes fonctions individuelles peuvent demander
    des sommes OPPOSÉES selon rivalité, ne pas choisir par automatisme.

======================================================================
18. RÉPERTOIRE DES ABRÉVIATIONS ET DES SYMBOLES
======================================================================

Marquage : [O] abréviation/symbole observé dans les PDF ; [A] alias standard
d'une notion explicitement présente mais pas forcément écrit tel quel ;
[C] complément standard ajouté pour rendre les méthodes compréhensibles.
Les variantes sont groupées. Ce répertoire vise le corpus et ses variantes
utiles, pas toutes les abréviations de tous les manuels de microéconomie.

18.1 Coûts, recettes, production et profit
AC [O] — Average Cost — coût moyen ; généralement équivalent à ATC ici,
  C(Q)/Q. Vérifier si un auteur l'utilise pour un autre coût moyen.
AFC [O] — Average Fixed Cost — coût fixe moyen ; FC/Q.
AP, APL, AP_L [A] — Average Product (of Labor) — produit moyen (du travail) ; Q/L.
ATC [O] — Average Total Cost — coût total moyen ; TC/Q.
AVC [O] — Average Variable Cost — coût variable moyen ; VC/Q.
C(Q), TC [O] — (Total) Cost — fonction de coût total, FC+VC(Q).
FC [O] — Fixed Cost — coût fixe ; indépendant de Q dans l'horizon étudié.
F [O] — Fixed cost OU Fixed fee — coût fixe de production OU redevance
  encaissée. Identifier le rôle ; les deux ont des signes opposés dans pi.
MC [O] — Marginal Cost — coût marginal ; dC/dQ, monnaie/unité d'output.
MP [O] — Marginal Product — produit marginal d'un facteur, output/input.
MPL, MP_L [O] — Marginal Product of Labor — produit marginal du travail.
MPK, MP_K [A] — Marginal Product of Capital — produit marginal du capital.
MR [O] — Marginal Revenue — recette marginale ; dR/dQ.
MRP_L [C] — Marginal Revenue Product of Labor — recette marginale procurée
  par un input travail supplémentaire, MR*MP_L.
VMP_L [A] — Value of Marginal Product of Labor — valeur du produit
  marginal du travail, p*MP_L ; condition d'embauche concurrentielle.
CSR [A] — Corporate Social Responsibility — responsabilité sociale de
  l'entreprise, évoquée dans la discussion de l'objectif de profit en L6.
R(Q), Revenue [O] ; TR [A] — Total Revenue — recette totale, p(Q)*Q.
AR [C] — Average Revenue — recette moyenne, R/Q ; égale au prix sous prix unique.
VC [O] — Variable Cost — coût variable, dépend de Q.
pi, Π, π [O] — Profit — bénéfice/ profit économique selon les coûts inclus.
A, TFP [A] — Total Factor Productivity — productivité globale des facteurs,
  efficacité dans Q=A*f(K,L). A n'est pas toujours un paramètre technologique.
K [O] — Capital — capital productif ; ne signifie pas automatiquement argent.
L [O] — Labor — travail ; MAIS L peut aussi être Low type ou Lunches.
J [O] — Land dans L5 — terre ; lettre choisie pour cet exemple.
w [O] — Wage — salaire/coût par unité de travail.
r [O] — Rental rate of capital — prix de location d'une unité de capital.
q_i [O] — Firm i's quantity — quantité produite par firme i.
Q [O] — Total quantity/output — quantité du marché ou output ; lire contexte.
Qbar, Q avec barre [O] — production cible imposée, pas variable de choix libre.
HP [O] — Highly Productive — firme très productive, L8.
LP [O] — Less Productive — firme moins productive, L8.
SR, LR [A] — Short Run, Long Run — court terme/long terme.
SRAC, LRAC [A] — Short-/Long-Run Average Cost — coût moyen par horizon.
RTS [A] — Returns To Scale — rendements d'échelle.
IRS, CRS, DRS [A] — Increasing/Constant/Decreasing Returns to Scale —
  rendements croissants/constants/décroissants ; distinguer économies de coûts.

18.2 Demande, consommateur et élasticités
p, P [O] — Price — prix par unité. Majuscule/minuscule n'a pas de sens
  universel : le même support peut varier sa notation.
QD, Q^D, Q_D [O] — Quantity Demanded — quantité demandée à un prix.
QS, Q^S, Q_S [O] — Quantity Supplied — quantité offerte à un prix.
D, S [O] — Demand, Supply — courbes de demande/offre sur graphiques.
  D et S peuvent aussi désigner un emprunt, un joueur ou un groupe ailleurs.
p_b, pBuyer [O] — Buyer price — prix payé par acheteur.
p_s, pSeller [O] — Seller price — prix net reçu par vendeur.
U(x,y) [O] — Utility — utilité, représentation ordinale des préférences.
MU, MU_x [O] — Marginal Utility — utilité marginale du bien x.
MRS [O] — Marginal Rate of Substitution — taux marginal de substitution,
  ratio d'utilités marginales et valeur absolue de pente d'indifférence.
MRT [O] — Marginal Rate of Transformation — taux marginal de transformation,
  pente absolue de PPF dans le modèle de production ; en budget de consommation,
  prix relatif parfois appelé taux de transformation/échange disponible.
MRTS [A] — Marginal Rate of Technical Substitution — taux marginal de
  substitution technique ; ratio des MP, pente absolue d'isoquante.
I [O] — Income — revenu/budget du consommateur ; parfois investment ailleurs.
E [O] — Entertainment dans L3 — divertissement ; pas toujours elasticity.
F [O] — Food dans L3 — alimentation ; ailleurs F=coût fixe/frais d'accès.
G, O [O] — Gasoline, Other goods — essence/autres biens dans L4.
PL, PR, p_L, p_R [O] — prix lunch/record dans A2 ; ailleurs sous-indices
  L/R peuvent désigner low type ou Red. Toujours lire la définition locale.
ED, E^D, E_D, epsilon_D, epsilon_d [O/A] — (Own-)Price Elasticity of Demand
  — élasticité-prix de la demande, généralement signée négativement.
epsilon_S, ES [A] — Price Elasticity of Supply — élasticité-prix de l'offre.
epsilon_ij, E_cross [A] — Cross-Price Elasticity — élasticité croisée.
eta, epsilon_I, E_I [A] — Income Elasticity — élasticité-revenu.
WTP [A] — Willingness To Pay — disposition à payer ; par unité si marginale,
  somme/aire si totale. Une WTP totale n'est pas automatiquement le prix marginal.
Delta I [O] — compensation/variation de revenu ; transfert forfaitaire en L4.
p_r [O] — prix d'un autre bien, ex. raspberries ; pas r du capital.
T [O] — température/déterminant de demande dans L2 ; ailleurs transfert/taxe.

18.3 Bien-être, politiques et externalités
CS, C.S. [O] — Consumer Surplus — surplus du consommateur.
PS [O] — Producer Surplus — surplus du producteur ; recette moins VC.
W, TS [A] — Welfare, Total Surplus — bien-être/surplus total monétaire.
DWL [O] — Deadweight Loss — perte sèche, surplus net perdu.
MB [O/A] — Marginal Benefit — bénéfice marginal ; WTP de l'unité suivante.
MPC, PMC, MC_p [A/O] — Marginal Private Cost — coût marginal privé.
MEC, MC_e [O] — Marginal External Cost — coût marginal externe.
MSC, SMC [A] — Marginal Social Cost — coût marginal social, MPC+MEC.
MPB, PMB [A] — Marginal Private Benefit — bénéfice marginal privé.
MEB [O] — Marginal External Benefit — bénéfice marginal externe.
MSB [O], SMB [A] — Marginal Social Benefit — bénéfice marginal social, MPB+MEB.
MAC [O] — Marginal Abatement Cost — coût marginal d'abattement/de réduction
  des émissions, pas « marginal average cost ».
EC, EB [A] — External Cost, External Benefit — coût/bénéfice externe TOTAL,
  quand défini ainsi ; distinguer de MEC/MEB marginaux.
CPR [O] — Common-Pool Resource / Common Property Resource — ressource commune,
  Q_CPR dans le graphique L11 d'accès libre.
t, tau [O/A] — Unit Tax / Tariff — taxe unitaire ou droit de douane.
s [O] — Unit Subsidy — subvention unitaire ; ailleurs probabilité ou état.
T, Tax revenue [A/O] — recettes fiscales, t*Q ; unité monétaire.
Qpriv, Qopt, Qeff, Q* [O/A] — quantités privée, optimale, efficiente,
  d'équilibre. Une étoile seule ne dit PAS « optimum social ».
QPoll [O] — Quantity of Pollution — quantité de pollution dans L11.
VAT [O] — Value Added Tax — TVA ; taxe ad valorem en général, simplifiée
  en unitaire dans l'exercice E2025.

18.4 Marchés, contrats et jeux
Lerner, L_index [A] — Lerner Index — (p-MC)/p ; éviter L si L=travail.
Pm, p_M, QM, Q_M [O] — prix/quantité de monopole sur les graphiques.
PC, p_C [O] — dans L10, prix COURNOT ; ailleurs PC peut vouloir dire
  Perfect Competition. Le sous-indice doit être interprété dans sa figure.
PPT, p_PT [O] — prix price-taking sur la figure L10 p.10.
QC, Q_C [O] — quantité concurrentielle dans des graphiques de monopole ;
  dans E2025 Qc signifie quantité de CONCERT tickets, et non concurrence.
MC_i, c_i [O] — coût marginal de firme i, constant lorsqu'écrit c_i.
n [O] — nombre de firmes, cafés ou agents selon contexte.
BR, BR_i [A] — Best Response — meilleure réponse/fonction de réaction.
NE [A] — Nash Equilibrium — équilibre de Nash.
SPNE [A] — Subgame Perfect Nash Equilibrium — équilibre parfait en sous-jeux.
IC [O] — Incentive Compatibility — compatibilité des incitations ; on
  choisit le contrat/action que le concepteur souhaite induire.
IR [O] — Individual Rationality — participation ; contrat au moins aussi
  intéressant que l'option extérieure.
H, L [O] — High/Low — types, qualité ou effort ; ne pas supposer même sens partout.
B [O] — bénéfice privé de l'effort faible dans E2023/A6 ; dans L9 B_H
  désigne un bundle, et dans L10 B=Blue.
R [O] — recette dans crédit ; R=Red dans oligopole ; R=Records dans A2.
F, T_j [O/A] — frais fixe, paiement du menu j ; leur rôle dépend du contrat.
S, N [O] — Split/Steal dans A3, choix de ce devoir ; SN/NS/NN sont des
  profils de stratégies, pas des nouvelles notions économiques.
E[X] [A] — Expected Value — espérance de X, moyenne pondérée des états.
pH, pL [A] — probabilités de succès selon action H/L dans le contrat ;
  ailleurs p_H,p_L sont des PRIX aux groupes high/low.
d [A] — probabilité de détection dans l'exemple d'inspection ; un autre
  exercice peut utiliser d comme pente d'offre.

18.5 Commerce et mathématiques
PPF, PPC [A] — Production Possibility Frontier/Curve — frontière des
  possibilités de production, donnée par la technologie et les ressources.
OC [A] — Opportunity Cost — coût d'opportunité, meilleure alternative sacrifiée.
M [A] — Imports — importations, QD-QS dans un pays importateur.
pw, p_W [A] — World Price — prix mondial donné dans le modèle petit pays.
ToT [A] — Terms of Trade — termes de l'échange, prix exportations/prix importations.
FOC [C] — First-Order Condition — condition du premier ordre, dérivée nulle
  à optimum intérieur ; terme standard pour les conditions utilisées en cours.
SOC [C] — Second-Order Condition — condition du second ordre, vérifie la courbure.
Delta, Δ [O] — variation finie, valeur finale moins valeur initiale.
d/dx [O] — dérivée par rapport à une variable.
partial, ∂ [O] — dérivée partielle, autres variables maintenues constantes.
prime, ' [O] — autre notation de dérivée, ex. C'(Q).
max/min [O] — maximiser/minimiser un objectif.
s.t. [C] — Subject To — sous la contrainte de.
sqrt(x), racine(x) [O/A] — racine carrée ; x^(1/2).
barre [O] — variable fixée/cible ; étoile [O] — solution d'optimisation/équilibre.

18.6 Abréviations contextuelles non conceptuelles
SSE=Stockholm School of Economics ; BE501=code du cours ; ID=identifiant
étudiant ; AI=Artificial Intelligence ; GPT=nom de famille de modèles IA ;
US=United States ; UK=United Kingdom ; EU=European Union ; kr=kronor ;
USD=dollars américains ; GB/LN sont des noms d'acteurs/lieux d'exercices ;
HIV=virus cité comme exemple de médicament ; MTB=mountain bike ;
CSCE=Conference on Security and Co-operation in Europe dans A3 ;
SFA-Oxford=source d'un graphique ; I/II/III peuvent être numéros de parties.
Ces sigles ne sont pas des formules de microéconomie.

======================================================================
19. LEXIQUE BILINGUE DES NOTIONS ET DES CONSIGNES
======================================================================

Les définitions développées, hypothèses et calculs sont dans les chapitres.
Ce lexique permet de retrouver un mot anglais sans connaître son chapitre.

19.1 Fondations et marchés
Absolute advantage — avantage absolu : produire avec moins de ressources.
Accounting cost/profit — coût/profit comptable : dépenses explicites/solde.
Allocation — répartition : qui reçoit quels biens/ressources.
Barrier to entry — barrière à l'entrée : obstacle à un nouveau concurrent.
Binding constraint — contrainte active : limite effectivement le choix.
Ceteris paribus — toutes choses égales par ailleurs : isoler un changement.
Commodity — produit de base standardisé, utile pour modèle concurrentiel.
Competitive reallocation — réallocation vers firmes plus productives.
Comparative advantage — avantage comparatif : moindre coût d'opportunité relatif.
Complementary goods — biens complémentaires : prix de l'un réduit demande de l'autre.
Consumer — consommateur : choisit un panier sous contraintes.
Demand curve/function — courbe/fonction de demande : achat souhaité selon prix.
Differentiated products — produits différenciés : caractéristiques distinctes.
Distribution — répartition des revenus/gains ; à distinguer de l'efficacité.
Economic cost/profit — coût/profit économique : inclut les opportunités sacrifiées.
Economic rent — rente économique : revenu associé à une ressource rare.
Efficiency — efficacité : objectif explicite de gains/ressources, pas simple égalité.
Equilibrium — équilibre : décisions/quantités cohérentes, pas forcément optimum social.
Excess demand / shortage — excès de demande/pénurie : QD>QS au prix courant.
Excess supply / surplus — excès d'offre : QS>QD ; « surplus » ne veut pas
  toujours dire surplus de bien-être.
Exit / entry — sortie/entrée d'entreprises dans un marché.
Free entry — libre entrée : accès sans barrière empêchant l'ajustement LR.
Homogeneous product — produit homogène : acheteurs le traitent comme identique.
Input — facteur/intrant : ressource utilisée pour produire.
Inverse demand/supply — demande/offre inverse : prix écrit en fonction de Q.
Market clearing price — prix d'équilibre : égalise QD et QS.
Market definition — définition du marché : produits, géographie, période.
Model — représentation simplifiée avec hypothèses et implications cohérentes.
Opportunity cost — coût d'opportunité : meilleure alternative abandonnée.
Output — production obtenue, distincte des inputs employés.
Partial equilibrium — équilibre partiel : analyse d'un marché en isolant le reste.
Price taker — preneur de prix : pense ne pas affecter p par son choix individuel.
Scarcity — rareté : ressources limitées imposent choix/arbitrages.
Shift — déplacement de courbe ; movement along — déplacement sur une courbe.
Substitute goods — substituts : prix de l'un augmente demande de l'autre.
Supply curve/function — offre : quantité souhaitée à chaque prix.
Zero economic profit — profit économique nul : coûts d'opportunité rémunérés.

19.2 Consommateur et comportement
Affordable/feasible bundle — panier accessible : respecte budget/contraintes.
Altruism — altruisme : utilité augmente avec bien-être/gain d'autrui.
Behavioral economics — économie comportementale : enrichit choix rationnel simple.
Budget constraint/line — contrainte/droite budgétaire : dépenses possibles.
Bundle/basket — panier : combinaison de quantités de biens.
Cardinal utility — utilité cardinale : niveaux/intensités interprétables ;
  ne correspond pas à l'usage ordinal standard des fonctions du cours.
Cognitive limitations — limites cognitives : optimisation/information imparfaites.
Complete preferences — préférences complètes : toute paire peut être comparée.
Compensation — transfert rétablissant une possibilité de panier ou d'utilité,
  selon la définition retenue.
Convex preferences — préférences convexes : goût pour les mélanges, sous forme usuelle.
Corner solution — solution en coin : un des biens choisi en quantité0.
Diminishing marginal utility — utilité marginale décroissante avec quantité.
Engel curve — courbe d'Engel : quantité en fonction du revenu, prix fixés.
Envy / spite — envie / malveillance : autre gain peut réduire sa propre utilité.
Framing — effet de cadrage : présentation affectant décision.
Heuristic — heuristique : règle simple utilisée pour décider.
Homo economicus — agent rationnel stylisé ; ses préférences ne sont pas
  nécessairement exclusivement matérialistes.
Income effect — effet revenu : changement dû au pouvoir d'achat réel.
Indifference curve — courbe d'indifférence : même utilité sur tous ses paniers.
Inferior good — bien inférieur : demande baisse lorsque revenu augmente.
Interior solution — solution intérieure : biens/inputs strictement positifs.
Loss aversion — aversion aux pertes : poids des pertes relatif aux gains.
Lump-sum payment — transfert forfaitaire : montant indépendant de l'achat marginal.
Luxury good — bien de luxe : demande augmente plus que proportionnellement au revenu.
Marginal utility — utilité marginale : apport de l'unité supplémentaire.
More-is-better / non-satiation — non-satiété : davantage de biens désirés préféré.
Normal good — bien normal : demande augmente avec revenu.
Ordinal utility — utilité ordinale : sert à classer, pas mesurer bonheur absolu.
Overconfidence — excès de confiance : surestimer précision/capacités.
Perfect complements — compléments parfaits : consommation en proportions fixes.
Perfect substitutes — substituts parfaits : échange à taux constant.
Preference — préférence : classement des alternatives.
Self-control — maîtrise de soi : arbitrage gratification immédiate/objectif futur.
Social preferences — préférences sociales : utilité dépend aussi d'autrui/normes.
Substitution effect — effet substitution : réponse au prix relatif.
Transitivity — transitivité : cohérence du classement à travers plusieurs paniers.
Ultimatum game — jeu de l'ultimatum : partage proposé, accepté ou refusé.
Utility maximization — maximisation d'utilité : meilleur panier accessible.

19.3 Production et coûts
Average product — produit moyen : production par unité d'input.
Capital-labor ratio — ratio capital/travail : K/L.
Constant economies of scale — coût moyen LR constant sur la plage pertinente.
Cost function — fonction de coût minimal selon output, input prices donnés.
Cost minimization — minimisation de coût pour une production imposée.
Decreasing returns to scale — tous inputs multipliés par t, output moins que t.
Diminishing marginal product — produit marginal décroissant d'un seul input.
Diseconomies of scale — déséconomies : coût moyen croissant.
Economies of scale — économies : coût moyen décroissant.
Factor of production — facteur de production : travail, capital, terre, autres inputs.
Fixed cost — coût fixe indépendant de Q dans l'horizon.
Increasing returns to scale — tous inputs multipliés par t, output plus que t.
Intermediate input — intrant intermédiaire : bien produit utilisé pour produire.
Isocost — isocoût : combinaisons d'inputs au même coût.
Isoquant — isoquante : combinaisons d'inputs au même output.
Labor — travail, mesuré en personnes/heures selon énoncé.
Learning-by-doing — apprentissage par pratique, pouvant réduire les coûts.
Long run — tous les facteurs peuvent être ajustés.
Marginal cost — coût de la production additionnelle.
Marginal product — output supplémentaire d'un input supplémentaire.
Production function — relation technologie/inputs/output.
Productivity — production obtenue pour les ressources utilisées.
Raw material — matière première utilisée dans production.
Returns to scale — réaction de Q à variation proportionnelle de tous les inputs.
Short run — au moins un facteur fixé.
Shutdown — arrêt de production court terme ; différent d'exit définitif/LR.
Sunk cost — coût irrécupérable ; ne doit pas fausser comparaison future.
Variable cost — coût variant avec output.

19.4 Pouvoir de marché et stratégie de prix
Arbitrage / resale — acheter/revendre pour profiter d'un écart de prix.
Best response / reaction function — choix optimal conditionnel au rival.
Bertrand competition — concurrence en prix.
Bundling — vente groupée ; pure=lot seul, mixed=lot et séparés.
Capacity constraint — limite de production/places/ventes possibles.
Collusion — coordination des concurrents ; différente du Nash non coopératif.
Cournot competition — concurrence en quantités simultanées.
Duopoly — oligopole à deux firmes.
Excess capacity — capacité excédentaire au sens de production sous minimum ATC.
First-degree price discrimination — tarification à chaque WTP marginale individuelle.
First-mover advantage — avantage du premier joueur, dépend du jeu.
Freemium — version gratuite et possibilités payantes, auto-sélection/réseau.
Horizontal differentiation — diversité de goûts, pas classement universel de qualité.
Incumbent — entreprise déjà présente avant entrée.
Integrated market — marché non segmenté, arbitrage ou prix commun.
Lerner index — marge prix/coût marginal divisée par prix.
Market power — capacité de fixer un prix supérieur au coût marginal.
Market share — part de marché, q_i/Q ; n'est pas synonyme de profit.
Markup — marge prix-coût ; préciser absolue, relative au prix ou au coût.
Monopolistic competition — nombreuses firmes différenciées avec entrée facile.
Monopoly — offreur unique sans substituts proches dans le marché pertinent.
Natural monopoly — technologie de coûts favorisant un seul producteur.
Nash equilibrium — aucune déviation unilatérale profitable.
Oligopoly — petit nombre de firmes avec interaction stratégique.
Parallel imports — importations parallèles empêchant segmentation de prix.
Patent — droit d'exclusion temporaire, incitation à innovation dans le modèle.
Perfect competition — price takers, homogénéité, nombreux agents, entrée libre.
Price discrimination — prix différents selon unités/clients au-delà des seuls coûts.
Profit maximization — meilleur profit faisable, pas quantité maximale.
Reservation price — prix de réserve, WTP maximale d'une unité/transaction.
Second-degree discrimination — auto-sélection dans un menu.
Segmented markets — groupes dont revente/transfert entre eux est limité.
Self-selection — client révèle son type par l'offre choisie.
Single-price monopoly — monopole avec même prix pour chaque unité.
Stackelberg leadership — ordre séquentiel, réaction observée du suiveur.
Strategic complements — meilleure réponse augmente avec choix du rival, ex. prix.
Strategic substitutes — meilleure réponse baisse avec choix rival, ex. Cournot Q.
Third-degree discrimination — groupes observables avec tarifs différents.
Two-part tariff — frais d'accès plus prix d'usage.
Vertical differentiation — qualité classable, consommateurs diffèrent en WTP.

19.5 Bien-être, environnement et information
Adverse selection — antisélection liée à un type privé.
Asymmetric information — information différente entre parties.
Bargaining cost / transaction cost — coût de négocier/faire appliquer accord.
Certification — qualité attestée par un tiers ou standard.
Club good — bien excluable, non rival hors congestion.
Coase theorem — efficacité par négociation sans coût avec droits bien définis.
Common resource — ressource rivale, non excluable dans les règles considérées.
Consumer/producer surplus — gains monétaires acheteurs/vendeurs au-delà
  de paiement/coût variable.
Deadweight loss — surplus social net non réalisé/perdu.
Deductible — franchise d'assurance supportée par assuré.
Emission cap/quota — limite quantitative d'émissions.
Emission fee — prix/taxe par unité d'émission.
External benefit/cost — effet bénéfique/dommage sur tiers non pris en compte.
Externality — externalité, positive ou négative.
Franchise contract — contrat donnant usage d'une activité/marque avec paiement,
  potentiellement incitations fortes sur résultat.
Free rider — passager clandestin, bénéficie sans contribuer.
Incentive compatibility — choix souhaité préférable aux alternatives.
Individual rationality / participation — contrat acceptable face à option extérieure.
Internalization — intégrer le coût/bénéfice externe dans décision privée.
Limited liability — responsabilité limitée, pertes/remboursements plafonnés.
Lemons market — marché où qualité cachée peut évincer la bonne qualité.
Moral hazard — aléa moral, choix/action privé modifié par contrat/incitations.
Open access — accès libre à une ressource, sans restriction efficace.
Pareto improvement/efficiency — gain sans perdant/absence de gain faisable sans perdant.
Pigouvian tax/subsidy — prélèvement/aide correctrice d'externalité.
Pooling equilibrium — types non séparés par comportement observable.
Principal-agent problem — contrat avec action non observable de l'agent.
Private benefit — avantage pour décideur, parfois au détriment du principal.
Private good — rival et excluable.
Procurement — achat de service/bien par donneur d'ordre, souvent enchère inversée.
Property rights — droits déterminant qui peut utiliser/interdire/échanger.
Public good — non rival et non excluable, dans le modèle pur.
Reputation — information accumulée sur qualité/comportement.
Risk sharing — répartition de l'exposition aux chocs entre parties.
Screening — collecte/structure d'information par partie moins informée.
Separating equilibrium — types révélés par choix/signaux différents.
Sharecropping — partage de récolte/recette entre exploitant et propriétaire.
Signalling — signal observable envoyé par partie mieux informée.
Social cost/benefit — effet total privé plus externe.
Subsidy — aide réduisant prix acheteur ou augmentant recette vendeur.
Tax incidence — répartition réelle de la charge d'une taxe.
Tradable permits — permis échangeables sous plafond total.
Tragedy of the commons — usage excessif dû à externalité de rareté.
Trust — confiance, réduit certaines frictions d'information/contrat.

19.6 Jeux, commerce, plateformes et enchères
Backward induction — induction à rebours : partir des dernières décisions.
Cheap talk — communication non directement contraignante dans le jeu.
Commitment — engagement modifiant de façon crédible les choix futurs.
Credible threat — menace optimale à exécuter au nœud où elle est invoquée.
Dominant strategy — optimale quelles que soient stratégies des autres.
Edgeworth box — boîte d'échange de deux biens entre deux agents.
Free trade — libre-échange sans la barrière considérée.
Gains from trade — gains à l'échange, surplus d'échanges mutuellement utiles.
Multihoming — participation à plusieurs plateformes.
Network effect — valeur du service dépendant de participants du même/autre côté.
Payoff — gain/utilité d'une issue, à distinguer de l'argent si préférences sociales.
Platform — intermédiaire organisant interactions entre groupes.
Pooling/separating — voir information ; pas à confondre avec bundling de produits.
Production possibility frontier — frontière des combinaisons réalisables.
Pure/mixed strategy — choix certain/tirage probabiliste entre actions.
Reverse auction — enchère d'achat, l'offre basse peut gagner.
Sealed-bid auction — offres remises sans observer celles des autres.
Sequential/simultaneous moves — décisions dans un ordre/prises sans observer le rival.
Single-homing — usage d'une seule plateforme.
Specific factors — facteurs immobilisés dans un secteur du modèle de commerce.
Subgame perfect equilibrium — Nash dans chaque sous-jeu, exclut menaces non crédibles.
Switching costs — coûts de changement de fournisseur/plateforme.
Tariff — droit de douane sur importations ; différent du tarif à deux parties.
Terms of trade — prix des exportations relativement aux importations.
Vickrey auction — enchère scellée au second prix du modèle de valeurs privées.
Winner's curse — malédiction du vainqueur due à sélection d'une estimation optimiste.

19.7 Verbes et mots de consigne à reconnaître immédiatement
Assume — suppose : utiliser l'hypothèse donnée, même stylisée.
Calculate / find / determine — calculer/trouver : équations, étapes, résultat/unité.
Compare — comparer : même benchmark, mêmes hypothèses, variables pertinentes.
Define — définir : donner sens simple, pas seulement une formule.
Derive / show how derived — dériver/démontrer : partir de l'objectif et obtenir relation.
Discuss — discuter : mécanisme, hypothèses et éventuelle ambiguïté.
Explain why / intuition — expliquer pourquoi : relier incitations, marginal et résultat.
Illustrate / use a figure — dessiner avec axes, courbes, quantités et zones légendés.
Holding constant / given — maintenir donné : ne pas dériver cette variable comme un choix.
In the long run — long terme : vérifier entrée, sortie et possibilité d'ajuster inputs.
Maximize / minimize — optimiser l'objectif, pas seulement égaliser des courbes.
Motivate / justify — justifier : argument économique et lien au calcul.
No calculations needed — expliquer le mécanisme ; ne pas remplacer intuition par chiffres.
Per unit — par unité, montant à multiplier par volume pertinent.
Resale impossible — revente impossible : condition clé de segmentation.
Subject to — sous contrainte : écrire explicitement ce qui limite le choix.
Unilaterally — unilatéralement : seul le décideur modifie sa stratégie.
Welfare maximizing — maximiser bien-être SOCIAL, distinct du profit privé.
======================================================================
20. PIÈGES, CORRECTIONS, GRAPHIQUES ET PARCOURS DE RÉVISION
======================================================================

20.1 Corrections et ambiguïtés à ne pas reproduire
1) A3.1c, préférences altruistes égales : Nash purs SS,SN,NS ; NN est faux.
2) A3.2c : si Y est seul armé, X reçoit1, Y reçoit5-3=2. Ne pas attribuer
   à X le gain net2 de Y. L'issue annoncée peut être juste malgré un gain faux.
3) A2.2c : p_R augmente, I nominal reste1200 ; c'est la contrainte en
   quantités/pouvoir d'achat qui se resserre. Dire « revenu baisse » serait faux.
4) A2.2b : (20,4) a utilité80 mais coûte1280 ; budget prioritaire avant
   classement des paniers ACCESSIBLES. Le dernier panier répète(15,5).
5) Élasticités A2 : calcul en % proportionnel et solution exacte d'une
   fonction à élasticité constante divergent pour grands changements.
6) E2024 Q4c/d : coût non précisé ; déclarer l'hypothèse avant chiffres.
7) E2022 Q4d : coûts du bundling non précisés ; les recettes300/260 ne sont
   des profits qu'à coûts nuls ; expliquer l'hypothèse.
8) E2025 Q4e : choc commun ne démontre pas à lui seul des signaux privés ni
   une winner's curse ; préciser information et sélection conditionnelle.
9) E2020 Q4d : ne pas inventer un conflit d'incitation avant de calculer
   les deux espérances. Les nombres donnés alignent le choix A/B.
10) E2022 monopole taxé : taxe4 n'est pas coût social réel4 ; DWL totale49
    sous benchmark efficient sans taxe, différente du triangle25 tronqué.
11) E2025 acier : Q en milliers de tonnes ; DWL10 000 dans le diagramme
    signifie10 millions de dollars, pas10 000 dollars.
12) E2025 pénalité :60 suffit pour IC faible, strictement plus que60 pour
    un choix strict de qualité haute sans règle d'indifférence.

20.2 Erreurs générales à détecter dans chaque exercice
- Confondre demande directe Q(p) et inverse p(Q), ou leurs dérivées.
- Lire le prix de monopole sur MR au lieu de la demande.
- Oublier le terme Q*p'(Q) dans MR, ou remplacer MR par p en monopole.
- Employer MR=MC sans vérifier maximum, non-négativité, capacité et arrêt.
- Avec MC constant, prix donné supérieur à MC et capacité illimitée,
  aucun optimum fini de q n'existe sans autre limite ; p=MC ne résout pas
  une maximisation avec marge constante positive.
- Confondre MU,MP,MR,MC,MB ou MRS,MRTS,MRT.
- Confondre pente et élasticité ; oublier le facteur p/Q et le signe.
- Ajouter des prix de demandes privées au lieu des quantités.
- Ajouter horizontalement les demandes de bien public.
- Laisser des demandes/quantités négatives dans une somme de marché.
- Déduire les profits de firme i avec Q du marché au lieu de q_i.
- Faire varier le coût fixe dans une dérivée marginale où il est constant.
- Arrêter toute firme qui a pi<0 même si R couvre VC et FC est inévitable.
- Affirmer « profit économique nul ->aucun revenu ».
- Assimiler produit marginal décroissant et rendements d'échelle décroissants.
- Confondre PS avec profit quand FC non nul.
- Compter recette fiscale comme perte sociale, ou oublier coût budgétaire
  d'une subvention ; omettre les dommages/bénéfices externes.
- Mesurer DWL par rapport à Q privé alors qu'une externalité préexiste.
- Choisir taxe Pigou=MEC(Qinitial) quand MEC dépend de Q.
- Conclure toute remise profitable sans tenir compte capacité ou arbitrage.
- Appliquer p_usage=MC à tout abonnement avec clients hétérogènes.
- Confondre abonnement seul et tarif deux parties.
- Oublier la réaction du suiveur dans la dérivée du leader.
- Confondre compétition en prix homogènes et différenciés.
- Prétendre une barrière à l'entrée n'affecte que court terme.
- Confondre adverse selection(type) et moral hazard(action).
- Vérifier rentabilité de la banque avec pH sans vérifier que l'agent choisit H.
- Oublier l'option extérieure/participation même si IC est satisfaite.
- Calculer avantage comparatif en regardant seulement productivité absolue.
- Transformer une conclusion agrégée de welfare en conclusion pour chacun.
- Donner des nombres sans expliquer le mécanisme demandé par « explain ».

20.3 Cahier des graphiques à savoir refaire sans modèle
G1 Offre/demande : Q horizontal,p vertical ; intercepts,équilibre et flèches de choc.
G2 Budget/indifférence : nom des deux biens, intercepts I/p, pente relative,
   courbe atteignable la plus haute, tangence ou coin/coude.
G3 Demande individuelle : optimum à plusieurs prix, report des couples(p,q).
G4 Isoquante/isocoût : L horizontal,K vertical, Q fixé, coût minimal tangent ;
   nouvelle tangence après hausse w, sans déplacer l'isoquante cible.
G5 MC/ATC/AVC de firme : p horizontal, q optimal, rectangle profit/perte,
   seuils arrêt et sortie. Ajouter graphique de marché pour entrée/sortie.
G6 Surplus concurrentiel : CS sous demande/au-dessus prix, PS au-dessus
   offre/en dessous prix ; unités monétaires de chaque aire.
G7 Taxe/subvention : demande et offre INITIALES, Q nouveau, deux prix,
   wedge, rectangle État, triangles DWL ; préciser signe budgétaire.
G8 Prix plafond/plancher : niveau réglementé, QS et QD distinctes,
   volume réellement échangé et hypothèse de rationnement.
G9 Monopole : D,MR,MC,éventuellement ATC ; Qm,pm,Qeff,profit,CS,DWL.
G10 Discrimination : deux marchés séparés puis demande agrégée avec coude ;
    distinguer groupes qui entrent/sortent selon prix commun.
G11 Tarif deux parties : prix d'usage, quantité, triangle CS capté par F ;
    comparer usage gratuit si l'énoncé impose abonnement seul.
G12 Cournot : deux réactions dans les MÊMES axes, intersection et choc de coût.
G13 Stackelberg : réaction du suiveur, position du leader, comparaison Nash.
G14 Bertrand différencié : axes p1,p2,réactions croissantes,déplacement par taxe/coût.
G15 Externalité : MPB,MPC,MSB/MSC pertinents, Qpriv,Qeff,taxe/subvention,DWL.
G16 Pollution : mentionner pollution OU abattement sur x, MAC et MEC, taxe
    horizontale ou quota vertical ; pas seulement un diagramme d'output.
G17 Permis deux firmes : MAC différentes, quota initial, achats/ventes,
    coût marginal final commun et plafond total inchangé.
G18 Bien public : MB individuelles et somme VERTICALE, coudes, MC, Qeff.
G19 PPF et commerce : deux biens, intercepts, coût d'opportunité, droite
    de prix, production et consommation séparées, indifférence pertinente.
G20 Tarif import : offre/demande domestiques, pw,pw+tau,Qs/Qd/imports,
    CS perdu,PS gagné,recettes,deux triangles.
G21 Edgeworth : deux origines opposées, dotation, indifférences des deux,
    zone d'amélioration et allocations efficaces, y compris bords.
G22 Jeu séquentiel : nœuds et ordre, actions, gains NETS, choix du dernier
    joueur puis du premier ; écrire stratégie complète du suiveur.
Un graphique sans axes ou sans benchmark ne remplace pas une explication.

20.4 Définitions courtes en anglais pour les Q5
Normal good: A good people buy more of when their income rises, other
  things equal.
Inferior good: A good people buy less of when their income rises, other
  things equal.
Luxury good: A good for which demand rises more than proportionally with income.
Perfect substitutes: Goods a person is willing to exchange at a constant rate.
Perfect complements: Goods that are useful together in fixed proportions.
Indifference curve: Combinations of goods that give a consumer the same satisfaction.
Engel curve: The quantity a consumer chooses at different incomes, holding prices fixed.
Marginal utility: The extra satisfaction from consuming an additional unit of a good.
Marginal rate of substitution: The amount of one good a consumer is willing
  to give up for a little more of another while remaining equally well off.
Marginal product of capital: The extra output from additional capital,
  holding other inputs fixed.
Decreasing marginal product of capital: Additional capital adds less and
  less output as capital increases while other inputs stay fixed.
Isoquant: Combinations of inputs that produce the same amount of output.
Isocost: Combinations of inputs that have the same total cost.
Marginal rate of technical substitution: The amount of one input that can
  be saved by using more of another while keeping output unchanged.
Increasing returns to scale: Increasing all inputs by a given proportion
  increases output by a greater proportion.
Constant returns to scale: Increasing all inputs by a given proportion
  increases output by the same proportion.
Decreasing returns to scale: Increasing all inputs by a given proportion
  increases output by a smaller proportion.
Economies of scale: Average production cost falls as output increases.
Unit elastic demand: A one-percent price increase reduces quantity demanded
  by one percent, locally and holding other determinants fixed.
Income elasticity: The percentage change in demand associated with a
  one-percent income increase, holding other determinants fixed.
Cross-price elasticity: The percentage change in demand for one good
  associated with a one-percent change in another good's price.
Formulations pédagogiques préparées ici ; ne pas les présenter comme
des phrases tirées d'un barème officiel.

20.5 Gabarit de réponse à une question calculatoire
« The firm chooses [variable] to maximize [objective], taking [given]
as given. Its profit is [function]. The first-order condition is [equation],
which gives [quantity/price]. Substituting into [demand/cost] gives [rest].
The result is valid because [domain/maximum/participation]. Intuitively,
[marginal trade-off]. Compared with [benchmark], [change and reason]. »
Pour welfare : annoncer benchmark, écrire W avec État/externalité, calculer
les composantes, dessiner et expliquer quelle transaction est perdue/excessive.
Pour théorie : définition simple ->source de l'incitation ->conséquence
->condition/limite liée à l'énoncé.

20.6 Parcours de révision proposé, fondé sur le corpus
Étape1 Fondations : L2–L6, A2 ; budget, dérivées, coûts, élasticités,
MRS/MRTS, arrêt/entrée. Faire Q5 sans aide pour diagnostiquer les bases.
Étape2 Welfare : L7 et A4.2, puis taxes/subventions E2021/E2022 ; refaire
CS,PS,État,DWL et chaque graphique avec prix acheteur/vendeur distincts.
Étape3 Pouvoir de marché : L8–L10, A4.1/A4.3/A5 ; monopole, Lerner,
segmentation, abonnement, Cournot, Bertrand, Stackelberg et variantes de coût.
Étape4 Défaillances : L11–L12 et A6 ; social vs privé, public vs commun,
Coase, pollution, lemons, IC/IR, crédit et pénalités.
Étape5 Compléments d'examens : section14 et A3 ; commerce, PPF, tarifs,
plateformes, enchères, Edgeworth et jeux séquentiels.
Étape6 Sujets chronométrés : résoudre un final entier, en anglais et avec
graphiques, puis corriger erreurs de modèle avant erreurs arithmétiques.
Réviser les sujets récents et aussi les plus anciens pour varier les modèles.
Si le midterm est conservé, ne pas sacrifier les questions principales pour
préparer seulement Q5 ; les bases restent indispensables aux quatre grandes.

La date du final affichée dans L1 est le 23 octobre 2026. Au 9 octobre, il
reste 14 jours : ce parcours peut être réparti sur cette période, avec
plusieurs séances de résolution active et des reprises espacées. La date
reste une information du support, à confronter à la convocation personnelle.

20.7 Générateurs d'exercices à demander à ChatGPT
- Changer intercepts/pentes d'offre et demande puis ajouter taxe/subvention ;
  exiger lecture de deux prix, budget public et welfare.
- Changer U,prix,revenu ; proposer d'abord un intérieur, puis un coin,
  puis des compléments parfaits ; comparer accessible/préféré.
- Donner une demande multi-prix et demander élasticités propre/croisée/revenu.
- Donner une fonction de production ; demander MP, MRTS, rendements,
  puis coût minimal pour une quantité imposée.
- Donner TC et prix ; demander q,profit,PS,arrêt SR/sortie LR.
- Passer monopole->Cournot->Stackelberg->Bertrand ; conserver les mêmes
  primitives et demander ce qui change dans la variable stratégique.
- Donner deux marchés avec prix d'exclusion différents ; imposer comparaison
  de TOUS les segments et des frontières sous prix commun.
- Comparer abonnement seul, prix unique et tarif deux parties.
- Ajouter externalité variable et une taxe mal calibrée ; demander benchmark
  social, pas seulement sens du changement de quantité.
- Donner bien public où une WTP devient0 avant l'optimum candidat ;
  forcer sommation verticale par morceaux.
- Changer pH,pL,remboursement,bénéfice privé et apport dans un contrat de crédit.
- Donner matrices monétaires et utilités sociales ; recalculer meilleures réponses.
- Donner PPF et prix mondial puis tarif ; vérifier seuil prohibitif et unités.
- Donner enchère vente puis procurement ; expliquer pourquoi le second prix
  n'a pas la même direction dans les deux cas.
- Demander une explication anglaise sans formule, puis une dérivation complète.

20.8 Contrôle final d'une réponse d'examen
Le modèle correspond-il aux mots « price/quantity », « public/private »,
« fixed fee », « observable », « chooses first » ?
La variable dérivée est-elle celle effectivement choisie ?
Chaque quantité est-elle non négative et dans le bon segment ?
La FOC décrit-elle un maximum/minimum valide et les coins ont-ils été vérifiés ?
Ai-je utilisé les coûts et probabilités propres au bon agent ?
Ai-je expliqué le mécanisme et non seulement inscrit une formule ?
Les transferts ont-ils été distingués des coûts réels et du dommage externe ?
Le benchmark de DWL est-il explicitement SOCIAL et cohérent avec l'énoncé ?
Les axes, zones et unités du graphique correspondent-ils aux calculs ?
Une hypothèse supplémentaire est-elle nécessaire et a-t-elle été déclarée ?

Fin du dossier. Les références S01–S23 permettent de revenir aux documents
originaux ; les notations restent locales à chaque exercice. La priorité
est de savoir reconstruire la logique, pas seulement reconnaître un sigle.
`),ze=e=>Re(K,e),Be=e=>K.abbr.find(t=>t.names.includes(e));function Ve(e){if(b[e])return b[e];let t=Be(e);return t?{key:e,english:t.english,french:t.french,literal:t.french,tone:`neutral`,ref:`18:${e}`}:null}var q=d(),He=e=>e.replace(/ ([?!:;»])/g,`\xA0$1`).replace(/« /g,`«\xA0`),Ue=/(\[\[[^\]]+\]\]|\*\*[^*]+\*\*|\{\{[^}]+\}\}|§\d{1,2}(?:\.\d{1,2})?(?::[A-Z0-9]+)?(?:#[A-Za-z0-9.]+)?)/g;function J({text:e}){let t=e.split(Ue);return(0,q.jsx)(q.Fragment,{children:t.map((e,t)=>e?e.startsWith(`[[`)?(0,q.jsx)(We,{k:e.slice(2,-2)},t):e.startsWith(`**`)?(0,q.jsx)(`strong`,{children:He(e.slice(2,-2))},t):e.startsWith(`{{`)?(0,q.jsx)(Y,{f:e.slice(2,-2)},t):e.startsWith(`§`)?(0,q.jsx)(X,{r:e.slice(1)},t):(0,q.jsx)(G.Fragment,{children:He(e)},t):null)})}function We({k:e}){let t=H(),n=Ve(e);if(!n)return(0,q.jsx)(q.Fragment,{children:e});let i=Oe(t,`abbr:${e}`);return(0,q.jsxs)(`span`,{className:`abbr-wrap`,children:[(0,q.jsx)(`button`,{type:`button`,className:`abbr ${i>=2?`abbr--known`:``}`,style:{"--tone":re[n.tone]},onClick:()=>Ne({kind:`abbr`,key:e}),"aria-label":`${e} : ${n.english||n.french}. ${r(`Ouvrir la fiche`)}`,children:e}),(0,q.jsxs)(`span`,{className:`abbr-tip`,role:`tooltip`,children:[(0,q.jsx)(`b`,{children:n.english||e}),n.french&&(0,q.jsxs)(`i`,{children:[` · `,n.french]}),(0,q.jsx)(`br`,{}),n.literal]})]})}function Ge({k:e}){let t=H(),n=Ve(e);if(!n)return null;let i=Oe(t,`abbr:${e}`);return(0,q.jsxs)(`div`,{className:`decode`,style:{"--tone":re[n.tone]},children:[(0,q.jsxs)(`div`,{className:`decode-head`,children:[(0,q.jsx)(`span`,{className:`decode-key`,style:{fontWeight:i>=2?840:i===1?520:170},children:e}),(0,q.jsxs)(`span`,{children:[(0,q.jsx)(`b`,{children:n.english}),(0,q.jsx)(`br`,{}),(0,q.jsx)(`span`,{className:`muted`,children:n.french})]})]}),(0,q.jsxs)(`dl`,{className:`decode-grid`,children:[(0,q.jsx)(`dt`,{children:r(`Littéralement`)}),(0,q.jsx)(`dd`,{children:He(n.literal)}),n.who&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`dt`,{children:r(`Qui ?`)}),(0,q.jsx)(`dd`,{children:He(n.who)})]}),n.marginal&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`dt`,{children:r(`« Marginal » ici`)}),(0,q.jsx)(`dd`,{children:He(n.marginal)})]}),n.units&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`dt`,{children:r(`Unités`)}),(0,q.jsx)(`dd`,{children:n.units})]}),n.curve&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`dt`,{children:r(`Sur le graphique`)}),(0,q.jsx)(`dd`,{children:He(n.curve)})]})]}),n.note&&(0,q.jsx)(`p`,{className:`decode-note`,children:He(n.note)})]})}var Ke=Object.keys(b).sort((e,t)=>t.length-e.length),qe=RegExp(`(?<![A-Za-z_])(${Ke.map(e=>e.replace(/[*]/g,`\\*`)).join(`|`)})(?![A-Za-z_])`,`g`);function Y({f:e,block:t,onWhy:n}){let i=e.split(qe).map((e,t)=>{let n=b[e];return t%2==1&&n?(0,q.jsxs)(`span`,{className:`abbr-wrap`,children:[(0,q.jsx)(`button`,{type:`button`,className:`f-sym`,style:{color:re[n.tone]},onClick:()=>Ne({kind:`abbr`,key:e}),children:e}),(0,q.jsxs)(`span`,{className:`abbr-tip`,role:`tooltip`,children:[(0,q.jsx)(`b`,{children:n.english}),` · `,(0,q.jsx)(`i`,{children:n.french}),(0,q.jsx)(`br`,{}),n.literal]})]},t):(0,q.jsx)(G.Fragment,{children:e},t)});return t?(0,q.jsxs)(`div`,{className:`formula-block`,children:[(0,q.jsx)(`span`,{className:`formula`,children:i}),n&&(0,q.jsx)(`button`,{type:`button`,className:`why-mini`,onClick:n,"aria-label":r(`Pourquoi cette formule ?`),children:r(`Pourquoi ?`)})]}):(0,q.jsx)(`span`,{className:`formula`,children:i})}function X({r:e}){let t=ze(e);return(0,q.jsxs)(`button`,{type:`button`,className:`src`,title:t?t.title:r(`référence du dossier`),onClick:()=>Ne({kind:`source`,ref:e}),children:[`§`,e.replace(`:`,` `).replace(`#`,` `)]})}var Je={doc:r(`Documenté`),recalc:r(`Recalculé (dossier)`),peda:r(`Complément pédagogique`)};function Ye({prov:e}){return(0,q.jsx)(`div`,{className:`prov`,children:e.map((e,t)=>(0,q.jsxs)(`span`,{className:`prov-tag prov-${e.kind}`,children:[Je[e.kind],e.ref&&(0,q.jsx)(X,{r:e.ref}),e.note&&(0,q.jsxs)(`span`,{className:`muted`,children:[` `,e.note]})]},t))})}function Z({d:e,size:t=16,label:n,className:r=``}){return(0,q.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:1.6,strokeLinecap:`round`,strokeLinejoin:`round`,className:`icon ${r}`,role:n?`img`:void 0,"aria-label":n,"aria-hidden":!n||void 0,children:(0,q.jsx)(`path`,{d:e})})}var Q=e=>(0,q.jsx)(Z,{d:`M2.5 8h11M9 3.5 13.5 8 9 12.5`,...e}),Xe=e=>(0,q.jsx)(Z,{d:`M13.5 8h-11M7 3.5 2.5 8 7 12.5`,...e}),Ze=e=>(0,q.jsx)(Z,{d:`M8 2.5v11M3.5 9 8 13.5 12.5 9`,...e}),Qe=e=>(0,q.jsx)(Z,{d:`M2.5 8.6 6.2 12 13.5 4`,...e}),$e=e=>(0,q.jsx)(Z,{d:`M3.5 3.5l9 9M12.5 3.5l-9 9`,...e}),et=e=>(0,q.jsx)(Z,{d:`M8 3a5 5 0 1 0 0 10A5 5 0 1 0 8 3Z`,...e}),tt=e=>(0,q.jsx)(Z,{d:`M8 2.5 14 13.5H2L8 2.5ZM8 7v2.8M8 11.6v.1`,...e}),nt=e=>(0,q.jsx)(Z,{d:`M6 3.5h7.5v9H6L1.5 8 6 3.5ZM8.2 6.2l3.4 3.6M11.6 6.2l-3.4 3.6`,...e}),rt=e=>Array.from(e,e=>{if(e.length>1)return e;if(e===`’`||e===`‘`)return`'`;let t=e.normalize(`NFD`)[0].toLowerCase();return t.length===1?t:e}).join(``);function it(e,t,n){for(let r of n){let n=new RegExp(r.source,r.flags.replace(`g`,``)).exec(t);if(n){let t=Math.max(0,n.index-12),r=Math.min(e.length,n.index+n[0].length+12);return`${t>0?`…`:``}${e.slice(t,r).trim()}${r<e.length?`…`:``}`}}return null}var at=/\b(le|la|les|des|est|une|du|que|qui|pour|pas|avec|dans|sur|cette|sont|aux|leur|donc|parce)\b/g,ot=/\b(the|is|are|of|and|to|because|which|that|this|with|so|than|does|not|they|their)\b/g;function st(e){let t=rt(e),n=(t.match(at)??[]).length,r=(t.match(ot)??[]).length;return n+r<3?`?`:n>r?`fr`:`en`}function ct({rubric:e,lessonId:t,tags:n,onValidated:i}){let[a,o]=(0,G.useState)(``),[s,c]=(0,G.useState)(!1),[l,u]=(0,G.useState)([]),[d,f]=(0,G.useState)([]),[p,m]=(0,G.useState)(!1),[h,_]=(0,G.useState)(!1),v=()=>{let t=rt(a);u(e.links.map(e=>{let n=it(a,t,e.patterns);return{state:n?`auto`:`missing`,snippet:n,term:!e.term||e.term.test(t),open:!1}})),f(e.errors.flatMap(e=>{let n=it(a,t,e.patterns);return n?[{mis:e.mis,snippet:n,refine:e.refine,dismissed:!1}]:[]})),c(!0),m(!1)},y=l.filter(e=>e.state!==`missing`).length,b=d.filter(e=>!e.dismissed);return(0,q.jsxs)(`div`,{className:`teach`,children:[(0,q.jsx)(`p`,{className:`teach-prompt`,children:(0,q.jsx)(J,{text:e.prompt})}),(0,q.jsx)(`textarea`,{value:a,onChange:e=>{o(e.target.value),c(!1)},rows:7,placeholder:r(`Explique avec tes mots — analogies bienvenues.`),"aria-label":r(`Ton explication`)}),(0,q.jsxs)(`div`,{className:`row`,children:[(0,q.jsx)(`button`,{type:`button`,className:`primary`,disabled:a.trim().length<40,onClick:v,children:r(`Analyser mes liens de cause`)}),(0,q.jsx)(`span`,{className:`muted small`,children:a.trim().length<40?r(`Écris au moins quelques phrases.`):``})]}),(0,q.jsx)(`p`,{className:`muted small`,children:r(`Le repérage automatique est approximatif : vérifie les liens proposés et signale ceux que tu as exprimés autrement.`)}),s&&(0,q.jsxs)(`div`,{className:`teach-result`,children:[(0,q.jsx)(`ul`,{className:`links`,children:e.links.map((e,t)=>{let n=l[t];return(0,q.jsxs)(`li`,{className:`link-${n.state}`,children:[(0,q.jsx)(`span`,{className:`link-icon`,children:n.state===`missing`?(0,q.jsx)(et,{label:r(`maillon non détecté`)}):(0,q.jsx)(Qe,{label:r(`maillon présent`)})}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`b`,{children:e.label}),n.state===`auto`&&n.snippet&&(0,q.jsxs)(`span`,{className:`snippet`,children:[`« `,n.snippet,` »`]}),n.state===`self`&&(0,q.jsxs)(`span`,{className:`muted small`,children:[` — `,r(`tu l’as exprimé autrement`)]}),n.state!==`missing`&&!n.term&&e.termHint&&(0,q.jsxs)(`p`,{className:`vocab`,children:[(0,q.jsx)(tt,{size:15}),(0,q.jsxs)(`span`,{children:[r(`Vocabulaire à affiner :`),` `,(0,q.jsx)(J,{text:e.termHint})]})]}),n.state===`missing`&&!p&&(0,q.jsxs)(`div`,{className:`row small`,children:[(0,q.jsx)(`button`,{type:`button`,className:`ghost small`,onClick:()=>u(l.map((e,n)=>n===t?{...e,state:`self`}:e)),children:r(`Je l’ai dit autrement`)}),(0,q.jsx)(`button`,{type:`button`,className:`ghost small`,onClick:()=>u(l.map((e,n)=>n===t?{...e,open:!e.open}:e)),children:r(`Montre-moi ce maillon`)})]}),n.open&&(0,q.jsx)(`p`,{className:`muted`,children:(0,q.jsx)(J,{text:e.explain})})]})]},e.id)})}),d.map((e,t)=>(0,q.jsxs)(`div`,{className:`teach-error ${e.dismissed?`dismissed`:``}`,children:[(0,q.jsxs)(`b`,{children:[(0,q.jsx)($e,{size:14}),` `,r(`Erreur de concept possible`)]}),` `,(0,q.jsxs)(`span`,{className:`snippet`,children:[`« `,e.snippet,` »`]}),(0,q.jsx)(`p`,{children:(0,q.jsx)(J,{text:e.refine})}),(0,q.jsx)(`p`,{className:`muted small`,children:g(e.mis)?.label}),!p&&!e.dismissed&&(0,q.jsx)(`button`,{type:`button`,className:`ghost small`,onClick:()=>f(d.map((e,n)=>n===t?{...e,dismissed:!0}:e)),children:r(`Ce n’est pas ce que je voulais dire`)})]},t)),(0,q.jsxs)(`p`,{className:`teach-score`,children:[r(`{a}/{b} maillons de cause`,{a:y,b:e.links.length}),` `,b.length?`· ${r(`{n} erreur(s) à corriger`,{n:b.length})}`:``]}),p?(0,q.jsx)(`p`,{className:`feedback ${y>=e.links.length-1&&!b.length?`good`:`bad`}`,children:y>=e.links.length-1&&!b.length?r(`Chaîne causale solide. Ce qui compte, c’est que chaque maillon cause le suivant — ton vocabulaire peut encore s’affiner.`):r(`Il manque des maillons : complète ton explication, puis relance l’analyse.`)}):(0,q.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>{let r=y>=e.links.length-1&&b.length===0;W({tags:n,dim:`intuition`,ok:r,src:`teachback`,item:t,assisted:l.some(e=>e.state===`self`)&&r}),b.forEach(e=>xe(e.mis)),_e({lesson:t,t:Date.now(),text:a,score:y/e.links.length}),m(!0),r&&i?.()},children:r(`Valider mon explication`)}),(0,q.jsx)(`button`,{type:`button`,className:`link`,onClick:()=>_(!h),children:r(h?`Masquer l’explication modèle`:`Voir une explication modèle`)}),h&&(0,q.jsx)(`blockquote`,{className:`model`,children:(0,q.jsx)(J,{text:e.model})})]})]})}function lt({rubric:e,model:t,lang:n,onGraded:i}){let[a,o]=(0,G.useState)(``),[s,c]=(0,G.useState)(null),[l,u]=(0,G.useState)(!1),d=t=>e.map(e=>!!it(t,rt(t),e.patterns)),f=st(a),p=!n||f===n||f===`?`;return(0,q.jsxs)(`div`,{className:`textans`,children:[(0,q.jsx)(`textarea`,{value:a,rows:4,onChange:e=>{o(e.target.value),c(null),u(!1)},placeholder:n===`en`?`Answer in English…`:r(`Ta réponse…`),"aria-label":r(`Ta réponse écrite`)}),s?(0,q.jsxs)(`div`,{className:`rubric`,children:[(0,q.jsx)(`blockquote`,{className:`model`,children:(0,q.jsx)(J,{text:t})}),(0,q.jsx)(`p`,{className:`small muted`,children:r(`Coche ce que ta réponse contient vraiment (pré-coché quand on l’a détecté) :`)}),e.map((e,t)=>(0,q.jsxs)(`label`,{className:`tick`,children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:s[t],disabled:l,onChange:()=>c(s.map((e,n)=>n===t?!e:e))}),e.label]},e.id)),n===`en`&&!p&&(0,q.jsx)(`p`,{className:`feedback bad`,children:r(`Langue : ta réponse semble en français. À l’examen, réponds en anglais.`)}),!l&&(0,q.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>{let t=s.filter(Boolean).length>=Math.ceil(e.length*.75)&&p;u(!0),i(t,s,p)},children:r(`Valider`)})]}):(0,q.jsx)(`button`,{type:`button`,className:`primary`,disabled:a.trim().length<15,onClick:()=>c(d(a)),children:r(`Comparer à la réponse modèle`)})]})}function ut(e,t){let n=2166136261;for(let e of t)n=Math.imul(n^e.charCodeAt(0),16777619);let r=[...e];for(let e=r.length-1;e>0;e--){n=Math.imul(n^n>>>15,2246822507)>>>0;let t=n%(e+1);[r[e],r[t]]=[r[t],r[e]]}return r}var dt=e=>Number(e.replace(/\s/g,``).replace(`,`,`.`).replace(`−`,`-`));function ft({layers:e,label:t=r(`Pourquoi ?`),start:n=0}){let[i,a]=(0,G.useState)(n);return(0,q.jsxs)(`div`,{className:`why`,children:[e.slice(0,i).map((e,t)=>(0,q.jsxs)(`div`,{className:`why-layer`,style:{"--depth":t},children:[(0,q.jsx)(`span`,{className:`why-depth`,children:t+1}),(0,q.jsx)(`p`,{children:(0,q.jsx)(J,{text:e})})]},t)),i<e.length?(0,q.jsxs)(`button`,{type:`button`,className:`why-btn`,onClick:()=>a(i+1),children:[(0,q.jsx)(Ze,{size:14}),i===0?t:r(`Pourquoi ? Un niveau plus profond`)]}):(0,q.jsxs)(`p`,{className:`why-end muted small`,children:[r(`Fond atteint : en dessous, ce sont les hypothèses du modèle.`),` `,(0,q.jsx)(`button`,{type:`button`,className:`link`,onClick:()=>a(0),children:r(`Replier`)})]})]})}function pt({actors:e,seen:t,focus:n=[]}){return(0,q.jsx)(`div`,{className:`actors`,children:Object.keys(e).filter(t=>e[t].role!==r(`Aucun rôle actif dans cette situation.`)).map(r=>{let i=e[r];return(0,q.jsxs)(`div`,{className:`actor ${n.includes(r)?`actor-focus`:``}`,style:{"--tone":i.color},title:`${i.name} : ${i.role}`,children:[(0,q.jsx)(`span`,{className:`actor-badge`,"aria-hidden":!0,children:i.short}),(0,q.jsx)(`b`,{children:i.name}),t[r]?(0,q.jsx)(`span`,{className:`actor-sees`,children:(0,q.jsx)(J,{text:t[r]})}):(0,q.jsx)(`span`,{className:`actor-role`,children:i.role})]},r)})})}function mt({steps:e}){let[t,n]=(0,G.useState)(null);return(0,q.jsx)(`ol`,{className:`chain`,children:e.map((i,a)=>(0,q.jsxs)(`li`,{children:[(0,q.jsx)(`button`,{type:`button`,className:`chain-step ${t===a?`open`:``}`,onClick:()=>n(t===a?null:a),"aria-expanded":t===a,children:(0,q.jsx)(J,{text:i.text})}),t===a&&(0,q.jsxs)(`p`,{className:`chain-because`,children:[(0,q.jsxs)(`span`,{className:`muted`,children:[r(`parce que`),` `]}),(0,q.jsx)(J,{text:i.because})]}),a<e.length-1&&(0,q.jsx)(`span`,{className:`chain-arrow`,children:(0,q.jsx)(Ze,{size:14})})]},a))})}function ht({q:e,options:t,formula:n,after:r,onDone:i,done:a,seed:o,tags:s,src:c}){let[l,u]=(0,G.useState)(null),[d,f]=(0,G.useState)(0),p=(0,G.useMemo)(()=>ut(t,o),[t,o]),m=()=>{W({tags:s,dim:`formula`,ok:!1,src:c,item:o}),u(p.findIndex(e=>e.correct)),i()},h=e=>{if(a)return;let t=p[e];u(e),W({tags:s,dim:`formula`,ok:!!t.correct,src:c,item:o,mis:t.correct?void 0:t.mis,assisted:d>0}),f(d+1),t.correct&&i()};return(0,q.jsxs)(`div`,{className:`reveal`,children:[(0,q.jsx)(`p`,{className:`reveal-q`,children:(0,q.jsx)(J,{text:e})}),!a&&(0,q.jsx)(`div`,{className:`options`,children:p.map((e,t)=>(0,q.jsx)(`button`,{type:`button`,className:`option ${l===t?e.correct?`right`:`wrong`:``}`,onClick:()=>h(t),children:(0,q.jsx)(J,{text:e.text})},t))}),l!==null&&!p[l].correct&&!a&&(0,q.jsx)(`p`,{className:`feedback bad`,role:`status`,children:(0,q.jsx)(J,{text:p[l].feedback})}),!a&&(0,q.jsx)(_t,{onClick:m}),a&&(0,q.jsxs)(`div`,{className:`reveal-reward`,children:[(0,q.jsx)(Y,{f:n,block:!0}),r&&(0,q.jsx)(`p`,{className:`muted small`,children:(0,q.jsx)(J,{text:r})})]})]})}function gt({check:e,onPass:t,onResult:n,src:i,cursor:a,passed:o}){let[s,c]=(0,G.useState)(0),[l,u]=(0,G.useState)(o?{ok:!0,text:r(`Déjà réussi.`)}:null),[d,f]=(0,G.useState)(``),[p,m]=(0,G.useState)([]),h=l?.ok===!0,g=(0,G.useMemo)(()=>e.kind===`order`?ut(e.items,e.id):e.kind===`build`?ut([...new Set(e.tokens)],e.id):[],[e]),_=(0,G.useMemo)(()=>e.kind===`choice`?ut(e.options,e.id):[],[e]),v=(r,a,o)=>{W({tags:e.tags,dim:e.dim,ok:r,src:i,item:e.id,mis:r?void 0:o,assisted:r&&s>0}),c(s+1),u({ok:r,text:a}),n?.(r),r&&t()},y=t=>e.explain?`${t} ${e.explain}`:t;return(0,q.jsxs)(`div`,{className:`check ${h?`check-done`:``}`,children:[(0,q.jsxs)(`p`,{className:`check-q`,children:[(0,q.jsx)(J,{text:e.q}),` `,(0,q.jsx)(`span`,{className:`check-dim`,children:se.find(t=>t.id===e.dim)?.label})]}),e.kind===`choice`&&(0,q.jsx)(`div`,{className:`options`,children:_.map((e,t)=>(0,q.jsx)(`button`,{type:`button`,disabled:h,className:`option ${h&&e.correct?`right`:``}`,onClick:()=>v(!!e.correct,e.feedback,e.mis),children:(0,q.jsx)(J,{text:e.text})},t))}),e.kind===`numeric`&&(0,q.jsxs)(`form`,{className:`numrow`,onSubmit:t=>{t.preventDefault();let n=dt(d);if(!isFinite(n))return u({ok:!1,text:r(`Entre un nombre.`)});let i=e.tol??Math.max(.01,Math.abs(e.answer)*.005);if(Math.abs(n-e.answer)<=i)return v(!0,y(r(`Exact.`)));let a=e.traps?.find(e=>Math.abs(e.value-n)<=i);v(!1,a?a.feedback:s>=1&&e.hint?r(`Pas encore. Indice : {h}`,{h:e.hint}):r(`Pas encore — refais le raisonnement.`),a?.mis)},children:[(0,q.jsx)(`input`,{inputMode:`decimal`,value:d,disabled:h,onChange:e=>f(e.target.value),"aria-label":r(`Ta réponse`),placeholder:r(`ta réponse`)}),e.unit&&(0,q.jsx)(`span`,{className:`muted`,children:e.unit}),(0,q.jsx)(`button`,{type:`submit`,className:`primary`,disabled:h||!d.trim(),children:r(`Vérifier`)})]}),e.kind===`pick`&&(0,q.jsxs)(`div`,{className:`numrow`,children:[(0,q.jsxs)(`span`,{children:[r(`Curseur :`),` `,(0,q.jsxs)(`b`,{children:[`Q = `,a?.toFixed(1)]})]}),(0,q.jsx)(`button`,{type:`button`,className:`primary`,disabled:h,onClick:()=>{let t=a!==void 0&&Math.abs(a-e.target)<=e.tol;v(t,t?y(r(`Exact.`)):r(`Pas là : cherche l’intersection des courbes concernées.`))},children:r(`Valider la position`)})]}),e.kind===`order`&&(0,q.jsxs)(`div`,{className:`order`,children:[(0,q.jsx)(`div`,{className:`options`,children:g.map(e=>{let t=p.indexOf(e);return(0,q.jsxs)(`button`,{type:`button`,disabled:h||t>=0,className:`option ${t>=0?`chosen`:``}`,onClick:()=>m([...p,e]),children:[t>=0&&(0,q.jsx)(`span`,{className:`order-n`,children:t+1}),(0,q.jsx)(J,{text:e})]},e)})}),(0,q.jsxs)(`div`,{className:`row`,children:[(0,q.jsx)(`button`,{type:`button`,className:`ghost`,disabled:h||!p.length,onClick:()=>{m([]),u(null)},children:`Recommencer`}),(0,q.jsx)(`button`,{type:`button`,className:`primary`,disabled:h||p.length!==e.items.length,onClick:()=>{let t=p.findIndex((t,n)=>t!==e.items[n]);t<0?v(!0,y(r(`Chaîne correcte : chaque maillon cause le suivant.`))):(v(!1,r(`Le maillon n°{n} n’est pas à sa place : demande-toi ce qui doit être vrai AVANT lui.`,{n:t+1})),m(p.slice(0,t)))},children:r(`Valider l’ordre`)})]})]}),e.kind===`build`&&(0,q.jsxs)(`div`,{className:`build`,children:[(0,q.jsxs)(`div`,{className:`build-line`,children:[(0,q.jsx)(Y,{f:`${/[=:]$/.test(e.lhs.trim())?e.lhs:e.lhs===`Équilibre`?`${e.lhs} :`:`${e.lhs} =`} ${p.join(` `)}`}),` `,(0,q.jsx)(`span`,{className:`caret`})]}),(0,q.jsx)(`div`,{className:`options tokens`,children:g.map(e=>(0,q.jsx)(`button`,{type:`button`,className:`token`,disabled:h,onClick:()=>m([...p,e]),children:e},e))}),(0,q.jsxs)(`div`,{className:`row`,children:[(0,q.jsx)(`button`,{type:`button`,className:`ghost erase`,disabled:h||!p.length,onClick:()=>m(p.slice(0,-1)),"aria-label":r(`Effacer le dernier élément`),children:(0,q.jsx)(nt,{})}),(0,q.jsx)(`button`,{type:`button`,className:`primary`,disabled:h||!p.length,onClick:()=>{let t=e.accept.some(e=>e.join(` `)===p.join(` `)),n=e.traps?.find(e=>e.seq.join(` `)===p.join(` `));v(t,t?y(r(`Reconstruit.`)):n?.feedback??r(`Pas encore : quels acteurs sont concernés ?`),n?.mis),t||m([])},children:r(`Valider`)})]})]}),e.kind===`text`&&!h&&(0,q.jsx)(lt,{rubric:e.rubric,model:e.model,lang:e.lang,onGraded:e=>v(e,r(e?`Les éléments clés sont là.`:`Compare avec la réponse modèle et retiens ce qui manquait.`))}),!h&&(0,q.jsx)(_t,{onClick:()=>{let a=``;if(e.kind===`choice`){let t=e.options.find(e=>e.correct);a=t?`${t.text}. ${t.feedback}`:``}e.kind===`numeric`&&(f(String(e.answer)),a=`${e.answer}${e.unit?` ${e.unit}`:``}. ${e.explain??``}`),e.kind===`pick`&&(a=`Q = ${e.target}. ${e.explain??``}`),e.kind===`order`&&(m(e.items),a=e.explain??``),e.kind===`build`&&(m(e.accept[0]),a=e.explain??``),e.kind===`text`&&(a=e.model),W({tags:e.tags,dim:e.dim,ok:!1,src:i,item:e.id}),u({ok:!0,revealed:!0,text:`${r(`Réponse :`)} ${a}`.trim()}),n?.(!1),t()}}),l&&(0,q.jsx)(`p`,{className:`feedback ${l.revealed?`revealed`:l.ok?`good`:`bad`}`,role:`status`,children:(0,q.jsx)(J,{text:l.text})}),l?.revealed&&(0,q.jsx)(`p`,{className:`small muted`,children:r(`Réponse affichée : la notion reviendra dans tes révisions.`)})]})}function _t({onClick:e}){return(0,q.jsx)(`button`,{type:`button`,className:`link small show-answer`,onClick:e,children:r(`Voir la réponse`)})}function vt({id:e,onResolved:t}){let n=g(e),[i,a]=(0,G.useState)(null),o=(0,G.useMemo)(()=>n?ut(n.check.options,n.id):[],[n]);if(!n)return null;let s=i!==null&&o[i].correct;return(0,q.jsxs)(`div`,{className:`miscard`,children:[(0,q.jsx)(`h3`,{children:n.label}),(0,q.jsx)(`p`,{className:`meta`,children:r(`Micro-leçon · confusion repérée deux fois`)}),(0,q.jsxs)(`div`,{className:`contrast`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`span`,{className:`contrast-term`,children:n.left.term}),(0,q.jsx)(`p`,{children:(0,q.jsx)(J,{text:n.left.text})})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`span`,{className:`contrast-term`,children:n.right.term}),(0,q.jsx)(`p`,{children:(0,q.jsx)(J,{text:n.right.text})})]})]}),(0,q.jsx)(`p`,{children:(0,q.jsx)(J,{text:n.explain})}),(0,q.jsx)(`p`,{className:`check-q`,children:(0,q.jsx)(J,{text:n.check.q})}),(0,q.jsx)(`div`,{className:`options`,children:o.map((e,r)=>(0,q.jsx)(`button`,{type:`button`,disabled:s,className:`option ${i===r?e.correct?`right`:`wrong`:``}`,onClick:()=>{a(r),W({tags:[n.topic],dim:`intuition`,ok:!!e.correct,src:`micro`,item:n.id,mis:e.correct?void 0:n.id}),e.correct&&(de(n.id),t?.())},children:(0,q.jsx)(J,{text:e.text})},r))}),i!==null&&(0,q.jsx)(`p`,{className:`feedback ${s?`good`:`bad`}`,children:(0,q.jsx)(J,{text:o[i].feedback})}),!s&&(0,q.jsx)(_t,{onClick:()=>{W({tags:[n.topic],dim:`intuition`,ok:!1,src:`micro`,item:n.id,mis:n.id}),a(o.findIndex(e=>e.correct))}}),(0,q.jsxs)(`p`,{className:`small muted`,children:[r(`Source :`),` `,n.refs.map(e=>(0,q.jsx)(J,{text:`§${e} `},e))]})]})}function yt({m:e,compact:t}){return(0,q.jsx)(`div`,{className:`mbars ${t?`mbars-compact`:``}`,children:se.map(t=>(0,q.jsxs)(`div`,{className:`mbar`,title:t.hint,children:[(0,q.jsx)(`span`,{className:`mbar-label`,style:{fontWeight:Math.round(300+560*e[t.id])},children:t.label}),(0,q.jsx)(`span`,{className:`mbar-leader`,"aria-hidden":!0}),(0,q.jsxs)(`span`,{className:`mbar-val`,children:[Math.round(e[t.id]*100),` %`]})]},t.id))})}function bt({title:e,children:t}){let n=(0,G.useRef)(null);return(0,G.useEffect)(()=>{n.current?.focus();let e=e=>{e.key===`Escape`&&Me()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[e]),(0,q.jsxs)(`div`,{className:`drawer-root`,children:[(0,q.jsx)(`div`,{className:`backdrop`,onClick:Me}),(0,q.jsxs)(`aside`,{className:`drawer`,role:`dialog`,"aria-modal":`true`,"aria-label":e,children:[(0,q.jsxs)(`header`,{className:`drawer-head`,children:[(0,q.jsx)(`h3`,{children:e}),(0,q.jsx)(`button`,{ref:n,type:`button`,className:`icon-btn`,onClick:Me,"aria-label":r(`Fermer`),children:(0,q.jsx)($e,{size:14})})]}),(0,q.jsx)(`div`,{className:`drawer-body`,children:t})]})]})}function xt({refId:e}){let t=ze(e),n=(0,G.useRef)(null);if((0,G.useEffect)(()=>{n.current?.scrollIntoView({block:`center`})},[e]),!t)return(0,q.jsxs)(`p`,{className:`muted`,children:[r(`Référence introuvable dans le dossier :`),` `,e]});let i=K.lines.slice(t.start,t.end),a=t.hl;return(0,q.jsx)(`div`,{className:`source-text`,children:i.map((e,r)=>{let i=t.start+r,o=a&&i>=a[0]&&i<a[1];return(0,q.jsxs)(`div`,{ref:o&&i===a[0]?n:void 0,className:`sline ${o?`hl`:``}`,children:[(0,q.jsx)(`span`,{className:`lno`,children:i+1}),(0,q.jsx)(`span`,{children:e||`\xA0`})]},i)})})}function St({levels:e}){let[t,n]=(0,G.useState)(`human`);return(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`div`,{className:`seg`,role:`tablist`,children:[`human`,`economist`,`exam`].map(e=>(0,q.jsx)(`button`,{role:`tab`,"aria-selected":t===e,className:t===e?`on`:``,onClick:()=>n(e),children:r(e===`human`?`Humain`:e===`economist`?`Économiste`:`Examen (EN)`)},e))}),(0,q.jsx)(`p`,{className:`level-text`,lang:t===`exam`?`en`:a,children:(0,q.jsx)(J,{text:e[t]})})]})}var $=({title:e,items:t})=>t.length?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`h4`,{children:e}),(0,q.jsx)(`ul`,{children:t.map((e,t)=>(0,q.jsx)(`li`,{children:(0,q.jsx)(J,{text:e})},t))})]}):null;function Ct(){let e=ce();if(!e)return null;if(e.kind===`abbr`){let t=Ve(e.key),n=Be(e.key);return(0,q.jsxs)(bt,{title:e.key,children:[t?(0,q.jsx)(Ge,{k:e.key}):(0,q.jsx)(`p`,{children:r(`Sigle inconnu du dossier.`)}),n&&(0,q.jsxs)(`p`,{className:`small muted`,children:[r(`Dans le répertoire du dossier :`),` `,(0,q.jsx)(`i`,{children:n.names.join(`, `)}),` [`,n.tag,`] — `,n.english,` `,n.english&&`—`,` `,n.french,` `,(0,q.jsx)(X,{r:`18:${e.key}`}),(0,q.jsx)(`br`,{}),r(`[O] observé dans les PDF · [A] alias standard · [C] complément ajouté (§18)`)]}),t?.concept&&_[t.concept]&&(0,q.jsxs)(`button`,{type:`button`,className:`primary`,onClick:()=>Ne({kind:`concept`,id:t.concept}),children:[r(`Fiche complète du concept`),` `,(0,q.jsx)(Q,{})]})]})}if(e.kind===`concept`){let t=_[e.id];return t?(0,q.jsxs)(bt,{title:t.name,children:[(0,q.jsxs)(`p`,{className:`muted`,children:[t.englishName,` · `,t.frenchName,t.abbreviation?` · ${t.abbreviation}`:``]}),(0,q.jsxs)(`p`,{children:[(0,q.jsx)(`b`,{children:r(`Littéralement :`)}),` `,(0,q.jsx)(J,{text:t.literalMeaning})]}),(0,q.jsx)(`div`,{className:`chips`,children:t.actors.map(e=>(0,q.jsx)(`span`,{className:`chip`,style:{"--tone":f.actors[e].color},children:f.actors[e].name},e))}),(0,q.jsx)(`h4`,{children:r(`Intuition`)}),(0,q.jsx)(`p`,{children:(0,q.jsx)(J,{text:t.intuition})}),(0,q.jsx)(`h4`,{children:r(`Trois niveaux`)}),(0,q.jsx)(St,{levels:t.levels}),(0,q.jsx)(`h4`,{children:r(`Chaîne causale`)}),(0,q.jsx)(`p`,{className:`causal-inline`,children:t.causalChain.map((e,t)=>(0,q.jsxs)(`span`,{children:[t>0&&` → `,(0,q.jsx)(J,{text:e})]},t))}),t.formula&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`h4`,{children:r(`Formule`)}),t.formula.map(e=>(0,q.jsx)(Y,{f:e,block:!0},e))]}),t.units&&(0,q.jsxs)(`p`,{children:[(0,q.jsx)(`b`,{children:r(`Unités :`)}),` `,t.units]}),t.graphMeaning&&(0,q.jsxs)(`p`,{children:[(0,q.jsx)(`b`,{children:r(`Sur le graphique :`)}),` `,(0,q.jsx)(J,{text:t.graphMeaning})]}),(0,q.jsx)($,{title:r(`Hypothèses`),items:t.assumptions}),(0,q.jsx)($,{title:r(`Quand l’utiliser`),items:t.whenToUse}),(0,q.jsx)($,{title:r(`Quand NE PAS l’utiliser`),items:t.whenNotToUse}),(0,q.jsx)($,{title:r(`Confusions fréquentes`),items:t.misconceptions.map(e=>g(e)?.label??e)}),(0,q.jsx)($,{title:r(`Exemples`),items:t.examples}),(0,q.jsx)($,{title:r(`Mots déclencheurs à l’examen`),items:t.examTriggers}),(0,q.jsx)(`h4`,{children:r(`Réponse type (EN)`)}),(0,q.jsx)(`blockquote`,{className:`model`,lang:`en`,children:t.examAnswer}),(0,q.jsxs)(`p`,{className:`small`,children:[r(`Sources :`),` `,t.sourceRefs.map(e=>(0,q.jsx)(X,{r:e},e))]})]}):null}if(e.kind===`formula`){let t=S.find(t=>t.id===e.id);return t?(0,q.jsxs)(bt,{title:t.title,children:[(0,q.jsx)(Y,{f:t.formula,block:!0}),(0,q.jsx)(`h4`,{children:r(`D’où vient-elle ?`)}),(0,q.jsx)(`ol`,{children:t.derivation.map((e,t)=>(0,q.jsx)(`li`,{children:(0,q.jsx)(J,{text:e})},t))}),(0,q.jsx)(`h4`,{children:r(`Chaque terme`)}),(0,q.jsx)(`ul`,{children:t.terms.map(e=>(0,q.jsxs)(`li`,{children:[(0,q.jsx)(Y,{f:e.sym}),` — `,(0,q.jsx)(J,{text:e.meaning})]},e.sym))}),(0,q.jsxs)(`p`,{children:[(0,q.jsx)(`b`,{children:r(`Unités :`)}),` `,t.units]}),(0,q.jsx)($,{title:r(`Hypothèses`),items:t.assumptions}),(0,q.jsx)($,{title:r(`Quand l’utiliser`),items:t.use}),(0,q.jsx)($,{title:r(`Quand NE PAS l’utiliser`),items:t.notUse}),(0,q.jsx)(`h4`,{children:r(`Confusion fréquente`)}),(0,q.jsx)(`p`,{children:(0,q.jsx)(J,{text:t.confusion})}),(0,q.jsx)($,{title:r(`Mots déclencheurs`),items:t.triggers}),(0,q.jsxs)(`p`,{className:`small`,children:[r(`Sources :`),` `,t.refs.map(e=>(0,q.jsx)(X,{r:e},e))]})]}):null}if(e.kind===`why`){let t=E[e.id];return t?(0,q.jsxs)(bt,{title:t.title,children:[t.formula&&(0,q.jsx)(Y,{f:t.formula,block:!0}),(0,q.jsx)(ft,{layers:t.layers,start:1},t.id),(0,q.jsxs)(`p`,{className:`small`,children:[r(`Sources :`),` `,t.refs.map(e=>(0,q.jsx)(X,{r:e},e))]})]}):null}let t=ze(e.ref);return(0,q.jsxs)(bt,{title:t?t.title:`§${e.ref}`,children:[(0,q.jsxs)(`p`,{className:`small muted`,children:[r(`Extrait exact du dossier (fichier source).`),` `,(0,q.jsx)(`a`,{href:`#/source/${encodeURIComponent(e.ref)}`,onClick:Me,children:r(`Ouvrir dans Sources`)})]}),(0,q.jsx)(xt,{refId:e.ref})]})}var wt={intuition:{href:`#/learn`,text:r(`Refais le teach-back : explique la chaîne sans regarder.`)},terminology:{href:`#/recall`,text:r(`Rappel rapide : décode les sigles sans aide.`)},formula:{href:`#/recall`,text:r(`Révision espacée : reconstruis la relation économique à partir du mécanisme.`)},graph:{href:`#/lab`,text:r(`Graph Lab : clique les zones et explique chaque tranche.`)},calculation:{href:`#/practice`,text:r(`Pratique : un exercice généré, chiffres nouveaux.`)},recognition:{href:`#/recognize`,text:r(`Reconnaître le modèle dans des énoncés variés.`)},english:{href:`#/exam`,text:r(`Mode examen : réponse SSE en anglais.`)}};function Tt(e){let t=[],n=De(e);n.length&&t.push({title:r(`Micro-leçon : {x}`,{x:g(n[0])?.label??n[0]}),text:r(`Même confusion deux fois : deux minutes pour la défaire.`),href:`#/mistakes`,tone:`warn`});let i=ve(e);if(i.length){let n=P[i[0]];n&&t.push({title:r(`Rappel espacé dû`),text:r(`{m} — niveau {n}/5 : reconstruire, pas réciter.`,{m:n.mechanism,n:e.reviews[i[0]].level}),href:`#/recall`})}for(let n of Object.values(P)){let i=U(e,n.id);if(!i.startedAt)t.push({title:r(`Commencer : {m}`,{m:n.mechanism}),text:n.teaser,href:`#/lesson/${n.id}`});else if(!i.finishedAt)t.push({title:r(`Continuer : {m}`,{m:n.mechanism}),text:r(`Bloc {i} / {n}`,{i:i.block+1,n:n.blocks.length}),href:`#/lesson/${n.id}`});else{let i=V(e,[n.node]),a=se.reduce((e,t)=>i[t.id]<i[e.id]?t:e,se[0]);he(i)||t.push({title:r(`Point faible : {x}`,{x:a.label}),text:wt[a.id].text,href:a.id===`graph`||a.id===`calculation`?`#/lesson/${n.id}`:wt[a.id].href})}}return t.push({title:r(`Reconnaître le modèle`),text:r(`22 contextes tirés des finals 2020–2025 : qui décide, quoi, avec quelle information ?`),href:`#/recognize`}),t}var Et=864e5,Dt=e=>`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`;function Ot(){let[e,t]=(0,G.useState)(()=>Date.now());return(0,G.useEffect)(()=>{let e=setInterval(()=>t(Date.now()),6e4);return()=>clearInterval(e)},[]),e}function kt({p:e,now:t}){let n=Math.max(0,B.getTime()-t),i=Math.floor(n/Et),o=Math.floor(n%Et/36e5),s=Math.floor(n%36e5/6e4),c=new Set(e.attempts.map(e=>Dt(new Date(e.t)))),l=new Date(t);l.setHours(0,0,0,0);let u=[];for(let e=new Date(l);e<=B&&u.length<21;e=new Date(e.getTime()+Et))u.push(e);let d=new Intl.DateTimeFormat(a,{weekday:`narrow`}),f=new Intl.DateTimeFormat(a,{weekday:`long`,day:`numeric`,month:`long`}),p=new Intl.DateTimeFormat(a,{hour:`2-digit`,minute:`2-digit`}),m=e=>Dt(e)===Dt(B);return(0,q.jsxs)(`section`,{className:`countdown`,"aria-labelledby":`cd-title`,children:[(0,q.jsx)(`h2`,{id:`cd-title`,className:`sr-only`,children:r(`Final BE501`)}),n>0?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`p`,{className:`cd-big`,children:[(0,q.jsx)(`span`,{className:`cd-num`,children:i}),(0,q.jsx)(`span`,{className:`cd-unit`,children:r(`jours avant le final`)})]}),(0,q.jsx)(`p`,{className:`cd-rest`,children:r(`{h} h {m} min`,{h:o,m:s})})]}):(0,q.jsx)(`p`,{className:`cd-big`,children:(0,q.jsx)(`span`,{className:`cd-unit`,children:r(`Jour du final`)})}),(0,q.jsxs)(`p`,{className:`cd-when`,children:[r(`Final BE501`),` · `,f.format(B),` · `,p.format(B)]}),(0,q.jsx)(`ol`,{className:`cd-days`,"aria-label":r(`Jours restants`),children:u.map((e,t)=>(0,q.jsxs)(`li`,{className:`${t===0?`today`:``} ${m(e)?`exam`:``} ${c.has(Dt(e))?`done`:``}`,title:f.format(e),children:[(0,q.jsx)(`span`,{children:d.format(e)}),(0,q.jsx)(`b`,{children:e.getDate()})]},t))})]})}function At({p:e,now:t}){let n=Object.values(P),i=n.filter(t=>U(e,t.id).finishedAt).length,a=e.attempts.filter(e=>e.t>t-7*Et&&!e.assisted),o=a.length?Math.round(100*a.filter(e=>e.ok).length/a.length):null,s=new Set(e.attempts.map(e=>Dt(new Date(e.t)))).size;return(0,q.jsxs)(`section`,{className:`progress-panel`,"aria-labelledby":`pg-title`,children:[(0,q.jsxs)(`div`,{className:`pg-main`,children:[(0,q.jsxs)(`div`,{className:`pg-head`,children:[(0,q.jsx)(`h2`,{id:`pg-title`,children:r(`Ta progression`)}),(0,q.jsxs)(`p`,{children:[(0,q.jsx)(`b`,{children:i}),` / `,n.length,` `,r(`leçons terminées`)]})]}),(0,q.jsx)(`ol`,{className:`pg-lessons`,style:{gridTemplateColumns:`repeat(${n.length}, 1fr)`},children:n.map(t=>{let n=U(e,t.id),r=n.finishedAt?`done`:n.startedAt?`started`:``;return(0,q.jsx)(`li`,{children:(0,q.jsx)(`a`,{href:`#/lesson/${t.id}`,className:r,title:t.mechanism,"aria-label":t.mechanism})},t.id)})}),(0,q.jsxs)(`dl`,{className:`pg-facts`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`dt`,{children:r(`Révisions dues`)}),(0,q.jsx)(`dd`,{children:ve(e,t).length})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`dt`,{children:r(`Jours actifs`)}),(0,q.jsx)(`dd`,{children:s})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`dt`,{children:r(`Réponses justes (7 jours)`)}),(0,q.jsx)(`dd`,{children:o===null?`—`:`${o} %`})]})]})]}),(0,q.jsxs)(`div`,{className:`pg-mastery`,children:[(0,q.jsx)(`h3`,{className:`pg-sub`,children:r(`Maîtrise moyenne, tous thèmes`)}),(0,q.jsx)(yt,{compact:!0,m:V(e,n.map(e=>e.node))})]})]})}function jt(){let e=H(),t=Ot(),n=ge().user?.name.split(` `)[0],i=Tt(e),a=Object.values(P),o=a.find(t=>U(e,t.id).startedAt&&!U(e,t.id).finishedAt)??a.find(t=>!U(e,t.id).finishedAt)??P[`ext-positive`],s=U(e,o.id).startedAt>0;return(0,q.jsxs)(`div`,{className:`page home`,children:[(0,q.jsxs)(`div`,{className:`home-top`,children:[(0,q.jsxs)(`header`,{className:`home-hello`,children:[(0,q.jsx)(`h1`,{className:n?``:`long`,children:n?r(`Salut {name}.`,{name:n}):r(`La microéconomie, un mécanisme à la fois.`)}),(0,q.jsx)(`p`,{className:`home-next-label`,children:r(s?`Continuer la leçon`:`Commencer la leçon`)}),(0,q.jsxs)(`a`,{className:`home-next`,href:`#/lesson/${o.id}`,children:[(0,q.jsx)(`b`,{children:o.mechanism}),(0,q.jsx)(`span`,{children:o.teaser}),(0,q.jsx)(Q,{})]})]}),(0,q.jsx)(kt,{p:e,now:t})]}),(0,q.jsx)(At,{p:e,now:t}),(0,q.jsxs)(`section`,{className:`next`,children:[(0,q.jsx)(`h2`,{children:r(`Ensuite`)}),(0,q.jsx)(`ol`,{className:`steps`,children:i.slice(0,5).map((e,t)=>(0,q.jsx)(`li`,{children:(0,q.jsxs)(`a`,{href:e.href,className:`step ${e.tone??``}`,children:[(0,q.jsx)(`b`,{children:e.title}),(0,q.jsx)(`span`,{children:e.text}),(0,q.jsx)(Q,{})]})},t))}),(0,q.jsx)(`p`,{className:`small`,children:(0,q.jsx)(`a`,{href:`#/learn`,children:r(`Voir les 13 thèmes et leurs leçons guidées`)})})]}),(0,q.jsxs)(`section`,{className:`card subtle`,children:[(0,q.jsx)(`h2`,{children:r(`Comment ce labo fonctionne`)}),(0,q.jsxs)(`ul`,{className:`plain`,children:[(0,q.jsx)(`li`,{children:(0,q.jsx)(J,{text:r(`**Situation → acteurs → incitations → conséquence → nom → sigle → formule → graphique → examen.** Toujours dans cet ordre.`)})}),(0,q.jsx)(`li`,{children:r(`Chaque sigle est cliquable : nom anglais, traduction, sens littéral, qui est concerné, unités.`)}),(0,q.jsx)(`li`,{children:r(`Les formules apparaissent après que tu as trouvé leur logique — comme une récompense, pas comme un point de départ.`)}),(0,q.jsx)(`li`,{children:r(`Tout chiffre renvoie au dossier : Documenté, Recalculé (dossier) ou Complément pédagogique.`)})]})]})]})}function Mt(e,t,n){let r=e.kind===`positive`,i=e=>t.includes(e),a=t=>r?N(e,t):z(e,t),o=i(`POL`)&&n>0&&i(r?`MSB`:`MSC`)&&[0,e.qMax/2,e.qMax].every(t=>Math.abs(k(e,t,n)-a(t))<.25),s=[];return i(`MPB`)&&s.push({id:`MPB`,label:!r&&i(`MSC`)?`MPB = MSB`:`MPB`,color:`var(--buyer)`,f:t=>L(e,t),why:`c:MPB`}),i(`MPC`)&&s.push({id:`MPC`,label:r&&i(`MSB`)?`MPC = MSC`:`MPC`,color:`var(--producer)`,f:t=>O(e,t),why:`c:MPC`}),r&&i(`MEB`)&&s.push({id:`MEB`,label:`MEB`,color:`var(--third)`,f:t=>D(e,t),dash:`5 4`,why:`c:MEB`}),!r&&i(`MEC`)&&s.push({id:`MEC`,label:`MEC`,color:`var(--third)`,f:t=>F(e,t),dash:`5 4`,why:`c:MEC`}),r&&i(`MSB`)&&s.push({id:`MSB`,label:o?`MSB = MPB + s`:`MSB`,color:`var(--society)`,f:t=>N(e,t),why:`c:MSB`}),!r&&i(`MSC`)&&s.push({id:`MSC`,label:o?`MSC = MPC + t`:`MSC`,color:`var(--society)`,f:t=>z(e,t),why:`c:MSC`}),i(`POL`)&&n>0&&s.push({id:`POL`,label:r?`MPB + s`:`MPC + t`,color:r?`var(--buyer)`:`var(--producer)`,f:t=>k(e,t,n),dash:o?`6 6`:`7 5`,thin:o,noLabel:o,why:r?`c:POL+`:`c:POL-`}),s}var Nt=e=>{let t=e/7,n=10**Math.floor(Math.log10(t)),r=t/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n};function Pt(){let e=(0,G.useRef)(null),[t,n]=(0,G.useState)(640);return(0,G.useEffect)(()=>{let t=e.current;if(!t)return;let r=new ResizeObserver(([e])=>n(Math.max(280,Math.round(e.contentRect.width))));return r.observe(t),()=>r.disconnect()},[]),[e,t]}function Ft(e,t,n,i){let a=e.kind===`positive`,o=L(e,t)+(a?n:0),s=O(e,t)+(a?0:n),c=o>=s-1e-9,l=a&&n?` `+r(`(subvention comprise)`):``,u=!a&&n?` `+r(`(taxe comprise)`):``,d=[r(c?`Échangée : elle vaut {b} pour l’acheteur{sub} et coûte {c}{tax} au vendeur.`:`Pas échangée : l’acheteur ne paierait que {b}{sub} pour un coût de {c}{tax}.`,{b:M(o),sub:l,c:M(s),tax:u})];if(i){let n=N(e,t)-z(e,t);d.push(r(`Pour la société : valeur {v} − coût {c} = {g}.`,{v:M(N(e,t)),c:M(z(e,t)),g:`${n>=0?`+`:``}${M(n)}`})),!c&&n>1e-9&&d.push(r(`⇒ Unité manquante : la société perd {g} € parce qu’elle n’est pas produite.`,{g:M(n)})),c&&n<-1e-9&&d.push(r(`⇒ Unité en trop : elle détruit {g} € de bien-être.`,{g:M(-n)}))}return d}function It({model:e,show:t,focus:n,policy:a,cursor:o,onCursor:s,selected:c,onSelect:l,fresh:u=[],animKey:d=``}){let[f,p]=Pt(),m=Math.round(Math.min(480,Math.max(290,p*.64))),h=p<480?58:76,g=p-50-h,_=m-14-60,v=t.includes(`POL`)?a:0,y=e.kind===`positive`,b=(0,G.useMemo)(()=>ie(e,v),[e,v]),x=Mt(e,t,v),S=t=>50+t/e.qMax*g,C=t=>14+_-t/e.pMax*_,w=e=>t.includes(e),T=(e,t=``)=>`${t} ${n===e?`pulse`:``} ${u.includes(e)?`fresh`:``}`.trim(),E=e=>u.includes(e)?`${e}-${d}`:e,ee=(t,n=0,r=e.qMax,i=120)=>{let a=[];for(let o=0;o<=i;o++){let s=n+(r-n)*o/i,c=t(s);c<-1e-9||c>e.pMax*1.04||a.push(`${S(s).toFixed(1)},${C(c).toFixed(1)}`)}return a.length>1?`M${a.join(`L`)}`:``},k=(e,t,n,r)=>{if(r-n<1e-6)return``;let i=[],a=[];for(let o=0;o<=40;o++){let s=n+(r-n)*o/40;i.push(`${S(s).toFixed(1)},${C(e(s)).toFixed(1)}`),a.unshift(`${S(s).toFixed(1)},${C(t(s)).toFixed(1)}`)}return`M${i.join(`L`)}L${a.join(`L`)}Z`},A=b.now.q,j=b.qStar,te=Math.min(A,j),ne=Math.max(A,j),re=A<j,P=re?t=>N(e,t):t=>z(e,t),I=re?t=>z(e,t):t=>N(e,t),R=[];if(w(`UNITS`))for(let e=Math.floor(te)+1;e<=ne+1e-9;e++)R.push(e);let ae=Nt(e.qMax),B=Nt(e.pMax),oe=[],se=[];for(let t=0;t<=e.qMax+1e-9;t+=ae)oe.push(t);for(let t=0;t<=e.pMax+1e-9;t+=B)se.push(t);let ce=(t,n)=>{let r=(t-n.getBoundingClientRect().left-50)/g*e.qMax;return Math.max(0,Math.min(e.qMax,Math.round(r*10)/10))},le=x.filter(e=>!e.noLabel).map(t=>{let n=e.qMax;for(;n>0&&(t.f(n)<0||t.f(n)>e.pMax);)n-=e.qMax/200;let r=S(n),i=r+6+t.label.length*7.4<=p-2;return{c:t,lx:i?r+6:p-2,anchor:i?`start`:`end`,ly:Math.min(C(t.f(n))+4,C(0)-6)}}).sort((e,t)=>t.ly-e.ly);for(let e=1;e<le.length;e++)le[e-1].ly-le[e].ly<14&&(le[e].ly=le[e-1].ly-14);let ue=S(o),de=(e,t,n,r,i,a=0)=>(0,q.jsxs)(`g`,{className:T(e,`marker`),onClick:()=>l({kind:`marker`,id:e}),role:`button`,"aria-label":r,children:[(0,q.jsx)(`line`,{x1:S(t),x2:S(t),y1:C(0),y2:C(n),stroke:i,strokeDasharray:`3 4`,strokeWidth:1.3}),(0,q.jsx)(`line`,{x1:S(0),x2:S(t),y1:C(n),y2:C(n),stroke:i,strokeDasharray:`3 4`,strokeWidth:1,opacity:.6}),(0,q.jsx)(`circle`,{cx:S(t),cy:C(n),r:5,fill:`var(--surface)`,stroke:i,strokeWidth:2}),(0,q.jsx)(`text`,{x:S(t),y:C(0)+30+a*13,textAnchor:`middle`,className:`g-mlabel`,fill:i,children:r}),(0,q.jsx)(`text`,{x:S(0)-6,y:C(n)+4,textAnchor:`end`,className:`g-tick`,fill:i,children:M(n,1)})]},E(e));return(0,q.jsx)(`div`,{className:`graph`,ref:f,children:(0,q.jsxs)(`svg`,{width:p,height:m,viewBox:`0 0 ${p} ${m}`,className:`graph-svg`,role:`img`,"aria-label":`Graphique : ${x.map(e=>e.label).join(`, `)||`axes vides`}`,onPointerMove:e=>s(ce(e.clientX,e.currentTarget)),onPointerDown:e=>s(ce(e.clientX,e.currentTarget)),children:[(0,q.jsxs)(`defs`,{children:[(0,q.jsx)(`pattern`,{id:`hatch`,width:`7`,height:`7`,patternUnits:`userSpaceOnUse`,patternTransform:`rotate(45)`,children:(0,q.jsx)(`line`,{x1:`0`,y1:`0`,x2:`0`,y2:`7`,stroke:`var(--dwl)`,strokeWidth:`2`,opacity:`0.5`})}),(0,q.jsx)(`marker`,{id:`arrow`,viewBox:`0 0 10 10`,refX:`8`,refY:`5`,markerWidth:`7`,markerHeight:`7`,orient:`auto-start-reverse`,children:(0,q.jsx)(`path`,{d:`M0,0 L10,5 L0,10 z`,fill:`var(--third)`})})]}),se.map(e=>(0,q.jsxs)(`g`,{children:[(0,q.jsx)(`line`,{x1:50,x2:50+g,y1:C(e),y2:C(e),className:`g-grid`}),(0,q.jsx)(`text`,{x:42,y:C(e)+4,textAnchor:`end`,className:`g-tick`,children:M(e)})]},`p${e}`)),oe.map(e=>(0,q.jsx)(`text`,{x:S(e),y:C(0)+16,textAnchor:`middle`,className:`g-tick`,children:M(e)},`q${e}`)),(0,q.jsx)(`line`,{x1:50,x2:50+g,y1:C(0),y2:C(0),className:`g-axis`}),(0,q.jsx)(`line`,{x1:50,x2:50,y1:14,y2:C(0),className:`g-axis`}),(0,q.jsx)(`text`,{x:50+g+8,y:C(0)+4,className:`g-axlabel`,"aria-label":r(`Q, en {u}`,{u:e.unit}),children:`Q`}),(0,q.jsx)(`text`,{x:10,y:18,className:`g-axlabel`,children:i(`€ / unité`)}),w(`CS`)&&(0,q.jsx)(`path`,{d:k(t=>L(e,t),()=>b.now.pBuyer,0,A),className:T(`CS`,`area area-cs`),onClick:()=>l({kind:`area`,id:`CS`})},E(`CS`)),w(`PS`)&&(0,q.jsx)(`path`,{d:k(()=>b.now.pSeller,t=>O(e,t),0,A),className:T(`PS`,`area area-ps`),onClick:()=>l({kind:`area`,id:`PS`})},E(`PS`)),w(`EXT`)&&(0,q.jsx)(`path`,{d:k(t=>y?D(e,t):F(e,t),()=>0,0,A),className:T(`EXT`,`area area-ext`),onClick:()=>l({kind:`area`,id:`EXT`})},E(`EXT`)),w(`GOV`)&&v>0&&(0,q.jsx)(`path`,{d:k(()=>Math.max(b.now.pBuyer,b.now.pSeller),()=>Math.min(b.now.pBuyer,b.now.pSeller),0,A),className:T(`GOV`,`area area-gov`),onClick:()=>l({kind:`area`,id:`GOV`})},E(`GOV`)),w(`DWL`)&&ne-te>1e-6&&(0,q.jsxs)(`g`,{className:T(`DWL`,`area-dwl`),onClick:()=>l({kind:`area`,id:`DWL`}),children:[(0,q.jsx)(`path`,{d:k(P,I,te,ne),className:`area area-dwl-fill`}),(0,q.jsx)(`path`,{d:k(P,I,te,ne),fill:`url(#hatch)`})]},E(`DWL`)),w(`QM`)&&de(`QM`,b.market.q,b.market.pBuyer,`Qm = ${M(b.market.q)}`,`var(--ink-2)`),w(`QS`)&&de(`QS`,j,y?N(e,j):L(e,j),`Q* = ${M(j)}`,`var(--society)`,1),w(`QP`)&&v>0&&Math.abs(A-j)>.05&&de(`QP`,A,y?O(e,A):L(e,A),`Q = ${M(A)}`,y?`var(--buyer)`:`var(--producer)`,2),w(`PRICES`)&&v>0&&(0,q.jsxs)(`g`,{className:T(`PRICES`,`marker`),onClick:()=>l({kind:`marker`,id:`PRICES`}),children:[(0,q.jsx)(`line`,{x1:S(0),x2:S(A),y1:C(b.now.pBuyer),y2:C(b.now.pBuyer),stroke:`var(--buyer)`,strokeWidth:1.4,strokeDasharray:`2 3`}),(0,q.jsx)(`line`,{x1:S(0),x2:S(A),y1:C(b.now.pSeller),y2:C(b.now.pSeller),stroke:`var(--producer)`,strokeWidth:1.4,strokeDasharray:`2 3`}),(0,q.jsxs)(`text`,{x:S(0)+6,y:C(b.now.pBuyer)+(b.now.pBuyer<b.now.pSeller?14:-5),className:`g-mlabel`,fill:`var(--buyer)`,children:[`p_b = `,M(b.now.pBuyer)]}),(0,q.jsxs)(`text`,{x:S(0)+6,y:C(b.now.pSeller)+(b.now.pBuyer<b.now.pSeller?-5:14),className:`g-mlabel`,fill:`var(--producer)`,children:[`p_s = `,M(b.now.pSeller)]})]},E(`PRICES`)),x.map(e=>(0,q.jsxs)(`g`,{className:T(e.id,`curve`),onClick:()=>l({kind:`curve`,id:e.id}),role:`button`,"aria-label":`Courbe ${e.label}`,children:[(0,q.jsx)(`path`,{d:ee(e.f),stroke:e.color,strokeDasharray:e.dash,pathLength:e.dash?void 0:1,className:`curve-line ${e.dash?`dashed`:`drawable`} ${e.thin?`thin`:``}`}),(0,q.jsx)(`path`,{d:ee(e.f),className:`curve-hit`})]},E(e.id))),le.map(({c:e,lx:t,anchor:n,ly:r})=>(0,q.jsx)(`text`,{x:t,y:r,className:`g-clabel`,fill:e.color,textAnchor:n,onClick:()=>l({kind:`curve`,id:e.id}),children:e.label},`l-${e.id}`)),R.map(e=>{let t=Math.max(P(e),I(e)),i=Math.min(P(e),I(e)),a=c?.kind===`unit`&&Math.abs(c.q-e)<1e-9;return(0,q.jsxs)(`g`,{className:`unit ${a?`unit-sel`:``} ${n===`UNITS`?`pulse`:``}`,onClick:t=>{t.stopPropagation(),l({kind:`unit`,q:e}),s(e)},role:`button`,"aria-label":r(`Unité au point {q}`,{q:e}),children:[(0,q.jsx)(`rect`,{x:S(e)-9,y:C(t)-4,width:18,height:Math.max(8,C(i)-C(t)+8),fill:`transparent`}),t-i>1e-6?(0,q.jsx)(`line`,{x1:S(e),x2:S(e),y1:C(t),y2:C(i),className:`unit-bar`}):(0,q.jsx)(`circle`,{cx:S(e),cy:C(t),r:3,className:`unit-dot`})]},`u${e}`)}),(0,q.jsx)(`line`,{x1:ue,x2:ue,y1:14,y2:C(0),className:`g-cursor`}),y&&w(`MEB`)&&w(`MSB`)&&w(`MPB`)&&D(e,o)>.5&&(0,q.jsxs)(`g`,{className:`meb-arrow`,children:[(0,q.jsx)(`line`,{x1:ue+10,x2:ue+10,y1:C(L(e,o)),y2:C(N(e,o))+3,stroke:`var(--third)`,strokeWidth:1.6,markerEnd:`url(#arrow)`}),(0,q.jsxs)(`text`,{x:ue+15,y:(C(L(e,o))+C(N(e,o)))/2+4,className:`g-mlabel`,fill:`var(--third)`,children:[`+`,M(D(e,o))]})]}),x.map(t=>{let n=t.f(o);return n<0||n>e.pMax?null:(0,q.jsx)(`circle`,{cx:ue,cy:C(n),r:3.5,fill:t.color,className:`g-dot`},`d-${t.id}`)})]})})}function Lt({model:e,show:t,policy:n,cursor:a,selected:o,onClear:s}){let c=t.includes(`POL`)?n:0,l=e.kind===`positive`,u=ie(e,c),d=Mt(e,t,c),f=l?t.includes(`MSB`):t.includes(`MSC`);if(!o)return(0,q.jsxs)(`div`,{className:`inspector`,children:[(0,q.jsxs)(`div`,{className:`insp-head`,children:[(0,q.jsxs)(`span`,{className:`insp-q`,children:[`Q = `,M(a,1)]}),(0,q.jsx)(`span`,{className:`muted small`,children:r(`Déplace le curseur · clique une courbe, une zone ou une barre`)})]}),d.length>0&&(0,q.jsx)(`div`,{className:`readout`,children:d.map(e=>(0,q.jsxs)(`span`,{className:`readout-item`,children:[(0,q.jsx)(`i`,{style:{background:e.color}}),e.label,` `,(0,q.jsx)(`b`,{children:M(e.f(a))})]},e.id))}),t.includes(`MPB`)&&t.includes(`MPC`)&&(0,q.jsx)(`ul`,{className:`story`,children:Ft(e,a,c,f).map((e,t)=>(0,q.jsx)(`li`,{children:e},t))})]});let p=``,m=``,h=``,g=``,_=[];if(o.kind===`curve`){let e=d.find(e=>e.id===o.id),t=b[o.id];p=e?.label??o.id,m=o.id===`POL`?r(l?`Ce que vaut une unité de plus pour le portefeuille de l’acheteur une fois la subvention versée : MPB + s.`:`Ce que coûte une unité de plus au producteur une fois la taxe payée : MPC + t.`):t?`${t.english} — ${t.french}. ${t.literal}.`:``,h=e?r(`Au point Q = {q} : {v} € par unité.`,{q:M(a,1),v:M(e.f(a))}):``,g=e?.why??``}else if(o.kind===`area`){let t=o.id,n=Math.min(u.now.q,u.qStar),s=Math.max(u.now.q,u.qStar),d=a>=n&&a<=s;if(t===`DWL`){let t=u.now.q<u.qStar;p=i(t?`Perte sèche — unités manquantes`:`Perte sèche — unités en trop`),m=r(t?`Ces unités ne sont pas produites alors que leur bénéfice social dépasse leur coût social.`:`Ces unités sont produites alors que leur coût social dépasse leur bénéfice social.`),h=r(`Aire = {a} € (entre Q = {lo} et Q* = {q}).`,{a:M(u.dwlNow),lo:M(n),q:M(u.qStar)}),_=d?[r(`Tranche au point Q = {q} : |MSB − MSC| = |{b} − {c}| = {g} € perdus sur cette unité.`,{q:M(a,1),b:M(N(e,a)),c:M(z(e,a)),g:M(Math.abs(N(e,a)-z(e,a)))})]:[r(`Place le curseur dans la zone pour voir la tranche d’une unité.`)],g=t?`a:dwl-under`:`a:dwl-over`}else t===`CS`?(p=i(`Surplus du consommateur (CS)`),m=r(`Gain net des acheteurs : pour chaque unité achetée, sa valeur pour l’acheteur moins le prix payé.`),h=r(`Aire = {a} €.`,{a:M(u.now.CS)}),g=`a:cs`,a<=u.now.q&&(_=[r(`Tranche au point {q} : MPB {b} − p_b {p} = {g}.`,{q:M(a,1),b:M(L(e,a)),p:M(u.now.pBuyer),g:M(L(e,a)-u.now.pBuyer)})])):t===`PS`?(p=i(`Surplus du producteur (PS)`),m=r(`Gain net des vendeurs : pour chaque unité vendue, le prix reçu moins son coût marginal.`),h=r(`Aire = {a} €.`,{a:M(u.now.PS)}),g=`a:ps`,a<=u.now.q&&(_=[r(`Tranche au point {q} : p_s {p} − MPC {c} = {g}.`,{q:M(a,1),p:M(u.now.pSeller),c:M(O(e,a)),g:M(u.now.pSeller-O(e,a))})])):t===`GOV`?(p=i(l?`Dépense de subvention`:`Recette fiscale`),m=r(l?`Ce que paient les contribuables : s par unité échangée. Un transfert, pas une destruction.`:`Ce que reçoit l’État : t par unité échangée. Un transfert, pas une perte sèche.`),h=`${M(c)} × ${M(u.now.q)} = ${M(Math.abs(u.now.gov))} €.`,g=l?`a:gov+`:`a:gov-`):t===`EXT`&&(p=i(l?`Bénéfice externe total`:`Dommage externe total`),m=r(l?`Somme des bénéfices reçus par les tiers pour toutes les unités produites (aire sous MEB).`:`Somme des dommages subis par les tiers pour toutes les unités produites (aire sous MEC).`),h=r(`Aire = {a} €.`,{a:M(Math.abs(u.now.ext))}),g=l?`a:ext+`:`a:ext-`)}else o.kind===`marker`?o.id===`QM`?(p=`Qm = ${M(u.market.q)}`,m=r(`Ici MPB = MPC : le dernier échange vaut autant pour l’acheteur qu’il coûte au producteur. Au-delà, MPB < MPC : plus aucun prix n’arrange les deux.`),g=`f:market`):o.id===`QS`?(p=`Q* = ${M(u.qStar)}`,m=r(`Ici MSB = MSC : la dernière unité vaut pour la société exactement ce qu’elle lui coûte. Avant, ajouter augmente le bien-être ; après, le diminue.`),g=`f:opt`):o.id===`QP`?(p=i(`Q avec politique = {q}`,{q:M(u.now.q)}),m=r(l?`Ici MPB + s = MPC : la décision privée subventionnée s’arrête.`:`Ici MPB = MPC + t : la décision privée taxée s’arrête.`),g=l?`c:POL+`:`c:POL-`):o.id===`PRICES`&&(p=`p_b = ${M(u.now.pBuyer)} · p_s = ${M(u.now.pSeller)}`,m=r(l?`L’acheteur paie p_b ; le vendeur reçoit p_s = p_b + s ; l’État paie l’écart.`:`L’acheteur paie p_b ; le vendeur garde p_s = p_b − t ; l’État encaisse l’écart.`),g=`r:gov`):o.kind===`unit`&&(p=i(`Unité au point Q = {q}`,{q:M(o.q)}),m=``,_=Ft(e,o.q,c,!0),g=u.now.q<u.qStar?`a:dwl-under`:`a:dwl-over`);let v=E[g];return(0,q.jsxs)(`div`,{className:`inspector inspector-sel`,children:[(0,q.jsxs)(`div`,{className:`insp-head`,children:[(0,q.jsx)(`b`,{children:p}),(0,q.jsx)(`button`,{type:`button`,className:`icon-btn`,onClick:s,"aria-label":r(`Fermer l’inspecteur`),children:(0,q.jsx)($e,{size:14})})]}),m&&(0,q.jsx)(`p`,{children:(0,q.jsx)(J,{text:m})}),h&&(0,q.jsx)(`p`,{className:`muted`,children:h}),_.length>0&&(0,q.jsx)(`ul`,{className:`story`,children:_.map((e,t)=>(0,q.jsx)(`li`,{children:e},t))}),v&&(0,q.jsx)(ft,{layers:v.layers,label:r(`Pourquoi ?`)},g+p)]})}function Rt({model:e,show:t,policy:n,cursor:i,onPick:a}){let o=t.includes(`POL`)?n:0,s=e.kind===`positive`,c=ie(e,o),l=s?t.includes(`MSB`):t.includes(`MSC`),u=Math.max(1,Math.ceil(Math.floor(e.qMax)/36)),d=Array.from({length:Math.floor(Math.floor(e.qMax)/u)},(e,t)=>(t+1)*u),f=Math.ceil(d.length/18),p={"--w":A(e,o),"--k":560/Math.max(1,e.a-e.c),"--cols":Math.ceil(d.length/f),"--cols-sm":Math.ceil(d.length/Math.ceil(d.length/12))};return(0,q.jsxs)(`div`,{className:`units-wrap`,children:[(0,q.jsxs)(`div`,{className:`units-cap`,children:[(0,q.jsxs)(`span`,{children:[r(`Graisse = incitation privée`),` `,o?s?`(MPB + s − MPC)`:`(MPB − MPC − t)`:`(MPB − MPC)`,u>1?` · ${r(`une unité sur {n}`,{n:u})}`:``]}),l&&(0,q.jsx)(`span`,{children:r(`Souligné : manquante · barré : en trop`)})]}),(0,q.jsx)(`div`,{className:`units`,style:p,role:`group`,"aria-label":r(`Les unités une par une`),children:d.map(t=>{let n=t<=c.now.q+1e-9,o=N(e,t)-z(e,t),s=l&&!n&&o>1e-9,d=l&&n&&o<-1e-9,f=`ucell ${n?`traded`:``} ${s?`missing`:``} ${d?`excess`:``} ${Math.round(i/u)*u===t?`cur`:``}`;return(0,q.jsx)(`button`,{type:`button`,className:f,style:{"--a":L(e,t)-O(e,t)},onClick:()=>a(t),"aria-label":`${r(`Unité {q} :`,{q:t})} ${r(n?`échangée`:`pas échangée`)}${s?`, ${r(`manquante pour la société`)}`:``}${d?`, ${r(`en trop pour la société`)}`:``}`,children:t},t)})})]})}function zt({model:e,policy:t,setPolicy:n,allowOptimal:i=!0}){let a=(0,G.useRef)(0);(0,G.useEffect)(()=>()=>cancelAnimationFrame(a.current),[]);let o=ie(e,t),s=e.kind===`positive`,c=Math.max(40,Math.ceil(o.optimalPolicy*2.2/5)*5),l=e=>{cancelAnimationFrame(a.current);let r=t,i=performance.now(),o=t=>{let s=Math.min(1,(t-i)/1400),c=s<.5?2*s*s:1-(-2*s+2)**2/2;n(Math.round((r+(e-r)*c)*10)/10),s<1&&(a.current=requestAnimationFrame(o))};a.current=requestAnimationFrame(o)};return(0,q.jsxs)(`div`,{className:`policy`,children:[(0,q.jsx)(Bt,{label:r(s?`Subvention par unité`:`Taxe par unité`),display:`${s?`s`:`t`} = ${M(t)}`,value:t,min:0,max:c,step:.5,onChange:e=>{cancelAnimationFrame(a.current),n(e)}}),(0,q.jsxs)(`div`,{className:`policy-actions`,children:[i&&(0,q.jsxs)(`button`,{type:`button`,className:`ghost small nowrap`,onClick:()=>l(o.optimalPolicy),children:[r(`Animer jusqu’à`),` `,s?`s*`:`t*`,` = `,M(o.optimalPolicy)]}),(0,q.jsx)(`button`,{type:`button`,className:`ghost small nowrap`,onClick:()=>l(0),children:r(`Retirer la politique`)})]}),(0,q.jsxs)(`p`,{className:`policy-read`,children:[(0,q.jsxs)(`span`,{children:[`Q = `,M(o.now.q)]}),(0,q.jsxs)(`span`,{children:[`Q* = `,M(o.qStar)]}),(0,q.jsxs)(`span`,{children:[`DWL = `,M(o.dwlNow)]})]})]})}function Bt({label:e,display:t,value:n,min:r,max:i,step:a,onChange:o}){let s=i>r?(n-r)/(i-r)*100:0;return(0,q.jsxs)(`div`,{className:`axis-ctl`,children:[(0,q.jsxs)(`div`,{className:`axis-top`,children:[(0,q.jsx)(`span`,{children:e}),(0,q.jsx)(`span`,{className:`axis-val`,children:t})]}),(0,q.jsx)(`input`,{className:`axis`,type:`range`,min:r,max:i,step:a,value:n,onChange:e=>o(Number(e.target.value)),"aria-label":e,"aria-valuetext":t,style:{"--pct":`${s}%`}}),(0,q.jsxs)(`div`,{className:`axis-ends`,"aria-hidden":!0,children:[(0,q.jsx)(`span`,{children:M(r)}),(0,q.jsx)(`span`,{children:M(i)})]})]})}function Vt({model:e,policy:t}){let n=ie(e,t),i=e.kind===`positive`,a=[{h:r(`Sans intervention`),o:n.market,d:n.dwlMarket},{h:`${i?`s`:`t`} = ${M(t)}`,o:n.now,d:n.dwlNow},{h:`${r(`Optimum`)} (${i?`s*`:`t*`} = ${M(n.optimalPolicy)})`,o:n.optimal,d:0}],o=[{label:`Q`,get:e=>e.o.q,note:r(`quantité échangée`)},{label:`CS`,get:e=>e.o.CS,note:r(`acheteurs`)},{label:`PS`,get:e=>e.o.PS,note:r(`vendeurs`)},{label:r(i?`État (− subvention)`:`État (+ recette)`),get:e=>e.o.gov,note:r(`transfert`)},{label:r(i?`+ bénéfice externe`:`− dommage externe`),get:e=>e.o.ext,note:r(`tiers`)},{label:`W`,get:e=>e.o.W,note:r(`bien-être total`)},{label:`DWL`,get:e=>e.d,note:r(`vs optimum`)}];return(0,q.jsx)(`div`,{className:`table-wrap`,children:(0,q.jsxs)(`table`,{className:`wtable`,children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{}),a.map(e=>(0,q.jsx)(`th`,{children:e.h},e.h))]})}),(0,q.jsx)(`tbody`,{children:o.map(e=>(0,q.jsxs)(`tr`,{className:e.label===`W`||e.label===`DWL`?`strong`:``,children:[(0,q.jsxs)(`th`,{children:[e.label,` `,(0,q.jsx)(`span`,{className:`muted small`,children:e.note})]}),a.map(t=>(0,q.jsx)(`td`,{children:M(e.get(t))},t.h))]},e.label))})]})})}var Ht=e=>Number(e.replace(/\s/g,``).replace(`,`,`.`).replace(`−`,`-`)),Ut=(e,t)=>t??Math.max(.01,Math.abs(e)*.005);function Wt({q:e,onDone:t}){let[n,i]=(0,G.useState)({}),[a,o]=(0,G.useState)(`answer`),[s]=(0,G.useState)(()=>Date.now()),c=(e,t)=>i({...n,[e]:t}),l=(0,G.useMemo)(()=>Object.fromEntries(e.parts.filter(e=>e.kind===`choice`).map(t=>[t.id,ut(t.options,e.id+t.id)])),[e]),u=e.parts.every(e=>e.kind===`num`?e.answers.every(t=>!!n[`${e.id}:${t.label}`]?.trim()&&Number.isFinite(Ht(n[`${e.id}:${t.label}`]))):e.kind===`choice`?n[e.id]!==void 0:(n[e.id]?.trim().length??0)>=15);return(0,q.jsxs)(`div`,{className:`exam`,children:[(0,q.jsx)(`p`,{className:`exam-note small muted`,children:(0,q.jsx)(J,{text:e.note})}),(0,q.jsx)(`div`,{className:`exam-statement`,lang:`en`,children:e.statement.split(`
`).map((e,t)=>(0,q.jsx)(`p`,{children:e},t))}),a===`answer`?(0,q.jsxs)(q.Fragment,{children:[e.parts.map(e=>(0,q.jsxs)(`div`,{className:`exam-part`,lang:`en`,children:[(0,q.jsx)(`p`,{className:`exam-prompt`,children:e.prompt}),e.kind===`num`&&(0,q.jsx)(`div`,{className:`numgrid`,children:e.answers.map(t=>(0,q.jsxs)(`label`,{children:[(0,q.jsxs)(`span`,{children:[t.label,` =`]}),(0,q.jsx)(`input`,{inputMode:`decimal`,value:n[`${e.id}:${t.label}`]??``,onChange:n=>c(`${e.id}:${t.label}`,n.target.value)})]},t.label))}),e.kind===`choice`&&(0,q.jsx)(`div`,{className:`options`,children:l[e.id].map((t,r)=>(0,q.jsx)(`button`,{type:`button`,className:`option ${n[e.id]===String(r)?`chosen`:``}`,onClick:()=>c(e.id,String(r)),children:t.text},r))}),e.kind===`text`&&(0,q.jsx)(`textarea`,{rows:4,value:n[e.id]??``,onChange:t=>c(e.id,t.target.value),placeholder:`Answer in English…`})]},e.id)),(0,q.jsxs)(`div`,{className:`row`,children:[(0,q.jsx)(`button`,{type:`button`,className:`primary`,disabled:!u,onClick:()=>o(`review`),children:r(`Rendre ma copie`)}),(0,q.jsx)(`span`,{className:`muted small`,children:r(u?`Pas d’indice avant de rendre.`:`Réponds à chaque partie avant de rendre ta copie.`)})]})]}):(0,q.jsx)(Gt,{q:e,ans:n,choiceOpts:l,minutes:Math.round((Date.now()-s)/6e4),onDone:t})]})}function Gt({q:e,ans:t,choiceOpts:n,minutes:i,onDone:o}){let s=e.parts.filter(e=>e.kind===`text`),[c,l]=(0,G.useState)(()=>Object.fromEntries(s.map(e=>{let n=rt(t[e.id]??``);return[e.id,e.rubric.map(e=>e.patterns.some(e=>new RegExp(e.source,e.flags.replace(`g`,``)).test(n)))]}))),[u,d]=(0,G.useState)({model:!1,logic:!1,calc:!1,lang:!1}),[f,p]=(0,G.useState)(!1),m=e.parts.flatMap(e=>e.kind===`num`?e.answers.map(n=>{let r=Ht(t[`${e.id}:${n.label}`]??``);return{part:e,a:n,given:t[`${e.id}:${n.label}`]??``,ok:isFinite(r)&&(t[`${e.id}:${n.label}`]??``).trim()!==``&&Math.abs(r-n.value)<=Ut(n.value,n.tol)}}):[]),h=e.parts.flatMap(e=>e.kind===`choice`?[{part:e,picked:t[e.id]===void 0?void 0:n[e.id][Number(t[e.id])]}]:[]),g=s.filter(e=>(t[e.id]??``).trim()&&st(t[e.id]??``)===`fr`).length,_=s.reduce((e,t)=>e+c[t.id].filter(e=>!e).length,0),v={model:h.filter(e=>!e.picked?.correct).length+ +!!u.model,logic:_+ +!!u.logic,calc:m.filter(e=>!e.ok).length+ +!!u.calc,lang:g+ +!!u.lang},y=m.filter(e=>e.ok).length+h.filter(e=>e.picked?.correct).length+s.reduce((e,t)=>e+c[t.id].filter(Boolean).length,0),b=m.length+h.length+s.reduce((e,t)=>e+t.rubric.length,0);return(0,q.jsxs)(`div`,{className:`review`,children:[(0,q.jsxs)(`div`,{className:`review-score`,children:[(0,q.jsxs)(`b`,{children:[y,` / `,b]}),` `,(0,q.jsxs)(`span`,{className:`muted`,children:[`· `,i,` min`]}),(0,q.jsxs)(`div`,{className:`mistake-chips`,children:[(0,q.jsxs)(`span`,{className:`mchip ${v.model?`on`:``}`,children:[r(`Modèle`),` `,v.model]}),(0,q.jsxs)(`span`,{className:`mchip ${v.logic?`on`:``}`,children:[r(`Logique`),` `,v.logic]}),(0,q.jsxs)(`span`,{className:`mchip ${v.calc?`on`:``}`,children:[r(`Calcul`),` `,v.calc]}),(0,q.jsxs)(`span`,{className:`mchip ${v.lang?`on`:``}`,children:[r(`Langue`),` `,v.lang]})]})]}),e.parts.map(e=>(0,q.jsxs)(`div`,{className:`exam-part`,lang:`en`,children:[(0,q.jsx)(`p`,{className:`exam-prompt`,children:e.prompt}),e.kind===`num`&&(0,q.jsxs)(`ul`,{className:`numres`,children:[m.filter(t=>t.part===e).map(e=>(0,q.jsxs)(`li`,{className:e.ok?`good`:`bad`,children:[e.ok?(0,q.jsx)(Qe,{label:r(`juste`)}):(0,q.jsx)($e,{label:r(`faux`)}),` `,e.a.label,` = `,e.given||`—`,` `,!e.ok&&(0,q.jsxs)(`span`,{className:`muted`,children:[`(`,r(`attendu :`),` `,e.a.value,`)`]})]},e.a.label)),(0,q.jsx)(`li`,{className:`muted small`,lang:a,children:(0,q.jsx)(J,{text:e.explain})})]}),e.kind===`choice`&&(()=>{let t=h.find(t=>t.part===e);return(0,q.jsx)(`p`,{className:`feedback ${t.picked?.correct?`good`:`bad`}`,children:t.picked?`${t.picked.text} — ${t.picked.feedback}`:r(`Pas de réponse.`)})})(),e.kind===`text`&&(0,q.jsxs)(`div`,{className:`rubric`,children:[(0,q.jsx)(`blockquote`,{className:`mine`,children:t[e.id]?.trim()||r(`— (pas de réponse)`)}),(t[e.id]??``).trim()&&st(t[e.id]??``)===`fr`&&(0,q.jsx)(`p`,{className:`feedback bad`,lang:a,children:r(`Langue : réponse en français — à l’examen, réponds en anglais.`)}),e.rubric.map((t,n)=>(0,q.jsxs)(`label`,{className:`tick`,children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:c[e.id][n],disabled:f,onChange:()=>l({...c,[e.id]:c[e.id].map((e,t)=>t===n?!e:e)})}),t.label]},t.id)),(0,q.jsx)(`blockquote`,{className:`model`,children:e.model})]})]},e.id)),(0,q.jsxs)(`section`,{className:`review-block`,lang:a,children:[(0,q.jsx)(`h4`,{children:r(`Logique économique`)}),(0,q.jsx)(`ul`,{children:e.logic.map((e,t)=>(0,q.jsx)(`li`,{children:(0,q.jsx)(J,{text:e})},t))}),(0,q.jsx)(`h4`,{children:r(`Calcul`)}),(0,q.jsx)(`ol`,{children:e.calc.map((e,t)=>(0,q.jsx)(`li`,{children:(0,q.jsx)(J,{text:e})},t))}),(0,q.jsx)(`h4`,{children:r(`Ce que le graphique doit montrer`)}),(0,q.jsx)(`ul`,{children:e.graph.map((e,t)=>(0,q.jsx)(`li`,{children:(0,q.jsx)(J,{text:e})},t))}),(0,q.jsx)(`h4`,{children:r(`Réponse modèle (EN)`)}),(0,q.jsx)(`blockquote`,{className:`model`,lang:`en`,children:e.modelAnswer})]}),f?(0,q.jsx)(`p`,{className:`feedback good`,lang:a,children:r(`Copie enregistrée : les erreurs de calcul, de modèle et de langue alimentent ta maîtrise et tes micro-leçons.`)}):(0,q.jsxs)(`section`,{className:`review-block`,lang:a,children:[(0,q.jsx)(`h4`,{children:r(`Ton auto-diagnostic`)}),(0,q.jsxs)(`label`,{className:`tick`,children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:u.model,onChange:()=>d({...u,model:!u.model})}),` `,r(`Je n’avais pas reconnu le bon modèle`)]}),(0,q.jsxs)(`label`,{className:`tick`,children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:u.logic,onChange:()=>d({...u,logic:!u.logic})}),` `,r(`Mon raisonnement sautait un maillon`)]}),(0,q.jsxs)(`label`,{className:`tick`,children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:u.calc,onChange:()=>d({...u,calc:!u.calc})}),` `,r(`Erreur de calcul ou de lecture`)]}),(0,q.jsxs)(`label`,{className:`tick`,children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:u.lang,onChange:()=>d({...u,lang:!u.lang})}),` `,r(`Formulation anglaise à améliorer`)]}),(0,q.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>{m.forEach(t=>W({tags:t.part.tags,dim:`calculation`,ok:t.ok,src:`exam`,item:`${e.id}:${t.part.id}:${t.a.label}`})),h.forEach(t=>W({tags:t.part.tags,dim:`recognition`,ok:!!t.picked?.correct,src:`exam`,item:`${e.id}:${t.part.id}`,mis:t.picked?.correct?void 0:t.picked?.mis})),s.forEach(n=>{let r=c[n.id],i=r.filter(Boolean).length>=Math.ceil(r.length*.75)&&st(t[n.id]??``)!==`fr`;W({tags:n.tags,dim:`english`,ok:i,src:`exam`,item:`${e.id}:${n.id}`})}),Ae({id:e.id,t:Date.now(),score:y,max:b,mistakes:v}),p(!0),o?.()},children:r(`Enregistrer la copie`)})]})]})}var Kt=e=>({buyer:`var(--buyer)`,producer:`var(--producer)`,third:`var(--third)`,planner:`var(--society)`,gov:`var(--gov)`})[e??`buyer`];function qt(e,t){if(t<e[0][0]||t>e.at(-1)[0])return null;for(let n=1;n<e.length;n++){let[r,i]=e[n-1],[a,o]=e[n];if(t<=a)return a===r?o:i+(o-i)*(t-r)/(a-r)}return e.at(-1)[1]}function Jt({spec:e}){let[t,n]=(0,G.useState)(e.initial??e.xMax/2),[i,a]=(0,G.useState)(e.focus??e.curves[0].label),o=(0,G.useId)(),s=t=>64+t/e.xMax*491,c=t=>336-t/e.yMax*308,l=e.curves.find(e=>e.label===i)??e.curves[0];return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`svg`,{viewBox:`0 0 580 400`,className:`lesson-diagram-svg`,role:`group`,"aria-label":e.title,children:[(0,q.jsx)(`defs`,{children:(0,q.jsx)(`clipPath`,{id:o,children:(0,q.jsx)(`rect`,{x:64,y:28,width:491,height:308})})}),[0,1,2,3,4].map(t=>(0,q.jsxs)(`g`,{className:`diagram-tick`,children:[(0,q.jsx)(`text`,{x:s(t*e.xMax/4),y:360,textAnchor:`middle`,children:M(t*e.xMax/4,1)}),(0,q.jsx)(`text`,{x:52,y:c(t*e.yMax/4)+5,textAnchor:`end`,children:M(t*e.yMax/4,1)})]},t)),(0,q.jsx)(`path`,{d:`M64,28V336H555`,fill:`none`,stroke:`var(--ink)`}),(0,q.jsx)(`text`,{x:619/2,y:388,textAnchor:`middle`,className:`diagram-axis-label`,children:e.xLabel}),(0,q.jsx)(`text`,{x:18,y:182,transform:`rotate(-90 18 182)`,textAnchor:`middle`,className:`diagram-axis-label`,children:e.yLabel}),(0,q.jsxs)(`g`,{clipPath:`url(#${o})`,children:[(0,q.jsx)(`line`,{x1:s(t),x2:s(t),y1:28,y2:336,stroke:`var(--ink-3)`,strokeDasharray:`4 5`}),e.curves.map(e=>{let n=qt(e.points,t);return(0,q.jsxs)(`g`,{role:`button`,tabIndex:0,"aria-label":`${e.label} : ${e.explain}`,onClick:()=>a(e.label),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),a(e.label))},children:[(0,q.jsx)(`polyline`,{points:e.points.map(([e,t])=>`${s(e)},${c(t)}`).join(` `),fill:`none`,stroke:`transparent`,strokeWidth:22}),(0,q.jsx)(`polyline`,{points:e.points.map(([e,t])=>`${s(e)},${c(t)}`).join(` `),fill:`none`,stroke:Kt(e.color),strokeWidth:i===e.label?4:2}),n!==null&&(0,q.jsx)(`circle`,{cx:s(t),cy:c(n),r:4,fill:Kt(e.color)})]},e.label)}),e.markers?.map(e=>(0,q.jsxs)(`g`,{children:[(0,q.jsx)(`circle`,{cx:s(e.x),cy:c(e.y),r:4,fill:`var(--ink)`}),(0,q.jsx)(`text`,{x:s(e.x)+8,y:c(e.y)-10,className:`diagram-point-label`,children:e.label})]},e.label))]})]}),(0,q.jsx)(`div`,{className:`diagram-legend`,role:`group`,"aria-label":r(`Courbes à expliquer`),children:e.curves.map(e=>(0,q.jsx)(`button`,{type:`button`,"aria-pressed":i===e.label,className:i===e.label?`on`:``,onClick:()=>a(e.label),style:{color:Kt(e.color)},children:e.label},e.label))}),(0,q.jsx)(`p`,{className:`diagram-explain`,children:l.explain}),(0,q.jsxs)(`label`,{className:`diagram-cursor`,children:[r(`Déplace le curseur sur l’axe horizontal`),(0,q.jsx)(`input`,{type:`range`,min:0,max:e.xMax,step:e.xMax/100,value:t,onChange:e=>n(Number(e.target.value)),"aria-label":e.xLabel,"aria-valuetext":`${M(t,2)} ; ${l.label} : ${qt(l.points,t)===null?r(`hors du domaine`):M(qt(l.points,t),2)}`})]}),(0,q.jsxs)(`dl`,{className:`diagram-readout`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`dt`,{children:e.xLabel}),(0,q.jsx)(`dd`,{children:M(t,2)})]}),e.curves.map(e=>{let n=qt(e.points,t);return(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`dt`,{children:e.label}),(0,q.jsx)(`dd`,{children:n===null?r(`hors domaine`):M(n,2)})]},e.label)})]})]})}function Yt({spec:e}){let[t,n]=(0,G.useState)(null),[i,a]=(0,G.useState)(!1),o=(t,n)=>e.payoffs[t][n][0]===Math.max(...e.payoffs.map(e=>e[n][0])),s=(t,n)=>e.payoffs[t][n][1]===Math.max(...e.payoffs[t].map(e=>e[1]));return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`p`,{className:`small`,children:r(`Premier gain : {a}. Second : {b}. Clique une case et compare les déviations unilatérales.`,{a:e.rowPlayer,b:e.colPlayer})}),(0,q.jsx)(`div`,{className:`table-wrap`,children:(0,q.jsxs)(`table`,{className:`diagram-matrix`,children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsxs)(`th`,{children:[e.rowPlayer,` / `,e.colPlayer]}),e.columns.map(e=>(0,q.jsx)(`th`,{children:e},e))]})}),(0,q.jsx)(`tbody`,{children:e.rows.map((r,a)=>(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{children:r}),e.columns.map((r,c)=>(0,q.jsx)(`td`,{children:(0,q.jsxs)(`button`,{type:`button`,"aria-pressed":t?.[0]===a&&t?.[1]===c,onClick:()=>n([a,c]),className:i&&o(a,c)&&s(a,c)?`nash`:``,children:[(0,q.jsx)(`span`,{className:i&&o(a,c)?`best`:``,children:M(e.payoffs[a][c][0],1)}),`, `,(0,q.jsx)(`span`,{className:i&&s(a,c)?`best`:``,children:M(e.payoffs[a][c][1],1)})]})},r))]},r))})]})}),(0,q.jsx)(`button`,{type:`button`,className:`ghost small`,"aria-pressed":i,onClick:()=>a(!i),children:r(i?`Masquer les meilleures réponses`:`Montrer les meilleures réponses`)}),i&&(0,q.jsx)(`p`,{className:`small muted`,children:r(`Souligné : meilleure réponse, y compris en cas d’égalité. Jaune : meilleures réponses mutuelles (Nash pur). Cela ne classe pas les équilibres mixtes.`)}),t&&(0,q.jsxs)(`p`,{className:`diagram-explain`,role:`status`,children:[r(`À {r} / {c} :`,{r:e.rows[t[0]],c:e.columns[t[1]]}),` `,o(...t)?r(`{p} ne peut pas gagner davantage en changeant seul de ligne`,{p:e.rowPlayer}):r(`{p} peut gagner davantage en changeant seul de ligne`,{p:e.rowPlayer}),` ; `,s(...t)?r(`{p} ne peut pas gagner davantage en changeant seul de colonne`,{p:e.colPlayer}):r(`{p} peut gagner davantage en changeant seul de colonne`,{p:e.colPlayer}),`.`]})]})}function Xt({spec:e}){let[t,n]=(0,G.useState)(0),r=Math.max(1,...e.items.map(e=>Math.abs(e.value))),i=e.items.some(e=>e.value<0);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`div`,{className:`diagram-bars`,children:e.items.map((a,o)=>(0,q.jsxs)(`button`,{type:`button`,"aria-pressed":t===o,onClick:()=>n(o),className:`diagram-bar-row`,children:[(0,q.jsx)(`span`,{children:a.label}),(0,q.jsx)(`span`,{className:`diagram-bar-track ${i?`signed`:``}`,children:(0,q.jsx)(`span`,{style:{background:Kt(a.color),width:`${Math.abs(a.value)/r*(i?50:100)}%`,left:`${i?a.value<0?50-Math.abs(a.value)/r*50:50:0}%`}})}),(0,q.jsxs)(`b`,{children:[M(a.value,2),` `,e.unit]})]},a.label))}),(0,q.jsx)(`p`,{className:`diagram-explain`,role:`status`,children:e.items[t].explain})]})}function Zt({spec:e}){let[t,n]=(0,G.useState)(0);return(0,q.jsx)(`ol`,{className:`diagram-sequence`,children:e.steps.map((e,r)=>(0,q.jsxs)(`li`,{children:[(0,q.jsxs)(`button`,{type:`button`,"aria-expanded":t===r,onClick:()=>n(r),children:[(0,q.jsx)(`b`,{children:e.actor}),(0,q.jsx)(`span`,{children:e.action})]}),t===r&&(0,q.jsx)(`p`,{children:e.consequence})]},`${r}-${e.actor}`))})}function Qt({spec:e}){return(0,q.jsxs)(`figure`,{className:`lesson-diagram`,children:[(0,q.jsx)(`figcaption`,{children:e.title}),e.kind===`curves`?(0,q.jsx)(Jt,{spec:e}):e.kind===`matrix`?(0,q.jsx)(Yt,{spec:e}):e.kind===`bars`?(0,q.jsx)(Xt,{spec:e}):(0,q.jsx)(Zt,{spec:e}),(0,q.jsx)(`p`,{className:`small muted`,children:e.note}),(0,q.jsxs)(`p`,{className:`small`,children:[r(`Source :`),` `,e.refs.map(e=>(0,q.jsx)(X,{r:e},e))]})]})}function $t(){let e=H();return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{children:r(`Leçons guidées`)}),(0,q.jsx)(`p`,{className:`lead`,children:r(`Une leçon = un mécanisme, découpé en blocs d’une seule idée. On part d’une situation et de ses acteurs ; le nom, le sigle et la formule viennent après.`)})]}),(0,q.jsx)(`div`,{className:`lesson-list`,children:p.map(t=>{let n=ae(t.id),i=n[0],a=i?U(e,i.id):null;return(0,q.jsxs)(`article`,{className:`lesson-card ${i?`has-lesson`:``}`,children:[(0,q.jsx)(`h3`,{children:t.title}),(0,q.jsxs)(`p`,{className:`meta`,children:[t.lecture,` · `,t.en]}),i?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`p`,{className:`small`,children:i.teaser}),(0,q.jsxs)(`a`,{className:`button primary`,href:`#/lesson/${i.id}`,children:[a?.startedAt?a.finishedAt?r(`Revoir`):r(`Continuer · bloc {i}/{n}`,{i:a.block+1,n:i.blocks.length}):r(`Commencer`),(0,q.jsx)(Q,{})]}),n.slice(1).map(e=>(0,q.jsx)(`p`,{className:`small`,children:(0,q.jsxs)(`a`,{href:`#/lesson/${e.id}`,children:[e.mechanism,` · `,r(`{n} blocs`,{n:e.blocks.length})]})},e.id)),(0,q.jsx)(`p`,{className:`small muted`,children:r(`{n} blocs · validation progressive · explication avec tes mots · examen en anglais · rappels espacés`,{n:i.blocks.length})})]}):(0,q.jsx)(`p`,{className:`small muted`,children:r(`Leçon guidée pas encore construite.`)}),(0,q.jsx)(`p`,{className:`small`,children:t.refs.map(e=>(0,q.jsx)(X,{r:e},e))})]},t.id)})})]})}function en({id:e}){let t=P[e],n=H(),i=U(n,e),[a,o]=(0,G.useState)(()=>t?Math.min(i.block,t.blocks.length-1):0);if(!t)return(0,q.jsx)(`div`,{className:`page`,children:(0,q.jsxs)(`p`,{children:[r(`Leçon introuvable.`),` `,(0,q.jsx)(`a`,{href:`#/learn`,children:r(`Retour`)})]})});let s=t=>{o(t),Ce(e,t),window.scrollTo({top:0,behavior:`smooth`})};return(0,q.jsxs)(`div`,{className:`page lesson`,children:[(0,q.jsxs)(`header`,{className:`lesson-head`,children:[(0,q.jsxs)(`a`,{href:`#/learn`,className:`back`,children:[(0,q.jsx)(Xe,{size:14}),` `,r(`Leçons`)]}),(0,q.jsx)(`h1`,{children:t.title}),(0,q.jsx)(`p`,{className:`meta`,children:r(`Mécanisme du jour : {m}`,{m:t.mechanism})}),(0,q.jsx)(`div`,{className:`dots`,role:`navigation`,"aria-label":r(`Blocs de la leçon`),children:t.blocks.map((e,t)=>(0,q.jsx)(`button`,{type:`button`,className:`dot ${t===a?`on`:``} ${t<=i.block?`reached`:``}`,disabled:t>Math.max(i.block,a),onClick:()=>s(t),title:`${t+1}. ${e.title}`,"aria-label":`Bloc ${t+1} : ${e.title}`,"aria-current":t===a?`step`:void 0,children:String(t+1).padStart(2,`0`)},e.id))})]}),(0,q.jsx)(rn,{lesson:t,idx:a,onNext:()=>s(Math.min(a+1,t.blocks.length-1)),onPrev:()=>s(Math.max(0,a-1))},a)]})}var tn=[[r(`[[MPB]] = la valeur, pour l’acheteur, d’une unité de plus.`),`c:MPB`],[r(`[[MPC]] = le coût privé de production d’une unité de plus.`),`c:MPC`],[r(`[[Qm]] est là où les incitations privées s’équilibrent : MPB = MPC.`),`f:market`],[r(`[[MEB]] = la valeur, pour les tiers, de l’effet positif d’une unité de plus.`),`c:MEB`],[r(`{{MSB = MPB + MEB}}`),`f:msb`],[r(`[[MSB]] n’est PAS l’argent du gouvernement.`),`c:MSB`],[r(`[[Q*]] est la quantité efficace : MSB = MSC.`),`f:opt`],[r(`Avec une externalité positive, Qm < Q*.`),`r:qs`],[r(`Les unités manquantes créent une [[DWL]] : leur bénéfice social dépasse leur coût social.`),`a:dwl-under`],[r(`Une subvention pigouvienne aligne l’incitation privée sur l’optimum social.`),`c:POL+`],[r(`MEB constant = 20 ⇒ subvention optimale = 20.`),`r:s`],[r(`Si MEB dépend de Q, on l’évalue à Q*, pas à l’intercept.`),`f:pigou`]];function nn({lesson:e}){let t=H(),n=V(t,[e.node]),i=t.confidence[e.node]??0,a=ee(p.find(t=>ae(t.id).includes(e))?.nodes??[e.node]);return(0,q.jsxs)(`div`,{className:`finish`,children:[(0,q.jsx)(`h3`,{children:r(`Ce que tu dois pouvoir expliquer — et pourquoi`)}),(0,q.jsx)(`ul`,{className:`accept`,children:(e.acceptance??tn.map(([e,t])=>({text:e,why:E[t]?.layers??[]}))).map(({text:e,why:t},n)=>(0,q.jsxs)(`li`,{children:[(0,q.jsx)(J,{text:e}),t.length>0&&(0,q.jsx)(ft,{layers:t,label:r(`Pourquoi ?`)})]},n))}),a.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`h3`,{children:r(`Les vrais sujets qui utilisent ce mécanisme`)}),(0,q.jsx)(`ul`,{className:`plain`,children:a.map(e=>(0,q.jsx)(`li`,{children:(0,q.jsx)(`a`,{href:`#/exam/${e.id}`,lang:`en`,children:e.title})},e.id))})]}),(0,q.jsx)(`h3`,{children:r(`Maîtrise mesurée aujourd’hui`)}),(0,q.jsx)(yt,{m:n}),(0,q.jsxs)(`div`,{className:`confidence`,children:[(0,q.jsx)(`span`,{children:r(`Ta confiance sur ce mécanisme :`)}),[1,2,3,4,5].map(t=>(0,q.jsx)(`button`,{type:`button`,className:`conf ${i===t?`on`:``}`,onClick:()=>fe(e.node,t),"aria-label":r(`Confiance {n} sur 5`,{n:t}),children:t},t))]}),(0,q.jsxs)(`div`,{className:`row wrap`,children:[(0,q.jsx)(`a`,{className:`button primary`,href:`#/recall`,children:r(`Premier rappel espacé`)}),(0,q.jsx)(`a`,{className:`button`,href:`#/learn`,children:r(`Choisir la prochaine leçon`)}),(0,q.jsx)(`a`,{className:`button`,href:`#/exam/${e.examId}`,children:r(`Refaire l’épreuve de la leçon`)})]})]})}function rn({lesson:e,idx:t,onNext:n,onPrev:i}){let o=e.blocks[t],s=e.blocks[t-1],c=H(),l=U(c,e.id),u=o.graph.preset??`solar`,d=R[u],f=(0,G.useMemo)(()=>!s||(s.graph.preset??`solar`)!==u?o.graph.show:o.graph.show.filter(e=>!s.graph.show.includes(e)),[o,s,u]),p=o.checks??[],m=`${o.id}:reveal`,h=!o.reveal||l.passed.includes(m),g=p.findIndex(e=>!l.passed.includes(e.id)),_=!!o.reveal||p.length>0,[v,y]=(0,G.useState)(o.graph.cursor??10),[b,x]=(0,G.useState)(o.graph.policy??0),[S,C]=(0,G.useState)(null),[w,T]=(0,G.useState)(o.graph.focus),[E,ee]=(0,G.useState)(`human`),[D,O]=(0,G.useState)({why:!1,ex:!1,me:!1,graph:!1}),[k,A]=(0,G.useState)(o.special===`chain`||h&&g===-1&&_),j=(0,G.useRef)(null);(0,G.useEffect)(()=>{o.decode&&Pe(o.decode.map(e=>`abbr:${e}`))},[o]),(0,G.useEffect)(()=>{o.special===`finish`&&Te(e.id)},[o,e.id]),(0,G.useEffect)(()=>{if(!w)return;let e=setTimeout(()=>T(void 0),3600);return()=>clearTimeout(e)},[w]);let ne=(0,G.useMemo)(()=>{let n={};return e.blocks.slice(0,t+1).forEach(e=>Object.assign(n,e.actors??{})),n},[e,t]),re=(0,G.useMemo)(()=>{let e=new Set;return o.reveal?.options.forEach(t=>t.mis&&e.add(t.mis)),p.forEach(t=>{t.kind===`choice`&&t.options.forEach(t=>t.mis&&e.add(t.mis)),t.kind===`numeric`&&t.traps?.forEach(t=>t.mis&&e.add(t.mis)),t.kind===`build`&&t.traps?.forEach(t=>t.mis&&e.add(t.mis))}),e},[o,p]),N=De(c).filter(e=>re.has(e)),P=E===`human`?o.human:E===`economist`?o.economist??o.human:o.exam??o.human,ie=!!l.finishedAt||l.passed.includes(`${o.id}:validation`),F=o.special===`teachback`||o.special===`exam`?ie:o.special===`finish`||!_||k&&h&&g===-1,I=t===e.blocks.length-1,L=e=>O({...D,[e]:!D[e]});return(0,q.jsxs)(`div`,{className:`lesson-grid`,children:[(0,q.jsx)(`section`,{className:`lesson-text`,children:(0,q.jsxs)(`article`,{className:`block-card`,children:[(0,q.jsx)(`div`,{className:`block-top`,children:(0,q.jsx)(`h2`,{children:o.title})}),(o.economist||o.exam)&&(0,q.jsxs)(`div`,{className:`seg`,role:`tablist`,"aria-label":r(`Niveau d’explication`),children:[(0,q.jsx)(`button`,{role:`tab`,"aria-selected":E===`human`,className:E===`human`?`on`:``,onClick:()=>ee(`human`),children:r(`Humain`)}),o.economist&&(0,q.jsx)(`button`,{role:`tab`,"aria-selected":E===`economist`,className:E===`economist`?`on`:``,onClick:()=>ee(`economist`),children:r(`Économiste`)}),o.exam&&(0,q.jsx)(`button`,{role:`tab`,"aria-selected":E===`exam`,className:E===`exam`?`on`:``,onClick:()=>ee(`exam`),children:r(`Examen (EN)`)})]}),(0,q.jsx)(`p`,{className:`block-text`,lang:E===`exam`&&o.exam?`en`:a,children:(0,q.jsx)(J,{text:P})}),o.decode?.map(e=>Oe(c,`abbr:${e}`)>=2?(0,q.jsxs)(`p`,{className:`small muted`,children:[r(`Sigle déjà maîtrisé :`),` `,(0,q.jsx)(We,{k:e}),` `,r(`(clique pour revoir la fiche).`)]},e):(0,q.jsx)(Ge,{k:e},e)),o.callout&&(0,q.jsxs)(`aside`,{className:`callout callout-${o.callout.kind}`,children:[(0,q.jsx)(`b`,{children:o.callout.title}),(0,q.jsx)(`p`,{children:(0,q.jsx)(J,{text:o.callout.text})})]}),(0,q.jsxs)(`div`,{className:`actions`,role:`group`,"aria-label":r(`Approfondir`),children:[(0,q.jsx)(`button`,{type:`button`,className:`act ${D.why?`on`:``}`,onClick:()=>L(`why`),children:r(`Pourquoi ?`)}),(0,q.jsx)(`button`,{type:`button`,className:`act ${D.ex?`on`:``}`,onClick:()=>L(`ex`),children:r(`Exemple concret`)}),(0,q.jsx)(`button`,{type:`button`,className:`act ${D.me?`on`:``}`,onClick:()=>L(`me`),children:r(`Si c’était moi ?`)}),(o.diagram||o.graph.preset||e.id===`ext-positive`)&&(0,q.jsx)(`button`,{type:`button`,className:`act ${D.graph?`on`:``}`,onClick:()=>{T(o.graph.focus??o.graph.show[o.graph.show.length-1]),O({...D,graph:!0}),window.innerWidth<1024&&j.current?.scrollIntoView({behavior:`smooth`,block:`start`})},children:o.diagram&&o.diagram.kind!==`curves`?r(`Montre-le sur le schéma`):r(`Montre-le sur le graphe`)})]}),D.why&&(0,q.jsx)(`div`,{className:`panel`,"data-label":r(`Pourquoi`),children:(0,q.jsx)(ft,{layers:o.why,start:1})}),D.ex&&(0,q.jsx)(`div`,{className:`panel`,"data-label":r(`Exemple concret`),children:(0,q.jsx)(J,{text:o.example})}),D.me&&(0,q.jsx)(`div`,{className:`panel`,"data-label":r(`Si c’était toi`),children:(0,q.jsx)(J,{text:o.me})}),o.special===`chain`&&(0,q.jsx)(mt,{steps:e.chain}),o.special===`teachback`&&(0,q.jsx)(ct,{rubric:e.teach,lessonId:e.id,tags:[e.node],onValidated:()=>pe(e.id,`${o.id}:validation`)}),o.special===`exam`&&(0,q.jsx)(Wt,{q:e.exam??te(e.examId),onDone:()=>pe(e.id,`${o.id}:validation`)}),o.special===`finish`&&(0,q.jsx)(nn,{lesson:e}),_&&!k&&(0,q.jsxs)(`button`,{type:`button`,className:`primary big`,onClick:()=>A(!0),children:[r(`J’ai compris, vérifier`),` `,(0,q.jsx)(Q,{})]}),k&&o.reveal&&(0,q.jsx)(ht,{q:o.reveal.q,options:o.reveal.options,formula:o.reveal.formula,after:o.reveal.after,done:h,onDone:()=>pe(e.id,m),seed:m,tags:o.reveal.tags,src:`lesson`}),k&&h&&p.map((t,n)=>(g===-1||n<=g)&&(0,q.jsx)(gt,{check:t,src:`lesson`,cursor:v,passed:l.passed.includes(t.id),onPass:()=>pe(e.id,t.id)},t.id)),N.map(e=>(0,q.jsx)(vt,{id:e},e)),o.result&&_&&(0,q.jsxs)(`figure`,{className:`specimen ${F?`earned`:`pending`}`,"aria-label":F?`${o.result[0]} : ${o.result[1]}`:r(`Résultat à gagner en répondant`),children:[(0,q.jsx)(`span`,{className:`specimen-value`,children:F?o.result[1]:`?`}),(0,q.jsx)(`figcaption`,{className:`specimen-read`,children:F?o.result[0]:r(`À gagner : réponds aux questions`)})]}),(0,q.jsxs)(`div`,{className:`block-nav`,children:[(0,q.jsxs)(`button`,{type:`button`,className:`ghost`,onClick:i,disabled:t===0,children:[(0,q.jsx)(Xe,{}),` `,r(`Précédent`)]}),!I&&(0,q.jsx)(`button`,{type:`button`,className:`primary`,onClick:n,disabled:!F,children:F?(0,q.jsxs)(q.Fragment,{children:[r(`Bloc suivant`),` `,(0,q.jsx)(Q,{})]}):o.special===`teachback`?r(`Valide ton explication pour continuer`):o.special===`exam`?r(`Rends et enregistre ta copie pour continuer`):r(`Réponds pour continuer`)})]}),(0,q.jsx)(Ye,{prov:o.prov})]})}),(0,q.jsxs)(`section`,{className:`lesson-graph`,ref:j,children:[(0,q.jsx)(pt,{actors:e.actors,seen:ne,focus:o.focusActors}),(o.diagram||o.graph.preset||e.id===`ext-positive`)&&(0,q.jsxs)(`div`,{className:`graph-card`,children:[D.graph&&(0,q.jsx)(`p`,{className:`graph-note`,children:(0,q.jsx)(J,{text:o.graphNote})}),o.diagram?(0,q.jsx)(Qt,{spec:o.diagram},o.id):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(It,{model:d,show:o.graph.show,focus:w,policy:b,cursor:v,onCursor:y,selected:S,onSelect:C,fresh:f,animKey:o.id}),o.graph.show.includes(`QM`)&&(0,q.jsx)(Rt,{model:d,show:o.graph.show,policy:b,cursor:v,onPick:e=>{y(e),C({kind:`unit`,q:e})}}),(0,q.jsx)(Lt,{model:d,show:o.graph.show,policy:b,cursor:v,selected:S,onClear:()=>C(null)}),(0,q.jsx)(Bt,{label:r(`Curseur`),display:`Q = ${M(v,1)}`,value:v,min:0,max:d.qMax,step:.5,onChange:y}),o.graph.policyControl&&(0,q.jsx)(zt,{model:d,policy:b,setPolicy:x,allowOptimal:F})]})]})]})]})}var an=[{id:`MPB`,label:r(`MPB (demande)`)},{id:`MPC`,label:r(`MPC (offre)`)},{id:`MEB`,label:`MEB`,only:`positive`},{id:`MSB`,label:`MSB`,only:`positive`},{id:`MEC`,label:`MEC`,only:`negative`},{id:`MSC`,label:`MSC`,only:`negative`},{id:`QM`,label:`Qm`},{id:`QS`,label:`Q*`},{id:`POL`,label:r(`Politique`)},{id:`QP`,label:r(`Q avec politique`)},{id:`PRICES`,label:`p_b / p_s`},{id:`CS`,label:`CS`},{id:`PS`,label:`PS`},{id:`GOV`,label:r(`État`)},{id:`EXT`,label:r(`Effet externe total`)},{id:`DWL`,label:`DWL`},{id:`UNITS`,label:r(`Unités manquantes / en trop`)}],on=[`MPB`,`MPC`,`MEB`,`MSB`,`MEC`,`MSC`,`QM`,`QS`,`POL`,`QP`,`PRICES`,`DWL`],sn={solar:[r(`Trouve la subvention qui fait disparaître la DWL. Pourquoi exactement cette valeur ?`),r(`Mets s = 35 : d’où vient la nouvelle DWL, et de quel côté de Q* est-elle ?`),r(`Active CS, PS, État et effet externe : vérifie que W = CS + PS − dépense + bénéfice externe.`)],variant:[r(`Essaie s = 30, puis s = 12, puis s = 10. Laquelle tombe pile sur Q* ? Pourquoi ?`),r(`Où se lit MEB(Q*) sur le graphique ?`)],vaccines:[r(`Mets s = 30 (E2020 Q3c) : clique la DWL. Quelles doses sont « en trop » ?`),r(`Pourquoi la DWL de la subvention 30 se mesure-t-elle à partir de 55 et pas de 45 ?`)],gasoline:[r(`Mets t = 20 (E2023 Q4d) : la DWL baisse mais ne disparaît pas. Pourquoi ?`),r(`Pourquoi t* = 30 et pas MEC(45) = 45 ?`),r(`Clique une unité en trop : que coûte-t-elle à la société, que lui rapporte-t-elle ?`)],textiles:[r(`Sans taxe, clique la DWL : quelles unités sont en trop ?`),r(`Quelle taxe implémente Q* = 40 ?`)]};function cn({preset:e}){let[t,n]=(0,G.useState)(e&&R[e]?e:`solar`),i=R[t],[a,o]=(0,G.useState)(on),[s,c]=(0,G.useState)(0),[l,u]=(0,G.useState)(Math.round(i.qMax/2)),[d,f]=(0,G.useState)(null),p=e=>{n(e),c(0),f(null),u(Math.round(R[e].qMax/2)),window.history.replaceState(null,``,`#/lab/${e}`)};return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{children:r(`Externalités : manipule, clique, demande pourquoi`)}),(0,q.jsx)(`p`,{className:`lead`,children:r(`Chaque courbe, point et zone est cliquable. Déplace le curseur : le panneau dit, pour l’unité visée, si elle est échangée et ce qu’elle vaut pour la société.`)})]}),(0,q.jsx)(`div`,{className:`seg wrap`,role:`tablist`,"aria-label":r(`Exemple`),children:Object.values(R).map(e=>(0,q.jsx)(`button`,{role:`tab`,"aria-selected":t===e.id,className:t===e.id?`on`:``,onClick:()=>p(e.id),children:e.name},e.id))}),(0,q.jsx)(`p`,{className:`small`,children:(0,q.jsx)(J,{text:i.story})}),(0,q.jsx)(Ye,{prov:[i.constructed?{kind:`peda`,note:r(`variante construite`)}:{kind:`recalc`,ref:i.ref}]}),(0,q.jsxs)(`div`,{className:`lab-grid`,children:[(0,q.jsxs)(`div`,{className:`graph-card`,children:[(0,q.jsx)(It,{model:i,show:a,policy:s,cursor:l,onCursor:u,selected:d,onSelect:f}),a.includes(`QM`)&&(0,q.jsx)(Rt,{model:i,show:a,policy:s,cursor:l,onPick:e=>{u(e),f({kind:`unit`,q:e})}}),(0,q.jsx)(Lt,{model:i,show:a,policy:s,cursor:l,selected:d,onClear:()=>f(null)}),(0,q.jsx)(Bt,{label:r(`Curseur`),display:`Q = ${M(l,1)}`,value:l,min:0,max:i.qMax,step:.5,onChange:u}),(0,q.jsx)(zt,{model:i,policy:s,setPolicy:c})]}),(0,q.jsxs)(`aside`,{className:`lab-side`,children:[(0,q.jsx)(`h3`,{children:r(`Afficher`)}),(0,q.jsx)(`div`,{className:`toggles`,children:an.filter(e=>!e.only||e.only===i.kind).map(e=>(0,q.jsxs)(`label`,{className:`tick`,children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:a.includes(e.id),onChange:()=>o(a.includes(e.id)?a.filter(t=>t!==e.id):[...a,e.id])}),e.label]},e.id))}),(0,q.jsx)(`h3`,{children:r(`Défis`)}),(0,q.jsx)(`ul`,{className:`plain small`,children:(sn[t]??[]).map((e,t)=>(0,q.jsx)(`li`,{children:e},t))})]})]}),(0,q.jsxs)(`section`,{className:`card`,children:[(0,q.jsx)(`h2`,{children:r(`Comptes du bien-être`)}),(0,q.jsx)(`p`,{className:`small muted`,children:r(`La politique (subvention ou taxe) est un transfert : elle apparaît dans la ligne « État » et réapparaît dans CS et PS. Seuls les effets réels changent W.`)}),(0,q.jsx)(Vt,{model:i,policy:s})]})]})}var ln=[`Formules`,`Courbes`,`Résultats`,`Zones`],un={Formules:r(`Formules`),Courbes:r(`Courbes`),Résultats:r(`Résultats`),Zones:r(`Zones`)};function dn({id:e}){let t=Object.values(E),n=e&&E[e]||t[0],i=S.find(e=>e.id===n.id.replace(`:`,`-`));return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{children:r(`Pourquoi ? Creuse jusqu’au fond`)}),(0,q.jsx)(`p`,{className:`lead`,children:r(`Choisis une formule, une courbe, un résultat ou une zone. Chaque « Pourquoi ? » descend d’une couche causale, jusqu’aux hypothèses du modèle.`)})]}),(0,q.jsxs)(`div`,{className:`why-grid`,children:[(0,q.jsx)(`nav`,{className:`why-list`,"aria-label":r(`Éléments à expliquer`),children:ln.map(e=>(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`p`,{className:`nav-title`,children:un[e]}),t.filter(t=>t.group===e).map(e=>(0,q.jsx)(`a`,{href:`#/why/${encodeURIComponent(e.id)}`,className:`why-item ${e.id===n.id?`on`:``}`,children:e.title},e.id))]},e))}),(0,q.jsxs)(`article`,{className:`card why-main`,children:[(0,q.jsx)(`h2`,{children:n.title}),(0,q.jsx)(`p`,{className:`meta`,children:un[n.group]}),n.formula&&(0,q.jsx)(Y,{f:n.formula,block:!0}),(0,q.jsx)(ft,{layers:n.layers},n.id),(0,q.jsxs)(`p`,{className:`small`,children:[r(`Sources :`),` `,n.refs.map(e=>(0,q.jsx)(X,{r:e},e))]}),i&&(0,q.jsxs)(`button`,{type:`button`,className:`ghost`,onClick:()=>Ne({kind:`formula`,id:i.id}),children:[r(`Fiche complète : termes, unités, quand l’utiliser`),` `,(0,q.jsx)(Q,{})]})]})]})]})}function fn({id:e}){let t=H(),[n,i]=(0,G.useState)(null),a=oe.find(t=>t.id===e),o=n&&e===n.problem.id?n:a?{problem:a,model:R[a.preset??`solar`]}:null,s=e=>{let t=T(e,Date.now()%1e6);i(t),window.location.hash=`#/practice/${t.problem.id}`};if(o)return(0,q.jsx)(pn,{problem:o.problem,model:o.model,onNew:s},o.problem.id);let c=e=>e.steps.every(n=>t.attempts.some(t=>t.ok&&t.item===`${e.id}:${n.id}`));return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{children:r(`Petits problèmes, un concept à la fois`)}),(0,q.jsx)(`p`,{className:`lead`,children:r(`Chaque étape débloque un élément du graphique. Les erreurs typiques (oublier le ½, évaluer la taxe au mauvais point…) sont reconnues et expliquées.`)})]}),(0,q.jsxs)(`div`,{className:`lesson-list`,children:[oe.map(e=>(0,q.jsxs)(`a`,{href:`#/practice/${e.id}`,className:`lesson-card link-card`,children:[(0,q.jsx)(`h3`,{children:e.title}),(0,q.jsxs)(`p`,{className:`meta`,children:[r(`{n} étapes`,{n:e.steps.length}),c(e)&&(0,q.jsxs)(`span`,{className:`status`,children:[` · `,(0,q.jsx)(Qe,{size:13}),` `,r(`résolu`)]})]}),(0,q.jsx)(`p`,{className:`small`,children:(0,q.jsx)(J,{text:e.context})})]},e.id)),(0,q.jsxs)(`div`,{className:`lesson-card`,children:[(0,q.jsx)(`h3`,{children:r(`Nouveaux chiffres, même mécanisme`)}),(0,q.jsx)(`p`,{className:`meta`,children:r(`Générateur`)}),(0,q.jsx)(`p`,{className:`small muted`,children:r(`Exercices construits (non tirés du cours), réponses entières.`)}),(0,q.jsxs)(`div`,{className:`gen-row`,children:[(0,q.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>s(`positive`),children:r(`Externalité positive`)}),(0,q.jsx)(`button`,{type:`button`,className:`ghost`,onClick:()=>s(`negative`),children:r(`Externalité négative`)})]})]})]})]})}function pn({problem:e,model:t,onNew:n}){let[i,a]=(0,G.useState)([]),[o,s]=(0,G.useState)(Math.round(t.qMax/2)),[c,l]=(0,G.useState)(null),u=(0,G.useMemo)(()=>[...e.show??[`MPB`,`MPC`],...e.steps.filter(e=>i.includes(e.id)).flatMap(e=>e.reveal??[])],[e,i]),d=e.steps.reduce((e,t)=>i.includes(t.id)&&t.policy!==void 0?t.policy:e,0),f=e.steps.findIndex(e=>!i.includes(e.id)),p=e.steps.map(t=>({kind:`numeric`,id:`${e.id}:${t.id}`,q:t.q,answer:t.answer,tol:t.tol,unit:t.unit,dim:t.dim,tags:t.tags,explain:t.explain,traps:t.traps}));return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`a`,{href:`#/practice`,className:`back`,children:[(0,q.jsx)(Xe,{size:14}),` `,r(`Pratique`)]}),(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{children:e.title}),(0,q.jsx)(`p`,{className:`lead`,children:(0,q.jsx)(J,{text:e.context})}),(0,q.jsx)(Ye,{prov:[{kind:e.prov,ref:e.ref}]})]}),(0,q.jsxs)(`div`,{className:`lesson-grid`,children:[(0,q.jsx)(`section`,{className:`lesson-text`,children:(0,q.jsxs)(`article`,{className:`block-card`,children:[p.map((t,n)=>(f===-1||n<=f)&&(0,q.jsx)(gt,{check:t,src:`practice`,onPass:()=>a(t=>[...t,e.steps[n].id])},t.id)),f===-1&&(0,q.jsxs)(`div`,{className:`finish`,children:[(0,q.jsx)(`p`,{className:`feedback good`,children:r(`Problème terminé. Refais-le demain sans regarder : c’est la deuxième réussite qui compte.`)}),(0,q.jsxs)(`div`,{className:`row wrap`,children:[(0,q.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>n(t.kind),children:r(`Un autre (nouveaux chiffres)`)}),(0,q.jsx)(`a`,{className:`button`,href:`#/exam`,children:r(`Version examen`)})]})]})]})}),(0,q.jsx)(`section`,{className:`lesson-graph`,children:(0,q.jsxs)(`div`,{className:`graph-card`,children:[(0,q.jsx)(It,{model:t,show:u,policy:d,cursor:o,onCursor:s,selected:c,onSelect:l}),u.includes(`QM`)&&(0,q.jsx)(Rt,{model:t,show:u,policy:d,cursor:o,onPick:e=>{s(e),l({kind:`unit`,q:e})}}),(0,q.jsx)(Lt,{model:t,show:u,policy:d,cursor:o,selected:c,onClear:()=>l(null)})]})})]})]})}var mn=[``,r(`Retrouver l’intuition et les sigles`),r(`Expliquer pourquoi`),r(`Reconstruire la formule à partir des acteurs`),r(`Transférer à un nouveau contexte`),r(`Écrire la réponse SSE en anglais`)],hn=new Set([`MPC`,`MEC`,`MSC`,`MPB`,`MEB`,`MSB`,`MAC`,`EC`,`CPR`,`Qpriv`,`QPoll`]),gn=new Set([`IC`,`IR`,`H`,`B`,`R`,`E[X]`,`pH`,`d`,`F`]),_n=new Set([`BR`,`NE`,`SPNE`,`S`]),vn=new Set([`PC`,`PPT`,`QC`,`MC_i`,`n`]),yn=new Set([`Delta`,`d/dx`,`partial`,`prime`,`max/min`,`sqrt(x)`,`barre`,`s.t.`]);function bn(e,t){return e===`18.1`?`costs`:e===`18.2`?`consumer`:e===`18.3`?hn.has(t)?`ext`:`welfare`:e===`18.4`?gn.has(t)?`info`:_n.has(t)?`games`:vn.has(t)?`oligopoly`:`monopoly`:`complements`}var xn=e=>p.find(t=>t.id===e)?.nodes[0]??e;function Sn(){let e=K.abbr.filter(e=>!yn.has(e.names[0])).map(e=>{let t=e.names[0],n=bn(e.section,t),i=b[t];return{id:`abbr-${e.line}`,topic:n,dim:`terminology`,front:r(`Que signifie {x} ?`,{x:e.names.join(` / `)}),back:`${e.english?`${e.english} — `:``}${e.french}${i?` ${r(`Littéralement :`)} ${i.literal}.`:``} (§${e.section})`,tags:[xn(n),`abbr:${t}`]}}),t=K.defs.map(e=>{let t=/elastic/i.test(e.id)?`elasticity`:/(isoquant|isocost|product|returns|economies|technical)/i.test(e.id)?`costs`:`consumer`;return{id:`def-${e.id}`,topic:t,dim:`english`,front:`Define in English: ${e.id}`,back:`${e.text} (§20.4)`,tags:[xn(t)]}});return[...ne,...e,...t]}function Cn(){let[e,t]=(0,G.useState)(`reviews`);return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{children:r(`Reconstruire plutôt que réciter`)}),(0,q.jsx)(`p`,{className:`lead`,children:r(`Les révisions espacées montent en difficulté : décoder → expliquer → reconstruire → transférer → rédiger en anglais. Le rappel rapide entraîne le vocabulaire de tout le cours.`)})]}),(0,q.jsxs)(`div`,{className:`seg`,role:`tablist`,children:[(0,q.jsx)(`button`,{role:`tab`,"aria-selected":e===`reviews`,className:e===`reviews`?`on`:``,onClick:()=>t(`reviews`),children:r(`Révisions espacées`)}),(0,q.jsx)(`button`,{role:`tab`,"aria-selected":e===`cards`,className:e===`cards`?`on`:``,onClick:()=>t(`cards`),children:r(`Rappel rapide`)})]}),e===`reviews`?(0,q.jsx)(wn,{}):(0,q.jsx)(En,{})]})}function wn(){let e=H(),[t,n]=(0,G.useState)(null),[i,a]=(0,G.useState)(0),[o,s]=(0,G.useState)({}),c=Object.entries(e.reviews);return c.length?(0,q.jsx)(q.Fragment,{children:c.map(([c,l])=>{let u=P[c];if(!u)return null;let d=l.due<=Date.now(),f=u.ladder[l.level-1]??[],p=f[(e.attempts.filter(e=>e.src===`review`&&e.tags.includes(u.node)).length+i)%Math.max(1,f.length)],m=o[c]??((d||t===c)&&p?{check:p,schedule:d&&t!==c}:null),h=Math.max(0,Math.round((l.due-Date.now())/36e5));return(0,q.jsxs)(`article`,{className:`card`,children:[(0,q.jsx)(`h3`,{children:mn[l.level]}),(0,q.jsxs)(`p`,{className:`meta`,children:[u.mechanism,` · `,r(`niveau {n}/5`,{n:l.level})]}),m?(0,q.jsx)(Tn,{check:m.check,schedule:m.schedule,onFirstResult:e=>{s(e=>({...e,[c]:m})),m.schedule&&ue(c,e)},onNext:()=>{s(e=>{let t={...e};return delete t[c],t}),n(null),a(i+1)}},`${m.check.id}-${i}`):(0,q.jsxs)(`div`,{className:`row wrap`,children:[(0,q.jsx)(`span`,{children:r(`Prochain rappel dans {d}.`,{d:h<1?r(`moins d’une heure`):h<24?`${h} h`:r(`{n} jour(s)`,{n:Math.round(h/24)})})}),(0,q.jsx)(`button`,{type:`button`,className:`ghost small`,onClick:()=>n(c),children:r(`Réviser en avance (sans compter pour l’agenda)`)})]})]},c)})}):(0,q.jsx)(`div`,{className:`card`,children:(0,q.jsxs)(`p`,{children:[r(`Aucune révision programmée pour l’instant : termine une leçon guidée et le premier rappel apparaîtra ici.`),` `,(0,q.jsx)(`a`,{href:`#/learn`,children:r(`Voir les leçons`)})]})})}function Tn({check:e,schedule:t,onFirstResult:n,onNext:i}){let[a,o]=(0,G.useState)(null);return(0,q.jsxs)(`div`,{children:[(0,q.jsx)(gt,{check:e,src:`review`,onPass:()=>void 0,onResult:e=>{a===null&&(o(e),n(e))}}),a!==null&&(0,q.jsxs)(`div`,{className:`row`,children:[(0,q.jsx)(`span`,{className:`feedback ${a?`good`:`bad`}`,children:r(a?t?`Réussi du premier coup : niveau suivant programmé.`:`Réussi (révision en avance, l’agenda ne bouge pas).`:t?`Raté du premier coup : on y revient dans 10 minutes.`:`À retravailler.`)}),(0,q.jsx)(`button`,{type:`button`,className:`ghost small`,onClick:i,children:r(`Continuer`)})]})]})}function En(){let e=H(),t=(0,G.useMemo)(Sn,[]),[n,i]=(0,G.useState)(`ext`),[o,s]=(0,G.useState)(!1),[c,l]=(0,G.useState)([]),u=[...t.filter(e=>(n===`all`||e.topic===n)&&!c.includes(e.id))].sort((t,n)=>{let r=e.cards[t.id]??{box:0,last:0},i=e.cards[n.id]??{box:0,last:0};return r.box-i.box||r.last-i.last})[0],d=p.filter(e=>t.some(t=>t.topic===e.id)),f=e=>{u&&(le(u.id,e),W({tags:u.tags,dim:u.dim,ok:e===2,src:`recall`,item:u.id}),s(!1),l([...c.slice(-8),u.id]))};return(0,q.jsxs)(`div`,{children:[(0,q.jsxs)(`label`,{className:`row small`,children:[r(`Thème :`),(0,q.jsxs)(`select`,{value:n,onChange:e=>{i(e.target.value),l([]),s(!1)},children:[(0,q.jsx)(`option`,{value:`all`,children:r(`Tous`)}),d.map(e=>(0,q.jsx)(`option`,{value:e.id,children:e.title},e.id))]}),(0,q.jsx)(`span`,{className:`muted`,children:r(`{n} cartes`,{n:t.filter(e=>n===`all`||e.topic===n).length})})]}),u?(0,q.jsxs)(`article`,{className:`flash card`,children:[(0,q.jsx)(`p`,{className:`flash-front`,lang:u.dim===`english`?`en`:a,children:(0,q.jsx)(J,{text:u.front})}),o?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`p`,{className:`flash-back`,lang:u.dim===`english`?`en`:a,children:(0,q.jsx)(J,{text:u.back})}),(0,q.jsxs)(`div`,{className:`row wrap`,children:[(0,q.jsx)(`button`,{type:`button`,className:`ghost`,onClick:()=>f(0),children:r(`À revoir`)}),(0,q.jsx)(`button`,{type:`button`,className:`ghost`,onClick:()=>f(1),children:r(`Hésitant`)}),(0,q.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>f(2),children:r(`Je savais`)})]})]}):(0,q.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>s(!0),children:r(`Réponds de tête, puis montre la réponse`)}),(0,q.jsx)(`p`,{className:`small muted`,children:r(`Boîte {n}/5 · les cartes ratées reviennent en premier.`,{n:e.cards[u.id]?.box??0})})]}):(0,q.jsxs)(`p`,{className:`card`,children:[r(`Plus de carte dans ce thème pour l’instant.`),` `,(0,q.jsx)(`button`,{type:`button`,className:`link`,onClick:()=>l([]),children:r(`Recommencer`)})]})]})}function Dn(e,t){if(!t.length)return[e];let n=RegExp(`(${t.map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`)})`,`g`);return e.split(n).map((e,t)=>t%2==1?(0,q.jsx)(`mark`,{children:e},t):e)}function On({id:e}){let t=H(),n=x.find(t=>t.id===e);if(n)return(0,q.jsx)(kn,{s:n},n.id);let i=e=>{let n=t.attempts.filter(t=>t.src===`recognition`&&t.item===e.id);return n.length?n.some(e=>e.ok&&!e.assisted)?(0,q.jsx)(Qe,{size:13,label:r(`reconnu`)}):(0,q.jsx)(tt,{size:13,label:r(`à revoir`)}):null},a=x[Math.floor(Math.random()*x.length)];return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{children:r(`D’abord le modèle, ensuite le calcul`)}),(0,q.jsx)(`p`,{className:`lead`,children:r(`Contextes tirés de la carte des finals 2020–2025 (paraphrasés, en anglais). Avant de nommer le modèle : qui décide, que choisit-il, avec quelle information, y a-t-il un effet sur des tiers, un rival stratégique, un prix ou une quantité ?`)}),(0,q.jsxs)(`a`,{className:`button primary`,href:`#/recognize/${a.id}`,children:[r(`Scénario au hasard`),` `,(0,q.jsx)(Q,{})]})]}),p.filter(e=>x.some(t=>t.topic===e.id)).map(e=>(0,q.jsxs)(`section`,{className:`rec-group`,children:[(0,q.jsx)(`h3`,{children:e.title}),(0,q.jsx)(`div`,{className:`chips`,children:x.filter(t=>t.topic===e.id).map(e=>(0,q.jsxs)(`a`,{href:`#/recognize/${e.id}`,className:`chip chip-link`,children:[e.title,` `,i(e)]},e.id))})]},e.id))]})}function kn({s:e}){let[t,n]=(0,G.useState)(0),[i,a]=(0,G.useState)(null),[o,s]=(0,G.useState)(0),[c,l]=(0,G.useState)(!1),u=t>=e.qs.length,d=u?{label:r(`Alors, quel modèle ?`),options:e.model}:e.qs[t],f=(0,G.useMemo)(()=>ut(d.options,`${e.id}-${t}`),[d,e.id,t]),m=i!==null&&f[i].correct,h=x[(x.indexOf(e)+1)%x.length],g=p.find(t=>t.id===e.topic),_=t=>{if(!(m||c)&&(a(t),u)){let n=f[t];W({tags:[e.node],dim:`recognition`,ok:!!n.correct,src:`recognition`,item:e.id,mis:n.correct?void 0:n.mis,assisted:!!n.correct&&o>0}),s(o+1),n.correct&&l(!0)}};return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`a`,{href:`#/recognize`,className:`back`,children:[(0,q.jsx)(Xe,{size:14}),` `,r(`Reconnaître le modèle`)]}),(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{children:e.title}),(0,q.jsxs)(`p`,{className:`meta`,children:[g?.title,` · `,(0,q.jsx)(X,{r:e.ref})]})]}),(0,q.jsxs)(`article`,{className:`card`,children:[(0,q.jsx)(`blockquote`,{className:`scenario`,lang:`en`,children:c?Dn(e.text,e.triggers):e.text}),!c&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`p`,{className:`rec-progress small muted`,children:r(`Question {i} / {n}`,{i:Math.min(t+1,e.qs.length+1),n:e.qs.length+1})}),(0,q.jsx)(`p`,{className:`check-q`,children:d.label}),(0,q.jsx)(`div`,{className:`options`,children:f.map((e,t)=>(0,q.jsx)(`button`,{type:`button`,className:`option ${i===t?e.correct?`right`:`wrong`:``}`,onClick:()=>_(t),children:e.text},t))}),i!==null&&(0,q.jsx)(`p`,{className:`feedback ${m?`good`:`bad`}`,children:(0,q.jsx)(J,{text:f[i].feedback})}),m&&!u&&(0,q.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>{n(t+1),a(null)},children:r(`Suivant`)}),!m&&(0,q.jsx)(_t,{onClick:()=>{let t=f.findIndex(e=>e.correct);a(t),u&&(W({tags:[e.node],dim:`recognition`,ok:!1,src:`recognition`,item:e.id}),l(!0))}})]}),c&&(0,q.jsxs)(`div`,{className:`rec-done`,children:[(0,q.jsx)(`p`,{className:`feedback good`,children:e.model.find(e=>e.correct)?.text}),(0,q.jsxs)(`p`,{children:[(0,q.jsx)(`b`,{children:r(`Mots déclencheurs`)}),` `,r(`(surlignés) :`),` `,e.triggers.map(e=>(0,q.jsx)(`mark`,{className:`trigger`,children:e},e))]}),(0,q.jsx)(`p`,{children:(0,q.jsx)(J,{text:e.explain})}),(0,q.jsxs)(`div`,{className:`row wrap`,children:[e.practice&&(0,q.jsx)(`a`,{className:`button primary`,href:`#/practice/${e.practice}`,children:r(`Passer au calcul`)}),g?.lesson&&(0,q.jsx)(`a`,{className:`button`,href:`#/lesson/${g.lesson}`,children:r(`Leçon guidée`)}),(0,q.jsxs)(`a`,{className:`button`,href:`#/recognize/${h.id}`,children:[r(`Scénario suivant`),` `,(0,q.jsx)(Q,{})]})]})]})]})]})}function An({id:e}){let t=H(),n=y.find(t=>t.id===e);return n?(0,q.jsx)(jn,{pair:n},n.id):(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{children:r(`Deux notions proches : explique la différence`)}),(0,q.jsx)(`p`,{className:`lead`,children:r(`Écris d’abord ta propre distinction (français ou anglais). Ensuite seulement, compare avec le contraste du dossier.`)})]}),(0,q.jsx)(`div`,{className:`pairs`,children:y.map(e=>{let n=t.attempts.filter(t=>t.src===`confusion`&&t.item===e.id),i=n.some(e=>e.ok);return(0,q.jsxs)(`a`,{href:`#/confusions/${e.id}`,className:`pair-card`,children:[(0,q.jsx)(`span`,{className:`pair-a`,children:e.a.term}),(0,q.jsx)(`span`,{className:`pair-vs`,children:`vs`}),(0,q.jsx)(`span`,{className:`pair-b`,children:e.b.term}),(0,q.jsxs)(`span`,{className:`muted small`,children:[p.find(t=>t.id===e.topic)?.title,n.length>0&&(0,q.jsxs)(`span`,{className:`status`,children:[` · `,i?(0,q.jsx)(Qe,{size:13,label:r(`réussi`)}):(0,q.jsx)(tt,{size:13,label:r(`à retravailler`)})]})]})]},e.id)})})]})}function jn({pair:e}){let[t,n]=(0,G.useState)(``),[i,a]=(0,G.useState)(null),[o,s]=(0,G.useState)(!1);return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`a`,{href:`#/confusions`,className:`back`,children:[(0,q.jsx)(Xe,{size:14}),` `,r(`Confusions`)]}),(0,q.jsx)(`header`,{className:`page-head`,children:(0,q.jsxs)(`h1`,{children:[e.a.term,` `,(0,q.jsx)(`span`,{className:`muted`,children:`vs`}),` `,e.b.term]})}),(0,q.jsxs)(`article`,{className:`card`,children:[(0,q.jsx)(`p`,{className:`check-q`,children:r(`Explique la différence avec tes mots. Qui est concerné, qu’est-ce qui change, où cela se voit sur un graphique ?`)}),(0,q.jsx)(`textarea`,{rows:5,value:t,disabled:!!i,onChange:e=>n(e.target.value),placeholder:r(`Ta distinction…`)}),i?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`div`,{className:`contrast`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`span`,{className:`contrast-term`,children:e.a.term}),(0,q.jsx)(`p`,{children:(0,q.jsx)(J,{text:e.a.text})})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`span`,{className:`contrast-term`,children:e.b.term}),(0,q.jsx)(`p`,{children:(0,q.jsx)(J,{text:e.b.text})})]})]}),(0,q.jsx)(`p`,{className:`key`,children:(0,q.jsx)(J,{text:e.key})}),(0,q.jsx)(`p`,{className:`small muted`,children:r(`Coche les points que ta distinction contient vraiment (pré-cochés quand on les a détectés) :`)}),e.points.map((e,t)=>(0,q.jsxs)(`label`,{className:`tick`,children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:i[t],disabled:o,onChange:()=>a(i.map((e,n)=>n===t?!e:e))}),e.label]},e.label)),o?(0,q.jsxs)(`p`,{className:`feedback good`,children:[r(`Enregistré.`),` `,e.mis?r(`Si cette confusion revient deux fois, une micro-leçon ciblée apparaîtra.`):``]}):(0,q.jsx)(`button`,{type:`button`,className:`primary`,onClick:()=>{let t=i.filter(Boolean).length>=Math.ceil(e.points.length*.67);W({tags:[p.find(t=>t.id===e.topic)?.nodes[0]??e.topic],dim:`terminology`,ok:t,src:`confusion`,item:e.id,mis:t?void 0:e.mis}),s(!0)},children:r(`Valider`)}),(0,q.jsxs)(`p`,{className:`small`,children:[r(`Sources :`),` `,e.refs.map(e=>(0,q.jsx)(X,{r:e},e))]})]}):(0,q.jsx)(`button`,{type:`button`,className:`primary`,disabled:t.trim().length<20,onClick:()=>{let n=rt(t);a(e.points.map(e=>e.patterns.every(e=>e.test(n))))},children:r(`Comparer`)})]})]})}function Mn({id:e}){let t=H(),n=I.find(t=>t.id===e);if(n)return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`a`,{href:`#/exam`,className:`back`,children:[(0,q.jsx)(Xe,{size:14}),` `,r(`Examen`)]}),(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{lang:`en`,children:n.title}),(0,q.jsx)(`p`,{className:`meta`,children:r(`Mode examen · en anglais · sans indice`)})]}),(0,q.jsx)(`article`,{className:`card`,children:(0,q.jsx)(Wt,{q:n},n.id)})]});let i=e=>{let n=t.exams.filter(t=>t.id===e.id),i=n.reduce((e,t)=>Math.max(e,t.score/t.max),0);return(0,q.jsxs)(`a`,{href:`#/exam/${e.id}`,className:`lesson-card link-card`,children:[(0,q.jsx)(`h3`,{lang:`en`,children:e.title}),(0,q.jsx)(`p`,{className:`meta`,children:n.length?r(`{n} copie(s) · meilleure {p} %`,{n:n.length,p:Math.round(i*100)}):r(`pas encore tenté`)}),!j(e.id)&&(0,q.jsx)(`p`,{className:`small muted`,children:e.note})]},e.id)},a=I.filter(e=>j(e.id)).sort((e,t)=>e.title.localeCompare(t.title)),o=[...new Set(a.map(e=>j(e.id)))];return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{children:r(`Mode examen : en anglais, corrigé après`)}),(0,q.jsx)(`p`,{className:`lead`,children:(0,q.jsx)(J,{text:r(`Rédige comme à SSE : modèle, calcul, mécanisme, en anglais. Le corrigé commence par la logique économique, puis le calcul, le graphique et une réponse modèle ; il sépare tes erreurs de **modèle**, de **logique**, de **calcul** et de **langue**.`)})})]}),(0,q.jsxs)(`section`,{children:[(0,q.jsx)(`h2`,{children:r(`Les vrais sujets, année par année`)}),(0,q.jsx)(`p`,{className:`small`,children:(0,q.jsx)(J,{text:r(`Toutes les questions des finals 2020–2025. Les données et les consignes sont celles des sujets (dossier « past exams »), reformulées ; les corrigés sont les recalculs du dossier §16, pas un barème officiel. La Q5 ne compte que si tu remplaces ton midterm.`)})}),o.map(e=>(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h3`,{children:r(`Final {y}`,{y:e})}),(0,q.jsx)(`div`,{className:`lesson-list`,children:a.filter(t=>j(t.id)===e).map(i)})]},e))]}),(0,q.jsxs)(`section`,{children:[(0,q.jsx)(`h2`,{children:r(`Devoirs et entraînements des leçons`)}),(0,q.jsx)(`p`,{className:`small`,children:r(`Un devoir reconstruit et les épreuves de fin de leçon : des exercices construits pour s’entraîner, jamais présentés comme des sujets officiels.`)}),(0,q.jsx)(`div`,{className:`lesson-list`,children:I.filter(e=>!j(e.id)).map(i)})]})]})}var Nn=172,Pn=52,Fn=200,In=74,Ln=16,Rn=e=>({x:Ln+e.col*Fn,y:Ln+e.row*In});function zn({selected:e,onSelect:t}){let n=H(),i=e?h(e):void 0;return(0,q.jsx)(`div`,{className:`map-scroll`,children:(0,q.jsxs)(`svg`,{viewBox:`0 0 1404 528`,className:`map-svg`,role:`img`,"aria-label":r(`Carte des prérequis`),children:[C.flatMap(e=>e.prereqs.map(t=>{let n=Rn(h(t)),r=Rn(e),a=n.x+Nn,o=n.y+Pn/2,s=r.x,c=r.y+Pn/2,l=Math.max(30,(s-a)/2),u=i&&e.id===i.id,d=i&&t===i.id;return(0,q.jsx)(`path`,{d:`M${a},${o} C${a+l},${o} ${s-l},${c} ${s},${c}`,className:`edge ${u?`edge-in`:``} ${d?`edge-out`:``}`},`${t}-${e.id}`)})),C.map(i=>{let{x:a,y:o}=Rn(i),s=V(n,[i.id]),c=we(s),l=!!m(i.topic)?.lesson&&m(i.topic).nodes.includes(i.id);return(0,q.jsxs)(`g`,{transform:`translate(${a},${o})`,className:`node ${e===i.id?`node-sel`:``} ${l?`node-lesson`:``}`,onClick:()=>t(i.id),role:`button`,"aria-label":`${i.label}, ${r(`maîtrise {p} %`,{p:Math.round(c*100)})}`,children:[(0,q.jsx)(`rect`,{width:Nn,height:Pn,rx:2,className:`node-box`,style:{"--m":c}}),(0,q.jsx)(`text`,{x:10,y:22,className:`node-label`,style:{fontWeight:Math.round(320+540*c)},children:i.label.length>26?`${i.label.slice(0,25)}…`:i.label}),(0,q.jsxs)(`text`,{x:10,y:37,className:`node-sub`,children:[i.sub,he(s)?` · ${r(`maîtrisé`)}`:``]})]},i.id)})]})})}function Bn({node:e}){let t=H(),[n,i]=(0,G.useState)(e??`ext`);(0,G.useEffect)(()=>{e&&i(e)},[e]);let a=h(n)??C[0],o=m(a.topic),s=C.filter(e=>e.prereqs.includes(a.id)),c=x.filter(e=>e.node===a.id||e.topic===a.topic&&a.id===o?.nodes[0]),l=y.filter(e=>e.topic===a.topic),u=e=>Math.round(we(V(t,[e]))*100);return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{children:r(`Ce qui cause quoi, dans le cours`)}),(0,q.jsx)(`p`,{className:`lead`,children:r(`Les flèches vont d’un prérequis vers ce qu’il permet de comprendre. La teinte d’un nœud = ta maîtrise mesurée (7 dimensions, rappels sur plusieurs jours). Bordure pleine = leçon guidée disponible.`)})]}),(0,q.jsxs)(`div`,{className:`map-grid`,children:[(0,q.jsx)(zn,{selected:a.id,onSelect:e=>{i(e),window.history.replaceState(null,``,`#/map/${e}`)}}),(0,q.jsxs)(`aside`,{className:`map-panel`,children:[(0,q.jsx)(`h2`,{children:a.label}),(0,q.jsx)(`p`,{className:`meta`,children:a.sub}),(0,q.jsx)(`h4`,{children:r(`Pour comprendre ceci, il te faut :`)}),a.prereqs.length?(0,q.jsx)(`ul`,{className:`plain`,children:a.prereqs.map(e=>(0,q.jsxs)(`li`,{children:[(0,q.jsx)(`a`,{href:`#/map/${e}`,children:h(e)?.label}),` `,(0,q.jsxs)(`span`,{className:`muted small`,children:[u(e),` %`]})]},e))}):(0,q.jsx)(`p`,{className:`small muted`,children:r(`Aucun prérequis : c’est un point de départ.`)}),s.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`h4`,{children:r(`Ceci ouvre :`)}),(0,q.jsx)(`ul`,{className:`plain`,children:s.map(e=>(0,q.jsx)(`li`,{children:(0,q.jsx)(`a`,{href:`#/map/${e.id}`,children:e.label})},e.id))})]}),(0,q.jsxs)(`p`,{className:`small`,children:[r(`Importance conceptuelle :`),` `,(0,q.jsx)(`b`,{children:w(a.id)}),` `,r(`nœud(s) en dépendent.`)]}),(0,q.jsx)(`h4`,{children:r(`Maîtrise`)}),(0,q.jsx)(yt,{m:V(t,[a.id]),compact:!0}),o&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`h4`,{children:r(`Historique observé aux finals (2020–2025)`)}),(0,q.jsx)(`ul`,{className:`plain small`,children:o.history.map((e,t)=>(0,q.jsxs)(`li`,{children:[e.years.length?`${e.years.length}/6 (${e.years.join(`, `)})`:`—`,` : `,e.label,` `,(0,q.jsxs)(`span`,{className:`muted`,children:[`[`,e.basis,`]`]})]},t))}),(0,q.jsx)(`p`,{className:`small muted`,children:(0,q.jsx)(J,{text:r(`Une fréquence sur six sujets décrit l’échantillon ; ce n’est pas une probabilité pour le prochain examen (§1).`)})})]}),(0,q.jsxs)(`p`,{className:`small`,children:[r(`Source :`),` `,a.refs.map(e=>(0,q.jsx)(X,{r:e},e))]}),(0,q.jsxs)(`div`,{className:`row wrap`,children:[o?.lesson&&o.nodes.includes(a.id)&&(0,q.jsx)(`a`,{className:`button primary`,href:`#/lesson/${o.lesson}`,children:r(`Leçon guidée`)}),c.length>0&&(0,q.jsxs)(`a`,{className:`button`,href:`#/recognize/${c[0].id}`,children:[r(`Reconnaître`),` (`,c.length,`)`]}),l.length>0&&(0,q.jsxs)(`a`,{className:`button`,href:`#/confusions/${l[0].id}`,children:[r(`Confusions`),` (`,l.length,`)`]})]})]})]})]})}function Vn(e){let t=Math.max(...C.map(e=>w(e.id)));return p.map(n=>{let r=n.nodes.map(t=>we(V(e,[t]))),i=r.reduce((e,t)=>e+t,0)/r.length,a=[...new Set(n.nodes.flatMap(e=>h(e)?.prereqs??[]))].filter(e=>!n.nodes.includes(e)),o=a.length?a.reduce((t,n)=>t+we(V(e,[n])),0)/a.length:1,s=new Set(n.history.flatMap(e=>e.years)).size/6,c=Math.max(...n.nodes.map(e=>w(e)))/t,l=Math.min(...n.nodes.map(e=>h(e)?.col??0)),u=1-i;return{t:n,ready:o,rec:s,weak:u,imp:c,depth:l,prio:.35*u+.25*s+.25*c+.15*o,conf:e.confidence[n.nodes[0]]}})}var Hn={prio:{label:r(`Priorité combinée`),fn:(e,t)=>t.prio-e.prio},depth:{label:r(`Ordre des prérequis`),fn:(e,t)=>e.depth-t.depth},rec:{label:r(`Récurrence observée`),fn:(e,t)=>t.rec-e.rec},weak:{label:r(`Ta faiblesse`),fn:(e,t)=>t.weak-e.weak},imp:{label:r(`Importance conceptuelle`),fn:(e,t)=>t.imp-e.imp}},Un=e=>`${Math.round(e*100)} %`;function Wn(){let e=H(),[t,n]=(0,G.useState)(`prio`),i=Math.ceil((B.getTime()-Date.now())/864e5),a=Vn(e).sort(Hn[t].fn);return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{children:i>0?r(`{n} jours avant le final`,{n:i}):r(`Jour du final`)}),(0,q.jsx)(`p`,{className:`meta`,children:r(`Préparation finale · 23 octobre 2026, date du support L1`)}),(0,q.jsx)(`p`,{className:`lead`,children:(0,q.jsx)(J,{text:r(`Classe les thèmes selon ce qui compte pour toi. La récurrence est un **historique observé** sur six finals (2020–2025) : elle décrit l’échantillon, elle ne prédit pas le prochain sujet (§1).`)})})]}),(0,q.jsx)(`div`,{className:`seg wrap`,role:`tablist`,"aria-label":r(`Trier par`),children:Object.keys(Hn).map(e=>(0,q.jsx)(`button`,{role:`tab`,"aria-selected":t===e,className:t===e?`on`:``,onClick:()=>n(e),children:Hn[e].label},e))}),(0,q.jsx)(`div`,{className:`table-wrap`,children:(0,q.jsxs)(`table`,{className:`ftable`,children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{children:r(`Thème`)}),(0,q.jsx)(`th`,{children:r(`Prérequis prêts`)}),(0,q.jsx)(`th`,{children:r(`Récurrence observée`)}),(0,q.jsx)(`th`,{children:r(`Faiblesse`)}),(0,q.jsx)(`th`,{children:r(`Importance`)}),(0,q.jsx)(`th`,{children:r(`Confiance / mesuré`)}),(0,q.jsx)(`th`,{children:r(`Priorité`)})]})}),(0,q.jsx)(`tbody`,{children:a.map(e=>{let t=[...new Set(e.t.history.flatMap(e=>e.years))].sort();return(0,q.jsxs)(`tr`,{children:[(0,q.jsxs)(`th`,{children:[(0,q.jsx)(`a`,{href:e.t.lesson?`#/lesson/${e.t.lesson}`:`#/map/${e.t.nodes[0]}`,children:e.t.title}),(0,q.jsxs)(`span`,{className:`muted small`,children:[` `,e.t.lecture,e.t.lesson?` · ${r(`leçon guidée`)}`:``]})]}),(0,q.jsx)(`td`,{children:(0,q.jsx)(Gn,{v:e.ready})}),(0,q.jsxs)(`td`,{title:e.t.history.map(e=>`${e.label} [${e.basis}]`).join(`
`),children:[t.length?`${t.length}/6`:`—`,` `,(0,q.jsx)(`span`,{className:`muted small`,children:t.map(e=>String(e).slice(2)).join(` `)})]}),(0,q.jsx)(`td`,{children:(0,q.jsx)(Gn,{v:e.weak,warn:!0})}),(0,q.jsx)(`td`,{children:(0,q.jsx)(Gn,{v:e.imp})}),(0,q.jsxs)(`td`,{className:`small`,children:[e.conf?`${e.conf}/5`:`—`,` / `,Un(1-e.weak)]}),(0,q.jsx)(`td`,{children:(0,q.jsx)(`b`,{children:Math.round(e.prio*100)})})]},e.t.id)})})]})}),(0,q.jsxs)(`section`,{className:`card subtle small`,children:[(0,q.jsx)(`h3`,{children:r(`Comment c’est calculé`)}),(0,q.jsxs)(`ul`,{className:`plain`,children:[(0,q.jsx)(`li`,{children:(0,q.jsx)(J,{text:r(`**Prérequis prêts** : maîtrise moyenne des nœuds dont ce thème dépend sur la carte.`)})}),(0,q.jsx)(`li`,{children:(0,q.jsx)(J,{text:r(`**Récurrence observée** : années où le thème apparaît, d’après les comptages du dossier (§1) ou recomptées depuis sa carte des examens (§16) — survole la cellule pour le détail.`)})}),(0,q.jsx)(`li`,{children:(0,q.jsx)(J,{text:r(`**Faiblesse** : 1 − ta maîtrise mesurée (7 dimensions, rappels sur plusieurs jours).`)})}),(0,q.jsx)(`li`,{children:(0,q.jsx)(J,{text:r(`**Importance** : nombre de notions qui en dépendent sur la carte (calculé, pas décrété).`)})}),(0,q.jsx)(`li`,{children:(0,q.jsx)(J,{text:r(`**Priorité combinée** = 35 % faiblesse + 25 % récurrence + 25 % importance + 15 % prérequis prêts.`)})}),(0,q.jsx)(`li`,{children:(0,q.jsx)(J,{text:r(`Parcours suggéré par le dossier (§20.6) : fondations → welfare → pouvoir de marché → défaillances → compléments → sujets chronométrés.`)})})]})]})]})}function Gn({v:e,warn:t}){return(0,q.jsx)(`span`,{className:`measure ${t&&e>.5?`warn`:``}`,style:{fontWeight:Math.round(260+600*e)},children:Un(e)})}function Kn(){let e=H(),t=De(e),n=Object.entries(e.mis).filter(([,e])=>e.total>0).sort((e,t)=>t[1].last-e[1].last);return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{children:r(`Mes confusions, suivies à part de la maîtrise`)}),(0,q.jsx)(`p`,{className:`lead`,children:r(`Une même confusion deux fois ⇒ une micro-leçon qui oppose les deux notions. Elle disparaît quand tu réponds juste à la question de contraste.`)})]}),t.length?t.map(e=>(0,q.jsx)(vt,{id:e},e)):(0,q.jsx)(`p`,{className:`card`,children:r(`Aucune confusion active. Elles apparaissent ici après la deuxième occurrence.`)}),(0,q.jsxs)(`section`,{className:`card`,children:[(0,q.jsx)(`h2`,{children:r(`Historique`)}),n.length?(0,q.jsxs)(`table`,{className:`wtable`,children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{children:r(`Confusion`)}),(0,q.jsx)(`th`,{children:r(`Total`)}),(0,q.jsx)(`th`,{children:r(`Depuis la dernière correction`)}),(0,q.jsx)(`th`,{children:r(`Dernière fois`)})]})}),(0,q.jsx)(`tbody`,{children:n.map(([e,t])=>(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{children:g(e)?.label??e}),(0,q.jsx)(`td`,{children:t.total}),(0,q.jsxs)(`td`,{children:[t.count,t.resolvedAt?(0,q.jsxs)(`span`,{className:`muted small`,children:[` · `,r(`corrigée le {d}`,{d:new Date(t.resolvedAt).toLocaleDateString(a)})]}):``]}),(0,q.jsx)(`td`,{className:`small`,children:new Date(t.last).toLocaleString(a,{dateStyle:`short`,timeStyle:`short`})})]},e))})]}):(0,q.jsx)(`p`,{className:`muted`,children:r(`Rien pour l’instant.`)})]}),(0,q.jsxs)(`section`,{className:`card subtle`,children:[(0,q.jsx)(`h2`,{children:r(`Toutes les confusions suivies ({n})`,{n:v.length})}),(0,q.jsx)(`ul`,{className:`plain small`,children:v.map(e=>(0,q.jsxs)(`li`,{children:[(0,q.jsx)(`b`,{children:e.label}),` — `,(0,q.jsx)(J,{text:e.explain}),` `,e.refs.map(e=>(0,q.jsx)(X,{r:e},e))]},e.id))})]}),(0,q.jsxs)(`details`,{className:`card subtle`,children:[(0,q.jsx)(`summary`,{children:r(`Pièges listés par le dossier (§20.2) — {n}`,{n:K.pitfalls.length})}),(0,q.jsx)(`ul`,{className:`plain small`,children:K.pitfalls.map(e=>(0,q.jsx)(`li`,{children:e.text},e.id))})]}),(0,q.jsxs)(`details`,{className:`card subtle`,children:[(0,q.jsx)(`summary`,{children:r(`Corrections et ambiguïtés à ne pas reproduire (§20.1) — {n}`,{n:K.corrections.length})}),(0,q.jsx)(`ol`,{className:`small`,children:K.corrections.map(e=>(0,q.jsx)(`li`,{children:e.text},e.id))})]})]})}function qn({refId:e}){let[t,n]=(0,G.useState)(`text`),[i,a]=(0,G.useState)(()=>e?e.split(/[.:#]/)[0]:`0`),[o,s]=(0,G.useState)(``),[c,l]=(0,G.useState)(null),u=e?ze(e):null;(0,G.useEffect)(()=>{e&&(a(e.split(/[.:#]/)[0]),n(`text`))},[e]);let d=(0,G.useMemo)(()=>{if(o.trim().length<3)return[];let e=o.toLowerCase();return K.lines.flatMap((t,n)=>t.toLowerCase().includes(e)?[n]:[]).slice(0,80)},[o]),f=e=>K.chapters.find(t=>e>=t.start-3&&e<t.end)?.id??`0`,p=K.chapters.find(e=>e.id===i)??K.chapters[0],m=c===null?u&&u.hl?u.hl:u&&i===e?.split(/[.:#]/)[0]?[u.start,u.end]:null:[c,c+1];return(0,q.jsxs)(`div`,{className:`page`,children:[(0,q.jsxs)(`header`,{className:`page-head`,children:[(0,q.jsx)(`h1`,{children:r(`Le dossier, source de vérité`)}),(0,q.jsx)(`p`,{className:`lead`,children:r(`Tout ce que l’app affiche renvoie ici. Les références « §11.3 », « §15 A6 » ou « §16 E2020 » ouvrent l’extrait exact.`)})]}),(0,q.jsx)(`div`,{className:`seg wrap`,role:`tablist`,children:[[`text`,r(`Texte`)],[`abbr`,r(`Sigles (§18)`)],[`formulas`,r(`Formulaire (§17)`)],[`lexicon`,r(`Lexique (§19)`)]].map(([e,r])=>(0,q.jsx)(`button`,{role:`tab`,"aria-selected":t===e,className:t===e?`on`:``,onClick:()=>n(e),children:r},e))}),t===`text`&&(0,q.jsxs)(`div`,{className:`source-grid`,children:[(0,q.jsxs)(`nav`,{className:`source-nav`,"aria-label":r(`Chapitres`),children:[(0,q.jsx)(`input`,{type:`search`,placeholder:r(`Rechercher dans le dossier…`),value:o,onChange:e=>s(e.target.value),"aria-label":r(`Recherche`)}),d.length>0?(0,q.jsx)(`ul`,{className:`hits`,children:d.map(e=>(0,q.jsx)(`li`,{children:(0,q.jsxs)(`button`,{type:`button`,className:`link small`,onClick:()=>{a(f(e)),l(e)},children:[e+1,` · `,K.lines[e].trim().slice(0,70)]})},e))}):K.chapters.map(e=>(0,q.jsxs)(`button`,{type:`button`,className:`why-item ${e.id===p.id?`on`:``}`,onClick:()=>{a(e.id),l(null)},children:[e.id,`. `,e.title.charAt(0)+e.title.slice(1).toLowerCase()]},e.id))]}),(0,q.jsx)(Jn,{start:p.start,end:p.end,title:`${p.id}. ${p.title}`,hl:m})]}),t===`abbr`&&(0,q.jsxs)(`div`,{className:`table-wrap`,children:[(0,q.jsxs)(`table`,{className:`wtable`,children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{children:r(`Sigle`)}),(0,q.jsx)(`th`,{children:r(`Tag`)}),(0,q.jsx)(`th`,{children:`English`}),(0,q.jsx)(`th`,{children:r(`Français / note`)}),(0,q.jsx)(`th`,{children:`§`})]})}),(0,q.jsx)(`tbody`,{children:K.abbr.map(e=>(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{children:e.names.join(`, `)}),(0,q.jsx)(`td`,{children:e.tag}),(0,q.jsx)(`td`,{children:e.english}),(0,q.jsx)(`td`,{className:`small`,children:e.french}),(0,q.jsx)(`td`,{className:`small`,children:e.section})]},e.line))})]}),(0,q.jsx)(`p`,{className:`small muted`,children:r(`[O] observé dans les PDF · [A] alias standard d’une notion présente · [C] complément ajouté pour rendre les méthodes compréhensibles.`)})]}),t===`formulas`&&(0,q.jsx)(`ul`,{className:`plain formulas`,children:K.formulas.map(e=>(0,q.jsxs)(`li`,{children:[(0,q.jsx)(`b`,{children:e.id}),` `,(0,q.jsx)(`span`,{className:`mono`,children:e.text})]},e.id))}),t===`lexicon`&&(0,q.jsx)(Yn,{})]})}function Jn({start:e,end:t,title:n,hl:r}){let i=(0,G.useRef)(null);return(0,G.useEffect)(()=>{i.current?.scrollIntoView({block:`center`})},[r,e]),(0,q.jsxs)(`article`,{className:`card source-text`,children:[(0,q.jsx)(`h3`,{children:n}),K.lines.slice(e,t).map((t,n)=>{let a=e+n,o=r&&a>=r[0]&&a<r[1];return(0,q.jsxs)(`div`,{ref:o&&a===r[0]?i:void 0,className:`sline ${o?`hl`:``}`,children:[(0,q.jsx)(`span`,{className:`lno`,children:a+1}),(0,q.jsx)(`span`,{children:t||`\xA0`})]},a)})]})}function Yn(){let[e,t]=(0,G.useState)(``),n=K.lexicon.filter(t=>!e||`${t.term} ${t.french} ${t.def}`.toLowerCase().includes(e.toLowerCase()));return(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`input`,{type:`search`,placeholder:r(`Chercher un mot anglais ou français…`),value:e,onChange:e=>t(e.target.value),"aria-label":r(`Recherche lexique`)}),(0,q.jsx)(`dl`,{className:`lexicon`,children:n.map(e=>(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`dt`,{lang:`en`,children:e.term}),(0,q.jsxs)(`dd`,{children:[(0,q.jsx)(`b`,{children:e.french}),e.def&&` — ${e.def}`,` `,(0,q.jsxs)(`span`,{className:`muted small`,children:[`§`,e.section]})]})]},e.line))})]})}function Xn(e,t=9e3){let n=[];for(let r of[...new Set(e)]){let e=ze(r);if(!e||t<=0)continue;let i=`§${r} — ${e.title}\n${K.lines.slice(e.start,e.end).join(`
`)}`.slice(0,t);n.push(i),t-=i.length}return n.join(`

`)}function Zn(e=``){let t=document.querySelector(`main`),n=window.location.hash||`#/`,r=t?.querySelector(`h1`)?.textContent?.trim()||`Micro Lab`,i=t?.querySelector(`.block-card`),a=t?.querySelector(`[aria-current="step"]`)?.getAttribute(`aria-label`),o=[...t?.querySelectorAll(`[role="tab"][aria-selected="true"]`)??[]].map(e=>e.textContent?.trim()).filter(Boolean),s=[r,a||i?.querySelector(`h2`)?.textContent?.trim(),...o].filter(Boolean).join(` · `);if(!t)return{label:r,text:`Page : ${r}\nRoute : ${n}`};if(t.querySelector(`.claude-page`)){let e=p.find(e=>e.id===t.querySelector(`#claude-topic`)?.value);return{label:[r,e?.title].filter(Boolean).join(` · `),text:`Page : ${r}\nRoute : ${n}\nChapitre : ${e?.title??`Sans extrait`}\n\n${e?Xn(e.refs):``}`}}let c=[],l=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),u,d=0;for(;(u=l.nextNode())&&d<6e3;){let e=u.parentElement;if(!e||e.closest(`input, textarea, select, script, style, [hidden], [aria-hidden="true"], [data-claude-ui]`))continue;let t=u.textContent?.trim();if(!t)continue;let n=document.createRange();n.selectNodeContents(u);let r=n.getBoundingClientRect();!r.width||!r.height||r.bottom<0||r.top>window.innerHeight||(c.push(t),d+=t.length)}let f=[...t.querySelectorAll(`input[type="range"], input[type="checkbox"], select`)].filter(e=>e.getClientRects().length>0).map(e=>{let t=e.getAttribute(`aria-label`)||e.closest(`label`)?.textContent?.trim()||e.closest(`.axis-ctl`)?.querySelector(`.axis-top > span`)?.textContent?.trim()||e.id||`Réglage`,n=e instanceof HTMLSelectElement?e.selectedOptions[0]?.textContent:e.type===`checkbox`?e.checked?`affiché`:`masqué`:e.getAttribute(`aria-valuetext`)||e.value;return`${t.slice(0,100)} : ${n}`}).join(`
`),m=window.getSelection(),h=m?.anchorNode&&t.contains(m.anchorNode)?m.toString().trim().slice(0,1500):``,g=[i?.innerText.slice(0,6e3),c.join(` `)].filter(Boolean).join(`

`),_=[...g.matchAll(/§\s*(\d+(?:\.\d+)?)/g)].map(e=>e[1]),v=n.startsWith(`#/lesson/`)?P[n.slice(9)]:void 0,y=p.find(e=>v?(v.topic??`ext`)===e.id:[e.title,e.en].some(e=>g.toLowerCase().includes(e.toLowerCase())));y&&_.push(...y.refs),(n.startsWith(`#/lab`)||n.startsWith(`#/lesson/ext-positive`)||n.startsWith(`#/practice`))&&_.push(`11.1`,`11.2`,`11.3`);let b=n.startsWith(`#/source/`)?decodeURIComponent(n.slice(9)):``;b&&_.unshift(b);let x=(e,t)=>e.some(e=>{if(!e.trim())return!1;let n=e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`);return RegExp(`(^|[^A-Za-z])${n}([^A-Za-z]|$)`,`i`).test(t)}),S=K.abbr.filter(t=>x(t.names,e)),C=K.abbr.filter(e=>!S.includes(e)&&x(e.names,g.slice(0,4e3))),w=[...S,...C].slice(0,16).map(e=>`§18 — ${e.names.join(` / `)} : ${e.english} — ${e.french}`).join(`
`);return{label:s,text:[`Page : ${s}\nRoute : ${n}`,h&&`Texte sélectionné : ${h}`,`Bloc actuel et contenu visible :\n${g.slice(0,1e4)}`,f&&`Réglages actuels :\n${f.slice(0,1500)}`,w&&`Sigles du dossier :\n${w}`,`Extraits du dossier :\n${Xn(_,6500)}`].filter(Boolean).join(`

`).slice(0,2e4)}}var Qn=6e3,$n=class extends Error{constructor(e){super(e),this.name=`ClaudeError`}},er=`https://sse-micro-lab-1.onrender.com/api/claude/`;async function tr(e,t,n){try{let i=t?await je():null,a=await fetch(`${er}${e}`,{method:t?`POST`:`GET`,credentials:`omit`,cache:`no-store`,redirect:`error`,headers:{"x-micro-lab":`1`,...i?{authorization:`Bearer ${i}`}:{},...t?{"content-type":`application/json`}:{}},...t?{body:JSON.stringify(t)}:{},signal:n});if(!a.headers.get(`content-type`)?.includes(`application/json`))throw new $n(r(`L’assistant a besoin du serveur local : lance npm run dev et ouvre son lien localhost.`));let o=await a.json();if(!a.ok)throw new $n(typeof o.error==`string`?o.error:r(`L’assistant est indisponible. Réessaie.`));return o}catch(e){throw n?.aborted?new DOMException(`Envoi arrêté.`,`AbortError`):e instanceof $n?e:new $n(r(`Serveur local inaccessible. Lance npm run dev, puis réessaie.`))}}var nr=e=>tr(`status`,void 0,e);function rr(e,t,n,i){if(!e.at(-1)?.content.trim())throw new $n(r(`Écris une question avant de l’envoyer.`));if(e.at(-1).content.length>6e3)throw new $n(r(`Raccourcis ta question avant de l’envoyer.`));if(e.some(e=>/sk-ant-[a-zA-Z0-9_-]{10,}/.test(e.content)))throw new $n(r(`Ne colle pas de clé API dans la conversation. Elle est déjà lue sur le serveur.`));let o=e.slice(-11);return o[0]?.role===`assistant`&&o.shift(),tr(`messages`,{messages:o,context:t.slice(0,2e4),quick:n,lang:a},i)}function ir(e){let[t,n]=(0,G.useState)(null),[i,a]=(0,G.useState)(!1),[o,s]=(0,G.useState)([]),[c,l]=(0,G.useState)(``),[u,d]=(0,G.useState)(!1),[f,p]=(0,G.useState)(``),m=(0,G.useRef)(null),h=(0,G.useRef)(null),g=(0,G.useCallback)(async()=>{h.current?.abort();let e=new AbortController;h.current=e,a(!0),p(``);try{let t=await nr(e.signal);h.current===e&&n(t)}catch(t){h.current===e&&!e.signal.aborted&&(n(null),p(t instanceof Error?t.message:r(`Serveur inaccessible.`)))}finally{h.current===e&&(h.current=null,a(!1))}},[]);(0,G.useEffect)(()=>{g();let e=()=>{m.current?.abort(),m.current=null,s([]),l(``),d(!1),p(``)};return window.addEventListener(`pagehide`,e),()=>{window.removeEventListener(`pagehide`,e),m.current?.abort(),m.current=null,h.current?.abort(),h.current=null}},[g]);async function _(t){let n=c.trim();if(!n||m.current)return;if(/sk-ant-[a-zA-Z0-9_-]{10,}/.test(n)){l(``),p(r(`Ne colle pas de clé API dans la conversation. Le serveur la lit déjà dans le Trousseau macOS.`));return}let i=new AbortController;m.current=i;let a=o,u=[...o,{role:`user`,content:n,context:t.label,excerpt:t.text}];s(u),l(``),d(!0),p(``);try{let n=await rr(u.map((e,t)=>({role:e.role,content:e.content+(t<u.length-1&&e.excerpt?`\n\n<contexte_de_cette_question>\n${e.excerpt.slice(0,9e3)}\n</contexte_de_cette_question>`:``)})),t.text,e,i.signal);m.current===i&&s([...u,{role:`assistant`,content:n.text,truncated:n.truncated}])}catch(e){if(m.current!==i)return;s(a),l(n),p(e instanceof $n?e.message:r(`Envoi arrêté. Ta question est conservée.`))}finally{m.current===i&&(m.current=null,d(!1))}}function v(){m.current?.abort(),m.current=null,s([]),l(``),d(!1),p(``)}return{status:t,checking:i,turns:o,draft:c,setDraft:l,busy:u,error:f,refresh:g,send:_,clear:v,stop:()=>m.current?.abort()}}function ar({chat:e,context:t,quick:n=!1}){let i=(0,G.useRef)(null),a=(0,G.useRef)(null),o=n?`quick-question-input`:`claude-question`;(0,G.useEffect)(()=>{let e=i.current;e&&(e.scrollTop=e.scrollHeight)},[e.turns.length,e.busy]);function s(n){n?.preventDefault(),e.send(t())}return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`div`,{ref:i,className:`claude-conversation`,role:`log`,"aria-label":r(n?`Questions rapides à Claude`:`Conversation avec Claude`),"aria-live":`polite`,"aria-relevant":`additions`,"aria-busy":e.busy,children:[!e.turns.length&&(0,q.jsxs)(`div`,{className:`claude-empty`,children:[(0,q.jsx)(`h2`,{children:r(n?`Un détail qui bloque ?`:`Comprendre le pourquoi.`)}),(0,q.jsx)(`p`,{children:r(n?`Demande le sens d’un sigle ou d’une étape. Claude reçoit le contexte de la page sans que tu la quittes.`:`Claude reprend les acteurs, les incitations et les formules, comme dans la leçon sur les panneaux solaires.`)}),(0,q.jsx)(`div`,{className:`claude-prompts`,children:(n?[r(`Que signifie ce sigle dans ce contexte ?`),r(`Explique cette étape simplement.`)]:[r(`Explique ce chapitre avec une situation concrète, une idée à la fois.`),r(`Pose-moi une question pour vérifier si j’ai compris.`)]).map(t=>(0,q.jsxs)(`button`,{type:`button`,disabled:e.busy,onClick:()=>{e.setDraft(t),a.current?.focus()},children:[t,(0,q.jsx)(Q,{})]},t))})]}),e.turns.map((e,t)=>(0,q.jsxs)(`article`,{className:`claude-turn claude-turn-${e.role}`,children:[(0,q.jsxs)(`div`,{className:`claude-turn-label`,children:[e.role===`user`?r(`Toi`):`Claude`,e.context&&(0,q.jsx)(`span`,{children:e.context})]}),(0,q.jsx)(`div`,{className:`claude-message-text`,children:e.content}),e.truncated&&(0,q.jsx)(`p`,{className:`small muted`,children:r(`Réponse interrompue par la limite de longueur. Demande « Continue ».`)})]},t)),e.busy&&(0,q.jsxs)(`div`,{className:`claude-waiting`,role:`status`,children:[(0,q.jsxs)(`span`,{className:`claude-dots`,"aria-hidden":`true`,children:[(0,q.jsx)(`i`,{}),(0,q.jsx)(`i`,{}),(0,q.jsx)(`i`,{})]}),(0,q.jsx)(`span`,{children:r(`Claude réfléchit…`)})]})]}),e.error&&(0,q.jsx)(`p`,{className:`claude-error`,role:`alert`,children:e.error}),(0,q.jsxs)(`form`,{className:`claude-composer`,onSubmit:s,children:[(0,q.jsx)(`label`,{htmlFor:o,children:r(`Ta question`)}),(0,q.jsx)(`textarea`,{ref:a,id:o,rows:n?2:3,maxLength:n?2e3:Qn,value:e.draft,disabled:e.busy,onChange:t=>e.setDraft(t.target.value),placeholder:r(n?`Par exemple : MEB, ça veut dire quoi ?`:`Qu’est-ce qui te bloque dans le raisonnement ?`),onKeyDown:e=>{e.key===`Enter`&&(e.ctrlKey||e.metaKey)&&!e.nativeEvent.isComposing&&s(e)}}),(0,q.jsxs)(`div`,{className:`claude-composer-bottom`,children:[(0,q.jsxs)(`span`,{className:`small muted`,children:[`Sonnet 5.5 · effort `,r(n?`bas`:`moyen`)]}),e.busy?(0,q.jsxs)(`span`,{className:`claude-busy-actions`,children:[(0,q.jsx)(`span`,{className:`claude-spinner`,"aria-hidden":`true`}),(0,q.jsx)(`button`,{type:`button`,className:`ghost`,onClick:e.stop,children:r(`Arrêter`)})]}):(0,q.jsxs)(`button`,{type:`submit`,className:`primary`,disabled:!e.draft.trim(),children:[r(`Envoyer`),(0,q.jsx)(Q,{})]})]})]}),(0,q.jsxs)(`div`,{className:`claude-chat-actions`,children:[e.turns.length>0&&(0,q.jsx)(`button`,{type:`button`,className:`link small`,onClick:e.clear,children:r(`Effacer la conversation`)}),(0,q.jsx)(`button`,{type:`button`,className:`link small`,disabled:e.checking||e.busy,onClick:()=>void e.refresh(),children:e.checking?r(`Lecture de la configuration…`):r(`Actualiser la connexion`)})]})]})}function or({close:e}){let t=ir(!0),[n,i]=(0,G.useState)(()=>Zn()),a=(0,G.useRef)(null);return(0,G.useEffect)(()=>{document.getElementById(`quick-question-input`)?.focus({preventScroll:!0});let t=0,n=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>i(Zn()))},r=new MutationObserver(n),o=document.querySelector(`main`);o&&r.observe(o,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),window.addEventListener(`hashchange`,n),window.addEventListener(`scroll`,n,{passive:!0});let s=t=>{t.key===`Escape`&&a.current?.contains(document.activeElement)&&(t.stopPropagation(),e())};return window.addEventListener(`keydown`,s),()=>{r.disconnect(),cancelAnimationFrame(t),window.removeEventListener(`hashchange`,n),window.removeEventListener(`scroll`,n),window.removeEventListener(`keydown`,s)}},[e]),(0,q.jsxs)(`aside`,{ref:a,id:`quick-question-panel`,className:`quick-panel`,"aria-label":r(`Quick question avec Claude`),"data-claude-ui":!0,children:[(0,q.jsxs)(`header`,{className:`quick-head`,children:[(0,q.jsx)(`h2`,{children:`Quick question`}),(0,q.jsx)(`button`,{type:`button`,className:`icon-btn`,"aria-label":r(`Fermer Quick question`),onClick:e,children:(0,q.jsx)($e,{})})]}),(0,q.jsxs)(`div`,{className:`quick-context`,children:[(0,q.jsx)(`span`,{className:`small muted`,children:r(`Tu travailles sur`)}),(0,q.jsx)(`p`,{children:n.label})]}),(0,q.jsx)(`div`,{className:`quick-body`,children:(0,q.jsx)(ar,{quick:!0,chat:t,context:()=>{let e=Zn(t.draft);return i(e),e}})})]})}function sr(){let[e,t]=(0,G.useState)(!1),n=(0,G.useRef)(null),r=(0,G.useRef)(()=>{t(!1),n.current?.focus({preventScroll:!0})}).current;return(0,q.jsxs)(`div`,{className:`quick-question`,"data-claude-ui":!0,children:[e&&(0,q.jsx)(or,{close:r}),(0,q.jsxs)(`button`,{ref:n,type:`button`,className:`quick-trigger`,"aria-expanded":e,"aria-controls":`quick-question-panel`,onClick:()=>e?r():t(!0),children:[(0,q.jsx)(`span`,{"aria-hidden":`true`,children:`?`}),` Quick question`]})]})}var cr=[{id:`native`,title:r(`Compréhension en langue natale`),text:r(`Tout dans ta langue : explications, questions et graphiques.`)},{id:`english`,title:r(`Compréhension anglais`),text:r(`Explications dans ta langue ; questions, réponses et termes des graphiques en anglais, comme le jour de l’examen.`)}];function lr({className:e=``}){return a===`en`?null:(0,q.jsx)(`div`,{className:`mode-pick ${e}`,role:`radiogroup`,"aria-label":r(`Mode`),children:cr.map(e=>(0,q.jsxs)(`button`,{type:`button`,role:`radio`,"aria-checked":e.id===n,className:`mode-row ${e.id===n?`on`:``}`,onClick:()=>{e.id!==n&&u(e.id)},children:[(0,q.jsx)(`b`,{children:e.title}),(0,q.jsx)(`span`,{children:e.text})]},e.id))})}function ur({className:e=``}){return(0,q.jsxs)(`div`,{className:`lang-pick ${e}`,children:[(0,q.jsxs)(`p`,{className:`lang-head`,children:[(0,q.jsx)(`span`,{children:r(`Langue`)}),(0,q.jsx)(`span`,{className:`lang-current`,children:l.find(e=>e.id===a)?.name})]}),(0,q.jsx)(`div`,{className:`lang-grid`,role:`radiogroup`,"aria-label":r(`Langue`),children:l.map(e=>(0,q.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":e.id===a,lang:e.id,title:e.name,"aria-label":e.name,className:`lang-chip ${e.id===a?`on`:``}`,onClick:()=>{e.id!==a&&o(e.id)},children:e.id.toUpperCase()},e.id))})]})}var dr=()=>(0,q.jsxs)(`svg`,{viewBox:`0 0 18 18`,width:`18`,height:`18`,"aria-hidden":`true`,children:[(0,q.jsx)(`path`,{fill:`#4285F4`,d:`M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z`}),(0,q.jsx)(`path`,{fill:`#34A853`,d:`M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z`}),(0,q.jsx)(`path`,{fill:`#FBBC05`,d:`M3.97 10.72A5.4 5.4 0 0 1 3.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.05l3.01-2.33z`}),(0,q.jsx)(`path`,{fill:`#EA4335`,d:`M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z`})]}),fr=()=>(0,q.jsxs)(`svg`,{className:`login-graph`,viewBox:`0 0 500 290`,"aria-hidden":`true`,children:[(0,q.jsx)(`path`,{className:`lg-axis`,d:`M40 14V260H486`}),(0,q.jsx)(`text`,{className:`lg-ax`,x:`46`,y:`20`,children:`p`}),(0,q.jsx)(`text`,{className:`lg-ax`,x:`478`,y:`280`,children:`Q`}),(0,q.jsx)(`path`,{className:`lg-dwl`,d:`M250 90L250 120L285 100Z`}),(0,q.jsx)(`path`,{className:`lg-guide`,d:`M40 100H285V260M40 90H250V260`}),(0,q.jsx)(`path`,{className:`lg-d`,pathLength:`1`,d:`M40 30L460 150`}),(0,q.jsx)(`path`,{className:`lg-s`,pathLength:`1`,d:`M40 240L425 20`}),(0,q.jsx)(`path`,{className:`lg-st`,d:`M40 210L372 20`}),(0,q.jsx)(`circle`,{className:`lg-eq`,cx:`285`,cy:`100`,r:`5`}),(0,q.jsx)(`circle`,{className:`lg-eq2`,cx:`250`,cy:`90`,r:`5`}),(0,q.jsx)(`text`,{className:`lg-lab lg-lab-d`,x:`464`,y:`154`,children:`D`}),(0,q.jsx)(`text`,{className:`lg-lab lg-lab-s`,x:`430`,y:`24`,children:`S`}),(0,q.jsx)(`text`,{className:`lg-lab lg-lab-st`,x:`342`,y:`24`,children:`S+t`}),(0,q.jsx)(`text`,{className:`lg-read`,x:`320`,y:`208`,children:`Q*=7 · p*=16`}),(0,q.jsx)(`text`,{className:`lg-read lg-read2`,x:`320`,y:`230`,children:`t=3 · DWL=1.5`})]});function pr(){return(0,q.jsxs)(`div`,{className:`splash`,role:`status`,"aria-label":r(`Chargement…`),children:[(0,q.jsx)(`span`,{className:`splash-brand`,children:`Micro Lab`}),(0,q.jsx)(`span`,{className:`spinner`,"aria-hidden":`true`})]})}var mr={scene:`Tu veux installer des panneaux solaires sur ton toit. Un fabricant les vend. Tes voisins, eux, n’achètent rien — mais ils respirent l’air de la ville. Et l’État observe.`,q:`Qui est affecté par ton achat sans participer à la transaction ?`,options:[`Le fabricant`,`Tes voisins`,`L’État`,`Personne`],feedback:`Oui. Ils ne paient rien, ne signent rien, mais l’électricité solaire remplace une électricité plus polluante dans l’air qu’ils respirent.`};function hr({english:e}){let t=t=>e?c(t):r(t),n=a.toUpperCase();return(0,q.jsxs)(`div`,{className:`demo`,"aria-hidden":`true`,children:[(0,q.jsxs)(`div`,{className:`demo-bar`,children:[(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{}),(0,q.jsx)(`span`,{}),(0,q.jsx)(`i`,{className:`demo-time`})]}),(0,q.jsxs)(`div`,{className:`demo-body`,children:[(0,q.jsxs)(`p`,{className:`demo-tag`,children:[r(`Explication`),` · `,n]}),(0,q.jsx)(`p`,{className:`demo-scene`,children:r(mr.scene)}),(0,q.jsxs)(`p`,{className:`demo-tag`,children:[r(`Question`),` · `,e?`EN`:n]}),(0,q.jsx)(`p`,{className:`demo-q`,children:t(mr.q)}),(0,q.jsx)(`ul`,{className:`demo-options`,children:mr.options.map((e,n)=>(0,q.jsx)(`li`,{className:n===1?`right`:``,children:t(e)},e))}),(0,q.jsxs)(`p`,{className:`demo-feedback`,children:[(0,q.jsxs)(`b`,{children:[r(`Correction`),` · `,n]}),` `,r(mr.feedback)]}),(0,q.jsx)(`span`,{className:`demo-cursor`})]})]})}var gr=[{name:`Accueil`,text:`Ton compte à rebours, ta progression et la prochaine étape.`},{name:`Leçons`,text:`Les leçons guidées, du cas concret à la formule.`},{name:`Apprendre`,text:`Le Graph Lab et les « pourquoi » pour comprendre chaque courbe.`},{name:`S’entraîner`,text:`Exercices, rappel espacé, reconnaissance des modèles et examens.`},{name:`Piloter`,text:`Ta carte de maîtrise, tes erreurs et la préparation finale.`}];function _r({onEnter:e}){let t=ge().user?.name.split(` `)[0],n=Math.max(0,Math.floor((B.getTime()-Date.now())/864e5));return(0,q.jsxs)(`div`,{className:`welcome`,children:[(0,q.jsxs)(`header`,{className:`welcome-head`,children:[(0,q.jsx)(`h2`,{children:t?r(`Bienvenue dans tes révisions, {name}.`,{name:t}):r(`Bienvenue dans tes révisions.`)}),(0,q.jsxs)(`p`,{className:`welcome-days`,children:[(0,q.jsx)(`b`,{children:n}),` `,r(`jours avant le final`)]}),(0,q.jsx)(`p`,{className:`login-sub`,children:r(`Voici comment le labo est organisé.`)})]}),(0,q.jsx)(`ol`,{className:`welcome-tour`,children:gr.map((e,t)=>(0,q.jsxs)(`li`,{style:{"--i":t},children:[(0,q.jsx)(`b`,{children:r(e.name)}),(0,q.jsx)(`span`,{children:r(e.text)})]},e.name))}),(0,q.jsx)(`button`,{type:`button`,className:`google-btn google-btn-lg lang-go welcome-go`,onClick:e,children:r(`Entrer dans le labo`)})]})}var vr=`micro-lab-setup-v3`,yr=()=>{try{return localStorage.getItem(vr)===`1`}catch{return!0}},br=()=>{try{localStorage.setItem(vr,`1`)}catch{}};function xr({onDone:e}){let[i,s]=(0,G.useState)(`lang`),[c,d]=(0,G.useState)(n),[f,p]=(0,G.useState)(!1);return(0,G.useEffect)(()=>{i===`mode`&&t().then(()=>p(!0))},[i]),i===`welcome`?(0,q.jsx)(_r,{onEnter:()=>{br(),c===n?e():u(c)}}):i===`lang`?(0,q.jsx)(`div`,{className:`lang-prompt`,children:(0,q.jsxs)(`section`,{className:`login-card`,"aria-labelledby":`lang-title`,children:[(0,q.jsxs)(`p`,{className:`setup-step`,children:[`1 / `,a===`en`?1:2]}),(0,q.jsx)(`h2`,{id:`lang-title`,children:r(`Ta langue préférée`)}),(0,q.jsx)(`p`,{className:`login-sub`,children:r(`Tu pourras la changer plus tard dans le menu.`)}),(0,q.jsx)(`div`,{className:`lang-list`,role:`radiogroup`,"aria-label":r(`Langue`),children:l.map(e=>(0,q.jsxs)(`button`,{type:`button`,role:`radio`,"aria-checked":e.id===a,lang:e.id,className:`lang-row ${e.id===a?`on`:``}`,onClick:()=>{e.id!==a&&o(e.id)},children:[(0,q.jsx)(`span`,{children:e.name}),(0,q.jsx)(`span`,{className:`lang-code`,children:e.id.toUpperCase()})]},e.id))}),(0,q.jsx)(`button`,{type:`button`,className:`google-btn google-btn-lg lang-go`,onClick:()=>s(a===`en`?`welcome`:`mode`),children:r(`Continuer`)})]})}):(0,q.jsxs)(`div`,{className:`mode-prompt`,children:[(0,q.jsxs)(`header`,{children:[(0,q.jsx)(`p`,{className:`setup-step`,children:`2 / 2`}),(0,q.jsx)(`h2`,{children:r(`Comment veux-tu apprendre ?`)}),(0,q.jsx)(`p`,{className:`login-sub`,children:r(`Regarde la différence sur le même exercice, puis choisis. Tu pourras changer dans le menu.`)})]}),(0,q.jsx)(`div`,{className:`mode-cards`,role:`radiogroup`,"aria-label":r(`Mode`),children:cr.map(e=>(0,q.jsxs)(`button`,{type:`button`,role:`radio`,"aria-checked":c===e.id,className:`mode-card ${c===e.id?`on`:``}`,onClick:()=>d(e.id),children:[f?(0,q.jsx)(hr,{english:e.id===`english`}):(0,q.jsx)(`div`,{className:`demo demo-loading`}),(0,q.jsx)(`b`,{children:e.title}),(0,q.jsx)(`span`,{children:e.text})]},e.id))}),(0,q.jsxs)(`div`,{className:`mode-actions`,children:[(0,q.jsx)(`button`,{type:`button`,className:`ghost`,onClick:()=>s(`lang`),children:r(`Retour`)}),(0,q.jsx)(`button`,{type:`button`,className:`google-btn google-btn-lg lang-go`,onClick:()=>s(`welcome`),children:r(`Commencer`)})]})]})}function Sr(){let e=ge(),[t,n]=(0,G.useState)(!1),i=!!e.offline;return(0,q.jsxs)(`div`,{className:`login`,children:[(0,q.jsxs)(`section`,{className:`login-intro`,children:[(0,q.jsxs)(`h1`,{className:`login-brand`,children:[`Micro `,(0,q.jsx)(`mark`,{children:`Lab`})]}),(0,q.jsx)(`p`,{className:`login-lead`,children:r(`Un mécanisme à la fois : leçons guidées, exercices d’examen et révisions espacées.`)}),(0,q.jsx)(fr,{}),(0,q.jsxs)(`ul`,{className:`login-points`,children:[(0,q.jsx)(`li`,{children:r(`Leçons guidées, du cas concret à la formule`)}),(0,q.jsx)(`li`,{children:r(`Six examens corrigés et des exercices ciblés`)}),(0,q.jsx)(`li`,{children:r(`Ta progression sauvegardée sur tous tes appareils`)})]})]}),(0,q.jsxs)(`section`,{className:`login-card`,"aria-labelledby":`login-title`,children:[(0,q.jsx)(`p`,{className:`login-course`,children:`BE501 · Microeconomics · SSE`}),(0,q.jsx)(`h2`,{id:`login-title`,children:r(`Connexion`)}),(0,q.jsx)(`p`,{className:`login-sub`,children:r(`Connecte-toi pour accéder au laboratoire et garder ta progression.`)}),(0,q.jsxs)(`button`,{type:`button`,className:`google-btn google-btn-lg`,disabled:t,onClick:async()=>{n(!0);try{i?await Ee():await ke()}finally{n(!1)}},children:[t?(0,q.jsx)(`span`,{className:`spinner`,"aria-hidden":`true`}):(0,q.jsx)(dr,{}),r(i?`Réessayer`:`Se connecter avec Google`)]}),e.status===`error`&&(0,q.jsx)(`p`,{className:`login-error`,role:`alert`,children:r(i?`Connexion impossible. Vérifie ta connexion internet puis réessaie.`:`La connexion a échoué. Réessaie.`)}),(0,q.jsx)(`p`,{className:`login-privacy`,children:r(`Seuls ton nom, ton e-mail et ta progression sont enregistrés. Personne d’autre n’y a accès.`)}),(0,q.jsx)(ur,{className:`login-lang`})]})]})}var Cr=`cf333160-b5b4-431a-860c-32f55651094b`,wr=[{id:`request`,label:`Une demande`},{id:`error`,label:`Quelque chose de faux`},{id:`other`,label:`Autre`}];function Tr(){let e=ge().user,[t,n]=(0,G.useState)(`request`),[i,a]=(0,G.useState)(``),[o,s]=(0,G.useState)(`idle`);async function c(){s(`sending`);try{let n=location.hash||`#/`,r=await fetch(`https://api.web3forms.com/submit`,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify({access_key:Cr,subject:`Micro Lab — ${wr.find(e=>e.id===t).label}`,from_name:e?.name||`Micro Lab`,replyto:e?.email,message:`${i}\n\n— ${e?.name??``} <${e?.email??``}> · ${n} · ${navigator.language}`})}),o=await r.json().catch(()=>({}));if(!r.ok||!o.success)throw Error();s(`sent`),a(``)}catch{s(`error`)}}return(0,q.jsxs)(`section`,{className:`request`,"aria-labelledby":`request-title`,children:[(0,q.jsx)(`h2`,{id:`request-title`,children:r(`Demander quelque chose`)}),(0,q.jsx)(`p`,{className:`muted small`,children:r(`Une idée, une correction, une erreur dans un exercice : écris-le ici, le message part directement par e-mail. Ton nom et ton e-mail sont joints pour qu’on puisse te répondre.`)}),(0,q.jsx)(`div`,{className:`request-kinds`,role:`radiogroup`,"aria-label":r(`Type de message`),children:wr.map(e=>(0,q.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":t===e.id,className:`lang-chip ${t===e.id?`on`:``}`,onClick:()=>n(e.id),children:r(e.label)},e.id))}),(0,q.jsx)(`label`,{className:`sr-only`,htmlFor:`request-text`,children:r(`Ton message`)}),(0,q.jsx)(`textarea`,{id:`request-text`,rows:4,maxLength:4e3,value:i,placeholder:r(`Ton message`),disabled:o===`sending`,onChange:e=>{a(e.target.value),o!==`sending`&&s(`idle`)}}),(0,q.jsxs)(`div`,{className:`request-foot`,children:[(0,q.jsx)(`button`,{type:`button`,className:`primary`,disabled:!i.trim()||o===`sending`,onClick:()=>void c(),children:r(o===`sending`?`Envoi…`:`Envoyer`)}),o===`sent`&&(0,q.jsx)(`span`,{className:`request-ok`,role:`status`,children:r(`Message envoyé. Merci !`)}),o===`error`&&(0,q.jsx)(`span`,{className:`request-err`,role:`alert`,children:r(`L’envoi a échoué. Vérifie ta connexion et réessaie.`)})]})]})}var Er=e=>r(e===`syncing`?`Synchronisation…`:e===`error`?`Synchronisation en échec`:`Progression synchronisée`);function Dr(){let e=ge(),t=(0,G.useRef)(null),[n,i]=(0,G.useState)(``);return e.user?(0,q.jsxs)(`div`,{className:`page account-page`,children:[(0,q.jsx)(`header`,{className:`page-head`,children:(0,q.jsx)(`h1`,{children:r(`Profil`)})}),(0,q.jsxs)(`section`,{className:`settings-block`,children:[(0,q.jsxs)(`div`,{className:`profile-id`,children:[e.user.photo?(0,q.jsx)(`img`,{src:e.user.photo,alt:``,referrerPolicy:`no-referrer`}):(0,q.jsx)(`span`,{className:`account-initial`,"aria-hidden":`true`,children:(e.user.name||`?`).charAt(0).toUpperCase()}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`b`,{children:e.user.name}),(0,q.jsx)(`span`,{className:`account-status ${e.status}`,title:e.error,children:Er(e.status)})]})]}),(0,q.jsxs)(`dl`,{className:`profile-facts`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`dt`,{children:r(`Nom`)}),(0,q.jsx)(`dd`,{children:e.user.name||`—`})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`dt`,{children:r(`Adresse e-mail`)}),(0,q.jsx)(`dd`,{children:e.user.email||`—`})]})]}),(0,q.jsx)(`p`,{className:`muted small`,children:r(`Connecté avec Google : le mot de passe et l’adresse se gèrent dans ton compte Google.`)}),(0,q.jsx)(`button`,{type:`button`,className:`ghost`,onClick:()=>void Se(),children:r(`Se déconnecter`)})]}),(0,q.jsxs)(`section`,{className:`settings-block`,children:[(0,q.jsx)(`h2`,{children:r(`Sauvegarde de la progression`)}),(0,q.jsx)(`p`,{className:`muted small`,children:r(`Ta progression est synchronisée avec ton compte. Tu peux aussi l’exporter dans un fichier.`)}),(0,q.jsxs)(`div`,{className:`settings-actions`,children:[(0,q.jsx)(`button`,{type:`button`,className:`ghost`,onClick:()=>{let e=new Blob([ye()],{type:`application/json`}),t=document.createElement(`a`);t.href=URL.createObjectURL(e),t.download=`micro-lab-progress-${new Date().toISOString().slice(0,10)}.json`,t.click(),URL.revokeObjectURL(t.href)},children:r(`Sauvegarder`)}),(0,q.jsx)(`button`,{type:`button`,className:`ghost`,onClick:()=>t.current?.click(),children:r(`Restaurer`)}),(0,q.jsx)(`button`,{type:`button`,className:`ghost danger`,onClick:()=>{window.confirm(r(`Effacer toute ta progression locale ? (Pense à sauvegarder avant.)`))&&me()},children:r(`Réinitialiser`)}),(0,q.jsx)(`input`,{ref:t,type:`file`,accept:`application/json`,hidden:!0,onChange:async e=>{let t=e.target.files?.[0];if(t){try{be(await t.text()),i(r(`Progression restaurée.`))}catch(e){i(e.message)}e.target.value=``}}})]}),n&&(0,q.jsx)(`p`,{className:`small muted`,role:`status`,children:n})]})]}):null}function Or(){return(0,q.jsxs)(`div`,{className:`page account-page`,children:[(0,q.jsx)(`header`,{className:`page-head`,children:(0,q.jsx)(`h1`,{children:r(`Paramètres`)})}),(0,q.jsxs)(`section`,{className:`settings-block`,children:[(0,q.jsx)(`h2`,{children:r(`Langue`)}),(0,q.jsx)(ur,{})]}),a!==`en`&&(0,q.jsxs)(`section`,{className:`settings-block`,children:[(0,q.jsx)(`h2`,{children:r(`Mode d’étude`)}),(0,q.jsx)(lr,{})]})]})}function kr(){return(0,q.jsx)(`div`,{className:`page account-page`,children:(0,q.jsx)(Tr,{})})}function Ar(){let e=()=>window.location.hash.replace(/^#\/?/,``).split(`/`).filter(Boolean).map(decodeURIComponent),[t,n]=(0,G.useState)(e);return(0,G.useEffect)(()=>{let t=()=>{n(e()),window.scrollTo(0,0)};return window.addEventListener(`hashchange`,t),()=>window.removeEventListener(`hashchange`,t)},[]),t}var jr=[{label:r(`Accueil`),href:`#/`,items:[{href:`#/`,label:r(`Accueil`),key:``}]},{label:r(`Leçons`),href:`#/learn`,items:[{href:`#/learn`,label:r(`Leçons`),key:`learn`}]},{label:r(`Apprendre`),href:`#/lab`,items:[{href:`#/lab`,label:r(`Graph Lab`),key:`lab`},{href:`#/why`,label:r(`Pourquoi ?`),key:`why`}]},{label:r(`S’entraîner`),href:`#/practice`,items:[{href:`#/practice`,label:r(`Pratique`),key:`practice`},{href:`#/recall`,label:r(`Rappel`),key:`recall`},{href:`#/recognize`,label:r(`Reconnaître le modèle`),key:`recognize`},{href:`#/confusions`,label:r(`Confusions`),key:`confusions`},{href:`#/exam`,label:r(`Examen`),key:`exam`}]},{label:r(`Piloter`),href:`#/map`,items:[{href:`#/map`,label:r(`Carte de maîtrise`),key:`map`},{href:`#/final`,label:r(`Préparation finale`),key:`final`},{href:`#/mistakes`,label:r(`Mes erreurs`),key:`mistakes`},{href:`#/source`,label:r(`Source (dossier)`),key:`source`}]}];function Mr({head:e}){let t=ge();return t.user?(0,q.jsxs)(`div`,{className:`account-nav`,children:[(0,q.jsxs)(`a`,{href:`#/profile`,className:`account-user ${e===`profile`?`on`:``}`,"aria-current":e===`profile`?`page`:void 0,children:[t.user.photo?(0,q.jsx)(`img`,{src:t.user.photo,alt:``,referrerPolicy:`no-referrer`}):(0,q.jsx)(`span`,{className:`account-initial`,"aria-hidden":`true`,children:(t.user.name||`?`).charAt(0).toUpperCase()}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`b`,{children:t.user.name}),(0,q.jsx)(`span`,{className:`account-status ${t.status}`,title:t.error,children:Er(t.status)})]})]}),(0,q.jsx)(`a`,{href:`#/settings`,className:`nav-item ${e===`settings`?`on`:``}`,"aria-current":e===`settings`?`page`:void 0,children:r(`Paramètres`)}),(0,q.jsx)(`a`,{href:`#/request`,className:`nav-item ${e===`request`?`on`:``}`,"aria-current":e===`request`?`page`:void 0,children:r(`Demander quelque chose`)})]}):null}function Nr(){let[e,t]=(0,G.useState)(!1);return(0,G.useEffect)(()=>{let e=new AbortController;return nr(e.signal).then(()=>t(!0),()=>t(!1)),()=>e.abort()},[]),e}function Pr(){let e=Nr(),t=ge(),n=Ar(),i=H(),[a,o]=(0,G.useState)(!1),[s,c]=(0,G.useState)(yr),l=ve(i).length,u=De(i).length,[d,f,p]=n;(0,G.useEffect)(()=>o(!1),[d,f]);let m;if(!t.ready)return(0,q.jsx)(pr,{});if(!t.user)return(0,q.jsx)(Sr,{});if(!s)return(0,q.jsx)(xr,{onDone:()=>c(!0)});switch(d){case void 0:m=(0,q.jsx)(jt,{});break;case`learn`:m=(0,q.jsx)($t,{});break;case`lesson`:m=(0,q.jsx)(en,{id:f},f);break;case`lab`:m=(0,q.jsx)(cn,{preset:f});break;case`why`:m=(0,q.jsx)(dn,{id:f});break;case`practice`:m=(0,q.jsx)(fn,{id:f});break;case`recall`:m=(0,q.jsx)(Cn,{});break;case`recognize`:m=(0,q.jsx)(On,{id:f});break;case`confusions`:m=(0,q.jsx)(An,{id:f});break;case`exam`:m=(0,q.jsx)(Mn,{id:f});break;case`map`:m=(0,q.jsx)(Bn,{node:f});break;case`final`:m=(0,q.jsx)(Wn,{});break;case`mistakes`:m=(0,q.jsx)(Kn,{});break;case`source`:m=(0,q.jsx)(qn,{refId:[f,p].filter(Boolean).join(`/`)});break;case`profile`:m=(0,q.jsx)(Dr,{});break;case`settings`:m=(0,q.jsx)(Or,{});break;case`request`:m=(0,q.jsx)(kr,{});break;case`claude`:m=(0,q.jsx)(jt,{});break;default:m=(0,q.jsx)(jt,{})}return(0,q.jsxs)(`div`,{className:`shell`,children:[(0,q.jsxs)(`header`,{className:`topbar`,children:[(0,q.jsxs)(`a`,{href:`#/`,className:`brand`,children:[`Micro Lab `,(0,q.jsx)(`span`,{children:`BE501`})]}),(0,q.jsxs)(`button`,{type:`button`,className:`ghost menu-btn`,"aria-expanded":a,onClick:()=>o(!a),children:[r(`Menu`),l+u?` · ${l+u}`:``]})]}),(0,q.jsxs)(`nav`,{className:`sidebar ${a?`open`:``}`,"aria-label":r(`Navigation principale`),children:[(0,q.jsxs)(`a`,{href:`#/`,className:`brand brand-side`,children:[`Micro Lab `,(0,q.jsx)(`span`,{children:r(`BE501 · laboratoire`)})]}),jr.map(e=>{let t=d===`lesson`?`learn`:d??``,n=e.items.some(e=>e.key===t);return(0,q.jsxs)(`div`,{className:`nav-group ${n?`open`:``}`,children:[(0,q.jsxs)(`a`,{href:e.href,className:`nav-main ${n?`on`:``}`,"aria-current":n&&e.items.length===1?`page`:void 0,children:[e.label,!n&&e.href===`#/practice`&&l>0&&(0,q.jsx)(`span`,{className:`badge`,children:l}),!n&&e.href===`#/map`&&u>0&&(0,q.jsx)(`span`,{className:`badge warn`,children:u})]}),n&&e.items.length>1&&e.items.map(e=>(0,q.jsxs)(`a`,{href:e.href,className:`nav-item nav-sub ${t===e.key?`on`:``}`,"aria-current":t===e.key?`page`:void 0,children:[e.label,e.key===`recall`&&l>0&&(0,q.jsx)(`span`,{className:`badge`,children:l}),e.key===`mistakes`&&u>0&&(0,q.jsx)(`span`,{className:`badge warn`,children:u})]},e.key))]},e.href)}),(0,q.jsx)(Mr,{head:d})]}),(0,q.jsx)(`main`,{className:`main`,children:m}),e&&(0,q.jsx)(sr,{}),(0,q.jsx)(Ct,{})]})}export{Pr as default};