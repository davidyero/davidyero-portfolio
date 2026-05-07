import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from '../../../../components/Header/Header';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { PrivacyScreenProps } from './PrivacyScreen.types';
import { appsData } from '../../data/appsData';
import './PrivacyScreen.scss';

export const PrivacyScreen: React.FC<PrivacyScreenProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const app = appsData.find((a) => a.slug === slug);

  if (!app) {
    return (
      <>
        <Header />
        <div className="privacy-screen">
          <div className="privacy-screen__container">
            <p className="privacy-screen__empty">{t('apps.notFound')}</p>
          </div>
        </div>
      </>
    );
  }

  if (!app.privacyPolicy) {
    return (
      <>
        <Header />
        <div className="privacy-screen">
          <div className="privacy-screen__container">
            <p className="privacy-screen__empty">
              {t('apps.privacy.notAvailable')}
            </p>
            <div className="privacy-screen__actions">
              <SuperButton variant="primary" onClick={() => navigate(`/apps/${slug}`)}>
                {t('apps.privacy.goToApp')}
              </SuperButton>
            </div>
          </div>
        </div>
      </>
    );
  }

  const currentLang = i18n.language as 'en' | 'es';
  const privacyData = app.privacyPolicy[currentLang];

  return (
    <>
      <Header />
      <div className="privacy-screen">
        <div className="privacy-screen__container">
          <div className="privacy-screen__header">
            <h1 className="privacy-screen__title">{t('apps.privacy.title')}</h1>
            <p className="privacy-screen__app-name">{app.name}</p>
            {privacyData.lastUpdated && (
              <p className="privacy-screen__last-updated">
                {t('apps.privacy.lastUpdated')}: {privacyData.lastUpdated}
              </p>
            )}
            <div className="privacy-screen__actions">
              <SuperButton variant="outline" onClick={() => navigate('/apps')}>
                {t('apps.privacy.backToApps')}
              </SuperButton>
              <SuperButton variant="primary" onClick={() => navigate(`/apps/${slug}`)}>
                {t('apps.privacy.goToApp')}
              </SuperButton>
            </div>
          </div>

          <div className="privacy-screen__content">
            {privacyData.sections.map((section, index) => (
              <div key={index} className="privacy-screen__section">
                <h2 className="privacy-screen__section-title">{section.title}</h2>
                <div
                  className="privacy-screen__section-content"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
