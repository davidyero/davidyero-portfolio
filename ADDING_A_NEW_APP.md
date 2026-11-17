# Cómo agregar una app nueva al portfolio

Guía paso a paso para publicar una app (mobile o web) en el hub del portfolio.
**No se crean vistas ni se toca el router**: las pantallas son genéricas y se
alimentan de datos. Agregar una app = **subir su icono + editar 4 archivos de
datos** y desplegar.

> Regla de oro: el texto que lee el visitante va en **EN y ES** (`appContent.*`,
> o `{ en, es }` en los legales) y lo no-textual (plataformas, estado, links,
> stack) va en los datos. Nada de texto hardcodeado en las vistas.

La skill `publicar-app` de Claude sigue exactamente esta guía: si cambias una,
cambia la otra.

---

## TL;DR — los archivos que tocas

| # | Archivo | Qué pones |
|---|---------|-----------|
| 1 | `public/app-icons/<slug>.png` | El icono (opcional; sin él se muestran iniciales) |
| 2 | `src/features/MyApps/data/apps/<slug>.ts` + su línea en `appsData.ts` | Datos base: `id`, `name`, `slug`, `description`, `logo`, links de tienda y legales |
| 3 | `src/features/MyApps/data/appsMeta.ts` | Metadatos: `platforms`, `status`, `category`, `tech`, `version`, `featured`, `webUrl`, `repoUrl` |
| 4 | `src/features/MyApps/data/content/appContent.es.ts` y `appContent.en.ts` | Texto bilingüe: `tagline`, `description`, `features[]`, `changelog[]` |
| 5 | `package.json` | Sube la versión (minor para una app nueva); se muestra en el footer |

Luego: `npm run build` → commit → push. Amplify redespliega solo.

---

## Cómo funciona (arquitectura)

- **Registry central** (`src/features/MyApps/data/registry.ts`) fusiona cada
  `App` de `appsData` con su entrada de `appsMeta` (por `slug`) en un
  `EnrichedApp`, y expone `appsRegistry`, `getAppBySlug`, `getAppContent`,
  `resolveAppCtas`, `getAppKind`, `featuredApps`, `availableCategories`.
  Si una app no tiene entrada en `appsMeta`, cae a `ios + android · live · utility`.
- **Tipos** en `src/features/MyApps/Screens/MyAppsScreen/MyAppsScreen.types.ts`
  (`App`, `AppMeta`, `AppPlatform`, `AppStatus`, `AppCategory`, `ChangelogEntry`,
  `TermsAndConditions`).
- **Rutas genéricas** (definidas una vez en `src/App.tsx` y `src/shared/paths.ts`;
  nunca se editan al agregar una app):
  - `/apps` → catálogo
  - `/app/:slug` → ficha
  - `/app/:slug/landing` → landing (marco de teléfono o de navegador)
  - `/app/:slug/changelog` · `/terms` · `/privacy` · `/delete-account`
- **Tipo Web/Mobile/Ambas** se deriva de `platforms` (`getAppKind`).
- **CTAs** los arma `resolveAppCtas`: mobile → badges de tienda; web → "Abrir app"
  (+ repo). Un link vacío o `#` no cuenta.
- **Renombrar** una app: añade el slug viejo a `slugAliases` en `registry.ts` para
  que los links ya publicados (fichas de tienda, legales) sigan funcionando.

---

## Paso 1 · Icono (opcional pero recomendado)

Sube un PNG **cuadrado** (ideal ≥512×512) con el nombre del `slug`:

```
public/app-icons/<slug>.png
```

Va en `public/` y no en `src/assets/` porque su URL tiene que ser **fija**
(`https://davidyero.com/app-icons/<slug>.png`): el backoffice y el resto del
ecosistema la enlazan. Importado en el bundle llevaría un hash que cambia en
cada build. Por eso **no se importa**: se referencia con `appIcon(slug)`.

De dónde sacarlo:
- **App mobile**: `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png` o
  `ios/<App>/Images.xcassets/AppIcon.appiconset/` (el de 1024) del repo de la app,
  o la ficha de la tienda.
- **App web**: `public/icon-512.png` / `public/logo.png` del repo o del sitio publicado.

Sin icono, la app muestra sus **iniciales**. Nunca uses emojis como icono.

---

## Paso 2 · `apps/<slug>.ts` (datos base)

Crea `src/features/MyApps/data/apps/<slug>.ts` y añádelo a `appsData.ts`
(import + su posición en el array: **ese orden es el del hub**).

