# Normaluz Art & Deco

Sitio de la vidrieria Normaluz Art & Deco, Montevideo. Estatico, una sola
pagina.

## Estado: solo portfolio

**El dominio `normaluzartdeco.com` vencio y quedo tomado por un parking de
dominios.** El cliente no lo renovo y ya no es cliente activo.

El sitio se mantiene online en **https://normaluz.pages.dev** para mostrarlo en
el portfolio de jperez.pro. Todas las URLs absolutas del repo (canonical,
`og:url`, `twitter:*`, JSON-LD, `sitemap.xml`, `robots.txt`) apuntan ahi.

No volver a poner `normaluzartdeco.com` en ningun lado: ese dominio ya no es
nuestro y hoy sirve contenido de terceros.

## Deploy

Cloudflare Pages, proyecto `normaluz`. **Push a `main` despliega solo.**
El proyecto no tiene dominios personalizados: se quito el de
`normaluzartdeco.com`, que habia quedado como configuracion muerta.

## Estructura

- `index.html` - la pagina completa
- `style.css` / `script.js` - estilos y galeria filtrable
- `images/` - fotos de trabajos; `og-image.jpg` es la imagen para redes
  (recorte 1.91:1 de un vidrio grabado propio)

## Mantenimiento

- La imagen de redes (`og:image`) debe ser **URL absoluta**: los scrapers de
  WhatsApp, Facebook y X no resuelven rutas relativas.
- Cubierto por el QA de `browser-automation` (sitio `normaluz`).

Local: `python -m http.server 8080`
