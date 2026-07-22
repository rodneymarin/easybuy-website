---
title: PRD EasyBuy Website
status: final
created: 2026-07-21
updated: 2026-07-21
---

# PRD: EasyBuy Website

## 0. Document Purpose

Este PRD define los requisitos para la página de producto (landing page) de EasyBuy — una app de listas de compras multi-tienda ya en producción. Está dirigido al desarrollador (Rod) como guía de implementación y alimenta los flujos downstream de arquitectura, épicas e historias. Los requisitos se agrupan por secciones del sitio con FRs anidadas.

## 1. Vision

EasyBuy Website es una landing page single-page moderna, limpia y profesional que presenta EasyBuy como un producto listo para usar. Comunica en segundos el valor central — compras organizadas en múltiples tiendas con precios por establecimiento — y mantiene al visitante dentro de un embudo de conversión sin páginas secundarias. Sirve como carta de presentación para reclutadores y dueños de negocio, con la apariencia de un lanzamiento público dirigido a consumidores.

## 2. Target User

### 2.1 Jobs To Be Done

- Como reclutador técnico, quiero evaluar la calidad del producto y su presentación para juzgar las capacidades del desarrollador.
- Como dueño de negocio, quiero entender rápidamente qué hace EasyBuy y por qué es diferente para considerar su potencial.
- Como consumidor, quiero organizar mis compras en varias tiendas y controlar precios — necesito saber si EasyBuy resuelve mi problema antes de descargarla.

### 2.2 Non-Users (v1)

- Usuarios que buscan una app de recetas o meal planning.
- Usuarios que solo compran en un único supermercado y no necesitan multi-tienda.

### 2.3 Key User Journeys

- **UJ-1. Reclutador evalúa el producto.**
  - **Persona + contexto:** Reclutador técnico que recibe un enlace al portafolio de Rod. Llega al sitio sin contexto previo.
  - **Entry state:** Sin autenticar. Llega al Hero.
   - **Path:** Hero → entiende el producto en segundos → scrollea features → ve mockups → footer.
  - **Climax:** Decide si el nivel de calidad del sitio refleja las habilidades que busca.
  - **Resolution:** Cierra el sitio o visita los enlaces de descarga/redes.

- **UJ-2. Consumidor descubre EasyBuy.**
  - **Persona + contexto:** Persona que compra en 2-3 tiendas distintas por semana, frustrada con apps de listas básicas.
  - **Entry state:** Sin autenticar. Llega al Hero.
   - **Path:** Hero → feature destacada multi-tienda → features zig-zag → CTA intermedio → footer.
  - **Climax:** Comprende que EasyBuy resuelve su problema de precios por tienda.
  - **Resolution:** Escanea QR o hace clic en CTA para descargar/acceder.

## 3. Glossary

- **Landing Page** — Sitio web de una sola página sin navegación interna.
- **Hero** — Sección inicial superior con titular, subtítulo y mockup.
- **CTA (Call to Action)** — Elemento interactivo que invita al usuario a descargar o acceder.
- **Mockup** — Imagen compuesta de capturas de pantalla de la app (project-screenshots.png).
- **Feature Destacada** — Bloque de texto titular que comunica el diferenciador multi-tienda.
- **Zig-zag** — Patrón de disposición alternado (texto izquierda/imagen derecha, luego viceversa).
- **QR de descarga** — Código QR que enlaza al APK o versión web.
- **Multi-tienda** — Capacidad de gestionar productos con precios diferentes según el establecimiento.
- **Modo Local** — Almacenamiento en base de datos local del dispositivo sin cuenta.
- **Modo Nube** — Almacenamiento remoto con cuenta de usuario.

## 4. Features

### 4.1 Hero

**Descripción:** Primera sección del sitio. Fondo blanco con un layout de dos columnas: texto hero a la izquierda (titular + subtítulo + CTA primario) y mockup de la app a la derecha (`/assets/project-screenshots.png`). Realiza UJ-1, UJ-2.

**Functional Requirements:**

#### FR-1: Hero layout

El sitio muestra una sección Hero con titular claro ("Organiza tus compras en varias tiendas" o similar), subtítulo explicativo y un botón CTA primario hacia la versión web o APK. A la derecha se muestra la imagen mockup sin distorsión. Realiza UJ-1, UJ-2.

**Consequences (testable):**
- El Hero ocupa el viewport completo en el primer ingreso.
- La imagen mockup mantiene su relación de aspecto en todos los breakpoints.
- El CTA es un `<a>` o `<button>` funcional.

#### FR-2: CTAs del Hero

El Hero incluye dos botones CTA: uno para acceder a la versión web y otro para descargar el APK Android. Deben ser visualmente distinguibles (ej. primary y secondary/outline). Realiza UJ-1, UJ-2.

**Consequences (testable):**
- Ambos enlaces abren el destino en una nueva pestaña o redirigen.
- Los botones son distinguibles visualmente.

### 4.2 Feature Destacada

**Descripción:** Bloque de texto intermedio que comunica el diferenciador central de EasyBuy: productos con precios por tienda. Solo texto titular — sin imagen ni ilustración. Colocado entre Hero y la sección zig-zag.

**Functional Requirements:**

#### FR-3: Feature destacada

El sitio incluye una sección con un titular de énfasis (tipo "hero text" o display) explicando la capacidad multi-tienda con precios por establecimiento. Centrado, con espaciado generoso.

