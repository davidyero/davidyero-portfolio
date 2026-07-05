import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../shared/useTheme';
import { paths } from '../../shared/paths';
import { HeaderProps } from './Header.types';
import './Header.scss';

interface NavItem {
  key: string;
  path: string;
}

const navItems: NavItem[] = [
  { key: 'common.nav.home', path: paths.home },
  { key: 'common.nav.apps', path: paths.apps },
  { key: 'common.nav.about', path: paths.aboutMe },
];

export const Header: React.FC<HeaderProps> = () => {
  const { toggleTheme, isDark } = useTheme();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string): boolean =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const go = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  const setLang = (lng: 'en' | 'es') => i18n.changeLanguage(lng);
  const currentLang = i18n.language?.startsWith('es') ? 'es' : 'en';

  return (
    <header className="header">
      <div className="header__inner">
        <button className="header__brand" onClick={() => go('/')} aria-label="David Yepes">
          <span className="header__logo">DY</span>
          <span className="header__brand-name">David Yepes</span>
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`header__link ${isActive(item.path) ? 'header__link--active' : ''}`}
              onClick={() => go(item.path)}
            >
              {t(item.key)}
            </button>
          ))}

          <div className="header__controls">
            <div className="header__lang" role="group" aria-label="Language">
              <button
                className={`header__lang-btn ${currentLang === 'en' ? 'header__lang-btn--active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <span className="header__lang-sep">/</span>
              <button
                className={`header__lang-btn ${currentLang === 'es' ? 'header__lang-btn--active' : ''}`}
                onClick={() => setLang('es')}
              >
                ES
              </button>
            </div>

            <button
              className="header__theme"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </nav>

        <button
          className="header__burger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className={`header__burger-line ${menuOpen ? 'is-open-1' : ''}`} />
          <span className={`header__burger-line ${menuOpen ? 'is-open-2' : ''}`} />
          <span className={`header__burger-line ${menuOpen ? 'is-open-3' : ''}`} />
        </button>
      </div>
    </header>
  );
};
