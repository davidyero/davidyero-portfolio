import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PostKind, PostSummary, fetchPosts } from '../../api/postsApi';

export const usePostListScreen = (kind: PostKind) => {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const load = useCallback(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);
    fetchPosts(kind, i18n.language)
      .then((data) => {
        // El idioma puede cambiar mientras vuela la petición: si ya no es la
        // respuesta vigente se descarta, o pintaría el idioma anterior.
        if (!cancelled) setPosts(data.items);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [kind, i18n.language]);

  useEffect(() => load(), [load]);

  return {
    t,
    posts,
    isLoading,
    isError,
    retry: load,
    isEmpty: !isLoading && !isError && posts.length === 0,
  };
};
