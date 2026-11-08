# David Yepes · Portfolio & App Hub

Portfolio personal + hub de lanzamiento de apps (mobile y web) de David Yepes
(@Davidyero). React + TypeScript, SCSS con tokens Catppuccin (dark/light),
i18n EN/ES y arquitectura data-driven para publicar apps sin tocar UI.

## 📱 ¿Quieres agregar una app?

**Lee [`ADDING_A_NEW_APP.md`](./ADDING_A_NEW_APP.md)** — guía paso a paso.
Resumen: editas 3 archivos de datos y despliegas; no se crean vistas ni se toca
el router.

| Archivo | Qué pones |
|---------|-----------|
| `src/features/MyApps/data/appsData.ts` | Datos base: nombre, slug, icono, links de tienda, legales |
| `src/features/MyApps/data/appsMeta.ts` | Metadatos: plataformas, estado, categoría, stack, links web |
| `src/features/MyApps/data/content/appContent.ts` | Texto bilingüe EN+ES: tagline, descripción, features, changelog |

## 🚀 ¿Vas a publicar una app en las tiendas?

**Lee [`DEPLOYING_TO_STORES.md`](./DEPLOYING_TO_STORES.md)** — guía informativa de
despliegue en **Google Play** (y App Store, próximamente): firma/keystore, build del
AAB, ficha de tienda, prueba interna y producción. Solo despliegue en tienda, no cubre
monetización.

---

## Scripts

Vite 8 + React. La salida va a `build/`, que es lo que publica `amplify.yml`.

| Script | Qué hace |
|--------|----------|
| `npm run dev` (o `npm start`) | Servidor de desarrollo en http://localhost:3000 |
| `npm run build` | Typecheck + build de producción en `build/` |
| `npm run preview` | Sirve `build/` en http://localhost:4173 |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint con `eslint-config-davidyero/web` |
| `npm test` | Vitest (jsdom) |

Variables de entorno (opcionales, con prefijo `VITE_`):

- `VITE_API_BASE_URL`: base de la API del monolito; por defecto
  `https://super-davidyero-backend.onrender.com/api`.
- La versión que se pinta en el footer sale de `package.json` (la inyecta
  `vite.config.ts` como `VITE_APP_VERSION`); no hay que definirla.
