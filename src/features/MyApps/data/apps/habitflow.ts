import { type App } from "../../Screens/MyAppsScreen/MyAppsScreen.types";
import { appIcon } from "./appIcon";

export const habitflowApp: App = {
  id: "14",
  name: "HabitFlow",
  slug: "habitflow",
  description:
    "Rastreador de hábitos minimalista con rachas estilo grilla de contribuciones. Local-first, con sincronización opcional en la nube para Lite y Pro.",
  logo: appIcon("habitflow"),
  appStoreUrl: "",
  playStoreUrl: "",
  termsAndConditions: {
    es: {
      lastUpdated: "19 de julio de 2026",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content:
            '<p>Al descargar, instalar o usar HabitFlow ("la Aplicación"), aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con ellos, no uses la Aplicación.</p>',
        },
        {
          title: "2. Descripción del Servicio",
          content:
            "<p>HabitFlow es una aplicación para crear y seguir hábitos personales, disponible en iOS y Android. La Aplicación es local-first: puedes usarla como invitado y todos tus datos permanecen en tu dispositivo. De forma opcional puedes crear una cuenta. En los planes de pago (Lite y Pro), tus hábitos, check-ins y estados de ánimo se sincronizan en nuestros servidores para mantenerlos actualizados entre tus dispositivos; en el plan gratuito tus datos permanecen 100% en el dispositivo.</p>",
        },
        {
          title: "3. Cuentas",
          content:
            "<p>Puedes usar la Aplicación como invitado (100% en el dispositivo) o crear una cuenta con tu nombre, correo electrónico y contraseña en nuestro backend. No ofrecemos inicio de sesión con redes sociales. Eres responsable de mantener la confidencialidad de tus credenciales y de toda actividad realizada bajo tu cuenta. Puedes eliminar tu cuenta en cualquier momento desde la Aplicación.</p>",
        },
        {
          title: "4. Suscripciones y Pagos",
          content:
            "<p>HabitFlow ofrece un plan gratuito y planes de pago que desbloquean el nivel Pro. Las compras dentro de la aplicación (mensual, anual o de por vida) se gestionan con RevenueCat y se cobran a través de la tienda correspondiente (App Store de Apple o Google Play), sujetas a sus términos. Las suscripciones se renuevan automáticamente salvo que las canceles antes del final del período. La renovación, cancelación y reembolsos se gestionan desde tu cuenta de la tienda, y no ofrecemos reembolsos más allá de la política de la tienda. El estado de tu suscripción se valida en nuestros servidores.</p>",
        },
        {
          title: "5. Códigos de Canje",
          content:
            "<p>Podemos crear códigos de canje que otorgan acceso al nivel Lite o Pro. Cada código es de un solo uso, personal e intransferible. Nos reservamos el derecho de revocar cualquier código o el acceso concedido por él en caso de uso indebido o fraude.</p>",
        },
        {
          title: "6. Uso Aceptable",
          content:
            "<p>Te comprometes a:</p><ul><li>Usar la Aplicación únicamente con fines personales y legales</li><li>No intentar modificar, descompilar ni realizar ingeniería inversa sobre la Aplicación</li><li>No interferir con el funcionamiento de la Aplicación, con nuestros servidores ni con la seguridad de otros usuarios</li></ul>",
        },
        {
          title: "7. Publicidad",
          content:
            "<p>Los planes Gratuito y Lite muestran anuncios a través de Google AdMob (un banner inferior y algún anuncio intersticial ocasional). El plan Pro elimina los anuncios. El uso de la publicidad se rige también por la Política de Privacidad.</p>",
        },
        {
          title: "8. Propiedad Intelectual",
          content:
            "<p>Todos los derechos sobre la Aplicación, incluyendo su código, diseño e interfaz, pertenecen a su autor. El contenido que registras (hábitos, notas, fotos) es tuyo; nosotros no reclamamos ningún derecho sobre él.</p>",
        },
        {
          title: "9. Limitación de Responsabilidad",
          content:
            '<p>La Aplicación se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún tipo. No nos hacemos responsables de la pérdida de datos almacenados localmente o sincronizados, de errores o incompatibilidades con determinados dispositivos, ni de daños derivados del uso o imposibilidad de uso de la Aplicación. Te recomendamos exportar tus datos periódicamente.</p>',
        },
        {
          title: "10. Modificaciones",
          content:
            "<p>Podemos modificar estos Términos y las funciones de la Aplicación en cualquier momento. Los cambios entrarán en vigor desde su publicación. El uso continuado de la Aplicación implica la aceptación de los Términos vigentes.</p>",
        },
        {
          title: "11. Contacto",
          content:
            "<p>Si tienes preguntas sobre estos Términos, contáctanos en: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "July 19, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            '<p>By downloading, installing, or using HabitFlow ("the Application"), you agree to be bound by these Terms and Conditions. If you do not agree with them, do not use the Application.</p>',
        },
        {
          title: "2. Description of the Service",
          content:
            "<p>HabitFlow is an app for creating and tracking personal habits, available on iOS and Android. The Application is local-first: you can use it as a guest and all your data stays on your device. Optionally, you may create an account. On paid plans (Lite and Pro), your habits, check-ins, and moods are synced to our servers to keep them up to date across your devices; on the free plan your data stays 100% on the device.</p>",
        },
        {
          title: "3. Accounts",
          content:
            "<p>You can use the Application as a guest (100% on-device) or create an account with your name, email, and password on our backend. We do not offer social login. You are responsible for keeping your credentials confidential and for all activity under your account. You can delete your account at any time from within the Application.</p>",
        },
        {
          title: "4. Subscriptions and Payments",
          content:
            "<p>HabitFlow offers a free plan and paid plans that unlock the Pro tier. In-app purchases (monthly, annual, or lifetime) are managed with RevenueCat and billed through the relevant app store (Apple App Store or Google Play), subject to their terms. Subscriptions renew automatically unless canceled before the end of the period. Renewal, cancellation, and refunds are managed from your store account, and we do not offer refunds beyond the store policy. Your subscription status is validated on our servers.</p>",
        },
        {
          title: "5. Redeem Codes",
          content:
            "<p>We may create redeem codes that grant access to the Lite or Pro tier. Each code is single-use, personal, and non-transferable. We reserve the right to revoke any code or the access it granted in the event of misuse or fraud.</p>",
        },
        {
          title: "6. Acceptable Use",
          content:
            "<p>You agree to:</p><ul><li>Use the Application only for personal and lawful purposes</li><li>Not attempt to modify, decompile, or reverse engineer the Application</li><li>Not interfere with the operation of the Application, our servers, or the security of other users</li></ul>",
        },
        {
          title: "7. Advertising",
          content:
            "<p>The Free and Lite plans show ads through Google AdMob (a bottom banner and an occasional interstitial). The Pro plan removes ads. Advertising is also governed by the Privacy Policy.</p>",
        },
        {
          title: "8. Intellectual Property",
          content:
            "<p>All rights to the Application, including its code, design, and interface, belong to its author. The content you record (habits, notes, photos) is yours; we claim no rights over it.</p>",
        },
        {
          title: "9. Limitation of Liability",
          content:
            '<p>The Application is provided "as is" and "as available", without warranties of any kind. We are not responsible for loss of locally stored or synced data, errors or incompatibilities with certain devices, or damages arising from use of or inability to use the Application. We recommend exporting your data periodically.</p>',
        },
        {
          title: "10. Modifications",
          content:
            "<p>We may modify these Terms and the features of the Application at any time. Changes take effect upon publication. Continued use of the Application implies acceptance of the current Terms.</p>",
        },
        {
          title: "11. Contact",
          content:
            "<p>If you have questions about these Terms, contact us at: support@davidyero.com</p>",
        },
      ],
    },
  },
  privacyPolicy: {
    es: {
      lastUpdated: "23 de octubre de 2026",
      sections: [
        {
          title: "1. Introducción",
          content:
            "<p>Esta Política de Privacidad describe cómo HabitFlow maneja tu información. HabitFlow es una aplicación local-first: puedes usarla como invitado con todos tus datos en el dispositivo, o crear una cuenta y activar la sincronización en la nube en los planes de pago.</p>",
        },
        {
          title: "2. Datos que Recopilamos",
          content:
            "<p>Podemos tratar los siguientes datos:</p><ul><li><strong>Cuenta:</strong> tu nombre y correo electrónico, junto con una versión cifrada de tu contraseña, almacenados en nuestro backend.</li><li><strong>Contenido de hábitos:</strong> tus hábitos, check-ins y estados de ánimo. Solo se sincronizan en nuestros servidores en los planes Lite y Pro; en el plan gratuito permanecen 100% en tu dispositivo.</li><li><strong>Historial de compras:</strong> gestionado a través de RevenueCat para validar tu suscripción.</li><li><strong>Identificadores de publicidad:</strong> recopilados por Google AdMob (con tu consentimiento) para mostrar anuncios.</li><li><strong>Fotos:</strong> la foto opcional que adjuntes a un check-in se guarda únicamente en tu dispositivo.</li></ul>",
        },
        {
          title: "3. Cómo Usamos tus Datos",
          content:
            "<p>Usamos tus datos para: crear y autenticar tu cuenta; sincronizar tus hábitos entre dispositivos en los planes de pago; validar tu suscripción; mostrar publicidad en los planes Gratuito y Lite; y enviarte recordatorios locales. No usamos tu contenido de hábitos con fines publicitarios.</p>",
        },
        {
          title: "4. Sincronización en la Nube (solo planes de pago)",
          content:
            "<p>La sincronización en la nube está disponible únicamente para los planes Lite y Pro. Cuando está activa, tus hábitos, check-ins y estados de ánimo se copian a nuestros servidores para mantenerlos actualizados entre tus dispositivos. <strong>En el plan gratuito, estos datos permanecen 100% en tu dispositivo y nunca se envían a nuestros servidores.</strong> Las fotos adjuntas a un check-in nunca se suben; se guardan solo en el dispositivo.</p>",
        },
        {
          title: "5. Publicidad y Seguimiento (Google AdMob)",
          content:
            "<p>Los planes Gratuito y Lite muestran anuncios a través de Google AdMob. AdMob puede recopilar identificadores de publicidad y datos del dispositivo para mostrar anuncios. En iOS usamos la Transparencia de Seguimiento de Apps (ATT) y, en general, una plataforma de gestión de consentimiento (UMP/GDPR) para pedir tu consentimiento; solo mostramos publicidad personalizada si lo aceptas, y puedes rechazarlo. Consulta la política de privacidad de Google para más detalles.</p>",
        },
        {
          title: "6. Notificaciones Locales",
          content:
            "<p>La Aplicación usa notificaciones locales en tu dispositivo para enviarte recordatorios de tus hábitos. Estas notificaciones se generan en el dispositivo y no implican el envío de tus datos a nuestros servidores.</p>",
        },
        {
          title: "7. No Vendemos tus Datos",
          content:
            "<p>No vendemos ni alquilamos tu información personal a terceros.</p>",
        },
        {
          title: "8. Tus Derechos y Control",
          content:
            "<p>Tú controlas tus datos. Desde la Aplicación puedes:</p><ul><li>Exportar e importar todos tus datos (JSON o CSV)</li><li>Eliminar tus datos de hábitos</li><li>Eliminar tu cuenta, lo que también elimina los datos que tengas sincronizados en la nube</li></ul>",
        },
        {
          title: "9. Conservación y Eliminación de Datos",
          content:
            "<p>Conservamos los datos de tu cuenta y los datos sincronizados mientras tu cuenta esté activa. Cuando eliminas tu cuenta, eliminamos tu información de cuenta y los datos asociados sincronizados en la nube. Los datos que solo existen en tu dispositivo se eliminan al desinstalar la Aplicación.</p>",
        },
        {
          title: "10. Menores",
          content:
            "<p>La Aplicación no está dirigida a menores de 13 años y no recopilamos a sabiendas datos de menores. Si crees que un menor a tu cargo nos ha facilitado datos, escríbenos a support@davidyero.com y los eliminaremos.</p>",
        },
        {
          title: "11. Cambios en esta Política",
          content:
            "<p>Podemos actualizar esta Política. Los cambios se publicarán en la Aplicación o en la tienda correspondiente, indicando la fecha de última actualización.</p>",
        },
        {
          title: "12. Contacto",
          content:
            "<p>Si tienes preguntas sobre esta Política de Privacidad, contáctanos en: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "October 23, 2026",
      sections: [
        {
          title: "1. Introduction",
          content:
            "<p>This Privacy Policy describes how HabitFlow handles your information. HabitFlow is a local-first app: you can use it as a guest with all your data on your device, or create an account and enable cloud sync on the paid plans.</p>",
        },
        {
          title: "2. Data We Collect",
          content:
            "<p>We may process the following data:</p><ul><li><strong>Account:</strong> your name and email address, along with an encrypted version of your password, stored on our backend.</li><li><strong>Habit content:</strong> your habits, check-ins, and moods. These are only synced to our servers on the Lite and Pro plans; on the free plan they stay 100% on your device.</li><li><strong>Purchase history:</strong> handled through RevenueCat to validate your subscription.</li><li><strong>Advertising identifiers:</strong> collected by Google AdMob (with your consent) to serve ads.</li><li><strong>Photos:</strong> the optional photo you attach to a check-in is stored only on your device.</li></ul>",
        },
        {
          title: "3. How We Use Your Data",
          content:
            "<p>We use your data to: create and authenticate your account; sync your habits across devices on paid plans; validate your subscription; show advertising on the Free and Lite plans; and send you local reminders. We do not use your habit content for advertising purposes.</p>",
        },
        {
          title: "4. Cloud Sync (paid plans only)",
          content:
            "<p>Cloud sync is available only for the Lite and Pro plans. When active, your habits, check-ins, and moods are copied to our servers to keep them up to date across your devices. <strong>On the free plan, this data stays 100% on your device and is never sent to our servers.</strong> Photos attached to a check-in are never uploaded; they are stored on the device only.</p>",
        },
        {
          title: "5. Advertising and Tracking (Google AdMob)",
          content:
            "<p>The Free and Lite plans show ads through Google AdMob. AdMob may collect advertising identifiers and device data to serve ads. On iOS we use App Tracking Transparency (ATT) and, more generally, a consent management platform (UMP/GDPR) to ask for your consent; we only show personalized ads if you agree, and you may decline. See Google’s privacy policy for more detail.</p>",
        },
        {
          title: "6. Local Notifications",
          content:
            "<p>The Application uses local notifications on your device to send you habit reminders. These notifications are generated on the device and do not involve sending your data to our servers.</p>",
        },
        {
          title: "7. We Do Not Sell Your Data",
          content:
            "<p>We do not sell or rent your personal information to third parties.</p>",
        },
        {
          title: "8. Your Rights and Control",
          content:
            "<p>You are in control of your data. From within the Application you can:</p><ul><li>Export and import all your data (JSON or CSV)</li><li>Delete your habit data</li><li>Delete your account, which also removes any data you have synced to the cloud</li></ul>",
        },
        {
          title: "9. Data Retention and Deletion",
          content:
            "<p>We keep your account data and synced data while your account is active. When you delete your account, we delete your account information and the associated data synced to the cloud. Data that exists only on your device is removed when you uninstall the Application.</p>",
        },
        {
          title: "10. Children",
          content:
            "<p>The App is not directed to children under 13 and we do not knowingly collect data from children. If you believe a child in your care has given us data, email support@davidyero.com and we will delete it.</p>",
        },
        {
          title: "11. Changes to This Policy",
          content:
            "<p>We may update this Policy. Changes will be published in the Application or the relevant store, indicating the last updated date.</p>",
        },
        {
          title: "12. Contact",
          content:
            "<p>If you have questions about this Privacy Policy, contact us at: support@davidyero.com</p>",
        },
      ],
    },
  },
};
