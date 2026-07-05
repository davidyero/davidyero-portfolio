import { AppMeta } from '../Screens/MyAppsScreen/MyAppsScreen.types';

// Hub metadata per app (non-text where possible). Keyed by slug.
// Adding a new app = add its entry here + its object in appsData.ts.
export const appsMeta: Record<string, AppMeta> = {
  gazella: {
    platforms: ['ios', 'android'],
    status: 'live',
    category: 'sports',
    tagline: 'Eventos deportivos locales y del mundo en tu bolsillo.',
    version: '2.1.0',
    featured: true,
    accent: 'linear-gradient(135deg, #f5c2a7 0%, #f38ba8 100%)',
  },
  youtime: {
    platforms: ['android'],
    status: 'live',
    category: 'utility',
    tagline: 'Comparte videos de YouTube desde el segundo exacto.',
    version: '1.2.0',
    featured: true,
    accent: 'linear-gradient(135deg, #89b4fa 0%, #94e2d5 100%)',
  },
  'festivos-del-mundo': {
    platforms: ['ios', 'android'],
    status: 'live',
    category: 'utility',
    tagline: 'Festivos de todo el mundo en un solo lugar.',
    version: '1.5.0',
    accent: 'linear-gradient(135deg, #a6e3a1 0%, #94e2d5 100%)',
  },
  'simulador-de-mundial': {
    platforms: ['ios', 'android'],
    status: 'soon',
    category: 'sports',
    tagline: 'Simula el camino de tu selección hacia la gloria.',
    version: '3.0.0',
    accent: 'linear-gradient(135deg, #f9e2af 0%, #fab387 100%)',
  },
  taskmaster: {
    platforms: ['ios', 'android'],
    status: 'live',
    category: 'productivity',
    tagline: 'Tu productividad, organizada en un solo lugar.',
    version: '3.5.0',
    accent: 'linear-gradient(135deg, #f9e2af 0%, #f5c2a7 100%)',
  },
  pronostigol: {
    platforms: ['ios', 'android'],
    status: 'live',
    category: 'sports',
    tagline: 'Pronósticos de fútbol para competir con amigos.',
    version: '1.0.0',
    featured: true,
    accent: 'linear-gradient(135deg, #cba6f7 0%, #b4befe 100%)',
  },
  superlineup: {
    platforms: ['ios', 'android'],
    status: 'soon',
    category: 'sports',
    tagline: 'Arma tu once ideal y compártelo.',
    accent: 'linear-gradient(135deg, #89b4fa 0%, #74c7ec 100%)',
  },
};
