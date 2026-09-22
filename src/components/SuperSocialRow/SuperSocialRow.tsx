import React from 'react';
import { SOCIAL_LINKS, SocialNetwork } from '../../shared/contact';
import { BrandGlyph } from './BrandGlyph';
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
