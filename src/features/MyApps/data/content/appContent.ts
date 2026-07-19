import { ChangelogEntry } from '../../Screens/MyAppsScreen/MyAppsScreen.types';

// Localized, human-facing app content. Non-text metadata lives in appsMeta.ts;
// terms/privacy already ship per-language inside appsData.ts. Everything else
// that a visitor reads (tagline, description, features, changelog) lives here
// with full EN/ES parity so nothing shows up in the wrong language.
export interface AppLocalizedContent {
  tagline: string;
  description: string;
  features: string[];
  changelog: ChangelogEntry[];
}

export type AppContentMap = Record<string, AppLocalizedContent>;

export const appContentEs: AppContentMap = {
  gazella: {
    tagline: 'Eventos deportivos locales y del mundo en tu bolsillo.',
    description:
      'Con Gazella, explorar e inscribirte en eventos deportivos locales, nacionales e internacionales es más fácil que nunca. Descubre carreras, maratones y competencias cerca de ti.',
    features: [
      'Explora eventos deportivos de todo el mundo',
      'Inscríbete fácilmente a carreras y competencias',
      'Recibe notificaciones de eventos cercanos',
      'Consulta el calendario de eventos por categoría',
      'Guarda tus eventos favoritos',
    ],
    changelog: [
      {
        version: '2.1.0',
        date: '15 de octubre de 2023',
        type: 'new',
        changes: [
          'Se agregó un nuevo dashboard personalizable.',
          'El rendimiento de carga se optimizó en un 30%.',
          'Integración con calendarios externos (Google Calendar, Outlook).',
        ],
      },
      {
        version: '2.0.0',
        date: '1 de agosto de 2023',
        type: 'fix',
        changes: [
          'Reescritura completa del motor principal para mejorar la estabilidad y corregir errores críticos reportados por la comunidad.',
          'Corregido un error que provocaba cierres inesperados al exportar datos.',
          'Solucionado un problema de sincronización entre dispositivos.',
          'Mejora de la seguridad en la autenticación de usuarios.',
        ],
      },
      {
        version: '1.0.0',
        date: '15 de enero de 2023',
        type: 'new',
        changes: [
          'Lanzamiento inicial de Gazella. Incluye las funcionalidades básicas de gestión de eventos deportivos y exploración en tiempo real.',
        ],
      },
    ],
  },
  youtime: {
    tagline: 'Comparte videos de YouTube desde el segundo exacto.',
    description:
      'Youtime te permite compartir un video de YouTube comenzando exactamente en el segundo que eliges. Olvídate de decir «avanza al 2:15»: pega el enlace, selecciona el tiempo y comparte un enlace limpio con inicio preciso.',
    features: [
      'Comparte videos desde un timestamp específico',
      'Interfaz simple e intuitiva',
      'Genera enlaces limpios y cortos',
      'Sin anuncios ni distracciones',
    ],
    changelog: [
      {
        version: '1.2.0',
        date: '20 de septiembre de 2023',
        type: 'improvement',
        changes: [
          'Mejora en la detección automática de timestamps',
          'Interfaz rediseñada más moderna',
          'Soporte para copiar el enlace automáticamente',
        ],
      },
      {
        version: '1.0.0',
        date: '5 de marzo de 2023',
        type: 'new',
        changes: ['Lanzamiento inicial de Youtime con funcionalidad básica de timestamps.'],
      },
    ],
  },
  'festivos-del-mundo': {
    tagline: 'Festivos de todo el mundo en un solo lugar.',
    description:
      'Explora y celebra los feriados de todo el mundo. Una guía completa con información detallada de festividades, días festivos y celebraciones de diferentes países y culturas.',
    features: [
      'Base de datos completa de feriados mundiales',
      'Información detallada de cada festividad',
      'Filtrado por país y tipo de celebración',
      'Notificaciones de próximos feriados',
      'Calendario sincronizable',
    ],
    changelog: [
      {
        version: '1.5.0',
        date: '10 de noviembre de 2023',
        type: 'new',
        changes: [
          'Agregados feriados de 50 países nuevos',
          'Nueva función para compartir festividades',
          'Widget para la pantalla de inicio',
        ],
      },
    ],
  },
  'simulador-de-mundial': {
    tagline: 'Simula el camino de tu selección hacia la gloria.',
    description:
      'Crea el camino de tu selección hacia la gloria en el Mundial de Fútbol con nuestro Simulador de Mundial. Predice resultados, analiza estadísticas y vive la emoción del torneo desde tu dispositivo móvil.',
    features: [
      'Simula partidos completos del mundial',
      'Estadísticas detalladas de equipos y jugadores',
      'Crea tus propias predicciones',
      'Compite con amigos',
      'Resultados en tiempo real',
    ],
    changelog: [
      {
        version: '3.0.0',
        date: '1 de diciembre de 2023',
        type: 'new',
        changes: [
          'Actualización para el Mundial 2026',
          'Nuevos modos de juego',
          'IA mejorada para simulaciones más realistas',
        ],
      },
      {
        version: '2.5.0',
        date: '15 de junio de 2023',
        type: 'improvement',
        changes: [
          'Optimización de rendimiento',
          'Corrección de errores en las simulaciones',
          'Nuevas estadísticas de jugadores',
        ],
      },
    ],
  },
  taskmaster: {
    tagline: 'Tu productividad, organizada en un solo lugar.',
    description:
      'TaskMaster es la solución definitiva para gestionar tu productividad. Con funciones avanzadas de organización, recordatorios inteligentes y análisis de rendimiento, alcanzarás tus objetivos de manera eficiente.',
    features: [
      'Gestión de tareas con prioridades y etiquetas',
      'Proyectos colaborativos en equipo',
      'Recordatorios inteligentes personalizables',
      'Estadísticas y análisis de productividad',
      'Sincronización en la nube entre dispositivos',
      'Modo enfoque para eliminar distracciones',
    ],
    changelog: [
      {
        version: '3.5.0',
        date: '5 de diciembre de 2023',
        type: 'new',
        changes: [
          'Nuevo modo de vista Kanban para proyectos',
          'Integración con herramientas de comunicación (Slack, Teams)',
          'Plantillas predefinidas para diferentes tipos de proyectos',
          'Widget mejorado para la pantalla de inicio',
        ],
      },
      {
        version: '3.0.0',
        date: '20 de agosto de 2023',
        type: 'new',
        changes: [
          'Rediseño completo de la interfaz',
          'Colaboración en tiempo real',
          'Modo oscuro mejorado',
        ],
      },
      {
        version: '2.8.0',
        date: '10 de mayo de 2023',
        type: 'improvement',
        changes: [
          'Optimización del rendimiento en dispositivos de gama baja',
          'Corrección de errores en la sincronización',
          'Mejoras en la búsqueda de tareas',
        ],
      },
    ],
  },
  pronostigol: {
    tagline: 'Pronósticos de fútbol para competir con amigos.',
    description:
      'Pronostigol te permite crear y participar en quinielas de fútbol de manera fácil y divertida. Compite con amigos, colegas o únete a ligas públicas. Sistema de puntos, rankings en tiempo real y premios virtuales te esperan.',
    features: [
      'Crea quinielas personalizadas para cualquier torneo',
      'Participa en ligas públicas y privadas',
      'Sistema de puntuación personalizable',
      'Rankings y estadísticas detalladas',
      'Notificaciones de partidos próximos',
      'Chat integrado con otros participantes',
    ],
    changelog: [
      {
        version: '2.8.0',
        date: '28 de noviembre de 2023',
        type: 'new',
        changes: [
          'Soporte para la Copa América 2024',
          'Nueva función de predicciones especiales (goleador, tarjetas, etc.)',
          'Modo competitivo con premios virtuales',
          'Integración con estadísticas en vivo',
        ],
      },
      {
        version: '2.5.0',
        date: '15 de septiembre de 2023',
        type: 'improvement',
        changes: [
          'Mejoras en el sistema de notificaciones',
          'Optimización de la velocidad de carga',
          'Corrección de errores en el cálculo de puntos',
        ],
      },
      {
        version: '2.0.0',
        date: '1 de junio de 2023',
        type: 'new',
        changes: [
          'Rediseño completo de la interfaz',
          'Sistema de chat entre participantes',
          'Nuevos modos de juego',
        ],
      },
    ],
  },
  superlineup: {
    tagline: 'Arma tu once ideal y compártelo.',
    description:
      '¡Bienvenido a SuperLineUp! Crea alineaciones de fútbol increíbles en segundos: equipo (11) o partido completo (22), más de 7 formaciones clásicas, drag & drop fluido, camisetas, césped y estadio personalizables, guarda y comparte como imagen, 100% sin conexión. Arma tu alineación, muestra tu táctica y comparte tu pasión.',
    features: [
      'Diseña alineaciones de un equipo (11) o de un partido completo (22)',
      'Elige entre múltiples formaciones tácticas (4-4-2, 4-3-3, 3-5-2 y más)',
      'Personaliza camisetas, césped, estadio y tribunas',
      'Mueve jugadores con drag & drop fluido',
      'Exporta la alineación como imagen lista para redes sociales',
      'Funciona 100% sin conexión',
    ],
    changelog: [
      {
        version: '1.0.0',
        date: '6 de mayo de 2026',
        type: 'new',
        changes: [
          'Lanzamiento inicial de SuperLineUp.',
          'Diseño de alineaciones para equipo (11) y partido completo (22).',
          'Más de 7 formaciones clásicas disponibles (4-4-2, 4-3-3, 3-5-2 y más).',
          'Personalización de camisetas, césped, estadio y tribunas.',
          'Drag & drop fluido para reposicionar jugadores.',
          'Exportación de la alineación como imagen para compartir.',
          'Funcionamiento 100% sin conexión.',
        ],
      },
    ],
  },
  'football-cup-simulator': {
    tagline: 'Simula torneos de copa y llega hasta la final.',
    description:
      'Football Cup Simulator te deja crear y simular torneos de copa de fútbol: sorteos, fase de grupos, eliminatorias y una gran final. Ajusta los equipos, sigue el bracket y vive cada ronda.',
    features: [
      'Simula torneos de copa completos, de la fase de grupos a la final',
      'Sorteo y bracket de eliminatorias automático',
      'Elige y ajusta los equipos participantes',
      'Sigue resultados y estadísticas ronda a ronda',
      'Rápido y fácil de usar',
    ],
    changelog: [],
  },
  greta: {
    tagline: 'Cada huella encuentra su hogar.',
    description:
      'Greta es una plataforma que conecta a las personas con fundaciones y rescatistas de animales. Descubre mascotas en adopción, comparte casos y apoya a las organizaciones de bienestar animal.',
    features: [
      'Explora mascotas en adopción cerca de ti',
      'Conecta con fundaciones y rescatistas',
      'Comparte y difunde casos de rescate',
      'Apoya el bienestar animal',
    ],
    changelog: [],
  },
  chamiapp: {
    tagline: 'La quiniela del Mundial 2026 con tus amigos.',
    description:
      'ChamiApp es la quiniela del Mundial 2026: predice los resultados de cada partido, compite con tus amigos en grupos privados y sube en la tabla de posiciones.',
    features: [
      'Predice los resultados de cada partido del Mundial',
      'Crea grupos privados y compite con amigos',
      'Tabla de posiciones en tiempo real',
      'Sistema de puntos por acierto',
    ],
    changelog: [],
  },
  'my-link-hub': {
    tagline: 'Tu portafolio profesional en un solo link.',
    description:
      'My Link Hub reúne tu portafolio, tus redes y todos tus enlaces en una sola página compartible. Ideal para mostrar tu presencia profesional con un único link.',
    features: [
      'Reúne todos tus enlaces en una sola página',
      'Página pública y compartible',
      'Personaliza tu perfil profesional',
      'Comparte con un único link',
    ],
    changelog: [],
  },
  equilibra: {
    tagline: 'Gastos compartidos, sin discusiones.',
    description:
      'Equilibra te ayuda a dividir gastos entre amigos, roommates o viajes. Registra quién pagó qué, calcula automáticamente los saldos y salda cuentas sin discusiones.',
    features: [
      'Registra gastos compartidos en grupo',
      'Cálculo automático de saldos y deudas',
      'Divide por partes iguales o personalizadas',
      'Salda cuentas de forma clara',
    ],
    changelog: [],
  },
  'mis-pagos': {
    tagline: 'Tus pagos y suscripciones, bajo control.',
    description:
      'Mis Pagos te ayuda a llevar el control de tus pagos recurrentes y suscripciones. Registra montos y fechas, y no vuelvas a olvidar un vencimiento.',
    features: [
      'Registra tus pagos y suscripciones',
      'Recordatorios de próximos vencimientos',
      'Visualiza tus gastos recurrentes',
      'Todo en un solo lugar',
    ],
    changelog: [],
  },
  habitflow: {
    tagline: 'Rastreador de hábitos minimalista con rachas estilo grilla de contribuciones.',
    description:
      'HabitFlow es un rastreador de hábitos minimalista y local-first. Crea hábitos, registra tus check-ins diarios y visualiza tus rachas con grillas de intensidad estilo contribuciones. Tus datos de hábitos se guardan en tu dispositivo; una cuenta opcional solo administra tu plan.',
    features: [
      'Rastrea hábitos binarios, de cantidad o de abandono',
      'Rachas visuales estilo grilla de contribuciones',
      'Recordatorios con notificaciones locales',
      'Tema oscuro y claro con acentos de color por hábito',
      'Tus datos de hábitos se quedan en tu dispositivo',
      'Exporta o elimina todos tus datos cuando quieras',
    ],
    changelog: [
      {
        version: '1.0.0',
        date: '8 de julio de 2026',
        type: 'new',
        changes: ['Lanzamiento inicial de HabitFlow.'],
      },
    ],
  },
  'trainflow-ai': {
    tagline: 'Convierte los planes de entrenamiento que genera la IA en una app clara y legible.',
    description:
      'TrainFlow AI es la capa de presentación para planes de entrenamiento generados por IA (ChatGPT, Claude, Gemini…). Pide un plan en JSON o CSV, impórtalo y la app lo muestra con una interfaz editorial clara. Tus planes viven en tu dispositivo; con Lite o Pro se respaldan en la nube.',
    features: [
      'Importa planes de IA en JSON o CSV con parsing tolerante',
      'Interfaz editorial clara para seguir tu rutina día a día',
      'Planes ilimitados y copia en la nube con Lite/Pro',
      'Exporta a PDF o imagen y compártelos',
      'Inicia sesión con Google o entra como invitado',
      'Tema oscuro y claro · Español e inglés',
    ],
    changelog: [
      {
        version: '1.0.0',
        date: '19 de julio de 2026',
        type: 'new',
        changes: ['Lanzamiento inicial de TrainFlow AI.'],
      },
    ],
  },
};

