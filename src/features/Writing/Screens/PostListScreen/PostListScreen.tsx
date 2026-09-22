import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { PostRow } from '../../Components/PostRow/PostRow';
import { usePostListScreen } from './usePostListScreen';
import { PostListScreenProps } from './PostListScreen.types';
import { paths } from '../../../../shared/paths';
import './PostListScreen.scss';

// Una sola pantalla para las dos secciones: blog y build-in-public se leen
// igual (fecha, etiquetas, título, resumen) y solo cambian datos y textos.
export const PostListScreen: React.FC<PostListScreenProps> = ({ kind }) => {
  const navigate = useNavigate();
  const { t, posts, isLoading, isError, retry, isEmpty } = usePostListScreen(kind);
  const ns = kind === 'BLOG' ? 'blog' : 'log';
  const toPost = kind === 'BLOG' ? paths.blogPost : paths.logPost;

  return (
    <PageLayout>
      <div className="writing container container--reading">
        <header className="writing__header">
          <span className="mono-eyebrow">{t(`writing.${ns}.eyebrow`)}</span>
          <h1 className="writing__title">{t(`writing.${ns}.title`)}</h1>
          <p className="writing__subtitle">{t(`writing.${ns}.subtitle`)}</p>
        </header>

        {isLoading && <p className="writing__state">{t('writing.loading')}</p>}

        {isError && (
          <div className="writing__state-block">
            <p className="writing__state">{t('writing.error')}</p>
            <SuperButton variant="outline" size="small" onClick={retry}>
              {t('writing.retry')}
            </SuperButton>
          </div>
        )}

        {isEmpty && <p className="writing__state">{t(`writing.${ns}.empty`)}</p>}

        {posts.length > 0 && (
          <div className="writing__list">
            {posts.map((post) => (
              <PostRow key={post.id} post={post} onClick={() => navigate(toPost(post.slug))} />
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
};
