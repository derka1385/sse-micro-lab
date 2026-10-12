# Micro Lab — BE501

Personal microeconomics lab for the SSE BE501 final. Teaches causal understanding before formalism:
situation → actors → incentives → consequence → name → abbreviation → formula → graph → exam answer.

```bash
npm install
npm run dev      # http://localhost:5173
npm run check    # engine reproduces the dossier's recalculated numbers; parser finds its structure
npm run build
```

Progress is stored in the browser (localStorage). Use **Sauvegarder / Restaurer** in the sidebar to back it up.

## Source of truth

`source/MICROECONOMIE_SSE_DOSSIER_COMPLET_CHATGPT.txt` is a copy of the dossier. `src/source.ts` parses it
(chapters, subsections, §15/§16 blocks, §17 formulas, §18 abbreviations, §19 lexicon, §20 lists) so every
screen can cite `§11.3`, `§15 A6`, `§16 E2020`… If the dossier changes, copy it over this file.

Every figure is tagged **Documenté**, **Recalculé (dossier)** or **Complément pédagogique**.

## Layout

- `src/econ.ts` — externality model (curves, equilibria, surplus, DWL, policies)
- `src/content/externalities.ts` — the full solar-panel lesson (vertical slice), concept/formula sheets, why-chains, practice, exam questions
- `src/content/catalog.ts` — topics, prerequisite map, observed exam history
- `src/content/training.ts` — misconceptions, concept pairs, model-recognition scenarios, recall cards
- `src/store.ts` — progress, 7-dimension mastery, misconception counts, spaced reconstruction
- `src/components/` — graph, checkpoints, why-chains, teach-back, exam review, drawers
- `src/views/` — one file per mode

## Adding the next topic

Write a `Lesson` (same shape as `SOLAR_LESSON`) and register it in `LESSONS`; set `lesson` on its topic in
`catalog.ts`. Blocks, checkpoints, ladder, teach-back rubric and exam questions are data — no new UI needed,
except a model + graph if the topic is not an externality diagram.
