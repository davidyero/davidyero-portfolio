// Experience timeline. Text lives in i18n (about namespace); this only holds
// non-translated data (org name, date range) + the i18n keys for role/desc.
export interface ExperienceEntry {
  id: string;
  roleKey: string;
  org: string;
  from: string;
  to?: string; // undefined = present ("Now")
  descKey: string;
}

export const experienceTimeline: ExperienceEntry[] = [
  {
    id: 'fullstack',
    roleKey: 'about.exp.fullstack.role',
    org: 'super-davidyero',
    from: '2023',
    descKey: 'about.exp.fullstack.desc',
  },
  {
    id: 'frontend',
    roleKey: 'about.exp.frontend.role',
    org: 'Producto SaaS',
    from: '2021',
    to: '2023',
    descKey: 'about.exp.frontend.desc',
  },
  {
    id: 'freelance',
    roleKey: 'about.exp.freelance.role',
    org: 'Freelance',
    from: '2018',
    to: '2021',
    descKey: 'about.exp.freelance.desc',
  },
];
