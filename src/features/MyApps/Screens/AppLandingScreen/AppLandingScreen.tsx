import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from '../../../../components/Header/Header';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { AppLandingScreenProps } from './AppLandingScreen.types';
import { appsData } from '../../data/appsData';
import appStoreEN from '../../../../assets/images/stores/appStoreEN.svg';
import appStoreES from '../../../../assets/images/stores/appStoreES.svg';
import googlePlayEN from '../../../../assets/images/stores/googlePlayIconEN.png';
import googlePlayES from '../../../../assets/images/stores/googleplayIconES.png';
import './AppLandingScreen.scss';

export const AppLandingScreen: React.FC<AppLandingScreenProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const app = appsData.find((a) => a.slug === slug);

  // Select store images based on current language
  const appStoreImage = i18n.language === 'es' ? appStoreES : appStoreEN;
  const googlePlayImage = i18n.language === 'es' ? googlePlayES : googlePlayEN;

  if (!app) {
    return (
      <>
        <Header />
        <div className="app-landing">
          <div className="app-landing__container">
            <p className="app-landing__empty">{t('apps.notFound')}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="app-landing">
        {/* Hero Section */}
        <section className="app-landing__hero">
          <div className="app-landing__container">
            <h1 className="app-landing__title">{app.name}</h1>
            <p className="app-landing__description">
              {app.fullDescription || app.description}
            </p>

            {(app.appStoreUrl || app.playStoreUrl) && (
              <div className="app-landing__store-links">
                {app.appStoreUrl && (
                  <a
                    href={app.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="app-landing__store-link"
                  >
                    <img
                      src={appStoreImage}
                      alt={t('apps.landing.appStore')}
                      className="app-landing__store-image app-landing__store-image--ios"
                    />
                  </a>
                )}
                {app.playStoreUrl && (
                  <a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="app-landing__store-link"
                  >
                    <img
                      key={i18n.language}
                      src={googlePlayImage}
                      alt={t('apps.landing.playStore')}
                      className={i18n.language === 'es' ?
                                              'app-landing__store-image app-landing__store-image--android' :
                                              'app-landing__store-image app-landing__store-image--android-2'
                                          }
                    />
                  </a>
                )}
              </div>
            )}

            <div className="app-landing__actions">
              <SuperButton variant="outline" onClick={() => navigate('/apps')}>
                {t('apps.landing.backToApps')}
              </SuperButton>
              {app.changelog && app.changelog.length > 0 && (
                <SuperButton
                  variant="primary"
                  onClick={() => navigate(`/apps/${slug}/changelog`)}
                >
                  {t('apps.landing.viewChangelog')}
                </SuperButton>
              )}
              {app.termsAndConditions && (
                <SuperButton
                  variant="secondary"
                  onClick={() => navigate(`/apps/${slug}/terms`)}
                >
                  {t('apps.landing.viewTerms')}
                </SuperButton>
              )}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        {app.screenshots && app.screenshots.length > 0 && (
          <section className="app-landing__screenshot-section">
            <div className="app-landing__container">
              <h2 className="app-landing__section-title">{t('apps.landing.screenshots')}</h2>
              <div className="app-landing__screenshot-container">
                {app.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${app.name} screenshot ${index + 1}`}
                    className="app-landing__screenshot"
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        {app.features && app.features.length > 0 && (
          <section className="app-landing__features-section">
            <div className="app-landing__container">
              <h2 className="app-landing__section-title">{t('apps.landing.features')}</h2>
              <div className="app-landing__features-grid">
                {app.features.map((feature, index) => (
                  <div key={index} className="app-landing__feature-card">
                    <div className="app-landing__feature-icon">✨</div>
                    <p className="app-landing__feature-description">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};
