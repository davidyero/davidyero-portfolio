import React from 'react';
import { useTranslation } from 'react-i18next';
import { FooterProps } from './Footer.types';
import { APP_VERSION } from '../../shared/appVersion';
import './Footer.scss';

// Dos datos y nada más: dónde estoy y qué versión estás viendo. La navegación
// ya está en el header, y repetirla abajo solo alargaba la página.
export const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <span className="footer__identity">{t('common.footer.line')}</span>
        <span className="footer__version" title={t('common.footer.version')}>
          v{APP_VERSION}
        </span>
      </div>
    </footer>
  );
};
