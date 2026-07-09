# Cómo agregar una app nueva al portfolio

Esta guía explica, paso a paso, cómo publicar una app (mobile o web) en el hub
del portfolio. **No hace falta crear vistas ni tocar el router**: las pantallas
son genéricas y se alimentan de datos. Agregar una app = editar **3 archivos de
datos** (+ opcionalmente subir un icono) y desplegar.

> Regla de oro: **todo el texto que ve el visitante vive en i18n (EN + ES)** y
> **todo lo no-textual (plataformas, estado, links, iconos) vive en el manifest**.
> Nada de texto hardcodeado en las vistas.

---

## TL;DR — los archivos que tocas

| # | Archivo | Qué pones |
|---|---------|-----------|
| 1 | `src/assets/icons/apps/<Nombre>Icon.png` | El icono (opcional; si no hay, se muestran iniciales) |
| 2 | `src/features/MyApps/data/appsData.ts` | Datos base: `name`, `slug`, `icon`, `logo`, links de tienda, y (opcional) términos/privacidad |
| 3 | `src/features/MyApps/data/appsMeta.ts` | Metadatos: `platforms`, `status`, `category`, `tech`, `version`, `featured`, `webUrl`, `repoUrl`, `accent` |
| 4 | `src/features/MyApps/data/content/appContent.ts` | Texto bilingüe: `tagline`, `description`, `features[]`, `changelog[]` en **EN y ES** |
| 5 | `package.json` (+ `src/shared/appVersion.ts`) | Sube la versión (semver) — se muestra en el footer |

Luego: `npm run build` → commit → push. Amplify redespliega solo.

---

## Cómo funciona (arquitectura)

- **Registry central** (`src/features/MyApps/data/registry.ts`) fusiona
  `appsData` (datos base) + `appsMeta` (metadatos) en un `EnrichedApp`, y expone
  `appsRegistry`, `getAppBySlug`, `getAppContent`, `resolveAppCtas`, `getAppKind`.
- **Rutas dinámicas** (definidas una sola vez en `src/App.tsx` y
  `src/shared/paths.ts`): sirven para infinitas apps. Nunca las edites al agregar
  una app.
  - `/apps` → catálogo
  - `/app/:slug` → detalle (ficha)
  - `/app/:slug/landing` → landing inmersiva (mobile o web según la app)
  - `/app/:slug/changelog` · `/app/:slug/terms` · `/app/:slug/privacy`
- **Tipo Web/Mobile/Ambas** se **deriva** de `platforms` (no se guarda aparte).
- **CTAs adaptativos**: mobile → badges de tienda; web → botón "Abrir app" (+ repo).
- **Idioma**: el chrome (botones, filtros, badges) y el contenido de la app se
  cambian juntos según el idioma. Términos y Privacidad ya son bilingües dentro
  de `appsData`.

---

## Paso 1 · Icono (opcional pero recomendado)

Sube un PNG **cuadrado** (ideal ≥512×512) a:

```
src/assets/icons/apps/<Nombre>Icon.png
```

De dónde sacarlo:
- **App mobile**: `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png` o
  `ios/<App>/Images.xcassets/AppIcon.appiconset/icon-1024.png` del repo de la app;
  o desde la ficha de Play Store / App Store.
- **App web**: `public/icon-512.png` / `public/logo.png` / `favicon.svg` del repo,
  o del sitio publicado (`https://tu-app.com/icon.png`).

Si **no** subes icono, la app muestra sus **iniciales** sobre el gradiente
`accent` (ver Paso 3). Nunca uses emojis como icono.

---

## Paso 2 · `appsData.ts` (datos base)

Importa el icono arriba (si lo subiste) y agrega un objeto al array `appsData`.
Solo `id`, `name`, `slug`, `description`, `icon` son obligatorios.

```ts
// arriba, junto a los demás imports de iconos:
import MiAppIcon from '../../../assets/icons/apps/MiAppIcon.png';

// dentro del array appsData:
{
  id: '14',                         // siguiente número libre, string
  name: 'Mi App',                   // marca; igual en EN y ES
  slug: 'mi-app',                   // kebab-case; define /app/mi-app
  description: 'Descripción corta.', // fallback ES; el texto real va en appContent
  icon: '',                         // deja '' si usas logo o iniciales
  logo: MiAppIcon,                  // omite si no hay icono → iniciales
  appStoreUrl: 'https://apps.apple.com/...',   // solo si está en iOS
  playStoreUrl: 'https://play.google.com/...', // solo si está en Android
  // termsAndConditions y privacyPolicy: ver más abajo (opcionales)
},
```

