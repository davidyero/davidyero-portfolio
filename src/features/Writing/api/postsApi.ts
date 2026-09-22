import { API_BASE_URL } from '../../../shared/api';

// Contenido editorial servido por el dominio `portfolio` del backend. El idioma
// se resuelve en el servidor: se pide `lang` y la respuesta llega ya plana, con
// `language` diciendo en qué idioma salió de verdad.
export type PostKind = 'BLOG' | 'LOG';
export type PostLanguage = 'es' | 'en';

export interface PostSummary {
  id: string;
  kind: PostKind;
  slug: string;
  publishedAt: string | null;
  tags: string[];
  title: string;
  summary: string;
  language: PostLanguage;
  /** false cuando se pidió inglés y solo existe la versión en español. */
  isTranslated: boolean;
}

export interface Post extends PostSummary {
  /** Markdown. */
  body: string;
}

interface ListResponse {
  items: PostSummary[];
  nextCursor: string | null;
}

const normalizeLang = (lang?: string): PostLanguage => (lang?.startsWith('es') ? 'es' : 'en');

const request = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${API_BASE_URL}${path}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return (await res.json()) as T;
};

export const fetchPosts = (kind: PostKind, lang?: string): Promise<ListResponse> =>
  request<ListResponse>(`/portfolio/posts?kind=${kind}&lang=${normalizeLang(lang)}`);

export const fetchPost = (slug: string, lang?: string): Promise<Post> =>
  request<Post>(`/portfolio/posts/${encodeURIComponent(slug)}?lang=${normalizeLang(lang)}`);

/**
 * Alta en la lista de correo. El backend responde igual si ya estabas apuntado,
 * así que aquí no hay caso "ya existe": o se guardó, o falló.
 */
export const subscribe = async (email: string, lang?: string): Promise<void> => {
  const res = await fetch(`${API_BASE_URL}/portfolio/subscribers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, language: normalizeLang(lang) }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
};
