# v2 Feedback & Plan — Emerald Tech Transformation Journey

> Retro from user review of the v1 scroll-scrub experience (Aug 5, 2026).
> Covers what was wrong, what it means at three levels, and what to do next.
> Companion file: `docs/ASSETS-MANIFEST.md` (what exists, what to reuse).

---

## Part 1 — The feedback (verbatim themes)

1. **Too much spinning / cyclical motion.** Rotational and repeating motion
   reads as glitchy, not magical, on scroll-scrub. Scroll-scrub is scrubbed by
   hand — cyclic motion looks like a broken loop, not a story beat.
2. **Each video leg should have been longer.** 5s legs scrub by too fast to
   register a beat; there's no room to *feel* the scene before it changes.
3. **Scenes don't really tell the story.** The "working manual" opening
   doesn't read as *producing* anything (one caveman chips a clay tablet, the
   other shakes a coconut — not banana/coconut production). The discovery of
   the emerald is implied, not shown (how did they find it? digging?). The
   "what do they actually do" question is unanswered.
4. **The mascot should lead a journey through seeing the actual activities
   happening automatically.** The process should be:
   - Think through the **actual activities** they do.
   - Visualize them **comically** (manual, laborious, ridiculous).
   - Visualize the **automation magically** (the same activity, done by
     itself, glowing emerald).

Scene 1 (manual work) is called out as **the best still scene in the bunch** —
the problem is the story around it, not the art direction.

---

## Part 2 — Level 1: The specific site (emerald-tech / jordanchristley.com)

### What needs to change for v2

| # | Problem | v2 fix |
|---|---------|--------|
| A | Cyclical motion in legs | Re-prompt legs with **directional, single-push motion** (dolly/pan forward, object entering and settling). Ban verbs: *spin, rotate, twirl, circle, bobbing-loop*. Encode a "motion directive" list in scene prompts. |
| B | Legs too short (5s) | Regenerate legs **longer** — target 8–10s+ per leg (Kling 3.0 / Seedance allow longer), OR split each scene into 2 shorter beats so each stays readable. Longer legs also need the scroll distance extended in `JourneyPage`. |
| C | Story gap: what do they actually do? | Lock the **actual activities** of the Banana & Coconut Company. Decide: planting, harvesting, cracking, shelling, pressing, fermenting, packing, shipping, tallying. Each scene = ONE activity, in its manual (World A) and automatic (World B) form. |
| D | Discovery not shown | Add a scene (or beat) for **how they find the emerald** — e.g. Vex digs up the glowing stone while planting, or it emerges from a cracked coconut. This is the "call to adventure" beat. |
| E | Manual doesn't read as production | Scene 1 must show **one concrete activity** (not tablet-chipping + coconut-shaking). E.g. Brub hand-cracks a coconut with a rock; Vex plants a banana shoot by hand. Comedic, but legible as *work*. |
| F | Mascot = tour guide through "now it happens automatically" | Reorder/rewrite the arc so the mascot *shows* each activity being automated: manual activity (comedy) → mascot appears/gestures → the SAME activity runs itself (magic). A before/after per activity, not just a world before/after. |

### Concrete scene slate for v2 (draft)

1. **wilderness-planting** — World A: Brub digs a hole with his hands/bone,
   Vex drops in a shoot, both exhausted. (Establishes *what they do*.)
2. **emerald-discovery** — World A: Vex's planting-stick strikes something
   glowing; they dig it up — the emerald mascot rises, amused. (Call to
   adventure; replaces "encounter at the fire".)
3. **vine-threshold** — portal crossing (keep, it works) — World A → B.
4. **banana-harvest-auto** — World B: the planted banana grows/harvests
   itself as Brub watches, gobsmacked. (Same activity as scene 1, now magic.)
5. **coconut-company-auto** — World B: coconut cracking/dispensing runs on its
   own; Vex touches one brass button, the machine does the rest.
6. **open-door-welcome** — keep the payoff; fruit-rain lands in neat baskets.

> This gives a **per-activity before/after** (planting manual → automatic,
> cracking manual → automatic) driven by the mascot, answering "what do they
> actually do" at the top.

---

## Part 3 — Level 2: Sites with a clear customer journey (the missing piece)

### Was there a "customer journey" gap?

