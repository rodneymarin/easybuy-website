---
name: EasyBuy Website
type: architecture-spine
purpose: build-substrate
altitude: epic
paradigm: static-site
scope: Landing page de producto para EasyBuy
status: final
created: 2026-07-21
updated: 2026-07-21
binds:
  - PRD EasyBuy Website (FR-1 — FR-9)
sources:
  - _bmad-output/planning-artifacts/prds/prd-EasyBuy-2026-07-21/prd.md
  - _bmad-output/planning-artifacts/briefs/brief-EasyBuy-2026-07-21/brief.md
companions: []
---

# Architecture Spine — EasyBuy Website

## Design Paradigm

**Static Site** — HTML generado estáticamente, servido sin backend ni runtime en el servidor. Cada sección del sitio es un archivo HTML partial que Vite ensambla en el build. Todo el contenido es declarativo (HTML + CSS), con JavaScript mínimo para interactividad de acordeón y scroll suave.

```
index.html            ← raíz; importa secciones
src/
  sections/           ← cada sección es un partial
  assets/             ← SVGs, imágenes, QR
  style.css           ← Tailwind + custom
  main.js             ← JS mínimo
```

## Inherited Invariants

*No aplica — no hay spine padre.*

## Invariants & Rules

### AD-1 — Stack: Vite + vanilla HTML/CSS/JS

- **Binds:** `all`
- **Prevents:** Framework JS innecesario (React, Vue, Svelte) para una landing page estática; evita bundle pesado, hidratación, y complejidad de SPA donde no se necesita.
- **Rule:** El proyecto usa Vite como bundler. Sin framework JS de runtime. HTML, CSS y JS plano.

### AD-2 — CSS: Tailwind CSS

- **Binds:** `all`
- **Prevents:** Inconsistencia de estilos entre secciones escritas por diferentes agentes; estilos inline; naming manual de clases CSS.
- **Rule:** Todo estilo usa clases utilitarias de Tailwind. El color primary `#4a5df9` se configura en `tailwind.config.js`. Variantes responsive (`sm:`, `md:`, `lg:`) para adaptación mobile/desktop.

### AD-3 — Assets como archivos SVG externos

- **Binds:** `FR-4`, `FR-5`, `FR-7`, `FR-9`
- **Prevents:** SVG inline en HTML que obliga a reescribir código para cambiar diseños; dependencia de runtime para iconos.
- **Rule:** Todo gráfico vectorial (ilustraciones zig-zag, logo, QR code) es un archivo `.svg` independiente en `/src/assets/`. El HTML los referencia con `<img src="/src/assets/..." alt="...">`. Cero SVG inline.

### AD-4 — Secciones modulares (HTML partials)

- **Binds:** `FR-1` — `FR-7`
- **Prevents:** Un solo archivo monolítico `index.html` donde múltiples agentes hacen conflicto; mezcla de estilos entre secciones.
- **Rule:** Cada sección del sitio (Hero, Feature Destacada, Features Zig-Zag, CTA Intermedio, Footer) es un archivo HTML parcial dentro de `/src/sections/`. `index.html` los importa vía `@include` de Vite o similar. Cada parcial tiene su propio wrapper `section` con id único.

### AD-5 — QR code generado estáticamente

- **Binds:** `FR-7`
- **Prevents:** Dependencia de librería JS en runtime para generar el QR; variación de QR entre visits.
- **Rule:** El QR code es un archivo `.svg` pre-generado en `/src/assets/qr.svg`. Se genera offline con herramienta CLI (ej. `qrencode`) o copiado manual.

### AD-6 — SEO mínimo sin tracking

- **Binds:** `FR-1`, `§5 Non-Goals`
- **Prevents:** Falta de meta tags que haga invisible al sitio en redes sociales/share; analytics no deseado.
- **Rule:** `<head>` incluye: `<title>`, `<meta name="description">`, Open Graph tags (`og:title`, `og:description`, `og:image`). Sin Google Analytics, sin tracking scripts, sin cookies.

### AD-7 — Deploy estático

