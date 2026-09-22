import React from 'react';
import { useTranslation } from 'react-i18next';
import { SuperTypography } from '../../../../components/SuperTypography/SuperTypography';
import { TermsSection } from '../../Screens/MyAppsScreen/MyAppsScreen.types';
import './LegalDoc.scss';

interface LegalDocProps {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  sections: TermsSection[];
  /** Nombre de la app a la que pertenece el documento, para el enlace de vuelta. */
  appName: string;
  onBack: () => void;
}

export const LegalDoc: React.FC<LegalDocProps> = ({
  title,
  subtitle,
  lastUpdated,
  sections,
  appName,
  onBack,
}) => {
  const { t } = useTranslation();

  return (
    <div className="legal">
      {/* Una sola salida: al detalle de la app de la que cuelga el documento.
          Es de donde se viene, y es lo que hace el boton atras del navegador. */}
      <button className="legal__nav" onClick={onBack}>
        ‹ {appName}
      </button>

      <header className="legal__header">
        <SuperTypography as="h1" variant="display">
          {title}
        </SuperTypography>
        <SuperTypography variant="small" color="subtext">
          {subtitle}
        </SuperTypography>
        {lastUpdated && (
          <SuperTypography variant="meta" color="muted">
            {t('apps.legal.lastUpdated')}: {lastUpdated}
          </SuperTypography>
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
