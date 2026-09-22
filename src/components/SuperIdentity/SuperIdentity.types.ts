import { ReactNode } from 'react';

export interface SuperIdentityProps {
  /** Línea corta bajo el nombre, en acento. */
  tagline: string;
  /** Párrafo de descripción. */
  description: string;
  /** Lo que va debajo: cifras, tira de tecnologías… */
  children?: ReactNode;
}