**Consequences (testable):**
- El texto usa la tipografía Inter en un tamaño mayor que el cuerpo.
- La sección es visualmente distinta al Hero y las features zig-zag.

### 4.3 Features Zig-Zag

**Descripción:** Bloques individuales en patrón zig-zag (imagen + texto alternados) detallando las funcionalidades principales. Contiene 4 bloques:

1. **Crear múltiples listas** — Captura mostrando la gestión de listas.
2. **Maestro de productos** — Catálogo personalizable de productos.
3. **Asignar tienda** — Asignación de cada producto a una tienda específica.
4. **Modo local / nube** — Flexibilidad de almacenamiento sin cuenta o con cuenta remota.

Realiza UJ-1, UJ-2.

**Functional Requirements:**

#### FR-4: Bloques zig-zag

Cada bloque contiene una ilustración vectorial conceptual (no screenshots reales) y texto descriptivo. El patrón se alterna: bloque 1 imagen izquierda → texto derecha, bloque 2 imagen derecha → texto izquierda, etc.

**Consequences (testable):**
- Cada bloque ocupa el ancho completo en mobile (stack vertical).
- En desktop los bloques se alternan en zig-zag horizontal.

#### FR-5: Contenido de cada bloque

- **FR-5.1 (Múltiples listas):** Texto que explica la creación y organización de listas independientes.
- **FR-5.2 (Maestro productos):** Texto que explica el catálogo de productos.
- **FR-5.3 (Asignar tienda):** Texto que explica la asignación de tienda a cada producto.
- **FR-5.4 (Local/nube):** Texto que explica la flexibilidad de almacenamiento.

**Consequences (testable):**
- Cada FR-5.x tiene su propio bloque visual distinguible.

### 4.4 CTA Intermedio

**Descripción:** Un cuadro destacado (tipo banner) llamando a la acción. Visualmente resalta sobre el fondo blanco usando el color primary `#4a5df9` o una variante.

**Functional Requirements:**

#### FR-6: CTA intermedio

Sección tipo banner con texto convincente y un botón CTA secundario. Colocado entre la última feature zig-zag y el footer.

**Consequences (testable):**
- El banner usa el color primary `#4a5df9` como fondo o acento.
- El CTA es funcional y distinguishable.

### 4.5 Footer

**Descripción:** Footer con fondo oscuro que contiene QR de descarga, enlace de descarga directa (URL) y enlaces legales (aviso de privacidad, términos).

**Functional Requirements:**

#### FR-7: Footer oscuro

El footer usa un fondo oscuro (`[ASUNCIÓN: #1a1a2e, #0f0f23, o similar]`) con texto claro. Contiene:

- QR code para descarga/acceso.
- URL de descarga directa (texto enlazado).
- Enlaces legales (términos, privacidad).
- Copyright / créditos.

**Consequences (testable):**
- El QR es escaneable y resuelve a la descarga/acceso.
- Todos los enlaces son funcionales.

### 4.6 Diseño General

**Functional Requirements:**

#### FR-8: Diseño responsive

El sitio se ve correctamente en mobile (320px+) y desktop (1920px). No hay roturas de layout, contenido cortado, ni scroll horizontal.

**Consequences (testable):**
- Layout fluido en todos los breakpoints.
- Imágenes mantienen relación de aspecto.

#### FR-9: Identidad visual

Color primary `#4a5df9`, fondo blanco general, tipografía Inter (todas las variantes necesarias). Sin modo oscuro en v1.

**Consequences (testable):**
- CSS utiliza `#4a5df9` como color primario.
- Inter cargada y aplicada globalmente (Google Fonts o self-hosted).

## 5. Non-Goals (Explicit)

- No es un sitio multi-página. No habrá About, Contact, Blog ni páginas secundarias.
- No incluye autenticación, backend, ni formularios con envío de datos.
- No incluye integración directa con la API de la app.
- No incluye animaciones complejas (parallax, 3D, etc.).
- No incluye modo oscuro en v1.
- No incluye analytics ni tracking.
- `[ASUNCIÓN: No incluye SEO avanzado ni meta tags extensivos — solo lo básico (title, description, Open Graph).]`

## 6. MVP Scope

### 6.1 In Scope

- Hero con mockup y CTA primario
- Feature destacada (texto: multi-tienda + precios por tienda)
- 4 bloques zig-zag (múltiples listas, maestro productos, asignar tienda, local/nube)
- CTA intermedio (banner)
- Footer oscuro con QR, URL descarga, enlaces legales
- Diseño responsive + color primary `#4a5df9` + tipografía Inter

### 6.2 Out of Scope for MVP

- Modo oscuro — diferido a v2
- Páginas secundarias (About, Contact, Blog) — no planeadas
- Integración API con la app — no planeada
- Animaciones complejas — no planeadas


## 7. Success Metrics

**SM-1**: El sitio comunica el valor de EasyBuy en los primeros segundos (confirmación cualitativa). Valida FR-1, FR-3.

**SM-2**: El diseño se percibe como moderno, limpio y profesional — acorde a una app en producción (revisión de portafolio). Valida FR-8, FR-9.

## 8. Open Questions

*(Sin preguntas abiertas pendientes.)*

## 9. Assumptions Index

- §4.5 (FR-7): Color de fondo del footer oscuro — asumo `#1a1a2e` o similar.
- §5: SEO básico incluido — title, description, Open Graph tags.
