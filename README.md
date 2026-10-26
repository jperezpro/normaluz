# Normaluz Art & Deco — sitio web

Sitio de una sola página para **Normaluz Art & Deco**, vidriería de Montevideo: vidrios a medida, claraboyas, espejos decorativos y mamparas de baño.

**En línea:** https://normaluz.pages.dev

## Objetivo

Que quien busca una vidriería en Montevideo entienda en segundos qué hace el taller, vea trabajos reales y pida presupuesto por WhatsApp con un toque.

## Qué incluye

- Portada con llamada a la acción a WhatsApp y botón flotante siempre visible.
- Servicios, presentación del taller y galería de trabajos reales.
- Contacto con dirección enlazada a Google Maps, teléfonos y horario.
- Diseño responsive para celular, tablet y escritorio.

## SEO y redes

- Datos estructurados schema.org (`HomeAndConstructionBusiness`) con dirección, teléfono, horario y servicios.
- Open Graph y Twitter Card con imagen absoluta, para que el enlace se vea bien al compartirlo por WhatsApp o redes.
- URL canónica, `sitemap.xml` y `robots.txt`, todo sobre `normaluz.pages.dev`.
- Medición con Google Analytics 4.

## Tecnología

- HTML, CSS y JavaScript sin frameworks.
- Tailwind CSS.
- Publicado en Cloudflare Pages con deploy automático desde `main`. `_redirects` y `functions/_middleware.js` evitan que se sirvan los archivos del repo (README, configuración), también con la ruta codificada.

## Correr en local

```sh
python -m http.server 8080 --bind 127.0.0.1
```

Y abrir http://127.0.0.1:8080.

## Autoría

Diseño y desarrollo: [Javier Perez](https://jperez.pages.dev), desarrollo web y automatización para pymes en Uruguay.

Los textos, las fotos y la marca pertenecen a Normaluz Art & Deco. El código se publica como muestra de trabajo y no tiene licencia de uso libre.
