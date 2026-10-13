var e=`MICROECONOMIA SSE — DOSSIER DI RIPASSO E CONTESTO PER CHATGPT
Corso BE 501 — Richard Friberg — materiali 2026 ed esami 2020–2025
Preparato il 9 ottobre 2026. File di testo UTF-8, autonomo.

======================================================================
0. COME USARE QUESTO FILE E COSA COPRE
======================================================================

Obiettivo: capire i meccanismi, riconoscere il modello da applicare,
saper ricostruire le formule, calcolare, disegnare e spiegare in inglese.
Questo dossier è una sintesi didattica, non una soluzione ufficiale SSE.
I risultati numerici presentati come «ricalcolati» sono stati derivati dai
testi delle prove. Le risposte personali negli assignments non sono trattate
come un'autorità. I principali errori o ambiguità sono segnalati.

Corpus completo della cartella Microeconomics: 23 PDF, 373 pagine.
12 lezioni, 5 assignments numerati da 2 a 6, 6 esami finali dal 2020 al 2025.
Estrazione del testo di tutte le pagine; esame visivo delle lezioni e degli
assignments, con verifica delle tabelle inserite come immagini e dei
calcoli utili. L'ultima pagina dell'esame 2020 è bianca.
I numeri di pagina includono copertine, istruzioni e pagine bianche.

Limiti del corpus, da mantenere in ogni scheda prodotta a partire da esso:
- Non è presente alcun assignment 1 o 7.
- Sono presenti solo le lezioni da 1 a 12. Il calendario della Lecture 1
  annuncia ancora piattaforme e commercio internazionale nella settimana 7.
- Le aste e alcuni elementi di teoria dei giochi compaiono negli
  esami o negli assignments senza una lezione completa corrispondente qui.
- I sei PDF dei past exams sono testi di esami FINALI, non midterm,
  e non contengono soluzioni ufficiali.
- Una frequenza su sei vecchi esami descrive questo campione; non
  costituisce una probabilità di comparire nel prossimo esame.
- Le date, le regole e gli esempi di attualità citati sono quelli dei materiali.
  Questo dossier non verifica le regole amministrative attuali su Canvas.

Riferimenti di provenienza: L1-L12 = lezioni; A2-A6 = assignments;
E2020-E2025 = esami. «p.» indica la pagina del PDF, contata da 1.
«Complemento» = spiegazione standard ricostruita per svolgere un esercizio,
e non affermazione che sia stata trovata una lezione aggiuntiva.

PROMPT DA DARE A CHATGPT CON QUESTO FILE
«Sei il mio tutor di microeconomia per l'esame SSE BE 501. Usa questo
dossier come contesto principale. Spiega in italiano mantenendo i
termini e le abbreviazioni inglesi che incontrerò all'esame. A ogni
nuovo simbolo, sviluppa il suo nome inglese, traducilo, indica le sue unità
e il suo ruolo. Per ogni formula, spiega da dove viene, perché è
valida, le sue ipotesi, come riconoscerne l'uso e quando
non si applica. Fammi prima identificare l'obiettivo, i vincoli,
la variabile di scelta e il modello. Proponi esercizi progressivi,
lasciami provare, poi correggi il mio ragionamento e i miei grafici.
Allenami anche a dare risposte brevi e motivate in inglese.
Distingui gli elementi documentati, i risultati ricalcolati e i
complementi. Non inventare soluzioni ufficiali, frequenze o programma
mancante. Se chiedo schede, un sito o esercizi, copri anche
i casi limite e le trappole elencate qui.»

PIANO
1. Inventario e corrispondenza tra lezioni, assignments ed esami
2. Logica comune e strumenti matematici
3. Offerta, domanda, equilibrio e shock
4. Consumatore, preferenze, budget e domanda
5. Elasticità
6. Produzione, costi e offerta concorrenziale
7. Surplus, tasse, sussidi e prezzi regolamentati
8. Monopolio e concorrenza monopolistica
9. Discriminazione, segmentazione, bundling e tariffe
10. Oligopolio, Cournot, Bertrand e Stackelberg
11. Esternalità, inquinamento, beni pubblici e risorse comuni
12. Informazione asimmetrica, contratti e incentivi
13. Teoria dei giochi nell'Assignment 3
14. Complementi d'esame: commercio, piattaforme, aste e scambio
15. Assignments: risultati e metodi ricalcolati
16. Esami: mappa delle domande e risultati di riferimento
17. Formulario trasversale e scelta del metodo
18. Repertorio delle abbreviazioni e dei simboli
19. Lessico bilingue dei concetti e dei verbi d'esame
20. Trappole, correzioni, grafici e percorso di ripasso

======================================================================
1. INVENTARIO E MAPPA DEL PROGRAMMA
======================================================================

Tutti i nomi qui sotto sono relativi alla cartella Microeconomics.

S01 = assignments/Assignment3.pdf — 4 pagine.
S02 = assignments/Assignment2.pdf — 3 pagine.
S03 = assignments/Assignment4.pdf — 5 pagine.
S04 = assignments/Assignment5.pdf — 6 pagine.
S05 = assignments/Assignment6.pdf — 5 pagine.
S06 = lectures/Lecture 01 Micro 2026 15.16.11.pdf — 21 pagine.
S07 = lectures/Lecture 02 Micro 2026 15.16.11.pdf — 33 pagine.
S08 = lectures/Lecture 03 Micro 2026 15.16.11.pdf — 24 pagine.
S09 = lectures/Lecture 04 Micro 2026 15.16.11.pdf — 29 pagine.
S10 = lectures/Lecture 05 Micro 2026 15.16.11.pdf — 33 pagine.
S11 = lectures/Lecture 06 Micro 2026 15.16.11.pdf — 34 pagine.
S12 = lectures/Lecture 07 Micro 2026.pdf — 23 pagine.
S13 = lectures/Lecture 08 Micro 2026.pdf — 24 pagine.
S14 = lectures/Lecture 09 Micro 2026.pdf — 25 pagine.
S15 = lectures/Lecture 10 Micro 2026.pdf — 25 pagine.
S16 = lectures/Lecture 11 Micro 2026.pdf — 25 pagine.
S17 = lectures/Lecture 12 Mikro 2026.pdf — 20 pagine.
S18 = past exams/2020.pdf — 7 pagine.
S19 = past exams/2021.pdf — 5 pagine.
S20 = past exams/2022.pdf — 5 pagine.
S21 = past exams/2023.pdf — 6 pagine.
S22 = past exams/2024.pdf — 5 pagine.
S23 = past exams/2025.pdf — 6 pagine.

LEZIONI -> COMPETENZE -> APPLICAZIONI
L1, Introduction, Friberg 1.1–2.1 e 19: scarsità, scelta, allocazione,
  efficienza e distribuzione, ipotesi dei modelli, derivate.
L2, Supply and demand, Friberg 2.2–2.5: funzioni dirette/inverse,
  spostamenti delle curve, equilibrio ed effetti degli shock.
  Base per A4.2, A6.3 e per le politiche in tutti gli esami.
L3, Consumer choice, Friberg 5.1–5.6: preferenze, utilità ordinale,
  indifferenza, MRS, budget, scelta interna o d'angolo, bias comportamentali.
  A2.2; E2022 Q5; E2021 Q4e; definizioni della Q5.
L4, Demand curves and elasticities, Friberg 6.1–6.4: domanda individuale,
  aggregazione, compensazione ed elasticità. A2.1; E2020 Q5; Lerner.
L5, From technology to costs, Friberg 3.1–3.7: produzione, MP, isoquanti,
  produttività, minimizzazione dei costi, categorie di costo, rendimenti.
  Q5 di E2021, E2023, E2025; definizioni molto ricorrenti.
L6, Supply by price taking firms, Friberg 4.1–4.8: MR=MC, p=MC,
  chiusura di breve periodo, uscita di lungo periodo, aggregazione, entrata e profitto nullo.
  E2020 Q5, E2024 Q5; meccanismi della concorrenza monopolistica.
L7, Efficiency, Friberg 7.1–7.5: CS, PS, benessere, DWL, tetto/pavimento,
  tassa e sussidio. A4.2; politiche e grafici di tutti gli esami.
L8, Monopoly and monopolistic competition, Friberg 9.1–9.3: MR,
  potere di mercato, Lerner, barriere, entrata, imprese eterogenee.
  A4.1/A4.3; E2021 Q3; E2022 Q3; E2023 Q1; E2025 Q3d.
L9, Price discrimination, Friberg 12.1: di primo/terzo/secondo grado,
  IC/IR, bundling, abbonamento e two-part tariff.
  A5.1/A5.2; presente in tutti e sei i vecchi esami.
L10, Oligopoly, Friberg 10.1–10.3: Cournot, Nash, reazione, Stackelberg,
  Bertrand omogeneo e differenziato, numero di imprese, costi asimmetrici.
  A5.3; E2020/21/22/23 calcoli Cournot; E2024/25 calcoli Bertrand.
L11, Externalities, Friberg 13.1–13.2: costi/benefici privati e sociali,
  Pigou, emissioni, permessi, Coase, beni pubblici e risorse comuni.
  A6.1/A6.3; grandi esercizi E2020/23/24 e beni pubblici E2025.
L12, Asymmetric information, Friberg 14.1–14.4: adverse selection,
  lemons, segnale/screening, moral hazard, principale-agente, condivisione del rischio.
  A6.2; domande teoriche o numeriche in tutti e sei gli esami.
A3: giochi simultanei/sequenziali, preferenze sociali, impegni.
  Estensione del Nash accennato in L10; la copertina non precisa la
  disciplina di provenienza del compito. Non scartarlo perché atipico.

FORMATO E TENDENZE OSSERVATE
Gli esami 2020–2025 durano 4 ore, hanno quattro domande principali
per un totale di 83 punti e una Q5 sostitutiva del midterm, da 10 punti.
Le istruzioni richiedono risposte in inglese, strutturate e motivate.
Gli esami 2020–2023 precisano esplicitamente gli strumenti/calcolatrice ammessi; non
estrapolare un'autorizzazione attuale da un vecchio esame.
L1 p.17–18 annuncia per il 2026: esame il 23 ottobre, midterm il 28 settembre,
midterm su L1–L6, hand-ins 7 punti, midterm 10, final 83, totale 100.
Soglie indicate: Pass 50, Good 60, Very good 70, Excellent 80.

Conteggio per ANNO, non per numero di sottodomande:
- Potere di mercato e tariffazione/discriminazione: 6/6, 2020–2025.
- Tasse, sussidi o altra regolamentazione con ragionamento sul surplus:
  6/6, 2020–2025; include dazi doganali e tetto di prezzo nel 2023.
- Informazione asimmetrica: 6/6, 2020–2025.
- Beni pubblici in senso stretto: 5/6, 2020, 2021, 2022, 2024, 2025.
  Il 2023 tratta una risorsa comune/spettro; pubblico O comune = 6/6.
- Esternalità trattate esplicitamente oltre la semplice definizione di bene pubblico:
  5/6, 2020, 2021, 2023, 2024, 2025.
- Commercio internazionale o vantaggio comparato: 5/6,
  2020, 2021, 2022, 2024, 2025.
- Calcolo dell'equilibrio di Cournot: 4/6, 2020, 2021, 2022, 2023.
  Confronto qualitativo Cournot/Bertrand anche nel 2025.
- Calcolo di Bertrand differenziato: 2/6, 2024, 2025.
- Leadership sequenziale numerica: 2/6, 2021 in quantità, 2024 in prezzi.
- Aste esplicite: 2/6, 2023 e 2025.
- Piattaforme/effetti di rete/multihoming come modelli espliciti:
  2/6, 2022 e 2025; altri esami usano le piattaforme come contesto.
- Cinque definizioni elementari nella Q5 facoltativa: 6/6.

SCHEMA DI COSTRUZIONE DI UNA GRANDE DOMANDA
Definire un meccanismo -> risolvere un caso base -> modificare un'ipotesi
(tassa, entrata, costi, discriminazione, informazione o ordine delle decisioni)
-> confrontare gli equilibri -> disegnare -> spiegare l'intuizione.
I temi si combinano: monopolio + tassa, Cournot + costi asimmetrici,
sussidio + esternalità, piattaforma + discriminazione, credito + IC.

======================================================================
2. LOGICA COMUNE E STRUMENTI MATEMATICI
======================================================================

2.1 Lo scheletro di quasi tutti i problemi
1) Chi decide? Consumatore, impresa, banca, autorità, offerente.
2) Quale obiettivo? Utilità, profitto, costo minimo o surplus SOCIALE.
3) Quale variabile sceglie? Quantità, prezzo, sforzo, input, contratto.
4) Che cosa è dato? Prezzi, reddito, rivale, tecnologia, informazione.
5) Quali vincoli? Budget, produzione, capacità, non negatività,
   partecipazione, incentivo, divieto di rivendita, reazione del follower.
6) Scrivere la funzione obiettivo e le relazioni di coerenza.
7) Risolvere; verificare dominio, angoli, ottimo e partecipazione.
8) Tornare ai prezzi, quantità, profitti e surplus richiesti.
9) Spiegare perché una piccola deviazione non migliora l'obiettivo.

«Marginal» indica l'effetto di un'unità in più, o la derivata
in un modello continuo. «Average» indica il totale diviso per la quantità.
Una decisione marginale confronta beneficio aggiuntivo e costo
aggiuntivo. Un costo fisso inevitabile non compare in questo confronto,
ma conta nel profitto totale e nella decisione di restare nel lungo periodo.

2.2 Derivate e condizioni di ottimalità
y=f(x): f'(x)=dy/dx, pendenza locale. Con più variabili, usare
una derivata parziale tenendo costanti le altre.
d(k)/dx=0; d(ax)/dx=a; d(x^n)/dx=n*x^(n-1).
d[f(x)g(x)]/dx=f'(x)g(x)+f(x)g'(x), regola del prodotto.
Per p(Q)Q, MR=p(Q)+Q*p'(Q), e non solo p'(Q)Q.
Per una funzione concava, la FOC f'(x)=0 dà un massimo interno.
Verificare f''(x)<0 o confrontare i valori agli estremi se necessario.
Una FOC da sola non garantisce né un massimo, né una quantità ammissibile, né la produzione.

Per una somma attesa: E[X]=somma(probabilità dello stato * risultato).
Calcolare il risultato NETTO in ogni stato prima di ponderare.
Una sanzione applicata con probabilità d ha un costo atteso d*F.

2.3 Aree e unità
Rettangolo = base*altezza; triangolo = base*altezza/2.
Surplus = area tra disponibilità marginale a pagare e costo/prezzo rilevante.
Forma generale: area = integrale della differenza verticale in funzione di Q.
I triangoli presuppongono curve lineari nell'intervallo considerato.
Prezzo in moneta/unità * quantità in unità = moneta.
Se Q è in MIGLIAIA di tonnellate e p in dollari/tonnellata, l'area è in
MIGLIAIA di dollari. Questo punto cambia il risultato di un fattore 1000.
Un'elasticità non ha unità; una pendenza in genere sì.

2.4 Riscrivere prima di calcolare
Domanda diretta Q=a-bp -> domanda inversa p=a/b-Q/b.
Offerta diretta Q=-c+dp -> offerta inversa p=c/d+Q/d.
In un grafico di mercato: Q orizzontale, p verticale; tracciare le forme
inverse. Per sommare le domande private: sommare le quantità
allo stesso prezzo, non i prezzi. Per un bene pubblico: sommare i benefici
marginali allo stesso Q, quindi verticalmente.

======================================================================
3. OFFERTA, DOMANDA, EQUILIBRIO E SHOCK — L2
======================================================================

Domanda: quantità che gli acquirenti desiderano comprare a ciascun prezzo.
Offerta: quantità che i venditori desiderano vendere a ciascun prezzo.
Ipotesi del modello concorrenziale semplice: molti agenti, prodotti
omogenei, price takers; nessuna interazione strategica significativa.
Definire il mercato per prodotto, area geografica e periodo.

Esempio L2 p.7/16/20: QD=10-p, QS=-2+p.
Equilibrio: QD=QS ->10-p=-2+p ->p*=6, Q*=4.
A p=4: QD=6, QS=2, eccesso di domanda di 4, pressione al rialzo.
A p=8: QD=2, QS=6, eccesso di offerta di 4, pressione al ribasso.
Una quantità negativa prevista fuori dominio significa in genere quantità 0.

VARIAZIONE DEL PREZZO DEL BENE -> movimento LUNGO la sua curva.
VARIAZIONE DI UNA DETERMINANTE DIVERSA DA QUEL PREZZO -> spostamento della curva.
Domanda QD=f(p,T,p_r,I): gusti/temperatura T, altro prezzo p_r, reddito I.
Bene normale: il reddito aumenta -> la domanda si sposta a destra.
Bene inferiore: il reddito aumenta -> la domanda si sposta a sinistra.
Sostituti: il prezzo dell'altro bene aumenta -> domanda a destra.
Complementi: il prezzo dell'altro bene aumenta -> domanda a sinistra.
Il costo di un input aumenta -> offerta a sinistra/verso l'alto.
Tecnologia migliore/entrata di produttori -> offerta a destra/verso il basso.

A parità di altre condizioni, per curve usuali:
D a destra: p aumenta, Q aumenta. D a sinistra: p diminuisce, Q diminuisce.
S a destra: p diminuisce, Q aumenta. S a sinistra: p aumenta, Q diminuisce.
D a destra E S a sinistra: p aumenta, effetto su Q ambiguo.
D a destra E S a destra: Q aumenta, effetto su p ambiguo.
D a sinistra E S a sinistra: Q diminuisce, effetto su p ambiguo.
D a sinistra E S a destra: p diminuisce, effetto su Q ambiguo.
Non concludere su una variabile ambigua senza la dimensione relativa degli shock.

Sensibilità: per un dato shock di domanda, un'offerta ripida implica
una forte variazione di prezzo e una debole variazione di quantità.
Un'offerta più piatta assorbe di più lo shock tramite la quantità.
Applicazioni L2: raccolti di grano, tè/caffè, riso, palladio.
Spiegare con «a prezzo dato, si offrirebbe/domanderebbe di più/di meno»,
e solo dopo cercare il nuovo equilibrio.

======================================================================
4. CONSUMATORE, PREFERENZE, BUDGET E DOMANDA — L3–L4
======================================================================

4.1 Preferenze e utilità
Completezza: possibilità di ordinare due panieri, inclusa l'indifferenza.
Transitività: se A è preferito a B e B a C, A è preferito a C.
Non sazietà / more-is-better: di più dei beni desiderabili è preferibile.
Utilità ordinale: U ordina i panieri; un'utilità 100 non indica
il doppio della felicità di un'utilità 50. Una trasformazione strettamente
crescente rappresenta le stesse preferenze.
Esempio L3: U(E,F)=sqrt(EF), con E entertainment, F food.
U=EF dà lo stesso ordinamento per E,F positivi; i livelli numerici
e le derivate cambiano, non le scelte ottime.

MU_x = derivata parziale di U rispetto a x: utilità marginale del bene x.
Utilità marginale decrescente: un'unità in più aggiunge sempre meno
utilità, a quantità data dell'altro bene. Non confondere questa
proprietà con il carattere ordinale dell'utilità.

Curva di indifferenza: panieri che danno lo stesso U. Con preferenze usuali,
è decrescente, convessa verso l'origine, non incrocia un'altra curva
dello stesso consumatore; le curve più a nord-est sono preferite.
Due beni desiderabili: una pendenza positiva è incompatibile con more-is-better.
Se il tè è orizzontale e il caffè verticale, indifferenze orizzontali: conta
solo il caffè; il tè non dà utilità marginale (L3 p.10).

4.2 MRS e budget: non invertire mai gli assi senza adattare i rapporti
Con x orizzontale e y verticale, lungo un'indifferenza:
0=MU_x*dx+MU_y*dy ->dy/dx=-MU_x/MU_y.
MRS_xy=MU_x/MU_y, valore assoluto di questa pendenza: quantità di y che il
consumatore è disposto a cedere per un'unità in più di x.
In L3, F orizzontale ed E verticale: pendenza=-MU_F/MU_E.

Budget p_x*x+p_y*y <= I; uguaglianza all'ottimo con non sazietà e prezzi positivi.
y=I/p_y-(p_x/p_y)*x; intercette x=I/p_x e y=I/p_y.
Il reddito aumenta: spostamento parallelo verso l'esterno, prezzi invariati.
Il prezzo di x aumenta: intercetta y invariata, intercetta x diminuisce, budget più ripido.
Una variazione di prezzo riduce il potere d'acquisto; non cambia necessariamente
il reddito nominale I.

4.3 Ottimo interno
Max U(x,y) soggetto al budget. In una tangenza interna:
MU_x/MU_y=p_x/p_y, ossia MU_x/p_x=MU_y/p_y.
Intuizione: l'ultimo euro dà la stessa utilità marginale nei due
usi. Altrimenti spostare una piccola spesa verso l'uso migliore aumenta U.
Usare questa condizione INSIEME AL budget, non al suo posto.
Presuppone una soluzione interna e preferenze sufficientemente
regolari; confrontare angoli e spigoli quando necessario.

Complemento di calcolo, Cobb-Douglas U=x^alpha*y^beta, alpha,beta>0:
x*=alpha/(alpha+beta)*I/p_x; y*=beta/(alpha+beta)*I/p_y.
Giustificazione: MRS=(alpha/beta)*(y/x)=p_x/p_y, poi il budget.
Per U=xy: metà del reddito su ciascun bene, non metà del numero di unità.

4.4 Sostituti e complementi perfetti
Sostituti perfetti U=ax+by: MRS=a/b costante; confrontare a/p_x con b/p_y.
Tutto su x se a/p_x>b/p_y; tutto su y nel caso inverso; ogni combinazione sul
budget è ottima in caso di uguaglianza. Non serve una tangenza unica.
Esempio L4 p.10: 2 macchiati equivalgono a 1 cappuccino, stessi prezzi:
comprare solo cappuccini, più utilità per euro.
Complementi perfetti U=min(x/a,y/b): scegliere nello spigolo x/a=y/b,
perché le unità non appaiate non aggiungono nulla. Esempio scarpe sinistra/destra.
Per un paio 1:1: x=y=I/(p_x+p_y).

4.5 Domanda e reddito
Ricalcolare l'ottimo per ogni prezzo di x, tenendo costanti I e gli altri prezzi;
le coppie (p_x,x*) tracciano la domanda individuale.
Curva di Engel: quantità ottima in funzione del REDDITO, prezzi costanti.
Bene normale: la quantità aumenta con I; inferiore: diminuisce con I.
Uno stesso bene può essere normale a basso reddito e inferiore ad alto reddito
(L4 esempio delle notti in ostello).
Bene di lusso: elasticità al reddito >1; bene necessario normale: tra 0 e 1.
Queste qualifiche non classificano la qualità intrinseca del bene.

4.6 Sostituzione, reddito e compensazione
Un aumento di prezzo rende x relativamente più caro: sostituzione verso y.
Riduce anche il potere d'acquisto: effetto reddito.
L4 p.11–13: tassa sulla benzina, poi trasferimento forfettario sufficiente per
raggiungere la VECCHIA indifferenza ai NUOVI prezzi. L'utilità può essere
mantenuta mentre il consumo di benzina diminuisce per sostituzione.
Questo trasferimento non elimina il nuovo prezzo relativo.
E2022 Q5: trasferimento che permette di comprare il VECCHIO PANIERE dopo la soppressione
di un sussidio alimentare. Il vecchio paniere resta accessibile; con una
vecchia soluzione interna e un'indifferenza strettamente convessa,
riscegliere sul nuovo budget dà in genere un'utilità superiore.
Vecchio paniere accessibile e vecchia utilità appena raggiunta sono due
criteri di compensazione distinti. La garanzia generale è «non
peggio»; il miglioramento stretto richiede condizioni di tangenza/angolo.

4.7 Domanda di mercato
QD(p)=somma_i max(0,q_i(p)). Somma ORIZZONTALE a prezzo dato.
L4 p.19: q_H=10-p, q_L=5-p.
QD=0 per p>=10; QD=10-p per 5<p<10; QD=15-2p per 0<=p<=5.
La domanda inversa aggregata ha uno spigolo; verificare il segmento di ogni ottimo.

4.8 Comportamento, preferenze sociali e limiti
L3: l'utilità può includere altruismo, status, rispetto, orgoglio e malevolenza.
Massimizzare l'utilità non equivale quindi a massimizzare il solo proprio consumo.
Ultimatum game: possibile rifiuto di un'offerta monetaria positiva per equità.
Mancanza di autocontrollo: gratificazione immediata contro interesse futuro.
Euristiche: regole semplici quando l'ottimizzazione è difficile.
Loss aversion: le perdite possono pesare più di guadagni comparabili.
Framing: la presentazione di una scelta influenza la decisione.
Overconfidence: fiducia eccessiva nelle proprie capacità/informazioni.
Preferenze sociali in A3: convertire i guadagni monetari in UTILITÀ
prima di cercare le migliori risposte.

======================================================================
5. ELASTICITÀ — L4 E A2
======================================================================

Elasticità di Q rispetto a z: variazione % di Q per una variazione dell'1%
di z, localmente. Forma discreta di L4: (Delta Q/Q0)/(Delta z/z0).
Forma puntuale: epsilon_Q,z=(dQ/dz)*(z/Q); derivata parziale se serve.

Prezzo proprio: epsilon_D=(dQD/dp)*(p/QD), in genere negativa.
Offerta: epsilon_S=(dQS/dp)*(p/QS), in genere positiva.
Prezzo incrociato: epsilon_ij=(partial Q_i/partial p_j)*(p_j/Q_i).
Reddito: eta=(partial Q/partial I)*(I/Q).
Prezzo incrociato positivo -> sostituti; negativo -> complementi.
Reddito negativo -> inferiore; positivo -> normale; >1 -> lusso.
Domanda anelastica: -1<epsilon_D<0; unitaria: -1; elastica: <-1.
Perfettamente anelastica: 0, curva verticale. Perfettamente elastica:
valore assoluto infinito, curva orizzontale nel caso limite.

Approssimazione della variazione: %Delta Q ≈ epsilon * %Delta z.
Obiettivo di quantità: %Delta z ≈ %Delta Q / epsilon.
Mantenere il segno: un calo di prezzo ed epsilon negativo danno un aumento di Q.
Per una variazione ampia, precisare la convenzione; l'approssimazione
lineare non è un'identità di una funzione a elasticità costante.
Se Q=A*p^epsilon, esattamente: Q1/Q0=(p1/p0)^epsilon.
Elasticità d'arco (complemento): usare le medie (Q0+Q1)/2 e
(p0+p1)/2 in entrambe le percentuali. Non mescolare le convenzioni.

Esempi L4: Q passa 6->4, p 1->2: epsilon su base iniziale=-1/3.
epsilon=-1.5, il prezzo cala del 10% ->Q aumenta circa del 15%.
epsilon=-0.5, obiettivo Q +5% ->prezzo circa -10%.
eta=-2, reddito +10% ->Q circa -20%.

Domanda lineare Q=a-bp: derivata=-b costante, epsilon=-b*p/(a-bp)
VARIABILE. Più p è alto, più |epsilon| è grande, a parametri fissi.
Domanda inversa p=A-BQ: epsilon=-p/(B*Q).
Non usare dp/dQ al posto di dQ/dp senza prendere l'inverso.
Ricavo R=pQ: dR/dp=Q*(1+epsilon_D).
Domanda elastica: un aumento di prezzo riduce R; anelastica: un aumento di prezzo
aumenta R; unitaria: ricavo localmente stazionario.
Il profitto dipende anche dai costi: ricavo massimo e profitto massimo
non sono sempre allo stesso prezzo.

Orizzonte lungo -> spesso più possibilità di sostituzione.
Definizione stretta di un prodotto -> spesso più sostituti.
L4 studio sull'alcol, valori del MATERIALE, non regole universali:
Own-price spirits -1.3, beer -0.9, wine -0.2; cross-price Danimarca
0.3/0.5/0.2; income 1.4/1.0/0.6; stores e Fridays 0.1/0.2/0.2.
Questi numeri illustrano la stima empirica, non una formula da memorizzare.

======================================================================
6. PRODUZIONE, COSTI E OFFERTA CONCORRENZIALE — L5–L6
======================================================================

6.1 Tecnologia e prodotti marginali
Funzione Q=f(K,L): quantità ottenuta con capitale K e lavoro L.
MP_L=partial Q/partial L; MP_K=partial Q/partial K.
AP_L=Q/L, prodotto medio; discreto MP=Delta Q/Delta L, K fisso.
L5 p.11: Q=50 con L=9, 54 con L=10, 56 con L=11.
Prodotto del 10° lavoratore=4; prodotto medio a 10=54/10=5.4.
Rendimento marginale decrescente: un input aumenta, l'altro resta fisso.
Esempio L5: Q=sqrt(KL), MP_L=0.5*sqrt(K/L), MP_K=0.5*sqrt(L/K).
Complemento Cobb-Douglas Q=A*K^alpha*L^beta:
MP_L=beta*Q/L; MP_K=alpha*Q/K.
A coglie la produttività totale dei fattori, TFP: più output con
gli stessi input, o meno input per lo stesso output.

Assunzioni, output venduto al prezzo dato p: continuare finché p*MP_L>w.
In un ottimo interno concorrenziale: p*MP_L=w.
Con potere di mercato sull'output, sostituire p con MR (complemento).
L5 peste nera: meno lavoro rispetto alla terra può aumentare
il prodotto marginale del lavoro e il salario, a tecnologia data.

6.2 Isoquanti, isocosti e costo minimo
Isoquanto: combinazioni K,L che producono lo stesso Qbar.
Con L orizzontale, K verticale: pendenza=-MP_L/MP_K.
MRTS_LK=MP_L/MP_K: capitale risparmiabile per unità di L aggiunta.
Isocosto: C=wL+rK ->K=C/r-(w/r)L, pendenza=-w/r.
Minimizzare wL+rK sotto f(K,L)>=Qbar; uguaglianza con tecnologia usuale.
Ottimo interno: MP_L/MP_K=w/r, ossia MP_L/w=MP_K/r.
L'ultimo euro deve creare lo stesso output marginale nei due input.
Aumento di w: lavoro relativamente più caro -> combinazione più intensiva
in capitale sullo stesso isoquanto, se la sostituzione è possibile. Il costo minimo
non può diminuire quando il prezzo di un input aumenta, a parità di altre condizioni.
Non limitarsi a ruotare il vecchio isocosto: cercare anche il nuovo
isocosto tangente, in genere più costoso, per il Q imposto.

Esempio complemento per Q=sqrt(KL): K/L=w/r; KL=Qbar^2.
L*=Qbar*sqrt(r/w), K*=Qbar*sqrt(w/r), C*=2*Qbar*sqrt(wr).
Per Q=K*L, isoquanto K=Qbar/L, diverso da sqrt(KL).
E2025 Q5: isocosto 1000=50L+100K ->K=10-0.5L; intercette 20 e 10.
Una produzione «ben comportata» non fornisce valori numerici
di L*,K* senza una funzione di produzione più precisa; l'ottimo si disegna.

6.3 Rendimenti di scala ed economie di scala
Moltiplicare TUTTI gli input per t>1 e confrontare f(tK,tL) con t*f(K,L).
Maggiore -> increasing returns to scale; uguale -> constant; minore
-> decreasing. Cobb-Douglas: confrontare alpha+beta con 1.
I rendimenti riguardano la TECNOLOGIA. Le economie di scala riguardano
il COSTO MEDIO di lungo periodo: ATC diminuisce con Q. Diseconomie: ATC aumenta.
Un prodotto marginale decrescente di un fattore non implica rendimenti
di scala decrescenti: sqrt(KL) ha MP decrescenti e rendimenti costanti.

6.4 Tabella dei costi
TC=C(Q)=FC+VC(Q).
ATC=AC=TC/Q; AFC=FC/Q; AVC=VC/Q; ATC=AFC+AVC.
MC=dTC/dQ=dVC/dQ, perché la derivata di FC costante=0.
MC discreto dell'unità successiva: C(Q+1)-C(Q).
MC<ATC ->ATC diminuisce; MC>ATC ->ATC aumenta.
Nel minimo interno di ATC: MC=ATC. Stessa logica per AVC.
Costo fisso non significa automaticamente sunk: verificare se è
recuperabile/evitabile nell'orizzonte della decisione.
Breve periodo: almeno un input fisso. Lungo periodo: tutti modificabili,
senza una durata di calendario universale. Costo di lungo periodo <= costo di breve
a Q dato, perché offre più scelta di input.

Esempio L5 C=30+Q^2 a Q=2: TC34, FC30, VC4, ATC17, AVC2, AFC15,
MC continuo4; costo discreto per passare da 2 a 3=5.
Non confondere questi due significati del costo marginale.

6.5 Profitto e offerta di un'impresa price taker
pi(q)=p*q-C(q). MR=p perché un'impresa non cambia il prezzo di mercato.
La massimizzazione del profitto è l'ipotesi del modello. L6 p.3 invita anche
a discutere orizzonte temporale, altri obiettivi e corporate social
responsibility: responsabilità sociale d'impresa. Ciò non cambia
una FOC data finché il testo non specifica un altro obiettivo.
FOC p=MC(q). L'offerta è la parte rilevante crescente di MC sopra
la soglia di chiusura, confrontando con q=0.
Esempio L6 C=10+q^2, p12: MC2q ->q6; R72, C46, pi26.
Per ogni p ammissibile: q=p/2; a p0, q0.
Minimo di ATC per questo esempio: q=sqrt(10), prezzo=2sqrt(10)≈6.325.
pi=(p-ATC)*q. PS=pq-VC=pi+FC; PS non è necessariamente il profitto.

6.6 Produrre o chiudere?
Breve periodo, FC inevitabile: produrre se la quantità migliore dà
R>=VC, ossia p>=AVC(q*); altrimenti q=0 e perdita=-FC.
La soglia standard è min AVC, con ipotesi usuali.
Se AVC<p<ATC, produrre in perdita può minimizzare la perdita: una parte di FC
è coperta. Con R=VC esatto, indifferenza tra produrre e chiudere.
Lungo periodo: restare/entrare solo se il profitto economico è >=0,
quindi p>=ATC al livello ottimo. Altrimenti uscita quando possibile.
L6 T-shirt: MC5 fino a q10, poi MC15, p10 ->q10. FC25 dà pi25;
FC40 dà pi10. La variazione di FC non modifica la quantità interna.

6.7 Offerta di mercato, entrata e costo opportunità
Sommare orizzontalmente le offerte individuali, escludendo le
quantità negative. L6 q1=p-2, q2=p-4:
QS=0 per p<2; p-2 per 2<=p<4; 2p-6 per p>=4.
Aumento della domanda: prezzo/profitti salgono nel breve periodo -> entrata -> offerta
di mercato a destra -> calo di prezzo/profitto fino al profitto economico nullo.
Con imprese identiche replicabili a costo costante, p_LR=min ATC,
q per impresa torna al livello efficiente, quantità di mercato e numero di
imprese aumentano. Questo risultato non descrive tutti i settori.
Input scarso a livello di settore -> l'offerta LR può crescere; apprendimento
o economie esterne -> può decrescere.

Costo contabile: spese esplicite. Costo economico: include il valore
della migliore alternativa sacrificata, senza doppio conteggio.
Naomi L6: forniture 30.000 + consegna 10.000 ->contabile 40.000;
stipendio alternativo 50.000 ->economico 90.000.
Profitto economico nullo non implica né stipendio nullo né assenza di reddito:
i fattori ricevono già la loro remunerazione di opportunità.
Rendita economica: reddito legato a una risorsa scarsa oltre il suo uso
alternativo rilevante; diversa dal semplice affitto contabile.
======================================================================
7. SURPLUS, TASSE, SUSSIDI E PREZZI REGOLAMENTATI — L7
======================================================================

7.1 Chi riceve cosa?
CS, consumer surplus: valore totale per gli acquirenti meno i loro pagamenti.
CS=integrale_0^Q [p_D(q)-p_b] dq, se le unità vanno agli acquirenti che le
valutano di più. Per p_D=a-bQ: CS=(a-p_b)*Q/2.
PS, producer surplus: ricavi al netto della tassa meno costo variabile.
PS=integrale_0^Q [p_s-MC(q)] dq; per p_S=c+dQ: PS=(p_s-c)*Q/2.
Profitto=PS-FC. Con prezzi diversi, integrare i ricavi effettivi
invece di usare un unico rettangolo pQ.
Benessere W=CS+PS nel modello senza Stato né esternalità, a costi fissi
invariati. Con lo Stato: aggiungere il gettito fiscale, sottrarre la spesa per
sussidi. Con esternalità: aggiungere benefici esterni, sottrarre danni.
Quando cambiano l'entrata o i costi fissi, includere anche questi costi reali.

Una somma di surplus misura l'efficienza monetaria, non l'equità.
Un trasferimento da CS a PS non è di per sé una DWL. Una perdita secca
è una perdita NETTA di surplus rispetto al benchmark efficiente.
Il modello concorrenziale massimizza W se la domanda è il beneficio marginale
sociale, l'offerta il costo marginale sociale e le altre ipotesi valgono.
Monopolio, esternalità o informazione asimmetrica possono rompere questo risultato.

L7 esempio: p_D=23-Q, p_S=2+2Q ->Q7,p16.
CS=(23-16)*7/2=24.5; PS=(16-2)*7/2=49; W73.5.
Se Q è limitata a 5 e il prezzo è 18: CS12.5; PS55; W67.5; DWL6.
Qui i produttori guadagnano 6 mentre i consumatori perdono 12:
la perdita sociale è 6, non 12.

7.2 Tassa unitaria: scrivere TRE relazioni
QD(p_b)=QS(p_s)=Q; p_b=p_s+t.
Il consumatore paga p_b; il produttore tiene p_s; lo Stato riceve tQ.
Che la legge faccia versare la tassa all'acquirente o al venditore non cambia
l'equilibrio di questo modello, a parità di tassa e di possibilità di scambio.

Per p_D=a-bQ e p_S=c+dQ, b,d>0, soluzione interna:
Q0=(a-c)/(b+d); Qt=(a-c-t)/(b+d).
p_b=a-bQt; p_s=c+dQt; T=tQt.
Aumento del prezzo per l'acquirente=b*t/(b+d).
Calo del prezzo per il venditore=d*t/(b+d).
DWL=t*(Q0-Qt)/2=t^2/[2(b+d)], SENZA esternalità/potere di mercato.
Oltre la tassa proibitiva, Q=0; non prolungare le formule verso Q<0.

Incidenza economica: il lato meno elastico sopporta di più.
Forma locale concorrenziale: quota acquirente=epsilon_S/(epsilon_S+|epsilon_D|),
quota venditore=|epsilon_D|/(epsilon_S+|epsilon_D|).
Queste quote non sono una regola generale di oligopolio o monopolio.
Una base poco elastica genera minore variazione di Q, quindi in genere
meno DWL per uno stesso prelievo, con le ipotesi di confronto.

L7 tassa t3: Q6,p_b17,p_s14,T18; CS18,PS36,W72,DWL1.5.
I rettangoli trasferiti allo Stato non sono distrutti.
Una tassa può comunque finanziare un bene pubblico o correggere un'esternalità:
la sua DWL non basta a giudicare l'intera politica.

7.3 Sussidio unitario
QD(p_b)=QS(p_s)=Q; p_s=p_b+s.
L'acquirente paga meno, il venditore riceve di più, lo Stato paga sQ.
Qs=(a-c+s)/(b+d); W=CS+PS-sQ.
Senza esternalità: DWL=s*(Qs-Q0)/2. Le unità aggiuntive hanno un costo
reale superiore al loro beneficio. Con esternalità positiva, questa formula
senza correzione esterna può dare la diagnosi sbagliata.
L7 s3: Q8,p_b15,p_s18; CS32,PS64,spesa24,W72,DWL1.5.

7.4 Prezzo massimo e minimo
Price ceiling / cap: prezzo massimo. Vincolante se il tetto è sotto p* nel
caso usuale. Quantità scambiata spesso limitata da QS; penuria QD-QS.
Disegnare il tetto orizzontale; leggere QS e QD separatamente.
Il CS dipende anche dal razionamento: la formula standard suppone che le
unità disponibili vadano agli acquirenti con la WTP più alta.
Razionamento casuale, code e ricerca possono aggiungere perdite.
Il PS diminuisce; il CS può aumentare O diminuire; W diminuisce senza altri fallimenti.
L7 tetto 12: QS5,QD11; scambi 5; CS42.5,PS25,W67.5,DWL6.
Un tetto >=p* non è vincolante nel modello concorrenziale semplice.

Price floor: prezzo minimo, vincolante sopra p*. Eccesso di offerta.
Senza acquisti pubblici, quantità venduta limitata da QD; non contare QS
come quantità consumata. Con acquisti pubblici, includere il loro costo e la
sorte dell'invenduto. Il risultato di benessere dipende da questo dispositivo.

E2023 petrolio russo: non applicare meccanicamente «tetto ->penuria».
Offerta russa verticale oltre 50, tetto 60 invece di 90: stesso volume
8 milioni di barili/giorno; trasferimento di rendita 30*8 milioni=240 milioni
USD/giorno. Nessun calo di questa offerta con queste ipotesi; il tetto
riguarda un fornitore, non necessariamente il prezzo dell'intero mercato mondiale.

7.5 Tasse e gettito: una conclusione da verificare
Revenue=t*Q(t). Ridurre t abbassa il prelievo per unità ma può aumentare
il volume. Il segno di Delta revenue non è universale senza numeri.
Con domanda anelastica e piccola riduzione della tassa, il volume varia poco e
il gettito in genere diminuisce. Mostrare i due effetti se il testo
non permette di quantificare. Un'IVA in % e una tassa unitaria non sono
identiche; E2025 consente esplicitamente di trattare l'IVA come unitaria.

======================================================================
8. MONOPOLIO E CONCORRENZA MONOPOLISTICA — L8
======================================================================

8.1 Monopolio a prezzo unico
Un'impresa fronteggia la domanda di mercato, decrescente.
R(Q)=p(Q)*Q; MR=p(Q)+Q*p'(Q).
pi(Q)=p(Q)*Q-C(Q); ottimo interno MR=MC.
Trovare Q con MR=MC, poi trovare il PREZZO sulla DOMANDA, non su MR.
Quando vendere di più impone di abbassare il prezzo di tutte le unità,
MR<p per una domanda strettamente decrescente.
Domanda inversa p=a-bQ: R=aQ-bQ^2; MR=a-2bQ, pendenza doppia.
MC costante c, FC F: Qm=(a-c)/(2b), pm=(a+c)/2,
pi=(a-c)^2/(4b)-F, se produrre è redditizio nell'orizzonte considerato.
L'efficienza senza esternalità richiede p_D=MC ->Qeff=(a-c)/b.
DWL=b*(Qeff-Qm)^2/2=(pm-c)*(Qeff-Qm)/2.

L8 p.8–11: p=12-Q, C=3+Q^2 ->MR12-2Q, MC2Q,
Qm3,pm9,ATC4,profitto15; Qeff4,p_eff8; DWL1.5.
Il prezzo alto trasferisce surplus sulle unità vendute; le unità
non vendute nonostante WTP>MC creano la perdita secca.
Un prezzo assoluto basso è compatibile con il monopolio se MC è basso e/o
la domanda è elastica. Esempio del lievito E2023 Q1a.
Il monopolio non ha una curva di offerta indipendente dalla domanda: MR
dipende dalla sua forma, e uno stesso prezzo può corrispondere a diverse quantità
ottime con diverse domande. Riferimento E2022 Q4c.

8.2 Lerner: derivazione da saper spiegare
epsilon_D=(dQ/dp)*(p/Q), quindi (dp/dQ)*(Q/p)=1/epsilon_D.
MR=p+Q*p'=p*(1+1/epsilon_D).
A MR=MC: (p-MC)/p=-1/epsilon_D.
Lerner L=(p-MC)/p: margine RELATIVO al prezzo, non profitto totale né (p-MC)/MC.
|epsilon| grande ->margine relativo basso; domanda poco sensibile ->margine alto.
Con MC>0, ottimo interno a prezzo unico sulla parte elastica,
epsilon<-1; MC=0 può dare epsilon=-1.
Una figura chiamata «inelastic demand» in un materiale può confrontare
sensibilità relative; un monopolio con MC positivo non ottimizza in
un punto strettamente anelastico. Lì una riduzione di Q aumenterebbe R e
farebbe risparmiare costi.
Questa relazione riguarda la domanda dell'IMPRESA. In oligopolio, non
sostituire alla cieca l'elasticità del mercato a quella percepita dall'impresa.

8.3 Barriere e monopolio naturale
Barriere: regolamentazione/licenza, brevetto, controllo di un input essenziale,
economie di scala/monopolio naturale, comportamenti strategici.
Monopolio naturale: un'impresa può servire il mercato a un costo minore di
più imprese, nell'intervallo rilevante. Prezzo=MC può non coprire FC.
Brevetto: perdita statica di surplus contro incentivi a investire/innovare,
da confrontare nel tempo. E2024 Q2b non chiede di negare la DWL statica.
La durata legale precisa menzionata in un esercizio è un dato del
testo, non una verifica giuridica di questo dossier.

8.4 Concorrenza monopolistica
Molte imprese, prodotti differenziati, entrata/uscita facili; un'impresa
ha una domanda decrescente ma in genere trascura la reazione di una
concorrente precisa. Sceglie MR=MC.
Breve periodo: profitto positivo o negativo possibile.
Profitto positivo ->entrata ->la domanda per impresa diminuisce e diventa spesso
più elastica ->profitto economico nullo nel modello simmetrico LR.
Lungo periodo: p=ATC MA p>MC; profitto nullo non significa concorrenza perfetta.
Tipicamente produzione sotto la quantità che minimizza ATC, «excess capacity».
Il numero di imprese e la varietà fanno parte dell'equilibrio.

Shock negativo di domanda ->perdite iniziali ->uscite ->la domanda delle sopravvissute
si riprende ->profitto nullo ristabilito. Il numero di imprese diminuisce; la quantità
per sopravvissuta non ha un segno universale senza funzioni di domanda/costi.
Se lo shock cambia solo la dimensione del mercato in un modello standard a
dimensione ottima costante, può tornare al livello precedente.
Shock di costo ->riottimizzazione ed entrata/uscita; in oligopolio con barriere,
la disciplina del profitto nullo tramite libera entrata non si applica allo stesso modo.

8.5 Imprese eterogenee
Più produttive ->MC più basso, prezzo spesso più basso, volume/quota di
mercato più elevati. «Competitive reallocation»: crescita delle efficienti,
riduzione/uscita delle meno efficienti.
La libera entrata può implicare E[pi]=0 PRIMA di scoprire la propria produttività,
senza imporre pi=0 a ogni impresa una volta noto il suo tipo.
L8 p.24, costo d'entrata 20 e dado equo: profitti realizzati
28,16,4,-8,-20,-20; media 0. Nel lancio peggiore, profitto variabile potenziale
-12: l'impresa chiude e limita la perdita a 20. Questa tabella distingue
profitto atteso, profitto realizzato e chiusura dopo un costo d'entrata irrecuperabile.

======================================================================
9. DISCRIMINAZIONE, SEGMENTAZIONE, BUNDLING E TARIFFE — L9
======================================================================

9.1 Condizioni e tre gradi
Discriminazione: unità diverse dello stesso bene vendute a prezzi
diversi, per ragioni di WTP che vanno oltre le sole differenze di costo.
Servono potere di mercato e limiti a rivendita/arbitraggio; saper classificare
la clientela, o proporle un menu che la porti ad autoclassificarsi.
Una differenza di prezzo dovuta esclusivamente al costo non basta da
sola a stabilire una discriminazione.

Primo grado / perfect price discrimination: ogni unità è venduta
alla sua WTP massima. Produrre fino a p_D=MC se non c'è altra distorsione.
CS0 ; PS cattura tutto il surplus variabile; DWL0 in questo modello ideale.
Profitto=PS-FC. Efficienza elevata e ripartizione molto favorevole a chi vende.
Richiede informazione ed estrazione molto forti, di solito irrealistiche.

Terzo grado: gruppi OSSERVABILI, per esempio studenti, pensionati,
paesi. Risolvere MR_i=MC per ogni gruppo (o MC del totale se il costo non è costante).
Con MC comune : (p_i-MC)/p_i=-1/epsilon_i.
Nel punto ottimo, gruppo meno sensibile in valore assoluto ->prezzo più alto.
Uno status osservabile non basta a provare che lo sconto aumenta il
profitto: bisogna considerare domanda, capacità e costo opportunità.

Secondo grado: tipo non osservabile, SELF-SELECTION per quantità, qualità,
orario, attesa, coupon, freemium, versione premium o comfort.
Chi vende vuole che il tipo H scelga l'offerta H e il tipo L l'offerta L.
Esempi L9: treni 1a/2a classe, libri, prenotazioni, giochi freemium.
Peggiorare la versione economica può impedire ai clienti H di abbandonare
la versione cara, anche se questo peggioramento non fa risparmiare costi.

9.2 Vincoli IC e IR
Utilità netta del tipo i che sceglie il menu j : V_i(B_j)-T_j.
IC_H : V_H(B_H)-T_H >= V_H(B_L)-T_L.
IC_L : V_L(B_L)-T_L >= V_L(B_H)-T_H.
IR_i : V_i(B_i)-T_i >= utilità esterna (spesso normalizzata a 0).
L9 p.20 mostra soprattutto IC_H e IR_L, spesso vincolanti nel modello
usuale; gli altri non vanno dimenticati senza giustificazione.
IC impedisce di scegliere il contratto « sbagliato »; IR impedisce di rifiutare ogni
contratto. Prezzi e qualità vanno scelti simultaneamente sotto questi vincoli.
Può essere necessario lasciare una rendita informativa ai clienti H.

9.3 Segmentazione contro prezzo comune
Segmentato, p_i=a_i-b_i Q_i e MC=c costante :
Q_i=(a_i-c)/(2b_i) ; p_i=(a_i+c)/2 ; confrontare con 0 se a_i<=c.
Prezzo comune: Q(p)=somma_i max(0,(a_i-p)/b_i).
Metodo: trovare tutti i prezzi di esclusione, scrivere ogni segmento,
massimizzare (p-c)*Q(p) su ogni segmento, verificare le frontiere,
confrontare i profitti. Può essere ottimale servire un solo gruppo.
Non sommare le domande inverse per ottenere una domanda privata comune.

L9 Lowies p=1-Q_L/2, Highies p=2-Q_H, MC0 :
segmentato QL1,pL0.5,piL0.5 ; QH1,pH1,piH1 ; pi_totale1.5.
Comune nella zona in cui entrambi comprano: Q=4-3p,
p=2/3,Q2,pi4/3. Verificare anche p>=1 dove comprano solo gli Highies.
La discriminazione aumenta il profitto raggiungibile, perché il prezzo comune resta
un'opzione. Il welfare e il CS di ogni gruppo hanno segno AMBIGUO.
Un'apertura a un gruppo escluso può migliorare W; una semplice riallocazione
a quantità invariata tra WTP diverse può ridurlo.
Il paese più povero non è automaticamente il più elastico: verificare
la domanda, invece di dedurre i prezzi dal solo reddito nazionale.
Parallel imports/trade: comprare sul mercato economico e rivendere su quello
caro; ciò compromette la segmentazione.

9.4 Bundling
Pure bundling: solo il pacchetto; mixed bundling: pacchetto E acquisti separati.
Sommare le WTP di una stessa persona per trovare la sua WTP del pacchetto,
poi contare gli acquisti a ogni prezzo candidato. Confrontare i PROFITTI,
quindi includere costi e quantità vendute, non solo i ricavi.
L9 p.22 ed E2022 Q4d: due clienti rappresentativi, costi non precisati.
Gourmet: dinner100, room50, bundle150 ; Snoozer: dinner80, room70,
bundle150. Con costi nulli e una persona per tipo:
cena prezzo80 venduta2 ->160 ; camera prezzo50 venduta2 ->100 ; totale260.
Pacchetto prezzo150 venduto2 ->300. Il pacchetto estrae di più da WTP correlate
negativamente. Senza costi dati, questo risultato numerico presuppone costi nulli o
costi per tipo/servizio che non ribaltano il confronto.
Esempio: costi reali molto elevati di un servizio possono cambiare la scelta.

9.5 Abbonamento fisso e two-part tariff: distinzione essenziale
Tariffa a due parti: pagamento T(q)=F+p*q.
Con un solo cliente noto, costo marginale costante c e nessun vincolo
aggiuntivo: prezzo d'uso p=c, quantità efficiente, F=CS(p=c).
Chi vende estrae il surplus dando al tempo stesso un incentivo marginale efficiente.
Con tipi eterogenei o F comune, p=c non è sempre ottimale.
Solo prezzo FISSO: p=0 ; consumo fino a WTP marginale 0,
F=integrale_0^q(0) p_D(x)dx ; profitto=F-C(q(0)). Non è la soluzione
a due parti quando MC>0 : gli usi eccessivi costano davvero.

L9 p.23–25 : p_D=10-Q, C=2Q.
Monopolio semplice Q4,p6,pi16.
Due parti p2,Q8,F32,pi32.
Solo abbonamento p0,Q10,F50,costo20,pi30.
F è un ricavo dell'impresa e una spesa del cliente; non
confonderlo con il costo fisso di produzione, anch'esso spesso indicato con F.

9.6 Capacità e prodotti complementari — E2025 Q1
Capacità2000, 3000 fan WTP1200, 2000 studenti WTP500, MC0 :
riempire con 2000 fan a 1200 dà 2 400 000 kr. Nessun posto è disponibile
per aggiungere studenti senza sostituire un fan che paga di più.
La discriminazione non permette quindi di aumentare il profitto in questo caso.
Il costo marginale fisico è 0, ma il posto ha un costo opportunità.

Concerto e T-shirt: massimizzare il profitto CONGIUNTO. Un biglietto più economico
può attirare un acquirente i cui acquisti di T-shirt aggiungono margine.
Qc=1000-pc, QT=Qc-2pT, MCc0,MCT20 :
pi=pc*(1000-pc)+(pT-20)*(1000-pc-2pT).
FOC : 1020-2pc-pT=0 ; 1040-pc-4pT=0.
pc=3040/7≈434.286 ; pT=1060/7≈151.429 ; Qc=3960/7≈565.714 ;
QT=1840/7≈262.857. Solo biglietto: pc500 ; prodotto complementare ->pc più basso.
Verificare QT>=0 e la validità delle domande; qui l'ottimo è interno.

======================================================================
10. OLIGOPOLIO, COURNOT, BERTRAND E STACKELBERG — L10
======================================================================

10.1 Scegliere il gioco giusto
Oligopolio: poche imprese le cui decisioni si influenzano direttamente.
Cournot: quantità scelte simultaneamente; prodotto omogeneo nel caso base.
Bertrand: prezzi scelti simultaneamente; precisare se omogeneo o differenziato.
Stackelberg: un leader sceglie per primo, un follower osserva e reagisce.
Nash: nessuna impresa guadagna deviando UNILATERALMENTE, date le altre
strategie. L'intersezione delle migliori risposte è un equilibrio di Nash.
Una miglior risposta è una scelta condizionata al rivale, non una promessa
di mantenere quel rivale costante dopo ogni modifica del modello.

10.2 Cournot lineare con due imprese
p=a-b(q1+q2), costi C_i=F_i+c_i*q_i.
pi1=[a-b(q1+q2)-c1]*q1-F1.
partial pi1/partial q1=a-2bq1-bq2-c1=0.
BR1(q2)=max(0,(a-c1-bq2)/(2b)), BR2 analoga.
Se entrambe sono attive:
q1=(a-2c1+c2)/(3b), q2=(a-2c2+c1)/(3b),
Q=(2a-c1-c2)/(3b), p=(a+c1+c2)/3.
Se una quantità è negativa, risolvere l'angolo in cui quell'impresa non produce.
Calcolare poi pi_i=(p-c_i)q_i-F_i.
All'interno di questo modello lineare, p-c_i=bq_i ->profitto variabile=bq_i^2.
Differenze di FC inevitabili non cambiano queste quantità; cambiano
i profitti e possono cambiare le decisioni di entrata/uscita.

L10 esempio a70,b1,c1=c2=10 : BR_i=30-q_j/2 ;
q1=q2=20,Q40,p30,pi_i400 senza FC.
Monopolio congiunto Q30,p40 ; concorrenza perfetta Q60,p10.
Con MC Blue0, Red10 : qBlue80/3≈26.667, qRed50/3≈16.667,
p80/3≈26.667. L'impresa efficiente prende più mercato; imporre quote
uguali può rendere la produzione più cara. Quote grandi non provano
da sole un'inefficienza.

10.3 Cournot con n imprese identiche
p=a-bQ, MCc : q_i=(a-c)/[b(n+1)],
Q=n(a-c)/[b(n+1)], p=(a+n*c)/(n+1).
Lerner=(p-c)/p=-(quota di mercato_i)/epsilon_mercato per questo modello,
quindi in simmetria -1/(n*epsilon_mercato).
Con n crescente: p tende a c, Q alla quantità concorrenziale.
Fusione che riduce n, senza sinergie di costo: p aumenta; le imprese non fuse
spesso beneficiano di questa minore concorrenza in questo modello.
Non generalizzare questo risultato a ogni fusione con costi/prodotti che cambiano.

10.4 Disegnare le reazioni di Cournot
Assi q1 orizzontale/q2 verticale O il contrario, ma mantenere la stessa convenzione.
Se q1 è orizzontale: BR2 si traccia direttamente come q2=f(q1), e BR1 va
riscritta q2=(a-c1)/b-2q1 nella zona interna.
Entrambe sono decrescenti; intersezione = quantità di Nash.
Il costo c1 aumenta: la BR1 cambia, la BR2 come funzione di q1 non cambia;
il rivale risponde al nuovo equilibrio. Imposta su entrambe le imprese: sposta
ENTRAMBE le reazioni verso una produzione minore. È E2022 Q3e.

10.5 Stackelberg in quantità
Risolvere prima BR_follower(qL), sostituirla nel profitto del leader,
poi derivare rispetto a qL. Non trattare qF come costante qui.
Caso simmetrico p=a-bQ, MCc, senza vincoli di capacità:
qL=(a-c)/(2b), qF=(a-c)/(4b), Q=3(a-c)/(4b), p=(a+3c)/4.
Il leader produce di più e guadagna di più che con Cournot; il follower produce meno.
Q totale aumenta, p diminuisce. Il risultato dipende dalle ipotesi del modello.
L10 a70,c10 : qL30,qF15,Q45,p25 ; profitti 450 e 225.
L'equilibrio di Stackelberg sta sulla reazione del follower, di solito non
sulla reazione di Cournot del leader, che tiene fissa la quantità rivale.

10.6 Bertrand omogeneo
Prodotti perfettamente sostituibili, stessi MC costanti, capacità sufficiente,
clientela che compra dal più economico: con due o più imprese, p=MC.
Se p>MC, ribassare leggermente può conquistare il mercato; p<MC fa perdere
denaro su ogni unità. Lerner0 per p=MC>0.
Capacità limitata, differenziazione, ricerca o ripetizione possono cambiare
il risultato; il numero di imprese da solo non determina il margine.
Costi diversi: l'impresa meno costosa può mantenere un margine
limitando il suo prezzo al costo del concorrente più efficiente.
E2024 MC5,7,8 e p_D10-Q : prezzo limite intorno a 7, spesso scritto 7-epsilon.
Il prezzo di monopolio senza concorrente sarebbe 7.5, quindi il vincolo del rivale
è rilevante. Con prezzi continui, esistenza/tie-breaking richiedono precisione:
prezzo esattamente 7 se c'è una regola adatta di allocazione al produttore efficiente;
con divisione in parti uguali in caso di parità, l'approssimazione di un leggero ribasso è
più corretta che affermare un equilibrio puro a 7.

10.7 Bertrand differenziato
Domanda q_i=A-B*p_i+D*p_j, B>0,D>=0, MCc_i.
pi_i=(p_i-c_i)*(A-Bp_i+Dp_j)-F_i.
FOC : A-2Bp_i+Dp_j+B*c_i=0.
BR_i(p_j)=(A+B*c_i+D*p_j)/(2B).
Reazioni crescenti per sostituti: prezzi complementi strategici.
In simmetria: p=(A+B*c)/(2B-D), se dominio/concavità sono ammissibili.
Quantità tramite la DOMANDA; profitto=(p-c)q-F.
L10 A85,B1,D0.5,c11 ->p64,q53,pi2809 senza FC.
E2025 A10,B2,D1 : p=(10+2c)/3.
c2 ->p14/3 ; c1 ->p4. Calo del costo di 1 ->calo del prezzo di 2/3.
Non applicare il pass-through concorrenziale a questa struttura di mercato.

10.8 Leadership di prezzo
Sostituire la reazione di PREZZO del follower nella domanda del leader,
prima di massimizzarne il profitto. Non la formula di Stackelberg in quantità.
E2024 Q4c/d : q1=6-2p1+p2, q2=6-2p2+p1 ; nessun costo è precisato.
Sotto l'ipotesi esplicita MC=FC=0 : simultaneo p1=p2=2, q1=q2=4, pi_i8.
Se l'impresa2 è leader: p1=(6+p2)/4 ; domanda2=7.5-1.75p2 ;
p2=15/7≈2.143, p1=57/28≈2.036 ; pi2=225/28≈8.036,
pi1=3249/392≈8.288. ENTRAMBE guadagnano qui; il follower guadagna di più.
Il « first-mover advantage » in quantità non è una legge universale
per tutti i giochi, in particolare quando i prezzi sono complementi.
======================================================================
11. ESTERNALITÀ, INQUINAMENTO, BENI PUBBLICI E BENI COMUNI — L11
======================================================================

11.1 Privato, esterno, sociale
Esternalità: effetto su un terzo, non considerato nella transazione.
Negativa: inquinamento, rumore; positiva: vaccinazione, ricerca, rete.
MPC / PMC = marginal private cost, costo marginale privato.
MEC = marginal external cost, costo marginale esterno, DANNO aggiuntivo.
MSC / SMC = marginal social cost = MPC+MEC.
MPB / PMB = marginal private benefit, beneficio marginale privato.
MEB = marginal external benefit, beneficio esterno aggiuntivo.
MSB / SMB = marginal social benefit = MPB+MEB.
La notazione MC_p e MC_e di E2024 indica rispettivamente MPC e MEC.
MEC(Q) è un costo MARGINALE; il costo esterno TOTALE è il suo integrale,
non MEC(Q) stesso. Se MEC è costante e, danno totale=eQ.
Se MEC(Q)=Q, danno totale=Q^2/2, non Q^2.

Equilibrio privato concorrenziale: MPB=MPC.
Ottimo sociale: MSB=MSC.
Solo esternalità negativa di produzione: domanda=MPB=MSB e offerta=MPC ;
il mercato produce troppo. Solo esternalità positiva di consumo:
domanda=MPB, MSB al di sopra; il mercato produce troppo poco.
La regola universale è MSB=MSC ; la distinzione produzione/consumo
determina quale lato del grafico correggere.

11.2 Misurare W e DWL
W(Q)=integrale_0^Q [MSB(q)-MSC(q)]dq, meno i costi fissi reali pertinenti.
DWL=W(Qeff)-W(Qosservato) : area tra MSB e MSC sull'intervallo di scarto.
Con esternalità negativa: W=CS+PS+gettito fiscale-danno esterno totale.
Con positiva: W=CS+PS-spesa per sussidi+beneficio esterno totale.
L'imposta/il sussidio è un trasferimento; danni/benefici sono effetti
reali sui terzi. Il « societal producer surplus » di L11 include i
danni ai terzi; differisce dal PS privato delle sole imprese.

L11 p.5–8 ed E2023 : MPB=100-Q,MPC=10+Q,MEC=Q,MSC=10+2Q.
Privato: Q45,p55. Sociale: Q30,MPB70,MPC40,MEC30.
DWL non regolato=0.5*(45-30)*45=337.5.
A Q45 : MSC100,MSB55 ; altezza 45. All'ottimo sociale, un prezzo acquirente 70 e un
prezzo venditore 40 possono essere collegati dall'imposta ottima 30.

11.3 Pigou e intervento imperfetto
Imposta correttiva t*=MEC(Qeff), nel caso di un'esternalità negativa
non già internalizzata e di un mercato altrimenti concorrenziale.
Sussidio correttivo s*=MEB(Qeff), caso positivo analogo.
Valutare il valore marginale alla QUANTITÀ EFFICIENTE, non automaticamente
alla quantità iniziale. Se l'esternalità dipende da Q, t* non è arbitraria.
Un'imposta può ridurre una DWL preesistente. Un sussidio eccessivo può
superare Qeff e ricreare una DWL. Confrontare sempre con l'ottimo sociale, non con quello privato.

Esempio negativo sopra, imposta 20 : 100-Q=10+Q+20 ->Q35,
p_b65,p_s45. Q resta sopra 30 : DWL=0.5*5*15=37.5.
Imposta ottima 30 ->Q30,DWL0 in questo modello.
E2024 tessile: domanda200-Q,MPC80+Q,MECQ ->Qpriv60,Qeff40,
DWL0.5*20*60=600 ; imposta ottima 40.
A6 solare: MPB100-3Q,MPC10+2Q,MEB20 ->Qpriv18,p46,
MSB120-3Q ->Qeff22, sussidio 20 ; DWL non corretta 40.
Prezzo acquirente a Q22=34 ; venditore 54 ; scarto 20.

11.4 Inquinamento e abbattimento: guardare l'asse orizzontale
MAC=marginal abatement cost, costo marginale di riduzione dell'inquinamento.
Se l'asse è l'ABBATTIMENTO a : MAC spesso aumenta quando a aumenta.
Se l'asse è l'INQUINAMENTO e residuo: il MAC della riduzione successiva è
spesso decrescente in e. I due grafici sono compatibili.
Ottimo: costo di ridurre un'unità = danno di quell'unità, MAC=MEC.
Imposta sulle emissioni: l'impresa sceglie MAC=t ; imposta ottima=MEC all'ottimo.
L11 p.13 : sull'asse inquinamento Q, MAC=10-Q, MEC=Q/2.
Senza imposta Q10 ; imposta 2 ->MAC2 ->Q8, MEC4. Non è l'ottimo:
ottimo Q=20/3≈6.667, imposta 10/3≈3.333.
Un'imposta per unità di OUTPUT equivale a un'imposta per unità di EMISSIONE solo se
l'emissione per unità è fissa; altrimenti tassare direttamente l'emissione può
incoraggiare anche una tecnologia più pulita.

11.5 Quote, permessi e incertezza
Quota: fissa una quantità di emissioni. Imposta: fissa il prezzo dell'inquinare.
Permessi negoziabili: tetto totale e diritti trasferibili.
Se MAC_L<MAC_H all'allocazione iniziale, L riduce di più le emissioni e vende
permessi; H compra e riduce di meno. C'è guadagno finché i MAC differiscono.
All'interno, MAC_L=MAC_H=prezzo del permesso: stesso tetto raggiunto al costo
minimo. L'allocazione iniziale influisce sulle rendite, non necessariamente
sull'allocazione finale efficiente con scambi senza attriti.
Una quota identica per impresa in genere non minimizza il costo totale.

E2021 Q1d, complemento « prices versus quantities » : costi di abbattimento
incerti e danni marginali molto ripidi ->quota/tetto protegge meglio
da un forte errore sulla quantità di emissioni. Danni marginali
relativamente piatti e MAC ripidi ->un'imposta può evitare meglio un costo eccessivo
di rispetto della quota. Argomento di pendenze RELATIVE intorno all'ottimo,
non regola « le quote sono sempre migliori ». Disegnare due MAC possibili.

11.6 Coase e diritti di proprietà
Diritti ben definiti e negoziazione senza costi ->le parti possono negoziare
una quantità efficiente, qualunque sia l'attribuzione iniziale dei diritti,
sotto le ipotesi del teorema. L'attribuzione cambia chi paga e i redditi.
Intuizione: c'è guadagno da un accordo quando ridurre il danno vale più
del profitto che fa perdere; negoziare finché il guadagno scompare.
Costi di transazione: tempo, contratti, controllo, grande numero di parti,
free rider, coordinamento e norme sociali. Possono bloccare
gli accordi. Diritto incerto ->condizione del teorema non soddisfatta.
Riunire inquinatore e vittima sotto un unico proprietario può internalizzare
l'effetto, ma un proprietario divenuto monopolista può introdurre un'altra
distorsione; non concludere automaticamente alla quantità concorrenziale
socialmente ottima. E2024 Q3d ed E2025 Q1c.

11.7 Quattro categorie di beni
Escludibile: si può impedire l'accesso. Rivale: l'uso di una persona
riduce le possibilità degli altri.
                       Escludibile                Non escludibile
Rivale                 Bene privato               Risorsa comune
Non rivale             Bene di club               Bene pubblico puro
Privato: panino. Club: abbonamento/servizio non congestionato.
Comune: pesca ad accesso libero; spettro con interferenze (E2023).
Pubblico: difesa, ricerca di base diffusa, pulizia delle strade
nel modello dell'esercizio. La congestione e le regole di accesso possono
cambiare la classificazione. Una strada/un tunnel non è sempre un bene
pubblico puro: pedaggi possibili e rivalità quando è congestionato.

11.8 Bene pubblico: somma VERTICALE
Tutti beneficiano della stessa Q. MB_sociale(Q)=somma_i max(0,MB_i(Q)).
Ottimo interno: somma MB_i=MC, condizione di Samuelson (nome standard,
non necessariamente usato nelle slide).
Troncare ogni WTP negativa a 0 se il bene semplicemente non è desiderato oltre
una certa quantità; se il bene arreca davvero danno, il modello cambia.
Individuare le soglie in cui ogni MB si annulla, poi verificare il segmento.
Free rider: beneficiare anche senza pagare ->incentivo a contribuire poco e
a sottodichiarare la propria WTP. Fornitura volontaria di solito insufficiente,
non necessariamente nulla. Imposte obbligatorie/norme possono aiutare.

L11 p.25 : MB_L=10-h, MB_H=20-h.
Per h<=10 : somma 30-2h. MC26 ->h2 ; MC14 ->h8.
A MC14, H da solo finanzierebbe h6, sotto l'ottimo collettivo 8.
A MC26, nessun individuo da solo finanzia nulla anche se h2 è collettivamente utile.
E2024 tunnel: MB1=10-Q,MB2=5-Q,MB3=10-2Q,MC9.
Su Q<=5, somma 25-4Q ; Qeff4, tutte le WTP positive a 4.
E2025/A6 pulizia: MB15-Q,12-Q,9-Q ; somma 36-3Q ; MC27 ->Qeff3.
E2022 wifi: 300 persone MB10-Q ; 300(10-Q)=1500 ->Qeff5.
Non scrivere Q=300(10-p) per questo bene pubblico: ogni persona consuma
la STESSA velocità e non una frazione individuale della velocità.

11.9 Risorsa comune e accesso libero
Ogni utente impone agli altri una scarsità/congestione che ignora.
Tragedy of the commons : uso eccessivo, non mancanza di valore della risorsa.
Esempio pesca L11 : ricavo medio per barca vs costo individuale; entrata
fino a ricavo medio=costo, mentre l'ottimo usa il prodotto
marginale SOCIALE di una barca in più. La pesca totale può peggiorare
con troppe barche. Non usare MP e AP come sinonimi.
Soluzioni: diritti di proprietà, restrizioni di quantità, permessi,
canoni, regole locali e norme in interazioni ripetute.
Free rider del bene pubblico = sottocontribuzione; bene comune = sovrasfruttamento.

======================================================================
12. INFORMAZIONE ASIMMETRICA, CONTRATTI E INCENTIVI — L12
======================================================================

12.1 Identificare ciò che è nascosto
Asymmetric information : una parte sa qualcosa che l'altra ignora.
Adverse selection : TIPO/qualità/rischio privato, spesso prima del contratto.
Moral hazard : AZIONE/sforzo privato, spesso dopo il contratto.
La sola presenza di rischio non è un'asimmetria informativa.
La diagnosi centrale: chi sa cosa, in quale momento, e quale scelta ne è influenzata?

12.2 Lemons / selezione avversa
L12 auto: chi compra valuta l'alta qualità 150, la bassa 50; chi vende
alta 130, bassa 30; inizialmente probabilità di alta qualità 0.5.
Qualità osservabile: transazioni possibili in [130,150] e [30,50].
Qualità ignota a TUTTI: WTP media 100, prezzo di riserva medio del venditore 80;
transazioni tra 80 e 100 possibili con la neutralità al rischio del modello.
Solo chi vende è informato: un prezzo medio di 100 non fa vendere le auto buone
(riserva 130). Escono; la qualità media cala; chi compra rivede
la propria WTP; il mercato di fascia alta può sparire nonostante guadagni potenziali.
Serve una credenza COERENTE con i venditori che restano al prezzo offerto.

Assicurazione patente L12 : chi pensa di essere bocciato più spesso
può comprarne di più, quindi il rischio degli assicurati supera la media del 52%
con selezione avversa; il contratto può anche cambiare lo sforzo (moral hazard).
Reputazione, garanzie, certificazione, regole di qualità, diritto di reso,
informazione condivisa, contratti di gruppo e assicurazione obbligatoria possono
ridurre la selezione avversa; la loro efficacia dipende dal meccanismo.
E2020 Klarna, E2023 recensioni dei clienti, E2024 norme del vino: una certificazione
o reputazione collettiva può permettere ai piccoli marchi di garantire
la propria qualità e ridurre il vantaggio informativo dei grandi marchi.

12.3 Screening e signalling
Screening: la parte MENO informata raccoglie/testa/struttura un menu per
conoscere il tipo. Signalling: la parte INFORMATA compie un'azione
osservabile per rivelare il proprio tipo.
Un segnale credibile deve essere abbastanza costoso da imitare per il tipo
cattivo, rispetto al beneficio ottenuto; « costoso » da solo non basta.
L12 istruzione: salario 100 con diploma, 60 senza; costo C_A<C_S.
Separazione se 100-C_A>60 e 100-C_S<60, quindi C_A<40<C_S.
Nei casi di uguaglianza i tipi possono essere indifferenti; precisare la selezione.
Pooling: i tipi scelgono lo stesso segnale; separating: segnali diversi.
Il valore di segnale di un diploma non prova che non crei alcuna competenza.

12.4 Principale-agente e condivisione del rischio
Il principale propone il contratto; l'agente sceglie uno sforzo non perfettamente
osservabile. Il risultato dipende dallo sforzo E da shock.
Premiare il risultato dà incentivi ma espone l'agente al rischio.
Salario fisso: debole incentivo monetario allo sforzo se questo è costoso.
Divisione del ricavo: l'agente conserva una parte del guadagno dello sforzo e del rischio.
L'agente paga un canone fisso e conserva il ricavo: forti incentivi
al guadagno marginale, ma sopporta il rischio. Franchising/affitto d'azienda.
Rischio, responsabilità limitata e ricchezza possono rendere difficile questo contratto.

L12 p.13–15, tabella verificata: probabilità 0.5 stato cattivo/buono.
Sforzo H, costo privato 10 : ricavi 40 o 100 ->ricavo atteso 70,
surplus netto totale 60. Sforzo L, costo 0 : ricavi 20 o 40 ->attesa 30.
Salario fisso w indipendente dal ricavo: l'agente preferisce L ; riceve w,
la proprietà riceve 30-w ; la proprietà sopporta il rischio di ricavo.
Divisione 50/50 : H dà all'agente 0.5*70-10=25, alla proprietà 35 ;
L dà all'agente 15 ->H scelto. Rischio condiviso.
Canone fisso F alla proprietà, l'agente tiene il ricavo: H dà all'agente 60-F,
alla proprietà F ; L 30-F ->H. L'agente sopporta il rischio di ricavo.
La partecipazione richiede anche che l'agente preferisca il contratto alla sua opzione
esterna; un buon incentivo non basta a far accettare il contratto.

12.5 Credito con azione nascosta: metodo generale
Il progetto costa I0, ricavo R in caso di successo, 0 altrimenti. Prestito D, rimborso Bk
solo in caso di successo, responsabilità limitata. Successo p_H con sforzo
H e p_L con L, p_H>p_L. L procura un beneficio privato b.
Utilità/attesa dell'imprenditore con H=p_H*(R-Bk).
Utilità dell'imprenditore con L=p_L*(R-Bk)+b.
Se un apporto personale A è investito in anticipo, sottrarre A in ENTRAMBI i casi
quando si misura il guadagno netto da prima dell'investimento; si annulla
nel confronto tra sforzi a contratto dato.
IC_H : (p_H-p_L)*(R-Bk)>=b.
Profitto atteso della banca=p_scelto*Bk-D, con tassi/costi bancari normalizzati a 0.
Il finanziamento richiede profitto della banca>=0 E incentivo H se il calcolo si basa su H,
nonché la partecipazione dell'imprenditore secondo la sua opzione esterna.
Un rimborso troppo alto può distruggere lo sforzo, ridurre p e diminuire il
rimborso ATTESO nonostante un rimborso nominale più alto.

A6/E2023 : R40,pH0.8,pL0.4,D20,Bk30.
H8 ; L4+b. b2 ->H8>L6, banca 24-20=4.
b6 ->L10>H8, banca 12-20=-8.
Apporto 10, D10,Bk15 : H20 ; L10+b=12 o 16 ->H per b2 E b6 ;
banca 12-10=2 in entrambi i casi. Dedotto l'apporto, il guadagno
dell'imprenditore con H è 10 ; non dedurre l'apporto per un solo sforzo.
Condizione senza apporto: Bk<=40-b/0.4. Per b6, Bk<=25 ; la banca
con sforzo H richiede Bk>=20/0.8=25. All'uguaglianza, sforzo indifferente.

12.6 Contratti, controllo e penalità
E2025 pulizia: pagamento 110 ; costo alta qualità 100 ; bassa 70.
Profitto H 10 ; profitto L 40-0.5*F. H almeno altrettanto buono se F>=60.
F=60 dà indifferenza; F>60 rende H strettamente preferito.
Formula: penalità minima=(risparmio di costo privato)/(probabilità di scoperta),
se la penalità è pagabile, l'agente è neutrale al rischio e il contratto non ha altri effetti.
Il pagamento di 110 si annulla nel confronto; conta per la partecipazione.

Carpenter E2022 : un forfait incentiva a risparmiare tempo/costi, ma rischia di
sacrificare qualità nascosta; il pagamento orario protegge dal rischio di
durata ma può incentivare ad allungare le ore. Molti altri clienti
aumentano il costo opportunità del tempo e possono limitare questo incentivo.
Tipping E2023 : il cliente osserva la qualità del servizio meglio del capo;
la mancia può dare a chi serve un legame tra qualità e retribuzione.
Franchigia assicurativa: l'assicurato sopporta una parte del costo e
conserva un incentivo a evitare il sinistro; compromesso assicurazione/incentivo.
Private equity : controllo, informazione e coinvolgimento possono ridurre
alcuni problemi di azione nascosta; non confondere automaticamente
finanziamento bancario e finanziamento con capitale proprio.

12.7 Bonus asimmetrico: non presupporre la diagnosi prima del calcolo
E2020 Q4d : A rende 100 con 0.75 e 80 con 0.25 ->E profitto 95.
B rende 400 con 0.75 e -160 con 0.25 ->E profitto 260.
Bonus 1% dei profitti positivi, 0 in caso di perdita: attesa 0.95 per A, 3 per B.
Il dirigente preferisce B, e qui B massimizza anche il profitto atteso lordo;
al netto del bonus, 94.05 contro 257. Con questi soli dati e in neutralità al
rischio, il bonus non crea conflitto sulla scelta A/B. Un pagamento
convesso può favorire un rischio eccessivo con ALTRI numeri, ma
questo testo non lo dimostra. Prudenza se si aggiungono vincoli di fallimento
o preferenze per il rischio: qui non sono quantificati.

======================================================================
13. TEORIA DEI GIOCHI NELL'ASSIGNMENT 3
======================================================================

13.1 Risolvere una matrice
Una strategia pura è una scelta determinata. Una strategia in un gioco
sequenziale descrive l'azione in OGNI nodo possibile, anche fuori dal percorso giocato.
In una matrice: primo payoff per il giocatore di riga, secondo per quello di colonna.
Per ogni colonna, segnare le migliori risposte della riga; per ogni
riga, quelle della colonna. Una casella segnata due volte è un Nash puro.
Ce ne possono essere diversi, anche con indifferenze.
Dominante: ottimale qualunque siano le azioni rivali; strettamente
dominante se sempre strettamente migliore. Un equilibrio può essere
inefficiente: nessun guadagno unilaterale non implica guadagno collettivo massimo.

13.2 Golden Balls — dati A3 p.1, matrice verificata visivamente
              Colin S          Colin N
Rowena S      (10,10)           (0,20)
Rowena N      (20,0)            (0,0)
S=Split, N=Steal nel file; il simbolo N non è universale.
Egoisti: N è debolmente dominante; Nash puri (S,N),(N,S),(N,N).
Invidia: togliere 1 alla propria utilità se l'altro riceve di più.
SS(10,10), SN(-1,20), NS(20,-1), NN(0,0) ->unico Nash NN.
Altruismo uguale: u_i=denaro_i+denaro_j.
SS dà utilità (20,20), SN(20,20), NS(20,20), NN(0,0).
Nash puri SS,SN,NS. NN NON lo è: deviare verso S contro N dà 20
invece di 0. La risposta personale « SS e NN » in A3.1c è errata.
Altruismo doppio: u_i=denaro_i+2*denaro_j.
SS(30,30), SN(40,20), NS(20,40), NN(0,0) ->S strettamente dominante,
unico Nash SS. Preferenze diverse ->gioco diverso in utilità.
Questi elenchi riguardano le strategie PURE; non presentarli come
una classificazione completa di tutti gli equilibri misti.
Complemento per classificare tutti i Nash di questa matrice:
sia x la probabilità che Rowena scelga S, y quella che Colin scelga S.
Egoisti: equilibri se x=0 O y=0 ; l'altro può mescolare arbitrariamente.
Invidia: solo x=y=0. Altruismo uguale: x=1 O y=1 ; l'altro può
mescolare arbitrariamente. Altruismo doppio: solo x=y=1.
Ai valori 0/1 si ritrovano esattamente i Nash puri sopra.

13.3 Armi e petrolio: induzione a ritroso
Riserva di petrolio 6 ; costo delle armi X1,Y3. Se uno solo è armato, divisione 5/1 ; se nessuno,
3/3 ; se entrambi sono armati, niente petrolio ma costi pagati.
Payoff netti (X,Y) : nessuno armato (3,3), solo X (4,1), solo Y (1,2), entrambi (-1,-3).
X gioca per primo: Y sceglie di non armarsi dopo che X si è armato (1>-3).
Se X non si arma, Y confronta Y armato 2 con Y non armato 3 ->non si arma nemmeno lui.
Quindi strategia completa di Y : non armarsi dopo ogni azione di X.
X confronta armarsi 4 e non armarsi 3 ->si arma; esito (4,1).
Y gioca per primo: X sceglie di non armarsi dopo Y armato (1>-1), e
di armarsi dopo Y non armato (4>3). Y confronta armarsi 2 e non armarsi 1 ->si arma;
esito (1,2). Il follower X resterebbe non armato di fronte a Y armato, contrariamente
a una risposta che confonde il suo payoff 1 e il suo costo di armamento.
Un SPNE specifica anche le reazioni fuori dal percorso, non solo l'esito.

13.4 Coordinamento pace/guerra — A3 p.3
                 Y pace       Y guerra
X pace           (9,9)        (0,8)
X guerra         (8,0)        (7,7)
Nash puri pace/pace e guerra/guerra. Pace/pace domina in senso paretiano.
La paura dell'altro e le credenze possono rendere plausibile guerra/guerra,
ma i soli payoff non selezionano un esito simultaneo unico.
Se X gioca per primo: Y risponde pace a pace (9>8), guerra a guerra (7>0).
X anticipa 9 contro 7 ->pace; esito pace/pace, SPNE per induzione.
La comunicazione può coordinare le credenze; il cheap talk non vincolante
non cambia necessariamente gli incentivi.

13.5 Impegni e minacce credibili — A3.4
Per analizzare una sanzione promessa: nel momento in cui dovrebbe essere
eseguita, chi l'ha promessa ha ancora interesse a rispettarla?
Uno scritto pubblico può imporre costi reputazionali/politici, senza garantire
un impegno irrevocabile. Una clausola militare è dissuasiva solo se
cambia gli incentivi e/o rende credibile l'intervento dopo l'attacco.
La domanda storica dell'assignment serve da applicazione teorica;
questo dossier non pretende di verificare la storia diplomatica del documento.

======================================================================
14. COMPLEMENTI PRESENTI NEGLI ESAMI, LEZIONI COMPLETE ASSENTI
======================================================================

Questi temi vanno ripassati perché compaiono nei
testi d'esame. La loro trattazione qui ricostruisce gli strumenti necessari. Le
slide corrispondenti oltre L12 non sono disponibili nel dossier.

14.1 Vantaggio assoluto e comparato
Assoluto: meno input necessari per unità. Comparato: costo
opportunità più basso rispetto all'altro bene.
Se a_X ore/unità di X e a_Y ore/unità di Y : costo opportunità di X
in Y =a_X/a_Y. Non invertire questo rapporto passando dalle ore alle quantità.
Due paesi possono guadagnare dallo scambio anche se uno è più produttivo in
TUTTO. Un prezzo relativo di scambio compreso tra i loro costi opportunità ->
guadagni possibili. Vincoli di domanda/capacità limitano la specializzazione.
PPF lineare : a_X*X+a_Y*Y=Lbar ; intercette Lbar/a_X e Lbar/a_Y,
pendenza dY/dX=-a_X/a_Y. PPF curva con altre tecnologie.

E2025 : Northland grano 3h, elettronica 6h ; Southland grano 4h, elettronica 2h.
Southland ha il vantaggio assoluto nell'elettronica; Northland il vantaggio comparato nel grano
(0.5 elettronica/grano contro 2). Con 120h :
PPF Nord : 3W+6E=120, intercette W40,E20 ; Sud : 4W+2E=120, W30,E60.
Scambiare 1 elettronica contro una quantità di grano tra 0.5 e 2, o equivalentemente
1 grano contro elettronica tra 0.5 e 2 qui, permette guadagni potenziali.
Attenzione: la simmetria numerica di questi intervalli è propria di questi numeri.

14.2 Piccolo paese, libero scambio e dazio
Prezzo mondiale pw dato; prezzo interno=pw con libero scambio e in assenza
di altri costi pertinenti. Importazioni M=QD(pw)-QS(pw)>0.
Dazio unitario tau, il paese resta importatore: p_dom=pw+tau.
QD diminuisce, QS aumenta, M diminuisce. CS cala, PS interno aumenta,
lo Stato riceve tau*M. Welfare NAZIONALE=CS+PS+gettito; la spesa verso gli
esportatori esteri non diventa surplus nazionale interno.
DWL=triangolo di produzione inefficiente+triangolo di consumo perso.
Lineare: DWL=0.5*tau*[(QS1-QS0)+(QD0-QD1)].
Se il dazio supera lo scarto tra prezzo di autarchia e pw, è proibitivo:
il prezzo interno raggiunge l'autarchia, M0, non applicare pw+tau alla cieca.
Il caso del grande paese/effetto sul prezzo mondiale non è il benchmark sopra.

E2022 : pD80-Q,pS20+Q,pw30 ->QD50,QS10,M40.
Dazio 10 ->p40,QD40,QS20,M20 ; CS1250->800,PS50->200,
gettito 200,DWL100. Verifica -450+150+200=-100.
E2025 acciaio: vedere cifre e conversione di unità nella sezione 16.

14.3 Fattori specifici e distribuzione
Capitale specifico alla manifattura, terra specifica all'agricoltura,
lavoro mobile. Ogni settore assume secondo p_j*MP_Lj=w ; la mobilità
eguaglia i salari, sotto le ipotesi concorrenziali del modello.
Il prezzo agricolo cala ->il valore del prodotto marginale agricolo cala ->
il lavoro lascia l'agricoltura ->il reddito della terra diminuisce; il capitale
dell'altro settore può guadagnare dall'afflusso di lavoro. L'effetto sul salario reale
del lavoro dipende dal paniere consumato e dai due prezzi.
Paese importatore di cibo (E2020) : un prezzo d'importazione più basso migliora
le sue ragioni di scambio e può aumentare il benessere aggregato, nonostante le perdite
dei proprietari terrieri. Paese esportatore agricolo (E2025) : un prezzo
ricevuto più basso peggiora le ragioni di scambio e penalizza i proprietari.
Grafico PPF: produzione dove prezzo relativo=MRT in valore assoluto; vincolo
commerciale tangente alla PPF ; consumo su una curva d'indifferenza raggiungibile
con questo vincolo. Produzione e consumo possono differire grazie al commercio.
Non fare del guadagno aggregato una prova che ogni gruppo guadagni.

14.4 Piattaforme ed effetti di rete
Piattaforma: facilita l'interazione tra gruppi (affittuari/locatori,
pubblico/artisti, acquirenti/venditori). Il valore dipende dai partecipanti e
dalle regole di abbinamento, non solo da un catalogo digitale.
Effetto di rete diretto: più utenti dallo stesso lato aumentano il
valore per un utente, es. gioco multigiocatore.
Effetto indiretto/incrociato: più utenti di un lato attirano l'altro, es. artisti/pubblico.
Chicken-and-egg : senza locatori pochi affittuari, senza affittuari pochi
locatori. Sussidiare un lato o il freemium può aiutare a partire.
Il freemium può simultaneamente selezionare le WTP E creare una base di utenti.
Altri ingredienti: fiducia, recensioni, pagamento, garanzia, sicurezza della
transazione, liquidità dell'abbinamento, basso attrito, regole e qualità.
Multi-homing : usare più piattaforme. Single-homing : una sola.
Un multi-homing facile riduce i costi d'accesso di un entrante a una clientela
già presente altrove; esclusività e switching costs possono rafforzare
le barriere. Gli effetti di rete possono favorire concentrazione/tipping;
non provano che ogni mercato digitale sia un monopolio naturale.
E2022 Q1d noleggio sportivo, E2025 Q1a/b concerti.

14.5 Aste e appalti pubblici
Vickrey : asta in busta chiusa al secondo prezzo, vendita di un oggetto, valori privati
indipendenti nel modello base. Ciascuno ha un incentivo debolmente dominante
a offrire il proprio valore: l'offerta determina se vince, il prezzo è fissato dagli
altri. Il valore più alto vince e paga la seconda offerta più alta.
E2023 valori 80,100,92 milioni ->il giocatore 2 vince, paga 92 milioni.
Offrire troppo può far vincere a un prezzo superiore al proprio valore; offrire troppo poco
può far perdere una transazione redditizia.
Procurement inverso al secondo prezzo: il costo/l'offerta più bassa vince, riceve
la seconda offerta più bassa, supponendo stessa qualità e dati privati.
E2025 costi 20 000,24 000,28 000 ->A vince e riceve 24 000.

Common value / costo comune incerto: le offerte possono rivelare
informazioni sullo stesso valore o sullo stesso costo. Winner's curse : vincere
può significare essere stato il più ottimista; chi offre razionalmente tiene
conto di questa selezione. In un appalto, rischio di sottostimare
il costo e vincere un contratto in perdita ->rivedere l'offerta verso l'alto
rispetto a una stima ingenua, se i segnali privati sono correlati.
E2025 precisa uno shock meteo comune senza precisare le informazioni private.
Se tutti hanno esattamente la stessa distribuzione pubblica e nessun segnale
privato, lo shock comune da solo NON prova una winner's curse informativa.
La regola « offri il tuo costo certo » non si trasferisce meccanicamente;
occorre precisare segnali, avversione al rischio ed esposizione contrattuale.

14.6 Edgeworth ed efficienza paretiana — E2021 Q4e
Scatola di Edgeworth: dimensioni = dotazioni totali dei due beni;
origini opposte per i due consumatori. Un'allocazione determina
il consumo di ciascuno, essendo fissi i totali.
Miglioramento paretiano: almeno uno sta meglio, nessuno peggio.
Efficiente in senso paretiano: nessun miglioramento di questo tipo è realizzabile.
Guadagni dallo scambio se i loro MRS differiscono, con beni disponibili.
Con preferenze regolari e ottimo interno: MRS_A=MRS_B ; ma con
sostituti perfetti, le allocazioni efficienti si trovano spesso ai bordi.

E2021 : totali 20 drinks D e 20 snacks S ; dotazione di ciascuno (10,10).
Christina U_C=D_C+S_C ; Sebastian U_S=D_S+2S_S, perché cede 2 drinks
per 1 snack. Sebastian apprezza relativamente di più gli snacks.
Scambio vantaggioso: Sebastian dà drinks in cambio di snacks, a un prezzo
tra 1 e 2 drinks/snack. Nelle coordinate di Sebastian (D,S), utilità iniziale 30,
Christina iniziale 20 ; guadagni deboli per entrambi se D+2S>=30 e D+S<=20,
nella scatola, con almeno una disuguaglianza stretta per un guadagno reale.
Allocazioni efficienti: Sebastian non ha più drinks (D=0), O possiede
tutti gli snacks (S=20) ; altrimenti uno scambio marginale migliora entrambi.
Tra le sole allocazioni raggiungibili senza perdita dalla dotazione,
il segmento efficiente D=0,15<=S<=20 soddisfa entrambi i vincoli.
======================================================================
15. ASSIGNMENTS: RISULTATI DI RIFERIMENTO RICALCOLATI
======================================================================

I calcoli seguenti sono ricostruiti dai TESTI, non convalidati da una
griglia di correzione ufficiale. Le pagine manoscritte sono servite a individuare i procedimenti
e a scovare le trappole; non sostituiscono la risoluzione.

A2 — ELASTICITÀ E CONSUMATORE, S02 p.1–3
2.1 Benzina, epsilon_SR=-0.25,epsilon_LR=-0.60.
a) Prezzo +5% ->quantità circa -1.25% nel breve periodo, -3% nel lungo.
   Aggiustamenti possibili: tragitti, trasporto pubblico, veicolo, luogo di residenza.
b) Obiettivo -15% LR ->%Delta p=(-15)/(-0.60)=+25%, secondo il metodo
   proporzionale insegnato. Se « elasticità costante a ogni prezzo » è
   interpretata come Q=A*p^-0.6, calcolo esatto p1/p0=0.85^(-1/0.6),
   cioè circa +31.11%. Precisare la convenzione; 25% è l'approssimazione
   lineare usuale dell'esercizio, non la soluzione esatta di questa funzione.

2.2 I1200, p_L40,p_R120,U=L*R.
Vincolo 40L+120R<=1200 ; L=30-3R con R orizzontale, L verticale.
Intercette: L30,R10.
Panieri del testo, compreso il doppione effettivamente stampato:
(15,5) : spesa 1200,U75, accessibile.
(20,4) : spesa 1280,U80, NON accessibile.
(24,2) : spesa 1200,U48, accessibile.
(10,5) : spesa 1000,U50, accessibile.
(15,5) di nuovo: stessi valori, non inventare un quinto paniere distinto.
Preferito senza vincolo nella lista: (20,4). Migliore accessibile:
(15,5), anche ottimo globale di U=LR con questo vincolo.
Tangenza con R orizzontale: MU_R/MU_L=L/R=p_R/p_L=3 ; vincolo ->R5,L15.
Dopo l'aumento a p_R150 e l'acquisto di R4 : L=(1200-600)/40=15,U60.
Nuovo vincolo L=30-3.75R, Rmax8 ; il reddito I resta 1200.
Qui (15,4) è anche il nuovo ottimo globale: spese 600/600.
L'utilità scende 75->60 ; non dire che il reddito nominale è diminuito.

A3 — GIOCHI, S01 p.1–4
3.1 Golden Balls : matrici e Nash corretti nella sezione 13.2.
3.2 Petrolio/armi: payoff netti e i due ordini di gioco nella sezione 13.3.
3.3 Pace/guerra: Nash PP e WW ; sequenziale ->PP ; simultaneo non unico.
3.4 Impegno: minaccia credibile, costo reputazionale, incentivo a eseguire
la sanzione una volta avvenuta l'aggressione. Non trattare la firma
come un impegno automaticamente vincolante nel gioco.

A4 — MONOPOLIO, IMPOSTA/SUSSIDIO, ENTRATA, S03 p.1–5
4.1 Fiammiferi, p30-Q,C5Q.
MR30-2Q=MC5 ->Qm12.5,pm17.5,pi156.25.
CS=(30-17.5)*12.5/2=78.125 ; PS=(17.5-5)*12.5=156.25.
Qeff25 ; DWL=(25-12.5)*(17.5-5)/2=78.125.
Schema: domanda, MR, MC orizzontale a 5 ; Qm dove MR=MC, pm sulla domanda;
CS triangolo sotto la domanda/sopra 17.5, PS rettangolo 17.5–5 ;
DWL tra Q12.5 e 25, domanda sopra MC.

4.2 Vino, pD20-Q,pS5+Q.
Senza politica: Q7.5,p12.5 ; CS=PS=28.125,W56.25.
Imposta 3 : 20-Q=5+Q+3 ->Q6,p_b14,p_s11,T18.
CS18,PS18,W54,DWL2.25.
Sussidio 3 al suo posto: 5+Q=20-Q+3 ->Q9,p_b11,p_s14,
spesa 27 ; CS40.5,PS40.5,W54,DWL2.25.
Rappresentare il cuneo verticale 3 alla quantità scambiata; con sussidio,
prezzo del venditore AL DI SOPRA del prezzo dell'acquirente.

4.3 Caffeinia, p70-Q-2n,C30Q+100.
A n fissato: pi=(40-2n)Q-Q^2-100 ; MR70-2n-2Q=30,
Q*=20-n, p*=50-n, pi=(20-n)^2-100 per una soluzione positiva.
n1 : Q19,p49,pi261. Il termine -2n vale anche con un solo caffè.
n10 : Q10,p40,pi0.
FC scende 100->25 : quantità/prezzo non cambiano IMMEDIATAMENTE a n dato;
i profitti aumentano di 75. Entrata ->n aumenta, la domanda per caffè cala,
Q e p calano fino a pi0. Nella forma precisa di questo esercizio:
Q_LR=sqrt(25)=5,n15,p35. Questo calcolo completa la domanda qualitativa.

A5 — DISCRIMINAZIONE E COURNOT, S04 p.1–6
5.1 Identificabili: tariffa studenti di Apple Music nell'esempio del compito.
Self-selection : versioni di corsa Uber, comfort/qualità. Per stabilire
una discriminazione, verificare che gli scarti non riflettano solo
costi diversi. Questi esempi sono quelli del compito, non un'indagine
sulle tariffe attuali delle imprese.

5.2 pA20-QA,pB30-2QB,MC5, FC non dati, presi pari a 0.
Segmentato: MRA20-2QA=5 ->QA7.5,pA12.5,piA56.25,CSA28.125.
MRB30-4QB=5 ->QB6.25,pB17.5,piB78.125,CSB39.0625.
Profitto totale 134.375 ; quantità totale 13.75.
Prezzo comune:
Q(p)=0 se p>=30 ; Q=(30-p)/2 se 20<=p<30 ;
Q=(20-p)+(30-p)/2=35-1.5p se 0<=p<20.
Sul segmento comune: pi=(p-5)(35-1.5p), FOC 42.5-3p=0.
p=85/6≈14.1667 ; QA35/6≈5.8333 ; QB95/12≈7.9167 ;
Qtotal13.75 ; profitto 3025/24≈126.0417.
Il candidato monopolio « solo B » al prezzo 17.5 non appartiene al
segmento p>=20 ; verificarne le frontiere, non batte questo candidato comune.
Al prezzo comune: CSA≈17.0139,CSB≈62.6736,PSA≈53.4722,PSB≈72.5694.
Segmentazione meno comune:
A : CS+11.1111,PS+2.7778,W+13.8889.
B : CS-23.6111,PS+5.5556,W-18.0556.
Totale: profitto+8.3333,CS-12.5,W-4.1667.
La quantità totale è identica, ma la ripartizione è meno efficiente:
al margine, le WTP differiscono tra i mercati. Quindi « stessa Q ->stesso W » è falso.

5.3 Rame, p90-Q,MC30,FC0, Q=q1+q2.
pi1=(60-q1-q2)q1 ; BR1=30-q2/2, BR2=30-q1/2.
Intersezione q1=q2=20 ; Q40,p50,pi_i(50-30)*20=400.
Non inserire Qtotal40 nella funzione di costo di una sola impresa.

A6 — BENE PUBBLICO, CREDITO, ESTERNALITÀ POSITIVA, S05 p.1–5
6.1 Pulizia: pubblico nel modello, MB15-Q,12-Q,9-Q,MC27.
Somma 36-3Q=27 ->Q3. WTP individuali a 3 : 12,9,6, somma 27.
Le tre curve non si sommano orizzontalmente.
6.2 Credito: risultati H/L, b2/b6 e apporto 10 nella sezione 12.5.
Scrivere prima i payoff dell'IMPRENDITORE, poi dedurne il rischio
della banca. Calcolare solo i rimborsi bancari non determina
quale azione sarà davvero scelta.
6.3 Solare: MPB100-3Q,MPC10+2Q,MEB20.
Qpriv18,p46 ; MSB120-3Q ; Qeff22 ; s*=20.
DWL0.5*(22-18)*20=40.
Senza correzione: CS486,PS324, beneficio esterno 360,W1170.
Con correzione: p_b34,p_s54,CS726,PS484, sussidio 440,
beneficio esterno 440,W1210. Verifica: guadagno sociale 40.

======================================================================
16. ESAMI: MAPPA COMPLETA E RISULTATI DI RIFERIMENTO
======================================================================

Ogni voce collega il contesto al metodo da riconoscere. Le cifre
sono ricalcoli, non note di una correzione ufficiale. I valori sono
continui salvo indicazione; non arrotondare le quantità prima della fine.

E2020 — S18, domande p.2–6
Q1a Amazon/Klarna : adverse selection, reputazione e informazione su
qualità/resi; un intermediario noto può ridurre il vantaggio reputazionale
di una grande piattaforma che entra nel mercato.
Q1b prezzo mondiale unico di un gioco: confrontare segmentazione e prezzo comune;
il gruppo più sensibile potrebbe pagare meno con la segmentazione, l'altro di più;
W ambiguo, possibilità che un mercato a bassa WTP non sia servito al prezzo comune.
Q1c gioco gratuito con pubblicità/acquisti: self-selection, tempo/pubblicità contro
pagamento, WTP diverse; non serve un tipo osservabile.
Q1d musica, p20-Q,MC2,FC0 : MR20-2Q=2 ->Q9,p11,pi81.
Q1e solo abbonamento fisso: p_uso0 ->Q20,F200,costo40,pi160.
Confrontare con two-part tariff, non richiesto: p_uso2,Q18,F162,pi162.
Il forfait aumenta l'estrazione; p_uso0 porta a un consumo oltre
l'efficiente 18. Non rispondere 162 se il testo impone solo un canone fisso.

Q2a Esther dati 1h/scrittura 2h, Abhijeet dati 2h/scrittura 6h : Esther assoluto in
entrambi; costo della scrittura 2 analisi per Esther, 3 per Abhijeet ->
Esther scrittura, Abhijeet dati secondo il vantaggio comparato.
Q2b pace pubblica MB200-x e 100-x,MC150 ->300-2x=150 ->x75,
nel segmento in cui entrambe le MB sono positive. Disegnare la somma verticale.
Q2c free rider : il beneficio di un paese non dipende dal suo contributo.
Q2d UK esporta vestiti/importa cibo, fattori specifici: il prezzo
del cibo cala ->la terra perde, il capitale può guadagnare, la produzione si sposta
verso i vestiti, possibile consumo maggiore grazie a migliori ragioni
di scambio. PPF, nuova retta dei prezzi e indifferenza; sezione 14.3.

Q3a vaccini: pD100-Q,pS10+Q ->Q45,p55.
Q3b definizione/esempio: la vaccinazione riduce il rischio trasmesso agli altri.
Il testo ripete la lettera b per la successiva sotto-domanda numerica.
Q3b numerica: MEB20 ->MSB120-Q, sociale 120-Q=10+Q ->Q55.
DWL non corretta 0.5*10*20=100.
Q3c sussidio 30 : 10+Q=100-Q+30 ->Q60,p_b40,p_s70.
Sussidio superiore all'ottimo 20 ; eccesso rispetto a Q55 ->
DWL0.5*5*10=25. Usare MSB e MSC, non solo il vecchio Q45.

Q4a Cournot/Bertrand omogenei: Nash in quantità ->margine positivo;
Nash in prezzi con stessi MC/capacità ->pMC,Lerner0 ; spiegare il ribasso.
Q4b cemento Opet MC0,Siren MC2,p10-qO-qS : qO4,qS2,p4,
piO16,piS4. Reazioni qO5-qS/2 ; qS4-qO/2.
Q4c quote di mercato: di più presso l'impresa a costo 0 fa risparmiare
risorse; quote uguali non sono un obiettivo di efficienza.
Q4d bonus: risultati 95/260, bonus 0.95/3, scelta allineata con i
numeri dati; sezione 12.7.

Q5 facoltativa: inferior good, decreasing returns, MP_K, isoquant,
perfect complements ; birra Q990-40p+20pd+30ps a prezzo 10 ->Q1090.
epsilon_own=-400/1090≈-0.367 ; epsilon_cross_ps=300/1090≈0.275.
Yerba Mate C40+4q+q^2,p20 ->q8,pi24. Mostrare p=MC4+2q.

E2021 — S19, domande p.2–5
Q1a interconnessione elettrica: prezzo svedese iniziale inferiore ->commercio
allargato tende ad alzare il prezzo svedese, abbassare quello tedesco; CS Svezia cala,
CS Germania aumenta, PS dei produttori svedesi aumenta, ipotesi usuali.
Q1b ricerca verde: non rivalità e non escludibilità, secondo la diffusione reale.
Q1c carbone: costo imposto a terzi non incorporato nel costo privato.
Q1d quota o imposta con incertezza e danni ripidi: argomento della
protezione della quantità, sezione 11.5 ; motivare con pendenze e grafico.

Q2a pane pD10-Q,pS2+Q ->Q4,p6.
Q2b pane gratuito all'uso: p_b0 ->QD10,p_s12, sussidio 12/unità.
CS50,PS50, spesa pubblica 120,W=-20 ; Winitial16,DWL36.
Il W negativo include il costo di produzione realmente pagato dalla collettività.
Q2c elasticità: una forte risposta di Q crea più unità inefficienti,
a parità di politica; precisare cosa resta costante.
Q2d Colosseo: skip-the-line=self-selection per valore del tempo; pensionati=
gruppi osservabili; biglietto combinato=bundling, confrontare le WTP dei pacchetti.

Q3a macchina p56-2Q,C100+8Q ->MR56-4Q=8 ->Q12,p32,pi188.
Q3b Cournot c8 per entrambi, FC100 per Lynn, 50 per Voytek :
BR_i=12-qj/2 ; q_i8,Q16,p24 ; profitti 28 e 78.
Q3c Lynn leader: qL12,qV6,Q18,p20 ; profitti 44 e 22.
Disegnare le reazioni: esito sulla BR del follower; confrontare Q/prezzo con Cournot.

Q4a credito: azione nascosta e responsabilità limitata, moral hazard.
Q4b private equity : informazione, sorveglianza, potere decisionale.
Q4c rimborso 30 : sforzo H 0.75*10=7.5 ; L 0.25*10+4=6.5,
quindi H ; banca 0.75*30-20=2.5, contratto redditizio nel modello.
Q4d rimborso 34 : H4.5 ; L1.5+4=5.5 ->L ; banca 8.5-20=-11.5.
IC impone rimborso<=32 ; il finanziamento con H richiede>=80/3≈26.667.
Q4e bevande/snack: Edgeworth, guadagni e bordi efficienti nella sezione 14.6.
Q4f mais/grano, A 2h/4h, B 4h/6h : A assoluto nel mais e comparato nel mais
(costo 0.5 grano contro 2/3). Specializzazione e scambio a prezzo intermedio.

Q5 : increasing returns, perfect substitutes, unit elasticity, luxury good,
MRTS ; isoquanto/isocosto imbracature poi aumento dei salari, quantità 1000
imposta ->sostituzione verso macchine e costo minimo più alto.

E2022 — S20, domande p.2–5
Q1a gioco freemium senza interazione: discriminazione per self-selection.
Q1b aggiunta di interazioni: gli effetti di rete possono motivare la gratuità.
Q1c prezzo minimo 99 centesimi: limita il ribasso del modello di Bertrand
omogeneo, potenzialmente margini sopra MC ; attenzione al prezzo discreto.
Q1d piattaforma attrezzatura sportiva: due lati, fiducia, abbinamento,
effetti incrociati, avvio; sezione 14.4.
Q1e derivare Lerner da pi=p(Q)Q-C(Q), non solo recitare la formula.

Q2a/b/c wifi pubblico: non rivale/non escludibile nel modello; 300(10-Q)
=1500 ->Q5 ; contributi volontari insufficienti per free riding.
Q2d grano Indonesia: pw30,QD50,QS10, importazioni 40.
Q2e dazio 10 : p40,QD40,QS20, importazioni 20 ; Delta CS=-450,
Delta PS=+150, gettito 200,DWL100. Due triangoli, non tutta la perdita di CS.

Q3a monopolio: trasferimenti più guadagni dallo scambio perduti.
Q3b pompe p26-2Q,C2Q, imposta 4 : MR26-4Q=6 ->Q5,p_b16,
p_s12, profitto 50, gettito 20. Ottimo sociale SENZA distorsioni: Q12,MC2.
DWL SOCIALE TOTALE =0.5*(12-5)*(16-2)=49.
Non trattare l'imposta di 4 come costo reale di produzione nel welfare.
Senza imposta, monopolio Q6,p14,DWL36 ; con imposta, perdita aggiuntiva 13.
Il triangolo 25 tra domanda e MC+imposta non misura tutta la
perdita sociale, perché il gettito è un trasferimento.
Q3c imposta a carico di acquirente/venditore: stesso cuneo e stessa quantità.
Q3d senza imposta Cournot : q1=q2=4,Q8,p10,pi_i32.
Q3e imposta 4 su entrambe: entrambe le reazioni si spostano verso l'origine;
complemento numerico non richiesto: q_i10/3,Q20/3,p38/3.

Q4a/b falegname: forfait/ora, qualità, durata, costo opportunità,
sezione 12.6 ; nessun contratto risolve tutti i problemi contemporaneamente.
Q4c nessuna curva d'offerta propria del monopolio, perché la domanda entra in MR.
Q4d Gourmets/Snoozers : con costi nulli, separato 260 contro pacchetto 300
per coppia di clienti; riserva sui costi assenti nella sezione 9.4.
Q5 : cross-price elasticity, increasing returns, MRS, indifference curve,
perfect substitutes ; sostituire un sussidio alimentare con denaro che permette
il vecchio paniere ->non peggio, in genere meglio se il vecchio ottimo era
interno e le tangenze differiscono; sezione 4.6.

E2023 — S21, domande p.2–6
Q1a lievito economico: il prezzo assoluto non misura il potere di mercato;
Lerner, MC, elasticità. Q1b veterinari: libera entrata in concorrenza
monopolistica vs barriere/interazione strategica in oligopolio;
shock di costo, profitti LR0 solo con la libera entrata del modello simmetrico.
Q1c pasta p25-Q,C5Q ->Q10,p15,pi100.
Q1d Cournot T MC5,G MC9 ->BR_T10-qG/2,BR_G8-qT/2 ;
qT8,qG4,Q12,p13 ; profitti 64 e 16.

Q2a licenze di rete: lo spettro con interferenze può essere rivale e
non escludibile prima dell'assegnazione; l'accesso libero può causare sovrasfruttamento.
Non confondere la rete commerciale con lo spettro che essa usa.
Q2b Vickrey 80/100/92 : il giocatore 2 vince, paga 92 milioni.
Q2c abbonamento fisso pD10-2Q,C10+2Q : uso 0,Q5,F25,
costo 20,pi5. Con two-part tariff, p2,Q4,F16,pi6, a titolo di confronto.
Q2d disoccupazione: sconto redditizio se la clientela è più sensibile e la rivendita limitata;
versione lenta: autoselezione, può proteggere i ricavi del premium;
smartphone costosi: clienti con WTP potenzialmente più alta, lo sconto non segue
automaticamente questa logica. Argomentare, non applicare qualunque sconto.

Q3a mance: incentivare la qualità osservabile dal cliente, nascosta al capo.
Q3b recensioni degli hotel: riducono la selezione avversa e il vantaggio reputazionale delle catene.
Q3c azione H/L nascosta: moral hazard. Q3d b2 ->H, banca+4 ; b6 ->L, banca-8.
Q3e apporto 10/rimborso 15 ->H con b2 e b6, banca+2.

Q4a tetto al prezzo del petrolio 60 contro 90, QS russo fisso a 8 milioni ->PS russo
-240 milioni USD/giorno. Q4b stessa quantità russa sotto queste ipotesi;
nessuna penuria mondiale dedotta meccanicamente; sezione 7.4.
Q4c benzina MPB100-Q,MPC10+Q,MECQ ->Qpriv45,Qeff30.
Q4d imposta 20 ->Q35,p_b65,p_s45 ; DWL37.5, perché l'imposta è insufficiente.
Q5 : income elasticity, decreasing returns, MRTS, indifference curve,
perfect complements ; operazioni con ore di medici/infermieri,
aumento del salario dei medici ->sostituzione verso infermieri, stessa produzione 100.

E2024 — S22, domande p.1–5
Q1a/b/c tunnel: pubblico sotto ipotesi; somma MB25-4Q,MC9 ->Q4 ;
free rider. Discutere pedaggio/congestione se la domanda riguarda la classificazione reale.
Q1d vino QD11-p_b/2,QS=-1.5+p_s, imposta 1 :
11-(p_s+1)/2=-1.5+p_s ->p_s8,p_b9,Q6.5, gettito 6.5.
Senza imposta: p25/3,Q41/6 ; verificare la quantità leggermente più bassa con l'imposta.
Q1e norme regionali del vino: la certificazione collettiva riduce i lemons,
permette una qualità credibile senza un grande marchio individuale.

Q2a Novo : le barriere mantengono i margini, la dimensione aumenta il volume,
una domanda meno elastica accresce il margine relativo. Q2b brevetto: arbitraggio
efficienza statica/incentivo dinamico all'innovazione.
Q2c USA p8-Q, Messico p6-Q/2,MC0 : USQ4,p4, profitto 16 ;
MexQ6,p3, profitto 18 ; totale 34. CS USA 8, Mex 9.
Q2d comune: Q0 per p>=8 ; Q8-p per 6<=p<8 ; Q20-3p per p<6.
Ottimo p10/3,Q10, profitto 100/3≈33.333 ; QUS14/3,QM16/3.
Verificare le frontiere e la zona in cui comprano solo gli USA.
Q2e segmentazione: il prezzo USA sale 10/3->4, CS scende 98/9->8 ;
il prezzo in Messico scende 10/3->3, CS sale 64/9->9. Il profitto aumenta di 2/3,
CS totale cala di 1 ; W totale cala di 1/3 con questi numeri.

Q3a/b tessile: Qpriv60,p140 ; Qeff40,MSB160,MPC120 ; DWL600.
Q3c permessi: eguagliare i MAC per minimizzare il costo di un tetto totale.
Q3d proprietario comune tessile/spa: internalizza il danno nel profitto
congiunto, ma può anche avere potere di mercato; effetto da distinguere dal
benchmark sociale di imprese price taker.

Q4a Atene pane 4h/olive 2h, Sparta 5h/5h : assoluto nel pane Atene,
comparato nel pane Sparta (1 oliva/pane contro 2).
Q4b Bertrand omogeneo MC5/7/8 : intorno a 7, ribasso del rivale efficiente,
sfumatura su parità/prezzi continui nella sezione 10.6.
Q4c/d Bertrand differenziato simultaneo poi impresa 2 leader: costi assenti
dal testo; risultati con l'ipotesi di costi nulli nella sezione 10.8.
Q5 : perfect complements, Engel curve, isoquant, diminishing MP_K,
increasing returns ; offerta MC, chiusura SR sotto AVC e uscita LR sotto ATC.

E2025 — S23, domande p.1–6
Q1a/b LN concerti: effetti di rete, barriere, multihoming.
Q1c rumore: Coase, diritti mal definiti e costi di negoziazione.
Q1d capacità 2000 già riempita da fan a 1200 ->lo sconto studenti a 500
non permette profitto aggiuntivo; costo opportunità dei posti.
Q1e biglietti/T-shirt: profitto congiunto e risultati pc3040/7,pT1060/7,
profitto 1 961 600/7≈280 228.571, sezione 9.6.

Q2a riduzione d'imposta in concorrenza, D anelastica/S elastica: p_b cala,
p_s sale, Q aumenta; gli acquirenti ricevono gran parte della riduzione.
Gettito: aliquota per unità più bassa contro volume più alto; segno da motivare,
non garantito solo dalle parole « anelastica » ed « elastica ».
Q2b imposta 2, q_i10-2p_i+p_j,MC2 : BR_i=(14+p_j)/4,
p_i14/3,q_i16/3,pi_i128/9 ; gettito totale 64/3.
Q2c imposta 1 : BR_i=(12+p_j)/4,p_i4,q_i6,pi_i18 ; gettito totale 12.
Il prezzo cala di 2/3, meno della riduzione d'imposta di 1 ; il margine individuale sale 8/3->3.
Q2d modelli omogenei: Bertrand/capacità illimitata pMC ; Cournot margine
positivo; gli stessi nomi di imprese non bastano a scegliere il modello.

Q3a North/South : PPF e vantaggi nella sezione 14.1.
Q3b acciaio pD1100-Q,pS100+Q,pw400, Q in MIGLIAIA di tonnellate:
libero scambio QD700,QS300,M400 ; dazio 100 ->p500,QD600,QS400,M200.
CS245 000->180 000 ; PS45 000->80 000 ; gettito 20 000 ;
DWL10 000, tutte queste aree in MIGLIAIA di USD. Quindi DWL=10 milioni USD.
Due triangoli da 5 milioni ciascuno; Delta CS=-65 milioni,
Delta PS=+35 milioni, gettito 20 milioni ->netto -10 milioni.
Q3c paese esportatore agricolo, il prezzo ricevuto cala: il reddito dei proprietari
terrieri cala; meccanismo del lavoro mobile e valore del prodotto marginale.
Q3d biciclette in concorrenza monopolistica: prodotti differenziati, domanda
dell'impresa decrescente, entrata facile, interazione strategica individuale trascurata;
shock negativo ->perdite/uscite ->profitto economico nullo per le superstiti
nel modello simmetrico; Q per superstite dipende dalla forma del modello.

Q4a/b/c pulizia pubblica: Qeff3, non escludibilità/non rivalità, free rider.
Q4d Vickrey inverso costi 20 000/24 000/28 000 : A vince, pagato 24 000.
Q4e meteo, costo comune incerto: discutere la winner's curse E le informazioni
disponibili, non inventare segnali privati assenti; sezione 14.5.
Q4f controllo imperfetto: F>=60 per IC debole, F>60 per qualità strettamente
preferita; pagamento 110, costi 100/70, scoperta 0.5.
Q5 : normal good, constant returns, isocost, marginal utility,
increasing economies of scale ; isocosto K10-0.5L, isoquanto Q100,
ottimo tangente MP_L/MP_K=50/100, nessun calcolo numerico degli input possibile.
======================================================================
17. FORMULARIO TRASVERSALE: COSA, QUANDO E PERCHÉ
======================================================================

I nomi dei parametri cambiano a seconda dell'esercizio. Ogni riga presuppone
i domini e le condizioni descritti nei capitoli precedenti.

F01 Equilibrio concorrenziale: QD(p*)=QS(p*).
    Eguaglia le quantità desiderate dai due lati allo stesso prezzo.
F02 Inversa di una domanda Q=a-bp : p=a/b-Q/b, b>0.
    Serve a tracciare e a derivare il ricavo scegliendo Q.
F03 Vincolo di bilancio: p_x*x+p_y*y<=I ; pendenza con x orizzontale=-p_x/p_y.
    Vincolo di spesa, distinto dall'obiettivo U.
F04 MU_x=partial U/partial x ; MRS_xy=MU_x/MU_y.
    Pendenza dell'indifferenza=-MRS_xy quando y è verticale.
F05 Ottimo interno del consumatore: MRS_xy=p_x/p_y e bilancio saturato.
    Eguaglianza dell'utilità marginale per euro.
F06 Cobb-Douglas U=x^alpha*y^beta : quote di bilancio alpha/(alpha+beta)
    e beta/(alpha+beta). Non usare per sostituti/complementi perfetti.
F07 Elasticità al prezzo: epsilon=(partial Q/partial p)*(p/Q).
    La derivata trasforma una variazione di prezzo in variazione di quantità; p/Q
    converte queste variazioni in percentuali senza unità.
F08 Approssimazione %Delta Q≈epsilon*%Delta p ; obiettivo %Delta p≈%Delta Q/epsilon.
    Esatto a elasticità costante: Q1/Q0=(p1/p0)^epsilon.
F09 Cross-price : epsilon_ij=(partial Q_i/partial p_j)*p_j/Q_i.
    Segno positivo per sostituti, negativo per complementi.
F10 Income : eta=(partial Q/partial I)*I/Q.
    Segno e grandezza classificano inferiore, normale, necessità e lusso.
F11 MP_L=partial f/partial L ; AP_L=Q/L.
    Marginale e medio rispondono a due domande diverse.
F12 Isoquanto: dK/dL=-MP_L/MP_K ; isocosto K=C/r-(w/r)L.
F13 Costo minimo interno: MP_L/MP_K=w/r e f(K,L)=Qbar.
    Stesso output marginale per euro di input.
F14 Rendimenti: confrontare f(tK,tL) con t*f(K,L).
    Cobb-Douglas : confrontare la somma degli esponenti con 1.
F15 TC=FC+VC ; ATC=TC/Q ; AVC=VC/Q ; AFC=FC/Q ; MC=TC'.
    MC deriva dal costo dell'unità marginale, non dal costo medio.
F16 pi=R-C ; MR=R' ; ottimo interno MR=MC.
    Eguaglia guadagno e costo aggiuntivi, dopo aver verificato l'ottimo.
F17 Price taker : MR=p ->p=MC ; chiusura se il miglior R<VC nel breve periodo.
F18 pi=(p-ATC)Q ; PS=pQ-VC=pi+FC.
    Non assimilare automaticamente PS e pi.
F19 CS=integrale_0^Q p_D(q)dq-p_bQ.
F20 PS=p_sQ-integrale_0^Q MC(q)dq.
F21 W=CS+PS+imposte-sussidi+benefici esterni-danni esterni,
    con un trattamento coerente dei costi fissi quando cambiano.
F22 Imposta: p_b-p_s=t ; sussidio: p_s-p_b=s ; stessa Q dai due lati.
F23 Lineare p_D=a-bQ,p_S=c+dQ : Q0=(a-c)/(b+d),
    Qt=(a-c-t)/(b+d), Qs=(a-c+s)/(b+d), nel dominio interno.
F24 DWL di un'imposta senza altra distorsione=0.5*t*(Q0-Qt).
    DWL di un sussidio senza esternalità=0.5*s*(Qs-Q0).
F25 Monopolio: MR=p+Qp' ; se p=a-bQ, MR=a-2bQ.
    Il termine Qp' rappresenta la perdita di ricavo sulle unità già vendute.
F26 Monopolio con MCc costante: Qm=(a-c)/(2b),pm=(a+c)/2.
    Prezzo letto sulla domanda, quantità trovata con MR=MC.
F27 Lerner=(p-MC)/p=-1/epsilon_impresa.
    Domanda dell'impresa e ottimo interno a prezzo unico.
F28 Segmentazione: MR_i=MC ; aggregazione comune Q(p)=somma max(0,q_i(p)).
F29 Tariffa a due parti nota: p_uso=MC,F=CS(p_uso), nel caso semplice.
F30 Cournot : BR_i=(a-c_i-bq_j)/(2b), troncata a 0.
    Due attive: q_i=(a-2c_i+c_j)/(3b).
F31 Cournot con n imprese simmetriche: q_i=(a-c)/[b(n+1)],p=(a+nc)/(n+1).
F32 Stackelberg in quantità simmetrico: qL=(a-c)/(2b),qF=(a-c)/(4b).
    Ritrovare sostituendo la reazione del follower.
F33 Bertrand differenziato q_i=A-Bp_i+Dp_j :
    BR_i=(A+B*c_i+D*p_j)/(2B) ; simmetrico p=(A+B*c)/(2B-D).
F34 MSC=MPC+MEC ; MSB=MPB+MEB ; ottimo sociale MSB=MSC.
F35 Pigou : t*=MEC(Qeff) o s*=MEB(Qeff), casi concorrenziali semplici.
F36 Inquinamento: MAC(e)=t ; ottimo MAC(e)=MEC(e).
F37 Bene pubblico: somma_i MB_i(Q)=MC(Q), somma verticale e segmenti.
F38 Valore atteso: E[X]=somma p_s*X_s, risultati netti per stato.
F39 Credito IC : (pH-pL)*(R-rimborso)>=beneficio privato di L.
    Banca: p_azione*rimborso-prestito>=0, nel modello senza interesse alternativo.
F40 Ispezione: penalità >= risparmio privato/probabilità di scoperta.
F41 Costo opportunità di X in Y=a_X/a_Y se a è in ore per unità.
F42 Dazio all'importazione: p_dom=pw+tau, importazioni=QD-QS, gettito=tau*importazioni.
    DWL=0.5*tau*(aumento QS+calo QD), piccolo paese che resta importatore.
F43 Vendita Vickrey: l'offerta più alta vince, paga la seconda più alta.
    Appalto: l'offerta più bassa vince, riceve la seconda più bassa.
F44 Bene pubblico e privato: le stesse funzioni individuali possono richiedere
    somme OPPOSTE a seconda della rivalità; non scegliere per automatismo.

======================================================================
18. REPERTORIO DELLE ABBREVIAZIONI E DEI SIMBOLI
======================================================================

Contrassegni: [O] abbreviazione/simbolo osservato nei PDF; [A] alias standard
di una nozione esplicitamente presente ma non necessariamente scritta così;
[C] complemento standard aggiunto per rendere comprensibili i metodi.
Le varianti sono raggruppate. Questo repertorio riguarda il corpus e le sue varianti
utili, non tutte le abbreviazioni di tutti i manuali di microeconomia.

18.1 Costi, ricavi, produzione e profitto
AC [O] — Average Cost — costo medio; qui in genere equivalente ad ATC,
  C(Q)/Q. Verificare se un autore lo usa per un altro costo medio.
AFC [O] — Average Fixed Cost — costo fisso medio; FC/Q.
AP, APL, AP_L [A] — Average Product (of Labor) — prodotto medio (del lavoro); Q/L.
ATC [O] — Average Total Cost — costo totale medio; TC/Q.
AVC [O] — Average Variable Cost — costo variabile medio; VC/Q.
C(Q), TC [O] — (Total) Cost — funzione di costo totale, FC+VC(Q).
FC [O] — Fixed Cost — costo fisso; indipendente da Q nell'orizzonte studiato.
F [O] — Fixed cost OU Fixed fee — costo fisso di produzione OPPURE canone
  incassato. Identificare il ruolo; i due hanno segni opposti in pi.
MC [O] — Marginal Cost — costo marginale; dC/dQ, moneta/unità di output.
MP [O] — Marginal Product — prodotto marginale di un fattore, output/input.
MPL, MP_L [O] — Marginal Product of Labor — prodotto marginale del lavoro.
MPK, MP_K [A] — Marginal Product of Capital — prodotto marginale del capitale.
MR [O] — Marginal Revenue — ricavo marginale; dR/dQ.
MRP_L [C] — Marginal Revenue Product of Labor — ricavo marginale procurato
  da un'unità aggiuntiva di input lavoro, MR*MP_L.
VMP_L [A] — Value of Marginal Product of Labor — valore del prodotto
  marginale del lavoro, p*MP_L ; condizione di assunzione concorrenziale.
CSR [A] — Corporate Social Responsibility — responsabilità sociale
  d'impresa, evocata nella discussione dell'obiettivo di profitto in L6.
R(Q), Revenue [O] ; TR [A] — Total Revenue — ricavo totale, p(Q)*Q.
AR [C] — Average Revenue — ricavo medio, R/Q ; uguale al prezzo con prezzo unico.
VC [O] — Variable Cost — costo variabile, dipende da Q.
pi, Π, π [O] — Profit — profitto/profitto economico secondo i costi inclusi.
A, TFP [A] — Total Factor Productivity — produttività totale dei fattori,
  efficienza in Q=A*f(K,L). A non è sempre un parametro tecnologico.
K [O] — Capital — capitale produttivo; non significa automaticamente denaro.
L [O] — Labor — lavoro; MA L può anche essere Low type o Lunches.
J [O] — Land dans L5 — terra; lettera scelta per questo esempio.
w [O] — Wage — salario/costo per unità di lavoro.
r [O] — Rental rate of capital — prezzo di noleggio di un'unità di capitale.
q_i [O] — Firm i's quantity — quantità prodotta dall'impresa i.
Q [O] — Total quantity/output — quantità di mercato o output; leggere il contesto.
Qbar, Q avec barre [O] — produzione obiettivo imposta, non variabile di scelta libera.
HP [O] — Highly Productive — impresa molto produttiva, L8.
LP [O] — Less Productive — impresa meno produttiva, L8.
SR, LR [A] — Short Run, Long Run — breve periodo/lungo periodo.
SRAC, LRAC [A] — Short-/Long-Run Average Cost — costo medio per orizzonte.
RTS [A] — Returns To Scale — rendimenti di scala.
IRS, CRS, DRS [A] — Increasing/Constant/Decreasing Returns to Scale —
  rendimenti crescenti/costanti/decrescenti; distinguere dalle economie di costo.

18.2 Domanda, consumatore ed elasticità
p, P [O] — Price — prezzo per unità. Maiuscola/minuscola non ha un significato
  universale: lo stesso materiale può variare la notazione.
QD, Q^D, Q_D [O] — Quantity Demanded — quantità domandata a un prezzo.
QS, Q^S, Q_S [O] — Quantity Supplied — quantità offerta a un prezzo.
D, S [O] — Demand, Supply — curve di domanda/offerta nei grafici.
  D e S possono altrove indicare anche un prestito, un giocatore o un gruppo.
p_b, pBuyer [O] — Buyer price — prezzo pagato da chi compra.
p_s, pSeller [O] — Seller price — prezzo netto ricevuto da chi vende.
U(x,y) [O] — Utility — utilità, rappresentazione ordinale delle preferenze.
MU, MU_x [O] — Marginal Utility — utilità marginale del bene x.
MRS [O] — Marginal Rate of Substitution — saggio marginale di sostituzione,
  rapporto delle utilità marginali e valore assoluto della pendenza d'indifferenza.
MRT [O] — Marginal Rate of Transformation — saggio marginale di trasformazione,
  pendenza assoluta della PPF nel modello di produzione; nel vincolo di consumo,
  il prezzo relativo è talvolta chiamato tasso di trasformazione/scambio disponibile.
MRTS [A] — Marginal Rate of Technical Substitution — saggio marginale di
  sostituzione tecnica; rapporto dei MP, pendenza assoluta dell'isoquanto.
I [O] — Income — reddito/budget del consumatore; altrove talvolta investment.
E [O] — Entertainment dans L3 — intrattenimento; non sempre elasticity.
F [O] — Food dans L3 — alimentazione; altrove F=costo fisso/quota d'accesso.
G, O [O] — Gasoline, Other goods — benzina/altri beni in L4.
PL, PR, p_L, p_R [O] — prezzi lunch/record in A2 ; altrove i pedici
  L/R possono indicare il tipo low o Red. Leggere sempre la definizione locale.
ED, E^D, E_D, epsilon_D, epsilon_d [O/A] — (Own-)Price Elasticity of Demand
  — elasticità della domanda al prezzo, in genere con segno negativo.
epsilon_S, ES [A] — Price Elasticity of Supply — elasticità dell'offerta al prezzo.
epsilon_ij, E_cross [A] — Cross-Price Elasticity — elasticità incrociata.
eta, epsilon_I, E_I [A] — Income Elasticity — elasticità al reddito.
WTP [A] — Willingness To Pay — disponibilità a pagare; per unità se marginale,
  somma/area se totale. Una WTP totale non è automaticamente il prezzo marginale.
Delta I [O] — compensazione/variazione di reddito; trasferimento forfettario in L4.
p_r [O] — prezzo di un altro bene, es. raspberries ; non la r del capitale.
T [O] — temperatura/determinante della domanda in L2 ; altrove trasferimento/imposta.

18.3 Benessere, politiche ed esternalità
CS, C.S. [O] — Consumer Surplus — surplus del consumatore.
PS [O] — Producer Surplus — surplus del produttore; ricavo meno VC.
W, TS [A] — Welfare, Total Surplus — benessere/surplus totale monetario.
DWL [O] — Deadweight Loss — perdita secca, surplus netto perso.
MB [O/A] — Marginal Benefit — beneficio marginale; WTP dell'unità successiva.
MPC, PMC, MC_p [A/O] — Marginal Private Cost — costo marginale privato.
MEC, MC_e [O] — Marginal External Cost — costo marginale esterno.
MSC, SMC [A] — Marginal Social Cost — costo marginale sociale, MPC+MEC.
MPB, PMB [A] — Marginal Private Benefit — beneficio marginale privato.
MEB [O] — Marginal External Benefit — beneficio marginale esterno.
MSB [O], SMB [A] — Marginal Social Benefit — beneficio marginale sociale, MPB+MEB.
MAC [O] — Marginal Abatement Cost — costo marginale di abbattimento/riduzione
  delle emissioni, non « marginal average cost ».
EC, EB [A] — External Cost, External Benefit — costo/beneficio esterno TOTALE,
  quando definito così; distinguere dai MEC/MEB marginali.
CPR [O] — Common-Pool Resource / Common Property Resource — risorsa comune,
  Q_CPR nel grafico L11 ad accesso libero.
t, tau [O/A] — Unit Tax / Tariff — imposta unitaria o dazio.
s [O] — Unit Subsidy — sussidio unitario; altrove probabilità o stato.
T, Tax revenue [A/O] — gettito fiscale, t*Q ; importo monetario.
Qpriv, Qopt, Qeff, Q* [O/A] — quantità privata, ottima, efficiente,
  di equilibrio. Una stella da sola NON dice « ottimo sociale ».
QPoll [O] — Quantity of Pollution — quantità di inquinamento in L11.
VAT [O] — Value Added Tax — IVA; imposta ad valorem in generale, semplificata
  in unitaria nell'esercizio E2025.

18.4 Mercati, contratti e giochi
Lerner, L_index [A] — Lerner Index — (p-MC)/p ; evitare L se L=lavoro.
Pm, p_M, QM, Q_M [O] — prezzo/quantità di monopolio nei grafici.
PC, p_C [O] — in L10, prezzo di COURNOT; altrove PC può voler dire
  Perfect Competition. Il pedice va interpretato nella sua figura.
PPT, p_PT [O] — prezzo price-taking nella figura L10 p.10.
QC, Q_C [O] — quantità concorrenziale nei grafici di monopolio;
  in E2025 Qc indica la quantità di biglietti del CONCERTO, non la concorrenza.
MC_i, c_i [O] — costo marginale dell'impresa i, costante se scritto c_i.
n [O] — numero di imprese, caffè o agenti secondo il contesto.
BR, BR_i [A] — Best Response — miglior risposta/funzione di reazione.
NE [A] — Nash Equilibrium — equilibrio di Nash.
SPNE [A] — Subgame Perfect Nash Equilibrium — equilibrio perfetto nei sottogiochi.
IC [O] — Incentive Compatibility — compatibilità degli incentivi; si
  sceglie il contratto/l'azione che chi progetta vuole indurre.
IR [O] — Individual Rationality — partecipazione; contratto almeno altrettanto
  interessante dell'opzione esterna.
H, L [O] — High/Low — tipi, qualità o sforzo; non presupporre lo stesso senso ovunque.
B [O] — beneficio privato dello sforzo basso in E2023/A6 ; in L9 B_H
  indica un bundle, e in L10 B=Blue.
R [O] — ricavo nel credito; R=Red nell'oligopolio; R=Records in A2.
F, T_j [O/A] — canone fisso, pagamento del menu j ; il loro ruolo dipende dal contratto.
S, N [O] — Split/Steal in A3, scelte di questo compito; SN/NS/NN sono
  profili di strategie, non nuove nozioni economiche.
E[X] [A] — Expected Value — valore atteso di X, media ponderata degli stati.
pH, pL [A] — probabilità di successo secondo l'azione H/L nel contratto;
  altrove p_H,p_L sono PREZZI ai gruppi high/low.
d [A] — probabilità di scoperta nell'esempio di ispezione; un altro
  esercizio può usare d come pendenza dell'offerta.

18.5 Commercio e matematica
PPF, PPC [A] — Production Possibility Frontier/Curve — frontiera delle
  possibilità di produzione, data dalla tecnologia e dalle risorse.
OC [A] — Opportunity Cost — costo opportunità, migliore alternativa sacrificata.
M [A] — Imports — importazioni, QD-QS in un paese importatore.
pw, p_W [A] — World Price — prezzo mondiale dato nel modello del piccolo paese.
ToT [A] — Terms of Trade — ragioni di scambio, prezzi export/prezzi import.
FOC [C] — First-Order Condition — condizione del primo ordine, derivata nulla
  all'ottimo interno; termine standard per le condizioni usate nel corso.
SOC [C] — Second-Order Condition — condizione del secondo ordine, verifica la curvatura.
Delta, Δ [O] — variazione finita, valore finale meno valore iniziale.
d/dx [O] — derivata rispetto a una variabile.
partial, ∂ [O] — derivata parziale, altre variabili mantenute costanti.
prime, ' [O] — altra notazione di derivata, es. C'(Q).
max/min [O] — massimizzare/minimizzare un obiettivo.
s.t. [C] — Subject To — sotto il vincolo di.
sqrt(x), racine(x) [O/A] — radice quadrata; x^(1/2).
barre [O] — variabile fissata/obiettivo; stella [O] — soluzione di ottimizzazione/equilibrio.

18.6 Abbreviazioni contestuali non concettuali
SSE=Stockholm School of Economics ; BE501=codice del corso; ID=identificativo
dello studente; AI=Artificial Intelligence ; GPT=nome di una famiglia di modelli di IA;
US=United States ; UK=United Kingdom ; EU=European Union ; kr=corone;
USD=dollari statunitensi; GB/LN sono nomi di attori/luoghi degli esercizi;
HIV=virus citato come esempio di farmaco; MTB=mountain bike;
CSCE=Conference on Security and Co-operation in Europe in A3 ;
SFA-Oxford=fonte di un grafico; I/II/III possono essere numeri di parti.
Queste sigle non sono formule di microeconomia.

======================================================================
19. LESSICO BILINGUE DELLE NOZIONI E DELLE CONSEGNE
======================================================================

Le definizioni estese, le ipotesi e i calcoli sono nei capitoli.
Questo lessico permette di ritrovare una parola inglese senza conoscerne il capitolo.

19.1 Fondamenti e mercati
Absolute advantage — vantaggio assoluto : produrre con meno risorse.
Accounting cost/profit — costo/profitto contabile : spese esplicite/saldo.
Allocation — allocazione : chi riceve quali beni/risorse.
Barrier to entry — barriera all'entrata : ostacolo a un nuovo concorrente.
Binding constraint — vincolo attivo : limita effettivamente la scelta.
Ceteris paribus — a parità di altre condizioni : isolare un cambiamento.
Commodity — prodotto di base standardizzato, utile per il modello concorrenziale.
Competitive reallocation — riallocazione verso imprese più produttive.
Comparative advantage — vantaggio comparato : minore costo opportunità relativo.
Complementary goods — beni complementari : il prezzo dell'uno riduce la domanda dell'altro.
Consumer — consumatore : sceglie un paniere sotto vincoli.
Demand curve/function — curva/funzione di domanda : acquisto desiderato secondo il prezzo.
Differentiated products — prodotti differenziati : caratteristiche distinte.
Distribution — distribuzione di redditi/guadagni; da distinguere dall'efficienza.
Economic cost/profit — costo/profitto economico : include le opportunità sacrificate.
Economic rent — rendita economica : reddito associato a una risorsa scarsa.
Efficiency — efficienza : obiettivo esplicito di guadagni/risorse, non semplice uguaglianza.
Equilibrium — equilibrio : decisioni/quantità coerenti, non necessariamente ottimo sociale.
Excess demand / shortage — eccesso di domanda/penuria : QD>QS al prezzo corrente.
Excess supply / surplus — eccesso di offerta : QS>QD ; « surplus » non significa
  sempre surplus di benessere.
Exit / entry — uscita/entrata di imprese in un mercato.
Free entry — libera entrata : accesso senza barriere che impediscano l'aggiustamento LR.
Homogeneous product — prodotto omogeneo : chi compra lo tratta come identico.
Input — fattore/input : risorsa usata per produrre.
Inverse demand/supply — domanda/offerta inversa : prezzo scritto in funzione di Q.
Market clearing price — prezzo di equilibrio : eguaglia QD e QS.
Market definition — definizione del mercato : prodotti, geografia, periodo.
Model — rappresentazione semplificata con ipotesi e implicazioni coerenti.
Opportunity cost — costo opportunità : migliore alternativa abbandonata.
Output — produzione ottenuta, distinta dagli input impiegati.
Partial equilibrium — equilibrio parziale : analisi di un mercato isolando il resto.
Price taker — price taker : pensa di non influire su p con la propria scelta individuale.
Scarcity — scarsità : risorse limitate impongono scelte/compromessi.
Shift — spostamento della curva; movement along — movimento lungo una curva.
Substitute goods — sostituti : il prezzo dell'uno aumenta la domanda dell'altro.
Supply curve/function — offerta : quantità desiderata a ogni prezzo.
Zero economic profit — profitto economico nullo : costi opportunità remunerati.

19.2 Consumatore e comportamento
Affordable/feasible bundle — paniere accessibile : rispetta bilancio/vincoli.
Altruism — altruismo : l'utilità aumenta con il benessere/guadagno altrui.
Behavioral economics — economia comportamentale : arricchisce la scelta razionale semplice.
Budget constraint/line — vincolo/retta di bilancio : spese possibili.
Bundle/basket — paniere : combinazione di quantità di beni.
Cardinal utility — utilità cardinale : livelli/intensità interpretabili;
  non corrisponde all'uso ordinale standard delle funzioni del corso.
Cognitive limitations — limiti cognitivi : ottimizzazione/informazione imperfette.
Complete preferences — preferenze complete : ogni coppia può essere confrontata.
Compensation — trasferimento che ripristina la possibilità di un paniere o di un'utilità,
  secondo la definizione adottata.
Convex preferences — preferenze convesse : gusto per i mix, nella forma usuale.
Corner solution — soluzione d'angolo : uno dei beni scelto in quantità 0.
Diminishing marginal utility — utilità marginale decrescente con la quantità.
Engel curve — curva di Engel : quantità in funzione del reddito, prezzi fissi.
Envy / spite — invidia / malevolenza : il guadagno altrui può ridurre la propria utilità.
Framing — effetto framing : la presentazione influisce sulla decisione.
Heuristic — euristica : regola semplice usata per decidere.
Homo economicus — agente razionale stilizzato; le sue preferenze non sono
  necessariamente solo materialistiche.
Income effect — effetto reddito : variazione dovuta al potere d'acquisto reale.
Indifference curve — curva di indifferenza : stessa utilità su tutti i suoi panieri.
Inferior good — bene inferiore : la domanda cala quando il reddito aumenta.
Interior solution — soluzione interna : beni/input strettamente positivi.
Loss aversion — avversione alle perdite : peso delle perdite rispetto ai guadagni.
Lump-sum payment — trasferimento forfettario : importo indipendente dall'acquisto marginale.
Luxury good — bene di lusso : la domanda cresce più che proporzionalmente al reddito.
Marginal utility — utilità marginale : apporto dell'unità aggiuntiva.
More-is-better / non-satiation — non sazietà : più beni desiderati sono preferiti.
Normal good — bene normale : la domanda aumenta con il reddito.
Ordinal utility — utilità ordinale : serve a ordinare, non a misurare la felicità assoluta.
Overconfidence — eccesso di fiducia : sovrastimare precisione/capacità.
Perfect complements — complementi perfetti : consumo in proporzioni fisse.
Perfect substitutes — sostituti perfetti : scambio a tasso costante.
Preference — preferenza : ordinamento delle alternative.
Self-control — autocontrollo : compromesso tra gratificazione immediata/obiettivo futuro.
Social preferences — preferenze sociali : l'utilità dipende anche dagli altri/dalle norme.
Substitution effect — effetto sostituzione : risposta al prezzo relativo.
Transitivity — transitività : coerenza dell'ordinamento tra più panieri.
Ultimatum game — gioco dell'ultimatum : divisione proposta, accettata o rifiutata.
Utility maximization — massimizzazione dell'utilità : miglior paniere accessibile.

19.3 Produzione e costi
Average product — prodotto medio : produzione per unità di input.
Capital-labor ratio — rapporto capitale/lavoro : K/L.
Constant economies of scale — costo medio LR costante nell'intervallo pertinente.
Cost function — funzione di costo minimo dati output e prezzi degli input.
Cost minimization — minimizzazione del costo per una produzione imposta.
Decreasing returns to scale — tutti gli input moltiplicati per t, output per meno di t.
Diminishing marginal product — prodotto marginale decrescente di un solo input.
Diseconomies of scale — diseconomie : costo medio crescente.
Economies of scale — economie : costo medio decrescente.
Factor of production — fattore di produzione : lavoro, capitale, terra, altri input.
Fixed cost — costo fisso indipendente da Q nell'orizzonte.
Increasing returns to scale — tutti gli input moltiplicati per t, output per più di t.
Intermediate input — input intermedio : bene prodotto usato per produrre.
Isocost — isocosto : combinazioni di input allo stesso costo.
Isoquant — isoquanto : combinazioni di input allo stesso output.
Labor — lavoro, misurato in persone/ore secondo il testo.
Learning-by-doing — apprendimento con la pratica, che può ridurre i costi.
Long run — tutti i fattori possono essere aggiustati.
Marginal cost — costo della produzione aggiuntiva.
Marginal product — output aggiuntivo da un input aggiuntivo.
Production function — relazione tecnologia/input/output.
Productivity — produzione ottenuta per le risorse usate.
Raw material — materia prima usata nella produzione.
Returns to scale — reazione di Q a una variazione proporzionale di tutti gli input.
Short run — almeno un fattore è fisso.
Shutdown — arresto della produzione nel breve periodo; diverso dall'uscita definitiva/LR.
Sunk cost — costo irrecuperabile; non deve falsare il confronto futuro.
Variable cost — costo che varia con l'output.

19.4 Potere di mercato e strategia di prezzo
Arbitrage / resale — comprare/rivendere per sfruttare uno scarto di prezzo.
Best response / reaction function — scelta ottimale condizionata al rivale.
Bertrand competition — concorrenza di prezzo.
Bundling — vendita abbinata; pure=solo pacchetto, mixed=pacchetto e separati.
Capacity constraint — limite di produzione/posti/vendite possibili.
Collusion — coordinamento tra concorrenti; diverso dal Nash non cooperativo.
Cournot competition — concorrenza in quantità simultanee.
Duopoly — oligopolio a due imprese.
Excess capacity — capacità in eccesso nel senso di produzione sotto il minimo di ATC.
First-degree price discrimination — tariffazione a ogni WTP marginale individuale.
First-mover advantage — vantaggio di chi muove per primo, dipende dal gioco.
Freemium — versione gratuita e opzioni a pagamento, autoselezione/rete.
Horizontal differentiation — diversità di gusti, nessun ordinamento universale di qualità.
Incumbent — impresa già presente prima dell'entrata.
Integrated market — mercato non segmentato, arbitraggio o prezzo comune.
Lerner index — margine prezzo/costo marginale diviso per il prezzo.
Market power — capacità di fissare un prezzo superiore al costo marginale.
Market share — quota di mercato, q_i/Q ; non è sinonimo di profitto.
Markup — margine prezzo-costo; precisare assoluto, relativo al prezzo o al costo.
Monopolistic competition — molte imprese differenziate con entrata facile.
Monopoly — offerente unico senza sostituti vicini nel mercato pertinente.
Natural monopoly — tecnologia dei costi che favorisce un solo produttore.
Nash equilibrium — nessuna deviazione unilaterale redditizia.
Oligopoly — poche imprese con interazione strategica.
Parallel imports — importazioni parallele che impediscono la segmentazione dei prezzi.
Patent — diritto di esclusione temporaneo, incentivo all'innovazione nel modello.
Perfect competition — price taker, omogeneità, molti agenti, entrata libera.
Price discrimination — prezzi diversi per unità/clienti oltre i soli costi.
Profit maximization — miglior profitto realizzabile, non quantità massima.
Reservation price — prezzo di riserva, WTP massima di un'unità/transazione.
Second-degree discrimination — autoselezione in un menu.
Segmented markets — gruppi tra cui rivendita/trasferimento sono limitati.
Self-selection — il cliente rivela il proprio tipo con l'offerta scelta.
Single-price monopoly — monopolio con lo stesso prezzo per ogni unità.
Stackelberg leadership — ordine sequenziale, reazione osservata del follower.
Strategic complements — la miglior risposta aumenta con la scelta del rivale, es. prezzi.
Strategic substitutes — la miglior risposta cala con la scelta del rivale, es. Q di Cournot.
Third-degree discrimination — gruppi osservabili con tariffe diverse.
Two-part tariff — quota d'accesso più prezzo d'uso.
Vertical differentiation — qualità ordinabile, i consumatori differiscono nella WTP.

19.5 Benessere, ambiente e informazione
Adverse selection — selezione avversa legata a un tipo privato.
Asymmetric information — informazione diversa tra le parti.
Bargaining cost / transaction cost — costo di negoziare/far rispettare un accordo.
Certification — qualità attestata da un terzo o da uno standard.
Club good — escludibile, non rivale in assenza di congestione.
Coase theorem — efficienza tramite negoziazione senza costi con diritti ben definiti.
Common resource — risorsa rivale, non escludibile secondo le regole considerate.
Consumer/producer surplus — guadagni monetari di acquirenti/venditori oltre
  il pagamento/costo variabile.
Deadweight loss — surplus sociale netto non realizzato/perso.
Deductible — franchigia assicurativa sostenuta dall'assicurato.
Emission cap/quota — limite quantitativo alle emissioni.
Emission fee — prezzo/imposta per unità di emissione.
External benefit/cost — beneficio/danno su terzi non preso in considerazione.
Externality — esternalità, positiva o negativa.
Franchise contract — contratto che concede l'uso di un'attività/marchio dietro pagamento,
  potenzialmente con forti incentivi sul risultato.
Free rider — free rider, beneficia senza contribuire.
Incentive compatibility — la scelta desiderata è preferibile alle alternative.
Individual rationality / participation — contratto accettabile rispetto all'opzione esterna.
Internalization — integrare il costo/beneficio esterno nella decisione privata.
Limited liability — responsabilità limitata, perdite/rimborsi con tetto.
Lemons market — mercato in cui la qualità nascosta può scacciare quella buona.
Moral hazard — azzardo morale, scelta/azione privata modificata da contratto/incentivi.
Open access — accesso libero a una risorsa, senza restrizioni efficaci.
Pareto improvement/efficiency — guadagno senza perdenti/nessun guadagno possibile senza perdenti.
Pigouvian tax/subsidy — prelievo/aiuto correttivo di un'esternalità.
Pooling equilibrium — tipi non separati da un comportamento osservabile.
Principal-agent problem — contratto con azione non osservabile dell'agente.
Private benefit — vantaggio per chi decide, a volte a scapito del principale.
Private good — rivale ed escludibile.
Procurement — acquisto di un servizio/bene da parte di un committente, spesso con asta inversa.
Property rights — diritti che determinano chi può usare/vietare/scambiare.
Public good — non rivale e non escludibile, nel modello puro.
Reputation — informazione accumulata su qualità/comportamento.
Risk sharing — ripartizione dell'esposizione agli shock tra le parti.
Screening — raccolta/strutturazione di informazioni da parte della parte meno informata.
Separating equilibrium — tipi rivelati da scelte/segnali diversi.
Sharecropping — divisione del raccolto/ricavo tra chi coltiva e chi possiede.
Signalling — segnale osservabile inviato dalla parte meglio informata.
Social cost/benefit — effetto totale, privato più esterno.
Subsidy — aiuto che riduce il prezzo dell'acquirente o aumenta il ricavo del venditore.
Tax incidence — ripartizione effettiva dell'onere di un'imposta.
Tradable permits — permessi negoziabili sotto un tetto totale.
Tragedy of the commons — uso eccessivo dovuto a un'esternalità di scarsità.
Trust — fiducia, riduce alcuni attriti informativi/contrattuali.

19.6 Giochi, commercio, piattaforme e aste
Backward induction — induzione a ritroso : partire dalle ultime decisioni.
Cheap talk — comunicazione non direttamente vincolante nel gioco.
Commitment — impegno che modifica in modo credibile le scelte future.
Credible threat — minaccia ottimale da eseguire nel nodo in cui viene invocata.
Dominant strategy — ottimale qualunque siano le strategie altrui.
Edgeworth box — scatola di scambio di due beni tra due agenti.
Free trade — libero scambio senza la barriera considerata.
Gains from trade — guadagni dallo scambio, surplus di scambi reciprocamente utili.
Multihoming — partecipazione a più piattaforme.
Network effect — valore del servizio che dipende dai partecipanti dello stesso/altro lato.
Payoff — guadagno/utilità di un esito, da distinguere dal denaro con preferenze sociali.
Platform — intermediario che organizza le interazioni tra gruppi.
Pooling/separating — vedi informazione; da non confondere con il bundling di prodotti.
Production possibility frontier — frontiera delle combinazioni realizzabili.
Pure/mixed strategy — scelta certa/estrazione probabilistica tra azioni.
Reverse auction — asta d'acquisto, l'offerta bassa può vincere.
Sealed-bid auction — offerte presentate senza osservare quelle altrui.
Sequential/simultaneous moves — decisioni in un ordine/prese senza osservare il rivale.
Single-homing — uso di una sola piattaforma.
Specific factors — fattori immobilizzati in un settore nel modello di commercio.
Subgame perfect equilibrium — Nash in ogni sottogioco, esclude minacce non credibili.
Switching costs — costi di cambio di fornitore/piattaforma.
Tariff — dazio sulle importazioni; diverso dalla tariffa a due parti.
Terms of trade — prezzi delle esportazioni rispetto alle importazioni.
Vickrey auction — asta in busta chiusa al secondo prezzo nel modello a valori privati.
Winner's curse — maledizione del vincitore dovuta alla selezione di una stima ottimistica.

19.7 Verbi e parole di consegna da riconoscere subito
Assume — supponi : usare l'ipotesi data, anche se stilizzata.
Calculate / find / determine — calcolare/trovare : equazioni, passaggi, risultato/unità.
Compare — confrontare : stesso benchmark, stesse ipotesi, variabili pertinenti.
Define — definire : dare un senso semplice, non solo una formula.
Derive / show how derived — derivare/dimostrare : partire dall'obiettivo e ottenere la relazione.
Discuss — discutere : meccanismo, ipotesi ed eventuale ambiguità.
Explain why / intuition — spiegare perché : collegare incentivi, margine e risultato.
Illustrate / use a figure — disegnare con assi, curve, quantità e aree etichettati.
Holding constant / given — mantenere dato : non derivare questa variabile come una scelta.
In the long run — lungo periodo : verificare entrata, uscita e possibilità di aggiustare gli input.
Maximize / minimize — ottimizzare l'obiettivo, non solo eguagliare curve.
Motivate / justify — giustificare : argomento economico e legame con il calcolo.
No calculations needed — spiegare il meccanismo; non sostituire l'intuizione con cifre.
Per unit — per unità, importo da moltiplicare per il volume pertinente.
Resale impossible — rivendita impossibile : condizione chiave della segmentazione.
Subject to — sotto il vincolo : scrivere esplicitamente cosa limita la scelta.
Unilaterally — unilateralmente : solo chi decide modifica la propria strategia.
Welfare maximizing — massimizzare il benessere SOCIALE, distinto dal profitto privato.
======================================================================
20. TRAPPOLE, CORREZIONI, GRAFICI E PERCORSO DI RIPASSO
======================================================================

20.1 Correzioni e ambiguità da non riprodurre
1) A3.1c, preferenze altruistiche uguali: Nash puri SS,SN,NS ; NN è errato.
2) A3.2c : se solo Y è armato, X riceve 1, Y riceve 5-3=2. Non attribuire
   a X il payoff netto 2 di Y. L'esito indicato può essere giusto nonostante un payoff errato.
3) A2.2c : p_R aumenta, I nominale resta 1200 ; è il vincolo in
   quantità/potere d'acquisto che si restringe. Dire « il reddito cala » sarebbe errato.
4) A2.2b : (20,4) ha utilità 80 ma costa 1280 ; il bilancio viene prima della
   classifica dei panieri ACCESSIBILI. L'ultimo paniere ripete (15,5).
5) Elasticità A2 : il calcolo in % proporzionale e la soluzione esatta di una
   funzione a elasticità costante divergono per grandi variazioni.
6) E2024 Q4c/d : costo non precisato; dichiarare l'ipotesi prima delle cifre.
7) E2022 Q4d : costi del bundling non precisati; i ricavi 300/260 sono
   profitti solo a costi nulli; spiegare l'ipotesi.
8) E2025 Q4e : uno shock comune da solo non dimostra segnali privati né
   una winner's curse ; precisare informazione e selezione condizionale.
9) E2020 Q4d : non inventare un conflitto di incentivi prima di calcolare
   le due attese. I numeri dati allineano la scelta A/B.
10) E2022 monopolio tassato: l'imposta 4 non è un costo sociale reale di 4 ; DWL totale 49
    rispetto al benchmark efficiente senza imposta, diversa dal triangolo troncato 25.
11) E2025 acciaio: Q in migliaia di tonnellate; DWL 10 000 nel diagramma
    significa 10 milioni di dollari, non 10 000 dollari.
12) E2025 penalità: 60 basta per IC debole, strettamente più di 60 per
    una scelta stretta di alta qualità senza regola di indifferenza.

20.2 Errori generali da individuare in ogni esercizio
- Confondere domanda diretta Q(p) e inversa p(Q), o le loro derivate.
- Leggere il prezzo di monopolio su MR invece che sulla domanda.
- Dimenticare il termine Q*p'(Q) in MR, o sostituire MR con p in monopolio.
- Usare MR=MC senza verificare massimo, non negatività, capacità e chiusura.
- Con MC costante, prezzo dato superiore a MC e capacità illimitata,
  non esiste un q ottimo finito senza un altro limite; p=MC non risolve
  una massimizzazione con margine costante positivo.
- Confondere MU,MP,MR,MC,MB o MRS,MRTS,MRT.
- Confondere pendenza ed elasticità; dimenticare il fattore p/Q e il segno.
- Sommare i prezzi delle domande private invece delle quantità.
- Sommare orizzontalmente le domande di un bene pubblico.
- Lasciare domande/quantità negative in una somma di mercato.
- Ricavare i profitti dell'impresa i con la Q di mercato invece di q_i.
- Far variare il costo fisso in una derivata marginale in cui è costante.
- Chiudere ogni impresa con pi<0 anche se R copre VC e FC è inevitabile.
- Affermare « profitto economico nullo ->nessun reddito ».
- Assimilare prodotto marginale decrescente e rendimenti di scala decrescenti.
- Confondere PS con profitto quando FC non è nullo.
- Contare il gettito come perdita sociale, o dimenticare il costo di bilancio
  di un sussidio; omettere danni/benefici esterni.
- Misurare la DWL rispetto alla Q privata quando preesiste un'esternalità.
- Scegliere imposta di Pigou=MEC(Qiniziale) quando MEC dipende da Q.
- Concludere che ogni sconto è redditizio senza considerare capacità o arbitraggio.
- Applicare p_uso=MC a ogni abbonamento con clienti eterogenei.
- Confondere abbonamento da solo e tariffa a due parti.
- Dimenticare la reazione del follower nella derivata del leader.
- Confondere concorrenza di prezzo con prodotti omogenei e differenziati.
- Sostenere che una barriera all'entrata incida solo sul breve periodo.
- Confondere adverse selection(tipo) e moral hazard(azione).
- Verificare la redditività della banca con pH senza verificare che l'agente scelga H.
- Dimenticare l'opzione esterna/partecipazione anche se IC è soddisfatta.
- Calcolare il vantaggio comparato guardando solo la produttività assoluta.
- Trasformare una conclusione aggregata sul welfare in una conclusione per ciascuno.
- Dare numeri senza spiegare il meccanismo richiesto da « explain ».

20.3 Quaderno dei grafici da saper rifare senza modello
G1 Offerta/domanda: Q orizzontale,p verticale; intercette, equilibrio e frecce dello shock.
G2 Vincolo/indifferenza: nome dei due beni, intercette I/p, pendenza relativa,
   curva raggiungibile più alta, tangenza o angolo/gomito.
G3 Domanda individuale: ottimo a più prezzi, riporto delle coppie (p,q).
G4 Isoquanto/isocosto: L orizzontale,K verticale, Q fissato, costo minimo tangente;
   nuova tangenza dopo l'aumento di w, senza spostare l'isoquanto obiettivo.
G5 MC/ATC/AVC dell'impresa: p orizzontale, q ottimo, rettangolo profitto/perdita,
   soglie di chiusura e uscita. Aggiungere un grafico di mercato per entrata/uscita.
G6 Surplus concorrenziale: CS sotto la domanda/sopra il prezzo, PS sopra
   l'offerta/sotto il prezzo; unità monetarie di ogni area.
G7 Imposta/sussidio: domanda e offerta INIZIALI, nuova Q, due prezzi,
   cuneo, rettangolo dello Stato, triangoli DWL; precisare il segno di bilancio.
G8 Prezzo massimo/minimo: livello regolato, QS e QD distinte,
   volume realmente scambiato e ipotesi di razionamento.
G9 Monopolio: D,MR,MC, eventualmente ATC ; Qm,pm,Qeff, profitto,CS,DWL.
G10 Discriminazione: due mercati separati poi domanda aggregata con gomito;
    distinguere i gruppi che entrano/escono secondo il prezzo comune.
G11 Tariffa a due parti: prezzo d'uso, quantità, triangolo CS catturato da F ;
    confrontare l'uso gratuito se il testo impone solo l'abbonamento.
G12 Cournot : due reazioni negli STESSI assi, intersezione e shock di costo.
G13 Stackelberg : reazione del follower, posizione del leader, confronto con Nash.
G14 Bertrand differenziato: assi p1,p2, reazioni crescenti, spostamento per imposta/costo.
G15 Esternalità: MPB,MPC,MSB/MSC pertinenti, Qpriv,Qeff, imposta/sussidio,DWL.
G16 Inquinamento: indicare inquinamento O abbattimento su x, MAC e MEC, imposta
    orizzontale o quota verticale; non solo un diagramma di output.
G17 Permessi con due imprese: MAC diversi, quota iniziale, acquisti/vendite,
    costo marginale finale comune e tetto totale invariato.
G18 Bene pubblico: MB individuali e somma VERTICALE, gomiti, MC, Qeff.
G19 PPF e commercio: due beni, intercette, costo opportunità, retta
    dei prezzi, produzione e consumo separati, indifferenza pertinente.
G20 Dazio all'importazione: offerta/domanda interne, pw,pw+tau,Qs/Qd/importazioni,
    CS perso,PS guadagnato, gettito, due triangoli.
G21 Edgeworth : due origini opposte, dotazione, indifferenze di entrambi,
    zona di miglioramento e allocazioni efficienti, compresi i bordi.
G22 Gioco sequenziale: nodi e ordine, azioni, payoff NETTI, scelta dell'ultimo
    giocatore poi del primo; scrivere la strategia completa del follower.
Un grafico senza assi o senza benchmark non sostituisce una spiegazione.

20.4 Brevi definizioni in inglese per le Q5
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
Formulazioni didattiche preparate qui; non presentarle come
frasi tratte da una griglia di correzione ufficiale.

20.5 Schema di risposta a una domanda di calcolo
« The firm chooses [variable] to maximize [objective], taking [given]
as given. Its profit is [function]. The first-order condition is [equation],
which gives [quantity/price]. Substituting into [demand/cost] gives [rest].
The result is valid because [domain/maximum/participation]. Intuitively,
[marginal trade-off]. Compared with [benchmark], [change and reason]. »
Per il welfare: indicare il benchmark, scrivere W con Stato/esternalità, calcolare
le componenti, disegnare e spiegare quale transazione è persa/eccessiva.
Per la teoria: definizione semplice ->fonte dell'incentivo ->conseguenza
->condizione/limite legato al testo.

20.6 Percorso di ripasso proposto, basato sul corpus
Fase 1 Fondamenti: L2–L6, A2 ; vincolo di bilancio, derivate, costi, elasticità,
MRS/MRTS, chiusura/entrata. Fare la Q5 senza aiuto per diagnosticare le basi.
Fase 2 Welfare: L7 e A4.2, poi imposte/sussidi E2021/E2022 ; rifare
CS,PS, Stato,DWL e ogni grafico con prezzi acquirente/venditore distinti.
Fase 3 Potere di mercato: L8–L10, A4.1/A4.3/A5 ; monopolio, Lerner,
segmentazione, abbonamento, Cournot, Bertrand, Stackelberg e varianti di costo.
Fase 4 Fallimenti: L11–L12 e A6 ; sociale vs privato, pubblico vs comune,
Coase, inquinamento, lemons, IC/IR, credito e penalità.
Fase 5 Complementi d'esame: sezione 14 e A3 ; commercio, PPF, dazi,
piattaforme, aste, Edgeworth e giochi sequenziali.
Fase 6 Prove a tempo: risolvere un esame finale intero, in inglese e con
grafici, poi correggere gli errori di modello prima di quelli aritmetici.
Ripassare gli esami recenti e anche i più vecchi per variare i modelli.
Se il midterm è conservato, non sacrificare le domande principali per
preparare solo la Q5 ; le basi restano indispensabili per le quattro grandi.

La data dell'esame finale indicata in L1 è il 23 ottobre 2026. Al 9 ottobre
restano 14 giorni: questo percorso può essere distribuito su questo periodo, con
più sessioni di risoluzione attiva e ripassi distanziati. La data
resta un'informazione del materiale, da confrontare con la convocazione personale.

20.7 Generatori di esercizi da chiedere a ChatGPT
- Cambiare intercette/pendenze di offerta e domanda poi aggiungere imposta/sussidio;
  esigere la lettura dei due prezzi, del bilancio pubblico e del welfare.
- Cambiare U, prezzi, reddito; proporre prima un caso interno, poi un angolo,
  poi complementi perfetti; confrontare accessibile/preferito.
- Dare una domanda con più prezzi e chiedere elasticità propria/incrociata/al reddito.
- Dare una funzione di produzione; chiedere MP, MRTS, rendimenti,
  poi il costo minimo per una quantità imposta.
- Dare TC e prezzo; chiedere q, profitto, PS, chiusura SR/uscita LR.
- Passare monopolio->Cournot->Stackelberg->Bertrand ; mantenere le stesse
  primitive e chiedere cosa cambia nella variabile strategica.
- Dare due mercati con prezzi di esclusione diversi; imporre il confronto
  di TUTTI i segmenti e delle frontiere con prezzo comune.
- Confrontare solo abbonamento, prezzo unico e tariffa a due parti.
- Aggiungere un'esternalità variabile e un'imposta mal calibrata; chiedere il benchmark
  sociale, non solo il segno della variazione della quantità.
- Dare un bene pubblico in cui una WTP diventa 0 prima dell'ottimo candidato;
  forzare una somma verticale a tratti.
- Cambiare pH,pL, rimborso, beneficio privato e apporto in un contratto di credito.
- Dare matrici monetarie e utilità sociali; ricalcolare le migliori risposte.
- Dare PPF e prezzo mondiale poi un dazio; verificare la soglia proibitiva e le unità.
- Dare un'asta di vendita poi un appalto; spiegare perché il secondo prezzo
  non ha la stessa direzione nei due casi.
- Chiedere una spiegazione in inglese senza formule, poi una derivazione completa.

20.8 Controllo finale di una risposta d'esame
Il modello corrisponde alle parole « price/quantity », « public/private »,
« fixed fee », « observable », « chooses first » ?
La variabile derivata è quella effettivamente scelta?
Ogni quantità è non negativa e nel segmento giusto?
La FOC descrive un massimo/minimo valido e gli angoli sono stati verificati?
Ho usato i costi e le probabilità propri dell'agente giusto?
Ho spiegato il meccanismo e non solo scritto una formula?
I trasferimenti sono stati distinti dai costi reali e dal danno esterno?
Il benchmark della DWL è esplicitamente SOCIALE e coerente con il testo?
Assi, aree e unità del grafico corrispondono ai calcoli?
Serve un'ipotesi aggiuntiva ed è stata dichiarata?

Fine del dossier. I riferimenti S01–S23 permettono di tornare ai documenti
originali; le notazioni restano locali a ciascun esercizio. La priorità
è saper ricostruire la logica, non solo riconoscere una sigla.
`;export{e as default};