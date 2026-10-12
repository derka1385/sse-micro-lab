---
version: 1
slug: "src-views-lesson-tsx"
primary_target: "src/views/Lesson.tsx"
related_targets: ["src/styles.css","src/components/graph.tsx","src/App.tsx"]
---

# Lesson route — surface brief

Scope: the guided lesson route (`#/lesson/:id`), first surface of a whole-app replacement world; every other view inherits it. Visitor mode: Operate (the student completes one reasoning block at a time). Audience and job: one SSE student, daytime study in a library, preparing the BE501 final; understand a mechanism through actors before formulas, then prove it on the graph. Constraints: all features and copy unchanged; actor colour coding preserved as data ink; light theme only (daytime scene); no neon or terminal ambiance.

## Direction contract

THESIS: The economics lesson as a type specimen: weight is the measure. Every quantity that matters (a unit's private incentive, an earned result, an actor in focus, a topic's mastery) sits on a variable weight axis from hairline to black, always beside its mono readout. Refuses the LMS default of rounded cards, progress bars and friendly illustration.

OWN-WORLD: Paper #FAFAF8, ink #0D0D0D, surface #F0F0EE, dividers #D8D8D6. One live accent, marker yellow, translated from the specimen's foundry blue because blue already carries the buyer. Actor inks (buyer blue, producer orange, third parties violet, society green, state slate, DWL red) appear only as data ink. Sofia Sans variable (wght 1–1000) sets text and display; Fragment Mono sets every label, readout and figure. No cards, no shadows on content: hairline rules, strict measure.

STORY: The student reads one block, reasons, earns the result and watches it thicken into a monumental figure; the graph plate and the unit strip prove it unit by unit.

FIRST VIEWPORT: At 1440 wide: left column (66ch max) holds the block title in light Sofia Sans near 40px (the numbered stepper above carries the position), the 19px body, the abbreviation decode set as a large glyph whose weight is the student’s familiarity with it, and the four mono action controls. The yellow primary action sits at the foot of the block, after its checks, because the lesson flow puts the checks first; on long blocks it is below the fold. Right column is the specimen plate, in this order: actor initials (focused actors heavy, others hairline), the graph framed by hairlines with mono axis figures, the unit strip with its two-line legend (numbered cells, weight = private incentive, missing units underlined and excess units struck in DWL red), the mono readout, then the axis controls (cursor, policy) and their buttons. The strip lands in the first viewport. Signature interaction: dragging the subsidy or cursor remaps every unit glyph’s weight continuously through one CSS custom property and updates the readout; the earned result rests as a hairline outline until the checks pass, then fills and thickens.

FORM: Variable-font specimen, dealt challenger `variable-font-specimen`, adopted by the student over the assigned transit-map direction (not on my grounded list). Seed key 4d449f42.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
