import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, CircleDot, LoaderCircle, PowerOff } from 'lucide-react';
import { Badge } from '../Badge/Badge';
import { AppStatus } from '../../features/MyApps/Screens/MyAppsScreen/MyAppsScreen.types';
import { SuperStatusBadgeProps } from './SuperStatusBadge.types';
import './SuperStatusBadge.scss';

// Un icono por estado, leído de un vistazo sin llegar a la palabra: punto vivo,
// aro girando, reloj y botón apagado.
const ICONS: Record<AppStatus, React.ComponentType<{ size?: number }>> = {
  live: CircleDot,
  beta: LoaderCircle,
  soon: Clock,
  offline: PowerOff,
};

// El estado se pinta en el catálogo, la ficha y la landing. Vive aquí para que
// el icono, el tono y la etiqueta se decidan en un único sitio.
export const SuperStatusBadge: React.FC<SuperStatusBadgeProps> = ({ status, short = false }) => {
  const { t } = useTranslation();
  const Icon = ICONS[status];

  return (
    <Badge tone={status}>
      <Icon size={11} />
      <span className="status-badge__label">
        {t(short ? `apps.status.short.${status}` : `apps.status.${status}`)}
      </span>
    </Badge>
  );
};
