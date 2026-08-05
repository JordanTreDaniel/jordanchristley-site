# Scene still prompts — Transformation Journey (claymation)
> Production prompts for MCP generate_image_batch — **model MUST be `nano_banana_2`**, 16:9. Real element UUIDs are substituted (registry verified Aug 4 03:28).
>
> **GOTCHA (model selection):** `<<<uuid>>>` reference-element tokens are ONLY honored by `nano_banana_2`, `nano_banana_flash`, `gpt_image_2`, `seedream_v4_5`, `seedream_v5_lite`, `cinematic_studio_2_5`. Model `nano_banana` (base) **silently drops the tokens** — characters then render from prompt words alone and DRIFT from their registered refs. If a scene must contain a registered character, `nano_banana` is FORBIDDEN. Failure symptom: character doesn't match its ref, mascot shape drifts.
>
> **RUN LOG (Aug 5 00:16):** all 6 stills regenerated with `nano_banana_2` (token-honoring). NOTE: the job payload labels the effective model `nano_banana_flash` even when `nano_banana_2` is requested — both honor `<<<uuid>>>` tokens, only bare `nano_banana` drops them. 6/6 succeeded, 0 failed. Results saved to `docs/assets/scene-stills/scene-01.png` … `scene-06.png` (1376x768, 16:9). See table at bottom for job IDs + URLs.

## Scene 01 — wilderness-chaos
### Prompt
Claymation stop-motion miniature clay-model scene, visible clay texture, whimsical, fingerprints and tool marks showing. Low wide angle, 24mm eye-level to slightly elevated, gentle forward drift, no fisheye, no distorted lenses. A cramped jungle clearing in raw earth tones — clay mud #6b4a2f, jungle soil #4a3426, moss #5a6b3c, dried grass #8a7f5c — lit only by dim smoky firelight with ember #e07b39 accents and charcoal #2a211c shadow. <<<6a7dfe3a-20c8-4fd1-8a9d-405ad85be9b7>>> sits cross-legged over a wobbling pile of stone tablets, chipping furiously at one with a coal stub; <<<4a60b3c6-9827-4ab4-9896-9b0a18b2c177>>> shouts into a hollow gourd that answers no one. A piglet evades their pen; bones, gourds, vines and spare rocks clutter the ground; grey smoke spits from a fire pit. Keep the upper third of frame a quiet dark canopy.

### Notes
- Elements: `brub-state-a`, `vex-state-a` (no mascot — first appearance is Scene 02).
- World A lock: no text, no logos, no UI elements, no electricity, no modern objects, no smooth glass, no clean surfaces.
- Thematic contrast: frazzled warmth — the mess is comedic, never grim.

## Scene 02 — emerald-encounter
### Prompt
Claymation stop-motion miniature clay-model scene, visible clay texture, whimsical, handcrafted feel. Nightfall in the jungle; low wide angle, 24mm, eye level to slightly elevated, gentle forward drift, no fisheye, no distorted lenses. Brub and Vex huddle around a smouldering fire, exhausted, the whole frame muddy amber — clay mud #6b4a2f, moss #5a6b3c, ember #e07b39, charcoal #2a211c — except the mascot, which glows mint and gold. Between the ferns, <<<3970ee59-a7ae-4d11-8f83-f97a0ea862ac>>> steps into the light — a brilliant-cut diamond emerald, deep dark forest-green facets flashing matrix-green glow from its cut edges and core, floating upright, softly bobbing, patient and gently amused. <<<6a7dfe3a-20c8-4fd1-8a9d-405ad85be9b7>>> squints; <<<4a60b3c6-9827-4ab4-9896-9b0a18b2c177>>> points. The glow throws emerald tint onto the moss around it. Keep a dark jungle mass behind the fire glow for overlay.

### Notes
- Elements: `emerald-mascot` (first appearance), `brub-state-a`, `vex-state-a`.
- Mascot identity lock: matrix glow must be the only bright light in the frame.
- World A lock: no text, no logos, no UI elements, no modern objects.

