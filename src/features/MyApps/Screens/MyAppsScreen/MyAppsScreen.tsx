import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from '../../../../components/Header/Header';
import { Footer } from '../../../../components/Footer/Footer';
import { AppCard } from '../../Components/AppCard/AppCard';
import { MyAppsScreenProps } from './MyAppsScreen.types';
import { appsData } from '../../data/appsData';
import './MyAppsScreen.scss';

export const MyAppsScreen: React.FC<MyAppsScreenProps> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleAppClick = (slug: string) => {
    navigate(`/apps/${slug}`);
  };

  return (
    <>
      <Header />
      <div className="my-apps-screen">
        <div className="my-apps-screen__container">
          <div className="my-apps-screen__header">
            <h1 className="my-apps-screen__title">{t('apps.title')}</h1>
            <p className="my-apps-screen__subtitle">
              {t('apps.subtitle')}
            </p>
          </div>
          <div className="my-apps-screen__grid">
            {appsData.map((app) => (
              <AppCard
                key={app.id}
                name={app.name}
                description={app.description}
                icon={app.icon}
                logo={app.logo}
                iconBgColor={app.iconBgColor}
                onClick={() => handleAppClick(app.slug)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
