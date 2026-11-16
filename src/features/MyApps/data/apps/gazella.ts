import { type App } from "../../Screens/MyAppsScreen/MyAppsScreen.types";
import { appIcon } from "./appIcon";

export const gazellaApp: App = {
  id: "1",
  name: "Gazella",
  slug: "gazella",
  description:
    "Encuentra tu próxima línea de salida: competencias de running, trail, ciclismo, patinaje, triatlón y aguas abiertas.",
  logo: appIcon("gazella"),
  iconBgColor: "#ff6f4a",
  appStoreUrl: "https://apps.apple.com/us/app/gazella-sports/id6479961490",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.gazellaSports",
  termsAndConditions: {
    es: {
      lastUpdated: "23 de octubre de 2026",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content:
            '<p>Al descargar, instalar o usar Gazella ("la Aplicación"), aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con estos términos, no uses la Aplicación.</p>',
        },
        {
          title: "2. Uso de la Aplicación",
          content:
            "<p>Gazella te permite explorar y registrarte en eventos deportivos. Te comprometes a:</p><ul><li>Proporcionar información precisa y actualizada al registrarte</li><li>No usar la Aplicación para fines ilegales o no autorizados</li><li>No intentar acceder a áreas restringidas de la Aplicación</li></ul>",
        },
        {
          title: "3. Privacidad y Datos Personales",
          content:
            "<p>Recopilamos y procesamos tus datos personales de acuerdo con nuestra Política de Privacidad. Al usar la Aplicación, consientes la recopilación y uso de tu información según se describe en dicha política.</p>",
        },
        {
          title: "4. Contenido del Usuario",
          content:
            "<p>Eres responsable del contenido que publiques o compartas a través de la Aplicación. Nos reservamos el derecho de eliminar cualquier contenido que consideremos inapropiado o que viole estos términos.</p>",
        },
        {
          title: "5. Propiedad Intelectual",
          content:
            "<p>Todos los derechos de propiedad intelectual sobre la Aplicación y su contenido son propiedad de Gazella o de sus licenciantes. No puedes copiar, modificar o distribuir ninguna parte de la Aplicación sin nuestro consentimiento previo por escrito.</p>",
        },
        {
          title: "6. Limitación de Responsabilidad",
          content:
            '<p>Gazella se proporciona "tal cual" sin garantías de ningún tipo. No nos hacemos responsables de:</p><ul><li>Interrupciones en el servicio</li><li>Errores o inexactitudes en la información de eventos</li><li>Daños derivados del uso de la Aplicación</li></ul>',
        },
        {
          title: "7. Modificaciones",
          content:
            "<p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en la Aplicación.</p>",
        },
        {
          title: "8. Contacto",
          content:
            "<p>Si tienes preguntas sobre estos Términos y Condiciones, contáctanos en: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "October 23, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            '<p>By downloading, installing, or using Gazella ("the Application"), you agree to be bound by these Terms and Conditions. If you do not agree with these terms, do not use the Application.</p>',
        },
        {
          title: "2. Use of the Application",
          content:
            "<p>Gazella allows you to explore and register for sports events. You agree to:</p><ul><li>Provide accurate and up-to-date information when registering</li><li>Not use the Application for illegal or unauthorized purposes</li><li>Not attempt to access restricted areas of the Application</li></ul>",
        },
        {
          title: "3. Privacy and Personal Data",
          content:
            "<p>We collect and process your personal data in accordance with our Privacy Policy. By using the Application, you consent to the collection and use of your information as described in that policy.</p>",
        },
        {
          title: "4. User Content",
          content:
            "<p>You are responsible for any content you post or share through the Application. We reserve the right to remove any content we deem inappropriate or in violation of these terms.</p>",
        },
        {
          title: "5. Intellectual Property",
          content:
            "<p>All intellectual property rights to the Application and its content are owned by Gazella or its licensors. You may not copy, modify, or distribute any part of the Application without our prior written consent.</p>",
        },
        {
          title: "6. Limitation of Liability",
          content:
            '<p>Gazella is provided "as is" without warranties of any kind. We are not responsible for:</p><ul><li>Service interruptions</li><li>Errors or inaccuracies in event information</li><li>Damages arising from use of the Application</li></ul>',
        },
        {
          title: "7. Modifications",
          content:
            "<p>We reserve the right to modify these Terms and Conditions at any time. Modifications will take effect immediately upon publication in the Application.</p>",
        },
        {
          title: "8. Contact",
          content:
            "<p>If you have questions about these Terms and Conditions, contact us at: support@davidyero.com</p>",
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
            "<p>Esta Política de Privacidad describe cómo Gazella recopila, usa y protege tu información cuando usas la Aplicación. Al usar Gazella, aceptas las prácticas descritas aquí.</p>",
        },
        {
          title: "2. Información que Recopilamos",
          content:
            "<p>Recopilamos información que nos proporcionas y datos generados por tu uso:</p><ul><li>Datos de cuenta: nombre, correo electrónico y fecha de nacimiento</li><li>Datos de uso: eventos consultados, inscripciones y favoritos</li><li>Información del dispositivo: modelo, sistema operativo e identificadores</li><li>Ubicación aproximada (con tu permiso) para mostrarte eventos cercanos</li></ul>",
        },
        {
          title: "3. Cómo Usamos tu Información",
          content:
            "<p>Usamos tus datos para:</p><ul><li>Gestionar tu cuenta y procesar inscripciones</li><li>Mostrarte eventos relevantes y enviarte notificaciones</li><li>Mejorar la Aplicación y prevenir fraude</li><li>Cumplir obligaciones legales</li></ul>",
        },
        {
          title: "4. Compartir Información con Terceros",
          content:
            "<p>No vendemos tu información personal. Podemos compartirla con:</p><ul><li>Organizadores de eventos cuando te inscribes</li><li>Proveedores de servicios necesarios para operar la Aplicación (hosting, analítica)</li><li>Autoridades cuando la ley lo requiera</li></ul>",
        },
        {
          title: "5. Almacenamiento y Seguridad",
          content:
            "<p>Tus datos se almacenan en servidores seguros y se transmiten cifrados. Implementamos medidas técnicas y organizativas razonables para protegerlos, aunque ningún sistema es 100% infalible.</p>",
        },
        {
          title: "6. Tus Derechos",
          content:
            "<p>Puedes acceder, corregir o eliminar tu información desde la configuración de la Aplicación o escribiéndonos. También puedes oponerte al procesamiento o solicitar la portabilidad de tus datos.</p>",
        },
        {
          title: "7. Menores de Edad",
          content:
            "<p>Gazella no está dirigida a menores de 13 años. No recopilamos a sabiendas datos personales de menores de esa edad.</p>",
        },
        {
          title: "8. Cambios y Contacto",
          content:
            "<p>Podemos actualizar esta Política y te notificaremos cambios significativos a través de la Aplicación. Para preguntas sobre privacidad, contáctanos en: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "October 23, 2026",
      sections: [
        {
          title: "1. Introduction",
          content:
            "<p>This Privacy Policy describes how Gazella collects, uses, and protects your information when you use the Application. By using Gazella, you accept the practices described here.</p>",
        },
        {
          title: "2. Information We Collect",
          content:
            "<p>We collect information you provide and data generated by your use:</p><ul><li>Account data: name, email, and date of birth</li><li>Usage data: events viewed, registrations, and favorites</li><li>Device information: model, operating system, and identifiers</li><li>Approximate location (with your permission) to show you nearby events</li></ul>",
        },
        {
          title: "3. How We Use Your Information",
          content:
            "<p>We use your data to:</p><ul><li>Manage your account and process registrations</li><li>Show you relevant events and send notifications</li><li>Improve the Application and prevent fraud</li><li>Comply with legal obligations</li></ul>",
        },
        {
          title: "4. Sharing with Third Parties",
          content:
            "<p>We do not sell your personal information. We may share it with:</p><ul><li>Event organizers when you register</li><li>Service providers needed to operate the Application (hosting, analytics)</li><li>Authorities when required by law</li></ul>",
        },
        {
          title: "5. Storage and Security",
          content:
            "<p>Your data is stored on secure servers and transmitted encrypted. We implement reasonable technical and organizational measures to protect it, although no system is 100% foolproof.</p>",
        },
        {
          title: "6. Your Rights",
          content:
            "<p>You can access, correct, or delete your information from the Application settings or by writing to us. You may also object to processing or request the portability of your data.</p>",
        },
        {
          title: "7. Minors",
          content:
            "<p>Gazella is not directed at children under 13. We do not knowingly collect personal data from children under that age.</p>",
        },
        {
          title: "8. Changes and Contact",
          content:
            "<p>We may update this Policy and will notify you of significant changes through the Application. For privacy questions, contact us at: support@davidyero.com</p>",
        },
      ],
    },
  },
};
