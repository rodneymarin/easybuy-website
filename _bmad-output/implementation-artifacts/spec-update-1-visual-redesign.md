---
title: 'Update 1 — Rediseño visual landing page'
type: 'feature'
created: '2026-07-21'
status: 'done'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** La landing page actual tiene espaciado excesivo, falta de header, fondo blanco genérico, botones con poco radio, tipografía con peso insuficiente, URLs placeholder, y footer en color intermedio en vez de negro.

**Approach:** Aplicar un rediseño visual completo: agregar header con logo + CTA, fondos gris muy claro en header/hero con separación visual, reducir espaciado entre secciones ~50% (py-24→py-12/14), cambiar botones a estilo cápsula, aumentar pesos de fuente a 800 (font-extrabold), texto secundario en negro, igualar tamaño de títulos de la sección features al de feature destacada, cambiar footer a negro con texto blanco, y actualizar URLs de CTAs. Footer links a "#" por ser demo. URLs de CTAs hardcodeadas a destinos finales.

## Boundaries & Constraints

**Always:**
- Usar solo clases estándar de Tailwind v4 — sin valores manuales en píxeles
- Mantener la estructura modular de HTML partials en `src/sections/`
- Mantener el patrón de acumulación `[sections].join('')` en main.js
- Mantener color primary `#4a5df9` vía `--color-primary` en `@theme`
- Mantener tipografía Inter (Google Fonts con pesos 400-800)
- Los SVGs y assets se sirven desde `/` (publicDir: 'assets')
- Sin modo oscuro, sin analytics, sin framework JS de runtime

**Ask First:**
- Ninguna

**Never:**
- No cambiar la estructura de archivos del proyecto
- No modificar vite.config.js
- No agregar dependencias npm nuevas
- No cambiar el contenido textual de las secciones (solo estilos)
- No usar `!important` en CSS

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Header en mobile | Viewport < 640px | Logo + CTA en misma fila, espaciado horizontal, sin desborde | No scroll horizontal |
| Botones cápsula en todos los CTAs | Cualquier botón CTA | `rounded-full` aplicado consistentemente | N/A |
| Footer negro con texto blanco | Footer renderizado | Fondo `bg-black`, texto `text-white`/`text-gray-300` en enlaces | N/A |
| URLs de CTAs actualizadas | Click en CTA web o APK | Navega a las URLs correctas | Links con `target="_blank" rel="noopener noreferrer"` |
| Separación header/hero | Ambos renderizados | Border-bottom `border-gray-200` en header evita fusión visual | N/A |
| Font weight 800 cargado | Google Fonts link | `font-extrabold` renderiza nativamente sin síntesis | N/A |

</frozen-after-approval>

## Code Map

- `src/sections/hero.html` — Fondo gris claro, CTAs URLs reales, botones cápsula, peso 800, texto negro, border-bottom en header
- `src/sections/feature.html` — Reducir espaciado vertical (py-12), peso 800, texto negro, max-w-5xl
- `src/sections/features.html` — Reducir espaciado vertical (py-12), títulos text-3xl, peso 800, texto negro, max-w-5xl, gap-12
- `src/sections/cta.html` — Botón cápsula, URL web real, py-12, max-w-5xl
- `src/sections/footer.html` — Fondo negro, texto blanco/gris-300, links a "#", py-12, max-w-5xl
- `index.html` — Header con logo + CTA APK, fondo gris claro, max-w-5xl, separador border-gray-200
- `src/style.css` — Google Fonts actualizado con weight 800

## Tasks & Acceptance

**Execution:**
- [x] `src/style.css` — Google Fonts link actualizado a `wght@400;500;600;700;800`
- [x] `index.html` — Header insertado con logo `h-24` (3x), CTA APK derecho, fondo `bg-gray-50` full-width, contenido `max-w-5xl`, seamless sin borde inferior
- [x] `src/sections/hero.html` — `bg-gray-50`, `py-12` (sin min-h-screen), `font-extrabold`, `text-gray-900`, CTAs `rounded-full`, URLs reales, `max-w-5xl`
- [x] `src/sections/feature.html` — `py-12`, `font-extrabold`, `text-gray-900`, `max-w-5xl`
- [x] `src/sections/features.html` — `py-12`, todos los bloques `lg:flex-row` (texto izq, img der, sin reverse), títulos `text-3xl sm:text-4xl lg:text-5xl tracking-tight`, `font-extrabold`, `text-gray-900`, `max-w-5xl`, gap `gap-12`
- [x] `src/sections/cta.html` — `rounded-full`, URL web real, `py-14`, `max-w-5xl`, fondo `bg-gray-50`, título `text-gray-900`, botón `bg-primary text-white`
- [x] `src/sections/footer.html` — `bg-black`, `text-gray-300` enlaces, links a `#`, `py-12`, `max-w-5xl`

