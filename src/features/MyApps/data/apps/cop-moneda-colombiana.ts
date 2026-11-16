import { type App } from "../../Screens/MyAppsScreen/MyAppsScreen.types";
import { appIcon } from "./appIcon";

export const copMonedaColombianaApp: App = {
  id: "16",
  name: "COP Moneda Colombiana",
  slug: "cop-moneda-colombiana",
  description:
    "Tasas de cambio de todas las monedas del mundo frente al peso colombiano, actualizadas cada día. Con conversor, favoritas y detalle por moneda.",
  logo: appIcon("cop-moneda-colombiana"),
  appStoreUrl: "",
  playStoreUrl: "",
  termsAndConditions: {
    es: {
      lastUpdated: "24 de octubre de 2026",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content:
            '<p>Al descargar, instalar o usar COP Moneda Colombiana ("la Aplicación"), aceptas estos Términos y Condiciones. Si no estás de acuerdo, no uses la Aplicación.</p>',
        },
        {
          title: "2. Descripción del Servicio",
          content:
            "<p>La Aplicación muestra tasas de cambio de distintas monedas frente al peso colombiano con fines informativos. Los datos provienen de un proveedor externo (Exchange Rate API) y se actualizan una vez al día.</p>",
        },
        {
          title: "3. No es Asesoría Financiera",
          content:
            "<p><strong>Importante:</strong> las tasas se ofrecen solo con fines informativos y pueden diferir de las de tu banco o casa de cambio. La Aplicación no presta asesoría financiera, de inversión ni cambiaria, y no debe usarse como única base para decisiones económicas. Verifica siempre con una fuente oficial antes de operar.</p>",
        },
        {
          title: "4. Sin Cuenta de Usuario",
          content:
            "<p>La Aplicación no requiere registro ni inicio de sesión. Tus favoritas, idioma y tema se guardan únicamente en tu dispositivo.</p>",
        },
        {
          title: "5. Publicidad",
          content:
            "<p>La Aplicación es gratuita y se financia con publicidad de Google AdMob. Al usarla aceptas la visualización de anuncios. Puedes gestionar el consentimiento de anuncios personalizados desde los ajustes de tu dispositivo.</p>",
        },
        {
          title: "6. Disponibilidad y Cambios",
          content:
            "<p>Podemos modificar, suspender o descontinuar la Aplicación o estos Términos en cualquier momento. El uso continuado tras un cambio implica su aceptación.</p>",
        },
        {
          title: "7. Contacto",
          content:
            "<p>Para dudas sobre estos Términos, escribe a support@davidyero.com.</p>",
        },
      ],
    },
    en: {
      lastUpdated: "October 24, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            '<p>By downloading, installing or using COP Moneda Colombiana ("the App"), you agree to these Terms and Conditions. If you do not agree, do not use the App.</p>',
        },
        {
          title: "2. Service Description",
          content:
            "<p>The App shows exchange rates of various currencies against the Colombian peso for informational purposes. Data comes from a third-party provider (Exchange Rate API) and is updated once a day.</p>",
        },
        {
          title: "3. Not Financial Advice",
          content:
            "<p><strong>Important:</strong> rates are provided for information only and may differ from those of your bank or exchange house. The App does not provide financial, investment or currency-exchange advice and must not be your sole basis for economic decisions. Always verify with an official source before transacting.</p>",
        },
        {
          title: "4. No User Account",
          content:
            "<p>The App requires no sign-up or login. Your favorites, language and theme are stored only on your device.</p>",
        },
        {
          title: "5. Advertising",
          content:
            "<p>The App is free and supported by Google AdMob advertising. By using it you accept the display of ads. You can manage personalized-ads consent from your device settings.</p>",
        },
        {
          title: "6. Availability and Changes",
          content:
            "<p>We may modify, suspend or discontinue the App or these Terms at any time. Continued use after a change means you accept it.</p>",
        },
        {
          title: "7. Contact",
          content:
            "<p>For questions about these Terms, email support@davidyero.com.</p>",
        },
      ],
    },
  },
  privacyPolicy: {
    es: {
      lastUpdated: "24 de octubre de 2026",
      sections: [
        {
          title: "1. Resumen",
          content:
            "<p>COP Moneda Colombiana no te pide cuenta ni recopila datos personales para funcionar. Tus preferencias viven en tu dispositivo. La publicidad de Google puede procesar identificadores del dispositivo según se describe abajo.</p>",
        },
        {
          title: "2. Datos que NO recopilamos",
          content:
            "<p>No recopilamos nombre, correo, teléfono ni ubicación. No hay registro ni inicio de sesión. Tus favoritas, idioma, tema y ajustes de notificación se guardan solo en tu dispositivo (almacenamiento local) y no se envían a ningún servidor nuestro.</p>",
        },
        {
          title: "3. Datos de tasas",
          content:
            "<p>Para mostrar las tasas, la Aplicación consulta nuestro servidor (alojado en Render), que obtiene las cotizaciones de proveedores externos. Esa consulta no incluye información personal tuya.</p>",
        },
        {
          title: "4. Publicidad (Google AdMob)",
          content:
            "<p>La Aplicación muestra anuncios mediante Google AdMob. Para servir anuncios, Google puede recopilar y procesar identificadores del dispositivo (como el identificador de publicidad) conforme a su política de privacidad. La Aplicación solo pide anuncios no personalizados: no usa tu actividad para perfilarte y por eso no te pide permiso de seguimiento (App Tracking Transparency en iOS). Consulta la política de Google en policies.google.com/technologies/ads.</p>",
        },
        {
          title: "5. Notificaciones",
          content:
            "<p>Si activas los recordatorios, las notificaciones se programan localmente en tu dispositivo. No usamos servidores de push ni recopilamos datos para ello.</p>",
        },
        {
          title: "6. Menores",
          content:
            "<p>La Aplicación no está dirigida a menores de 13 años y no recopila conscientemente datos de ellos.</p>",
        },
        {
          title: "7. Cambios y Contacto",
          content:
            "<p>Podemos actualizar esta política; los cambios se publican aquí. Para dudas, escribe a support@davidyero.com.</p>",
        },
      ],
    },
    en: {
      lastUpdated: "October 24, 2026",
      sections: [
        {
          title: "1. Summary",
          content:
            "<p>COP Moneda Colombiana requires no account and collects no personal data to work. Your preferences live on your device. Google advertising may process device identifiers as described below.</p>",
        },
        {
          title: "2. Data we do NOT collect",
          content:
            "<p>We do not collect your name, email, phone or location. There is no sign-up or login. Your favorites, language, theme and notification settings are stored only on your device (local storage) and are not sent to any server of ours.</p>",
        },
        {
          title: "3. Rate data",
          content:
            "<p>To show rates, the App queries our server (hosted on Render), which gets the quotes from third-party providers. That request does not include any personal information about you.</p>",
        },
        {
          title: "4. Advertising (Google AdMob)",
          content:
            "<p>The App shows ads via Google AdMob. To serve ads, Google may collect and process device identifiers (such as the advertising identifier) under its privacy policy. The App only requests non-personalized ads: it does not use your activity to profile you, which is why it does not ask for tracking permission (App Tracking Transparency on iOS). See Google policy at policies.google.com/technologies/ads.</p>",
        },
        {
          title: "5. Notifications",
          content:
            "<p>If you enable reminders, notifications are scheduled locally on your device. We use no push servers and collect no data for them.</p>",
        },
        {
          title: "6. Children",
          content:
            "<p>The App is not directed to children under 13 and does not knowingly collect data from them.</p>",
        },
        {
          title: "7. Changes and Contact",
          content:
            "<p>We may update this policy; changes are posted here. For questions, email support@davidyero.com.</p>",
        },
      ],
    },
  },
};
