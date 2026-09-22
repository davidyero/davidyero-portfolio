import { ReactNode } from 'react';

/**
 * Ancho de la pantalla. No es una escala libre: cada variante existe porque un
 * tipo de contenido la necesita.
 *
 * - `reading`: columna de lectura. Home y Sobre mí.
 * - `list`: listados (apps, blog, build-in-public). Más ancho porque la tabla
 *   del catálogo no cabe en la columna de lectura sin volverse ilegible.
 * - `doc`: texto largo (legales, entradas del blog).
 */
export type PageVariant = 'reading' | 'list' | 'doc';

export interface SuperPageTemplateProps {
  variant: PageVariant;
  /** Cabecera de listado. Si falta, la pantalla monta la suya (home, fichas…). */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  /** Controles bajo la cabecera: los filtros del catálogo, por ejemplo. */
  headerExtra?: ReactNode;
  children: ReactNode;
}
