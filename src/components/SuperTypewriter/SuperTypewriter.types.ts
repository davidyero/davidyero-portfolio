export interface SuperTypewriterProps {
  /** Trozo ya escrito. El ciclo lo lleva useTypewriterCycle. */
  text: string;
  /** Sin animación (preferencia del sistema) no se pinta cursor. */
  showCaret?: boolean;
}
