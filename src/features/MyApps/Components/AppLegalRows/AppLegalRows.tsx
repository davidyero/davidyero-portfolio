import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, ShieldCheck } from 'lucide-react';
import { SuperRow } from '../../../../components/SuperRow/SuperRow';
import { paths } from '../../../../shared/paths';
import { type AppLegalRowsProps } from './AppLegalRows.types';

// Filas de Términos y Privacidad de una app. Las comparten la ficha y la
// landing: cada una solo pinta el documento que la app tenga.
export const AppLegalRows: React.FC<AppLegalRowsProps> = ({ app, onNavigate }) => {
  const { t } = useTranslation();

  return (
    <>
      {app.termsAndConditions && (
        <SuperRow
          icon={<FileText size={16} />}
          title={t('apps.detail.terms')}
          subtitle={paths.appTerms(app.slug)}
          onClick={() => onNavigate(paths.appTerms(app.slug))}
        />
      )}
      {app.privacyPolicy && (
        <SuperRow
          icon={<ShieldCheck size={16} />}
          title={t('apps.detail.privacy')}
          subtitle={paths.appPrivacy(app.slug)}
          onClick={() => onNavigate(paths.appPrivacy(app.slug))}
        />
      )}
    </>
  );
};
