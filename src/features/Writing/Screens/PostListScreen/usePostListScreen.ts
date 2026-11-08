import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { type PostKind, type PostSummary, fetchPosts } from '../../api/postsApi';

interface ListResult {
  key: string;
  posts: PostSummary[];
  isError: boolean;
}

export const usePostListScreen = (kind: PostKind) => {
  const { t, i18n } = useTranslation();
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<ListResult | null>(null);

  // Cada petición tiene su clave: mientras la respuesta guardada no sea la de
  // la clave vigente, la pantalla está cargando. Así no hace falta poner
  // `loading` a mano dentro del efecto.
  const language = i18n.language;
  const key = `${kind}|${language}|${attempt}`;

  useEffect(() => {
    let cancelled = false;
    fetchPosts(kind, language)
      .then((data) => {
        // El idioma puede cambiar mientras vuela la petición: si ya no es la
        // respuesta vigente se descarta, o pintaría el idioma anterior.
        if (!cancelled) setResult({ key, posts: data.items, isError: false });
      })
      .catch(() => {
        if (!cancelled) {
          setResult((previous) => ({ key, posts: previous?.posts ?? [], isError: true }));
        }
      });
    return () => {
      cancelled = true;
    };
  }, [key, kind, language]);

  const retry = useCallback(() => setAttempt((current) => current + 1), []);

  const isLoading = result?.key !== key;
  const isError = !isLoading && result.isError;
  const posts = result?.posts ?? [];

  return {
    t,
    posts,
    isLoading,
    isError,
    retry,
    isEmpty: !isLoading && !isError && posts.length === 0,
  };
};
