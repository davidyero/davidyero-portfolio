import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { paths } from '../../shared/paths';
import { SOCIAL_LINKS } from '../../shared/contact';
import { FooterProps } from './Footer.types';
import { APP_VERSION } from '../../shared/appVersion';
import './Footer.scss';

// Pie de una sola linea util: quien y donde a la izquierda, y a la derecha la
// misma navegacion mas los datos de version. Nada de columnas de enlaces.
export const Footer: React.FC<FooterProps> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <span className="footer__identity">{t('common.footer.line')}</span>

        <nav className="footer__meta">
          <button className="footer__link" onClick={() => navigate(paths.home)}>
            {t('common.nav.home')}
          </button>
          <span className="footer__dot">·</span>
          <button className="footer__link" onClick={() => navigate(paths.apps)}>
            {t('common.nav.apps')}
          </button>
          <span className="footer__dot">·</span>
          <button className="footer__link" onClick={() => navigate(paths.aboutMe)}>
            {t('common.nav.about')}
          </button>
          <span className="footer__dot">·</span>
          <a
            className="footer__link"
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <span className="footer__dot">·</span>
          <a
            className="footer__link"
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <span className="footer__dot">·</span>
          <span>© {currentYear}</span>
          <span className="footer__dot">·</span>
          <span title={t('common.footer.version')}>v{APP_VERSION}</span>
        </nav>
      </div>
    </footer>
  );
};