```ts
import { type App } from "../../Screens/MyAppsScreen/MyAppsScreen.types";
import { appIcon } from "./appIcon";

export const miAppApp: App = {
  id: "20",                          // siguiente número libre (string)
  name: "Mi App",                    // marca; igual en EN y ES
  slug: "mi-app",                    // kebab-case; define /app/mi-app
  description: "Descripción corta.", // respaldo en ES; el texto real va en appContent
  logo: appIcon("mi-app"),           // → /app-icons/mi-app.png; omítelo si no hay icono
  iconBgColor: "#ff6f4a",            // opcional: fondo detrás del icono
  appStoreUrl: "https://apps.apple.com/...",   // solo si está en iOS
  playStoreUrl: "https://play.google.com/...", // solo si está en Android
  // termsAndConditions, privacyPolicy, accountDeletion: ver abajo
};
```

### Referencia de campos (`App`)

| Campo | Req. | Notas |
|-------|:---:|-------|
| `id` | ✅ | string único, correlativo |
| `name` | ✅ | Marca. **Mismo texto en ambos idiomas** |
| `slug` | ✅ | `kebab-case`. Es la URL `/app/<slug>` y la clave en `appsMeta` y `appContent` |
| `description` | ✅ | Respaldo en ES; lo que se muestra viene de `appContent` |
| `logo` | — | `appIcon('<slug>')`. Si falta → iniciales |
| `iconBgColor` | — | Color de fondo del icono (por defecto, la superficie del tema) |
| `appStoreUrl` | — | URL **real** para el badge iOS |
| `playStoreUrl` | — | URL **real** para el badge Android |
| `screenshots` | — | `string[]` de URLs; se muestran en la ficha y la landing |
| `termsAndConditions` | — | `{ en, es }`. Habilita "Términos" |
| `privacyPolicy` | — | `{ en, es }`. Habilita "Privacidad" |
| `accountDeletion` | — | `{ en, es }`. Habilita `/app/<slug>/delete-account` (Play lo exige si la app tiene cuentas) |

`fullDescription`, `features` y `changelog` existen en el tipo pero **no se usan
aquí**: ese texto vive en `appContent`.

> Los links **deben ser reales**. Un `''` o `'#'` se ignora y el CTA no aparece
> (la app sale como "Próximamente" si no tiene ningún link válido). No inventes
> URLs de tienda ni de repo.

### Términos / Privacidad / Borrado de cuenta (opcional, bilingüe)

Van aquí porque ya traen los dos idiomas. Los tres usan el mismo formato:

```ts
termsAndConditions: {
  es: {
    lastUpdated: "1 de enero de 2026",
    sections: [
      { title: "1. Aceptación", content: "<p>Texto en HTML…</p>" },
      { title: "2. Uso",        content: "<p>…</p><ul><li>…</li></ul>" },
    ],
  },
  en: {
    lastUpdated: "January 1, 2026",
    sections: [
      { title: "1. Acceptance", content: "<p>HTML text…</p>" },
      { title: "2. Use",        content: "<p>…</p>" },
    ],
  },
},
```

`content` acepta HTML simple (`<p>`, `<ul>`, `<li>`). El contacto es siempre
`support@davidyero.com`. Si no incluyes un campo, su botón y su ruta no aparecen.

---

## Paso 3 · `appsMeta.ts` (metadatos)

Agrega una entrada al objeto `appsMeta`, **con la misma clave que el `slug`**:

```ts
'mi-app': {
  platforms: ['ios', 'android'],        // o ['web'], o ['android', 'web']…
  status: 'live',                       // 'live' | 'beta' | 'soon' | 'offline'
  category: 'productivity',             // ver enums
  tech: ['React Native', 'TypeScript'], // chips del stack (reales)
  version: '1.0.0',                     // "v1.0.0" en la ficha
  featured: false,                      // true = sale en las destacadas del Home
  webUrl: 'https://mi-app.com',         // solo si platforms incluye 'web'
  repoUrl: 'https://github.com/...',    // opcional → botón "Ver repo"
  reachKey: 'apps.reach.miApp',         // opcional: cifras reales, ver abajo
},
```

### Enums

| Campo | Valores | Notas |
|-------|---------|-------|
| `platforms` | `'ios'` · `'android'` · `'web'` (array, ≥1) | Deriva el badge **Web/Mobile/Ambas** |
| `status` | `'live'` · `'beta'` · `'soon'` · `'offline'` | `offline` = publicada pero hoy sin servicio: no ofrece descarga y muestra un aviso |
| `category` | `'sports'` · `'productivity'` · `'utility'` · `'entertainment'` | Filtro del catálogo; ver Paso 5 para una nueva |

Plataformas:
- `['web']` → landing con **marco de navegador** + botón "Abrir app".
- Solo mobile → landing con **marco de teléfono** + badges de tienda.
- `'web'` **y** una mobile → "Ambas" (los dos bloques de CTA).

`reachKey`: clave i18n con cifras **reales** (descargas, usuarios) que se pintan
en la ficha y en las destacadas. Añádela en `src/lang/en/apps.json` y
`src/lang/es/apps.json` (`**negrita**` para resaltar números).

---

## Paso 4 · `appContent.es.ts` / `appContent.en.ts` (texto bilingüe)

