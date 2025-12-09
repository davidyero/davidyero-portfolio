import React from 'react';
import { AppCardProps } from './AppCard.types';
import './AppCard.scss';

export const AppCard: React.FC<AppCardProps> = ({
  name,
  description,
  icon,
  logo,
  iconBgColor = '#e2e8f0',
  onClick,
}) => {
  return (
    <div className="app-card" onClick={onClick}>
      <div className="app-card__icon" style={{ backgroundColor: iconBgColor }}>
        {logo ? (
          <img src={logo} alt={`${name} logo`} className="app-card__logo" />
        ) : (
          icon
        )}
      </div>
      <h3 className="app-card__name">{name}</h3>
      <p className="app-card__description">{description}</p>
    </div>
  );
};
