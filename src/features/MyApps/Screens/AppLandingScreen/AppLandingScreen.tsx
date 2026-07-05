import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { Badge } from '../../../../components/Badge/Badge';
import { AppIcon } from '../../Components/AppIcon/AppIcon';
import { getAppBySlug, resolveAppCtas, platformLabels } from '../../data/registry';
import { AppLandingScreenProps } from './AppLandingScreen.types';
import appStoreEN from '../../../../assets/images/stores/appStoreEN.svg';
import appStoreES from '../../../../assets/images/stores/appStoreES.svg';
import googlePlayEN from '../../../../assets/images/stores/googlePlayIconEN.png';
import googlePlayES from '../../../../assets/images/stores/googleplayIconES.png';
import './AppLandingScreen.scss';

const statusTone = (status: string): 'live' | 'beta' | 'soon' =>
  status === 'beta' ? 'beta' : status === 'soon' ? 'soon' : 'live';

export const AppLandingScreen: React.FC<AppLandingScreenProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const app = getAppBySlug(slug);
  const isEs = i18n.language?.startsWith('es');
  const appStoreImg = isEs ? appStoreES : appStoreEN;
  const googlePlayImg = isEs ? googlePlayES : googlePlayEN;

  if (!app) {
    return (
      <PageLayout>
        <div className="detail container">
          <p className="detail__empty">{t('apps.notFound')}</p>
          <SuperButton variant="outline" onClick={() => navigate('/apps')}>
            ‹ {t('apps.detail.back')}
          </SuperButton>
        </div>
      </PageLayout>
    );
  }

  const cta = resolveAppCtas(app);
  const metaBits = [
    ...app.platforms.map((p) => platformLabels[p]),
    app.version ? `v${app.version}` : null,
    t(`apps.category.${app.category}`),
  ].filter(Boolean);

  return (
    <PageLayout>
      <div className="detail container">
        <button className="detail__back" onClick={() => navigate('/apps')}>
          ‹ {t('apps.detail.back')}
        </button>

        <section className="detail__hero">
          <AppIcon app={app} size="xl" />
          <div className="detail__hero-info">
            <div className="detail__title-row">
              <h1 className="detail__title">{app.name}</h1>
              <Badge tone={statusTone(app.status)}>{t(`apps.status.${app.status}`)}</Badge>
            </div>
            {app.tagline && <p className="detail__tagline">{app.tagline}</p>}
            <p className="detail__meta">{metaBits.join(' · ')}</p>
          </div>
        </section>

        <p className="detail__description">{app.fullDescription ?? app.description}</p>

        {/* Adaptive CTAs */}
        <div className="detail__ctas">
          {(cta.showAppStore || cta.showGooglePlay) && (
            <div className="detail__stores">
              {cta.showAppStore && (
                <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={appStoreImg}
                    alt={t('apps.detail.appStore')}
                    className="detail__store-badge"
                  />
                </a>
              )}
              {cta.showGooglePlay && (
                <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={googlePlayImg}
                    alt={t('apps.detail.googlePlay')}
                    className="detail__store-badge detail__store-badge--play"
                  />
                </a>
              )}
            </div>
          )}

          {(cta.showWeb || cta.showRepo) && (
            <div className="detail__web-ctas">
              {cta.showWeb && (
                <a href={app.webUrl} target="_blank" rel="noopener noreferrer">
                  <SuperButton variant="primary">{t('apps.detail.openApp')} ↗</SuperButton>
                </a>
              )}
              {cta.showRepo && (
                <a href={app.repoUrl} target="_blank" rel="noopener noreferrer">
                  <SuperButton variant="outline">{t('apps.detail.viewRepo')}</SuperButton>
                </a>
              )}
            </div>
          )}

          {!cta.hasAny && (
            <span className="detail__coming-soon">{t('apps.detail.comingSoon')}</span>
          )}
        </div>

        {/* Conditional document buttons */}
        <div className="detail__docs">
          {app.changelog && app.changelog.length > 0 && (
            <SuperButton
              variant="secondary"
              size="small"
              onClick={() => navigate(`/apps/${app.slug}/changelog`)}
            >
              {t('apps.detail.changelog')}
            </SuperButton>
          )}
          {app.termsAndConditions && (
            <SuperButton
              variant="secondary"
              size="small"
              onClick={() => navigate(`/apps/${app.slug}/terms`)}
            >
              {t('apps.detail.terms')}
            </SuperButton>
          )}
          {app.privacyPolicy && (
            <SuperButton
              variant="secondary"
              size="small"
              onClick={() => navigate(`/apps/${app.slug}/privacy`)}
            >
              {t('apps.detail.privacy')}
            </SuperButton>
          )}
        </div>

        {/* Features */}
        {app.features && app.features.length > 0 && (
          <section className="detail__features">
            <span className="mono-eyebrow">{t('apps.detail.features')}</span>
            <div className="detail__features-grid">
              {app.features.map((feature, index) => (
                <div key={index} className="detail__feature">
                  <span className="detail__feature-icon">✦</span>
                  <p className="detail__feature-text">{feature}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Screenshots */}
        {app.screenshots && app.screenshots.length > 0 && (
          <section className="detail__screenshots">
            <span className="mono-eyebrow">{t('apps.detail.screenshots')}</span>
            <div className="detail__screenshots-row">
              {app.screenshots.map((shot, index) => (
                <img
                  key={index}
                  src={shot}
                  alt={`${app.name} ${index + 1}`}
                  className="detail__screenshot"
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </PageLayout>
  );
};
