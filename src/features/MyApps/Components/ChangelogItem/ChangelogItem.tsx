import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChangelogItemProps } from './ChangelogItem.types';
import './ChangelogItem.scss';

// Una entrada = una version. Sin iconos ni puntos de linea de tiempo: la
// version en mono a la izquierda ya ordena la lectura.
export const ChangelogItem: React.FC<ChangelogItemProps> = ({
  version,
  date,
  type,
  changes,
}) => {
  const { t } = useTranslation();

  return (
    <article className="changelog-item">
      <div className="changelog-item__head">
        <h2 className="changelog-item__version">v{version}</h2>
        <span className={`changelog-item__type changelog-item__type--${type}`}>
          {t(`apps.changelog.type.${type}`)}
        </span>
        <span className="changelog-item__date">{date}</span>
      </div>

      <ul className="doc-list">
        {changes.map((change) => (
          <li key={change}>{change}</li>
        ))}
      </ul>
    </article>
  );
};
