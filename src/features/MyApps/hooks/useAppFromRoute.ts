import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAppBySlug } from '../data/registry';
import appStoreEN from '../../../assets/images/stores/appStoreEN.svg';
import appStoreES from '../../../assets/images/stores/appStoreES.svg';
import googlePlayEN from '../../../assets/images/stores/googlePlayIconEN.png';
import googlePlayES from '../../../assets/images/stores/googleplayIconES.png';

// La app de la ruta (/apps/:slug) y las insignias de tienda en el idioma activo.
// Lo comparten la ficha y la landing de cada app.
export const useAppFromRoute = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const app = getAppBySlug(slug);
  const isEs = i18n.language?.startsWith('es');
  const appStoreImg = isEs ? appStoreES : appStoreEN;
  const googlePlayImg = isEs ? googlePlayES : googlePlayEN;

  return { app, navigate, t, i18n, appStoreImg, googlePlayImg };
};
