export interface SuperTypewriterProps {
  /** Se escriben y se borran en bucle, en este orden. */
  words: string[];
  /** ms por carácter al escribir. */
  typeMs?: number;
  /** ms por carácter al borrar; borrar más rápido que escribir es lo que hace que parezca una máquina. */
  deleteMs?: number;
  /** ms que la palabra se queda entera antes de borrarse. */
  holdMs?: number;
}
