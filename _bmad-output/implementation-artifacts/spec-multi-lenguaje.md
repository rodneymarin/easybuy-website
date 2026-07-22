---
title: 'Soporte multi-idioma (Español/Inglés)'
type: 'feature'
created: '2026-07-22'
baseline_commit: f333d727ae251e22001968eeed611d78bc77dcbd
status: 'done'
review_loop_iteration: 0
context:
  - '{project-root}/_bmad-output/planning-artifacts/architecture/architecture-EasyBuy-2026-07-21/ARCHITECTURE-SPINE.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** El sitio EasyBuy está completamente en español, sin soporte para inglés. Usuarios internacionales no pueden navegar el sitio en su idioma.

**Approach:** Implementar i18n con archivos JSON de traducciones cargados dinámicamente por JS. El idioma se detecta del navegador en la primera visita, se persiste en localStorage, y el usuario puede cambiarlo desde un selector ES | EN en el footer. Todo el contenido visible se reemplaza sin recargar la página.

## Boundaries & Constraints

**Always:**
- Usar Vite + vanilla HTML/CSS/JS sin frameworks de runtime
- Traducciones en archivos JSON separados por idioma en `src/i18n/`
- Persistir preferencia en `localStorage` con clave `eb-lang`
- Selector de idioma en footer como texto "ES | EN"
- Sin cambio de URL — todo dinámico desde `index.html`
- Meta tags deben reflejar el idioma actual (`lang` attribute, `og:locale`)
- El idioma por defecto en primera visita es el del navegador (`navigator.language`); si no coincide con español o inglés, usar inglés

**Ask First:**
- Ninguna por ahora

**Never:**
- No duplicar HTML por idioma
- No usar librerías externas de i18n
- No generar rutas separadas por idioma

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Primera visita, browser en inglés | Sin `eb-lang` en localStorage, `navigator.language = "en-US"` | Sitio se muestra en inglés | N/A |
| Primera visita, browser en español | Sin `eb-lang`, `navigator.language = "es-CR"` | Sitio se muestra en español | N/A |
| Primera visita, browser en francés | Sin `eb-lang`, `navigator.language = "fr-FR"` | Sitio se muestra en inglés (fallback) | N/A |
| Usuario cambia español → inglés | Click "EN" en footer | Contenido cambia a inglés, `eb-lang = "en"` en localStorage | N/A |
| Usuario cambia inglés → español | Click "ES" en footer | Contenido cambia a español, `eb-lang = "es"` en localStorage | N/A |
| Visita recurrente con preferencia | `eb-lang = "en"` en localStorage | Sitio se muestra en inglés | localStorage corrupto → default browser |
| JSON no carga | Error de red | Sitio se muestra en español (fallback) | console.warn, mantener idioma actual |

</frozen-after-approval>

## Code Map

- `src/i18n/es.json` -- Traducciones al español
- `src/i18n/en.json` -- Traducciones al inglés
- `src/i18n/index.js` -- Módulo i18n: detección, persistencia, cambio de idioma, applyTranslations
- `src/main.js` -- Inicializar i18n tras renderizar secciones
- `src/sections/footer.html` -- Agregar selector ES | EN
- `index.html` -- Actualizar `lang` dinámicamente, meta tags

## Tasks & Acceptance

**Execution:**
- [x] `src/i18n/es.json` -- Crear con todas las claves de traducción y valores en español
- [x] `src/i18n/en.json` -- Crear con todas las claves de traducción y valores en inglés
- [x] `src/i18n/index.js` -- implementar detectLang, setLang, applyTranslations, getCurrentLang
- [x] `src/sections/footer.html` -- Agregar selector ES | EN con indicador visual del idioma activo
- [x] `src/main.js` -- Integrar i18n: importar módulo, aplicar traducciones tras render
- [x] `index.html` -- Agregar `data-i18n` en elementos con texto, actualizar lang/og:locale dinámicamente
- [x] Todas las sections HTML -- Agregar atributo `data-i18n` a cada elemento con texto visible

**Acceptance Criteria:**
- Given que el sitio carga sin `eb-lang` en localStorage, when se renderiza, then el idioma mostrado coincide con `navigator.language` (o inglés si no es EN/ES)
- Given que el sitio está en español, when el usuario hace click en "EN" del footer, then todo el texto visible cambia a inglés y `eb-lang = "en"` en localStorage
- Given que el sitio está en inglés, when el usuario recarga la página, then el sitio permanece en inglés
- Given que el sitio está en inglés, when el usuario hace click en "ES", then todo el texto visible cambia a español y `eb-lang = "es"` en localStorage
- Given que el idioma cambia, when se actualiza, then `html[lang]` y `meta[og:locale]` reflejan el nuevo idioma

## Spec Change Log

## Design Notes

Los elementos HTML con texto visible llevan `data-i18n="clave"`. El módulo i18n itera `[data-i18n]` y reemplaza `textContent` según el idioma activo. Elementos con HTML interno (ej. enlaces con `target`) usan un wrapper span con `data-i18n`.

Estructura de archivos JSON:
```json
{
  "hero.title": "Organiza tus compras y agrupa por tiendas",
  "hero.subtitle": "EasyBuy te permite crear listas de compras con precios por establecimiento.",
  "header.download": "Descargar APK"
}
```

Selector ES | EN activo se destaca visualmente: **ES** | EN o ES | **EN**.

`navigator.language` detecta el idioma base (ej. "en-US" → "en"). Si no es "en" ni "es" → default "en".

## Suggested Review Order

**Core i18n Engine**

- Módulo central: detección de idioma, persistencia, aplicación de traducciones y meta tags
  [`index.js:3`](../../src/i18n/index.js#L3)

- Manejo seguro de localStorage en modo privado
  [`index.js:14`](../../src/i18n/index.js#L14)

- Inicialización con clase i18n-ready para prevenir FOUC
  [`index.js:93`](../../src/i18n/index.js#L93)

**Translation Data**

- Traducciones al español (todas las claves)
  [`es.json:1`](../../src/i18n/es.json#L1)

- Traducciones al inglés
  [`en.json:1`](../../src/i18n/en.json#L1)

**Integration**

- Import e inicialización de i18n tras renderizar secciones
  [`main.js:7`](../../src/main.js#L7)

**Views with data-i18n**

- Hero: títulos, CTAs, alt text del mockup
  [`hero.html:4`](../../src/sections/hero.html#L4)

- Feature destacada: título y subtítulo
  [`feature.html:4`](../../src/sections/feature.html#L4)

- Features zig-zag: 4 bloques con títulos, descripciones y alt text
  [`features.html:6`](../../src/sections/features.html#L6)

- CTA intermedio: título y botón
  [`cta.html:4`](../../src/sections/cta.html#L4)

- Footer: selector ES | EN, enlaces legales, copyright y QR alt
  [`footer.html:2`](../../src/sections/footer.html#L2)

**FOUC Prevention**

- CSS: oculta data-i18n hasta que JS marque i18n-ready
  [`style.css:8`](../../src/style.css#L8)

**HTML Shell**

- Meta tag og:locale, title con data-i18n, header APK link
  [`index.html:14`](../../src/index.html#L14)

## Verification

**Commands:**
- `npm run build` -- build exitoso sin errores
- `npm run dev` -- servidor dev inicia sin errores

**Manual checks:**
- Abrir sitio sin localStorage: detecta idioma del browser
- Cambiar idioma con selector: todo el texto cambia
- Recargar página: preferencia persiste
- Meta tags y `lang` attribute se actualizan al cambiar idioma
