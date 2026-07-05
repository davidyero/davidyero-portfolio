import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { Badge } from '../../../../components/Badge/Badge';
import { AppIcon } from '../../../MyApps/Components/AppIcon/AppIcon';
import { featuredApps, platformLabels } from '../../../MyApps/data/registry';
import { useExperience } from '../../../../shared/useExperience';
import { HomeScreenProps } from './HomeScreen.types';
import './HomeScreen.scss';

const STACK = ['React', 'TypeScript', 'Node', 'React Native', 'Postgres'];

const statusTone = (status: string): 'live' | 'beta' | 'soon' =>
  status === 'beta' ? 'beta' : status === 'soon' ? 'soon' : 'live';

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const exp = useExperience();

  return (
    <PageLayout>
      <div className="home container">
        <section className="home__hero">
          <div className="home__hero-main">
            <span className="mono-eyebrow home__prompt">{t('home.hero.eyebrow')}</span>
            <h1 className="home__title">
              {t('home.hero.titlePre')}
              <span className="home__title-accent">{t('home.hero.titleAccent')}</span>
            </h1>
            <p className="home__description">{t('home.hero.description')}</p>

            <div className="home__chips">
              {STACK.map((tech) => (
                <span key={tech} className="home__chip">
                  {tech}
                </span>
              ))}
            </div>

            <div className="home__cta">
              <SuperButton variant="primary" size="large" onClick={() => navigate('/apps')}>
                {t('home.hero.ctaApps')} →
              </SuperButton>
              <SuperButton variant="outline" size="large" onClick={() => navigate('/about')}>
                {t('home.hero.ctaContact')}
              </SuperButton>
            </div>
          </div>

          <aside className="home__featured">
            <span className="mono-eyebrow">{t('home.featured.eyebrow')}</span>
            <div className="home__featured-list">
              {featuredApps.map((app) => (
                <button
                  key={app.slug}
                  className="home__featured-item"
                  onClick={() => navigate(`/apps/${app.slug}`)}
                >
                  <AppIcon app={app} size="md" />
                  <div className="home__featured-info">
                    <span className="home__featured-name">{app.name}</span>
                    <span className="home__featured-meta">
                      {app.platforms.map((p) => platformLabels[p]).join(' · ')} ·{' '}
                      {t(`apps.category.${app.category}`)}
                    </span>
                  </div>
                  <Badge tone={statusTone(app.status)} size="sm">
                    {t(`apps.status.${app.status}`)}
                  </Badge>
                </button>
              ))}
            </div>
          </aside>
        </section>

        <section className="home__experience">
          <span className="mono-eyebrow">{t('home.experience.eyebrow')}</span>
          <div className="home__experience-row">
            <div className="home__stat">
              <span className="home__stat-value">{exp.years}</span>
              <span className="home__stat-label">{t('home.experience.years')}</span>
            </div>
            <div className="home__stat">
              <span className="home__stat-value">{exp.months}</span>
              <span className="home__stat-label">{t('home.experience.months')}</span>
            </div>
            <div className="home__stat">
              <span className="home__stat-value">{exp.days}</span>
              <span className="home__stat-label">{t('home.experience.days')}</span>
            </div>
            <p className="home__experience-note">{t('home.experience.headline')}</p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
