import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { ChangelogItem } from '../../Components/ChangelogItem/ChangelogItem';
import { getAppBySlug } from '../../data/registry';
import { paths } from '../../../../shared/paths';
import { ChangelogScreenProps } from './ChangelogScreen.types';
import './ChangelogScreen.scss';

export const ChangelogScreen: React.FC<ChangelogScreenProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const app = getAppBySlug(slug);

  if (!app) {
    return (
      <PageLayout>
        <div className="changelog container">
          <p className="changelog__empty">{t('apps.notFound')}</p>
        </div>
      </PageLayout>
    );
  }

  const filtered = (app.changelog ?? []).filter((entry) =>
    entry.version.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageLayout>
      <div className="changelog container">
        <button className="changelog__back" onClick={() => navigate(paths.app(slug ?? ''))}>
          ‹ {t('apps.detail.back')}
        </button>

        <div className="changelog__header">
          <div>
            <span className="mono-eyebrow">{t('apps.changelog.eyebrow')}</span>
            <h1 className="changelog__title">{t('apps.changelog.title', { app: app.name })}</h1>
            <p className="changelog__subtitle">{t('apps.changelog.subtitle')}</p>
          </div>
          <div className="changelog__search">
            <Search size={16} className="changelog__search-icon" />
            <input
              type="text"
              className="changelog__search-input"
              placeholder={t('apps.changelog.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="changelog__timeline">
            {filtered.map((entry, index) => (
              <ChangelogItem
                key={index}
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
