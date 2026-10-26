// Bloquea los archivos del repo que no son parte del sitio (README y otros
// .md, archivos y carpetas que empiezan con punto, functions/).
// _redirects ya cubre las rutas literales, pero Pages decodifica la ruta antes
// de buscar el archivo: /README%2Emd o /%2Egitignore lo esquivan. Por eso la
// ruta se normaliza (decodificada, sin barras dobles ni invertidas, sin "..",
// en minusculas) antes de compararla. Si no se puede decodificar, 404.
const INTERNO = [/\.md$/, /\/\.(?!well-known\/)/, /^\/functions\//];

function rutaNormalizada(pathname) {
  let p;
  try {
    p = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  p = p.replace(/\\/g, '/').replace(/\/{2,}/g, '/');
  return new URL(p, 'https://x').pathname.toLowerCase();
}

export async function onRequest({ request, next }) {
  const ruta = rutaNormalizada(new URL(request.url).pathname);
  if (ruta === null || INTERNO.some((re) => re.test(ruta))) {
    return new Response('No encontrado', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex' },
    });
  }
  return next();
}
