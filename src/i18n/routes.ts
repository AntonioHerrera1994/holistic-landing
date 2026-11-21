// Mapa de rutas equivalentes EN <-> ES.
// Lo usa el switch de idioma del navbar para mandar al usuario a la MISMA página
// en el otro idioma (antes siempre mandaba a /inicio).
export const SITE = 'https://holisticancercoach.com';

export const routePairs: Array<{ en: string; es: string }> = [
  { en: '/', es: '/inicio' },
  { en: '/about-us', es: '/nosotros' },
  { en: '/treatments', es: '/tratamientos' },
  { en: '/thanatology', es: '/tanatologia' },
  { en: '/dental-prices', es: '/servicios-dentales' },
  { en: '/contact-us', es: '/contacto' },
  { en: '/guide', es: '/guia' },
];

const clean = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

export function pairFor(pathname: string) {
  const p = clean(pathname);
  return routePairs.find((r) => r.en === p || r.es === p);
}

/** Ruta equivalente en el otro idioma (o la home de ese idioma si no hay par). */
export function alternatePath(pathname: string, target: 'en' | 'es') {
  const pair = pairFor(pathname);
  if (pair) return pair[target];
  return target === 'es' ? '/inicio' : '/';
}

export function langFromPath(pathname: string): 'en' | 'es' {
  const p = clean(pathname);
  return routePairs.some((r) => r.es === p) ? 'es' : 'en';
}

export const nav = {
  en: [
    { href: '/about-us', label: 'About' },
    { href: '/treatments', label: 'Treatments' },
    { href: '/thanatology', label: 'Thanatology' },
    { href: '/dental-prices', label: 'Dental Prices' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact-us', label: 'Contact' },
  ],
  es: [
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/tratamientos', label: 'Tratamientos' },
    { href: '/tanatologia', label: 'Tanatología' },
    { href: '/servicios-dentales', label: 'Precios dentales' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contacto' },
  ],
};

export const WHATSAPP = 'https://wa.link/nai5wo';
// Número para mensajes prellenados (wa.me); es el mismo WhatsApp de wa.link/nai5wo.
export const WHATSAPP_NUMBER = '526641942723';
export const PHONE_DISPLAY = '(664) 194-2723';
export const PHONE_TEL = 'tel:+526641942723';
