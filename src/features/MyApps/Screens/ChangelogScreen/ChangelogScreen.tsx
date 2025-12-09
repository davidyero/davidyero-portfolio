import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../../../../components/Header/Header';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { ChangelogItem } from '../../Components/ChangelogItem/ChangelogItem';
import { ChangelogScreenProps } from './ChangelogScreen.types';
import { appsData } from '../../data/appsData';
import './ChangelogScreen.scss';

export const ChangelogScreen: React.FC<ChangelogScreenProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const app = appsData.find((a) => a.slug === slug);

  if (!app) {
    return (
      <>
        <Header />
        <div className="changelog-screen">
          <div className="changelog-screen__container">
            <p className="changelog-screen__empty">App no encontrada</p>
          </div>
        </div>
      </>
    );
  }

  const filteredChangelog = app.changelog?.filter((entry) =>
    entry.version.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="changelog-screen">
        <div className="changelog-screen__container">
          <div className="changelog-screen__header">
            <h1 className="changelog-screen__title">Changelog de {app.name}</h1>
            <p className="changelog-screen__subtitle">
              Historial de versiones y actualizaciones.
            </p>
            <div className="changelog-screen__actions">
              <div className="changelog-screen__search">
                <span className="changelog-screen__search-icon">🔍</span>
                <input
                  type="text"
                  className="changelog-screen__search-input"
                  placeholder="Filtrar por versión..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <SuperButton variant="primary" onClick={() => navigate(`/apps/${slug}`)}>
                Volver a Apps
              </SuperButton>
            </div>
          </div>

          {filteredChangelog && filteredChangelog.length > 0 ? (
            <div className="changelog-screen__timeline">
              {filteredChangelog.map((entry, index) => (
                <ChangelogItem
                  key={index}
                  version={entry.version}
                  date={entry.date}
                  type={entry.type}
                  changes={entry.changes}
                />
              ))}
            </div>
          ) : (
            <p className="changelog-screen__empty">
              {searchTerm
                ? 'No se encontraron versiones que coincidan con tu búsqueda'
                : 'No hay entradas de changelog disponibles'}
            </p>
          )}
        </div>
      </div>
    </>
  );
};
