import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { LegalDoc } from '../../Components/LegalDoc/LegalDoc';
import { getAppBySlug } from '../../data/registry';
import { paths } from '../../../../shared/paths';
import { DeleteAccountScreenProps } from './DeleteAccountScreen.types';

// Google Play requires a public URL where users can request account deletion
// WITHOUT installing the app, and it must state what is erased and what is kept.
// That is why this lives next to the other legal docs and not inside the app.
export const DeleteAccountScreen: React.FC<DeleteAccountScreenProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const app = getAppBySlug(slug);
  const lang = (i18n.language?.startsWith('es') ? 'es' : 'en') as 'en' | 'es';

  if (!app || !app.accountDeletion) {
    return (
      <PageLayout>
        <div className="legal container">
          <p style={{ fontFamily: 'var(--mono)', color: 'var(--muted)', margin: '2rem 0' }}>
            {app ? t('apps.legal.notAvailable') : t('apps.notFound')}
          </p>
          <SuperButton variant="outline" onClick={() => navigate(paths.apps)}>
            ‹ {t('apps.legal.backToApps')}
          </SuperButton>
        </div>
      </PageLayout>
    );
  }

  const data = app.accountDeletion[lang];

  return (
    <PageLayout>
      <LegalDoc
        title={t('apps.legal.deleteAccount.title')}
        subtitle={t('apps.legal.deleteAccountSubtitle', { app: app.name })}
        lastUpdated={data.lastUpdated}
        sections={data.sections}
        onBack={() => navigate(paths.apps)}
        onGoToApp={() => navigate(paths.app(slug ?? ''))}
      />
    </PageLayout>
  );
};
