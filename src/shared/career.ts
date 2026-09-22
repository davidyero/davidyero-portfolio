// Trayectoria profesional. Las empresas y los clientes son nombres propios y no
// pasan por i18n; el cargo y las tareas sí, por eso viajan como clave.
//
// Las fechas van en ISO 'YYYY-MM' a propósito: es el formato del resto del
// sitio y evita tener que traducir los nombres de los meses.
export interface CareerEntry {
  id: string;
  roleKey: string;
  company: string;
  /** Cliente final cuando el puesto fue a través de una consultora. */
  client?: string;
  from: string;
  /** Sin `to` = puesto actual. */
  to?: string;
  stack: string[];
  taskKeys: string[];
}

export const CAREER: readonly CareerEntry[] = [
  {
    id: 'rappi',
    roleKey: 'about.role.fullstackSpecialist',
    company: 'Rappi',
    from: '2026-03',
    stack: ['React', 'JS', 'TS', 'Kotlin'],
    taskKeys: ['about.task.payments', 'about.task.unitTests', 'about.task.codeReview', 'about.task.poc'],
  },
  {
    id: 'qibit',
    roleKey: 'about.role.reactNativeSenior',
    company: 'QiBit',
    client: 'Qik',
    from: '2023-02',
    to: '2026-03',
    stack: ['React Native', 'JS', 'TS'],
    taskKeys: ['about.task.banking', 'about.task.unitTests', 'about.task.codeReview', 'about.task.poc'],
  },
  {
    id: 'conekta',
    roleKey: 'about.role.techLeadFrontend',
    company: 'Conekta',
    from: '2022-04',
    to: '2023-02',
    stack: ['React', 'React Native', 'Node', 'JS', 'TS', 'CSS', 'AWS', 'Jenkins'],
    taskKeys: ['about.task.planning', 'about.task.estimation', 'about.task.codeReviewDev', 'about.task.poc'],
  },
  {
    id: 'mercadolibre',
    roleKey: 'about.role.techLeadFrontend',
    company: 'MercadoLibre',
    from: '2021-10',
    to: '2022-04',
    stack: ['React', 'Next.js', 'Node', 'JS', 'TS', 'CSS', 'AWS', 'Jenkins'],
    taskKeys: ['about.task.planning', 'about.task.estimation', 'about.task.codeReviewDev', 'about.task.poc'],
  },
  {
    id: 'ceiba',
    roleKey: 'about.role.seniorFrontendLead',
    company: 'Ceiba',
    client: 'Scotiabank Colpatria',
    from: '2019-01',
    to: '2021-09',
    stack: ['Angular', 'React', 'JS', 'TS', 'CSS', 'Jenkins'],
    taskKeys: [
      'about.task.techLead',
      'about.task.planning',
      'about.task.estimation',
      'about.task.codeReviewDev',
      'about.task.poc',
    ],
  },
  {
    id: 'integrait',
    roleKey: 'about.role.fullstackDeveloper',
    company: 'Integra IT',
    from: '2017-10',
    to: '2018-12',
    stack: ['Java', 'JS', 'CSS', 'HTML', 'Scala'],
    taskKeys: ['about.task.playFramework'],
  },
];

/**
 * Duración en años y meses entre dos 'YYYY-MM'. Se calcula en vez de escribirla
 * porque el puesto actual crece cada mes: un "3 años" escrito a mano envejece
 * solo y nadie se acuerda de actualizarlo.
 */
export const durationOf = (from: string, to?: string): { years: number; months: number } => {
  const [fromYear, fromMonth] = from.split('-').map(Number);
  const end = to ? to.split('-').map(Number) : null;
  const now = new Date();
  const toYear = end ? end[0] : now.getFullYear();
  const toMonth = end ? end[1] : now.getMonth() + 1;

  const total = (toYear - fromYear) * 12 + (toMonth - fromMonth);
  return { years: Math.floor(total / 12), months: total % 12 };
};

// Clientes por cuenta propia. Van aparte y SIN fechas a propósito: la
// trayectoria de arriba no deja huecos, así que estos proyectos convivieron con
// un puesto en plantilla y meterlos en la misma línea de tiempo daría a
// entender una cronología que no es.
// Cada cliente lleva su cargo: no todos fueron el mismo trabajo, y el rótulo
// de la home los escribe con él.
export interface FreelanceEntry {
  company: string;
  roleKey: string;
}

export const FREELANCE: readonly FreelanceEntry[] = [
  { company: 'VASS', roleKey: 'about.role.freelance' },
  { company: 'Cencosud', roleKey: 'about.role.freelance' },
  { company: 'Leonisa', roleKey: 'about.role.seniorFrontend' },
];

/** Pares cargo + empresa para el rótulo que se escribe solo en la home. */
export const careerTicker = (): ReadonlyArray<{ roleKey: string; label: string }> => [
  ...CAREER.map((entry) => ({
    roleKey: entry.roleKey,
    label: entry.client ? `${entry.company} · ${entry.client}` : entry.company,
  })),
  ...FREELANCE.map(({ company, roleKey }) => ({ roleKey, label: company })),
];
