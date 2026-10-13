# Translation conventions

Source: French. Targets: en, de, it, uk, tr, sv. Files: `i18n/<lang>/NNN.tsv` mirror `i18n/chunks/NNN.tsv` (`id<TAB>text`).
Run `node scripts/i18n.mjs build` to validate and generate `src/i18n/<lang>.json`.

- Keep verbatim: `[[ABBR]]`, `{{formula}}`, `§11.3`-style references, `{placeholders}`, `**` pairs, every number, symbols (MPB, MSC, DWL, Q*, p_b…).
- Abbreviations stay English in every language (the course and the exam are in English).
- Address the student informally (en "you", de "du", it "tu", uk "ти", tr "sen", sv "du"), short sentences, same causal order.
- Decimals: English uses a point (337.5); de, it, uk, tr, sv keep the comma (337,5).
- Exam material in English is never translated.

| French | en | de | it | uk | tr | sv |
| --- | --- | --- | --- | --- | --- | --- |
| perte sèche | deadweight loss | Wohlfahrtsverlust | perdita secca | чисті втрати добробуту | refah kaybı | dödviktsförlust |
| surplus du consommateur / producteur | consumer / producer surplus | Konsumenten- / Produzentenrente | surplus del consumatore / produttore | надлишок споживача / виробника | tüketici / üretici artığı | konsument- / producentöverskott |
| bien-être | welfare | Wohlfahrt | benessere | добробут | refah | välfärd |
| externalité | externality | Externalität | esternalità | екстерналія | dışsallık | externalitet |
| coût / bénéfice / recette marginal(e) | marginal cost / benefit / revenue | Grenzkosten / Grenznutzen / Grenzerlös | costo / beneficio / ricavo marginale | граничні витрати / вигода / дохід | marjinal maliyet / fayda / gelir | marginalkostnad / -nytta / -intäkt |
| bien public | public good | öffentliches Gut | bene pubblico | суспільне благо | kamu malı | kollektiv vara |
| passager clandestin | free rider | Trittbrettfahrer | free rider | безбілетник | bedavacı | fripassagerare |
| aléa moral | moral hazard | Moral Hazard | azzardo morale | моральний ризик | ahlaki tehlike | moralisk risk |
| antisélection | adverse selection | adverse Selektion | selezione avversa | несприятливий відбір | ters seçim | negativt urval |
| discrimination par les prix | price discrimination | Preisdiskriminierung | discriminazione di prezzo | цінова дискримінація | fiyat farklılaştırması | prisdiskriminering |
| élasticité | elasticity | Elastizität | elasticità | еластичність | esneklik | elasticitet |
| offre / demande | supply / demand | Angebot / Nachfrage | offerta / domanda | пропозиція / попит | arz / talep | utbud / efterfrågan |
| avantage comparatif | comparative advantage | komparativer Vorteil | vantaggio comparato | порівняльна перевага | karşılaştırmalı üstünlük | komparativ fördel |
| droit de douane | tariff | Zoll | dazio | мито | gümrük tarifesi | tull |
| rendements d’échelle | returns to scale | Skalenerträge | rendimenti di scala | віддача від масштабу | ölçeğe göre getiri | skalavkastning |
| courbe d’indifférence | indifference curve | Indifferenzkurve | curva di indifferenza | крива байдужості | kayıtsızlık eğrisi | indifferenskurva |
