---
baseline_commit: NO_VCS
---

# Story 1.2: Hero section

Status: done

## Story

Como visitante,
quiero ver un Hero con titular claro, mockup de la app y dos botones de descarga,
para entender qué es EasyBuy y cómo acceder.

## Acceptance Criteria

1. **Given** el sitio cargado,
   **When** veo el Hero por primera vez,
   **Then** el Hero ocupa el viewport completo (`min-h-screen`) y usa fondo blanco.

2. **Given** el Hero visible,
   **When** estoy en desktop (≥1024px),
   **Then** el layout es de dos columnas: texto + CTAs a la izquierda, mockup a la derecha.

3. **Given** el Hero visible,
   **When** estoy en mobile (<1024px),
   **Then** el layout es una columna vertical (texto arriba, mockup abajo).

4. **Given** el Hero visible,
   **When** se renderiza el mockup,
   **Then** la imagen (`/project-screenshots.png`) mantiene su relación de aspecto (`object-fit: contain` o similar).

5. **Given** el Hero visible,
   **When** veo los CTAs,
   **Then** hay dos botones: uno primary (`bg-primary`, texto blanco) para versión web y uno secondary (outline con borde primary) para descargar APK.

6. **Given** los botones CTA,
   **When** hago clic en cualquiera,
   **Then** el enlace se abre en nueva pestaña (`target="_blank" rel="noopener noreferrer"`).

## Tasks / Subtasks

- [x] Crear sección Hero: `src/sections/hero.html` (AC: #1–#6)
  - [x] Estructura `section#eb-hero` con `min-h-screen`, fondo blanco, padding
  - [x] Columna izquierda: titular `h1`, subtítulo `p`, contenedor de CTAs
  - [x] Columna derecha: `<img>` del mockup con clase `object-contain`
  - [x] Botón primary: variante web, `bg-primary text-white`
  - [x] Botón secondary: variante APK, borde primary, texto primary
  - [x] Ambos enlaces con `target="_blank" rel="noopener noreferrer"`
- [x] Actualizar `src/main.js` para importar e inyectar el Hero (AC: #1–#6)
- [x] Verificar `npm run dev` — Hero visible y correcto (AC: #1–#6)
- [x] Verificar `npm run build` — dist/ incluye hero (AC: #1–#6)

## Dev Notes

- Usar `?raw` suffix de Vite para importar HTML como string: `import heroHtml from '../sections/hero.html?raw'`
- AD-8: Hero dos columnas en desktop (izquierda: texto + CTAs, derecha: mockup), una columna en mobile
- AD-1: Sin framework JS — vanilla HTML/CSS/JS
- AD-3: Mockup como archivo externo, NO inline
- AD-2: Todos los estilos con clases utilitarias Tailwind
- Naming BEM con prefijo `eb-`: `eb-hero`, `eb-hero__title`, `eb-hero__cta`, `eb-hero__mockup`
- Copywriting sugerido:
  - Titular: "Organiza tus compras en varias tiendas"
  - Subtítulo: "EasyBuy te permite crear listas inteligentes con precios actualizados por establecimiento. Todo en un solo lugar, sin esfuerzo."
  - CTA web: "Usar versión web"
  - CTA APK: "Descargar APK"
- Ícono del logo en `index.html` ya apunta a `/logo.svg`
- Enlaces externos SIEMPRE con `target="_blank" rel="noopener noreferrer"`
- Responsive: `lg:` breakpoint (1024px) para cambio de columna única a dos columnas

### Project Structure Notes

```
src/
├── sections/
│   └── hero.html          # NUEVO: sección Hero (FR-1, FR-2)
├── assets/                 # vacío por ahora
├── style.css               # ya existe, Tailwind + @theme
└── main.js                 # MODIFICAR: importar e inyectar hero.html
```

### References

- [Source: Architecture Spine AD-8 (Hero dos columnas)](/_bmad-output/planning-artifacts/architecture/architecture-EasyBuy-2026-07-21/ARCHITECTURE-SPINE.md#L84)
- [Source: Architecture Spine AD-4 (Secciones modulares)](/_bmad-output/planning-artifacts/architecture/architecture-EasyBuy-2026-07-21/ARCHITECTURE-SPINE.md#L60)
- [Source: PRD FR-1 (Hero layout)](/_bmad-output/planning-artifacts/prds/prd-EasyBuy-2026-07-21/prd.md#L69)
- [Source: PRD FR-2 (CTAs del Hero)](/_bmad-output/planning-artifacts/prds/prd-EasyBuy-2026-07-21/prd.md#L78)
- [Source: Epics Story 1.2](/_bmad-output/planning-artifacts/epics.md#L85)
- Vite `?raw` imports: https://vite.dev/guide/assets.html#explicit-url-imports

## Dev Agent Record

### Agent Model Used

opencode/deepseek-v4-flash-free

### Debug Log References

- Story 1.1 code review passed clean — no hallazgos
- El mockup se sirve desde `/project-screenshots.png` (vía `publicDir: 'assets'`)
- `index.html` ya tiene Inter, lang=es, charset, viewport — Story 1.1 los configuró

### Completion Notes List

- ✅ Hero section creada en `src/sections/hero.html` con layout dos columnas (desktop) / una columna (mobile)
- ✅ Titular, subtítulo y mockup del Hero funcionales
- ✅ Dos CTAs: versión web (primary `bg-primary`) y APK (secondary outline)
- ✅ Ambos enlaces con `target="_blank" rel="noopener noreferrer"`
- ✅ `main.js` actualizado para importar `hero.html?raw` e inyectarlo en `#app`
- ✅ `npm run dev` funciona sin errores
- ✅ `npm run build` produce dist/ con 5 módulos transformados

### File List
- `src/sections/hero.html` (nuevo)
- `src/main.js` (modificado)

## Change Log

- 2026-07-21: Story implementada y marcada para review. Hero section con CTAs web/APK, mockup, layout responsive.

### Review Findings

- [x] [Review][Patch] CLS por falta de dimensiones en img [hero.html:20] — añadido `aspect-ratio` CSS
- [x] [Review][Patch] Landmark `<section>` sin etiqueta [hero.html:1] — añadido `aria-label`
- [x] [Review][Patch] CTAs sin foco visible para teclado [hero.html:11,14] — añadido `focus-visible:ring`
- [x] [Review][Defer] `innerHTML` reemplaza todo `#app` [main.js:4] — diferido, se abordará al añadir más secciones
- [x] [Review][Defer] SEO invisible para crawlers sin JS [hero.html] — diferido a Story 1.6 (SEO)
