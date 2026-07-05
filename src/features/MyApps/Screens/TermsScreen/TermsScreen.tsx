import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { LegalDoc } from '../../Components/LegalDoc/LegalDoc';
import { getAppBySlug } from '../../data/registry';
import { TermsScreenProps } from './TermsScreen.types';

export const TermsScreen: React.FC<TermsScreenProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const app = getAppBySlug(slug);
  const lang = (i18n.language?.startsWith('es') ? 'es' : 'en') as 'en' | 'es';

  if (!app || !app.termsAndConditions) {
    return (
      <PageLayout>
        <div className="legal container">
          <p style={{ fontFamily: 'var(--mono)', color: 'var(--muted)', margin: '2rem 0' }}>
            {app ? t('apps.legal.notAvailable') : t('apps.notFound')}
          </p>
          <SuperButton variant="outline" onClick={() => navigate('/apps')}>
            ‹ {t('apps.legal.backToApps')}
          </SuperButton>
        </div>
      </PageLayout>
    );
  }

  const data = app.termsAndConditions[lang];

  return (
    <PageLayout>
      <LegalDoc
        title={t('apps.legal.terms.title')}
        subtitle={t('apps.legal.termsSubtitle', { app: app.name })}
        lastUpdated={data.lastUpdated}
        sections={data.sections}
        onBack={() => navigate('/apps')}
        onGoToApp={() => navigate(`/apps/${slug}`)}
      />
    </PageLayout>
  );
};
