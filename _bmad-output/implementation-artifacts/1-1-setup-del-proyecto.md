---
baseline_commit: NO_VCS
---

# Story 1.1: Setup del proyecto

Status: done

## Story

Como desarrollador,
quiero inicializar el proyecto con Vite + Tailwind + estructura de directorios,
para tener la base sobre la cual construir las secciones del sitio.

## Acceptance Criteria

1. **Given** que ejecuto `npm create vite@latest . -- --template vanilla`,
   **When** el asistente completa la creación,
   **Then** el proyecto tiene `package.json`, `index.html`, `vite.config.js` y `src/main.js`.

2. **Given** el proyecto Vite creado,
   **When** instalo Tailwind CSS v4 (`npm install tailwindcss @tailwindcss/vite`),
   **Then** `src/style.css` contiene `@import "tailwindcss"` y el `vite.config.js` importa y usa `@tailwindcss/vite`.

3. **Given** Tailwind CSS configurado,
   **When** defino el color primary `#4a5df9` en `src/style.css` usando `@theme { --color-primary: #4a5df9; }`,
   **Then** `primary` está disponible como clase utilitaria `bg-primary`, `text-primary`, etc.

4. **Given** la estructura de archivos definida en Architecture Spine,
   **When** creo las carpetas `src/sections/`, `src/assets/`,
   **Then** la estructura coincide con el spine:
   ```
   src/
     sections/       # partials HTML
     assets/         # SVGs, imágenes, QR
     style.css       # Tailwind + theme
     main.js         # JS mínimo
   ```

5. **Given** tipografía Inter,
   **When** agrego la importación en `index.html` via Google Fonts (`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">`),
   **Then** `font-family: 'Inter', sans-serif;` está disponible globalmente.

6. **Given** el proyecto configurado,
   **When** ejecuto `npm run dev`,
   **Then** el servidor de desarrollo inicia sin errores y la página se ve en el navegador.

7. **Given** el proyecto funcionando en dev,
   **When** ejecuto `npm run build`,
   **Then** se genera la carpeta `dist/` con `index.html`, assets y CSS compilado.

## Tasks / Subtasks

- [x] Inicializar Vite con template vanilla (AC: #1)
- [x] Instalar y configurar Tailwind CSS v4 con `@tailwindcss/vite` (AC: #2)
- [x] Definir tema: color primary `#4a5df9` en `@theme` (AC: #3)
- [x] Crear estructura de directorios `src/sections/`, `src/assets/` (AC: #4)
- [x] Importar tipografía Inter en `index.html` (AC: #5)
- [x] Verificar `npm run dev` funciona (AC: #6)
- [x] Verificar `npm run build` produce `dist/` (AC: #7)

## Dev Notes

- Usar `npm create vite@latest` con template `vanilla` (sin framework).
- Tailwind CSS v4 usa configuración CSS-first con `@import "tailwindcss"` y `@theme`, NO `tailwind.config.js` (obsoleto en v4). El plugin `@tailwindcss/vite` reemplaza a PostCSS.
- El color primary se define en `src/style.css`:
  ```css
  @import "tailwindcss";
  @theme {
    --color-primary: #4a5df9;
  }
  ```
- `vite.config.js` debe incluir:
  ```js
  import { defineConfig } from 'vite'
  import tailwindcss from '@tailwindcss/vite'

  export default defineConfig({
    plugins: [tailwindcss()],
  })
  ```
- NO crear componentes JS, NO instalar React/Vue/Svelte, NO usar PostCSS manual.
- El QR code no se genera en esta historia — se hará en Story 1.5.
- Las ilustraciones SVG tampoco — se harán en Story 1.4.

### Project Structure Notes

```
easybuy-website/
├── index.html              # Raíz con meta tags + Google Fonts
├── package.json
├── vite.config.js
├── src/
│   ├── style.css           # Tailwind + @theme
│   ├── main.js             # Mínimo (vacío por ahora)
│   ├── sections/           # Partiales HTML (futuras stories)
│   └── assets/             # SVGs, imágenes (futuras stories)
└── dist/                   # Salida de build
```

### References

- [Source: Architecture Spine (AD-1, AD-2, AD-7)](/_bmad-output/planning-artifacts/architecture/architecture-EasyBuy-2026-07-21/ARCHITECTURE-SPINE.md)
- [Source: PRD (FR-9 Identidad visual)](/_bmad-output/planning-artifacts/prds/prd-EasyBuy-2026-07-21/prd.md)
- Vite docs: https://vite.dev/guide/
- Tailwind CSS v4 Vite setup: https://tailwindcss.com/docs/installation/using-vite
- Inter Google Fonts: https://fonts.google.com/specimen/Inter

## Dev Agent Record

### Agent Model Used

opencode/deepseek-v4-flash-free

### Debug Log References

- `npm create vite@latest` falló porque el directorio no estaba vacío → se usó scaffolding manual
- `publicDir: 'assets'` en vite.config.js para que Vite sirva logo.svg y project-screenshots.png desde la raíz
- `@tailwindcss/vite` v4.3.3 instalado, sin PostCSS ni tailwind.config.js

### Completion Notes List

- ✅ Proyecto Vite 6.4.3 + vanilla inicializado (package.json, vite.config.js, index.html, src/main.js)
- ✅ Tailwind CSS 4.3.3 + @tailwindcss/vite instalados y configurados
- ✅ Color primary #4a5df9 definido en @theme
- ✅ Tipografía Inter importada vía Google Fonts + configurada como font-sans por defecto
- ✅ Directorios src/sections/ y src/assets/ creados
- ✅ npm run dev: servidor inicia correctamente en localhost:5173
- ✅ npm run build: dist/ generado con index.html, assets CSS/JS, logo.svg y project-screenshots.png

### File List
- `package.json` (creado por Vite, modificado con Tailwind dependency)
- `vite.config.js` (creado por Vite, modificado con plugin Tailwind)
- `index.html` (creado por Vite, modificado con Google Fonts)
- `src/style.css` (creado, contiene Tailwind + @theme)
- `src/main.js` (creado por Vite, vacío)
- `src/sections/` (directorio creado, vacío)
- `src/assets/` (directorio creado, vacío)

## Change Log

- 2026-07-21: Story implementada y marcada para review. Scaffolding manual de Vite, Tailwind v4, Inter, estructura de directorios.
