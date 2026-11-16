import { type ChangelogEntry } from '../../Screens/MyAppsScreen/MyAppsScreen.types';

// Localized, human-facing app content. Non-text metadata lives in appsMeta.ts;
// terms/privacy already ship per-language inside apps/<slug>.ts. Everything else
// that a visitor reads (tagline, description, features, changelog) lives in
// appContent.es.ts and appContent.en.ts, one file per language with the same
// slugs and keys, so nothing shows up in the wrong language.
export interface AppLocalizedContent {
  tagline: string;
  description: string;
  features: string[];
  changelog: ChangelogEntry[];
}

export type AppContentMap = Record<string, AppLocalizedContent>;
