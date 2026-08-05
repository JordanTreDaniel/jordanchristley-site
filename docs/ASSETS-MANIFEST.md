# ASSETS MANIFEST — Emerald Tech Transformation Journey (v1)

> Complete inventory of every asset produced during the transformation-journey
> scroll-scrub build (Jul 28 → Aug 5, 2026). Each asset is marked
> **IN USE** (part of the shipped v1) or **DO NOT USE** (junk / superseded /
> dev artifacts). Keep this file updated whenever assets change.

## Legend

- **IN USE** — committed and referenced by the live page (`JourneyPage.tsx`)
- **SUPERSEDED** — replaced by a newer version; kept for history, don't wire up
- **DO NOT USE** — junk / dev artifact / security-sensitive; never commit or reference

---

## 1. Video legs (IN USE) — `public/scenes/`

Six scenes, each with a desktop encode, mobile encode, and poster frame.
All video legs are **Kling 3.0, 5 seconds, 16:9 (1920×1080), no audio**
(`--generate_audio false` — no audio assets exist anywhere in this project).

| # | Scene slug | Desktop (desktop encode) | Mobile (720p) | Poster (1920×1080) |
|---|-----------|--------------------------|---------------|--------------------|
| 1 | wilderness-chaos | `public/scenes/scene-01.mp4` | `scene-01-mobile.mp4` | `scene-01-poster.png` |
| 2 | emerald-encounter | `public/scenes/scene-02.mp4` | `scene-02-mobile.mp4` | `scene-02-poster.png` |
| 3 | vine-threshold | `public/scenes/scene-03.mp4` | `scene-03-mobile.mp4` | `scene-03-poster.png` |
| 4 | paradise-first-light | `public/scenes/scene-04.mp4` | `scene-04-mobile.mp4` | `scene-04-poster.png` |
| 5 | banana-coconut-company | `public/scenes/scene-05.mp4` | `scene-05-mobile.mp4` | `scene-05-poster.png` |
| 6 | open-door-welcome | `public/scenes/scene-06.mp4` | `scene-06-mobile.mp4` | `scene-06-poster.png` |

All six desktop encodes are 1920×1080, 5.03s duration. Mobile encodes are
720p. Posters are the first frame of each desktop encode.

**Referenced by:** `src/components/JourneyPage.tsx` lines 25–77
(`videoSrc`, `mobileVideoSrc`, `posterSrc` per scene).

> **Video review note (user feedback, Aug 5):** legs read as too cyclical
> (excess spinning/rotational motion), too short (5s each), and the scene
> story doesn't fully land (manual work doesn't read as "producing bananas",
> the discovery moment is implied not shown, the "what do they actually do"
> question is unanswered). See `docs/v2-feedback-and-plan.md`.

---

## 2. Source scene stills (IN USE — the I2V start frames)

`docs/assets/scene-stills/scene-01.png` … `scene-06.png` — 6 PNGs,
1376×768, 16:9. These are the generated stills that each Kling 3.0 leg was
run from (start_image). Regenerated Aug 5 00:16 with `nano_banana_2`
(token-honoring). Keep these; they are the source of truth for a v2 re-roll.

### Per-still provenance (job IDs + CloudFront URLs)

| # | Scene | Job ID | File |
|---|-------|--------|------|
| 1 | wilderness-chaos | `0aaaab8d-38a4-45df-9e7e-74e3a55f9332` | `docs/assets/scene-stills/scene-01.png` |
| 2 | emerald-encounter | `75d4d942-ee8d-4fa2-af5b-7e12a61f3cfb` | `docs/assets/scene-stills/scene-02.png` |
| 3 | vine-threshold | `f5f4aab8-87fe-40f1-9eae-e54640cc0ac0` | `docs/assets/scene-stills/scene-03.png` |
| 4 | paradise-first-light | `37df3595-8232-43a4-9078-0dae5e6057b7` | `docs/assets/scene-stills/scene-04.png` |
| 5 | banana-coconut-company | `b2b88223-9a12-4732-bd59-4db4d7c251d8` | `docs/assets/scene-stills/scene-05.png` |
| 6 | open-door-welcome | `f44baaa0-9fdc-402e-9ddb-50503e9175df` | `docs/assets/scene-stills/scene-06.png` |

