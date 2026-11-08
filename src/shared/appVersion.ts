// Single source of truth is package.json: vite.config.ts injects it as
// VITE_APP_VERSION in dev, build and tests.
export const APP_VERSION: string = import.meta.env.VITE_APP_VERSION;

/** Primer día escribiendo software. Se muestra en el perfil, en ISO. */
export const CAREER_START_ISO = '2017-10-02';
