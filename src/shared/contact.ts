// Enlaces y correo publicos del sitio, en un solo sitio para no repetirlos en
// el pie, la home y la vista Sobre mi.
//
// El correo es el que ya aparece en los documentos legales de las apps, asi que
// no expone nada nuevo. Si algun dia hay formulario con backend, el bloque de
// contacto de la home es lo unico que cambia.
export const CONTACT_EMAIL = 'davidyero@davidyero.com';

// Perfiles públicos, en un solo sitio. El orden es el de la fila de iconos de
// la home. Si cambia un handle, se cambia aquí y no en cada vista.
export const SOCIAL_LINKS = {
  github: 'https://github.com/davidyero',
  instagram: 'https://www.instagram.com/davidyero',
  tiktok: 'https://www.tiktok.com/@davidyero',
  youtube: 'https://www.youtube.com/@davidyero',
  twitter: 'https://x.com/davidyero',
  linkedin: 'https://www.linkedin.com/in/davidyero',
} as const;

export type SocialNetwork = keyof typeof SOCIAL_LINKS;

/**
 * Construye el `mailto:` del bloque de contacto. La direccion que teclea el
 * visitante viaja en el cuerpo, no en el remitente: el remitente lo pone su
 * propio cliente de correo, y escribirlo en `from` no funcionaria.
 */
export const buildContactMailto = (visitorEmail: string, subject: string): string => {
  const body = visitorEmail.trim() ? `\n\n---\n${visitorEmail.trim()}` : '';
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
