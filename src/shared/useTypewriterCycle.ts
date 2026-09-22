import { useEffect, useRef, useState } from 'react';

/**
 * Escribe varias cadenas A LA VEZ, las mantiene, las borra y pasa al siguiente
 * paso, en bucle.
 *
 * La clave es que el avance es una fracción compartida, no un contador de
 * caracteres por línea: así "Líder técnico" y "Scotiabank Colpatria" terminan
 * de escribirse en el mismo instante aunque midan muy distinto. Con un contador
 * por línea, la corta acababa antes y el efecto se rompía.
 */
export interface TypewriterCycleOptions {
  /** ms que tarda en escribirse un paso completo. */
  typeMs?: number;
  /** ms en borrarse; borrar más rápido que escribir es lo que parece una máquina. */
  deleteMs?: number;
  /** ms que el paso se queda entero antes de borrarse. */
  holdMs?: number;
}

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fotogramas por segundo del efecto. 24 basta y no calienta el portátil. */
const FRAME_MS = 42;

export const useTypewriterCycle = (
  steps: string[][],
  { typeMs = 900, deleteMs = 420, holdMs = 2200 }: TypewriterCycleOptions = {}
): { lines: string[]; isStill: boolean } => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDeleting, setDeleting] = useState(false);
  const still = useRef(prefersReducedMotion());

  const step = steps[index] ?? [];

  useEffect(() => {
    if (still.current || steps.length === 0) return undefined;

    if (!isDeleting && progress >= 1) {
      const timer = window.setTimeout(() => setDeleting(true), holdMs);
      return () => window.clearTimeout(timer);
    }

    if (isDeleting && progress <= 0) {
      setDeleting(false);
      setIndex((current) => (current + 1) % steps.length);
      return undefined;
    }

    const delta = FRAME_MS / (isDeleting ? deleteMs : typeMs);
    const timer = window.setTimeout(() => {
      setProgress((current) =>
        Math.min(1, Math.max(0, current + (isDeleting ? -delta : delta)))
      );
    }, FRAME_MS);
    return () => window.clearTimeout(timer);
  }, [progress, isDeleting, index, steps.length, typeMs, deleteMs, holdMs]);

  if (still.current) {
    return { lines: steps[0] ?? [], isStill: true };
  }

  return {
    lines: step.map((text) => text.slice(0, Math.round(text.length * progress))),
    isStill: false,
  };
};
