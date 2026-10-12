# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

One student, personal use: a Stockholm School of Economics student preparing the BE501 Microeconomics final (date stated in the course material, L1: 23 October 2026). He learns through causal mental models: real situation → who are the actors → what each wants → what happens → why → economic name → abbreviation → formula → graph → exam application. His recurring questions ("Who actually pays?", "What does this curve literally represent?", "What happens after Q = 18?") are his main route to understanding. Native French speaker; the exam is answered in English. Studies mostly in daytime, in a library or study room.

## Product Purpose

A personal microeconomics mastery system built from the course dossier. It must let the student understand the causal mechanism, explain it intuitively, identify the actors, read every curve and variable, reconstruct formulas instead of recalling them, recognize the model in an exam question, calculate, draw and interpret the graph, and write a concise SSE-level English answer. Success: he can explain why each statement is true, not only reproduce it.

## Positioning

Causal understanding before formalism. Each concept is staged as actors with incentives before it is named; formulas are earned by reasoning, then revealed; the interactive graph explains itself unit by unit; mastery is tracked on seven dimensions and requires retrieval on later days. It is an interactive economics laboratory, not a school LMS and not a flashcard app.

## Operating Context

Laptop first (Mac), usable down to phone width. Two-week horizon before the final. Work modes: guided lesson blocks with a live graph, graph lab, practice problems, spaced reconstruction reviews, rapid recall, model recognition, confusion pairs, exam mode in English, mastery map, final-preparation view, source browser. Exam answers are written by hand with drawn graphs.

## Capabilities and Constraints

- Single student, progress stored locally (browser storage); no accounts. The optional Claude helper uses a localhost-only Vite backend and a private server-side key.
- Teaching language French; economic terminology always visible in English; exam practice in English.
- Every figure is tagged as documented in the dossier, recalculated in the dossier, or pedagogical complement. Never invent course material or official solutions.
- Exam recurrence is shown as observed history over six finals, never as a probability.
- Each economic actor (buyer, producer, third parties, society/planner, state) keeps one consistent colour across the actor map, graph curves and formula symbols; deadweight loss has its own colour. This colour coding is a teaching device and must survive any restyle; the hues themselves are open.
- All 13 catalogue topics have a guided lesson. Externalities have separate positive (the original solar lesson) and negative paths. Each path includes causal explanations, error-specific checkpoints, an explanation in the student's words, an English exam attempt and a five-level retrieval ladder. Topic-specific curves, matrices, bars and sequences supplement the original externality engine.

## Brand Commitments

From the student's brief (binding): an interactive economics laboratory, not a school LMS and not a flashcard app; clean, serious, modern, low cognitive load, plenty of whitespace, graphs central, equations clear, minimal decorative UI. Avoid childish gamification, giant paragraphs, excessive dashboards, meaningless progress bars and clutter; mastery indicators stay subtle. From the redesign round: no neon "tech" or terminal ambiance; the previous generic look felt boring and tiring.

"Micro Lab" is a working name chosen during the build, not a commitment from the student.

## Evidence on Hand

- `source/MICROECONOMIE_SSE_DOSSIER_COMPLET_CHATGPT.txt`: the dossier (lectures L1–L12, assignments A2–A6, maps of finals 2020–2025, recalculated results, abbreviation directory, bilingual lexicon, pitfalls).
- No official solutions exist; exam statements in the app are reconstructions labelled as such.

## Product Principles

1. Mechanism before name, name before formula.
2. One mental block at a time: one to four sentences per screen, expandable on demand.
3. Every abbreviation is inspectable and every number is traceable to the dossier.
4. Mastery is earned by retrieval on later days, never by a single click.
5. The graph is where understanding is proved.

## Accessibility & Inclusion

No specific requirement stated; keep readable contrast, keyboard access and reduced-motion support.
