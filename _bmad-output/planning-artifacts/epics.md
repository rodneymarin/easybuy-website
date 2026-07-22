---
stepsCompleted:
  - step-01-validate-prerequisites
  - step-02-design-epics
  - step-03-create-stories
  - step-04-final-validation
inputDocuments:
  - _bmad-output/planning-artifacts/prds/prd-EasyBuy-2026-07-21/prd.md
  - _bmad-output/planning-artifacts/architecture/architecture-EasyBuy-2026-07-21/ARCHITECTURE-SPINE.md
---

# EasyBuy - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for EasyBuy, decomposing the requirements from the PRD and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

- **FR-1 (Hero layout):** El sitio muestra una sección Hero con titular claro, subtítulo explicativo y mockup de la app. El Hero ocupa el viewport completo en el primer ingreso.
- **FR-2 (CTAs del Hero):** Dos botones CTA en Hero: uno para versión web y otro para APK Android. Visualmente distinguibles (primary + secondary).
- **FR-3 (Feature destacada):** Bloque de texto titular que comunica el diferenciador multi-tienda con precios por establecimiento. Centrado, espaciado generoso, tipografía Inter mayor al cuerpo.
- **FR-4 (Bloques zig-zag):** 4 bloques en patrón alternado (izquierda/derecha) con ilustración vectorial conceptual + texto descriptivo. Stack vertical en mobile.
- **FR-5 (Contenido de bloques):** FR-5.1 Múltiples listas, FR-5.2 Maestro productos, FR-5.3 Asignar tienda, FR-5.4 Modo local/nube. Cada bloque visualmente distinguible.
- **FR-6 (CTA intermedio):** Banner con texto convincente y botón CTA secundario, entre zig-zag y footer. Usa color primary `#4a5df9`.
- **FR-7 (Footer oscuro):** Footer con fondo oscuro, QR code, URL descarga, enlaces legales, copyright.
- **FR-8 (Diseño responsive):** Correcto en mobile (320px+) y desktop (1920px). Sin roturas de layout ni scroll horizontal.
- **FR-9 (Identidad visual):** Color primary `#4a5df9`, fondo blanco, tipografía Inter. Sin modo oscuro en v1.

### NonFunctional Requirements

- **NFR-1 (Performance):** Sitio estático sin backend ni runtime. Build con Vite produce carpeta `dist/` para deploy inmediato.
- **NFR-2 (Compatibilidad):** Diseño responsive mobile-first con breakpoints Tailwind por defecto.
- **NFR-3 (SEO):** Meta tags básicos en `<head>`: title, description, Open Graph tags básicos. Sin analytics ni tracking.

### Additional Requirements

- **AR-1:** Proyecto usa Vite + vanilla HTML/CSS/JS — sin framework JS de runtime.
- **AR-2:** Estilos con Tailwind CSS. Color primary configurado en `tailwind.config.js`.
- **AR-3:** Assets (ilustraciones zig-zag, logo, QR) como archivos `.svg` externos en `/src/assets/`. Nunca SVG inline.
- **AR-4:** Secciones del sitio como HTML partials modulares en `/src/sections/`. Index importa vía Vite.
- **AR-5:** QR code generado estáticamente como `/src/assets/qr.svg`.
- **AR-6:** Deploy estático: `vite build` produce `dist/` portable.
- **AR-7:** Estructura de archivos definida en Architecture Spine.
- **AR-8:** Convenciones de naming: kebab-case para archivos, BEM con prefijo `eb-` para IDs/clases.

### UX Design Requirements

*No aplica — no se creó documento UX.*

### FR Coverage Map

