import React from 'react';
import { BrandMark } from '../BrandMark/BrandMark';
import { SuperIdentityProps } from './SuperIdentity.types';
import './SuperIdentity.scss';

// Cabecera de identidad: avatar, nombre, una línea y el párrafo.
//
// Vive en un solo sitio porque la usan la home y Sobre mí. Cuando estaba
// escrita en las dos, cambiar la tipografía del nombre en una dejaba la otra
// con la anterior.
export const SuperIdentity: React.FC<SuperIdentityProps> = ({
  tagline,
  description,
  children,
}) => (
  <section className="identity">
    <BrandMark size="large" className="identity__avatar" />
    <h1 className="identity__name">David Yepes</h1>
    <p className="identity__tagline">{tagline}</p>
    <p className="identity__description">{description}</p>
    {children}
  </section>
);
