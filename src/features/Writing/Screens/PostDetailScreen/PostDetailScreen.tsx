import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { usePostDetailScreen } from './usePostDetailScreen';
import { PostDetailScreenProps } from './PostDetailScreen.types';
import { paths } from '../../../../shared/paths';
import './PostDetailScreen.scss';

export const PostDetailScreen: React.FC<PostDetailScreenProps> = ({ kind }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, post, isLoading, isError, retry } = usePostDetailScreen(slug);
  const ns = kind === 'BLOG' ? 'blog' : 'log';
  const backTo = kind === 'BLOG' ? paths.blog : paths.log;

  return (
    <PageLayout>
      <div className="post container container--doc">
        <button className="post__back" onClick={() => navigate(backTo)}>
          ‹ {t(`writing.${ns}.title`)}
        </button>

        {isLoading && <p className="post__state">{t('writing.loading')}</p>}

        {isError && (
          <div className="post__state-block">
            <p className="post__state">{t('writing.notFound')}</p>
            <SuperButton variant="outline" size="small" onClick={retry}>
              {t('writing.retry')}
            </SuperButton>
          </div>
        )}

        {post && (
          <article className="post__article">
            <header className="post__header">
              <span className="post__meta">
                {post.publishedAt ? post.publishedAt.slice(0, 10) : ''}
                {post.tags.map((tag) => (
                  <span key={tag} className="post__tag">
                    #{tag}
                  </span>
                ))}
              </span>
              <h1 className="post__title">{post.title}</h1>
              <p className="post__summary">{post.summary}</p>
              {!post.isTranslated && (
                <p className="post__notice">{t('writing.onlySpanishNotice')}</p>
              )}
            </header>

            {/* El cuerpo es markdown del backoffice. react-markdown NO habilita
                HTML embebido, así que el contenido no puede inyectar marcado. */}
            <div className="post__body">
              <ReactMarkdown>{post.body}</ReactMarkdown>
            </div>
          </article>
        )}
      </div>
    </PageLayout>
  );
};
