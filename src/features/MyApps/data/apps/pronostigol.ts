import { type App } from "../../Screens/MyAppsScreen/MyAppsScreen.types";
import { appIcon } from "./appIcon";

export const pronostigolApp: App = {
  id: "6",
  name: "Pronostigol",
  slug: "pronostigol",
  description:
    "Pronostigol es la app definitiva para los amantes del fútbol. Crea quinielas, compite con amigos y demuestra tus conocimientos prediciendo resultados de ligas y torneos internacionales.",
  logo: appIcon("pronostigol"),
  iconBgColor: "#86efac",
  appStoreUrl: "https://apps.apple.com/us/app/pronostigol/id6550892183",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.pronostigolapp",
  termsAndConditions: {
    es: {
      lastUpdated: "23 de octubre de 2026",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content:
            '<p>Al usar Pronostigol ("la Aplicación"), aceptas estos Términos y Condiciones en su totalidad.</p>',
        },
        {
          title: "2. Naturaleza del Servicio",
          content:
            "<p>Pronostigol es una plataforma de entretenimiento para crear y participar en quinielas de fútbol. Te comprometes a:</p><ul><li>Usar la Aplicación únicamente con fines recreativos</li><li>No usar la plataforma para apuestas con dinero real</li><li>Respetar las reglas de las ligas en las que participas</li><li>No crear múltiples cuentas para obtener ventajas injustas</li></ul>",
        },
        {
          title: "3. Cuenta de Usuario",
          content:
            "<p>Para participar en quinielas, debes crear una cuenta proporcionando información verídica. Eres responsable de mantener la confidencialidad de tu contraseña.</p>",
        },
        {
          title: "4. Ligas y Competencias",
          content:
            "<p>Puedes crear ligas privadas o unirte a ligas públicas. Los administradores de ligas pueden establecer reglas específicas que todos los participantes deben respetar.</p>",
        },
        {
          title: "5. Sistema de Puntuación",
          content:
            "<p>El sistema de puntuación puede variar según la configuración de cada liga. Pronostigol calcula automáticamente los puntos basándose en los resultados oficiales de los partidos.</p>",
        },
        {
          title: "6. Premios Virtuales",
          content:
            "<p>Los premios ofrecidos en Pronostigol son virtuales y no tienen valor monetario. No se pueden canjear por dinero real ni productos físicos.</p>",
        },
        {
          title: "7. Conducta del Usuario",
          content:
            "<p>Está prohibido:</p><ul><li>Usar lenguaje ofensivo o inapropiado en chats</li><li>Acosar o intimidar a otros usuarios</li><li>Compartir contenido ilegal o inapropiado</li><li>Intentar manipular resultados o el sistema de puntuación</li></ul>",
        },
        {
          title: "8. Privacidad",
          content:
            "<p>Recopilamos datos sobre tus predicciones, interacciones y preferencias. Consulta nuestra Política de Privacidad para más información.</p>",
        },
        {
          title: "9. Limitación de Responsabilidad",
          content:
            "<p>No nos hacemos responsables de:</p><ul><li>Errores en resultados de partidos reportados por fuentes oficiales</li><li>Interrupciones del servicio durante eventos importantes</li><li>Disputas entre usuarios de una misma liga</li><li>Pérdidas o daños derivados del uso de la Aplicación</li></ul>",
        },
        {
          title: "10. Contacto",
          content:
            "<p>Para soporte técnico o reportar problemas, contáctanos en: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "October 23, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            '<p>By using Pronostigol ("the Application"), you fully accept these Terms and Conditions.</p>',
        },
        {
          title: "2. Nature of Service",
          content:
            "<p>Pronostigol is an entertainment platform for creating and participating in soccer pools. You agree to:</p><ul><li>Use the Application solely for recreational purposes</li><li>Not use the platform for real money betting</li><li>Respect the rules of the leagues you participate in</li><li>Not create multiple accounts to gain unfair advantages</li></ul>",
        },
        {
          title: "3. User Account",
          content:
            "<p>To participate in pools, you must create an account providing truthful information. You are responsible for maintaining the confidentiality of your password.</p>",
        },
        {
          title: "4. Leagues and Competitions",
          content:
            "<p>You can create private leagues or join public leagues. League administrators can establish specific rules that all participants must respect.</p>",
        },
        {
          title: "5. Scoring System",
          content:
            "<p>The scoring system may vary depending on each league's configuration. Pronostigol automatically calculates points based on official match results.</p>",
        },
        {
          title: "6. Virtual Prizes",
          content:
            "<p>Prizes offered in Pronostigol are virtual and have no monetary value. They cannot be redeemed for real money or physical products.</p>",
        },
        {
          title: "7. User Conduct",
          content:
            "<p>The following is prohibited:</p><ul><li>Using offensive or inappropriate language in chats</li><li>Harassing or intimidating other users</li><li>Sharing illegal or inappropriate content</li><li>Attempting to manipulate results or the scoring system</li></ul>",
        },
        {
          title: "8. Privacy",
          content:
            "<p>We collect data about your predictions, interactions, and preferences. See our Privacy Policy for more information.</p>",
        },
        {
          title: "9. Limitation of Liability",
          content:
            "<p>We are not responsible for:</p><ul><li>Errors in match results reported by official sources</li><li>Service interruptions during important events</li><li>Disputes between users of the same league</li><li>Losses or damages arising from use of the Application</li></ul>",
        },
        {
          title: "10. Contact",
          content:
            "<p>For technical support or to report issues, contact us at: support@davidyero.com</p>",
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
            "<p>Esta Política describe cómo Pronostigol recopila, usa y protege tu información cuando usas la Aplicación.</p>",
        },
        {
          title: "2. Información que Recopilamos",
          content:
            "<p>Para participar en quinielas recopilamos:</p><ul><li>Datos de cuenta: nombre de usuario, correo electrónico y contraseña cifrada</li><li>Predicciones, resultados y participación en ligas</li><li>Mensajes y comentarios en chats de ligas</li><li>Datos del dispositivo y registros de uso</li><li>Información para notificaciones push (con tu permiso)</li></ul>",
        },
        {
          title: "3. Cómo Usamos tu Información",
          content:
            "<p>Usamos tus datos para:</p><ul><li>Operar las quinielas y calcular puntajes</li><li>Mostrar rankings y permitir interacción entre usuarios</li><li>Enviar notificaciones de partidos próximos y resultados</li><li>Mejorar la Aplicación y prevenir comportamientos abusivos</li></ul>",
        },
        {
          title: "4. Compartir Información",
          content:
            "<p>No vendemos tu información personal. Otros participantes de las ligas en las que estás pueden ver tu nombre de usuario, predicciones y mensajes en chats. También podemos usar proveedores de servicios bajo acuerdos de confidencialidad.</p>",
        },
        {
          title: "5. Almacenamiento y Seguridad",
          content:
            "<p>Tus datos se transmiten cifrados y se almacenan en servidores seguros. Aplicamos medidas razonables para protegerlos, aunque ningún sistema es 100% infalible.</p>",
        },
        {
          title: "6. Tus Derechos",
          content:
            "<p>Puedes editar tu perfil, eliminar mensajes propios o cerrar tu cuenta desde la configuración. Al cerrar la cuenta, tus datos personales se eliminan; tus predicciones pueden conservarse de forma anónima para mantener la integridad histórica de las ligas.</p>",
        },
        {
          title: "7. Menores de Edad",
          content:
            "<p>Pronostigol no está dirigida a menores de 13 años. No recopilamos a sabiendas datos personales de menores de esa edad.</p>",
        },
        {
          title: "8. Cambios y Contacto",
          content:
            "<p>Podemos actualizar esta Política y notificaremos cambios relevantes en la Aplicación. Para preguntas, contáctanos en: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "October 23, 2026",
      sections: [
        {
          title: "1. Introduction",
          content:
            "<p>This Policy describes how Pronostigol collects, uses, and protects your information when you use the Application.</p>",
        },
        {
          title: "2. Information We Collect",
          content:
            "<p>To participate in pools we collect:</p><ul><li>Account data: username, email, and encrypted password</li><li>Predictions, results, and league participation</li><li>Messages and comments in league chats</li><li>Device data and usage logs</li><li>Push notification information (with your permission)</li></ul>",
        },
        {
          title: "3. How We Use Your Information",
          content:
            "<p>We use your data to:</p><ul><li>Operate pools and calculate scores</li><li>Display rankings and enable interaction between users</li><li>Send notifications about upcoming matches and results</li><li>Improve the Application and prevent abusive behavior</li></ul>",
        },
        {
          title: "4. Sharing Information",
          content:
            "<p>We do not sell your personal information. Other members of leagues you participate in can see your username, predictions, and chat messages. We may also use service providers under confidentiality agreements.</p>",
        },
        {
          title: "5. Storage and Security",
          content:
            "<p>Your data is transmitted encrypted and stored on secure servers. We apply reasonable measures to protect it, although no system is 100% foolproof.</p>",
        },
        {
          title: "6. Your Rights",
          content:
            "<p>You can edit your profile, delete your own messages, or close your account from settings. Upon account closure, your personal data is deleted; your predictions may be retained anonymously to preserve the historical integrity of the leagues.</p>",
        },
        {
          title: "7. Minors",
          content:
            "<p>Pronostigol is not directed at children under 13. We do not knowingly collect personal data from children under that age.</p>",
        },
        {
          title: "8. Changes and Contact",
          content:
            "<p>We may update this Policy and will notify you of relevant changes in the Application. For questions, contact us at: support@davidyero.com</p>",
        },
      ],
    },
  },
};
