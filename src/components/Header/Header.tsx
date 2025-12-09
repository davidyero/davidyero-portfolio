import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../shared/useTheme';
import { HeaderProps } from './Header.types';
import { ReactComponent as UsaFlag } from '../../assets/svg/flags/usa-flag.svg';
import { ReactComponent as SpainFlag } from '../../assets/svg/flags/spain-flag.svg';
import './Header.scss';

interface Language {
  code: string;
  name: string;
  flag: React.FC<React.SVGProps<SVGSVGElement>>;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: UsaFlag },
  { code: 'es', name: 'Español', flag: SpainFlag },
];

export const Header: React.FC<HeaderProps> = () => {
  const { toggleTheme, isDark } = useTheme();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo" onClick={() => navigate('/')}>
          Portfolio
        </div>
        <nav className="header__nav">
          <button
            className={`header__link ${location.pathname === '/apps' ? 'header__link--active' : ''}`}
            onClick={() => navigate('/apps')}
          >
            {t('common.header.apps')}
          </button>
          <button
            className={`header__link ${location.pathname === '/about' ? 'header__link--active' : ''}`}
            onClick={() => navigate('/about')}
          >
            {t('common.header.about')}
          </button>

          <div className="header__lang-dropdown" ref={dropdownRef}>
            <button
              className="header__lang-toggle"
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            >
              <currentLanguage.flag className="header__flag" />
              <span className="header__lang-name">{currentLanguage.name}</span>
              <span className={`header__dropdown-arrow ${isLangDropdownOpen ? 'header__dropdown-arrow--open' : ''}`}>
                ▼
              </span>
            </button>

            {isLangDropdownOpen && (
              <div className="header__lang-menu">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`header__lang-option ${lang.code === i18n.language ? 'header__lang-option--active' : ''}`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    <lang.flag className="header__flag" />
                    <span className="header__lang-option-name">{lang.name}</span>
                    {lang.code === i18n.language && (
                      <span className="header__lang-option-check">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="header__theme-toggle" onClick={toggleTheme}>
            {isDark ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
};
