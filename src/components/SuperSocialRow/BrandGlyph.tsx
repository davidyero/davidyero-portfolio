import React from 'react';
import { BRAND_PATHS } from './brandPaths';
import { SocialNetwork } from '../../shared/contact';

// Logo de marca como SVG. LinkedIn no tiene path (simple-icons lo retiró por
// una petición legal de la marca), así que se dibuja con su glifo de texto.
export const BrandGlyph: React.FC<{ network: SocialNetwork; size?: number }> = ({
  network,
  size = 18,
}) => {
  const path = BRAND_PATHS[network];
  if (!path) return <span className="brand-glyph__text">in</span>;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
};
