# 📐 Análisis de Rediseño y Lista de Correcciones para EasyBuy

A continuación se detalla la revisión técnica punto por punto con los cambios y ajustes de diseño requeridos para elevar la calidad visual, la jerarquía y la estructura general de la landing page de EasyBuy.

---

## Layout general
- **Ancho:**
	El ancho máximo del layout principal (de cada sección) debería estar alredero de los 960px. Coloca un valor cercano que sea compatible con las clases estandar de Tailwind - no usar valores manuales en píxeles.
- **Espaciado:**
	El espaciado entre cada sección debe reducirse aproximadamente en un 60%.

## Header y Navegación Principal
-	La página debe tener un header que tendrá el logo de la app en el extremo izquierdo, limitado por el ancho del contenido y en el extremo derecho, un CTA de color primario para descargar la App en APK.
- Debe tener un color de fondo gris muy claro y ese color debe filtrarse hasta el ancho total de la pantalla.

## Hero
- El hero debe tener un color de fondo gris muy claro, el mismo que el header y ese color debe filtrarse hasta el ancho total de la pantalla.

## Tipografía y estilos
- El peso de las fuentes para los titulares debería ser mayor, quizas 800 o 900.
- El color de los textos secundarios / contenido debe ser también negro como los títulos.
- La fuente de los titulos de la sección zig-zag debe ser mas grande. Tan grande como el título de la sección que lo precede.

## Botones
- Todos los botones/ctas debe tener estilo cápsula, se decir, con esquinas redondeadas full.

## Footer
- Hagamos el footer en color de fondo negro y letras blancas.
- Los links del footer apuntarán a "#"

## CTAs
- Los CTAs para usar la versión Web deben apuntar a este link: https://easybuy.rodneymarin.com/
- Los CTAs para descargar el APK deben apuntar a: https://tyrpayj0fal1ajop.public.blob.vercel-storage.com/app-release.apk
