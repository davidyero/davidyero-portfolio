import { ReactNode } from 'react';

export interface SuperRowProps {
  /** Imagen del icono de una app. */
  image?: string;
  /**
   * Icono de la fila. Un nodo, no un texto: las filas de destino llevan icono
   * de verdad, no las dos primeras letras de la palabra.
   */
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  /** Navegacion interna. Excluyente con `href`. */
  onClick?: () => void;
  /** Enlace externo; se abre en pestaña nueva. */
  href?: string;
  /** Línea extra bajo el subtítulo: cifras de la app, por ejemplo. */
  meta?: string;
}
