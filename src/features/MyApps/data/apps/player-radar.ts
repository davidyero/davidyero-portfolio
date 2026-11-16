import { type App } from "../../Screens/MyAppsScreen/MyAppsScreen.types";
import { appIcon } from "./appIcon";

export const playerRadarApp: App = {
  id: "17",
  name: "Player Radar",
  slug: "player-radar",
  description:
    "Sigue a tus jugadores de fútbol favoritos: partidos de hoy, ficha completa (club, selección y carrera) y datos al instante.",
  logo: appIcon("player-radar"),
  appStoreUrl: "",
  playStoreUrl: "",
  termsAndConditions: {
    es: {
      lastUpdated: "24 de octubre de 2026",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content:
            '<p>Al descargar, instalar o usar Player Radar ("la Aplicación"), aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con ellos, no uses la Aplicación.</p>',
        },
        {
          title: "2. Descripción del Servicio",
          content:
            "<p>Player Radar es una aplicación para aficionados al fútbol que te permite seguir jugadores, crear tu propia selección y consultar los partidos del día, así como fichas detalladas de cada jugador (club actual, selección nacional, trayectoria y partidos). La Aplicación muestra información deportiva con fines informativos y de entretenimiento.</p>",
        },
        {
          title: "3. Fuente de Datos y Ausencia de Afiliación",
          content:
            "<p>Los datos de jugadores, equipos, competiciones y partidos provienen de proveedores de datos deportivos de terceros (principalmente API-Football). Player Radar <strong>no está afiliada, asociada ni respaldada</strong> por la FIFA, la UEFA, ninguna liga, club, selección ni jugador. Los nombres, escudos y marcas pertenecen a sus respectivos titulares y se usan únicamente con fines identificativos e informativos. Los datos pueden contener errores, retrasos o imprecisiones; no garantizamos su exactitud, integridad ni disponibilidad en tiempo real.</p>",
        },
        {
          title: "4. Cuentas",
          content:
            "<p>Puedes usar la Aplicación como invitado o crear una cuenta con tu correo electrónico o iniciando sesión con Google o Apple. La cuenta se usa para identificarte, guardar tus jugadores seguidos y tu selección y, en el plan Pro, sincronizarlos en la nube. Eres responsable de mantener la confidencialidad de tus credenciales. Puedes eliminar tu cuenta y sus datos en cualquier momento desde los Ajustes de la Aplicación.</p>",
        },
        {
          title: "5. Suscripciones y Plan Pro",
          content:
            "<p>Player Radar ofrece un plan Gratuito (con anuncios) y un plan Pro por suscripción que elimina los anuncios y desbloquea funciones adicionales (seguimiento ilimitado, historial completo de partidos, sincronización en la nube y acceso prioritario a datos). Las suscripciones (mensual y anual) se contratan y se cobran a través de Google Play o la App Store de Apple y se gestionan con RevenueCat, sujetas a sus términos. Se renuevan automáticamente salvo que las canceles al menos 24 horas antes del final del período. La renovación, cancelación y reembolsos se gestionan desde tu cuenta de la tienda.</p>",
        },
        {
          title: "6. Publicidad",
          content:
            "<p>El plan Gratuito muestra anuncios a través de Google AdMob. El plan Pro elimina los anuncios. El tratamiento de datos asociado a la publicidad se describe en la Política de Privacidad.</p>",
        },
        {
          title: "7. Uso Aceptable",
          content:
            "<p>Te comprometes a usar la Aplicación solo para fines personales y lícitos. No puedes extraer, copiar de forma masiva, revender ni redistribuir los datos deportivos mostrados, ni intentar acceder a la Aplicación o a nuestros servidores de forma no autorizada, ni interferir con su funcionamiento.</p>",
        },
        {
          title: "8. Propiedad Intelectual",
          content:
            "<p>Todos los derechos sobre la Aplicación, incluyendo su código, diseño e interfaz, pertenecen a su autor. Los datos deportivos y las marcas de terceros pertenecen a sus respectivos titulares.</p>",
        },
        {
          title: "9. Limitación de Responsabilidad",
          content:
            '<p>La Aplicación se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún tipo. No nos hacemos responsables de decisiones tomadas a partir de la información mostrada, de imprecisiones o retrasos en los datos, de la pérdida de datos almacenados localmente ni de incompatibilidades con determinados dispositivos.</p>',
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
      lastUpdated: "October 24, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            '<p>By downloading, installing, or using Player Radar ("the Application"), you agree to be bound by these Terms and Conditions. If you do not agree with them, do not use the Application.</p>',
        },
        {
          title: "2. Description of the Service",
          content:
            "<p>Player Radar is an app for football fans that lets you follow players, build your own selection, and check the day’s matches, as well as detailed profiles for each player (current club, national team, career, and matches). The Application shows sports information for informational and entertainment purposes.</p>",
        },
        {
          title: "3. Data Source and No Affiliation",
          content:
            "<p>Player, team, competition, and match data come from third-party sports data providers (primarily API-Football). Player Radar is <strong>not affiliated with, associated with, or endorsed by</strong> FIFA, UEFA, any league, club, national team, or player. Names, crests, and trademarks belong to their respective owners and are used solely for identification and informational purposes. Data may contain errors, delays, or inaccuracies; we do not guarantee its accuracy, completeness, or real-time availability.</p>",
        },
        {
          title: "4. Accounts",
          content:
            "<p>You can use the Application as a guest or create an account with your email or by signing in with Google or Apple. The account is used to identify you, save your followed players and selection and, on the Pro plan, sync them to the cloud. You are responsible for keeping your credentials confidential. You can delete your account and its data at any time from the Application’s Settings.</p>",
        },
        {
          title: "5. Subscriptions and Pro Plan",
          content:
            "<p>Player Radar offers a Free plan (with ads) and a Pro subscription that removes ads and unlocks additional features (unlimited follows, full match history, cloud sync, and priority access to data). Subscriptions (monthly and yearly) are purchased and billed through Google Play or the Apple App Store and managed with RevenueCat, subject to their terms. They renew automatically unless canceled at least 24 hours before the end of the period. Renewal, cancellation, and refunds are managed from your store account.</p>",
        },
        {
          title: "6. Advertising",
          content:
            "<p>The Free plan shows ads through Google AdMob. The Pro plan removes ads. The data handling associated with advertising is described in the Privacy Policy.</p>",
        },
        {
          title: "7. Acceptable Use",
          content:
            "<p>You agree to use the Application only for personal and lawful purposes. You may not scrape, bulk-copy, resell, or redistribute the sports data shown, attempt to access the Application or our servers in an unauthorized way, or interfere with its operation.</p>",
        },
        {
          title: "8. Intellectual Property",
          content:
            "<p>All rights to the Application, including its code, design, and interface, belong to its author. Sports data and third-party trademarks belong to their respective owners.</p>",
        },
        {
          title: "9. Limitation of Liability",
          content:
            '<p>The Application is provided "as is" and "as available", without warranties of any kind. We are not responsible for decisions made based on the information shown, for inaccuracies or delays in the data, for loss of locally stored data, or for incompatibilities with certain devices.</p>',
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
      lastUpdated: "24 de octubre de 2026",
      sections: [
        {
          title: "1. Introducción",
          content:
            "<p>Esta Política de Privacidad describe qué información maneja Player Radar y cómo. Al usar la Aplicación aceptas las prácticas aquí descritas.</p>",
        },
        {
          title: "2. Datos que Recopilamos",
          content:
            "<p>Recopilamos el mínimo necesario para que la Aplicación funcione:</p><ul><li><strong>Cuenta:</strong> tu correo electrónico y, si inicias sesión con Google o Apple, tu nombre y foto de perfil. Las contraseñas se guardan cifradas.</li><li><strong>Preferencias:</strong> los jugadores que sigues, tu selección, el idioma y el tema.</li><li><strong>Datos técnicos:</strong> un identificador de dispositivo e información básica del dispositivo para el funcionamiento, los anuncios y el diagnóstico.</li></ul>",
        },
        {
          title: "3. Cuenta e Inicio de Sesión",
          content:
            "<p>Puedes usar la Aplicación como invitado; en ese caso usamos un identificador anónimo que no te identifica como persona. Si creas una cuenta con correo o inicias sesión con Google o Apple, guardamos en nuestro backend tu correo, nombre y foto de perfil para identificarte y guardar tus preferencias. El restablecimiento de contraseña se realiza mediante un código enviado a tu correo.</p>",
        },
        {
          title: "4. Sincronización en la Nube (plan Pro)",
          content:
            "<p>Si tienes el plan Pro, tus jugadores seguidos, tu selección y tus preferencias se respaldan en nuestros servidores para sincronizarlos entre tus dispositivos. <strong>El plan Gratuito no sincroniza estos datos en la nube</strong> (se guardan solo en tu dispositivo). Puedes eliminar esta copia eliminando tu cuenta desde los Ajustes.</p>",
        },
        {
          title: "5. Datos de Fútbol",
          content:
            "<p>La información de jugadores, equipos y partidos que muestra la Aplicación proviene de proveedores de datos deportivos de terceros (principalmente API-Football). Estos datos son información pública deportiva y no constituyen datos personales tuyos.</p>",
        },
        {
          title: "6. Suscripciones (RevenueCat)",
          content:
            "<p>Usamos RevenueCat para gestionar las compras dentro de la Aplicación. RevenueCat procesa un identificador de usuario y el estado de tu suscripción para determinar tu plan. No recibimos los datos de tu tarjeta: los pagos los procesa la tienda (Google Play o Apple).</p>",
        },
        {
          title: "7. Publicidad (Google AdMob)",
          content:
            "<p>El plan Gratuito muestra anuncios a través de Google AdMob, que puede usar identificadores del dispositivo o de publicidad y señales de ubicación aproximada para mostrar anuncios. En los dispositivos que lo requieren, la Aplicación te pedirá tu consentimiento antes de habilitar publicidad personalizada; puedes rechazarlo. El plan Pro no muestra anuncios. Consulta la política de privacidad de Google para más detalles.</p>",
        },
        {
          title: "8. Diagnóstico y Rendimiento (Sentry)",
          content:
            "<p>Usamos Sentry para detectar fallos y errores y mejorar la estabilidad. Cuando ocurre un error puede recopilarse el modelo del dispositivo, la versión del sistema operativo y el registro técnico del fallo. No usamos esta información para identificarte ni con fines publicitarios.</p>",
        },
        {
          title: "9. Notificaciones",
          content:
            "<p>Si activas las notificaciones, podemos enviarte avisos relacionados con partidos y jugadores que sigues. Puedes desactivarlas en cualquier momento desde los ajustes de tu dispositivo.</p>",
        },
        {
          title: "10. Permisos",
          content:
            "<p>En Android, la Aplicación solo usa acceso a Internet y a la facturación de Google Play (para las suscripciones). <strong>No accede a tu ubicación precisa, cámara, contactos, micrófono ni fotos.</strong> En iOS, la Aplicación puede solicitarte permiso de seguimiento (ATT) únicamente para la publicidad; puedes rechazarlo y la Aplicación seguirá funcionando.</p>",
        },
        {
          title: "11. No Vendemos tus Datos",
          content:
            "<p>No vendemos ni alquilamos tu información personal a terceros.</p>",
        },
        {
          title: "12. Tus Derechos y Control",
          content:
            "<p>Tú controlas tus datos. Desde la Aplicación puedes:</p><ul><li>Editar tus jugadores seguidos y tu selección</li><li>Restaurar tus compras</li><li>Cambiar el idioma y el tema</li><li>Eliminar tu cuenta y toda la información asociada, incluida la copia en la nube</li></ul>",
        },
        {
          title: "13. Menores de Edad",
          content:
            "<p>La Aplicación no está dirigida a menores de 13 años y no recopilamos de forma consciente datos de menores de esa edad.</p>",
        },
        {
          title: "14. Cambios en esta Política",
          content:
            "<p>Podemos actualizar esta Política. Los cambios se publicarán en la Aplicación o en la tienda correspondiente, indicando la fecha de última actualización.</p>",
        },
        {
          title: "15. Contacto",
          content:
            "<p>Si tienes preguntas sobre esta Política de Privacidad, contáctanos en: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "October 24, 2026",
      sections: [
        {
          title: "1. Introduction",
          content:
            "<p>This Privacy Policy describes what information Player Radar handles and how. By using the Application you accept the practices described here.</p>",
        },
        {
          title: "2. Data We Collect",
          content:
            "<p>We collect the minimum needed for the Application to work:</p><ul><li><strong>Account:</strong> your email and, if you sign in with Google or Apple, your name and profile picture. Passwords are stored encrypted.</li><li><strong>Preferences:</strong> the players you follow, your selection, language, and theme.</li><li><strong>Technical data:</strong> a device identifier and basic device information for operation, ads, and diagnostics.</li></ul>",
        },
        {
          title: "3. Account and Sign-In",
          content:
            "<p>You can use the Application as a guest; in that case we use an anonymous identifier that does not identify you as a person. If you create an account with email or sign in with Google or Apple, we store on our backend your email, name, and profile picture to identify you and save your preferences. Password reset is done via a code sent to your email.</p>",
        },
        {
          title: "4. Cloud Sync (Pro plan)",
          content:
            "<p>If you have the Pro plan, your followed players, selection, and preferences are backed up to our servers to sync across your devices. <strong>The Free plan does not sync this data to the cloud</strong> (it is stored only on your device). You can delete this backup by deleting your account from Settings.</p>",
        },
        {
          title: "5. Football Data",
          content:
            "<p>The player, team, and match information shown in the Application comes from third-party sports data providers (primarily API-Football). This data is public sports information and does not constitute your personal data.</p>",
        },
        {
          title: "6. Subscriptions (RevenueCat)",
          content:
            "<p>We use RevenueCat to manage in-app purchases. RevenueCat processes a user identifier and your subscription status to determine your plan. We do not receive your card details: payments are processed by the store (Google Play or Apple).</p>",
        },
        {
          title: "7. Advertising (Google AdMob)",
          content:
            "<p>The Free plan shows ads through Google AdMob, which may use device or advertising identifiers and approximate location signals to serve ads. On devices that require it, the Application will ask for your consent before enabling personalized ads; you may decline. The Pro plan shows no ads. See Google’s privacy policy for more detail.</p>",
        },
        {
          title: "8. Diagnostics and Performance (Sentry)",
          content:
            "<p>We use Sentry to detect crashes and errors and improve stability. When an error occurs, the device model, operating system version, and the technical error log may be collected. We do not use this information to identify you or for advertising purposes.</p>",
        },
        {
          title: "9. Notifications",
          content:
            "<p>If you enable notifications, we may send you alerts related to matches and players you follow. You can disable them at any time from your device settings.</p>",
        },
        {
          title: "10. Permissions",
          content:
            "<p>On Android, the Application only uses Internet access and Google Play billing (for subscriptions). <strong>It does not access your precise location, camera, contacts, microphone, or photos.</strong> On iOS, the Application may request tracking permission (ATT) solely for advertising; you can decline and the Application will continue to work.</p>",
        },
        {
          title: "11. We Do Not Sell Your Data",
          content:
            "<p>We do not sell or rent your personal information to third parties.</p>",
        },
        {
          title: "12. Your Rights and Control",
          content:
            "<p>You are in control of your data. From within the Application you can:</p><ul><li>Edit your followed players and your selection</li><li>Restore your purchases</li><li>Change the language and theme</li><li>Delete your account and all associated information, including the cloud backup</li></ul>",
        },
        {
          title: "13. Children",
          content:
            "<p>The Application is not directed to children under 13, and we do not knowingly collect data from children under that age.</p>",
        },
        {
          title: "14. Changes to This Policy",
          content:
            "<p>We may update this Policy. Changes will be published in the Application or the relevant store, indicating the last updated date.</p>",
        },
        {
          title: "15. Contact",
          content:
            "<p>If you have questions about this Privacy Policy, contact us at: support@davidyero.com</p>",
        },
      ],
    },
  },
};
