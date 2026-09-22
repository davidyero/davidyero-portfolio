import React from 'react';
import { SuperTypewriterProps } from './SuperTypewriter.types';
import './SuperTypewriter.scss';

// Un texto que se está escribiendo, con su cursor. No decide qué escribir ni
// cuándo: eso lo lleva useTypewriterCycle, que mueve varias líneas a la vez.
export const SuperTypewriter: React.FC<SuperTypewriterProps> = ({ text, showCaret = true }) => (
  <span className="typewriter">
    <span>{text}</span>
    {showCaret && <span className="typewriter__caret" aria-hidden="true" />}
  </span>
);