**Acceptance Criteria:**
- Given la landing page cargada, when se visualiza el header, entonces tiene logo grande (h-24) a izquierda y CTA APK a derecha sobre fondo gris claro full-width seamless con hero
- Given la landing page cargada, when se visualiza el hero, entonces tiene fondo gris claro y altura reducida (py-12, sin full viewport)
- Given cualquier botón CTA en la página, when se inspecciona, entonces tiene clase `rounded-full` (estilo cápsula)
- Given los títulos de sección, when se inspeccionan, entonces usan `font-extrabold`
- Given el footer, when se visualiza, entonces tiene fondo negro con texto blanco y enlaces apuntan a `#`
- Given un click en CTA "Usar versión web", when se sigue el enlace, entonces navega a `https://easybuy.rodneymarin.com/`
- Given un click en CTA "Descargar APK", when se sigue el enlace, entonces navega a `https://tyrpayj0fal1ajop.public.blob.vercel-storage.com/app-release.apk`
- Given la página en viewport mobile (320px) y desktop (1920px), when se inspecciona, entonces no hay scroll horizontal ni roturas de layout
- Given carga de fuentes, when `font-extrabold` se usa, entonces renderiza nativamente (Google Fonts weight 800 cargado)

## Spec Change Log

- **Iteración 1 (2026-07-21):** Hallazgos de review → ajustes fuera de `<frozen>`:
  1. Footer links a `#` confirmado como intención (demo) — KEEP
  2. URLs CTAs hardcodeadas a destinos finales — KEEP
  3. Google Fonts weight 800 agregado a link en index.html — KEEP
  4. Separador visual header/hero con `border-b border-gray-200` — KEEP (luego revertido en iteración 2)
  5. Espaciado ajustado: py-24→py-12 (features, hero py-14 inicial), gap features 20→12 — KEEP
  6. max-w-5xl unificado en todas las secciones — KEEP

- **Iteración 2 (2026-07-21):** Ajustes directos del usuario:
  1. Features h3 subidos a `text-3xl sm:text-4xl lg:text-5xl tracking-tight` — KEEP
  2. Logo header aumentado de h-8 a h-24 (~3x), header py de py-4 a py-6 — KEEP
  3. `border-b` eliminado del header, ahora seamless con hero — KEEP
  4. Hero `min-h-screen` eliminado, reemplazado con `py-12` como demás secciones — KEEP

- **Iteración 3 (2026-07-21):** Ajustes adicionales del usuario:
  1. Features: todos los bloques ahora `lg:flex-row` (texto izquierda, imagen derecha), sin alternancia — KEEP
  2. CTA section: `bg-primary` → `bg-gray-50`, título `text-white` → `text-gray-900`, botón outline blanco → `bg-primary text-white` sólido — KEEP

- **Iteración 4 (2026-07-21):** Ajustes de proporción:
  1. Header padding `py-6` → `py-3` (~40% menos altura)
  2. Logo `h-24` → `h-16` (~30% menos tamaño)
  3. Features section width reducido 25%: `max-w-5xl` → `max-w-3xl` (768px)

**Known-bad state avoided:** Footer links funcionales rotos (resuelto con intención demo #), header-hero fusión visual (resuelto border), font-weight 800 síntesis (resuelto Google Fonts weight 800).

## Design Notes

- `max-w-5xl` (1024px) elegido como estándar Tailwind más cercano a 960px solicitado
- `py-12` reduce ~50% del py-24 original, cumpliendo objetivo ~60% reducción percibida
- `font-extrabold` (800) disponible nativamente en Tailwind v4 + Google Fonts
- Footer links a `#` es decisión de demo; para producción cambiar a URLs reales

## Verification

**Commands:**
- `npm run build` — expected: exit 0, dist/ generada sin errores
- `npm run dev` — expected: servidor inicia sin errores

**Manual checks (if no CLI):**
- Inspeccionar header, hero, features, cta, footer en navegador en 320px y 1920px
- Verificar URLs de CTAs apuntan a los destinos correctos
- Verificar footer enlaces apuntan a `#`
- Verificar `font-extrabold` renderiza sin síntesis (DevTools → Computed → font-weight: 800)
