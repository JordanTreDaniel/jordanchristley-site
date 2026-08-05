# HANDOFF: Fix transformation-journey scene stills + encode as skill

> **Launch TWO agents with this ONE document.** Each agent executes ONE plan
> below (Plan A = fix the assets, Plan B = build the skill). The two plans are
> independent — run in parallel. Both should read the `Shared context` section
> first, then follow ONLY their assigned plan.

---

## Shared context (read first — both agents)

**Source session (bonus):** `ses_0346266baffen2fAKiLTRRW6JQ` — the newest
opencode session_diff file (mtime 1785832469, matches this session's tail).
These are opencode's own diff files (empty arrays), not lore IDs; the lore
side may keep its own id. Reference it if you can, don't block on it.

**Project root for this work:** `/Users/jordanc/dev/jordanchristley-site/`
(an existing Next.js site; the journey will be built into it, but neither plan
here touches the site code — the asset plan writes to `docs/`, the skill plan
writes to the my-skills repo).

**Creative brief (single source of creative truth):**
`/Users/jordanc/dev/jordanchristley-site/docs/transformation-journey-brief.md`
(~26 KB, read fully before touching anything).

**Scene prompts (6 scenes, currently drafted with element-NAME tokens):**
`/Users/jordanc/dev/jordanchristley-site/docs/scene-prompts.md` (read fully).

### The transformation concept (locked)
Croods-style claymation stop-motion journey for jordanchristley.com, run as
Emerald Technology Consulting. Two-world arc:
- **World A (Wilderness/State A):** messy earthy jungle, chaos, cavemen doing
  everything the brutally hard way. Palette: mud `#6b4a2f`, moss `#5a6b3c`,
  ember `#e07b39`, charcoal `#2a211c`.
- **World B (Paradise/State B):** clean emerald paradise where things "just
  work". Palette: mint `#d7f5e9`, cream `#f7f3e8`, bright emerald `#5cdb8a`,
  deep emerald `#2d8a4e`, soft gold `#d4a843`, coral `#f2a97f`.
- **Mascot (locked, appears in both worlds, does NOT transform):** brilliant-cut
  diamond-shaped emerald gemstone, deep royal-forest-green facets with
  near-black green spots, bright matrix-like green glow from within. NEVER
  render text inside the mascot's body.
- **The cast (5 reference elements, ALL registered):** `emerald-mascot`,
  `brub-state-a`, `vex-state-a`, `brub-state-b`, `vex-state-b` — see the
  element registry below.
- **Camera rule (locked):** low wide angle, 24mm, eye level to slightly
  elevated, gentle forward drift, **no fisheye / no distorted lenses**.

### Reference-element registry (REAL, registered — verified Aug 4 03:28)
All five elements exist in the Higgsfield workspace as reference elements.
Embed the UUID inside `<<<uuid>>>` tokens in scene prompts.

| Element | UUID | Media source | Description |
|---------|------|--------------|-------------|
| `emerald-mascot` | `3970ee59-a7ae-4d11-8f83-f97a0ea862ac` | job `235b16f2-0d6b-4fd1-81fa-b0d7e312e07a` | brilliant-cut diamond emerald, deep royal-forest-green facets, near-black green spots, bright matrix-green glow from within |
| `brub-state-a` | `6a7dfe3a-20c8-4fd1-8a9d-405ad85be9b7` | job `5c1169cb-dc5c-46db-b14e-076a6ccd7af2` | stocky founder caveman: broad brow, matted dark hair every direction, dirt smudge on cheek, torn patched fur pelt, knotted vine belt + stone tablet, furrowed brow, smudged hands |
| `vex-state-a` | `4a60b3c6-9827-4ab4-9896-9b0a18b2c177` | job `22d3b318-3b82-4bc7-a51d-a8f30eb5fcd6` | lanky skinny assistant: big front teeth, bright ORANGE hair like a startled bush, clutches a coconut in one arm, fur pelt tied crooked, one missing sandal, hunched tired |
| `brub-state-b` | `8e18959d-8f06-4d73-8cb7-10432a90d2b4` | job `5c0a7a9e-5c59-4146-aca5-ff2cfcdc5d41` | kempt: tidy combed-back dark hair, clean skin, pressed beige uniform + white collar + emerald piping, gold-rimmed glasses, coconut name badge BRUB, relaxed confident, holds banana-phone |
| `vex-state-b` | `33a7cd6d-21cd-4983-8a90-8abd514b2e4d` | job `0f5565b9-6daa-48b0-b095-68a288c13708` | kempt, SAME bright orange hair (now neatly combed), clean skin, pressed beige uniform + emerald piping, gold-rimmed glasses, coconut badge VEX, neat sandals, springy cheerful |

**Character-identity rule (locked):** hair color is identity, not decor. Vex
is BRIGHT ORANGE in BOTH states. The transformation is cosmetic, not identity.

### The bug we found (CRITICAL — this is why the last stills failed)
The 6 scene stills generated at ~03:28 **did not use the reference elements at
all**. Root cause: they were generated with model `nano_banana`, which
**silently ignores `<<<uuid>>>` reference-element tokens**. The tokens are only
honored by these models:

| Model | Honors `<<<uuid>>>` in prompt? | Approx cost |
|-------|-------------------------------|-------------|
| `nano_banana_2` (Nano Banana Pro) | ✅ YES | ~1.5 credits/image |
| `seedream_v5_lite` (Seedream 5.0 lite) | ✅ YES | ~1 credit/image |
| `gpt_image_2` | ✅ YES | (plan-gated) |
| `cinematic_studio_2_5` | ✅ YES | (plan-gated) |
| `nano_banana` | ❌ **NO — silently drops the token** | ~1 credit/image |

So every scene still was generated from prompt WORDS alone; the model never saw
the mascot, Brub, or Vex. That is exactly why the characters look different
and the emerald drifted shape. **This is a durable skill gotcha, not a
one-off.** The skill plan must encode it.

### The user liked THESE stills (style reference — the style was right, even
### though characters/story weren't)
These are the ORIGINAL 4 style-test images (Aug 4 07:09) — the user says the
"style of the scenes there was on point." Use them as the visual style
baseline for the claymation look. They are downloaded locally:
- `/tmp/clay-test/test-0.png` — caveman family in messy jungle wilderness
  (job `943a171e-7179-4bcb-95f7-8fb3766ad0d9`)
- `/tmp/clay-test/test-2.png` — glowing emerald mascot + surprised cavemen
  (job `f8ee3bef-9ffa-411a-a56c-b0bae9cbf0a7`)
- `/tmp/clay-test/test-3.png` — transformed caveman in uniform at company
  (job `b31f6e4c-723b-4f0a-a34a-399f814025a5`)

(The user also linked the first-round scene stills they liked, which shared this
style. NOTE: `/tmp/clay-test/test-1.png` — job `2cb49d27...` — was the OLD
gourd-shaped mascot and was SUPERSEDED by the brilliant-cut diamond design;
use it only for *wilderness atmosphere*, never as the mascot.)

### Higgsfield state (as of Aug 4, this session)
- **Balance:** ~199 credits available (starter plan). Enough for the asset plan
  (6-9 credits) and any retries.
- **Workspace:** Private workspace is selected. MCP operations target it.
- **Asset pipeline:** images via `higgsfield generate_image` / the
  `generate_image_batch` MCP tools. Video legs (Phase 3) are NOT in this
  handoff's scope — only stills.
- **Model choice for ALL regeneration in Plan A: `nano_banana_2`** (honors
  reference elements, ~1.5 credits/image). Budget: 6 stills × ~1.5 = ~9
  credits. `seedream_v5_lite` is the cheaper fallback (~1 credit) if
  `nano_banana_2` drifts.

### Environment / tools
- The MCP tools available for generation are: `generate_image_batch`,
  `generate_image`, `jobs_wait`, `show_generation_by_ids`, `show_reference_elements`,
  `media_import_url`, `models_explore`.
- For opening images for review on macOS:
  `open -a "Brave Browser" "<cloudfront-url>"`.
- **NEVER read or write `.env` files directly** (env-protection rule). Never
  mention git operations in user-facing output.
- The skill lives in the `my-skills` repo: `/Users/jordanc/dev/my-skills/skills/`.

---

# PLAN A — Fix the 6 scene stills (asset agent)

**Goal:** Regenerate the 6 scene stills so they actually contain the approved
characters (Brub, Vex, mascot) and the locked style. Leave the creative brief
alone. Update `scene-prompts.md` with the real UUIDs.

## Steps

### 1. Read everything
- `docs/transformation-journey-brief.md` (full)
- `docs/scene-prompts.md` (full)
- `/tmp/clay-test/*.png` style baselines (the 3 the user liked, listed above)

### 2. Substitute real UUIDs into `scene-prompts.md`
Rewrite the element tokens in the file from the NAMES (`<<<brub-state-a>>>`)
to the REAL UUIDs (`<<<6a7dfe3a-20c8-4fd1-8a9d-405ad85be9b7>>>`) using the
registry table above. Keep every prompt body word-for-word otherwise. The
mascot token (`<<<3970ee59...>>>`) must appear in scenes 2-6 (NOT scene 1).

### 3. Generate the 6 stills via MCP
Use `generate_image_batch` (1 request per scene, indexes 0-5) with:
- `model: "nano_banana_2"` (honors the UUID tokens — do NOT use `nano_banana`)
- `aspect_ratio: "16:9"`, `count: 1`
- The prompt bodies from the updated `scene-prompts.md` (with real UUIDs)
- Enforce the camera rule (24mm, no fisheye) and the world-grammar locks.

Scene order (index → scene):
0 `wilderness-chaos`, 1 `emerald-encounter`, 2 `vine-threshold`,
3 `paradise-first-light`, 4 `banana-coconut-company`, 5 `open-door-welcome`.

### 4. Wait, download, show for review
- `jobs_wait` until all 6 are terminal (0 failed = pass).
- Download the 6 PNGs (use `curl -A "Mozilla/5.0"` — a browser UA is REQUIRED
  for the CloudFront CDN; bare curl returns 111-byte AccessDenied XML) into
  `docs/assets/scene-stills/` as `scene-01.png` … `scene-06.png`.
- Open all 6 in Brave for the user to review.
- Present a short table: scene name, job id, result URL, and what to verify
  (character identity + style).

### 5. QA against the brief (self-check before presenting)
- Each scene uses ONLY its world's lock (except scene 3 `vine-threshold`,
  which deliberately splits World A / World B mid-frame).
