export interface MyAppsScreenProps {
  // Add props here as needed
}

export interface ChangelogEntry {
  version: string;
  date: string;
  type: 'new' | 'improvement' | 'fix';
  changes: string[];
}

export interface TermsSection {
  title: string;
  content: string;
}

export interface TermsData {
  lastUpdated: string;
  sections: TermsSection[];
}

export interface TermsAndConditions {
  en: TermsData;
  es: TermsData;
}

export interface App {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  logo?: string;
  iconBgColor?: string;
  fullDescription?: string;
  features?: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  screenshots?: string[];
  changelog?: ChangelogEntry[];
  termsAndConditions?: TermsAndConditions;
}
