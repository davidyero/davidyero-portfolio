import { type App } from "../../Screens/MyAppsScreen/MyAppsScreen.types";
import { appIcon } from "./appIcon";

export const splitioApp: App = {
  id: "12",
  name: "Splitio",
  slug: "splitio",
  description:
    "Gastos compartidos por grupo: reparte cada gasto y calcula quién debe cuánto a quién, mes a mes.",
  logo: appIcon("splitio"),
  accountDeletion: {
    es: {
      lastUpdated: "18 de Septiembre, 2026",
      sections: [
        {
          title: "1. De qué aplicación hablamos",
          content:
            "<p>Esta página explica cómo eliminar tu cuenta de <strong>Splitio</strong>, desarrollada por David Yepes (@Davidyero), disponible en <strong>www.splitio.net</strong> y en Google Play con el identificador <code>com.davidyero.splitio</code>.</p>",
        },
        {
          title: "2. Cómo pedir la eliminación",
          content:
            "<p>Escríbenos a <strong>support@davidyero.com</strong> <em>desde la misma dirección de correo con la que te registraste</em>, con el asunto <strong>Eliminar cuenta - Splitio</strong>.</p><p>Usamos esa dirección para comprobar que la cuenta es tuya. Procesamos la solicitud en un plazo máximo de <strong>30 días</strong> y te confirmamos por correo cuando esté hecha. No necesitas tener la aplicación instalada.</p>",
        },
        {
          title: "3. Qué datos se eliminan",
          content:
            "<p>Se borran de forma permanente de nuestros servidores:</p><ul><li>Los datos de tu cuenta: correo electrónico, nombre, color de avatar y la versión cifrada de tu contraseña.</li><li>Los grupos en los que eras la única persona, con todos sus ingresos, gastos, categorías y pagos.</li><li>Las invitaciones que hayas enviado y que sigan pendientes.</li><li>Las solicitudes que nos hayas escrito desde la sección Solicitudes.</li></ul>",
        },
        {
          title: "4. Qué se conserva y por qué",
          content:
            "<p><strong>Los gastos e ingresos que registraste en grupos compartidos permanecen en esos grupos</strong>, porque forman parte de las cuentas de las demás personas: borrarlos les cambiaría el saldo sin que ellas puedan evitarlo.</p><p>En esos grupos tu usuario deja de tener datos personales y aparece como <strong>Usuario eliminado</strong>: ni tu nombre ni tu correo siguen asociados a esos registros.</p><p><strong>Copias de seguridad.</strong> Nuestras copias cifradas de la base de datos pueden conservar una copia hasta <strong>30 días</strong> desde el borrado, tras los cuales se sobrescriben.</p>",
        },
        {
          title: "5. Si prefieres borrar solo una parte",
          content:
            "<p>No hace falta eliminar la cuenta para borrar datos concretos: desde la aplicación puedes borrar gastos, categorías y grupos, o salir de un grupo cuando quieras.</p>",
        },
        {
          title: "6. Contacto",
          content:
            "<p>Cualquier duda sobre la eliminación de tu cuenta o de tus datos: <strong>support@davidyero.com</strong>.</p>",
        },
      ],
    },
    en: {
      lastUpdated: "September 18, 2026",
      sections: [
        {
          title: "1. Which app this is about",
          content:
            "<p>This page explains how to delete your <strong>Splitio</strong> account. Splitio is developed by David Yepes (@Davidyero) and is available at <strong>www.splitio.net</strong> and on Google Play under the identifier <code>com.davidyero.splitio</code>.</p>",
        },
        {
          title: "2. How to request deletion",
          content:
            "<p>Write to <strong>support@davidyero.com</strong> <em>from the same email address you registered with</em>, using the subject <strong>Delete account - Splitio</strong>.</p><p>We use that address to verify the account is yours. We process the request within <strong>30 days</strong> at most and confirm by email once it is done. You do not need to have the app installed.</p>",
        },
        {
          title: "3. What gets deleted",
          content:
            "<p>The following is permanently removed from our servers:</p><ul><li>Your account details: email address, name, avatar colour and the encrypted version of your password.</li><li>Groups where you were the only member, including every income, expense, category and payment in them.</li><li>Invitations you sent that are still pending.</li><li>Requests you sent us from the Requests section.</li></ul>",
        },
        {
          title: "4. What is kept and why",
          content:
            "<p><strong>Expenses and incomes you recorded in shared groups stay in those groups</strong>, because they are part of other people's accounts: deleting them would change their balances with no say from them.</p><p>In those groups your user no longer holds personal data and shows as <strong>Deleted user</strong>: neither your name nor your email remains attached to those records.</p><p><strong>Backups.</strong> Our encrypted database backups may keep a copy for up to <strong>30 days</strong> after deletion, after which they are overwritten.</p>",
        },
        {
          title: "5. If you only want part of it gone",
          content:
            "<p>You do not need to delete your account to remove specific data: from the app you can delete expenses, categories and groups, or leave a group whenever you want.</p>",
        },
        {
          title: "6. Contact",
          content:
            "<p>Any question about deleting your account or your data: <strong>support@davidyero.com</strong>.</p>",
        },
      ],
    },
  },
  termsAndConditions: {
    es: {
      lastUpdated: "17 de Septiembre, 2026",
      sections: [
        {
          title: "1. Qué es y qué no es Splitio",
          content:
            "<p>Splitio lleva la cuenta de los gastos compartidos de un grupo y calcula quién le debe cuánto a quién. Es una herramienta de cálculo: <strong>no mueve dinero, no procesa pagos entre personas y no es asesoría financiera ni contable</strong>. Marcar una deuda como pagada solo actualiza el registro del grupo.</p>",
        },
        {
          title: "2. Aceptación",
          content:
            "<p>Estos términos regulan el uso de Splitio, tanto en www.splitio.net como en su aplicación móvil. Al crear una cuenta, los aceptas.</p>",
        },
        {
          title: "3. Tu cuenta",
          content:
            "<p>Los datos que registras deben ser reales y eres responsable de tu contraseña y de todo lo que se haga desde tu cuenta. Avísanos a support@davidyero.com si detectas un uso no autorizado.</p>",
        },
        {
          title: "4. Uso correcto",
          content:
            "<p>Usa Splitio solo para llevar gastos propios o de tu grupo. Está prohibido:</p><ul><li>Invitar a personas sin su consentimiento</li><li>Registrar contenido ofensivo o ilegal</li><li>Intentar acceder a datos de otras cuentas</li><li>Interferir con el funcionamiento del servicio</li></ul>",
        },
        {
          title: "5. Tu contenido",
          content:
            "<p>Los datos que registras siguen siendo tuyos. Nos das permiso únicamente para almacenarlos y mostrarlos a los miembros del grupo, que es lo necesario para prestar el servicio.</p>",
        },
        {
          title: "6. Planes y publicidad",
          content:
            "<p>El plan gratuito permite crear hasta 3 grupos propios y, en la aplicación móvil, muestra anuncios. Los planes ampliados quitan ese límite y la publicidad. Si en el futuro se cobran, se avisará antes y ningún cambio se aplicará a lo ya pagado.</p>",
        },
        {
          title: "7. Disponibilidad y responsabilidad",
          content:
            "<p>El servicio se ofrece “tal cual”, sin garantía de estar siempre disponible ni libre de errores. No respondemos por decisiones de dinero tomadas a partir de los cálculos de la app: revisa siempre las cifras con tu grupo.</p>",
        },
        {
          title: "8. Suspensión y cierre",
          content:
            "<p>Puedes dejar de usar Splitio cuando quieras y pedir el borrado de tu cuenta escribiendo a support@davidyero.com. Podemos suspender cuentas que incumplan estos términos o que pongan en riesgo el servicio o a otras personas.</p>",
        },
        {
          title: "9. Ley aplicable",
          content:
            "<p>Estos términos se rigen por la ley colombiana. Antes de cualquier reclamación formal, escríbenos a support@davidyero.com.</p>",
        },
      ],
    },
    en: {
      lastUpdated: "September 17, 2026",
      sections: [
        {
          title: "1. What Splitio is and is not",
          content:
            "<p>Splitio keeps track of a group's shared expenses and works out who owes what to whom. It is a calculation tool: <strong>it does not move money, does not process payments between people and is not financial or accounting advice</strong>. Marking a debt as paid only updates the group's record.</p>",
        },
        {
          title: "2. Acceptance",
          content:
            "<p>These terms govern the use of Splitio, both at www.splitio.net and in its mobile app. By creating an account, you accept them.</p>",
        },
        {
          title: "3. Your account",
          content:
            "<p>The details you register must be real, and you are responsible for your password and for everything done from your account. Tell us at support@davidyero.com if you notice unauthorised use.</p>",
        },
        {
          title: "4. Acceptable use",
          content:
            "<p>Use Splitio only to track your own or your group's expenses. You may not:</p><ul><li>Invite people without their consent</li><li>Record offensive or unlawful content</li><li>Try to reach other accounts' data</li><li>Interfere with the service</li></ul>",
        },
        {
          title: "5. Your content",
          content:
            "<p>The data you record stays yours. You give us permission only to store it and show it to the members of the group, which is what the service needs to work.</p>",
        },
        {
          title: "6. Plans and advertising",
          content:
            "<p>The free plan allows up to 3 owned groups and shows ads in the mobile app. Paid plans remove that limit and the advertising. If they ever start being charged, you will be told beforehand and no change will apply to what you already paid.</p>",
        },
        {
          title: "7. Availability and liability",
          content:
            "<p>The service is provided “as is”, with no guarantee of being always available or free of errors. We are not liable for money decisions made from the app's calculations: always check the figures with your group.</p>",
        },
        {
          title: "8. Suspension and closing",
          content:
            "<p>You can stop using Splitio whenever you want and request deletion of your account at support@davidyero.com. We may suspend accounts that break these terms or that put the service or other people at risk.</p>",
        },
        {
          title: "9. Governing law",
          content:
            "<p>These terms are governed by Colombian law. Before any formal claim, write to support@davidyero.com.</p>",
        },
      ],
    },
  },
  privacyPolicy: {
    es: {
      lastUpdated: "17 de Septiembre, 2026",
      sections: [
        {
          title: "1. Responsable",
          content:
            "<p>Splitio es una aplicación para repartir gastos entre personas de un mismo grupo. El responsable es David Yepes (@Davidyero). Para cualquier asunto de privacidad: support@davidyero.com.</p>",
        },
        {
          title: "2. Qué datos guardamos",
          content:
            "<p>De tu cuenta: nombre, correo electrónico, color de avatar y tu contraseña cifrada (nunca se guarda tal cual la escribes).</p><ul><li>De lo que registras: grupos (nombre, icono, color y moneda), miembros, ingresos del mes, gastos (descripción, monto, fecha, categoría, quién pagó y entre quiénes se reparte), pagos de deuda e invitaciones enviadas</li><li>De tus solicitudes: el tipo y el mensaje que envías desde la sección Solicitudes</li><li>Técnicos mínimos: registros del servidor con la fecha y el tipo de petición</li></ul><p>No usamos rastreadores ni herramientas de analítica.</p>",
        },
        {
          title: "3. Para qué los usamos",
          content:
            "<p>Únicamente para prestar el servicio: crear tu cuenta, calcular los saldos del grupo, enviar las invitaciones y los correos de recuperación de contraseña, y atender tus solicitudes. No vendemos tus datos ni los usamos para perfilarte.</p>",
        },
        {
          title: "4. Quién ve tu información",
          content:
            "<p><strong>Los miembros de un grupo ven tu nombre, tu avatar y todo lo que registras en ese grupo</strong>: tus ingresos del mes, los gastos que pagas y los saldos. Comparte un grupo solo con personas de confianza.</p><p>Proveedores que hacen funcionar el servicio: Render (servidores y base de datos), AWS Amplify (alojamiento de la web), Resend (envío de correos) y Google Fonts (tipografías de la web). Cada uno trata los datos solo para esa función.</p>",
        },
        {
          title: "5. Publicidad en la aplicación móvil",
          content:
            "<p>La web no tiene publicidad. La aplicación móvil muestra anuncios de Google AdMob en su plan gratuito. Antes de activarlos te pedimos tu consentimiento cuando la ley lo exige; si no lo das, verás anuncios no personalizados. Google puede usar identificadores de tu dispositivo según su propia política de privacidad.</p>",
        },
        {
          title: "6. Datos guardados en tu dispositivo",
          content:
            "<p>Guardamos en tu navegador o teléfono tu sesión, el idioma, el tema claro u oscuro y el grupo activo. Son datos propios y necesarios para que la app funcione: no hay cookies de rastreo ni publicidad en la web.</p>",
        },
        {
          title: "7. Cuánto tiempo los conservamos",
          content:
            "<p>Mientras tengas la cuenta activa. Si sales de un grupo, los gastos que registraste permanecen en él, porque forman parte de las cuentas de las demás personas.</p>",
        },
        {
          title: "8. Tus derechos y cómo borrar tu cuenta",
          content:
            "<p>Puedes pedir acceso, corrección o eliminación de tus datos escribiendo a support@davidyero.com desde el correo de tu cuenta. Todavía no hay un botón para borrar la cuenta dentro de la app: la eliminamos manualmente y te confirmamos cuando esté hecha.</p>",
        },
        {
          title: "9. Menores de edad",
          content:
            "<p>Splitio no está dirigido a menores de 14 años y no recogemos datos de forma consciente de ellos.</p>",
        },
        {
          title: "10. Cambios en esta política",
          content:
            "<p>Si cambia algo relevante, actualizamos esta página y su fecha. El uso de la app después de un cambio significa que aceptas la versión vigente.</p>",
        },
      ],
    },
    en: {
      lastUpdated: "September 17, 2026",
      sections: [
        {
          title: "1. Controller",
          content:
            "<p>Splitio is an app for splitting expenses among the people in a group. The controller is David Yepes (@Davidyero). For anything privacy related: support@davidyero.com.</p>",
        },
        {
          title: "2. What we store",
          content:
            "<p>About your account: name, email address, avatar colour and your encrypted password (it is never stored as you typed it).</p><ul><li>About what you record: groups (name, icon, colour and currency), members, monthly incomes, expenses (description, amount, date, category, who paid and how it is split), debt payments and invitations sent</li><li>About your requests: the type and message you send from the Requests section</li><li>Minimal technical data: server logs with the date and type of request</li></ul><p>We use no trackers and no analytics tools.</p>",
        },
        {
          title: "3. What we use it for",
          content:
            "<p>Only to run the service: create your account, calculate group balances, send invitations and password-reset emails, and answer your requests. We do not sell your data and we do not profile you.</p>",
        },
        {
          title: "4. Who sees your information",
          content:
            "<p><strong>The members of a group see your name, your avatar and everything you record in that group</strong>: your monthly income, the expenses you pay and the balances. Only share a group with people you trust.</p><p>Providers that keep the service running: Render (servers and database), AWS Amplify (web hosting), Resend (email delivery) and Google Fonts (web typefaces). Each one handles the data only for that purpose.</p>",
        },
        {
          title: "5. Advertising in the mobile app",
          content:
            "<p>The website has no advertising. The mobile app shows Google AdMob ads on its free plan. We ask for your consent before enabling them where the law requires it; if you decline, you will see non-personalised ads. Google may use your device identifiers under its own privacy policy.</p>",
        },
        {
          title: "6. Data stored on your device",
          content:
            "<p>We store your session, language, light or dark theme and active group in your browser or phone. They are our own data and necessary for the app to work: there are no tracking or advertising cookies on the website.</p>",
        },
        {
          title: "7. How long we keep it",
          content:
            "<p>For as long as your account is active. If you leave a group, the expenses you recorded stay there, because they are part of other people's accounts.</p>",
        },
        {
          title: "8. Your rights and how to delete your account",
          content:
            "<p>You can request access, correction or deletion of your data by writing to support@davidyero.com from your account's email address. There is no in-app delete button yet: we delete the account manually and confirm once it is done.</p>",
        },
        {
          title: "9. Minors",
          content:
            "<p>Splitio is not aimed at children under 14 and we do not knowingly collect their data.</p>",
        },
        {
          title: "10. Changes to this policy",
          content:
            "<p>If something relevant changes, we update this page and its date. Using the app after a change means you accept the current version.</p>",
        },
      ],
    },
  },
};
