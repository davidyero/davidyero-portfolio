import React from 'react';
import { ChangelogItemProps } from './ChangelogItem.types';
import './ChangelogItem.scss';

const typeLabels = {
  new: 'Nuevo',
  improvement: 'Mejora',
  fix: 'Corrección',
};

const typeIcons = {
  new: '🚀',
  improvement: '🔧',
  fix: '🐛',
};

export const ChangelogItem: React.FC<ChangelogItemProps> = ({
  version,
  date,
  type,
  changes,
  icon,
}) => {
  return (
    <div className="changelog-item">
      <div className="changelog-item__icon">{icon || typeIcons[type]}</div>
      <div className="changelog-item__header">
        <h3 className="changelog-item__version">Versión {version}</h3>
        <p className="changelog-item__date">Lanzado el {date}</p>
      </div>
      <div className="changelog-item__tags">
        <span className={`changelog-item__tag changelog-item__tag--${type}`}>
          {typeLabels[type]}
        </span>
      </div>
      <ul className="changelog-item__changes">
        {changes.map((change, index) => (
          <li key={index} className="changelog-item__change">
            {change}
          </li>
        ))}
      </ul>
    </div>
  );
};
