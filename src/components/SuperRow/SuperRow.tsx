import React from 'react';
import { SuperRowProps } from './SuperRow.types';
import './SuperRow.scss';

// Fila de destino: el unico patron de navegacion del sitio. Icono, titulo,
// subtitulo y chevron. Sustituye a las tarjetas: una lista de filas aguanta 17
// elementos sin cansar, una rejilla de tarjetas no.
export const SuperRow: React.FC<SuperRowProps> = ({
  image,
  icon,
  title,
  subtitle,
  onClick,
  href,
}) => {
  const inner = (
    <>
      {image ? (
        <img src={image} alt="" className="super-row__image" />
      ) : (
        <span className="super-row__icon">{icon}</span>
      )}
      <span className="super-row__body">
        <span className="super-row__title">{title}</span>
        {subtitle && <span className="super-row__subtitle">{subtitle}</span>}
      </span>
      <span className="super-row__chevron" aria-hidden="true">
        ›
      </span>
    </>
  );

  if (href) {
    return (
      <a className="super-row" href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <button className="super-row" type="button" onClick={onClick}>
      {inner}
    </button>
  );
};
