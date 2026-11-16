// Los iconos viven en public/app-icons/<slug>.png con URL FIJA
// (https://davidyero.com/app-icons/<slug>.png): el backoffice y el resto del
// ecosistema los enlazan desde aquí. Importados en el bundle llevarían un hash
// que cambia en cada build y nadie más podría usarlos.
export const appIcon = (slug: string): string => `/app-icons/${slug}.png`;
