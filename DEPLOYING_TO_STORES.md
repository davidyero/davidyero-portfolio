# Desplegar una app mobile a las tiendas

Guía **informativa** de cómo publicar una app **React Native CLI** en las tiendas
(**Google Play** y, más adelante, **App Store**). Cubre **solo el despliegue en
tienda**: firma, build, ficha y publicación. **No cubre monetización** (compras
in-app / suscripciones) — eso es otro tema aparte.

> Reemplaza los placeholders por los valores de tu app:
>
> - `<<nombre-app>>` — nombre visible (ej. `Mi App`).
> - `<<slug-app>>` — slug en minúsculas sin espacios (ej. `miapp`), para nombres de archivo.
> - `<<paquete-app>>` — `applicationId` / bundle id, formato `com.tuorg.tuapp`
>   (**idéntico iOS/Android**, **inmutable** una vez publicado).

---

## TL;DR — Android

| # | Paso | Qué haces |
|---|------|-----------|
| 1 | **Keystore** | Generas tu upload keystore y cableas la firma de release |
| 2 | **Build** | `./gradlew bundleRelease` → AAB firmado |
| 3 | **Crear app** | Play Console → nueva app con el package definitivo |
| 4 | **Ficha** | Textos, capturas, clasificación de contenido, seguridad de datos, política de privacidad |
| 5 | **Prueba interna** | Subes el AAB a un track interno (Play App Signing) |
| 6 | **Producción** | Promocionas a producción → revisión de Google → lanzamiento |

> El **package / bundle id es inmutable**: elígelo bien antes de la primera subida.

---

## 0. Prerrequisitos

- **Cuenta Google Play Console** activa ($25 pago único, verificación de identidad
  puede tardar ~48 h).
- **(iOS)** Apple Developer Program ($99/año) — pendiente, ver sección iOS.
- `applicationId` / bundle id definitivo (**inmutable** en las tiendas).

---

## Android

### 1 · Keystore de subida (firma de release)

El template de React Native firma el release con `debug.keystore` → Play lo rechaza.
Necesitas un keystore propio.

**1.1 Generar el upload keystore**

```bash
cd android/app
keytool -genkeypair -v \
  -keystore <<slug-app>>-upload.keystore \
  -alias <<slug-app>>-upload \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -storepass "<PASSWORD_FUERTE>" -keypass "<PASSWORD_FUERTE>" \
  -dname "CN=<<tu-nombre>>, O=<<tu-org>>, L=<<ciudad>>, C=<<pais>>"
```

⚠️ Guarda el `.keystore` + password en tu gestor de contraseñas y haz **backup**.
Con **Play App Signing** esta es la *upload key* (recuperable), pero se respalda igual.

**1.2 Credenciales fuera del repo — `android/keystore.properties` (gitignored)**

```properties
storeFile=<<slug-app>>-upload.keystore
storePassword=<PASSWORD>
keyAlias=<<slug-app>>-upload
keyPassword=<PASSWORD>
```

Añade a `.gitignore`: `*.keystore` (con `!debug.keystore`) y `keystore.properties`.
Nunca pongas secretos en `android/gradle.properties` (ese **sí** se commitea).

**1.3 Cablear la firma en `android/app/build.gradle`**

```gradle
// arriba del archivo
def keystorePropertiesFile = rootProject.file("keystore.properties")
def keystoreProperties = new Properties()
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}
// signingConfigs { release { ...lee keystoreProperties... } }
// buildTypes.release.signingConfig = release si existe el archivo, si no debug
```

### 2 · Compilar el AAB de release

```bash
npm install
cd android && ./gradlew bundleRelease
# salida: android/app/build/outputs/bundle/release/app-release.aab
```

- **AAB** (Android App Bundle), no APK: es lo que Play espera para publicar.
- **Versionado**: cada subida sube el `versionCode` (entero, Android) en
  `android/app/build.gradle`; el `versionName` es la versión visible (semver).

### 3 · Crear la app en Play Console

**Todas las apps → Crear aplicación**: nombre, idioma por defecto, tipo *Aplicación*,
gratis/de pago, y acepta las declaraciones. El **package `<<paquete-app>>` es
inmutable** — no se puede cambiar después.

### 4 · Ficha de tienda + requisitos de publicación (informativo)

Antes de que Google acepte el lanzamiento hay que completar (Panel → tareas pendientes):

| Requisito | Qué es |
|-----------|--------|
| **Ficha principal** | Nombre, descripción corta y larga, en cada idioma soportado |
| **Recursos gráficos** | Icono 512×512, gráfico de funciones 1024×500, capturas (teléfono; tablet si aplica) |
| **Clasificación de contenido** | Cuestionario IARC → asigna la edad recomendada |
| **Seguridad de los datos** | Formulario declarando qué datos recoges/compartes y por qué |
| **Política de privacidad** | **URL pública obligatoria** (ver nota abajo) |
| **Público objetivo y contenido** | Rango de edad, apps para niños, anuncios, permisos sensibles |
| **Target API level** | Google exige un `targetSdkVersion` reciente para nuevas apps/updates |

> **Política de privacidad:** este mismo portfolio ya sirve una URL por app —
> `/(/app/<<slug-app>>/privacy)` y `/(/app/<<slug-app>>/terms)` — que puedes usar
> como la URL de privacidad requerida por la tienda (ver
> [`ADDING_A_NEW_APP.md`](./ADDING_A_NEW_APP.md), sección Términos / Privacidad).

### 5 · Subir a Prueba interna

**Prueba y lanzamiento → Pruebas → Prueba interna → Crear versión**:

- Acepta **Play App Signing** (Google gestiona la clave final de firma; tú subes
  firmado con tu upload key).
- Sube `app-release.aab`.
- Las advertencias de *debug symbols* / *deobfuscation mapping* son inofensivas al
  inicio.
- Añade tu correo como **tester** (Testers) y entra por el **link de opt-in** de la
  lista para instalar desde Play.

> Empieza siempre por un track de pruebas (interno) antes de producción: valida que
> la firma, el package y la instalación desde Play funcionan.

### 6 · Producción (lanzamiento)

Cuando la ficha está completa y la prueba interna funciona:

- **Producción → Crear versión** (o **promociona** la de prueba interna).
- Google **revisa** la app (desde horas hasta varios días).
- Puedes hacer **lanzamiento escalonado** (% de usuarios) e ir subiendo.

---

## iOS (App Store) — pendiente

Se documentará en la próxima iteración. Resumen de lo que implicará:

- Apple Developer Program + certificados/perfiles de aprovisionamiento.
- Build firmada (Xcode / `xcodebuild`) subida a **App Store Connect** (TestFlight).
- Ficha (capturas por tamaño de dispositivo, descripción, keywords, política de
  privacidad y *App Privacy* / *nutrition labels*).
- Envío a **App Review** → lanzamiento.

---

## Checklist — Android

- [ ] `applicationId` / package definitivo (inmutable) decidido
- [ ] Upload keystore generado + **backup** y password guardados
- [ ] `keystore.properties` gitignored y firma cableada en `build.gradle`
- [ ] `./gradlew bundleRelease` genera el **AAB** sin errores
- [ ] App creada en Play Console con el package correcto
- [ ] Ficha, recursos gráficos, clasificación de contenido y **seguridad de datos** completos
- [ ] **URL de política de privacidad** puesta (puede ser la del portfolio)
- [ ] AAB subido a **Prueba interna** + instalado desde Play como tester
- [ ] Promoción a **Producción** y revisión de Google superada
