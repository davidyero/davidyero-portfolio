import { useMemo, useState } from 'react';
import {
  appsRegistry,
  availableCategories,
  hasMobile,
  hasWeb,
} from '../../data/registry';
import { AppCategory, EnrichedApp } from './MyAppsScreen.types';

export type CatalogFilter = 'all' | 'mobile' | 'web' | AppCategory;

interface FilterOption {
  key: CatalogFilter;
  labelKey: string;
}

export const useMyAppsScreen = () => {
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

  const apps: EnrichedApp[] = useMemo(() => {
    if (filter === 'all') return appsRegistry;
    if (filter === 'mobile') return appsRegistry.filter(hasMobile);
    if (filter === 'web') return appsRegistry.filter(hasWeb);
    return appsRegistry.filter((a) => a.category === filter);
  }, [filter]);

  return { filter, setFilter, filters, apps, total: appsRegistry.length };
};
