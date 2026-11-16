import { type AppContentMap } from './appContent';

export const appContentEs: AppContentMap = {
  gazella: {
    tagline: 'Encuentra tu próxima línea de salida.',
    description:
      'Gazella reúne competencias deportivas de todo el mundo (running, trail, ciclismo, patinaje, triatlón y aguas abiertas) para que encuentres tu próxima línea de salida, sigas las que te interesan con tus amigos y llegues preparado con el Coach IA.',
    features: [
      'Explora competencias de running, trail, ciclismo, patinaje, triatlón y aguas abiertas, de hoy en adelante',
      'Filtra por deporte, país, distancia, desnivel, dificultad, precio e inscripciones abiertas',
      'Cuenta regresiva, distancias con cupo y perfil de elevación en cada competencia',
      'Favoritos y "Voy", con quién más va y en qué distancia',
      'Recordatorios y calendario (.ics y Google Calendar)',
      'Invita a tus amigos con un link personal',
      'Directorio de especialistas: fisioterapia, nutrición, medicina y entrenadores',
      'Coach IA (Pro): un plan de entrenamiento semana a semana para tu carrera',
    ],
    changelog: [
      {
        version: '2.0.0',
        date: '7 de noviembre de 2026',
        type: 'new',
        changes: [
          'Nueva web en gazella.run con todas las competencias de hoy en adelante.',
          'Running, trail, ciclismo, patinaje, triatlón y aguas abiertas, con filtros, favoritos, Voy, recordatorios e invitaciones.',
          'Directorio de especialistas y Coach IA para Pro.',
          'La app móvil se está rehaciendo y llegará como actualización en las tiendas.',
        ],
      },
      {
        version: '1.4.2',
        date: '31 de mayo de 2024',
        type: 'new',
        changes: ['Versión publicada en App Store y Google Play (1.4.0 en Android).'],
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
      'HabitFlow es un rastreador de hábitos minimalista y local-first. Crea hábitos, registra tus check-ins diarios y visualiza tus rachas con grillas de intensidad estilo contribuciones. Úsalo como invitado o crea una cuenta con correo y contraseña. En el plan gratuito tus datos se quedan 100 % en el dispositivo; con Lite o Pro tus hábitos se sincronizan en la nube entre tus dispositivos.',
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
      'Consulta las tasas de cambio de más de 160 monedas frente al peso colombiano, actualizadas cada día. Busca, filtra por región, guarda favoritas, convierte cualquier monto con la calculadora y abre cada moneda para ver su detalle y su histórico. Sin cuenta y con datos que funcionan sin conexión. Gratis, con publicidad.',
    features: [
      'Más de 160 monedas frente al peso colombiano',
      'Buscador y filtros por región; favoritas guardadas en el dispositivo',
      'Conversor rápido entre dos monedas',
      'Detalle por moneda con histórico y variación diaria',
      'Recordatorio diario cuando llegan las tasas del día',
      'Funciona sin conexión con los últimos datos guardados',
      'Tema oscuro y claro · Español e inglés',
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
  'presidente-simulator': {
    tagline: 'Gobierna cuatro años. Cada decisión pasa factura.',
    description:
      'Presidente Simulator es un juego de estrategia por decisiones: asumes el gobierno de un país y tienes 48 meses por delante. Cada mes eliges entre varias opciones y el motor propaga el efecto por nueve sistemas conectados (economía, seguridad, salud, educación, corrupción, popularidad...), de modo que una medida cómoda hoy puede reventarte el presupuesto dentro de un año. Sin conexión y sin cuenta: la partida se guarda en tu propio navegador.',
    features: [
      'Nueve sistemas interconectados que reaccionan entre ellos',
      'Consecuencias diferidas: lo que decides hoy llega meses después',
      'Mapa del país con el estado de cada región',
      'Historial de decisiones y resultados al terminar el mandato',
      'Funciona sin conexión y sin cuenta',
    ],
    changelog: [
      {
        version: '0.2.0',
        date: '22 de septiembre de 2026',
        type: 'new',
        changes: [
          'Mapa del país con el estado de cada región',
          'Panel lateral de indicadores y transiciones entre decisiones',
        ],
      },
    ],
  },
};
