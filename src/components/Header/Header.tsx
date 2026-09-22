import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../shared/useTheme';
import { useFeatureFlags } from '../../shared/useFeatureFlags';
import { BrandMark } from '../BrandMark/BrandMark';
import { SuperTypewriter } from '../SuperTypewriter/SuperTypewriter';
import { useTypewriterCycle } from '../../shared/useTypewriterCycle';
import { paths } from '../../shared/paths';
import { HeaderProps } from './Header.types';
import './Header.scss';

interface NavItem {
  key: string;
  path: string;
  /** Interruptor que lo gobierna; sin él, el item siempre se muestra. */
  flag?: 'blog' | 'logs';
}

const navItems: NavItem[] = [
  { key: 'common.nav.home', path: paths.home },
  { key: 'common.nav.apps', path: paths.apps },
  { key: 'common.nav.blog', path: paths.blog, flag: 'blog' },
  { key: 'common.nav.log', path: paths.log, flag: 'logs' },
  { key: 'common.nav.about', path: paths.aboutMe },
];

// Rótulos que se turnan en la marca. El nombre es un nombre propio y no pasa
// por i18n; los cargos sí.
const BRAND_KEYS = [
  'header.brand.name',
  'header.brand.frontend',
  'header.brand.techLead',
  'header.brand.indie',
];

export const Header: React.FC<HeaderProps> = () => {
  const { toggleTheme, isDark } = useTheme();
  // Blog y Logs solo aparecen cuando estan encendidos en el backoffice: hasta
  // que haya entradas publicadas, llevaban a una lista vacia.
  const flags = useFeatureFlags();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleNavItems = navItems.filter((item) => !item.flag || flags[item.flag]);

  const brandSteps = React.useMemo(() => BRAND_KEYS.map((key) => [t(key)]), [t]);
  const { lines: brandLines, isStill: brandStill } = useTypewriterCycle(brandSteps);

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
          <SuperTypewriter text={brandLines[0] ?? ''} showCaret={!brandStill} />
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {visibleNavItems.map((item) => (
            <button
              key={item.path}
              className={`header__link ${isActive(item.path) ? 'header__link--active' : ''}`}
              onClick={() => go(item.path)}
            >
              {t(item.key)}
            </button>
          ))}

          {/* Idioma y tema van juntos: en el menú desplegable se separan del
              resto con una regla y se alinean a la derecha de la fila. */}
          <div className="header__controls">
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
          </div>
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
