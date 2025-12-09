import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from '../../../../components/Header/Header';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { TermsScreenProps } from './TermsScreen.types';
import { appsData } from '../../data/appsData';
import './TermsScreen.scss';

export const TermsScreen: React.FC<TermsScreenProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const app = appsData.find((a) => a.slug === slug);

  if (!app) {
    return (
      <>
        <Header />
        <div className="terms-screen">
          <div className="terms-screen__container">
            <p className="terms-screen__empty">{t('apps.notFound')}</p>
          </div>
        </div>
      </>
    );
  }

  if (!app.termsAndConditions) {
    return (
      <>
        <Header />
        <div className="terms-screen">
          <div className="terms-screen__container">
            <p className="terms-screen__empty">
              {t('apps.terms.notAvailable')}
            </p>
            <div className="terms-screen__actions">
              <SuperButton variant="primary" onClick={() => navigate(`/apps/${slug}`)}>
                {t('apps.terms.goToApp')}
              </SuperButton>
            </div>
          </div>
        </div>
      </>
    );
  }

  const currentLang = i18n.language as 'en' | 'es';
  const termsData = app.termsAndConditions[currentLang];

  return (
    <>
      <Header />
      <div className="terms-screen">
        <div className="terms-screen__container">
          <div className="terms-screen__header">
            <h1 className="terms-screen__title">{t('apps.terms.title')}</h1>
            <p className="terms-screen__app-name">{app.name}</p>
            {termsData.lastUpdated && (
              <p className="terms-screen__last-updated">
                {t('apps.terms.lastUpdated')}: {termsData.lastUpdated}
              </p>
            )}
            <div className="terms-screen__actions">
              <SuperButton variant="outline" onClick={() => navigate('/apps')}>
                {t('apps.terms.backToApps')}
              </SuperButton>
              <SuperButton variant="primary" onClick={() => navigate(`/apps/${slug}`)}>
                {t('apps.terms.goToApp')}
              </SuperButton>
            </div>
          </div>

          <div className="terms-screen__content">
            {termsData.sections.map((section, index) => (
              <div key={index} className="terms-screen__section">
                <h2 className="terms-screen__section-title">{section.title}</h2>
                <div
                  className="terms-screen__section-content"
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
