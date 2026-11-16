import { type EnrichedApp } from '../../Screens/MyAppsScreen/MyAppsScreen.types';

export interface AppLegalRowsProps {
  app: Pick<EnrichedApp, 'slug' | 'termsAndConditions' | 'privacyPolicy'>;
  /** Navega a la ruta interna del documento (la ficha y la landing usan el navigate del router). */
  onNavigate: (path: string) => void;
}
