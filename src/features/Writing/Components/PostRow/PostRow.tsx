import React from 'react';
import { useTranslation } from 'react-i18next';
import { PostRowProps } from './PostRow.types';
import './PostRow.scss';

// Fecha en ISO corta: es la que usa todo el sitio y no depende del idioma.
const isoDate = (value: string | null): string => (value ? value.slice(0, 10) : '');

export const PostRow: React.FC<PostRowProps> = ({ post, onClick }) => {
  const { t } = useTranslation();

  return (
    <button className="post-row" type="button" onClick={onClick}>
      <span className="post-row__meta">
        <span className="post-row__date">{isoDate(post.publishedAt)}</span>
        {post.tags.map((tag) => (
          <span key={tag} className="post-row__tag">
            #{tag}
          </span>
        ))}
        {!post.isTranslated && (
          <span className="post-row__lang">{t('writing.onlySpanish')}</span>
        )}
      </span>
      <span className="post-row__title">{post.title}</span>
      <span className="post-row__summary">{post.summary}</span>
    </button>
  );
};
