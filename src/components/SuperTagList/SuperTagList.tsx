import React from 'react';
import { SuperTagListProps } from './SuperTagList.types';
import './SuperTagList.scss';

// Tira de etiquetas en mono mayusculas: el unico adorno de la home. Se pinta
// tal cual lo que se le pasa; no interpreta ni traduce (son nombres propios de
// tecnologia, iguales en los dos idiomas).
export const SuperTagList: React.FC<SuperTagListProps> = ({ tags, align = 'center' }) => (
  <ul className={`super-tags super-tags--${align}`}>
    {tags.map((tag) => (
      <li key={tag} className="super-tags__tag">
        {tag}
      </li>
    ))}
  </ul>
);
