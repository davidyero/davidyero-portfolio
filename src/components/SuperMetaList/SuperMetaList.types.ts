export interface SuperMetaEntry {
  /** Etiqueta con dos puntos, estilo `git config --list`: "activo desde:". */
  label: string;
  value: string;
}

export interface SuperMetaListProps {
  entries: SuperMetaEntry[];
}
