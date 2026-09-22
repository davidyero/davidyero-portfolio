import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { appCounts, featuredApps, getAppContent, platformLabels } from '../../../MyApps/data/registry';
import { useTypewriterCycle } from '../../../../shared/useTypewriterCycle';
import { heroCountsLine, indexCountsLine } from '../../../../shared/countLines';
import { EnrichedApp } from '../../../MyApps/Screens/MyAppsScreen/MyAppsScreen.types';
import { subscribe } from '../../../Writing/api/postsApi';

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
const STACK = [
  'React',
  'React Native',
  'TypeScript',
  'Node JS',
  'AI',
  'Postgres',
  'SQL',
  'GraphQL',
  'RevenueCat',
  'AWS',
  'Firebase',
  'SignalR',
];

export interface FeaturedRow {
  slug: string;
  name: string;
  /** Clave i18n con las cifras de la app, si las tiene. */
  reachKey?: string;
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
          ...(app.reachKey !== undefined ? { reachKey: app.reachKey } : {}),
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

  // Estados del formulario. `sent` no distingue alta nueva de alta repetida:
  // para quien se suscribe es el mismo resultado, y el backend responde igual.
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error' | 'invalid'>(
    'idle'
  );
  // Campo trampa. Vive en el estado como cualquier otro input; lo que lo hace
  // trampa es que el formulario lo esconde y nadie lo ve.
  const [website, setWebsite] = useState('');

  const submitSubscription = (): void => {
    if (status === 'sending') return;

    // Se valida aqui y no solo con `type="email"`: el navegador no bloquea el
    // envio programatico, y una peticion con "hola" gastaria un intento del
    // limite por IP para nada.
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    if (!looksLikeEmail) {
      setStatus('invalid');
      return;
    }

    setStatus('sending');
    subscribe(email, i18n.language, website)
      .then(() => {
        setStatus('sent');
        setEmail('');
      })
      .catch(() => setStatus('error'));
  };

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
    setEmail: (value: string) => {
      // Al volver a escribir se limpia el aviso anterior: dejarlo mientras se
      // corrige el correo es ruido.
      if (status !== 'idle') setStatus('idle');
      setEmail(value);
    },
    status,
    website,
    setWebsite,
    submitSubscription,
  };
};
