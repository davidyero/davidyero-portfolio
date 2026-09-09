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
    tagline: 'Tus pronósticos, fase por fase, hasta el campeón.',
    description:
      'Football Cup Simulator es un simulador de ligas y copas de fútbol donde tú decides cada resultado. Rellena la fase de grupos, avanza por las eliminatorias y corona a tu campeón en competencias reales como el Mundial 2026, la Copa América, la Champions League, la Libertadores, LaLiga, la Premier League, la Liga MX o el Brasileirão. También puedes montar torneos a medida con tus propios equipos, comparar predicciones y compartirlas.',
    features: [
      'Pronostica competencias reales: Mundial 2026, Copa América, Champions, Libertadores y más',
      'Ligas completas: LaLiga, Premier League, Liga MX, Brasileirão y otras',
      'Avanza fase por fase: grupos, eliminatorias y final',
      'Crea torneos personalizados con tus propios equipos',
      'Compara tus predicciones y compártelas con quien quieras',
    ],
    changelog: [
      {
        version: '4.0.1',
        date: '19 de julio de 2026',
        type: 'new',
        changes: [
          'Catálogo de competencias remoto: se añaden competencias nuevas sin actualizar la app.',
          'Respaldo en la nube de tus predicciones para usuarios Pro.',
        ],
      },
    ],
  },
  'encuentra-tu-mascota': {
    tagline: 'Cada huella encuentra su hogar.',
    description:
      'Web pública para publicar y buscar reportes de mascotas perdidas y encontradas en Colombia. Cualquiera puede publicar un reporte con fotos y datos de contacto, sin crear cuenta. Es gratis, sin publicidad y sin monetización: también reúne mascotas en adopción, fundaciones y cuentas de ayuda animal.',
    features: [
      'Publica un reporte de mascota perdida o encontrada, con fotos',
      'Busca y filtra reportes por zona, especie y estado',
      'Contacta directamente a quien publicó el reporte',
      'Sección de adopciones y de fundaciones que ayudan',
      'Instalable como app (PWA), en español e inglés',
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
  splitio: {
    tagline: 'Gastos compartidos, sin discusiones.',
    description:
      'Splitio lleva las cuentas de un grupo que convive o viaja junto: cada mes registras los ingresos de cada miembro y los gastos comunes, y la app reparte cada gasto y dice quién debe cuánto a quién. Si un mes queda deuda sin saldar, se arrastra al siguiente y ves desde cuándo.',
    features: [
      'Grupos con periodos mensuales de ingresos y gastos',
      'Reparte por partes iguales, por porcentaje o proporcional al ingreso',
      'Balance claro de quién debe cuánto a quién',
      'Arrastre de deuda pendiente de un mes al siguiente',
      'Categorías propias del grupo con emoji y color',
      'Tema claro y oscuro · Español e inglés',
    ],
    changelog: [],
  },
  'mis-pagos': {
    tagline: 'Todos tus medios de cobro, en un solo link.',
    description:
      'Mis Pagos es un "linktree" especializado en medios de pago digitales de Colombia: reúne Nequi, Daviplata, Bancolombia, PayPal, ePayco y tus redes sociales en una página pública que compartes con un único link (mispagos.co/tu-usuario). No es una pasarela: no procesa dinero, solo muestra tus datos de cobro para que te paguen sin explicarlos uno por uno.',
    features: [
      'Página pública propia en mispagos.co/tu-usuario',
      'Centraliza tus medios de cobro y tus redes sociales',
      'Dos estilos visuales (vibrante y minimalista) en claro y oscuro',
      'Analítica de visitas y clics en el plan Pro',
      'Colaboradores con roles para gestionar la página en equipo',
    ],
    changelog: [],
  },
  habitflow: {
    tagline: 'Rastreador de hábitos minimalista con rachas estilo grilla de contribuciones.',
    description:
      'HabitFlow es un rastreador de hábitos minimalista y local-first. Crea hábitos, registra tus check-ins diarios y visualiza tus rachas con grillas de intensidad estilo contribuciones. Úsalo como invitado con tus datos en el dispositivo, o crea una cuenta; con Lite o Pro tus hábitos se sincronizan en la nube.',
    features: [
      'Rastrea hábitos binarios, de cantidad o de abandono',
      'Rachas visuales estilo grilla de contribuciones',
      'Recordatorios con notificaciones locales',
      'Tema oscuro y claro con acentos de color por hábito',
      'Sincronización opcional en la nube con Lite o Pro',
      'Exporta, importa o elimina todos tus datos cuando quieras',
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
  'cop-moneda-colombiana': {
    tagline: 'El dólar y todas las monedas del mundo, en pesos.',
    description:
      'Consulta las tasas de cambio de más de 160 monedas frente al peso colombiano, actualizadas cada día. Busca, filtra por región, guarda favoritas y convierte cualquier monto. Sin cuenta y con datos que funcionan sin conexión.',
    features: [
      'Más de 160 monedas frente al peso colombiano',
      'Conversor rápido entre dos monedas',
      'Favoritas y filtros por región',
      'Detalle e histórico por moneda',
      'Recordatorio diario y modo sin conexión',
    ],
    changelog: [
      {
        version: '0.1.0',
        date: '20 de julio de 2026',
        type: 'new',
        changes: ['Lanzamiento inicial de COP Moneda Colombiana.'],
      },
    ],
  },
  'player-radar': {
    tagline: 'Tu radar de jugadores de fútbol: síguelos y no te pierdas ni un partido.',
    description:
      'Player Radar es la app para los que viven el fútbol siguiendo jugadores. Sigue a tus futbolistas favoritos, arma tu propia selección y consulta de un vistazo los partidos del día. Cada jugador tiene su ficha completa: club actual, selección nacional, trayectoria y partidos. Gratis con anuncios; con Pro quitas los anuncios, sigues jugadores sin límite, ves el historial completo y sincronizas tus preferencias en la nube. Los datos provienen de proveedores deportivos (API-Football).',
    features: [
      'Sigue a tus jugadores favoritos y arma tu selección',
      'Partidos del día de los jugadores que sigues',
      'Ficha completa: club, selección nacional, trayectoria y partidos',
      'Explora jugadores por país',
      'Pro: sin anuncios, seguimiento ilimitado e historial completo',
      'Sincronización en la nube de tus preferencias con Pro',
      'Inicia sesión con correo, Google o Apple, o entra como invitado',
      'Tema oscuro y claro · Español e inglés',
    ],
    changelog: [
      {
        version: '1.0.0',
        date: '25 de julio de 2026',
        type: 'new',
        changes: ['Lanzamiento inicial de Player Radar.'],
      },
    ],
  },
  'agenda-pilates': {
    tagline: 'El estudio de pilates y sus alumnos, en la misma agenda.',
    description:
      'Agenda Pilates conecta a los estudios de pilates con sus alumnos. Cada estudio publica su horario de clases, define sus planes por tiempo y controla el cupo de cada sesión; el alumno reserva, ve sus clases y sabe cuánto le queda de plan. Es multi-tenant: la navegación y los permisos cambian según el rol y el plan, con web y app móvil sobre el mismo backend.',
    features: [
      'Horario de clases por estudio, con cupos y lista de espera',
      'Reserva y cancelación de clases desde la web o el móvil',
      'Planes por tiempo: el alumno ve su vigencia y sus clases restantes',
      'Roles separados para estudio, instructor y alumno',
      'Notificaciones push de recordatorio de clase',
      'Tema claro y oscuro · Español e inglés',
    ],
    changelog: [],
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
    tagline: 'Your predictions, round by round, all the way to the title.',
    description:
      'Football Cup Simulator is a football league and cup simulator where every result is yours to call. Fill in the group stage, work through the knockouts and crown your champion across real competitions such as the 2026 World Cup, the Copa América, the Champions League, the Copa Libertadores, LaLiga, the Premier League, Liga MX and the Brasileirão. You can also build custom tournaments with your own teams, compare predictions and share them.',
    features: [
      'Predict real competitions: 2026 World Cup, Copa América, Champions League, Libertadores and more',
      'Full leagues: LaLiga, Premier League, Liga MX, Brasileirão and others',
      'Progress round by round: groups, knockouts and the final',
      'Build custom tournaments with your own teams',
      'Compare your predictions and share them with anyone',
    ],
    changelog: [
      {
        version: '4.0.1',
        date: 'July 19, 2026',
        type: 'new',
        changes: [
          'Remote competition catalogue: new competitions are added without updating the app.',
          'Cloud backup for your predictions, available to Pro users.',
        ],
      },
    ],
  },
  'encuentra-tu-mascota': {
    tagline: 'Every paw finds its home.',
    description:
      'A public website to post and search reports of lost and found pets in Colombia. Anyone can publish a report with photos and contact details, no account needed. It is free, ad-free and never monetized: it also gathers pets up for adoption, foundations and animal-help accounts.',
    features: [
      'Post a lost or found pet report, with photos',
      'Search and filter reports by area, species and status',
      'Contact whoever published the report directly',
      'Adoptions section and foundations that help',
      'Installable as an app (PWA), in Spanish and English',
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
  splitio: {
    tagline: 'Shared expenses, without arguments.',
    description:
      'Splitio keeps the books for a group that lives or travels together: every month you log each member’s income and the shared expenses, and the app splits each expense and tells you who owes whom. If a month ends with unsettled debt, it carries over to the next one and you can see since when.',
    features: [
      'Groups with monthly periods of income and expenses',
      'Split evenly, by percentage or proportionally to income',
      'A clear balance of who owes whom',
      'Unsettled debt carried over to the next month',
      'Per-group categories with emoji and color',
      'Light and dark mode · English & Spanish',
    ],
    changelog: [],
  },
  'mis-pagos': {
    tagline: 'All your payment methods, in a single link.',
    description:
      'Mis Pagos is a "linktree" specialized in Colombian digital payment methods: it gathers Nequi, Daviplata, Bancolombia, PayPal, ePayco and your social networks on a public page you share with a single link (mispagos.co/your-username). It is not a payment gateway: it never processes money, it just shows your payment details so people can pay you without you spelling them out every time.',
    features: [
      'Your own public page at mispagos.co/your-username',
      'Centralize your payment methods and social links',
      'Two visual styles (vibrant and minimal) in light and dark',
      'Visit and click analytics on the Pro plan',
      'Collaborators with roles to manage the page as a team',
    ],
    changelog: [],
  },
  habitflow: {
    tagline: 'Minimalist habit tracker with contribution-style streak grids.',
    description:
      'HabitFlow is a minimalist, local-first habit tracker. Create habits, log your daily check-ins, and watch your streaks build up on contribution-style intensity grids. Use it as a guest with your data on-device, or create an account; with Lite or Pro your habits sync to the cloud.',
    features: [
      'Track binary, quantity, or quit habits',
      'Visual contribution-style streak grids',
      'Reminders via local notifications',
      'Dark and light themes with per-habit color accents',
      'Optional cloud sync with Lite or Pro',
      'Export, import, or delete all your data anytime',
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
  'cop-moneda-colombiana': {
    tagline: 'The dollar and every world currency, in pesos.',
    description:
      'Check exchange rates for 160+ currencies against the Colombian peso, updated daily. Search, filter by region, save favorites and convert any amount. No account, and data that works offline.',
    features: [
      '160+ currencies against the Colombian peso',
      'Quick converter between two currencies',
      'Favorites and filters by region',
      'Detail and history per currency',
      'Daily reminder and offline mode',
    ],
    changelog: [
      {
        version: '0.1.0',
        date: 'July 20, 2026',
        type: 'new',
        changes: ['Initial release of COP Moneda Colombiana.'],
      },
    ],
  },
  'player-radar': {
    tagline: 'Your football player radar: follow them and never miss a match.',
    description:
      'Player Radar is the app for fans who live football by following players. Follow your favorite footballers, build your own selection, and check the day’s matches at a glance. Every player has a full profile: current club, national team, career, and matches. Free with ads; with Pro you remove ads, follow unlimited players, see the full match history, and sync your preferences to the cloud. Data comes from sports providers (API-Football).',
    features: [
      'Follow your favorite players and build your selection',
      'Today’s matches for the players you follow',
      'Full profile: club, national team, career, and matches',
      'Explore players by country',
      'Pro: no ads, unlimited follows, and full history',
      'Cloud sync of your preferences with Pro',
      'Sign in with email, Google, or Apple, or continue as a guest',
      'Light and dark mode · English & Spanish',
    ],
    changelog: [
      {
        version: '1.0.0',
        date: 'July 25, 2026',
        type: 'new',
        changes: ['Initial release of Player Radar.'],
      },
    ],
  },
  'agenda-pilates': {
    tagline: 'The pilates studio and its students, on the same schedule.',
    description:
      'Agenda Pilates connects pilates studios with their students. Each studio publishes its class schedule, defines its time-based plans and controls the capacity of every session; students book, see their classes and know how much of their plan is left. It is multi-tenant: navigation and permissions change with role and plan, with a web app and a mobile app on the same backend.',
    features: [
      'Per-studio class schedule, with capacity and waiting list',
      'Book and cancel classes from the web or your phone',
      'Time-based plans: students see validity and remaining classes',
      'Separate roles for studio, instructor and student',
      'Push reminders before each class',
      'Light and dark mode · English & Spanish',
    ],
    changelog: [],
  },
};
