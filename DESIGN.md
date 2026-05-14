# Design System — Dark Cinematic Portfolio

**Design direction:** Awwwards-inspired dark editorial portfolio. Cinematic depth,
strong motion, memorable opening sequence. Recruiter-readable but visually impressive.

---

## Color Tokens

| Token       | Value              | Usage                                   |
|-------------|--------------------|-----------------------------------------|
| `--bg`      | `hsl(0 0% 4%)`     | Page background                         |
| `--bg-alt`  | `hsl(0 0% 6.5%)`   | Subtle alternate section tint           |
| `--surface` | `hsl(0 0% 9%)`     | Card surfaces                           |
| `--surface-2`| `hsl(0 0% 12%)`   | Elevated / hover card state             |
| `--text`    | `hsl(0 0% 96%)`    | Primary text                            |
| `--muted`   | `hsl(0 0% 53%)`    | Secondary / label text                  |
| `--stroke`  | `hsl(0 0% 13%)`    | Default borders                         |
| `--stroke-2`| `hsl(0 0% 22%)`    | Hover / active borders                  |
| `--accent-a`| `#89AACC`          | Accent gradient start                   |
| `--accent-b`| `#4E85BF`          | Accent gradient end                     |

**Accent gradient** — use only on premium micro-details (logo ring, progress bar,
hover highlights). Site should feel 90% black/gray/white.

```
linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)
```

---

## Typography

| Role           | Font             | Style  | Weight  |
|----------------|------------------|--------|---------|
| Display / Name | Instrument Serif | italic | 400     |
| Body / UI      | Inter            | normal | 300–700 |
| Mono labels    | ui-monospace     | normal | 300–400 |

Scale:
- Hero name: `clamp(5rem, 13vw, 13rem)`, Instrument Serif italic
- Section title: `clamp(2rem, 5vw, 4rem)`, Inter 600
- Body: `1rem / 1.75`, Inter 400
- Mono label: `0.72rem`, letter-spacing 0.2em, UPPERCASE

---

## Depth System

Every section uses layered depth for cinematic parallax feel.

```
depth-0  Background gradient / grid      parallax 0.10×
depth-1  Atmospheric glows               parallax 0.25×
depth-2  Mid floating decorations        parallax 0.50×
depth-3  Main content hero objects       parallax 0.80×
depth-4  UI text / cards                 parallax 1.00×
depth-5  Foreground grain / FX           parallax 1.20×
```

---

## Sections

1. Loading Screen — counter 000→100, rotating words, gradient bar
2. Floating Navbar — pill, backdrop blur, dark glass
3. Hero — full-viewport, Instrument Serif name, animated bg, rotating role
4. Projects — bento grid with abstract CSS visuals, expand/collapse details
5. Skills — dark card grid grouped by domain
6. About — split layout with profile cards
7. Parallax Playground — GSAP ScrollTrigger floating dev elements
8. Stats — compact 4-stat row
9. Contact — email, GitHub, LinkedIn, availability
10. Footer — CSS marquee + links

---

## Motion Rules

- Only animate GPU-safe properties: `transform`, `opacity`, `filter`, `clip-path`
- All transitions: 200–350ms ease
- `prefers-reduced-motion: reduce` collapses every animation
- `will-change` applied during animation, removed after
- Decorative elements: `aria-hidden="true"`
- Scroll reveal: IntersectionObserver → `.is-visible`
- Parallax: GSAP ScrollTrigger scrub
- Marquee: CSS animation infinite
