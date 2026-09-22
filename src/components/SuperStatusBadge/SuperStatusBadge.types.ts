import { AppStatus } from '../../features/MyApps/Screens/MyAppsScreen/MyAppsScreen.types';

export interface SuperStatusBadgeProps {
  status: AppStatus;
  /** Forma corta (LIVE, SOON…) para la tabla; larga para las fichas. */
  short?: boolean;
}
