# Green Glass Design System

Emerald-tinted glassmorphism for dark-themed UIs. Provides consistent, reusable glass effects with a green glow aesthetic.

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `glass-bg` | `rgba(5, 46, 22, 0.3)` | Card/panel backgrounds (emerald-950 at 30%) |
| `glass-border` | `rgba(110, 231, 183, 0.15)` | Subtle emerald border (emerald-300 at 15%) |
| `glass-blur` | `blur(12px)` | Backdrop blur intensity |
| `glass-shadow` | `0 10px 30px -10px rgba(5, 46, 22, 0.3)` | Emerald-tinted drop shadow |
| `glass-glow` | `rgba(110, 231, 183, 0.05)` | Inner highlight / top-edge glow |
| `glass-highlight` | `rgba(110, 231, 183, 0.4)` | Hover border intensity |

## CSS Classes

### `.glass` — Base glass
Apply to any element for the foundational glass effect. Use for containers, sections, generic panels.

### `.glass-card` — Card variant
Rounded corners (1.5rem), inner top-edge highlight via `inset 0 1px 0 0`. Use for content cards, feature panels, project cards.

### `.glass-pill` — Pill / nav variant
Fully rounded (9999px), tighter shadow. Use for navigation bars, action buttons, link badges. Has built-in hover state.

### `.glass-badge` — Badge / tag variant
Smaller, lighter. emerald-300 at 5% background. Use for skill tags, status indicators, labels. Has built-in hover state.

### `.glass-btn-primary` — Primary action button
Solid emerald-300 background with deep emerald shadow. Use for primary CTAs. Hover lifts and brightens.

### `.glass-btn-outline` — Outline action button
Transparent with emerald border. Use for secondary CTAs, ghost actions. Has built-in hover state.

## Tailwind Equivalents

If you prefer inline Tailwind over CSS classes:

```
Card:    rounded-3xl border border-emerald-300/15 bg-emerald-950/30 backdrop-blur-md shadow-lg shadow-emerald-900/30
Pill:    rounded-full border border-emerald-300/20 bg-emerald-300/5 backdrop-blur-md shadow-sm shadow-emerald-900/20
Badge:   rounded-full border border-emerald-300/20 bg-emerald-300/5 backdrop-blur-md text-xs shadow-sm shadow-emerald-900/20
Btn:     bg-emerald-300 text-emerald-950 hover:bg-emerald-200 shadow-lg shadow-emerald-900/40
Outline: border border-emerald-300/20 text-emerald-200 bg-emerald-300/5 hover:bg-emerald-300/10 hover:border-emerald-300/40
```

## When to Use

- **Dark backgrounds** (`bg-neutral-950` / `bg-[#050a07]`) — glass works best on dark
- **Floating elements** — nav bars, modals, dropdowns, tooltips
- **Content cards** — feature cards, project cards, experience entries
- **Interactive elements** — buttons, badges, links with hover states
- **Avoid on light backgrounds** — the emerald tint reads poorly on white

## Integration

Defined in `src/app/globals.css`. UI components (`src/components/ui/`) use Tailwind equivalents inline. Both approaches are kept in sync.

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
```