- **Binds:** `all`
- **Prevents:** Dependencia de servidor con runtime; vendor lock-in de host.
- **Rule:** `vite build` produce una carpeta `dist/` con HTML+CSS+JS+assets estáticos. Compatible con cualquier host estático (Vercel, Netlify, GitHub Pages, servidor Apache/Nginx).

### AD-8 — Layout: fondo blanco, Hero dos columnas

- **Binds:** `FR-1`, `FR-9`, `FR-10`
- **Prevents:** Desalineación entre agentes sobre la disposición del Hero y el fondo general.
- **Rule:** Fondo general del sitio es blanco (`#ffffff`). Hero usa layout de dos columnas en desktop (izquierda: texto + CTAs, derecha: mockup), pasa a una columna vertical en mobile.

## Consistency Conventions

| Concern | Convention |
|---|---|
| Naming (archivos) | kebab-case: `hero.html`, `feature-destacada.html`, `project-screenshots.png` |
| Naming (IDs, clases) | BEM con prefijo `eb-`: `eb-hero`, `eb-hero__title`, `eb-feature` |
| Tipografía | Inter (Google Fonts o self-hosted). Pesos: 400, 500, 600, 700. |
| Colores | Primary `#4a5df9`. Texto oscuro sobre fondo blanco, texto claro sobre fondo oscuro (footer). |
| Responsive | Mobile-first. Breakpoints Tailwind por defecto. |
| Espaciado | Tailwind spacing scale. |
| Enlaces externos | `target="_blank" rel="noopener noreferrer"` en todos los enlaces fuera del sitio. |

## Stack

| Name | Version |
|---|---|
| Vite | ^6 (latest) |
| Tailwind CSS | ^4 (latest) |
| Inter (Google Fonts) | latest |
| Node.js | ^22 LTS |

## Structural Seed

```text
easybuy-website/
├── index.html                  # Raíz: ensambla secciones
├── package.json
├── vite.config.js
├── tailwind.config.js
├── src/
│   ├── style.css               # Tailwind directives + custom
│   ├── main.js                 # JS mínimo (acordeón, scroll suave)
│   ├── sections/
│   │   ├── hero.html           # FR-1, FR-2
│   │   ├── feature.html        # FR-3 — Feature destacada
│   │   ├── features.html       # FR-4, FR-5 — Zig-zag
│   │   ├── cta.html            # FR-6 — CTA intermedio
│   │   └── footer.html         # FR-7 — Footer
│   └── assets/
│       ├── logo.svg            # Logo EasyBuy
│       ├── project-screenshots.png  # Mockup Hero (FR-1)
│       ├── qr.svg              # QR descarga (FR-7)
│       ├── illustration-listas.svg
│       ├── illustration-productos.svg
│       ├── illustration-tienda.svg
│       └── illustration-nube.svg
└── dist/                       # Salida de build
```

## Capability → Architecture Map

| Capability / Area | Lives in | Governed by |
|---|---|---|
| Hero + CTAs | `src/sections/hero.html` | AD-1, AD-2, AD-4, AD-8 |
| Feature destacada | `src/sections/feature.html` | AD-2, AD-4 |
| Features zig-zag | `src/sections/features.html` | AD-2, AD-3, AD-4 |
| CTA intermedio | `src/sections/cta.html` | AD-2, AD-4 |
| Footer + QR | `src/sections/footer.html` | AD-2, AD-3, AD-4, AD-5 |
| Diseño responsive | `tailwind.config.js`, `src/style.css` | AD-2, AD-8 |
| SEO | `index.html` `<head>` | AD-6 |
| Build & deploy | `vite.config.js`, `dist/` | AD-1, AD-7 |

## Deferred

- **Modo oscuro** — diferido a v2. Se añadiría como clase `dark` en `<html>` y variantes `dark:` en Tailwind, pero fuera de MVP.
- **Animaciones** — cualquier animación entre secciones (scroll reveal, fade-in) se decide en implementación, no requiere AD.
- **Contenido de ilustraciones SVG** — el diseño visual de cada ilustración vectorial se define durante implementación, no a nivel arquitectura.
- **Texto copia (copywriting)** — contenidos de titulares, descripciones en features, y preguntas FAQs se definen en historias de implementación.
- **Hosting/deploy final** — `dist/` es portable; decisión de host específico se toma al hacer deploy.
