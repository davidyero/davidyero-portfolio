import React, { useEffect, useRef, useState } from 'react';
import { SuperTypewriterProps } from './SuperTypewriter.types';
import './SuperTypewriter.scss';

// Escribe una palabra, la mantiene, la borra y pasa a la siguiente, en bucle.
//
// Es el único movimiento continuo del sitio, y existe porque una lista de nueve
// empresas en una fila de metadatos no cabe. Quien haya pedido menos animación
// en el sistema operativo ve la primera y nada se mueve.
const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const SuperTypewriter: React.FC<SuperTypewriterProps> = ({
  words,
  typeMs = 55,
  deleteMs = 28,
  holdMs = 1600,
}) => {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [isDeleting, setDeleting] = useState(false);
  const still = useRef(prefersReducedMotion());

  const word = words[index] ?? '';

  useEffect(() => {
    if (still.current || words.length === 0) return undefined;

    // Palabra completa: esperar y empezar a borrar.
    if (!isDeleting && length === word.length) {
      const timer = window.setTimeout(() => setDeleting(true), holdMs);
      return () => window.clearTimeout(timer);
    }

    // Palabra vacía: pasar a la siguiente y volver a escribir.
    if (isDeleting && length === 0) {
      setDeleting(false);
      setIndex((current) => (current + 1) % words.length);
      return undefined;
    }

    const timer = window.setTimeout(
      () => setLength((current) => current + (isDeleting ? -1 : 1)),
      isDeleting ? deleteMs : typeMs
    );
    return () => window.clearTimeout(timer);
  }, [length, isDeleting, word, words.length, typeMs, deleteMs, holdMs]);

  // Sin animación se muestra la primera entera; con ella, el trozo escrito.
  const visible = still.current ? words[0] ?? '' : word.slice(0, length);

  return (
    <span className="typewriter" aria-label={words.join(', ')}>
      <span aria-hidden="true">{visible}</span>
      {!still.current && <span className="typewriter__caret" aria-hidden="true" />}
    </span>
  );
};
