import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { appCounts, featuredApps, getAppContent, platformLabels } from '../../../MyApps/data/registry';
import { useTypewriterCycle } from '../../../../shared/useTypewriterCycle';
import { heroCountsLine, indexCountsLine } from '../../../../shared/countLines';
import { EnrichedApp } from '../../../MyApps/Screens/MyAppsScreen/MyAppsScreen.types';
import { buildContactMailto } from '../../../../shared/contact';

// Trayectoria: cada paso es un cargo y la empresa donde se ejerció. Las
// empresas son nombres propios y no pasan por i18n; el cargo sí, por eso viaja
// como clave. Rappi aparece dos veces, con dos cargos distintos.
const CAREER: ReadonlyArray<{ roleKey: string; company: string }> = [
  { roleKey: 'home.meta.role.lead', company: 'Scotiabank Colpatria' },
  { roleKey: 'home.meta.role.lead', company: 'Mercado Libre' },
  { roleKey: 'home.meta.role.lead', company: 'Conekta' },
  { roleKey: 'home.meta.role.lead', company: 'VASS' },
  { roleKey: 'home.meta.role.fullstack', company: 'Integra IT' },
  { roleKey: 'home.meta.role.fullstack', company: 'Rappi' },
  { roleKey: 'home.meta.role.frontend', company: 'Ceiba' },
  { roleKey: 'home.meta.role.frontend', company: 'Qik - Banco República Dominicana' },
  { roleKey: 'home.meta.role.frontend', company: 'Cencosud' },
  { roleKey: 'home.meta.role.frontend', company: 'Rappi' },
];

// Tira de tecnologias de la home. Son nombres propios: no pasan por i18n
// porque se escriben igual en los dos idiomas.
const STACK = ['React Native', 'TypeScript', 'Node', 'AI', 'Postgres', 'RevenueCat', 'AWS'];

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
        // Una destacada sin servicio se dice en la propia fila: presentarla
        // igual que las vivas seria vender algo que hoy no funciona.
        const offline = app.status === 'offline' ? t('apps.status.offline') : '';
        return {
          slug: app.slug,
          name: app.name,
          ...(app.logo !== undefined ? { icon: app.logo } : {}),
          subtitle: [tagline, platforms, offline].filter(Boolean).join(' · '),
        };
      }),
    [i18n.language, t]
  );

  // Cargo y empresa se escriben a la vez: son una sola frase partida en dos
  // filas, y verlas aparecer por separado las desconectaria.
  const career = useMemo(
    () => CAREER.map(({ roleKey, company }) => [t(roleKey), company]),
    [t]
  );
  const { lines: careerLines, isStill } = useTypewriterCycle(career);

  // Las cifras salen del registro, no escritas a mano: si mañana hay 18 apps,
  // la home no se queda mintiendo.
  const countsLine = heroCountsLine(appCounts, t);
  const appsRowLine = indexCountsLine(appCounts, t);

  const contactHref = buildContactMailto(email, t('home.contact.subject'));

  return {
    t,
    stack: STACK,
    role: careerLines[0] ?? '',
    company: careerLines[1] ?? '',
    isStill,
    featured,
    countsLine,
    appsRowLine,
    email,
    setEmail,
    contactHref,
  };
};