La **misma clave (`slug`)** en **los dos** mapas, `appContentEs` y `appContentEn`,
con **las mismas keys** (`AppLocalizedContent`):

```ts
// appContentEs
'mi-app': {
  tagline: 'Una línea potente sobre qué hace.',
  description: 'Párrafo más largo para la ficha y la landing.',
  features: ['Característica uno', 'Característica dos'],
  changelog: [
    {
      version: '1.0.0',
      date: '1 de enero de 2026',
      type: 'new',            // 'new' | 'improvement' | 'fix'
      changes: ['Lanzamiento inicial.'],
    },
  ],
},

// appContentEn (mismas keys, traducido)
'mi-app': {
  tagline: 'A punchy one-liner about what it does.',
  description: 'A longer paragraph for the detail and landing.',
  features: ['Feature one', 'Feature two'],
  changelog: [
    { version: '1.0.0', date: 'January 1, 2026', type: 'new', changes: ['Initial release.'] },
  ],
},
```

- `changelog: []` si aún no hay versiones → el botón "Changelog" no aparece.
- La última `version` del changelog y la de `appsMeta` deben coincidir.

---

## Paso 5 · Solo si necesitas una CATEGORÍA nueva

Las categorías son un tipo cerrado. Para añadir una (p. ej. `'finance'`):

1. `MyAppsScreen.types.ts` → el valor en `AppCategory`.
2. `data/registry.ts` → en el array `order` de `availableCategories()`.
3. `src/lang/en/apps.json` y `src/lang/es/apps.json` → `"apps.category.finance"`.

Con una categoría existente no se toca nada de esto.

---

## Paso 6 · Sube la versión

Cada cambio sube la versión de `package.json` (patch para arreglos, minor para
una app nueva). `vite.config.ts` la inyecta como `VITE_APP_VERSION` y sale en el
footer; no hay nada más que tocar.

---

## Paso 7 · Verifica y despliega

```bash
npm run lint
npm run build          # debe compilar sin errores
git add -A
git commit -m "feat(apps): add mi-app (0.36.0)"
git push               # Amplify redespliega solo
```

Comprueba en el sitio:
- La app aparece en **/apps** con su icono o iniciales, badges y filtros.
- **/app/mi-app** muestra la ficha con los CTAs correctos.
- **/app/mi-app/landing** usa el marco correcto (teléfono si mobile, navegador si web).
- `https://davidyero.com/app-icons/mi-app.png` carga.
- Al cambiar EN/ES cambia **todo** el texto.

Fuera del portfolio: si la app tiene backend, se da de alta también en
`src/domains/backoffice/apps.data.ts` del backend, con sus `links`.

---

## Checklist

- [ ] Icono cuadrado en `public/app-icons/<slug>.png` (o aceptas iniciales)
- [ ] `apps/<slug>.ts` con `logo: appIcon('<slug>')` y su línea en `appsData.ts` (links **reales**)
- [ ] Entrada en `appsMeta.ts` con la misma clave (`platforms`, `status`, `category`, `tech`)
- [ ] Misma clave y mismas keys en `appContent.es.ts` y `appContent.en.ts`
- [ ] Legales `{ en, es }` si los tiene; `accountDeletion` si tiene cuentas
- [ ] (Solo si categoría nueva) tipo + `registry` + `apps.json` EN/ES
- [ ] Versión subida en `package.json`
- [ ] `npm run lint` y `npm run build` limpios
- [ ] Commit + push

---

## Ejemplo completo (app web ficticia "Notas", sin icono)

**`apps/notas.ts`**
```ts
import { type App } from "../../Screens/MyAppsScreen/MyAppsScreen.types";

export const notasApp: App = {
  id: "20",
  name: "Notas",
  slug: "notas",
  description: "Notas rápidas que se sincronizan.",
  // sin logo → iniciales "NO"
};
```

**`appsMeta.ts`**
```ts
notas: {
  platforms: ['web'],
  status: 'beta',
  category: 'productivity',
  tech: ['React', 'TypeScript'],
  version: '0.9.0',
  webUrl: 'https://notas.app',
},
```

**`appContent.es.ts` / `appContent.en.ts`**
```ts
// appContentEs
notas: {
  tagline: 'Tus notas, siempre a mano.',
  description: 'Notas rápidas que se sincronizan entre tus dispositivos.',
  features: ['Sincronización instantánea', 'Búsqueda rápida', 'Sin distracciones'],
  changelog: [],
},
// appContentEn
notas: {
  tagline: 'Your notes, always at hand.',
  description: 'Quick notes that sync across your devices.',
  features: ['Instant sync', 'Fast search', 'Distraction-free'],
  changelog: [],
},
```

Resultado: sale en el catálogo como **Web · En desarrollo · Productividad** con
las iniciales "NO", y su landing usa el marco de navegador con "Abrir app".
