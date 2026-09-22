import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../shared/useTheme';
import { BrandMark } from '../BrandMark/BrandMark';
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
  { key: 'common.nav.blog', path: paths.blog },
  { key: 'common.nav.log', path: paths.log },
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

  const currentLang = i18n.language?.startsWith('es') ? 'es' : 'en';
  // Un solo control para dos idiomas: pulsarlo lleva al otro. Dos botones
  // ocupaban el doble para la misma decision binaria.
  const toggleLang = () => {
    void i18n.changeLanguage(currentLang === 'es' ? 'en' : 'es');
  };

  return (
    <header className="header">
      <div className="header__inner container">
        <button className="header__brand" onClick={() => go(paths.home)}>
          <BrandMark size="small" className="header__brand-mark" />
          David Yepes
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

          <span className="header__sep" aria-hidden="true">
            |
          </span>

          <button
            className="header__lang"
            onClick={toggleLang}
            aria-label={currentLang === 'es' ? 'Switch to English' : 'Cambiar a español'}
          >
            <span className={currentLang === 'es' ? 'header__lang-on' : ''}>ES</span>
            <span className="header__lang-slash">/</span>
            <span className={currentLang === 'en' ? 'header__lang-on' : ''}>EN</span>
          </button>

          <button
            className="header__theme"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {/* Se muestra el estado actual, no el destino: el aria-label ya
                dice a donde lleva pulsarlo. */}
            {isDark ? <Moon size={15} /> : <Sun size={15} />}
          </button>
        </nav>

        <button
          className="header__burger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '×' : '≡'}
        </button>
      </div>
    </header>
  );
};
