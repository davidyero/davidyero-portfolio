import { ReactNode } from 'react';

export interface SuperRowProps {
  /**
   * Glifo de la izquierda. Una imagen (icono de app) o un texto corto de
   * terminal (`ls`, `~/`, `git`): el sistema no admite iconos decorativos
   * dentro de circulos con degradado.
   */
  icon?: string;
  glyph?: string;
  title: string;
  subtitle?: string;
  /** Navegacion interna. Excluyente con `href`. */
  onClick?: () => void;
  /** Enlace externo; se abre en pestaña nueva. */
  href?: string;
}
