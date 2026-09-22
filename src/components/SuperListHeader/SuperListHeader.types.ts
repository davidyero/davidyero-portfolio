import { ReactNode } from 'react';

export interface SuperListHeaderProps {
  /** Eyebrow de terminal: `$ ls apps/`, `$ cat blog/`… */
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Filtros u otros controles bajo la cabecera. */
  children?: ReactNode;
}