- Scene 1 has NO mascot; scenes 2-6 have it (Scene 2 = first appearance).
- Scene 4 (`paradise-first-light`) has brub-state-b + vex-state-a (Vex NOT yet
  transformed).
- Scene 5 (`banana-coconut-company`) has brub-state-b + vex-state-b + mascot.
- Scene 6 (`open-door-welcome`) has mascot + brub-b + vex-b, negative space
  lower half for CTA.
- NO text rendered inside the mascot's body; no text/logos anywhere on clay.
- Vex hair is orange in BOTH states (check scene 5/6 if Vex appears kempt).

### 6. Report back
Summarize: the 6 URLs, credits spent, which scenes (if any) drifted from
character identity or style, and whether you recommend a re-roll of any scene
(with the fix).

---

# PLAN B — Build the transformation-journey skill (skill agent)

**Goal:** Turn this session's work into a durable, reusable skill in the
`my-skills` repo. The skill is `transformation-journey`, a sibling of the
existing `vid-scroll-scrub` skill family. A rough draft already exists — see
below. **Fix the draft, don't rewrite it from scratch.**

## Repo layout (my-skills)
```
/Users/jordanc/dev/my-skills/skills/
├── vid-scroll-scrub/          # EXISTING parent skill (cinematic journeys)
│   └── skills/
│       ├── character-consistent-journey/   # Phase 1.5 reference elements
│       ├── conceptualize/
│       ├── creative-intake/
│       ├── scroll-ui/
│       ├── site-builder/
│       ├── video-pipeline/
│       └── transformation-journey/   # ← EXISTING DRAFT (your job to finish)
├── ... (other skills)
```

