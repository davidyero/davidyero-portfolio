import { type App } from "../../Screens/MyAppsScreen/MyAppsScreen.types";
import { appIcon } from "./appIcon";

export const taskmasterApp: App = {
  id: "5",
  name: "TaskMaster",
  slug: "taskmaster",
  description:
    "TaskMaster es tu asistente personal de productividad. Organiza tus tareas, proyectos y objetivos en un solo lugar con una interfaz intuitiva y poderosas funciones de gestión.",
  logo: appIcon("taskmaster"),
  iconBgColor: "#fcd34d",
  appStoreUrl:
    "https://apps.apple.com/us/app/taskmasterpro-plus/id6741769410",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.taskmasterpro",
  termsAndConditions: {
    es: {
      lastUpdated: "23 de octubre de 2026",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content:
            '<p>Al usar TaskMaster ("la Aplicación"), aceptas estos Términos y Condiciones. Si no estás de acuerdo, no uses la Aplicación.</p>',
        },
        {
          title: "2. Cuenta de Usuario",
          content:
            "<p>Para usar TaskMaster, necesitas crear una cuenta. Te comprometes a:</p><ul><li>Proporcionar información precisa y completa</li><li>Mantener la seguridad de tu contraseña</li><li>Notificarnos inmediatamente de cualquier uso no autorizado</li><li>No compartir tu cuenta con terceros</li></ul>",
        },
        {
          title: "3. Uso de la Aplicación",
          content:
            "<p>TaskMaster te permite gestionar tareas y proyectos. Te comprometes a:</p><ul><li>Usar la Aplicación de manera responsable</li><li>No cargar contenido ilegal o inapropiado</li><li>Respetar los derechos de otros usuarios</li><li>No intentar comprometer la seguridad del servicio</li></ul>",
        },
        {
          title: "4. Privacidad y Datos",
          content:
            "<p>Recopilamos y almacenamos tus tareas, proyectos y datos de colaboración. Toda la información se cifra y protege según nuestra Política de Privacidad. No compartimos tus datos con terceros sin tu consentimiento.</p>",
        },
        {
          title: "5. Suscripciones y Pagos",
          content:
            "<p>TaskMaster ofrece planes gratuitos y premium. Los planes premium se renuevan automáticamente a menos que los canceles. Los pagos no son reembolsables excepto según lo exija la ley.</p>",
        },
        {
          title: "6. Propiedad Intelectual",
          content:
            "<p>Todos los derechos sobre la Aplicación son propiedad de TaskMaster. El contenido que creas (tareas, proyectos) sigue siendo tuyo, pero nos otorgas licencia para procesarlo y mostrarlo según la funcionalidad de la Aplicación.</p>",
        },
        {
          title: "7. Limitación de Responsabilidad",
          content:
            "<p>No nos hacemos responsables de:</p><ul><li>Pérdida de datos debido a problemas técnicos</li><li>Interrupciones del servicio</li><li>Decisiones tomadas basadas en el uso de la Aplicación</li></ul>",
        },
        {
          title: "8. Terminación",
          content:
            "<p>Puedes cancelar tu cuenta en cualquier momento. Nos reservamos el derecho de suspender o terminar cuentas que violen estos términos.</p>",
        },
        {
          title: "9. Contacto",
          content:
            "<p>Para soporte o preguntas, contáctanos en: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "October 23, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            '<p>By using TaskMaster ("the Application"), you agree to these Terms and Conditions. If you do not agree, do not use the Application.</p>',
        },
        {
          title: "2. User Account",
          content:
            "<p>To use TaskMaster, you need to create an account. You agree to:</p><ul><li>Provide accurate and complete information</li><li>Maintain the security of your password</li><li>Notify us immediately of any unauthorized use</li><li>Not share your account with third parties</li></ul>",
        },
        {
          title: "3. Use of the Application",
          content:
            "<p>TaskMaster allows you to manage tasks and projects. You agree to:</p><ul><li>Use the Application responsibly</li><li>Not upload illegal or inappropriate content</li><li>Respect the rights of other users</li><li>Not attempt to compromise service security</li></ul>",
        },
        {
          title: "4. Privacy and Data",
          content:
            "<p>We collect and store your tasks, projects, and collaboration data. All information is encrypted and protected according to our Privacy Policy. We do not share your data with third parties without your consent.</p>",
        },
        {
          title: "5. Subscriptions and Payments",
          content:
            "<p>TaskMaster offers free and premium plans. Premium plans auto-renew unless you cancel. Payments are non-refundable except as required by law.</p>",
        },
        {
          title: "6. Intellectual Property",
          content:
            "<p>All rights to the Application are owned by TaskMaster. Content you create (tasks, projects) remains yours, but you grant us a license to process and display it according to the Application's functionality.</p>",
        },
        {
          title: "7. Limitation of Liability",
          content:
            "<p>We are not responsible for:</p><ul><li>Data loss due to technical issues</li><li>Service interruptions</li><li>Decisions made based on use of the Application</li></ul>",
        },
        {
          title: "8. Termination",
          content:
            "<p>You can cancel your account at any time. We reserve the right to suspend or terminate accounts that violate these terms.</p>",
        },
        {
          title: "9. Contact",
          content:
            "<p>For support or questions, contact us at: support@davidyero.com</p>",
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
            "<p>Esta Política describe cómo TaskMaster recopila, usa y protege tu información cuando usas la Aplicación.</p>",
        },
        {
          title: "2. Información que Recopilamos",
          content:
            "<p>Para ofrecer la funcionalidad de TaskMaster recopilamos:</p><ul><li>Datos de cuenta: nombre, correo electrónico y contraseña cifrada</li><li>Contenido del usuario: tareas, proyectos, etiquetas y archivos adjuntos</li><li>Datos de colaboración: invitaciones, comentarios y miembros del equipo</li><li>Datos técnicos: dispositivo, dirección IP y registros de uso</li><li>Información de pago para suscripciones (procesada por nuestros proveedores de pago)</li></ul>",
        },
        {
          title: "3. Cómo Usamos tu Información",
          content:
            "<p>Usamos tus datos para operar el servicio, sincronizar entre dispositivos, enviar recordatorios, ofrecer funciones colaborativas, procesar pagos y mejorar la Aplicación.</p>",
        },
        {
          title: "4. Compartir Información",
          content:
            "<p>No vendemos tu información personal. Podemos compartirla con:</p><ul><li>Otros miembros de los equipos en los que colaboras (limitado al contenido compartido)</li><li>Proveedores de servicios (hosting, pagos, analítica) bajo acuerdos de confidencialidad</li><li>Autoridades cuando la ley lo requiera</li></ul>",
        },
        {
          title: "5. Almacenamiento, Seguridad y Retención",
          content:
            "<p>Tus datos se cifran en tránsito y en reposo. Conservamos tu información mientras tu cuenta esté activa; al cerrar la cuenta, eliminamos tus datos en un plazo razonable, salvo obligaciones legales de retención.</p>",
        },
        {
          title: "6. Tus Derechos",
          content:
            "<p>Puedes acceder, exportar, corregir o eliminar tu información desde la configuración de tu cuenta. También puedes solicitar la portabilidad de tus datos contactándonos.</p>",
        },
        {
          title: "7. Menores de Edad",
          content:
            "<p>TaskMaster no está dirigida a menores de 13 años. No recopilamos a sabiendas datos personales de menores de esa edad.</p>",
        },
        {
          title: "8. Cambios y Contacto",
          content:
            "<p>Podemos actualizar esta Política. Te notificaremos cambios significativos por correo o dentro de la Aplicación. Para preguntas, contáctanos en: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "October 23, 2026",
      sections: [
        {
          title: "1. Introduction",
          content:
            "<p>This Policy describes how TaskMaster collects, uses, and protects your information when you use the Application.</p>",
        },
        {
          title: "2. Information We Collect",
          content:
            "<p>To provide TaskMaster functionality we collect:</p><ul><li>Account data: name, email, and encrypted password</li><li>User content: tasks, projects, labels, and attachments</li><li>Collaboration data: invitations, comments, and team members</li><li>Technical data: device, IP address, and usage logs</li><li>Payment information for subscriptions (processed by our payment providers)</li></ul>",
        },
        {
          title: "3. How We Use Your Information",
          content:
            "<p>We use your data to operate the service, sync across devices, send reminders, offer collaboration features, process payments, and improve the Application.</p>",
        },
        {
          title: "4. Sharing Information",
          content:
            "<p>We do not sell your personal information. We may share it with:</p><ul><li>Other members of teams you collaborate with (limited to shared content)</li><li>Service providers (hosting, payments, analytics) under confidentiality agreements</li><li>Authorities when required by law</li></ul>",
        },
        {
          title: "5. Storage, Security and Retention",
          content:
            "<p>Your data is encrypted in transit and at rest. We retain your information while your account is active; upon account closure, we delete your data within a reasonable period, except where legal retention obligations apply.</p>",
        },
        {
          title: "6. Your Rights",
          content:
            "<p>You can access, export, correct, or delete your information from your account settings. You may also request the portability of your data by contacting us.</p>",
        },
        {
          title: "7. Minors",
          content:
            "<p>TaskMaster is not directed at children under 13. We do not knowingly collect personal data from children under that age.</p>",
        },
        {
          title: "8. Changes and Contact",
          content:
            "<p>We may update this Policy. We will notify you of significant changes via email or in-app. For questions, contact us at: support@davidyero.com</p>",
        },
      ],
    },
  },
};
