import {
  App,
  AppCategory,
  AppKind,
  AppMeta,
  AppPlatform,
  EnrichedApp,
} from '../Screens/MyAppsScreen/MyAppsScreen.types';
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

export const getAppBySlug = (slug?: string): EnrichedApp | undefined =>
  slug ? appsRegistry.find((a) => a.slug === slug) : undefined;

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

// Distinct categories present across the catalog (stable order).
export const availableCategories = (): AppCategory[] => {
  const order: AppCategory[] = ['sports', 'productivity', 'utility', 'entertainment'];
  const present = new Set(appsRegistry.map((a) => a.category));
  return order.filter((c) => present.has(c));
};

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
