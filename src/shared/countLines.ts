import { AppCounts } from '../features/MyApps/data/registry';

type Translate = (key: string, options?: Record<string, unknown>) => string;

/**
 * Las lineas de cifras se arman por segmentos y se descartan los que valen
 * cero: escribir "0 en beta · 0 sin servicio" es ruido, y en cuanto el catalogo
 * cambia de forma esas frases dejan de tener sentido solas.
 */
const join = (parts: Array<string | null>): string => parts.filter(Boolean).join(' · ');

const statusParts = (counts: AppCounts, t: Translate, prefix: string): Array<string | null> => [
  counts.live ? t(`${prefix}.live`, { count: counts.live }) : null,
  counts.beta ? t(`${prefix}.beta`, { count: counts.beta }) : null,
  counts.soon ? t(`${prefix}.soon`, { count: counts.soon }) : null,
  counts.offline ? t(`${prefix}.offline`, { count: counts.offline }) : null,
];

/** Home: "16 productos propios · 16 en producción". */
export const heroCountsLine = (counts: AppCounts, t: Translate): string =>
  join([t('home.hero.counts.total', { count: counts.total }), ...statusParts(counts, t, 'home.hero.counts')]);

/** Fila `apps/` de la home: "Las 16 apps: 16 live". */
export const indexCountsLine = (counts: AppCounts, t: Translate): string =>
  `${t('home.index.apps', { count: counts.total })}: ${join(statusParts(counts, t, 'apps.catalog.count'))}`;

/** Catálogo: "16 live — 11 Android · 7 iOS · 6 web". */
export const catalogSubtitle = (counts: AppCounts, t: Translate): string => {
  const platforms = join([
    counts.android ? t('apps.catalog.count.android', { count: counts.android }) : null,
    counts.ios ? t('apps.catalog.count.ios', { count: counts.ios }) : null,
    counts.web ? t('apps.catalog.count.web', { count: counts.web }) : null,
  ]);
  return [join(statusParts(counts, t, 'apps.catalog.count')), platforms].filter(Boolean).join(' — ');
};
