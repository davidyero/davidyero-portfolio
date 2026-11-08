import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { type Post, fetchPost } from '../../api/postsApi';

interface DetailResult {
  key: string;
  post: Post | null;
  isError: boolean;
}

export const usePostDetailScreen = (slug: string | undefined) => {
  const { t, i18n } = useTranslation();
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<DetailResult | null>(null);

  // Cada petición tiene su clave: mientras la respuesta guardada no sea la de
  // la clave vigente, la pantalla está cargando.
  const language = i18n.language;
  const key = `${slug ?? ''}|${language}|${attempt}`;

  useEffect(() => {
    if (!slug) return undefined;
    let cancelled = false;
    fetchPost(slug, language)
      .then((data) => {
        if (!cancelled) setResult({ key, post: data, isError: false });
      })
      .catch(() => {
        if (!cancelled) {
          setResult((previous) => ({ key, post: previous?.post ?? null, isError: true }));
        }
      });
    return () => {
      cancelled = true;
    };
  }, [key, slug, language]);

  const retry = useCallback(() => setAttempt((current) => current + 1), []);

  // Sin slug no hay nada que pedir: es un error directo, sin carga.
  const isLoading = Boolean(slug) && result?.key !== key;
  const isError = !slug || (!isLoading && Boolean(result?.isError));
  const post = result?.post ?? null;

  return { t, post, isLoading, isError, retry };
};