export const appContentEn: AppContentMap = {
  gazella: {
    tagline: 'Local and worldwide sports events in your pocket.',
    description:
      'With Gazella, exploring and signing up for local, national and international sports events is easier than ever. Discover races, marathons and competitions near you.',
    features: [
      'Explore sports events from all over the world',
      'Easily sign up for races and competitions',
      'Get notifications about nearby events',
      'Browse the event calendar by category',
      'Save your favorite events',
    ],
    changelog: [
      {
        version: '2.1.0',
        date: 'October 15, 2023',
        type: 'new',
        changes: [
          'Added a new customizable dashboard.',
          'Loading performance improved by 30%.',
          'Integration with external calendars (Google Calendar, Outlook).',
        ],
      },
      {
        version: '2.0.0',
        date: 'August 1, 2023',
        type: 'fix',
        changes: [
          'Complete rewrite of the core engine to improve stability and fix critical bugs reported by the community.',
          'Fixed a bug that caused unexpected crashes when exporting data.',
          'Fixed a sync issue between devices.',
          'Improved security in user authentication.',
        ],
      },
      {
        version: '1.0.0',
        date: 'January 15, 2023',
        type: 'new',
        changes: [
          'Initial release of Gazella. Includes the basic features for managing sports events and real-time exploration.',
        ],
      },
    ],
  },
  youtime: {
    tagline: 'Share YouTube videos from the exact second.',
    description:
      'Youtime lets you share a YouTube video starting exactly at the second you choose. Forget saying “skip to 2:15”: paste the link, pick the time and share a clean link with a precise start.',
    features: [
      'Share videos from a specific timestamp',
      'Simple and intuitive interface',
      'Generate clean, short links',
      'No ads or distractions',
    ],
    changelog: [
      {
        version: '1.2.0',
        date: 'September 20, 2023',
        type: 'improvement',
        changes: [
          'Improved automatic timestamp detection',
          'Redesigned, more modern interface',
          'Support for copying the link automatically',
        ],
      },
      {
        version: '1.0.0',
        date: 'March 5, 2023',
        type: 'new',
        changes: ['Initial release of Youtime with basic timestamp functionality.'],
      },
    ],
  },
  'festivos-del-mundo': {
    tagline: 'Holidays from around the world in one place.',
    description:
      'Explore and celebrate holidays from around the world. A complete guide with detailed information on festivities, public holidays and celebrations from different countries and cultures.',
    features: [
      'Complete database of world holidays',
      'Detailed information on each festivity',
      'Filter by country and type of celebration',
      'Notifications for upcoming holidays',
      'Syncable calendar',
    ],
    changelog: [
      {
        version: '1.5.0',
        date: 'November 10, 2023',
        type: 'new',
        changes: [
          'Added holidays from 50 new countries',
          'New feature to share festivities',
          'Home screen widget',
        ],
      },
    ],
  },
  'simulador-de-mundial': {
    tagline: "Simulate your team's road to glory.",
    description:
      "Create your national team's road to glory at the Football World Cup with our World Cup Simulator. Predict results, analyze statistics and live the excitement of the tournament from your mobile device.",
    features: [
      'Simulate full World Cup matches',
      'Detailed team and player statistics',
      'Create your own predictions',
      'Compete with friends',
      'Real-time results',
    ],
    changelog: [
      {
        version: '3.0.0',
        date: 'December 1, 2023',
        type: 'new',
        changes: [
          'Update for the 2026 World Cup',
          'New game modes',
          'Improved AI for more realistic simulations',
        ],
      },
      {
        version: '2.5.0',
        date: 'June 15, 2023',
        type: 'improvement',
        changes: [
          'Performance optimization',
          'Bug fixes in simulations',
          'New player statistics',
        ],
      },
    ],
  },
  taskmaster: {
    tagline: 'Your productivity, organized in one place.',
    description:
      'TaskMaster is the ultimate solution to manage your productivity. With advanced organization features, smart reminders and performance analytics, you can reach your goals efficiently.',
    features: [
      'Task management with priorities and labels',
      'Collaborative team projects',
      'Customizable smart reminders',
      'Productivity statistics and analytics',
      'Cloud sync across devices',
      'Focus mode to remove distractions',
    ],
    changelog: [
      {
        version: '3.5.0',
        date: 'December 5, 2023',
        type: 'new',
        changes: [
          'New Kanban view mode for projects',
          'Integration with communication tools (Slack, Teams)',
          'Predefined templates for different project types',
          'Improved home screen widget',
        ],
      },
      {
        version: '3.0.0',
        date: 'August 20, 2023',
        type: 'new',
        changes: [
          'Complete UI redesign',
          'Real-time collaboration',
          'Improved dark mode',
        ],
      },
      {
        version: '2.8.0',
        date: 'May 10, 2023',
        type: 'improvement',
        changes: [
          'Performance optimization on low-end devices',
          'Fixed sync bugs',
          'Improvements to task search',
        ],
      },
    ],
  },
  pronostigol: {
    tagline: 'Football predictions to compete with friends.',
    description:
      'Pronostigol lets you create and join football pools in an easy and fun way. Compete with friends, colleagues or join public leagues. A points system, real-time rankings and virtual prizes await you.',
    features: [
      'Create custom pools for any tournament',
      'Join public and private leagues',
      'Customizable scoring system',
      'Rankings and detailed statistics',
      'Notifications for upcoming matches',
      'Built-in chat with other participants',
    ],
    changelog: [
      {
        version: '2.8.0',
        date: 'November 28, 2023',
        type: 'new',
        changes: [
          'Support for Copa América 2024',
          'New special predictions feature (top scorer, cards, etc.)',
          'Competitive mode with virtual prizes',
          'Integration with live statistics',
        ],
      },
      {
        version: '2.5.0',
        date: 'September 15, 2023',
        type: 'improvement',
        changes: [
          'Improvements to the notification system',
          'Loading speed optimization',
          'Fixed bugs in points calculation',
        ],
      },
      {
        version: '2.0.0',
        date: 'June 1, 2023',
        type: 'new',
        changes: [
          'Complete UI redesign',
          'Chat system between participants',
          'New game modes',
        ],
      },
    ],
  },
  superlineup: {
    tagline: 'Build your ideal lineup and share it.',
    description:
      'Welcome to SuperLineUp! Create amazing football lineups in seconds: a single team (11) or a full match (22), over 7 classic formations, smooth drag & drop, customizable kits, pitch and stadium, save and share as an image, 100% offline. Build your lineup, show your tactics and share your passion.',
    features: [
      'Design lineups for a single team (11) or a full match (22)',
      'Choose from multiple tactical formations (4-4-2, 4-3-3, 3-5-2 and more)',
      'Customize kits, pitch, stadium and stands',
      'Move players with smooth drag & drop',
      'Export the lineup as an image ready for social media',
      'Works 100% offline',
    ],
    changelog: [
      {
        version: '1.0.0',
        date: 'May 6, 2026',
        type: 'new',
        changes: [
          'Initial release of SuperLineUp.',
          'Lineup design for a single team (11) and a full match (22).',
          'Over 7 classic formations available (4-4-2, 4-3-3, 3-5-2 and more).',
          'Customization of kits, pitch, stadium and stands.',
          'Smooth drag & drop to reposition players.',
          'Export the lineup as an image to share.',
          'Works 100% offline.',
        ],
      },
    ],
  },
  'football-cup-simulator': {
    tagline: 'Simulate cup tournaments all the way to the final.',
    description:
      'Football Cup Simulator lets you create and simulate football cup tournaments: draws, group stages, knockout rounds and a grand final. Tweak the teams, follow the bracket and live every round.',
    features: [
      'Simulate full cup tournaments, from the group stage to the final',
      'Automatic draw and knockout bracket',
      'Pick and adjust the participating teams',
      'Follow results and statistics round by round',
      'Fast and easy to use',
    ],
    changelog: [],
  },
  greta: {
    tagline: 'Every paw finds its home.',
    description:
      'Greta is a platform that connects people with animal foundations and rescuers. Discover pets up for adoption, share cases and support animal welfare organizations.',
    features: [
      'Browse pets up for adoption near you',
      'Connect with foundations and rescuers',
      'Share and spread rescue cases',
      'Support animal welfare',
    ],
    changelog: [],
  },
  chamiapp: {
    tagline: 'The 2026 World Cup pool with your friends.',
    description:
      'ChamiApp is the 2026 World Cup prediction pool: predict every match result, compete with your friends in private groups and climb the leaderboard.',
    features: [
      'Predict the result of every World Cup match',
      'Create private groups and compete with friends',
      'Real-time leaderboard',
      'Points system for correct picks',
    ],
    changelog: [],
  },
  'my-link-hub': {
    tagline: 'Your professional portfolio in a single link.',
    description:
      'My Link Hub brings your portfolio, socials and all your links together on one shareable page. Perfect for showing your professional presence with a single link.',
    features: [
      'Gather all your links on a single page',
      'Public, shareable page',
      'Customize your professional profile',
      'Share with one link',
    ],
    changelog: [],
  },
  equilibra: {
    tagline: 'Shared expenses, without arguments.',
    description:
      'Equilibra helps you split expenses among friends, roommates or trips. Log who paid what, automatically compute balances and settle up without arguments.',
    features: [
      'Track shared group expenses',
      'Automatic balance and debt calculation',
      'Split evenly or with custom shares',
      'Settle up clearly',
    ],
    changelog: [],
  },
  'mis-pagos': {
    tagline: 'Your payments and subscriptions, under control.',
    description:
      'Mis Pagos helps you keep track of your recurring payments and subscriptions. Log amounts and dates, and never miss a due date again.',
    features: [
      'Track your payments and subscriptions',
      'Reminders for upcoming due dates',
      'See your recurring expenses at a glance',
      'Everything in one place',
    ],
    changelog: [],
  },
  habitflow: {
    tagline: 'Minimalist habit tracker with contribution-style streak grids.',
    description:
      'HabitFlow is a minimalist, local-first habit tracker. Create habits, log your daily check-ins, and watch your streaks build up on contribution-style intensity grids. Your habit data stays on your device; an optional account only manages your plan.',
    features: [
      'Track binary, quantity, or quit habits',
      'Visual contribution-style streak grids',
      'Reminders via local notifications',
      'Dark and light themes with per-habit color accents',
      'Your habit data stays on your device',
      'Export or delete all your data anytime',
    ],
    changelog: [
      {
        version: '1.0.0',
        date: 'July 8, 2026',
        type: 'new',
        changes: ['Initial release of HabitFlow.'],
      },
    ],
  },
};
