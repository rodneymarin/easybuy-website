---
baseline_commit: NO_VCS
---

# Story 1.3: Feature destacada

Status: done

## Story

Como visitante,
quiero leer un bloque destacado sobre multi-tienda con precios por establecimiento,
para entender el diferenciador central de EasyBuy.

## Acceptance Criteria

1. **Given** el sitio cargado,
   **When** scrolleo debajo del Hero,
   **Then** veo la sección `#eb-feature` con un titular de énfasis centrado.

2. **Given** la sección Feature visible,
   **When** leo el texto,
   **Then** usa tipografía Inter en tamaño mayor al cuerpo (`text-2xl`, `text-3xl` o `text-4xl`) con espaciado generoso (`py-16` o `py-24`).

3. **Given** la sección Feature visible,
   **When** reviso el contenido,
   **Then** el texto comunica la capacidad multi-tienda con precios por establecimiento.

4. **Given** el flujo de secciones,
   **When** navego entre Hero y features zig-zag,
   **Then** la Feature destacada es visualmente distinta de ambas.

## Tasks / Subtasks

- [x] Crear sección Feature: `src/sections/feature.html` (AC: #1–#4)
  - [x] Estructura `section#eb-feature` con padding vertical `py-24`, centrado
  - [x] Texto display con tamaño `text-3xl`/`text-4xl` y tracking-wide
  - [x] Espaciado generoso entre párrafos
  - [x] Sin imágenes ni ilustraciones
- [x] Actualizar `src/main.js` — añadir feature.html al array de secciones (AC: #1)
- [x] Verificar `npm run dev` (AC: #1–#4)
- [x] Verificar `npm run build` (AC: #1–#4)

## Dev Notes

- AD-3: No aplica — no hay assets en esta sección
- AD-4: HTML partial en `src/sections/feature.html`
- AD-2: Clases utilitarias Tailwind, fondo blanco, texto centrado
- Copywriting sugerido:
  - Título: "Una app, todas tus tiendas"
  - Subtítulo: "EasyBuy te permite registrar los precios de cada producto en el supermercado donde compras. Sabrás siempre dónde es más barato sin volverte loco."
- Naming BEM: `eb-feature`, `eb-feature__title`, `eb-feature__subtitle`
- `main.js` debe migrar a patrón de acumulación: `[heroHtml, featureHtml].join('')`

### Project Structure Notes

```
src/
├── sections/
│   ├── hero.html          # existe
│   └── feature.html       # NUEVO (FR-3)
├── assets/
├── style.css
└── main.js                # MODIFICAR: añadir feature
```

### References

- [Source: PRD FR-3 (Feature destacada)](/_bmad-output/planning-artifacts/prds/prd-EasyBuy-2026-07-21/prd.md#L92)
- [Source: Architecture Spine AD-4 (Secciones modulares)](/_bmad-output/planning-artifacts/architecture/architecture-EasyBuy-2026-07-21/ARCHITECTURE-SPINE.md#L60)
- [Source: Epics Story 1.3](/_bmad-output/planning-artifacts/epics.md#L97)

## Dev Agent Record

### Agent Model Used

opencode/deepseek-v4-flash-free

### Debug Log References

- Story 1.2 code review: se migró main.js a patrón de acumulación de secciones
- Feature no usa imágenes ni ilustraciones — solo texto

### Completion Notes List

- ✅ Feature section creada en `src/sections/feature.html` con título y subtítulo centrados
- ✅ `main.js` migrado a patrón de acumulación `[heroHtml, featureHtml].join('')`
- ✅ `npm run build` — 6 módulos, sin errores
- ✅ Deferred finding de Story 1.2 resuelto: innerHTML ahora usa array acumulativo

### File List
- `src/sections/feature.html` (nuevo)
- `src/main.js` (modificado)

## Change Log

- 2026-07-21: Story 1.3 implementada y marcada review. Feature destacada multi-tienda.

### Review Findings

- [x] [Review][Patch] aria-label con mezcla de idiomas [feature.html:1] — cambiado a `aria-labelledby`
- [x] [Review][Patch] Usar `aria-labelledby` apuntando al h2 [feature.html:1] — añadido id al título
- [x] [Review][Defer] innerHTML pattern frágil — diferido, contenido estático seguro para landing page
