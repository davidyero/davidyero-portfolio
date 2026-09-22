import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { appsRegistry, featuredApps, getAppContent, platformLabels } from '../../../MyApps/data/registry';
import { EnrichedApp } from '../../../MyApps/Screens/MyAppsScreen/MyAppsScreen.types';
import { buildContactMailto } from '../../../../shared/contact';

// Tira de tecnologias de la home. Son nombres propios: no pasan por i18n
// porque se escriben igual en los dos idiomas.
const STACK = [
  'React Native',
  'TypeScript',
  'Node',
  'Postgres',
  'RevenueCat',
  'AdMob',
  'Render',
  'AWS Amplify',
];

export interface FeaturedRow {
  slug: string;
  name: string;
  icon?: string;
  subtitle: string;
}

export const useHomeScreen = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');

  // Subtitulo de cada destacada: su tagline en el idioma activo mas las
  // plataformas. Se compone aqui para que la vista solo pinte.
  const featured: FeaturedRow[] = useMemo(
    () =>
      featuredApps.map((app: EnrichedApp) => {
        const tagline = getAppContent(app.slug, i18n.language)?.tagline ?? '';
        const platforms = app.platforms.map((p) => platformLabels[p]).join(' · ');
        return {
          slug: app.slug,
          name: app.name,
          ...(app.logo !== undefined ? { icon: app.logo } : {}),
          subtitle: [tagline, platforms].filter(Boolean).join(' · '),
        };
      }),
    [i18n.language]
  );

  // Recuento del catalogo, calculado del registro y no escrito a mano: si
  // mañana hay 18 apps, la home no se queda mintiendo.
  const counts = useMemo(() => {
    const byStatus = (status: string) => appsRegistry.filter((a) => a.status === status).length;
    return {
      total: appsRegistry.length,
      live: byStatus('live'),
      beta: byStatus('beta'),
      soon: byStatus('soon'),
    };
  }, []);

  const contactHref = buildContactMailto(email, t('home.contact.subject'));

  return { t, stack: STACK, featured, counts, email, setEmail, contactHref };
};