**Draft already exists at:**
`/Users/jordanc/dev/my-skills/skills/vid-scroll-scrub/skills/transformation-journey/SKILL.md`
(193 lines). It's good on structure: dual world-grammar locks, state-variant
reference elements, portal seam rules, people-as-subjects guidance. **But it
is MISSING the critical model-selection gotcha that just bit us, and it has no
INDEX.md, no reference.md, and no asset/checklist detail.**

## What this session proved (encode ALL of it into the skill)

1. **THE MODEL GOTCHA (critical):** `<<<uuid>>>` reference-element tokens are
   ONLY honored by specific models. `nano_banana` silently drops them. The
   supported list (from `show_reference_elements`):
   - Image: `nano_banana_2` (Nano Banana Pro), `nano_banana_flash`,
     `gpt_image_2`, `seedream_v4_5`, `seedream_v5_lite`, `cinematic_studio_2_5`
   - Video: `cinematic_studio_video_v2`, `cinematic_studio_3_0`, `seedance_2_0`,
     `kling3_0` (NOTE: kling REQUIRES an explicit `start_image` in medias —
     placeholder alone won't trigger reference usage)
   - **Rule: when a scene must contain a registered character/element, the
     model MUST be on this list. `nano_banana` is forbidden for that use.**
   - Failure symptom to recognize: characters don't match their refs at all,
     mascot shape drifts. That = the model dropped the token.

2. **Verified end-to-end pipeline for transformation journeys** (the working
   sequence from this session):
   a. Style-test stills FIRST (cheap model, ~1 credit each) to lock art
      direction; show user; get "I love this" before committing.
   b. Lock the character manifest (names + states).
   c. Generate each character reference image (full-body claymation shot,
      centered, plain dark studio backdrop, soft key light, 16:9).
   d. Register each approved reference as a reference element via
      `show_reference_elements action=create` — one element per character per
      state. **The create call REQUIRES `medias[0].url` even when the media is
      an `image_job`** (first attempt failed with MCP -32602 for missing url —
      always pass the CloudFront URL).
   e. **User reviews EVERY reference image and approves it before
      registration.** This session: Vex State B was rejected (hair drifted
      yellow vs orange) and regenerated with the State A image passed as an
      `image_references` media for identity + "bright orange hair" pinned in
      the prompt. Approved → registered.
   f. Substitute real UUIDs into the scene prompts, generate with a
      token-honoring model (`nano_banana_2`), 16:9, world-grammar locks.
   g. Present all stills in Brave for review (open URLs with `open -a "Brave
      Browser"`).

3. **Hair color = identity, not decor.** Vex is bright orange in BOTH states.
   When a State B (transformed) variant drifts from State A's hair/face, pass
   the State A image back in as `image_references` and pin the exact hair
   wording in the prompt. Regenerate, don't settle.

4. **Mascot design was iterated and LOCKED by the user** — brilliant-cut
   diamond emerald (NOT the earlier gourd/blob with gold heart). Never render
   text inside the mascot's body; CTA text lives on glassy overlay cards.

5. **"The style of the scenes was on point, even if not the characters"** —
   the user liked the ORIGINAL style-test stills. Their judgment call: style
   can be locked independently of character identity, and style is what makes
   or breaks the site. Reference boards/style-tests should be judged on STYLE
   and the character refs on IDENTITY.

6. **Local download gotcha:** Higgsfield CloudFront assets return 111-byte
   AccessDenied XML to bare `curl`; you MUST send `-A "Mozilla/5.0"`.

## Deliverables

Create/update these files under
`/Users/jordanc/dev/my-skills/skills/vid-scroll-scrub/skills/transformation-journey/`:

- **`SKILL.md`** — fix/extend the existing draft. Add a prominent
  "Model selection CRITICAL" section listing the token-honoring models and the
  `nano_banana` trap. Add the full verified pipeline (style-tests → manifest →
  character refs → review → register → stills). Add the "hair = identity"
  rule, the mascot-text rule, the `medias[].url` requirement, and the
  Brave-review / browser-UA download steps. Keep the good dual-world / portal /
  state-variant sections already there.
- **`INDEX.md`** — new. Intent→command routing table (mirror the
  character-consistent-journey / video-pipeline INDEX.md style in the parent
  skill): default intent → "read this, run that", what not to load upfront.
- **`reference.md`** — new. Deep docs: full supported-model table, the
  `<<<uuid>>>` mechanics, show_reference_elements create gotchas, the
  regeneration pattern, a worked example from this session (Emerald Tech /
  cavemen), the style-test → still flow with the exact prompts style.

## Conventions (from AGENTS.md — follow strictly)
- Skills live in `/Users/jordanc/dev/my-skills/skills/` (NOT `.agents/skills/`).
- Skills are loaded lazily: SKILL.md frontmatter = routing hints, INDEX.md =
  intent→command, reference.md = deep docs. Scripts are run, not read.
- Frontmatter contract: SKILL.md `description` must say default intent →
  command, where INDEX lives, what not to load. INDEX.md frontmatter: cwd,
  secrets, outputs.
- Keep it minimal — smallest useful atomic action. Don't over-build.
- The skill composes existing primitives (character-consistent-journey for
  Phase 1.5, video-pipeline for I2V, scroll-ui for JourneyPage, site-builder
  for scaffold). Don't duplicate those; reference them.

## Report back
Summarize: files written/updated, the gotchas encoded, and anything you
couldn't verify (e.g. model-list drift) that the main agent should double-check.

---

## Final note (both agents)
This is a WORKING PIPELINE, not a design exercise. The main agent generated
the failing stills by choosing the wrong model. Your fixes must be correct and
verifiable. When in doubt, read the brief. When finished, report exactly what
you changed and what you'd have me verify.
