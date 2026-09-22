import React from 'react';
import { BrandMark } from '../BrandMark/BrandMark';
import { SuperTypography } from '../SuperTypography/SuperTypography';
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
    <SuperTypography as="h1" variant="display" align="center">
      David Yepes
    </SuperTypography>
    <SuperTypography variant="tagline" color="accent" align="center" className="identity__measure">
      {tagline}
    </SuperTypography>
    <SuperTypography variant="body" color="subtext" align="center" className="identity__measure">
      {description}
    </SuperTypography>
    {children}
  </section>
);
