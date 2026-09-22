import React from 'react';
import { SuperTypographyProps } from './SuperTypography.types';
import './SuperTypography.scss';

// Todo el texto del sitio pasa por aquí. El componente no decide la etiqueta
// HTML —eso es semántica del documento y la pone quien lo usa con `as`—, solo
// el papel visual.
export const SuperTypography: React.FC<SuperTypographyProps> = ({
  variant,
  color = 'text',
  align = 'start',
  as: Tag = 'p',
  className = '',
  children,
}) => (
  <Tag
    className={[
      'typo',
      `typo--${variant}`,
      `typo--color-${color}`,
      align === 'center' ? 'typo--center' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </Tag>
);
