import { EnrichedApp } from '../../Screens/MyAppsScreen/MyAppsScreen.types';

export interface AppCardProps {
  app: EnrichedApp;
  onClick?: () => void;
}
