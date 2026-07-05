import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { paths } from '../../shared/paths';
import { FooterProps } from './Footer.types';
import { APP_VERSION } from '../../shared/appVersion';
import './Footer.scss';

export const Footer: React.FC<FooterProps> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <button className="footer__brand" onClick={() => navigate('/')}>
            <span className="footer__logo">DY</span>
            <span className="footer__brand-name">David Yepes</span>
          </button>

          <nav className="footer__nav">
            <button className="footer__link" onClick={() => navigate(paths.home)}>
              {t('common.nav.home')}
            </button>
            <button className="footer__link" onClick={() => navigate(paths.apps)}>
              {t('common.nav.apps')}
            </button>
            <button className="footer__link" onClick={() => navigate(paths.aboutMe)}>
              {t('common.nav.about')}
            </button>
          </nav>

          <div className="footer__social">
            <a
              className="footer__social-link"
              href="https://github.com/davidyero"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              className="footer__social-link"
              href="https://www.linkedin.com/in/davidyero"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} · {t('common.footer.builtBy')} David Yepes
          </p>
          <span className="footer__version" title={t('common.footer.version')}>
            v{APP_VERSION}
          </span>
        </div>
      </div>
    </footer>
  );
};
