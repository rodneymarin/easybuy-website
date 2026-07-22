---
baseline_commit: NO_VCS
---

# Story 1.4: Features zig-zag

Status: done

## Story

Como visitante,
quiero ver 4 bloques alternados con ilustraciones y texto sobre listas, productos, tiendas y nube,
para conocer las funcionalidades de la app.

## Acceptance Criteria

1. **Given** el sitio cargado,
   **When** scrolleo a la sección zig-zag,
   **Then** veo 4 bloques en patrón alternado: bloque 1 imagen izq/texto der, bloque 2 imagen der/texto izq, etc.

2. **Given** cada bloque zig-zag,
   **When** lo veo en desktop (≥1024px),
   **Then** el layout es horizontal (dos columnas).

3. **Given** cada bloque zig-zag,
   **When** lo veo en mobile (<1024px),
   **Then** el layout es vertical (stack, imagen arriba, texto abajo).

4. **Given** cada bloque,
   **When** reviso el contenido,
   **Then** tiene una ilustración SVG externa desde `/src/assets/` y texto descriptivo.

5. **Given** los 4 bloques,
   **When** reviso los textos,
   **Then** corresponden a: FR-5.1 múltiples listas, FR-5.2 maestro productos, FR-5.3 asignar tienda, FR-5.4 modo local/nube.

## Tasks / Subtasks

- [x] Crear ilustraciones SVG placeholder en `src/assets/` (AC: #4)
  - [x] `illustration-listas.svg`
  - [x] `illustration-productos.svg`
  - [x] `illustration-tienda.svg`
  - [x] `illustration-nube.svg`
- [x] Crear sección zig-zag: `src/sections/features.html` (AC: #1–#5)
  - [x] 4 bloques en patrón alternado con `lg:flex-row-reverse` cada 2
  - [x] Cada bloque: SVG + título + descripción
  - [x] Responsive: flex-col mobile, flex-row desktop
- [x] Actualizar `src/main.js` — añadir features.html (AC: #1)
- [x] Verificar `npm run dev` (AC: #1–#5)
- [x] Verificar `npm run build` (AC: #1–#5)

## Dev Notes

- AD-3: SVG como archivos externos en `src/assets/`, referenciados con `<img src="/src/assets/...">`
- AD-4: HTML partial en `src/sections/features.html`
- AD-2: Clases utilitarias Tailwind
- Copywriting por bloque:
  - **Múltiples listas**: "Crea listas separadas para cada supermercado. Una para el súper, otra para la verdulería, otra para la carnicería."
  - **Maestro productos**: "Tu catálogo personal. Agrega productos una vez y asígnalos a cualquier lista después."
  - **Asignar tienda**: "Cada producto sabe en qué tienda está. Precios diferentes por establecimiento, automáticamente."
  - **Modo local / nube**: "Funciona sin conexión. Y cuando quieras, sincroniza tus listas en la nube."
- Naming BEM: `eb-features`, `eb-features__block`, `eb-features__img`, `eb-features__text`
- Alternancia: bloque 1 flex-row, bloque 2 flex-row-reverse, etc.
- SVGs placeholder: figuras geométricas simples con color primary `#4a5df9`

### Project Structure Notes

```
src/
├── sections/
│   ├── hero.html
│   ├── feature.html
│   └── features.html      # NUEVO (FR-4, FR-5)
├── assets/
│   ├── illustration-listas.svg    # NUEVO
│   ├── illustration-productos.svg # NUEVO
│   ├── illustration-tienda.svg    # NUEVO
│   └── illustration-nube.svg      # NUEVO
├── style.css
└── main.js                # MODIFICAR
```

### References

- [Source: PRD FR-4 (Bloques zig-zag)](/_bmad-output/planning-artifacts/prds/prd-EasyBuy-2026-07-21/prd.md#L113)
- [Source: PRD FR-5.1-5.4 (Contenido de bloques)](/_bmad-output/planning-artifacts/prds/prd-EasyBuy-2026-07-21/prd.md#L121)
- [Source: Architecture Spine AD-3 (Assets SVG externos)](/_bmad-output/planning-artifacts/architecture/architecture-EasyBuy-2026-07-21/ARCHITECTURE-SPINE.md#L54)
- [Source: Architecture Spine AD-4 (Secciones modulares)](/_bmad-output/planning-artifacts/architecture/architecture-EasyBuy-2026-07-21/ARCHITECTURE-SPINE.md#L60)

## Dev Agent Record

### Agent Model Used

opencode/deepseek-v4-flash-free

### Debug Log References

### Completion Notes List

- ✅ 4 ilustraciones SVG placeholder creadas en `src/assets/`
- ✅ Sección features.html con 4 bloques zig-zag alternados (flex-row / flex-row-reverse)
- ✅ `main.js` actualizado con featuresHtml
- ✅ `npm run build` — 7 módulos, sin errores

### File List
- `src/assets/illustration-listas.svg` (nuevo)
- `src/assets/illustration-productos.svg` (nuevo)
- `src/assets/illustration-tienda.svg` (nuevo)
- `src/assets/illustration-nube.svg` (nuevo)
- `src/sections/features.html` (nuevo)
- `src/main.js` (modificado)

## Change Log

- 2026-07-21: Story 1.4 implementada. Features zig-zag con 4 bloques alternados e ilustraciones SVG.

### Review Findings

- [x] [Review][Patch] SVGs 404 en producción [features.html] — movidos a `assets/` (publicDir) y rutas corregidas
- [x] [Review][Defer] gap-20 (80px) entre bloques en mobile — diferido, espaciado intencional para claridad visual
- [x] [Review][Defer] Orden screen reader en flex-row-reverse — diferido, DOM sigue orden lógico
