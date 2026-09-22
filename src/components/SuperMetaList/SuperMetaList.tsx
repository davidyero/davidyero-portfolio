import React from 'react';
import { SuperMetaListProps } from './SuperMetaList.types';
import './SuperMetaList.scss';

// Metadatos en filas `clave: valor` alineadas. Es lo que sustituye al contador
// de años/meses/dias: una fecha ISO dice lo mismo y no se mueve sola.
export const SuperMetaList: React.FC<SuperMetaListProps> = ({ entries }) => (
  <dl className="super-meta">
    {entries.map((entry) => (
      <div key={entry.label} className="super-meta__row">
        <dt className="super-meta__label">{entry.label}</dt>
        <dd className="super-meta__value">{entry.value}</dd>
      </div>
    ))}
  </dl>
);
