import React from 'react';
import { SuperTypography } from '../SuperTypography/SuperTypography';
import { SuperListHeaderProps } from './SuperListHeader.types';
import './SuperListHeader.scss';

// Cabecera de las tres vistas de listado: apps, blog y build-in-public.
//
// Vive en un solo sitio porque las tres tienen que leerse como la misma
// pantalla con distinto contenido; cuando cada una traía su propio markup,
// bastaba tocar una para que dejaran de parecerse.
export const SuperListHeader: React.FC<SuperListHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  children,
}) => (
  <header className="list-header">
    <SuperTypography as="span" variant="eyebrow" color="muted">
      {eyebrow}
    </SuperTypography>
    <SuperTypography as="h1" variant="display">
      {title}
    </SuperTypography>
    <SuperTypography variant="small" color="muted">
      {subtitle}
    </SuperTypography>
    {children}
  </header>
);
