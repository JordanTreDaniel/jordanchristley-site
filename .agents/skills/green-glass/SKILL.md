# Green Glass Design System

Dark emerald glassmorphism for jordanchristley-site. Site and logo share one material language: dark emerald → emerald → electric green → mint-white. Source of truth for colors, glass material, and Tailwind token remap.

## Locked Brand Palette

| Role | Hex | Notes |
|---|---|---|
| Obsidian | `#071B18` | Darkest background / emerald-950 |
| Deep Emerald | `#063F32` | Large dark mass / emerald-700–900 |
| Emerald | `#087A55` | Mid green / emerald-500–600 |
| Living Green | `#18D878` | Bright accent / emerald-300–400 |
| Electric Mint | `#7DFF9A` | Hot highlight / emerald-100–200 |
| Glass highlight | `#D7FFE3` | Near-white edge / emerald-50 |

NO gold/yellow accents anywhere. Gold `#d4a843` is removed from the system.

### Ratio Discipline

60–70% deep green/obsidian → 20–30% emerald/teal → 5–10% bright green → tiny near-white. Bright green lives INSIDE dark mass, never competing equally with it.

### Material Language

`deep translucent green glass → internal refraction → localized bright green → sharp edge highlight`

NOT green-gradient → glow → green-gradient.

### Background Glow

Very large, very soft, dark emerald/teal, low opacity, concentrated behind the object. NEVER brighter than the brightest facets. Atmosphere, not fog.

## Tailwind v4 Emerald Scale Remap

Remapped in `@theme` in `src/app/globals.css` — do not treat these as stock Tailwind:

- `emerald-50` = `#D7FFE3` (glass highlight)
- `emerald-100/200` = `#7DFF9A` (electric mint)
- `emerald-300/400` = `#18D878` (living green)
- `emerald-500/600` = `#087A55` (emerald)
- `emerald-700/800/900` = `#063F32` (deep emerald)
- `emerald-950` = `#071B18` (obsidian)

Custom tokens: `bg-obsidian`, `bg-deep-emerald`, `text-living-green`, `text-electric-mint`, `text-glass-highlight`.

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `glass-bg` | `rgba(6, 63, 50, 0.3)` | Card/panel backgrounds (deep emerald at 30%) |
| `glass-border` | `rgba(24, 216, 120, 0.15)` | Subtle living-green border |
| `glass-blur` | `blur(12px)` | Backdrop blur intensity |
| `glass-shadow` | `0 10px 30px -10px rgba(6, 63, 50, 0.3)` | Deep emerald drop shadow |
| `glass-glow` | `rgba(24, 216, 120, 0.05)` | Internal refraction / top-edge glow |
| `glass-highlight` | `rgba(125, 255, 154, 0.4)` | Sharp edge / hover highlight |

## CSS Classes

Canonical primitives in `src/app/globals.css`:

### `.glass` — Base glass
Deep translucent green glass on dark. Use for containers, sections, generic panels.

### `.glass-card` — Card variant
Rounded (1.5rem), inner top-edge highlight via `inset 0 1px 0 0`. Content cards, feature panels, project cards.

### `.glass-pill` — Pill / nav variant
Fully rounded (9999px), tighter shadow. Nav bars, action buttons, link badges. Has built-in hover.

### `.glass-badge` — Badge / tag variant
Smaller, lighter (living green at 5% bg). Skill tags, status indicators, labels. Has built-in hover.

### `.glass-btn-primary` — Primary action button
Solid living green (`emerald-300`) on deep emerald shadow. Primary CTAs. Hover lifts and brightens toward mint.

### `.glass-btn-outline` — Outline action button
Transparent with living-green border. Secondary CTAs, ghost actions. Has built-in hover.

## Tailwind Equivalents

```
Card:    rounded-3xl border border-emerald-300/15 bg-deep-emerald/30 backdrop-blur-md shadow-lg shadow-emerald-900/30
Pill:    rounded-full border border-emerald-300/20 bg-emerald-300/5 backdrop-blur-md shadow-sm shadow-emerald-900/20
Badge:   rounded-full border border-emerald-300/20 bg-emerald-300/5 backdrop-blur-md text-xs shadow-sm shadow-emerald-900/20
Btn:     bg-emerald-300 text-emerald-950 hover:bg-emerald-200 shadow-lg shadow-emerald-900/40
Outline: border border-emerald-300/20 text-emerald-200 bg-emerald-300/5 hover:bg-emerald-300/10 hover:border-emerald-300/40
```

## When to Use

- **Dark backgrounds** — `bg-obsidian` (`#071B18`) or `bg-deep-emerald` (`#063F32`); glass works best on dark
- **Floating elements** — nav bars, modals, dropdowns, tooltips
- **Content cards** — feature cards, project cards, experience entries
- **Interactive elements** — buttons, badges, links with hover states
- **Avoid on light backgrounds** — the emerald tint reads poorly on white
- **Keep ratio discipline** — bright green stays nested inside dark mass

## Fonts

Fredoka (display/headings) + Nunito Sans (body). NOT Space_Grotesk.

## Hero Background

Velaris WebGL green-glow header (`src/components/Velaris.tsx`) — dark emerald atmosphere. NOT silver liquid metal.

## Integration

Defined in `src/app/globals.css` (`@theme` remap + `.glass*` primitives). UI components (`src/components/ui/`) use Tailwind equivalents inline. Both approaches are kept in sync.

## Examples

```html
<!-- Card -->
<div class="glass-card p-6">
  <h3>Feature</h3>
  <p>Description</p>
</div>

<!-- Nav bar -->
<nav class="glass-pill px-2 py-1.5">
  <a class="rounded-full px-4 py-1.5 ...">Link</a>
</nav>

<!-- Skill tag -->
<span class="glass-badge px-3 py-1 text-xs">Python</span>

<!-- Primary CTA -->
<button class="glass-btn-primary rounded-full px-6 py-3 font-semibold">Hire me</button>

<!-- Obsidian page shell -->
<main class="bg-obsidian">
  <div class="glass-card p-6">...</div>
</main>
```
