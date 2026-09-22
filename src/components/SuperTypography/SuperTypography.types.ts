import { ElementType, ReactNode } from 'react';

/**
 * Cada variante es un PAPEL, no un tamaño: se elige por lo que el texto es en
 * la página, y el tamaño lo decide el sistema. Así un cambio de escala se hace
 * aquí y llega a todas las pantallas.
 */
export type TypographyVariant =
  /** Rótulo de pantalla: nombre de la home, título de listado, nombre de app. Pixelada. */
  | 'display'
  /** Título dentro del contenido: un puesto, una versión del changelog. */
  | 'section'
  /** Eyebrow de terminal: `$ ls apps/`, `// stack`. */
  | 'eyebrow'
  /** Línea corta en acento bajo un título. */
  | 'tagline'
  /** Texto corrido. */
  | 'body'
  /** Dato o texto secundario. */
  | 'small'
  /** Metadato de reojo: fechas, plataformas, rutas. */
  | 'meta';

export type TypographyColor =
  | 'text'
  | 'subtext'
  | 'muted'
  | 'accent'
  | 'warning'
  | 'danger';

export interface SuperTypographyProps {
  variant: TypographyVariant;
  color?: TypographyColor;
  align?: 'start' | 'center';
  /** Etiqueta HTML. El papel visual no decide la semántica del documento. */
  as?: ElementType;
  className?: string;
  children: ReactNode;
}
