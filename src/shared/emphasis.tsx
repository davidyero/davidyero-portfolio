import React from 'react';

/**
 * Convierte `**texto**` en `<strong>`. Existe para que las cifras de una frase
 * se resalten SIN partirla en varias claves de i18n: separar "+3.500" de
 * "descargas" obliga a cada idioma a respetar un orden de palabras que no
 * siempre es el suyo.
 *
 * No interpreta nada más que los asteriscos dobles: el texto viene de nuestros
 * propios archivos de traducción, no de fuera.
 */
export const withEmphasis = (text: string): React.ReactNode[] =>
  text.split(/\*\*(.+?)\*\*/g).map((chunk, index) =>
    // Los trozos en posición impar son los que iban entre asteriscos.
    index % 2 === 1 ? <strong key={index}>{chunk}</strong> : chunk
  );
