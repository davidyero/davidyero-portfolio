import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '../../../../components/Badge/Badge';
import { AppIcon } from '../AppIcon/AppIcon';
import { getAppContent, getAppKind, kindI18nKey, platformLabels } from '../../data/registry';
import { AppCardProps } from './AppCard.types';
import './AppCard.scss';

const statusTone = (status: string): 'live' | 'beta' | 'soon' =>
  status === 'beta' ? 'beta' : status === 'soon' ? 'soon' : 'live';

export const AppCard: React.FC<AppCardProps> = ({ app, onClick }) => {
  const { t, i18n } = useTranslation();
  const content = getAppContent(app.slug, i18n.language);
  const kind = getAppKind(app);
  const tech = (app.tech ?? []).slice(0, 3);

  return (
    <button className="app-card" onClick={onClick}>
      <div className="app-card__top">
        <AppIcon app={app} size="lg" />
        <div className="app-card__badges">
          <Badge tone="neutral" size="sm">{t(kindI18nKey[kind])}</Badge>
          <Badge tone={statusTone(app.status)}>{t(`apps.status.${app.status}`)}</Badge>
        </div>
      </div>

      <h3 className="app-card__name">{app.name}</h3>
      <p className="app-card__tagline">{content?.tagline ?? ''}</p>

      {tech.length > 0 && (
        <div className="app-card__tech">
          {tech.map((item) => (
            <span key={item} className="app-card__tech-chip">
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="app-card__meta">
        <div className="app-card__platforms">
          {app.platforms.map((p) => (
            <span key={p} className="app-card__platform">
              {platformLabels[p]}
            </span>
          ))}
        </div>
        <span className="app-card__category">{t(`apps.category.${app.category}`)}</span>
      </div>
    </button>
  );
};
