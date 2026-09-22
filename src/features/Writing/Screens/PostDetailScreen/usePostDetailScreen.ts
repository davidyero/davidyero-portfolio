import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Post, fetchPost } from '../../api/postsApi';

export const usePostDetailScreen = (slug: string | undefined) => {
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const load = useCallback(() => {
    if (!slug) {
      setLoading(false);
      setError(true);
      return () => undefined;
    }
    let cancelled = false;
    setLoading(true);
    setError(false);
    fetchPost(slug, i18n.language)
      .then((data) => {
        if (!cancelled) setPost(data);
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
  }, [slug, i18n.language]);

  useEffect(() => load(), [load]);

  return { t, post, isLoading, isError, retry: load };
};
