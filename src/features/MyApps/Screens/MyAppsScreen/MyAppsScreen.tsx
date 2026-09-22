import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { Badge } from '../../../../components/Badge/Badge';
import { paths } from '../../../../shared/paths';
import { useMyAppsScreen } from './useMyAppsScreen';
import { MyAppsScreenProps } from './MyAppsScreen.types';
import './MyAppsScreen.scss';

const statusTone = (status: string): 'live' | 'beta' | 'soon' =>
  status === 'beta' ? 'beta' : status === 'soon' ? 'soon' : 'live';

// El catalogo es un listado, no una rejilla de tarjetas: 17 filas alineadas se
// recorren de un vistazo y aguantan 40 sin cambiar de forma.
export const MyAppsScreen: React.FC<MyAppsScreenProps> = () => {
  const navigate = useNavigate();
  const { t, filter, setFilter, filters, rows, counts } = useMyAppsScreen();

  return (
    <PageLayout>
      <div className="catalog container container--reading">
        <header className="catalog__header">
          <span className="mono-eyebrow">{t('apps.catalog.eyebrow')}</span>
          <h1 className="catalog__title">{t('apps.catalog.title', { count: counts.total })}</h1>
          <p className="catalog__subtitle">{t('apps.catalog.subtitle', { ...counts })}</p>
        </header>

        <div className="catalog__filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`catalog__filter ${filter === f.key ? 'catalog__filter--active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              [ {t(f.labelKey)} ]
            </button>
          ))}
        </div>

        {/* La tabla es el unico elemento del sitio que puede desplazarse en
            horizontal: por debajo de su ancho minimo las columnas dejarian de
            estar alineadas, que es justo lo que la hace legible. */}
        <div className="catalog__scroll">
          <div className="catalog__table">
            <div className="catalog__head">
              <span />
              <span className="mono-label">{t('apps.catalog.col.app')}</span>
              <span className="mono-label">{t('apps.catalog.col.what')}</span>
              <span className="mono-label">{t('apps.catalog.col.platforms')}</span>
              <span className="mono-label catalog__col-status">
                {t('apps.catalog.col.status')}
              </span>
            </div>

            {rows.map((row) => (
              <button
                key={row.slug}
                className="catalog__row"
                onClick={() => navigate(paths.app(row.slug))}
              >
                {row.icon ? (
                  <img src={row.icon} alt="" className="catalog__icon" />
                ) : (
                  <span className="catalog__icon catalog__icon--initials">{row.initials}</span>
                )}
                <span className="catalog__name">{row.name}</span>
                <span className="catalog__what">{row.what}</span>
                <span className="catalog__platforms">{row.platforms}</span>
                <span className="catalog__status">
                  <Badge tone={statusTone(row.status)}>{t(`apps.status.short.${row.status}`)}</Badge>
                </span>
              </button>
            ))}
          </div>
        </div>

        {rows.length === 0 && <p className="catalog__empty">{t('apps.catalog.empty')}</p>}
      </div>
    </PageLayout>
  );
};
