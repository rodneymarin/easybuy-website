---
baseline_commit: NO_VCS
---

# Story 1.5: CTA intermedio + Footer

Status: done

## Story

Como visitante,
quiero ver un banner CTA y un footer oscuro con QR y enlaces,
para tener un llamado a la acción y acceder a descarga e información legal.

## Acceptance Criteria

1. **Given** el sitio cargado,
   **When** scrolleo entre features zig-zag y footer,
   **Then** veo un banner CTA con fondo primary `#4a5df9` y texto convincente.

2. **Given** el banner CTA visible,
   **When** veo el botón,
   **Then** es un CTA secundario (outline blanco con texto blanco) funcional.

3. **Given** el footer visible,
   **When** lo veo,
   **Then** tiene fondo oscuro (`bg-[#1a1a2e]`), texto claro, QR code, URL descarga, enlaces legales y copyright.

4. **Given** el QR code,
   **When** se renderiza,
   **Then** es un archivo SVG externo escaneable.

5. **Given** el footer,
   **When** reviso los enlaces,
   **Then** todos abren en nueva pestaña con `target="_blank" rel="noopener noreferrer"`.

## Tasks / Subtasks

- [x] Crear placeholder QR SVG en `assets/qr.svg` (AC: #4)
- [x] Crear sección CTA: `src/sections/cta.html` (AC: #1–#2)
  - [x] Banner con `bg-primary`, padding generoso, texto blanco centrado
  - [x] Botón CTA secundario outline (borde blanco, texto blanco, hover relleno)
- [x] Crear sección Footer: `src/sections/footer.html` (AC: #3–#5)
  - [x] Fondo oscuro `bg-[#1a1a2e]`, texto claro
  - [x] QR code (`/qr.svg`), URL descarga, enlaces legales, copyright
  - [x] Todos los enlaces con `target="_blank" rel="noopener noreferrer"`
- [x] Actualizar `src/main.js` — añadir cta.html + footer.html (AC: #1, #3)
- [x] Verificar `npm run dev` (AC: #1–#5)
- [x] Verificar `npm run build` (AC: #1–#5)

## Dev Notes

- AD-5: QR code como SVG externo en `assets/qr.svg`, servido en `/qr.svg`
- AD-4: HTML partials en `src/sections/cta.html` y `src/sections/footer.html`
- Copywriting sugerido:
  - **CTA banner**: "EasyBuy está lista para usarse. ¿Qué esperas?"
  - **Botón CTA**: "Probar ahora"
  - **Footer**: "© 2026 EasyBuy. Todos los derechos reservados."
  - Enlaces: "Aviso de privacidad", "Términos de uso"
  - URL descarga: "Descargar EasyBuy"
- Naming BEM: `eb-cta`, `eb-cta__title`, `eb-cta__btn`, `eb-footer`, `eb-footer__qr`, `eb-footer__links`

### Project Structure Notes

```
src/
├── sections/
│   ├── hero.html
│   ├── feature.html
│   ├── features.html
│   ├── cta.html           # NUEVO (FR-6)
│   └── footer.html        # NUEVO (FR-7)
├── assets/
├── style.css
└── main.js                # MODIFICAR
```

### References

- [Source: PRD FR-6 (CTA intermedio)](/_bmad-output/planning-artifacts/prds/prd-EasyBuy-2026-07-21/prd.md#L137)
- [Source: PRD FR-7 (Footer oscuro)](/_bmad-output/planning-artifacts/prds/prd-EasyBuy-2026-07-21/prd.md#L151)
- [Source: Architecture Spine AD-5 (QR code)](/_bmad-output/planning-artifacts/architecture/architecture-EasyBuy-2026-07-21/ARCHITECTURE-SPINE.md#L66)

## Dev Agent Record

### Agent Model Used

opencode/deepseek-v4-flash-free

### Debug Log References

### Completion Notes List

- ✅ QR placeholder SVG creado en `assets/qr.svg`
- ✅ CTA section con banner primary + botón outline blanco
- ✅ Footer oscuro con QR, descarga, enlaces legales, copyright
- ✅ `main.js` actualizado con ctaHtml y footerHtml
- ✅ `npm run build` — 9 módulos, sin errores

### File List
- `assets/qr.svg` (nuevo)
- `src/sections/cta.html` (nuevo)
- `src/sections/footer.html` (nuevo)
- `src/main.js` (modificado)

## Change Log

- 2026-07-21: Story 1.5 implementada. CTA intermedio + Footer oscuro con QR.