### Referencia de campos (`App`)

| Campo | Req. | Notas |
|-------|:---:|-------|
| `id` | ✅ | string único, correlativo |
| `name` | ✅ | Marca. **Mismo texto en ambos idiomas** |
| `slug` | ✅ | `kebab-case`. Es la URL `/app/<slug>` |
| `description` | ✅ | Fallback en ES; el texto mostrado viene de `appContent` |
| `icon` | ✅ | Déjalo `''` (usa `logo` o iniciales) |
| `logo` | — | `import` del PNG. Si falta → iniciales |
| `appStoreUrl` | — | URL **real** (no `''` ni `#`) para que aparezca el badge iOS |
| `playStoreUrl` | — | URL **real** para que aparezca el badge Android |
| `screenshots` | — | `string[]` de imports/URLs; se muestran en detalle y landing |
| `changelog` | — | **Ignóralo aquí** → el changelog vive en `appContent` |
| `termsAndConditions` | — | `{ en, es }` (ver abajo). Habilita el botón "Términos" |
| `privacyPolicy` | — | `{ en, es }`. Habilita el botón "Privacidad" |

> Los links **deben ser reales**. Un `''` o `'#'` se ignora y el CTA no aparece
> (la app se muestra como "Próximamente" si no tiene ningún link válido).

### Términos / Privacidad (opcional, bilingüe)

Van en `appsData` porque ya traen ambos idiomas. Formato:

```ts
termsAndConditions: {
  es: {
    lastUpdated: '1 de enero de 2026',
    sections: [
      { title: '1. Aceptación', content: '<p>Texto en HTML…</p>' },
      { title: '2. Uso',        content: '<p>…</p><ul><li>…</li></ul>' },
    ],
  },
  en: {
    lastUpdated: 'January 1, 2026',
    sections: [
      { title: '1. Acceptance', content: '<p>HTML text…</p>' },
      { title: '2. Use',        content: '<p>…</p>' },
    ],
  },
},
```
`content` acepta HTML simple (`<p>`, `<ul>`, `<li>`). `privacyPolicy` usa la
misma estructura. Si no incluyes estos campos, sus botones no aparecen.

---

## Paso 3 · `appsMeta.ts` (metadatos)

Agrega una entrada al objeto `appsMeta`, **con la misma clave que el `slug`**:

```ts
'mi-app': {
  platforms: ['ios', 'android'], // o ['web'], o ['android'], etc.
  status: 'live',                // 'live' | 'beta' | 'soon'
  category: 'productivity',      // ver enums
  tech: ['React Native', 'TypeScript'], // chips del stack
  version: '1.0.0',              // se muestra como "v1.0.0" en el detalle
  featured: false,               // true = aparece en "apps destacadas" del Home
  webUrl: 'https://mi-app.com',  // solo si platforms incluye 'web'
  repoUrl: 'https://github.com/...', // opcional → botón "Ver repo"
  accent: 'linear-gradient(135deg, #89b4fa 0%, #cba6f7 100%)', // marca/icono
},
```

### Enums

| Campo | Valores | Notas |
|-------|---------|-------|
| `platforms` | `'ios'` · `'android'` · `'web'` (array, ≥1) | Deriva el badge **Web/Mobile/Ambas** |
| `status` | `'live'` · `'beta'` · `'soon'` | "Live" pulsa suavemente; "soon" = Próximamente |
| `category` | `'sports'` · `'productivity'` · `'utility'` · `'entertainment'` | Filtro del catálogo; ver Paso 5 para agregar una nueva |

Reglas de plataformas:
- `['web']` → landing con **marco de navegador** + botón "Abrir app".
- `['ios']` / `['android']` / `['ios','android']` → landing con **marco de
  teléfono** + badges de tienda.
- Incluir `'web'` **y** una mobile → "Ambas" (muestra los dos bloques de CTA).

`accent`: usa la paleta Catppuccin (tokens en `src/styles/abstracts/_variables.scss`).
Es el fondo del icono y el color de marca de la landing. Ejemplos de gradientes
existentes están en las otras entradas de `appsMeta.ts`.

---

## Paso 4 · `appContent.ts` (texto bilingüe EN + ES)

