import React from 'react';
import { BadgeProps } from './Badge.types';
import './Badge.scss';

export const Badge: React.FC<BadgeProps> = ({
  tone = 'neutral',
  size = 'md',
  children,
  className = '',
}) => {
  const classes = ['badge', `badge--${tone}`, `badge--${size}`, className]
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{children}</span>;
};
