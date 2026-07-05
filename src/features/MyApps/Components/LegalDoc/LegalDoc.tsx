import React from 'react';
import { useTranslation } from 'react-i18next';
import { TermsSection } from '../../Screens/MyAppsScreen/MyAppsScreen.types';
import './LegalDoc.scss';

interface LegalDocProps {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  sections: TermsSection[];
  onBack: () => void;
  onGoToApp: () => void;
}

export const LegalDoc: React.FC<LegalDocProps> = ({
  title,
  subtitle,
  lastUpdated,
  sections,
  onBack,
  onGoToApp,
}) => {
  const { t } = useTranslation();

  return (
    <div className="legal container">
      <div className="legal__topbar">
        <button className="legal__nav" onClick={onBack}>
          ‹ {t('apps.legal.backToApps')}
        </button>
        <button className="legal__nav" onClick={onGoToApp}>
          {t('apps.legal.goToApp')} ›
        </button>
      </div>

      <header className="legal__header">
        <h1 className="legal__title">{title}</h1>
        <p className="legal__subtitle">{subtitle}</p>
        {lastUpdated && (
          <p className="legal__updated">
            {t('apps.legal.lastUpdated')}: {lastUpdated}
          </p>
        )}
      </header>

      <div className="legal__card">
        {sections.map((section, index) => (
          <section key={index} className="legal__section">
            <h2 className="legal__section-title">{section.title}</h2>
            <div
              className="legal__section-content"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </section>
        ))}
      </div>
    </div>
  );
};
