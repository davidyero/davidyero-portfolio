import { ReactNode } from 'react';

export interface SuperMetaEntry {
  /** Etiqueta con dos puntos, estilo `git config --list`. */
  label: string;
  /** Texto, o cualquier nodo: la fila de experiencia lleva un SuperTypewriter. */
  value: ReactNode;
}

export interface SuperMetaListProps {
  entries: SuperMetaEntry[];
}
