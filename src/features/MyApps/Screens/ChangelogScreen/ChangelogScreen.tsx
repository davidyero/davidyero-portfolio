import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { ChangelogItem } from '../../Components/ChangelogItem/ChangelogItem';
import { getAppBySlug, getAppContent } from '../../data/registry';
import { paths } from '../../../../shared/paths';
import { ChangelogScreenProps } from './ChangelogScreen.types';
import './ChangelogScreen.scss';

// Historial de versiones leido como un `git log`: la version es el ancla y
// cada entrada cuelga de ella.
export const ChangelogScreen: React.FC<ChangelogScreenProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const app = getAppBySlug(slug);
  const content = app ? getAppContent(app.slug, i18n.language) : undefined;

  if (!app) {
    return (
      <PageLayout>
        <div className="changelog container container--reading">
          <p className="changelog__empty">{t('apps.notFound')}</p>
        </div>
      </PageLayout>
    );
  }

  const entries = content?.changelog ?? [];
  const filtered = entries.filter((entry) =>
    entry.version.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageLayout>
      <div className="changelog container container--reading">
        <button className="changelog__back" onClick={() => navigate(paths.app(slug ?? ''))}>
          ‹ {app.name}
        </button>

        <header className="changelog__header">
          <span className="mono-eyebrow">{t('apps.changelog.eyebrow')}</span>
          <h1 className="changelog__title">{t('apps.changelog.title', { app: app.name })}</h1>
          <p className="changelog__subtitle">
            {t('apps.changelog.count', { count: entries.length })}
          </p>
        </header>

        <input
          type="search"
          className="changelog__search"
          placeholder={t('apps.changelog.search')}
          aria-label={t('apps.changelog.search')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filtered.length > 0 ? (
          <div className="changelog__list">
            {filtered.map((entry) => (
              <ChangelogItem
                key={entry.version}
                version={entry.version}
                date={entry.date}
                type={entry.type}
                changes={entry.changes}
              />
            ))}
          </div>
        ) : (
          <p className="changelog__empty">{t('apps.changelog.empty')}</p>
        )}
      </div>
    </PageLayout>
  );
};