Full URLs are in `docs/scene-prompts.md` (Run Log table). Pattern:
`https://d8j0ntlcm91z4.cloudfront.net/user_3H4cyordtAZ5XWlu05TdH4GVrbN/hf_20260805_051617_<job_id>.png`
(all hosted on Higgsfield CloudFront; downloads require browser UA:
`curl -A "Mozilla/5.0"`).

---

## 3. Character / mascot reference elements

| Asset | Path | Status |
|-------|------|--------|
| Emerald mascot reference | `docs/assets/emerald-mascot.png` (1.1 MB) | **IN USE** — registered element + source of truth |

The actual reference elements live in the Higgsfield workspace
(`show_reference_elements`) under the names:
- `brub-state-a` / `brub-state-b`
- `vex-state-a` / `vex-state-b`
- `emerald-mascot`

Their UUIDs are substituted directly in `docs/scene-prompts.md`. The
registered elements are the live source; the PNGs in `docs/assets/` are the
local backups of the registered images.

---

## 4. Docs & briefs (IN USE)

| Path | Purpose |
|------|---------|
| `docs/transformation-journey-brief.md` | The creative brief (World A/B, characters, arc) |
| `docs/scene-prompts.md` | All 6 scene prompts + run log + model gotcha |
| `docs/HANDOFF-2-agents.md` | Handoff prompt for downstream agents (skill + fix) |
| `docs/journey-brief.md` | Original journey brief (pre-scene, Jul 28) |
| `docs/landing-page-prompt.md` | Landing page prompt |
| `AGENTS.md` | lore-managed long-term knowledge pointer |
| `DEPLOYMENT.md` | DNS/custom-domain lessons learned |
| `docs/v2-feedback-and-plan.md` | **NEW** — user feedback + three-level retro (this wrap-up) |

---

## 5. DO NOT USE — dev artifacts, junk, superseded

These exist in the repo working tree or git history. **Do not commit,
reference, or wire up.**

| Item | Reason |
|------|--------|
| `${HOME}/` (literal directory, contains `.playwright-brave/` profile) | Script bug — an echo of `$HOME` created a junk dir. Git-ignored, never commit. |
| `.playwright-mcp/` | Playwright verification screenshots/logs (portfolio-v2 checks). Dev artifact. Git-ignored, never commit. |
| `src/components/SomethingGlass.tsx.bak` | Backup of a rejected component. Not in use. Never commit. |
| `jcs-3003.png`, `scene6-cta.png` (in `my-skills` repo root) | Misplaced Playwright screenshots. Junk. |
| Original scene-01…03 video files in earlier git history (pre-Aug 5) | Superseded by the Aug 5 regenerated stills/legs. |
| Earlier `nano_banana` (base) generated stills (any that used bare `nano_banana`) | Model silently dropped `<<<uuid>>>` tokens → character drift. Replaced by `nano_banana_2` run. |
| `feature/journey-emerald-tech` branch | Stale — behind main, no unique commits. Do not use; superseded by the wrapup branch. |

---

## 6. Cost / credits summary (v1)

- **Stills:** 6 × `nano_banana_2` (~1.5 cr each) + style-test stills earlier
- **Video legs:** 6 × Kling 3.0, 5s, 16:9, no audio (~45 credits total)
- Balance went ~177 → ~132 during video generation (Aug 5 00:16–00:42 window).
- No audio assets were produced (audio generation intentionally off).

---

## 7. v2 re-roll inputs (where to start)

If we re-roll for v2 (see `docs/v2-feedback-and-plan.md`), the inputs to reuse:

1. `docs/assets/scene-stills/scene-01…06.png` — start frames (approve/regenerate per feedback)
2. Registered reference elements (brub/vex/mascot states) in Higgsfield — identity is locked
3. `docs/scene-prompts.md` — prompts to edit (add activity detail, discovery beats, longer/directive motion)
4. `src/components/JourneyPage.tsx` — already wired; swap `videoSrc`/`mobileVideoSrc`/`posterSrc` paths

**Do NOT reuse:** the 5s Kling legs as-is (too short, too cyclical), and any
`nano_banana`-generated stills that predate the token-honoring fix.
