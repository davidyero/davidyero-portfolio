import React from 'react';
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
    <span className="mono-eyebrow">{eyebrow}</span>
    <h1 className="list-header__title">{title}</h1>
    <p className="list-header__subtitle">{subtitle}</p>
    {children}
  </header>
);
