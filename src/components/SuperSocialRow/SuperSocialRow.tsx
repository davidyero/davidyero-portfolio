import React from 'react';
import { SOCIAL_LINKS, SocialNetwork } from '../../shared/contact';
import { BRAND_PATHS } from './brandPaths';
import { SuperSocialRowProps } from './SuperSocialRow.types';
import './SuperSocialRow.scss';

const LABELS: Record<SocialNetwork, string> = {
  github: 'GitHub',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  twitter: 'X',
  linkedin: 'LinkedIn',
};

const DEFAULT_ORDER: SocialNetwork[] = [
  'github',
  'instagram',
  'tiktok',
  'youtube',
  'twitter',
  'linkedin',
];

const BrandGlyph: React.FC<{ network: SocialNetwork }> = ({ network }) => {
  const path = BRAND_PATHS[network];
  // LinkedIn no tiene path (ver brandPaths.ts): se dibuja con su glifo de
  // texto, el mismo `in` que usa la fila de enlaces de la home.
  if (!path) return <span className="social-row__glyph">in</span>;
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
};

// Fila de perfiles publicos. Cierra la home, debajo del bloque de contacto.
export const SuperSocialRow: React.FC<SuperSocialRowProps> = ({
  networks = DEFAULT_ORDER,
}) => (
  <nav className="social-row" aria-label="Redes">
    {networks.map((network) => (
      <a
        key={network}
        className="social-row__link"
        href={SOCIAL_LINKS[network]}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={LABELS[network]}
        title={LABELS[network]}
      >
        <BrandGlyph network={network} />
      </a>
    ))}
  </nav>
);
