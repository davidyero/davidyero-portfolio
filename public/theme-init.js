// Script clásico (bloqueante) servido desde /public: va en un fichero y no inline
// para que la Content-Security-Policy no necesite 'unsafe-inline' en script-src.
// Set theme before first paint to avoid a flash of the wrong theme.
(function () {
  try {
    var stored = localStorage.getItem('theme-preference');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
