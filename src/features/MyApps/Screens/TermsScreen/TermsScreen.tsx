import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SuperPageTemplate } from '../../../../components/SuperPageTemplate/SuperPageTemplate';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { LegalDoc } from '../../Components/LegalDoc/LegalDoc';
import { getAppBySlug } from '../../data/registry';
import { paths } from '../../../../shared/paths';
import { TermsScreenProps } from './TermsScreen.types';

export const TermsScreen: React.FC<TermsScreenProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const app = getAppBySlug(slug);
  const lang = (i18n.language?.startsWith('es') ? 'es' : 'en') as 'en' | 'es';

  if (!app || !app.termsAndConditions) {
    return (
      <SuperPageTemplate variant="doc">
        <div className="legal">
          <p className="legal__empty">
            {app ? t('apps.legal.notAvailable') : t('apps.notFound')}
          </p>
          <SuperButton variant="outline" onClick={() => navigate(paths.apps)}>
            ‹ {t('apps.legal.backToApps')}
          </SuperButton>
        </div>
      </SuperPageTemplate>
    );
  }

  const data = app.termsAndConditions[lang];

  return (
    <SuperPageTemplate variant="doc">
      <LegalDoc
        title={t('apps.legal.terms.title')}
        subtitle={t('apps.legal.termsSubtitle', { app: app.name })}
        lastUpdated={data.lastUpdated}
        sections={data.sections}
        appName={app.name}
        onBack={() => navigate(paths.app(app.slug))}
      />
    </SuperPageTemplate>
  );
};