## Scene 03 — vine-threshold
### Prompt
Claymation stop-motion miniature clay-model scene, visible clay texture, whimsical, handcrafted. Low wide angle, 24mm, eye level to slightly elevated, steady forward push through the scene, no fisheye, no distorted lenses. <<<3970ee59-a7ae-4d11-8f83-f97a0ea862ac>>> stands at a woven curtain of jungle vines and holds two strands apart like a theatre curtain, motioning <<<6a7dfe3a-20c8-4fd1-8a9d-405ad85be9b7>>> and <<<4a60b3c6-9827-4ab4-9896-9b0a18b2c177>>> through. Beyond the parted vines glows a short tunnel of warm mint-and-gold light where bananas and coconuts fall in slow, weightless, underwater fruit-rain, each piece glowing as it passes. The color temperature shifts mid-frame — mud-brown and amber bleeding into clean mint #d7f5e9 and cream #f7f3e8, vine edges softening into polished brass and gold #d4a843. This is the world-crossing seam; the last Wilderness frame and the first Paradise frame are the same image.

### Notes
- Elements: `emerald-mascot` (leading), `brub-state-a`, `vex-state-a`.
- Portal seam: one lock hands off to the other — mud/amber → mint/cream, matte → glossy.
- World A negative rules fade here; the crossing reads as passing through, not cutting.

## Scene 04 — paradise-first-light
### Prompt
Claymation stop-motion miniature clay-model scene, handcrafted, clean and polished — smooth clay, glossy lacquer on brass, everything lovingly finished. Low wide angle, 24mm, eye level to slightly elevated, gentle dolly forward, no fisheye, no distorted lenses. A clean, bright workshop in clean emerald and paradise pastels — mint #d7f5e9 background wash, cream #f7f3e8 walls and desks, bright emerald #5cdb8a on the working machines, deep emerald #2d8a4e accents, soft gold #d4a843 rim light, one coral #f2a97f note. <<<8e18959d-8f06-4d73-8cb7-10432a90d2b4>>> has new round gold-rimmed glasses and tamed hair; he stares at a brass light switch, flicks it once, and the room floods with warm light — pure wonder on his face. Behind him <<<4a60b3c6-9827-4ab4-9896-9b0a18b2c177>>> still clutches his coconut and ragged fur, mid-transition, gaping at the machines. The glowing <<<3970ee59-a7ae-4d11-8f83-f97a0ea862ac>>> hovers beside the light switch, guiding him, its matrix glow steady. A tidy desk holds a neat stack of stone tablets and an inbox with zero waiting.

### Notes
- Elements: `brub-state-b` (transformation beginning), `vex-state-a` (still lagging — the midpoint beat), `emerald-mascot`.
- World B lock: no dirt, no smoke, no tangle, no clutter, no dark corners; no text, no logos, no UI elements.
- Thematic contrast: one character changing, one still in the old world.

## Scene 05 — banana-coconut-company
### Prompt
Claymation stop-motion miniature clay-model scene, handcrafted, clean and polished — smooth clay, glossy lacquer on brass, lovingly finished. Low wide angle, 24mm, eye level to slightly elevated, gentle dolly forward, no fisheye, no distorted lenses. A bustling but calm office floor of the Banana & Coconut Company in mint #d7f5e9, cream #f7f3e8 and emerald — bright #5cdb8a, deep #2d8a4e piping on pressed tunics — with soft gold #d4a843 brass buttons and coral #f2a97f coconut-shaped name badges. <<<8e18959d-8f06-4d73-8cb7-10432a90d2b4>>> and <<<33a7cd6d-21cd-4983-8a90-8abd514b2e4d>>> are kempt and immaculate at tidy desks; Brub answers a small glowing banana-phone that rings politely once, nods, sets it down, and smiles at his empty inbox; Vex taps one shiny brass button and a smooth machine dispenses exactly one coconut. <<<3970ee59-a7ae-4d11-8f83-f97a0ea862ac>>> sits on a shelf between them like a watching lamp, its inner matrix glow flickering contentedly. Background comedy: a neat row of stone tablets mounted on the wall like a museum exhibit.

