import React from 'react';
import brandMark from '../../assets/brand/BrandMark.png';
import { BrandMarkProps } from './BrandMark.types';
import './BrandMark.scss';

// The <dy> monogram. Sizes match where it is used: footer (small),
// header (medium) and the About profile card (large).
export const BrandMark: React.FC<BrandMarkProps> = ({ size = 'medium', className = '' }) => (
  <img
    src={brandMark}
    alt="DavidyeroDev"
    className={['brand-mark', `brand-mark--${size}`, className].filter(Boolean).join(' ')}
  />
);
