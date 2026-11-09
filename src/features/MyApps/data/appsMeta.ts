import { type AppMeta } from '../Screens/MyAppsScreen/MyAppsScreen.types';

// Hub metadata per app (non-text where possible). Keyed by slug.
// Adding a new app = add its entry here + its object in appsData.ts.
export const appsMeta: Record<string, AppMeta> = {
  gazella: {
    // La web v2 está en vivo; la app móvil se está rehaciendo (la publicada en
    // las tiendas apunta a un backend que ya no existe), por eso aún sin tiendas.
    platforms: ['web'],
    status: 'live',
    category: 'sports',
    tech: ['React', 'React Native', 'TypeScript', 'Node'],
    version: '2.0.0',
    webUrl: 'https://gazella.davidyero.com',
  },
  youtime: {
    platforms: ['android', 'ios'],
    status: 'live',
    category: 'utility',
    tech: ['React Native', 'TypeScript'],
    version: '1.2.0',
  },
  'festivos-del-mundo': {
    platforms: ['ios', 'android'],
    status: 'live',
    category: 'utility',
    tech: ['React Native', 'Expo', 'TypeScript'],
    version: '1.5.0',
  },
  taskmaster: {
    platforms: ['ios', 'android'],
    status: 'live',
    category: 'productivity',
    tech: ['React Native', 'Expo', 'TypeScript', 'Node'],
    version: '3.5.0',
  },
  pronostigol: {
    platforms: ['ios', 'android'],
    status: 'offline',
    category: 'sports',
    tech: ['React Native', 'TypeScript', 'Node'],
    version: '1.0.0',
  },
  superlineup: {
    platforms: ['android', 'ios'],
    status: 'live',
    category: 'sports',
    tech: ['React Native', 'TypeScript'],
  },
  'football-cup-simulator': {
    platforms: ['android', 'ios'],
    status: 'live',
    category: 'sports',
    tech: ['React Native', 'TypeScript', 'Zustand'],
    version: '4.0.1',
    featured: true,
    // Las cifras van en la ficha de la app de la que salen, no en el hero:
    // sueltas arriba parecian del portfolio entero.
    reachKey: 'apps.reach.footballCupSimulator',
  },
  'encuentra-tu-mascota': {
    platforms: ['web'],
    status: 'live',
    category: 'utility',
    tech: ['React', 'TypeScript', 'Vite', 'Node'],
    version: '0.7.0',
    webUrl: 'https://www.encuentra-tu-mascota.com/',
    featured: true,
  },
  'my-link-hub': {
    platforms: ['web'],
    status: 'live',
    category: 'productivity',
    tech: ['React', 'TypeScript'],
    webUrl: 'https://www.my-link-hub.com',
  },
  splitio: {
    platforms: ['web'],
    status: 'live',
    category: 'utility',
    tech: ['React', 'TypeScript', 'Vite', 'Node'],
    version: '0.10.2',
    webUrl: 'https://www.splitio.net/',
  },
  'mis-pagos': {
    platforms: ['web'],
    status: 'live',
    category: 'utility',
    tech: ['Next.js', 'React', 'TypeScript', 'Node'],
    version: '0.1.50',
    webUrl: 'https://www.mispagos.co/',
    featured: true,
  },
  habitflow: {
    platforms: ['ios', 'android'],
    status: 'live',
    category: 'productivity',
    tech: ['React Native', 'TypeScript'],
    version: '1.0.0',
  },
  'trainflow-ai': {
    platforms: ['ios', 'android'],
    status: 'live',
    category: 'sports',
    tech: ['React Native', 'TypeScript', 'RevenueCat'],
    version: '1.0.0',
  },
  'cop-moneda-colombiana': {
    platforms: ['android', 'ios'],
    status: 'live',
    category: 'utility',
    tech: ['React Native', 'TypeScript', 'AdMob'],
    version: '0.1.0',
  },
  'player-radar': {
    platforms: ['android'],
    status: 'live',
    category: 'sports',
    tech: ['React Native', 'TypeScript', 'RevenueCat'],
    version: '1.0.0',
  },
  'agenda-pilates': {
    platforms: ['web'],
    status: 'live',
    category: 'productivity',
    tech: ['React', 'TypeScript', 'Vite', 'React Native', 'Node'],
    version: '0.99.35',
    webUrl: 'https://www.agendapilates.com/landing',
  },
  'presidente-simulator': {
    // Sin webUrl todavia: el repo esta publicado pero la app de Amplify aun no
    // existe, y anunciar un enlace que no abre es peor que decir "pronto".
    platforms: ['web'],
    status: 'soon',
    category: 'entertainment',
    tech: ['React', 'TypeScript', 'Vite', 'Zustand'],
    version: '0.2.0',
  },
};
