# David Yepes · Portfolio & App Hub

Portfolio personal + hub de lanzamiento de apps (mobile y web) de David Yepes
(@Davidyero). React + TypeScript, SCSS con tokens del kit verde militar (dark/light),
i18n EN/ES y arquitectura data-driven para publicar apps sin tocar UI.

## 📱 ¿Quieres agregar una app?

**Lee [`ADDING_A_NEW_APP.md`](./ADDING_A_NEW_APP.md)** — guía paso a paso.
Resumen: editas 3 archivos de datos y despliegas; no se crean vistas ni se toca
el router.

| Archivo | Qué pones |
|---------|-----------|
| `src/features/MyApps/data/apps/<slug>.ts` + su línea en `appsData.ts` | Datos base: nombre, slug, icono, links de tienda, legales |
| `src/features/MyApps/data/appsMeta.ts` | Metadatos: plataformas, estado, categoría, stack, links web |
| `src/features/MyApps/data/content/appContent.es.ts` y `appContent.en.ts` | Texto bilingüe EN+ES: tagline, descripción, features, changelog |

## 🚀 ¿Vas a publicar una app en las tiendas?

**Lee [`DEPLOYING_TO_STORES.md`](./DEPLOYING_TO_STORES.md)** — guía informativa de
despliegue en **Google Play** (y App Store, próximamente): firma/keystore, build del
AAB, ficha de tienda, prueba interna y producción. Solo despliegue en tienda, no cubre
monetización.

---

## Ambientes: primero dev, luego prod

| Ambiente | URL | Rama | Build |
|----------|-----|------|-------|
| Dev | https://dev.davidyero.com | `develop` | `npm run build:develop` (`vite build --mode develop`) |
| Prod | https://davidyero.com | `main` | `npm run build` |

**Flujo obligatorio:** `feat/*` sale de `develop` → se mezcla a `develop` y se
prueba en dev → **solo cuando David lo confirma** se mezcla `develop` a `main`
(producción). Nada va directo a `main`. `amplify.yml` elige el build según
`$AWS_BRANCH`.

- Dev lleva `<meta name="robots" content="noindex, nofollow">` (lo añade
  `vite.config.ts` en modo `develop`) para no duplicar el portfolio en buscadores.
- El portfolio no carga analítica ni Sentry en ningún ambiente, así que no hay
  nada que apagar en dev. Si algún día se añade, va solo en producción.
- Dev usa **la misma API que producción** (no hay backend de pruebas).

---

## Scripts

Vite 8 + React. La salida va a `build/`, que es lo que publica `amplify.yml`.

| Script | Qué hace |
|--------|----------|
| `npm run dev` (o `npm start`) | Servidor de desarrollo en http://localhost:3000 |
| `npm run build` | Typecheck + build de producción en `build/` |
| `npm run build:develop` | Lo mismo en modo `develop` (dev.davidyero.com, con `noindex`) |
| `npm run preview` | Sirve `build/` en http://localhost:4173 |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint con `eslint-config-davidyero/web` |
| `npm test` | Vitest (jsdom) |

Variables de entorno (opcionales, con prefijo `VITE_`):

- `VITE_API_BASE_URL`: base de la API del monolito; por defecto
  `https://super-davidyero-backend.onrender.com/api`. Ejemplo en `.env.example`.
  Su host tiene que estar en el `connect-src` de `customHttp.yml`, o el build falla.
- La versión que se pinta en el footer sale de `package.json` (la inyecta
  `vite.config.ts` como `VITE_APP_VERSION`); no hay que definirla.