Yes. The v1 scenes were built as a **world transformation** (wilderness →
paradise), not a **customer journey** (a person with a problem → a person with
the problem solved by this specific service). The feedback ("what do they
actually do? how did they discover it?") is exactly the gap between a world
before/after and a journey.

A transformation scroll-scrub *is* a customer journey map told as film. The
stages map:

| Customer-journey stage | Scroll-scrub beat | v1 status |
|------------------------|-------------------|-----------|
| **Awareness** — "I have a painful, manual problem" | Scene 1: manual work, comedy | ⚠️ present but illegible (not production) |
| **Discovery / trigger** — "there's another way" | Scene 2: meet the guide | ❌ missing (no "how" — implied encounter) |
| **Consideration / crossing** — "I try the new way" | Scene 3: portal | ✅ present |
| **Decision / first win** — "it works for me" | Scene 4: first light, first auto task | ✅ present, could sharpen to ONE activity |
| **Adoption / comfort** — "it works every day" | Scene 5: the company runs itself | ⚠️ present but unfocused (mixed activities) |
| **Advocacy / invitation** — "you can have this too" | Scene 6: open door, CTA | ✅ present |

### Is there a skill on the internet for this?

**For general customer-journey mapping: yes.** Several Claude/agent skills
exist:

- **Customer Journey Mapper** (Ryze AI / get-ryze.ai, also on GitHub:
  `github.com/irinabuht12-oss/marketing-skills`) — maps touchpoints
  awareness→purchase→retention, finds drop-off points.
- **Customer Journey Mapping** (`github.com/thatrebeccarae/claude-marketing`
  `skills/customer-journey-mapping`) — full journey map awareness→advocacy,
  visualizes touchpoints, drop-off, channel influence.
- **Customer Journey Mapper** (`github.com/OneWave-AI/claude-skills`) — expert
  journey-map document generator across all stages.
- **Storyboard Narrator** (mcpmarket.com) — 6-frame narrative arc for product
  concepts (persona → problem escalation → solution → "aha"). Closest to what
  we need for scroll-scrub beats.
- **customer-persona** (inference-sh, LobeHub marketplace) — research-backed
  persona with journey mapping, JTBD.
- **Makr customer-journey-map** — "map the full user lifecycle".

**For scroll-scrub motion specifically:**
- `github.com/MHuseinY/scroll-video-scrub-skill` — GSAP ScrollTrigger +
  all-intra (`-g 1`) ffmpeg encode, readyState/play() gotchas.
- `mdskills.ai/skills/scroll-experience` — scroll experience for Claude Code.
- Hon Tran's article — all-intra keyframes fix, WebM/MP4, mobile.

**Gap that NO public skill covers:** translating a customer-journey map into
*scroll-scrub scene prompts* with motion directives (directional not cyclical,
per-activity before/after, discovery beats). That's the skill we're building.

### Recommendation

Fold a lightweight **"customer-journey → scene slate"** step into the
transformation-journey sub-skill (creative-intake Round 7/8 already cover
Transformation Arc + Two-World Contrast — add an "activities & discovery"
round). Borrow the stage vocabulary (awareness/discovery/consideration/first-
win/adoption/advocacy) as the canonical beat names so any scroll-scrub brief
starts from journey thinking, not just world thinking.

---

## Part 4 — Level 3: The general video-scrub skill (vid-scroll-scrub)

### What the v1 feedback teaches the skill

1. **Motion directives belong in the brief.** The skill's scene prompts must
   enforce **directional, non-cyclical motion** by default:
   - ✅ allowed: dolly forward/back, pan, push-through, object enters + settles
   - ❌ banned: spin, rotate, twirl, constant bobbing, cyclical repeats
   - Rationale: scroll-scrub is scrubbed, not played — cyclic motion reads as
     a broken loop (glitchy), directional motion reads as progress (magical).
2. **Leg length is a first-class decision.** Default to 8–10s (or 2 beats per
   scene) rather than 5s. Document model/duration trade-offs (Kling 3.0 vs
   Seedance; cost per second; scroll distance mapping in JourneyPage).
3. **Story-first scene slate.** Before any still generation, the brief must
   answer:
   - What does the cast **actually do** (the activity/activities)?
   - How do they **discover** the change (digging, stumble, reveal)?
   - Which stage of the journey is each scene (awareness → advocacy)?
   - Per-activity before/after: manual (comic) → automatic (magical)?
   This is the "customer journey" round — add to creative-intake.
4. **Model selection gotchas already captured** (token-honoring table,
   `nano_banana` drop) — keep; extend with "long-duration models for legs".
5. **Review gate = motion check.** In addition to identity QA, review legs for
   motion type (pause-frame scrub the clip; reject cyclic/looping motion).

### Concrete skill edits (proposed, not yet done — this wrap-up only notes them)

- `skills/vid-scroll-scrub/skills/creative-intake/SKILL.md`: add **Round 9 —
  Activities & Discovery** (what they do, how they find it) and a
  **Motion Directive** question (directional vs ambient).
- `skills/vid-scroll-scrub/skills/transformation-journey/SKILL.md`: add
  "motion directives" to the portal/leg seam rules; add per-activity
  before/after as the recommended transformation structure.
- `skills/vid-scroll-scrub/reference.md`: add motion glossary (directional vs
  cyclical), duration table, scroll-distance mapping notes.
- `skills/vid-scroll-scrub/INDEX.md`: note the customer-journey stage
  vocabulary as the scene-slate naming convention.

> These are recorded as a skill backlog. No skill files are changed in this
> wrap-up commit.

---

## Part 5 — Decision: what we actually do now

**This wrap-up (done):** new branch + commit of the v1 work, asset manifest,
and this retro. **No skill files or scene assets are changed in this commit.**

**Next (separate effort, after this branch):**
1. Rework the scene slate (Part 2 above) with the user — lock the actual
   activities, add discovery.
2. Re-approve/regenerate stills (reuse elements, token-honoring model).
3. Regenerate legs **longer + directional motion**, update JourneyPage scroll
   distances.
4. Fold the journey-stage + motion-directive rounds into the skill.

**Blockers / open questions for the user:**
- What are the **actual activities** of the Banana & Coconut Company
  (the canonical list to animate)?
- Preferred leg length & model budget for v2 (longer = more credits)?
- Keep the 6-scene structure, or expand to 8 (add discovery + per-activity
  auto beats)?
