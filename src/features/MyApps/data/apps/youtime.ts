import { type App } from "../../Screens/MyAppsScreen/MyAppsScreen.types";
import { appIcon } from "./appIcon";

export const youtimeApp: App = {
  id: "2",
  name: "Youtime",
  slug: "youtime",
  description:
    'Youtime te permite compartir un video de YouTube comenzando exactamente en el segundo que tú eliges. Olvídate de decir "avanza al 2:15": pega el enlace, selecciona el tiempo y comparte un enlace limpio con inicio preciso.',
  logo: appIcon("youtime"),
  iconBgColor: "#a5b4fc",
  appStoreUrl: "",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.youtime",
  termsAndConditions: {
    es: {
      lastUpdated: "23 de octubre de 2026",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content:
            '<p>Al usar Youtime ("la Aplicación"), aceptas estos Términos y Condiciones. Si no estás de acuerdo, no uses la Aplicación.</p>',
        },
        {
          title: "2. Uso del Servicio",
          content:
            "<p>Youtime te permite compartir enlaces de YouTube con timestamps personalizados. Te comprometes a:</p><ul><li>Usar la Aplicación únicamente para compartir contenido de YouTube de forma legítima</li><li>No intentar modificar o alterar el funcionamiento de la Aplicación</li><li>Respetar los derechos de autor del contenido compartido</li></ul>",
        },
        {
          title: "3. Privacidad",
          content:
            "<p>Youtime no recopila ni almacena información personal de los usuarios. Los enlaces que generas son procesados localmente en tu dispositivo.</p>",
        },
        {
          title: "4. Propiedad Intelectual",
          content:
            "<p>Todos los derechos sobre la Aplicación son propiedad de Youtime. No puedes copiar, modificar o distribuir la Aplicación sin permiso.</p>",
        },
        {
          title: "5. Limitación de Responsabilidad",
          content:
            '<p>La Aplicación se proporciona "tal cual" sin garantías. No nos hacemos responsables de problemas técnicos o errores en los enlaces generados.</p>',
        },
        {
          title: "6. Contacto",
          content:
            "<p>Para preguntas o comentarios, contáctanos en: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "October 23, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            '<p>By using Youtime ("the Application"), you agree to these Terms and Conditions. If you do not agree, do not use the Application.</p>',
        },
        {
          title: "2. Use of Service",
          content:
            "<p>Youtime allows you to share YouTube links with custom timestamps. You agree to:</p><ul><li>Use the Application only to share YouTube content legitimately</li><li>Not attempt to modify or alter the Application's functionality</li><li>Respect the copyright of shared content</li></ul>",
        },
        {
          title: "3. Privacy",
          content:
            "<p>Youtime does not collect or store personal user information. The links you generate are processed locally on your device.</p>",
        },
        {
          title: "4. Intellectual Property",
          content:
            "<p>All rights to the Application are owned by Youtime. You may not copy, modify, or distribute the Application without permission.</p>",
        },
        {
          title: "5. Limitation of Liability",
          content:
            '<p>The Application is provided "as is" without warranties. We are not responsible for technical issues or errors in generated links.</p>',
        },
        {
          title: "6. Contact",
          content:
            "<p>For questions or comments, contact us at: support@davidyero.com</p>",
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
            "<p>Esta Política de Privacidad describe cómo Youtime maneja la información cuando usas la Aplicación. Tu privacidad es importante para nosotros.</p>",
        },
        {
          title: "2. Información que NO Recopilamos",
          content:
            "<p>Youtime no requiere registro ni cuenta. No recopilamos ni almacenamos información personal identificable como nombre, correo electrónico, dirección o ubicación.</p>",
        },
        {
          title: "3. Procesamiento Local",
          content:
            "<p>Los enlaces de YouTube y los timestamps que introduces se procesan localmente en tu dispositivo para generar la URL final. Esta información no se transmite a nuestros servidores.</p>",
        },
        {
          title: "4. Datos del Dispositivo y Permisos",
          content:
            "<p>La Aplicación puede solicitar permisos básicos del sistema (como acceso al portapapeles para copiar enlaces). Estos permisos se usan únicamente para la funcionalidad correspondiente y no implican recopilación de datos personales.</p>",
        },
        {
          title: "5. Servicios de Terceros",
          content:
            "<p>Los enlaces que generas apuntan a YouTube (operado por Google), que tiene su propia política de privacidad. Te recomendamos consultarla para entender cómo trata tus datos cuando reproduces el video.</p>",
        },
        {
          title: "6. Menores",
          content:
            "<p>La Aplicación no está dirigida a menores de 13 años y no recopilamos a sabiendas datos de menores. Si crees que un menor a tu cargo nos ha facilitado datos, escríbenos a support@davidyero.com y los eliminaremos.</p>",
        },
        {
          title: "7. Cambios y Contacto",
          content:
            "<p>Podemos actualizar esta Política. Cualquier cambio se publicará en la Aplicación. Para preguntas, contáctanos en: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "October 23, 2026",
      sections: [
        {
          title: "1. Introduction",
          content:
            "<p>This Privacy Policy describes how Youtime handles information when you use the Application. Your privacy is important to us.</p>",
        },
        {
          title: "2. Information We Do NOT Collect",
          content:
            "<p>Youtime does not require registration or an account. We do not collect or store personally identifiable information such as name, email, address, or location.</p>",
        },
        {
          title: "3. Local Processing",
          content:
            "<p>The YouTube links and timestamps you enter are processed locally on your device to generate the final URL. This information is not transmitted to our servers.</p>",
        },
        {
          title: "4. Device Data and Permissions",
          content:
            "<p>The Application may request basic system permissions (such as clipboard access to copy links). These permissions are used solely for the corresponding feature and do not involve personal data collection.</p>",
        },
        {
          title: "5. Third-Party Services",
          content:
            "<p>The links you generate point to YouTube (operated by Google), which has its own privacy policy. We recommend reviewing it to understand how Google handles your data when you play the video.</p>",
        },
        {
          title: "6. Children",
          content:
            "<p>The App is not directed to children under 13 and we do not knowingly collect data from children. If you believe a child in your care has given us data, email support@davidyero.com and we will delete it.</p>",
        },
        {
          title: "7. Changes and Contact",
          content:
            "<p>We may update this Policy. Any changes will be published in the Application. For questions, contact us at: support@davidyero.com</p>",
        },
      ],
    },
  },
};
