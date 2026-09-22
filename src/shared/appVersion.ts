// Single source of truth is package.json. The build/start scripts expose it
// as REACT_APP_VERSION (see package.json). The fallback keeps local tooling
// (e.g. tests) working if the env var is not injected.
export const APP_VERSION: string =
  process.env.REACT_APP_VERSION ?? '0.10.0';

/** Primer día escribiendo software. Se muestra en el perfil, en ISO. */
export const CAREER_START_ISO = '2017-10-02';
