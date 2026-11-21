// Sitemap estático generado en build (sin dependencias). Incluye alternates ES/EN.
import { SITE, routePairs } from '../i18n/routes';

const posts = import.meta.glob('./blog/*.md', { eager: true }) as Record<string, any>;

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls: string[] = [];
  const alt = (p: { en: string; es: string }) =>
    `<xhtml:link rel="alternate" hreflang="en" href="${SITE}${p.en}"/><xhtml:link rel="alternate" hreflang="es" href="${SITE}${p.es}"/><xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${p.en}"/>`;
  for (const p of routePairs) {
    for (const lang of ['en', 'es'] as const) {
      const loc = `${SITE}${p[lang]}`;
      urls.push(`<url><loc>${loc}</loc><lastmod>${today}</lastmod>${alt(p)}</url>`);
    }
  }
  urls.push(`<url><loc>${SITE}/blog</loc><lastmod>${today}</lastmod></url>`);
  for (const path of Object.keys(posts)) {
    const slug = path.replace('./blog/', '').replace(/\.md$/, '');
    urls.push(`<url><loc>${SITE}/blog/${slug}</loc><lastmod>${today}</lastmod></url>`);
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
