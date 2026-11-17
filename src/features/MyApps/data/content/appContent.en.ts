import { type AppContentMap } from './appContent';

export const appContentEn: AppContentMap = {
  gazella: {
    tagline: 'Find your next start line.',
    description:
      'Gazella gathers sports races from all over the world (running, trail, cycling, skating, triathlon and open water) so you can find your next start line, follow the ones you care about with your friends and get ready with the AI Coach.',
    features: [
      'Explore running, trail, cycling, skating, triathlon and open water races, from today onwards',
      'Filter by sport, country, distance, elevation, difficulty, price and open registration',
      'Countdown, distances with capacity and elevation profile for every race',
      'Favorites and "Going", with who else is going and on which distance',
      'Reminders and calendar (.ics and Google Calendar)',
      'Invite your friends with a personal link',
      'Specialist directory: physiotherapy, nutrition, medicine and coaches',
      'AI Coach (Pro): a week-by-week training plan for your race',
    ],
    changelog: [
      {
        version: '2.0.0',
        date: 'November 7, 2026',
        type: 'new',
        changes: [
          'New website at gazella.run with every race from today onwards.',
          'Running, trail, cycling, skating, triathlon and open water, with filters, favorites, Going, reminders and invitations.',
          'Specialist directory and AI Coach for Pro.',
          'The mobile app is being rebuilt and will ship as a store update.',
        ],
      },
      {
        version: '1.4.2',
        date: 'May 31, 2024',
        type: 'new',
        changes: ['Version published on the App Store and Google Play (1.4.0 on Android).'],
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
      'Football Cup Simulator is a football league and cup simulator where every result is yours to call. Fill in the group stage, work through the knockouts and crown your champion across real competitions such as the 2026 World Cup, the Copa América, the Champions League, the Copa Libertadores, LaLiga, the Premier League, Liga MX and the Brasileirão. You can also build custom tournaments with your own teams, pick your podium and see what everyone else picks.',
    features: [
      'Predict real competitions: 2026 World Cup, Copa América, Champions League, Libertadores and more',
      'Full leagues: LaLiga, Premier League, Liga MX, Brasileirão and others',
      'Progress round by round: groups, knockouts and the final',
      'Build custom tournaments with your own teams',
      'Pick your podium and compare it with what everyone else votes',
    ],
    changelog: [
      {
        version: '5.1.0',
        date: 'September 9, 2026',
        type: 'new',
        changes: [
          'New profile with your plan, your predictions and your favorite competitions.',
          'Pick your podium for each competition and see stats on what people choose.',
          'Start any cup from the round you prefer and change the participating teams.',
          'New competitions with real fixtures and news alerts in your language.',
        ],
      },
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
      'HabitFlow is a minimalist, local-first habit tracker. Create habits, log your daily check-ins, and watch your streaks build up on contribution-style intensity grids. Use it as a guest or create an account with email and password. On the free plan your data stays 100% on your device; with Lite or Pro your habits sync to the cloud across your devices.',
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
  'trainflow-ai': {
    tagline: 'Turns AI-generated training plans into a clear, readable app.',
    description:
      'TrainFlow AI is the presentation layer for training plans generated by AI (ChatGPT, Claude, Gemini…). Ask for a plan in JSON or CSV, import it, and the app renders it with a clean editorial interface. Your plans live on your device; with Lite or Pro they are backed up to the cloud.',
    features: [
      'Import AI plans in JSON or CSV with forgiving parsing',
      'Clear editorial interface to follow your routine day by day',
      'Unlimited plans and cloud backup with Lite/Pro',
      'Export to PDF or image and share them',
      'Sign in with Google or continue as a guest',
      'Dark and light theme · Spanish and English',
    ],
    changelog: [
      {
        version: '1.0.0',
        date: 'July 19, 2026',
        type: 'new',
        changes: ['Initial release of TrainFlow AI.'],
      },
    ],
  },
  'cop-moneda-colombiana': {
    tagline: 'The dollar and every world currency, in pesos.',
    description:
      'Check exchange rates for 160+ currencies against the Colombian peso, updated daily. Search, filter by region, save favorites, convert any amount with the calculator and open each currency to see its details and history. No account, and data that works offline. Free, with ads.',
    features: [
      '160+ currencies against the Colombian peso',
      'Search and filters by region; favorites saved on your device',
      'Quick converter between two currencies',
      'Per-currency detail with history and daily change',
      'Daily reminder when the day’s rates arrive',
      'Works offline with the last saved data',
      'Dark and light theme · Spanish and English',
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
  'presidente-simulator': {
    tagline: 'Govern for four years. Every decision comes back to you.',
    description:
      'Presidente Simulator is a decision-driven strategy game: you take office and have 48 months ahead of you. Each month you pick between several options and the engine propagates the effect across nine connected systems (economy, security, health, education, corruption, approval...), so a comfortable move today can blow up your budget a year from now. Offline and account-free: the run is saved in your own browser.',
    features: [
      'Nine interconnected systems that feed back into each other',
      'Delayed consequences: what you decide today lands months later',
      'Country map with the state of every region',
      'Decision history and end-of-term results',
      'Works offline, no account needed',
    ],
    changelog: [
      {
        version: '0.2.0',
        date: 'September 22, 2026',
        type: 'new',
        changes: [
          'Country map showing the state of each region',
          'Side panel with indicators and transitions between decisions',
        ],
      },
    ],
  },
};
