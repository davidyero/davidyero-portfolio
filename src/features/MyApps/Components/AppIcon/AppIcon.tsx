import React from 'react';
import { EnrichedApp } from '../../Screens/MyAppsScreen/MyAppsScreen.types';
import './AppIcon.scss';

interface AppIconProps {
  app: EnrichedApp;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AppIcon: React.FC<AppIconProps> = ({ app, size = 'md' }) => {
  return (
    <div
      className={`app-icon app-icon--${size}`}
      style={{ background: app.accent ?? app.iconBgColor ?? 'var(--surface-0)' }}
    >
      {app.logo ? (
        <img src={app.logo} alt={`${app.name}`} className="app-icon__img" />
      ) : (
        <span className="app-icon__emoji">{app.icon}</span>
      )}
    </div>
  );
};