Agrega la **misma clave (`slug`)** en **los dos** mapas: `appContentEs` y
`appContentEn`, con **las mismas keys**. Aquí vive todo el texto mostrado.

```ts
// en appContentEs:
'mi-app': {
  tagline: 'Una línea potente sobre qué hace.',
  description: 'Párrafo más largo para el detalle y la landing.',
  features: [
    'Característica uno',
    'Característica dos',
  ],
  changelog: [
    {
      version: '1.0.0',
      date: '1 de enero de 2026',
      type: 'new',            // 'new' | 'improvement' | 'fix'
      changes: ['Lanzamiento inicial.'],
    },
  ],
},

// en appContentEn (mismas keys, traducido):
'mi-app': {
  tagline: 'A punchy one-liner about what it does.',
  description: 'A longer paragraph for the detail and landing.',
  features: ['Feature one', 'Feature two'],
  changelog: [
    {
      version: '1.0.0',
      date: 'January 1, 2026',
      type: 'new',
      changes: ['Initial release.'],
    },
  ],
},
```

- `changelog: []` (vacío) si aún no hay versiones → el botón "Changelog" no aparece.
- La `version` del changelog y la de `appsMeta` deberían coincidir (última release).
- `type` del changelog: `new` (Nuevo) · `improvement` (Mejora) · `fix` (Corrección),
  cada uno con su icono y color.

---

## Paso 5 · Solo si necesitas una CATEGORÍA nueva

Las categorías son un tipo cerrado. Para añadir una (p. ej. `'finance'`):

1. `src/features/MyApps/Screens/MyAppsScreen/MyAppsScreen.types.ts`
   → agrega el valor al tipo `AppCategory`.
2. `src/features/MyApps/data/registry.ts` → añádela al array `order` de
   `availableCategories()` (define el orden de los filtros).
3. `src/lang/en/apps.json` y `src/lang/es/apps.json` → agrega la clave
   `"apps.category.finance": "Finance"` / `"Finanzas"`.

Si usas una categoría existente, **no toques nada de esto**.

---

## Paso 6 · Sube la versión

Regla del proyecto: **cada cambio sube la versión** (se muestra en el footer).

- `package.json` → `"version"` (semver: patch para arreglos, minor para apps nuevas).
- `src/shared/appVersion.ts` → actualiza el fallback para que coincida.

(En build, `REACT_APP_VERSION` se toma de `package.json` automáticamente; el
fallback es solo para tests/local.)

---

## Paso 7 · Verifica y despliega

```bash
npm run build          # debe compilar sin errores
git add -A
git commit -m "feat(apps): add mi-app"
git push origin main   # Amplify redespliega solo (~1-2 min)
```

Comprueba en el sitio:
- La app aparece en **/apps** con su icono/iniciales, badges y filtros.
- **/app/mi-app** muestra el detalle con los CTAs correctos.
- **/app/mi-app/landing** usa el marco correcto (teléfono si mobile, navegador si web).
- Cambia el idioma EN/ES y confirma que **todo** el texto cambia (sin espanglish).

---

## Checklist

- [ ] Icono cuadrado en `assets/icons/apps/` (o aceptas iniciales)
- [ ] Entrada en `appsData.ts` (`slug` en kebab-case, links **reales**)
- [ ] Entrada en `appsMeta.ts` (misma clave `slug`; `platforms`, `status`, `category`, `accent`)
- [ ] Entrada en **ambos** mapas de `appContent.ts` con las **mismas keys** (EN + ES)
- [ ] (Solo si categoría nueva) tipo + `registry` + `apps.json` EN/ES
- [ ] Versión subida en `package.json` y `appVersion.ts`
- [ ] `npm run build` limpio
- [ ] Idioma EN/ES sin texto mezclado
- [ ] Commit + push

---

## Ejemplo completo (app web ficticia "Notas")

**`appsData.ts`**
```ts
{
  id: '14',
  name: 'Notas',
  slug: 'notas',
  description: 'Notas rápidas que se sincronizan.',
  icon: '',
  // sin logo → iniciales "NO"
},
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
  accent: 'linear-gradient(135deg, #f9e2af 0%, #fab387 100%)',
},
```

**`appContent.ts`** (en ES y en EN)
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

Resultado: aparece en el catálogo como app **Web · Beta · Productividad** con
iniciales "NO", y su landing usa el marco de navegador con botón "Abrir app".
