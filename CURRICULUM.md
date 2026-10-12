# Micro Lab — guided curriculum

The teaching pattern comes from the original solar-panel path: situation → actors and incentives → causal explanation → terminology → reconstruction/calculation → transfer → teach-back → English exam → spaced retrieval. The 12 previously unguided catalogue themes now have authored paths; negative externalities have a separate path alongside solar panels.

## Source and limits

Source of truth: `source/MICROECONOMIE_SSE_DOSSIER_COMPLET_CHATGPT.txt`, the existing audit of L1–L12, assignments A2–A6 and finals 2020–2025. The expansion uses that audit; it does not claim a fresh page-by-page audit of all original PDFs. The dossier contains recalculations and no official marking scheme. Personal assignment PDFs have not been copied into the application.

A cited source supplies the mechanism or data, not an official endorsement of a constructed story. New exercise numbers, examples and exams are explicitly pedagogical. The original externality exam reconstructions retain their provenance notes. Six past finals show observed recurrence, not the probability of a future question. The complements section identifies subjects for which the lecture material in the audit is incomplete. There is no guarantee about the student's exam grade.

## Coverage map

| Theme | Guided mechanism and applications | Dossier basis |
| --- | --- | --- |
| Supply and demand | Separate buyer/seller plans, equilibrium, shortages, shifts, aggregation | §2.4, §3, L2 |
| Consumer choice | Preferences, budget, marginal utility per euro, tangency, corners/kinks, price changes and compensation | §4, A2, final maps |
| Elasticity | Percent changes, point/arc elasticity, signs, revenue and incidence | §5, A2 |
| Production and costs | Inputs, marginal product, cost minimisation, cost curves, shutdown, entry/exit | §6, L5–L6 |
| Welfare and intervention | CS/PS, taxes, incidence, subsidy, ceilings/floors, transfers and DWL | §7, L7 |
| Monopoly | Demand versus MR, optimal quantity/price, profit, inefficiency, regulation and monopolistic competition | §8, L8 |
| Price discrimination | Segments, degrees, IC/IR, self-selection, bundling and two-part tariffs | §9, L9/A4 |
| Oligopoly | Strategic dependence, Cournot, Bertrand, Stackelberg, collusion and assumptions | §10, L10/A5 |
| Positive externality | Original solar-panel lesson, MEB/MSB, underproduction and subsidy | §11, A6.3 |
| Negative externality | Gasoline, MEC/MSC, excessive output, Pigou, emissions/abatement, permits, Coase, textile transfer | §11.1–11.6, L11, E2023/E2024 |
| Public goods and commons | Exclusion/rivalry, vertical sums, free riding, common-resource entry and marginal versus average returns | §11.7–11.9, A6 |
| Asymmetric information | Expected value, hidden quality/action, adverse selection, signalling, insurance and IC/IR | §12, L12 |
| Game theory | Best responses, Nash, dominance, sequential decisions, credible threats, full strategies and mixed strategies | §13, A3 |
| Exam complements | Trade and tariffs, comparative advantage, platforms, auctions and Edgeworth | §14, final maps |

## Real finals 2020–2025

Every question of the six finals is in exam mode, grouped by year (`src/content/past-exams.ts`, plus E2020 Q3, E2023 Q4c–d and E2024 Q3 in `externalities.ts`). Data and tasks come from the papers in « past exams/20XX.pdf »; the wording is reconstructed, and the reference results are the dossier's recalculations (§16), not an official marking scheme. Each question starts with a "what is going on / who decides what" part before calculations; the correction gives the causal logic first, then calculation, graph and an English model answer. A lesson's finish block links to the real questions tagged with its topic's nodes. The monopoly, oligopoly and negative-externality lessons also cover the exam combinations monopoly + tax (on assignment A4.1), Cournot + tax, and tax versus quota under uncertainty.

## Completion and retrieval

Each normal teaching block contains a checkpoint or a formula-reconstruction question. Correct alternatives and wrong alternatives both explain their logic. Numeric questions can reveal an explanation after repeated failed attempts; assisted progression is not evidence of unassisted mastery.

The final teach-back uses transparent approximate word-pattern detection and student self-correction. An English exam requires every part to be attempted before review, then saved before lesson completion. This establishes completion of a learning attempt, not an exam pass. The finish block schedules a first retrieval immediately; later successful retrieval levels are spaced over days. The seven existing mastery dimensions remain based on recorded practice across days rather than clicks.

`npm run check` validates the source parser and externality calculations. `npm run check:lessons` validates all catalogue targets, lesson/check identifiers, source references, diagram data, checkpoint alternatives and reconstruction tokens, five-level ladders, exams, and selected lesson answers against the independent externality engine. `npm run build` type-checks and builds the app. These checks do not replace a student's review of the teaching content.
