import React from 'react';
import { EnrichedApp } from '../../Screens/MyAppsScreen/MyAppsScreen.types';
import './AppIcon.scss';

interface AppIconProps {
  app: EnrichedApp;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Initials fallback (no emoji) for apps without a logo image.
const getInitials = (name: string): string => {
  const words = name.trim().split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

export const AppIcon: React.FC<AppIconProps> = ({ app, size = 'md' }) => {
  return (
    <div
      className={`app-icon app-icon--${size}`}
      style={{ background: app.accent ?? app.iconBgColor ?? 'var(--surface-0)' }}
    >
      {app.logo ? (
        <img src={app.logo} alt={`${app.name}`} className="app-icon__img" />
      ) : (
        <span className="app-icon__initials">{getInitials(app.name)}</span>
      )}
    </div>
  );
};
