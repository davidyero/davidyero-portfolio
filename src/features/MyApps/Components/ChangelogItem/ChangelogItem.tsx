import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChangelogItemProps } from './ChangelogItem.types';
import './ChangelogItem.scss';

const typeTone: Record<string, string> = {
  new: 'new',
  improvement: 'improvement',
  fix: 'fix',
};

export const ChangelogItem: React.FC<ChangelogItemProps> = ({
  version,
  date,
  type,
  changes,
}) => {
  const { t } = useTranslation();

  return (
    <div className="changelog-item">
      <span className="changelog-item__dot" />
      <div className="changelog-item__body">
        <div className="changelog-item__head">
          <h3 className="changelog-item__version">v{version}</h3>
          <span className={`changelog-item__tag changelog-item__tag--${typeTone[type]}`}>
            {t(`apps.changelog.type.${type}`)}
          </span>
          <span className="changelog-item__date">{date}</span>
        </div>
        <ul className="changelog-item__changes">
          {changes.map((change, index) => (
            <li key={index} className="changelog-item__change">
              {change}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
