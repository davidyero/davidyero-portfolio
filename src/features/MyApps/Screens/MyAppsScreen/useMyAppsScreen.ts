import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  appCounts,
  appsRegistry,
  availableCategories,
  getAppContent,
  hasMobile,
  hasWeb,
  platformLabels,
} from '../../data/registry';
import { catalogSubtitle } from '../../../../shared/countLines';
import { AppCategory, EnrichedApp } from './MyAppsScreen.types';

export type CatalogFilter = 'all' | 'mobile' | 'web' | AppCategory;

interface FilterOption {
  key: CatalogFilter;
  labelKey: string;
}

export interface CatalogRow {
  slug: string;
  name: string;
  icon?: string;
  initials: string;
  what: string;
  platforms: string;
  status: EnrichedApp['status'];
}

/** Iniciales para las apps sin PNG de icono (hoy solo ChamiApp). */
const initialsOf = (name: string): string => {
  const words = name.trim().split(/\s+/);
  const pair = words.length >= 2 ? words[0][0] + words[1][0] : name.slice(0, 2);
  return pair.toUpperCase();
};

export const useMyAppsScreen = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState<CatalogFilter>('all');

  const filters: FilterOption[] = useMemo(() => {
    const base: FilterOption[] = [
      { key: 'all', labelKey: 'apps.catalog.filter.all' },
      { key: 'mobile', labelKey: 'apps.catalog.filter.mobile' },
      { key: 'web', labelKey: 'apps.catalog.filter.web' },
    ];
    const categories: FilterOption[] = availableCategories().map((c) => ({
      key: c,
      labelKey: `apps.category.${c}`,
    }));
    return [...base, ...categories];
  }, []);

  const visible: EnrichedApp[] = useMemo(() => {
    if (filter === 'all') return appsRegistry;
    if (filter === 'mobile') return appsRegistry.filter(hasMobile);
    if (filter === 'web') return appsRegistry.filter(hasWeb);
    return appsRegistry.filter((a) => a.category === filter);
  }, [filter]);

  // La columna "qué hace" es el tagline del idioma activo: una linea por app,
  // la misma frase que se lee en su ficha.
  const rows: CatalogRow[] = useMemo(
    () =>
      visible.map((app) => ({
        slug: app.slug,
        name: app.name,
        ...(app.logo !== undefined ? { icon: app.logo } : {}),
        initials: initialsOf(app.name),
        what: getAppContent(app.slug, i18n.language)?.tagline ?? app.description,
        platforms: app.platforms.map((p) => platformLabels[p]).join(' · '),
        status: app.status,
      })),
    [visible, i18n.language]
  );

  // Los recuentos describen el catalogo completo, no el filtro: moverlos al
  // filtrar haria parecer que el catalogo encoge.
  const subtitle = catalogSubtitle(appCounts, t);

  return { t, filter, setFilter, filters, rows, total: appCounts.total, subtitle };
};