| Requisito | Épica | Descripción |
|---|---|---|
| FR-1 (Hero layout) | Epic 1 | Hero con titular, subtítulo, mockup |
| FR-2 (CTAs del Hero) | Epic 1 | Dos botones CTA (web + APK) |
| FR-3 (Feature destacada) | Epic 1 | Bloque titular multi-tienda |
| FR-4 (Bloques zig-zag) | Epic 1 | 4 bloques alternados con ilustraciones |
| FR-5 (Contenido bloques) | Epic 1 | FR-5.1 a FR-5.4 (listas, productos, tienda, nube) |
| FR-6 (CTA intermedio) | Epic 1 | Banner con CTA secundario |
| FR-7 (Footer oscuro) | Epic 1 | Footer con QR, descarga, legales |
| FR-8 (Diseño responsive) | Epic 1 | Mobile + desktop |
| FR-9 (Identidad visual) | Epic 1 | Primary #4a5df9, Inter, fondo blanco |

## Epic List

### Epic 1: Landing Page EasyBuy
Sitio completo: setup inicial (Vite + Tailwind + assets + estructura), Hero con mockup y CTAs, Feature destacada multi-tienda, 4 bloques zig-zag con ilustraciones vectoriales, CTA intermedio, Footer oscuro con QR, diseño responsive, identidad visual y SEO básico. Al finalizar el sitio es completamente navegable y desplegable.
**FRs cubiertos:** FR-1, FR-2, FR-3, FR-4, FR-5, FR-6, FR-7, FR-8, FR-9

### Story 1.1: Setup del proyecto

Como desarrollador,
quiero inicializar el proyecto con Vite + Tailwind + estructura de directorios,
para tener la base sobre la cual construir las secciones.

**Criterios de aceptación:**

**Dado** que ejecuto `npm create vite@latest`,
**Cuando** configuro Tailwind con primary `#4a5df9` y creo `src/sections/`, `src/assets/`,
**Entonces** el proyecto compila sin errores y la estructura de archivos coincide con el Architecture Spine.

### Story 1.2: Hero section

Como visitante,
quiero ver un Hero con titular claro, mockup de la app y dos botones de descarga,
para entender qué es EasyBuy y cómo acceder.

**Criterios de aceptación:**

**Dado** el sitio cargado,
**Cuando** veo el Hero,
**Entonces** el titular es visible, el mockup mantiene relación de aspecto, y hay dos CTAs (web + APK) funcionales y visualmente distinguibles.

### Story 1.3: Feature destacada

Como visitante,
quiero leer un bloque destacado sobre multi-tienda con precios por establecimiento,
para entender el diferenciador central de EasyBuy.

**Criterios de aceptación:**

**Dado** el sitio,
**Cuando** scrolleo debajo del Hero,
**Entonces** veo un bloque de texto centrado con tipografía display que comunica la feature multi-tienda.

### Story 1.4: Features zig-zag

Como visitante,
quiero ver 4 bloques alternados con ilustraciones y texto sobre listas, productos, tiendas y nube,
para conocer las funcionalidades de la app.

**Criterios de aceptación:**

**Dado** el sitio,
**Cuando** scrolleo a la sección zig-zag,
**Entonces** veo 4 bloques en patrón alternado con ilustraciones SVG desde `/src/assets/`, cada bloque con texto descriptivo.

### Story 1.5: CTA intermedio + Footer

Como visitante,
quiero ver un banner CTA y un footer oscuro con QR y enlaces,
para tener un llamado a la acción y acceder a descarga e información legal.

**Criterios de aceptación:**

**Dado** el sitio,
**Cuando** scrolleo al final,
**Entonces** veo un banner con primary color y un footer oscuro con QR escaneable, URL descarga, enlaces legales y copyright.

### Story 1.6: SEO + Polish final

Como reclutador,
quiero que el sitio tenga meta tags básicos y se vea bien en mobile y desktop,
para que sea presentable como producto profesional.

**Criterios de aceptación:**

**Dado** el sitio,
**Cuando** reviso el `<head>`,
**Entonces** tiene title, description y Open Graph tags.
**Y** cuando lo veo en 320px y 1920px, no hay roturas de layout.
