import {
  App,
  AppCategory,
  AppKind,
  AppMeta,
  AppPlatform,
  AppStatus,
  EnrichedApp,
} from '../Screens/MyAppsScreen/MyAppsScreen.types';
import { BadgeTone } from '../../../components/Badge/Badge.types';
import { appsData } from './appsData';
import { appsMeta } from './appsMeta';
import { AppLocalizedContent, appContentEn, appContentEs } from './content/appContent';

const FALLBACK_META: AppMeta = {
  platforms: ['ios', 'android'],
  status: 'live',
  category: 'utility',
};

const enrich = (app: App): EnrichedApp => ({
  ...app,
  ...FALLBACK_META,
  ...(appsMeta[app.slug] ?? {}),
});

// Central registry: every screen reads apps from here.
export const appsRegistry: EnrichedApp[] = appsData.map(enrich);

// Slugs an app used to be published under, so links already out in the wild
// (shares, store legal pages) keep resolving after a rename.
const slugAliases: Record<string, string> = {
  greta: 'encuentra-tu-mascota',
  equilibra: 'splitio',
};

export const getAppBySlug = (slug?: string): EnrichedApp | undefined => {
  if (!slug) return undefined;
  const canonical = slugAliases[slug] ?? slug;
  return appsRegistry.find((a) => a.slug === canonical);
};

const normalizeLang = (lang?: string): 'en' | 'es' =>
  lang && lang.startsWith('es') ? 'es' : 'en';

// Localized human-facing content (tagline, description, features, changelog)
// for the current language, with a graceful fallback so nothing renders blank.
export const getAppContent = (
  slug: string,
  lang?: string
): AppLocalizedContent | undefined => {
  const map = normalizeLang(lang) === 'es' ? appContentEs : appContentEn;
  return map[slug] ?? appContentEs[slug] ?? appContentEn[slug];
};

export const featuredApps: EnrichedApp[] = appsRegistry.filter((a) => a.featured);

export interface AppCounts {
  total: number;
  live: number;
  beta: number;
  soon: number;
  offline: number;
  android: number;
  ios: number;
  web: number;
}

// Recuento del catalogo. Se calcula una vez y vive aqui porque lo pintan la
// home y el catalogo: estaba duplicado en los dos hooks y podian divergir.
export const appCounts: AppCounts = (() => {
  const byStatus = (status: EnrichedApp['status']): number =>
    appsRegistry.filter((a) => a.status === status).length;
  const byPlatform = (platform: AppPlatform): number =>
    appsRegistry.filter((a) => a.platforms.includes(platform)).length;
  return {
    total: appsRegistry.length,
    live: byStatus('live'),
    beta: byStatus('beta'),
    soon: byStatus('soon'),
    offline: byStatus('offline'),
    android: byPlatform('android'),
    ios: byPlatform('ios'),
    web: byPlatform('web'),
  };
})();

// Distinct categories present across the catalog (stable order).
export const availableCategories = (): AppCategory[] => {
  const order: AppCategory[] = ['sports', 'productivity', 'utility', 'entertainment'];
  const present = new Set(appsRegistry.map((a) => a.category));
  return order.filter((c) => present.has(c));
};

// Tono del badge para cada estado. Vive aqui y no en cada pantalla: estaba
// copiado en el catalogo, la ficha y la landing, y al añadir `offline` las tres
// habrian tenido que cambiar a la vez.
export const statusTone = (status: AppStatus): BadgeTone => status;

/** Una app sin servicio no se ofrece para descargar aunque siga en la tienda. */
export const isOffline = (app: EnrichedApp): boolean => app.status === 'offline';

// A link counts only if it is a real, non-placeholder URL.
export const isRealUrl = (url?: string): boolean =>
  !!url && url.trim() !== '' && url.trim() !== '#';

export const hasMobile = (app: EnrichedApp): boolean =>
  app.platforms.includes('ios') || app.platforms.includes('android');

export const hasWeb = (app: EnrichedApp): boolean => app.platforms.includes('web');

// Web / Mobile / Both — derived from platforms, never stored twice.
export const getAppKind = (app: EnrichedApp): AppKind => {
  const web = hasWeb(app);
  const mobile = hasMobile(app);
  if (web && mobile) return 'both';
  return web ? 'web' : 'mobile';
};

export const kindI18nKey: Record<AppKind, string> = {
  web: 'apps.kind.web',
  mobile: 'apps.kind.mobile',
  both: 'apps.kind.both',
};

export interface AppCtaState {
  showAppStore: boolean;
  showGooglePlay: boolean;
  showWeb: boolean;
  showRepo: boolean;
  hasAny: boolean;
}

// Adaptive CTAs: stores for mobile, "open app" for web, repo when present.
export const resolveAppCtas = (app: EnrichedApp): AppCtaState => {
  // Offline: se ocultan tienda y "abrir app". Mandar a alguien a descargar algo
  // que no funciona es peor que no ofrecer nada. El repo si se mantiene.
  if (isOffline(app)) {
    const showRepo = isRealUrl(app.repoUrl);
    return { showAppStore: false, showGooglePlay: false, showWeb: false, showRepo, hasAny: showRepo };
  }

  const showAppStore = app.platforms.includes('ios') && isRealUrl(app.appStoreUrl);
  const showGooglePlay =
    app.platforms.includes('android') && isRealUrl(app.playStoreUrl);
  const showWeb = hasWeb(app) && isRealUrl(app.webUrl);
  const showRepo = isRealUrl(app.repoUrl);
  return {
    showAppStore,
    showGooglePlay,
    showWeb,
    showRepo,
    hasAny: showAppStore || showGooglePlay || showWeb || showRepo,
  };
};

export const platformLabels: Record<AppPlatform, string> = {
  ios: 'iOS',
  android: 'Android',
  web: 'Web',
};
