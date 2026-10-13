# Micro Lab — BE501

Personal microeconomics lab for the SSE BE501 final. Teaches causal understanding before formalism:
situation → actors → incentives → consequence → name → abbreviation → formula → graph → exam answer.

```bash
npm install
npm run dev      # http://localhost:5173
npm run check    # engine reproduces the dossier's recalculated numbers; parser finds its structure
npm run check:lessons # guided-lesson coverage, source links, validation paths and diagrams
npm run build
```

Progress is stored in the browser (localStorage). Use **Sauvegarder / Restaurer** in the sidebar to back it up.

## Source of truth

`source/MICROECONOMIE_SSE_DOSSIER_COMPLET_CHATGPT.txt` is a copy of the dossier. `src/source.ts` parses it
(chapters, subsections, §15/§16 blocks, §17 formulas, §18 abbreviations, §19 lexicon, §20 lists) so every
screen can cite `§11.3`, `§15 A6`, `§16 E2020`… If the dossier changes, copy it over this file.

Every figure is tagged **Documenté**, **Recalculé (dossier)** or **Complément pédagogique**.

## Ask Claude directly

Run `npm run dev` and open the localhost URL it prints. **Quick question** is available on every page, without navigating away. Each submission captures the current block, visible text, selected example, graph controls and relevant dossier definitions/excerpts. The context is captured again when the page or block changes; earlier questions retain their own context. Replies to quick questions are brief and direct. **Ask Claude directly → Chatbot** remains available for longer conversations with a selectable course topic.

**Storing the key (recommended): macOS Keychain.** Run `npm run key:set` and paste the key at the hidden prompt (twice). It is stored encrypted under the Keychain service `micro-lab-anthropic`, never in a project file, shell history or git. `npm run key:check` confirms it is present without printing it; `npm run key:delete` removes it; run `key:set` again to replace it. The first read may show a macOS prompt asking to allow `security` access: choose *Always Allow*. Lookup order: a server environment variable `ANTHROPIC_API_KEY`, then the Keychain, then the RootSight file below.

As a fallback, the Vite server reads `ANTHROPIC_API_KEY` from the existing sibling project's `../rootsight/server/.env`. It reads only that variable and does not copy or modify the file. To use a different path, launch with `ROOTSIGHT_ENV_FILE=/absolute/path/to/private/.env npm run dev`; a server environment variable `ANTHROPIC_API_KEY` takes precedence. RootSight's model, port and mock settings are ignored. The model is fixed to **`claude-sonnet-5-5` with `output_config.effort: "medium"`**, adaptive thinking and a 16 000-token output limit (thinking counts against it). Quick questions use `effort: "low"`. Replies follow the interface language. Safety declines fall back server-side (`fallbacks: "default"`, beta `server-side-fallback-2026-07-01`).

The key is never returned to the browser or included in the build, GitHub, browser storage, conversation or progress backups. The browser sends questions to the same-origin `/api/claude/messages`; only the server authenticates with Anthropic. **Clé API** shows configuration status, not the secret. Reading this status does not call Anthropic or validate account credits/model access. Generation happens only after **Envoyer**, uses the RootSight account's API credits and is not automatically retried. Stop/close cancels the pending request, though already generated tokens can still be billed. Closing the quick panel clears its conversation; leaving the full chatbot or reloading clears that conversation.

This implementation is intentionally local: the API accepts only loopback clients, a localhost Host/Origin and the app's request header. `npm run preview` also provides the backend for a compiled local preview. A GitHub Pages deployment is static and cannot read this private file or run the backend. Phone/public access needs a separately deployed authenticated backend; do not upload the key, add it to a `VITE_` variable, expose an unauthenticated proxy or serve the RootSight directory. Production CSP permits same-origin API requests only.

No real API call or functional/UI test has been performed for the quick-question change, at the user's request. Start the dev server and try a definition such as “MEB, ça veut dire quoi ?” inside the externality lesson, then change block or graph settings and ask a follow-up.

## Guided curriculum

The 13 catalogue themes now have guided paths, with separate positive and negative externality lessons (14 paths total). The original solar-panel lesson remains the teaching reference. Each path starts from actors and incentives, gives layered “Pourquoi ?”, a concrete example and “Si c’était moi ?”, then uses checkpoints with explanatory feedback. It finishes with a causal chain, teach-back, an English exam attempt and five levels of spaced reconstruction with variants.

Teach-back must be validated before advancing. The English exam must be answered, reviewed and saved before the finish block schedules retrieval. Existing progress and completed solar lessons are preserved. Free-text detection uses approximate offline rules and student self-correction, not an official grade or an AI assessment.

The curriculum is based on the existing SSE dossier: L1–L12, A2–A6 and maps of the six finals 2020–2025. New stories, altered numbers and constructed exam questions are labelled pedagogical material; no official marking scheme is claimed. Exam complements are identified as complements where the lecture corpus is incomplete. See [CURRICULUM.md](CURRICULUM.md) for the coverage map.

Curves, budget constraints, reaction functions, payoff matrices, bars and causal sequences have topic-specific explanations and interactive readouts. The externality engine is reserved for externality graphs. Every theme is linked from the catalogue, prerequisite map, final preparation and exam mode. Quick question receives the selected lesson’s course context.

## Layout

- `src/econ.ts` — externality model (curves, equilibria, surplus, DWL, policies)
- `src/content/externalities.ts` — the original solar lesson, externality models and training material
- `src/content/lessons.ts` — central registry for all guided paths and exam questions
- `src/content/*-lessons.ts`, `negative-lesson.ts` — authored topic-specific teaching content
- `src/content/lesson-kit.ts`, `lesson-diagrams.ts` — lesson assembly and typed diagram descriptions
- `src/content/catalog.ts` — topics, prerequisite map, observed exam history
- `src/content/training.ts` — misconceptions, concept pairs, model-recognition scenarios, recall cards
- `src/store.ts` — progress, 7-dimension mastery, misconception counts, spaced reconstruction
- `src/components/` — graph, checkpoints, why-chains, teach-back, exam review, drawers
- `src/views/` — one file per mode

## Extending a topic

Author `TeachingBlock`s and assemble them with `guidedLesson` in `src/content/lesson-kit.ts`. Add specific actors, source references, distractor feedback, diagrams, a causal chain, teach-back rubric, English exam and five retrieval levels. Register the lesson in `src/content/lessons.ts` and point its catalogue theme to its primary path. Use `LessonDiagramSpec` for a non-externality figure, then run both checks and the build.