### Notes
- Elements: `brub-state-b`, `vex-state-b`, `emerald-mascot` (present, watching proudly).
- World B lock: no dirt, no clutter, no dark corners; no text, no logos, no UI elements (name badges are clay props, not typography).
- Comedy payoff: "how it used to be" tablet exhibit in-frame.

## Scene 06 — open-door-welcome
### Prompt
Claymation stop-motion miniature clay-model scene, handcrafted, clean and polished. Low wide angle, 24mm, eye level to slightly elevated, gentle forward drift, no fisheye, no distorted lenses. A clear, bright space in clean mint #d7f5e9, cream #f7f3e8, deep emerald #2d8a4e and soft gold #d4a843. <<<3970ee59-a7ae-4d11-8f83-f97a0ea862ac>>> hovers at an open doorway of warm light, floating upright, gently bobbing, beckoning the visitor in. Behind it, <<<8e18959d-8f06-4d73-8cb7-10432a90d2b4>>> and <<<33a7cd6d-21cd-4983-8a90-8abd514b2e4d>>> wave from their clean desks, glasses glinting, genuinely happy. The fruit-rain from the portal drifts softly through the doorway — but now the bananas and coconuts land gently in neat baskets, the chaos tamed. Generous negative space in the lower half of the frame for the CTA.

### Notes
- Elements: `emerald-mascot` (at the threshold, beckoning), `brub-state-b`, `vex-state-b`.
- World B lock: no dirt, no smoke, no clutter; no text, no logos, no UI elements.
- Payoff beat: fruit-rain returns but lands in neat baskets; lower-half negative space reserved for CTA overlay.

---

## RUN LOG — Aug 5 00:16 (nano_banana_2, token-honoring)

All 6 scenes regenerated with `nano_banana_2` (job payload reports `nano_banana_flash` — same token-honoring family; bare `nano_banana` was NOT used). 6/6 completed, 0 failed.

| # | Scene | Job ID | File | Result URL |
|---|-------|--------|------|------------|
| 1 | wilderness-chaos | `0aaaab8d-38a4-45df-9e7e-74e3a55f9332` | `scene-01.png` | https://d8j0ntlcm91z4.cloudfront.net/user_3H4cyordtAZ5XWlu05TdH4GVrbN/hf_20260805_051617_0aaaab8d-38a4-45df-9e7e-74e3a55f9332.png |
| 2 | emerald-encounter | `75d4d942-ee8d-4fa2-af5b-7e12a61f3cfb` | `scene-02.png` | https://d8j0ntlcm91z4.cloudfront.net/user_3H4cyordtAZ5XWlu05TdH4GVrbN/hf_20260805_051617_75d4d942-ee8d-4fa2-af5b-7e12a61f3cfb.png |
| 3 | vine-threshold | `f5f4aab8-87fe-40f1-9eae-e54640cc0ac0` | `scene-03.png` | https://d8j0ntlcm91z4.cloudfront.net/user_3H4cyordtAZ5XWlu05TdH4GVrbN/hf_20260805_051617_f5f4aab8-87fe-40f1-9eae-e54640cc0ac0.png |
| 4 | paradise-first-light | `37df3595-8232-43a4-9078-0dae5e6057b7` | `scene-04.png` | https://d8j0ntlcm91z4.cloudfront.net/user_3H4cyordtAZ5XWlu05TdH4GVrbN/hf_20260805_051617_37df3595-8232-43a4-9078-0dae5e6057b7.png |
| 5 | banana-coconut-company | `b2b88223-9a12-4732-bd59-4db4d7c251d8` | `scene-05.png` | https://d8j0ntlcm91z4.cloudfront.net/user_3H4cyordtAZ5XWlu05TdH4GVrbN/hf_20260805_051617_b2b88223-9a12-4732-bd59-4db4d7c251d8.png |
| 6 | open-door-welcome | `f44baaa0-9fdc-402e-9ddb-50503e9175df` | `scene-06.png` | https://d8j0ntlcm91z4.cloudfront.net/user_3H4cyordtAZ5XWlu05TdH4GVrbN/hf_20260805_051617_f44baaa0-9fdc-402e-9ddb-50503e9175df.png |
