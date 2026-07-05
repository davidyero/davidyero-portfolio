import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { AppCard } from '../../Components/AppCard/AppCard';
import { useMyAppsScreen } from './useMyAppsScreen';
import { MyAppsScreenProps } from './MyAppsScreen.types';
import './MyAppsScreen.scss';

export const MyAppsScreen: React.FC<MyAppsScreenProps> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { filter, setFilter, filters, apps, total } = useMyAppsScreen();

  return (
    <PageLayout>
      <div className="catalog container">
        <div className="catalog__header">
          <div className="catalog__heading">
            <h1 className="catalog__title">{t('apps.catalog.title')}</h1>
            <p className="catalog__subtitle">
              {t('apps.catalog.subtitle', { count: total })}
            </p>
          </div>

          <div className="catalog__filters">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`catalog__filter ${filter === f.key ? 'catalog__filter--active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {t(f.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {apps.length > 0 ? (
          <div className="catalog__grid">
            {apps.map((app) => (
              <AppCard key={app.id} app={app} onClick={() => navigate(`/apps/${app.slug}`)} />
            ))}
          </div>
        ) : (
          <div className="catalog__empty">
            <span className="catalog__empty-mark">{'{ }'}</span>
            <p>{t('apps.catalog.empty')}</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};
