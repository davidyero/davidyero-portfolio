import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterProps } from './Footer.types';
import './Footer.scss';

export const Footer: React.FC<FooterProps> = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__nav">
          <button className="footer__link" onClick={() => navigate('/apps')}>
            Apps
          </button>
          <button className="footer__link">Changelogs</button>
          <button className="footer__link" onClick={() => navigate('/about')}>
            Sobre Mi
          </button>
        </nav>

        <div className="footer__social">
          <a
            className="footer__social-icon"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a
            className="footer__social-icon"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            gh
          </a>
          <a
            className="footer__social-icon"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            tw
          </a>
        </div>

        <p className="footer__copyright">
          © {currentYear} Desarrollado por David Yepes
        </p>
      </div>
    </footer>
  );
};
