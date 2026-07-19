import { App } from '../Screens/MyAppsScreen/MyAppsScreen.types';
import GazellaIcon from '../../../assets/icons/apps/GazellaIcon.png';
import YouTimeIcon from '../../../assets/icons/apps/YouTimeIcon.png';
import HolidayIcon from '../../../assets/icons/apps/HolidayIcon.png';
import TaskMasterIcon from '../../../assets/icons/apps/TaskMasterIcon.png';
import PronostigolIcon from '../../../assets/icons/apps/PronostigolIcon.png';
import SimuladorIcon from '../../../assets/icons/apps/SimuladorIcon.png';
import SuperLineUpIcon from '../../../assets/icons/apps/SuperLineUp.png';
import GretaIcon from '../../../assets/icons/apps/GretaIcon.png';
import MyLinkHubIcon from '../../../assets/icons/apps/MyLinkHubIcon.png';
import EquilibraIcon from '../../../assets/icons/apps/EquilibraIcon.png';
import TrainFlowAIIcon from '../../../assets/icons/apps/TrainFlowAIIcon.png';
import FootballCupIcon from '../../../assets/icons/apps/FootballCupIcon.png';
import HabitFlowIcon from '../../../assets/icons/apps/HabitFlowIcon.png';

export const appsData: App[] = [
  {
    id: '1',
    name: 'Gazella',
    slug: 'gazella',
    description:
      'Con Gazella, puedes explorar e inscribirte en eventos deportivos locales, nacionales e internacionales es más fácil que nunca.',
    icon: '🏃',
    logo: GazellaIcon,
    iconBgColor: '#bfdbfe',
    fullDescription:
      'Con Gazella, puedes explorar e inscribirte en eventos deportivos locales, nacionales e internacionales es más fácil que nunca. Descubre carreras, maratones y competencias cerca de ti.',
    features: [
      'Explora eventos deportivos de todo el mundo',
      'Inscríbete fácilmente a carreras y competencias',
      'Recibe notificaciones de eventos cercanos',
      'Consulta el calendario de eventos por categoría',
      'Guarda tus eventos favoritos',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/gazella-sports/id6479961490',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gazellaSports',
    changelog: [
      {
        version: '2.1.0',
        date: '15 de Octubre, 2023',
        type: 'new',
        changes: [
          'Se agregó un nuevo dashboard personalizable.',
          'El rendimiento de carga se ha optimizado en un 30%.',
          'Integración con calendarios externos (Google Calendar, Outlook).',
        ],
      },
      {
        version: '2.0.0',
        date: '1 de Agosto, 2023',
        type: 'fix',
        changes: [
          'Se ha realizado una reescritura completa del motor principal para mejorar la estabilidad y corregir errores críticos reportados por la comunidad.',
          'Corregido un error que provocaba cierres inesperados al exportar datos.',
          'Solucionado un problema de sincronización entre dispositivos.',
          'Mejora de la seguridad en la autenticación de usuarios.',
        ],
      },
      {
        version: '1.0.0',
        date: '15 de Enero, 2023',
        type: 'new',
        changes: [
          'Lanzamiento inicial de Gazella. Incluye las funcionalidades básicas de gestión de eventos deportivos y exploración en tiempo real.',
        ],
      },
    ],
    termsAndConditions: {
      es: {
        lastUpdated: '1 de Diciembre, 2023',
        sections: [
          {
            title: '1. Aceptación de los Términos',
            content: '<p>Al descargar, instalar o usar Gazella ("la Aplicación"), aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con estos términos, no uses la Aplicación.</p>',
          },
          {
            title: '2. Uso de la Aplicación',
            content: '<p>Gazella te permite explorar y registrarte en eventos deportivos. Te comprometes a:</p><ul><li>Proporcionar información precisa y actualizada al registrarte</li><li>No usar la Aplicación para fines ilegales o no autorizados</li><li>No intentar acceder a áreas restringidas de la Aplicación</li></ul>',
          },
          {
            title: '3. Privacidad y Datos Personales',
            content: '<p>Recopilamos y procesamos tus datos personales de acuerdo con nuestra Política de Privacidad. Al usar la Aplicación, consientes la recopilación y uso de tu información según se describe en dicha política.</p>',
          },
          {
            title: '4. Contenido del Usuario',
            content: '<p>Eres responsable del contenido que publiques o compartas a través de la Aplicación. Nos reservamos el derecho de eliminar cualquier contenido que consideremos inapropiado o que viole estos términos.</p>',
          },
          {
            title: '5. Propiedad Intelectual',
            content: '<p>Todos los derechos de propiedad intelectual sobre la Aplicación y su contenido son propiedad de Gazella o de sus licenciantes. No puedes copiar, modificar o distribuir ninguna parte de la Aplicación sin nuestro consentimiento previo por escrito.</p>',
          },
          {
            title: '6. Limitación de Responsabilidad',
            content: '<p>Gazella se proporciona "tal cual" sin garantías de ningún tipo. No nos hacemos responsables de:</p><ul><li>Interrupciones en el servicio</li><li>Errores o inexactitudes en la información de eventos</li><li>Daños derivados del uso de la Aplicación</li></ul>',
          },
          {
            title: '7. Modificaciones',
            content: '<p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en la Aplicación.</p>',
          },
          {
            title: '8. Contacto',
            content: '<p>Si tienes preguntas sobre estos Términos y Condiciones, contáctanos en: soporte@gazella.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'December 1, 2023',
        sections: [
          {
            title: '1. Acceptance of Terms',
            content: '<p>By downloading, installing, or using Gazella ("the Application"), you agree to be bound by these Terms and Conditions. If you do not agree with these terms, do not use the Application.</p>',
          },
          {
            title: '2. Use of the Application',
            content: '<p>Gazella allows you to explore and register for sports events. You agree to:</p><ul><li>Provide accurate and up-to-date information when registering</li><li>Not use the Application for illegal or unauthorized purposes</li><li>Not attempt to access restricted areas of the Application</li></ul>',
          },
          {
            title: '3. Privacy and Personal Data',
            content: '<p>We collect and process your personal data in accordance with our Privacy Policy. By using the Application, you consent to the collection and use of your information as described in that policy.</p>',
          },
          {
            title: '4. User Content',
            content: '<p>You are responsible for any content you post or share through the Application. We reserve the right to remove any content we deem inappropriate or in violation of these terms.</p>',
          },
          {
            title: '5. Intellectual Property',
            content: '<p>All intellectual property rights to the Application and its content are owned by Gazella or its licensors. You may not copy, modify, or distribute any part of the Application without our prior written consent.</p>',
          },
          {
            title: '6. Limitation of Liability',
            content: '<p>Gazella is provided "as is" without warranties of any kind. We are not responsible for:</p><ul><li>Service interruptions</li><li>Errors or inaccuracies in event information</li><li>Damages arising from use of the Application</li></ul>',
          },
          {
            title: '7. Modifications',
            content: '<p>We reserve the right to modify these Terms and Conditions at any time. Modifications will take effect immediately upon publication in the Application.</p>',
          },
          {
            title: '8. Contact',
            content: '<p>If you have questions about these Terms and Conditions, contact us at: support@gazella.com</p>',
          },
        ],
      },
    },
    privacyPolicy: {
      es: {
        lastUpdated: '1 de Diciembre, 2023',
        sections: [
          {
            title: '1. Introducción',
            content: '<p>Esta Política de Privacidad describe cómo Gazella recopila, usa y protege tu información cuando usas la Aplicación. Al usar Gazella, aceptas las prácticas descritas aquí.</p>',
          },
          {
            title: '2. Información que Recopilamos',
            content: '<p>Recopilamos información que nos proporcionas y datos generados por tu uso:</p><ul><li>Datos de cuenta: nombre, correo electrónico y fecha de nacimiento</li><li>Datos de uso: eventos consultados, inscripciones y favoritos</li><li>Información del dispositivo: modelo, sistema operativo e identificadores</li><li>Ubicación aproximada (con tu permiso) para mostrarte eventos cercanos</li></ul>',
          },
          {
            title: '3. Cómo Usamos tu Información',
            content: '<p>Usamos tus datos para:</p><ul><li>Gestionar tu cuenta y procesar inscripciones</li><li>Mostrarte eventos relevantes y enviarte notificaciones</li><li>Mejorar la Aplicación y prevenir fraude</li><li>Cumplir obligaciones legales</li></ul>',
          },
          {
            title: '4. Compartir Información con Terceros',
            content: '<p>No vendemos tu información personal. Podemos compartirla con:</p><ul><li>Organizadores de eventos cuando te inscribes</li><li>Proveedores de servicios necesarios para operar la Aplicación (hosting, analítica)</li><li>Autoridades cuando la ley lo requiera</li></ul>',
          },
          {
            title: '5. Almacenamiento y Seguridad',
            content: '<p>Tus datos se almacenan en servidores seguros y se transmiten cifrados. Implementamos medidas técnicas y organizativas razonables para protegerlos, aunque ningún sistema es 100% infalible.</p>',
          },
          {
            title: '6. Tus Derechos',
            content: '<p>Puedes acceder, corregir o eliminar tu información desde la configuración de la Aplicación o escribiéndonos. También puedes oponerte al procesamiento o solicitar la portabilidad de tus datos.</p>',
          },
          {
            title: '7. Menores de Edad',
            content: '<p>Gazella no está dirigida a menores de 13 años. No recopilamos a sabiendas datos personales de menores de esa edad.</p>',
          },
          {
            title: '8. Cambios y Contacto',
            content: '<p>Podemos actualizar esta Política y te notificaremos cambios significativos a través de la Aplicación. Para preguntas sobre privacidad, contáctanos en: soporte@gazella.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'December 1, 2023',
        sections: [
          {
            title: '1. Introduction',
            content: '<p>This Privacy Policy describes how Gazella collects, uses, and protects your information when you use the Application. By using Gazella, you accept the practices described here.</p>',
          },
          {
            title: '2. Information We Collect',
            content: '<p>We collect information you provide and data generated by your use:</p><ul><li>Account data: name, email, and date of birth</li><li>Usage data: events viewed, registrations, and favorites</li><li>Device information: model, operating system, and identifiers</li><li>Approximate location (with your permission) to show you nearby events</li></ul>',
          },
          {
            title: '3. How We Use Your Information',
            content: '<p>We use your data to:</p><ul><li>Manage your account and process registrations</li><li>Show you relevant events and send notifications</li><li>Improve the Application and prevent fraud</li><li>Comply with legal obligations</li></ul>',
          },
          {
            title: '4. Sharing with Third Parties',
            content: '<p>We do not sell your personal information. We may share it with:</p><ul><li>Event organizers when you register</li><li>Service providers needed to operate the Application (hosting, analytics)</li><li>Authorities when required by law</li></ul>',
          },
          {
            title: '5. Storage and Security',
            content: '<p>Your data is stored on secure servers and transmitted encrypted. We implement reasonable technical and organizational measures to protect it, although no system is 100% foolproof.</p>',
          },
          {
            title: '6. Your Rights',
            content: '<p>You can access, correct, or delete your information from the Application settings or by writing to us. You may also object to processing or request the portability of your data.</p>',
          },
          {
            title: '7. Minors',
            content: '<p>Gazella is not directed at children under 13. We do not knowingly collect personal data from children under that age.</p>',
          },
          {
            title: '8. Changes and Contact',
            content: '<p>We may update this Policy and will notify you of significant changes through the Application. For privacy questions, contact us at: support@gazella.com</p>',
          },
        ],
      },
    },
  },
  {
    id: '2',
    name: 'Youtime',
    slug: 'youtime',
    description:
      'Youtime te permite compartir un video de YouTube comenzando exactamente en el segundo que tú eliges. Olvídate de decir "avanza al 2:15": pega el enlace, selecciona el tiempo y comparte un enlace limpio con inicio preciso.',
    icon: '⏰',
    logo: YouTimeIcon,
    iconBgColor: '#a5b4fc',
    fullDescription:
      'Youtime te permite compartir un video de YouTube comenzando exactamente en el segundo que tú eliges. Olvídate de decir "avanza al 2:15": pega el enlace, selecciona el tiempo y comparte un enlace limpio con inicio preciso.',
    features: [
      'Comparte videos desde un timestamp específico',
      'Interfaz simple e intuitiva',
      'Genera enlaces limpios y cortos',
      'Sin anuncios ni distracciones',
    ],
    appStoreUrl: '',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.youtime',
    changelog: [
      {
        version: '1.2.0',
        date: '20 de Septiembre, 2023',
        type: 'improvement',
        changes: [
          'Mejora en la detección automática de timestamps',
          'Interfaz rediseñada más moderna',
          'Soporte para copiar enlace automáticamente',
        ],
      },
      {
        version: '1.0.0',
        date: '5 de Marzo, 2023',
        type: 'new',
        changes: [
          'Lanzamiento inicial de Youtime con funcionalidad básica de timestamps.',
        ],
      },
    ],
    termsAndConditions: {
      es: {
        lastUpdated: '1 de Octubre, 2023',
        sections: [
          {
            title: '1. Aceptación de los Términos',
            content: '<p>Al usar Youtime (\"la Aplicación\"), aceptas estos Términos y Condiciones. Si no estás de acuerdo, no uses la Aplicación.</p>',
          },
          {
            title: '2. Uso del Servicio',
            content: '<p>Youtime te permite compartir enlaces de YouTube con timestamps personalizados. Te comprometes a:</p><ul><li>Usar la Aplicación únicamente para compartir contenido de YouTube de forma legítima</li><li>No intentar modificar o alterar el funcionamiento de la Aplicación</li><li>Respetar los derechos de autor del contenido compartido</li></ul>',
          },
          {
            title: '3. Privacidad',
            content: '<p>Youtime no recopila ni almacena información personal de los usuarios. Los enlaces que generas son procesados localmente en tu dispositivo.</p>',
          },
          {
            title: '4. Propiedad Intelectual',
            content: '<p>Todos los derechos sobre la Aplicación son propiedad de Youtime. No puedes copiar, modificar o distribuir la Aplicación sin permiso.</p>',
          },
          {
            title: '5. Limitación de Responsabilidad',
            content: '<p>La Aplicación se proporciona "tal cual" sin garantías. No nos hacemos responsables de problemas técnicos o errores en los enlaces generados.</p>',
          },
          {
            title: '6. Contacto',
            content: '<p>Para preguntas o comentarios, contáctanos en: soporte@youtime.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'October 1, 2023',
        sections: [
          {
            title: '1. Acceptance of Terms',
            content: '<p>By using Youtime (\"the Application\"), you agree to these Terms and Conditions. If you do not agree, do not use the Application.</p>',
          },
          {
            title: '2. Use of Service',
            content: '<p>Youtime allows you to share YouTube links with custom timestamps. You agree to:</p><ul><li>Use the Application only to share YouTube content legitimately</li><li>Not attempt to modify or alter the Application\'s functionality</li><li>Respect the copyright of shared content</li></ul>',
          },
          {
            title: '3. Privacy',
            content: '<p>Youtime does not collect or store personal user information. The links you generate are processed locally on your device.</p>',
          },
          {
            title: '4. Intellectual Property',
            content: '<p>All rights to the Application are owned by Youtime. You may not copy, modify, or distribute the Application without permission.</p>',
          },
          {
            title: '5. Limitation of Liability',
            content: '<p>The Application is provided "as is" without warranties. We are not responsible for technical issues or errors in generated links.</p>',
          },
          {
            title: '6. Contact',
            content: '<p>For questions or comments, contact us at: support@youtime.com</p>',
          },
        ],
      },
    },
    privacyPolicy: {
      es: {
        lastUpdated: '1 de Octubre, 2023',
        sections: [
          {
            title: '1. Introducción',
            content: '<p>Esta Política de Privacidad describe cómo Youtime maneja la información cuando usas la Aplicación. Tu privacidad es importante para nosotros.</p>',
          },
          {
            title: '2. Información que NO Recopilamos',
            content: '<p>Youtime no requiere registro ni cuenta. No recopilamos ni almacenamos información personal identificable como nombre, correo electrónico, dirección o ubicación.</p>',
          },
          {
            title: '3. Procesamiento Local',
            content: '<p>Los enlaces de YouTube y los timestamps que introduces se procesan localmente en tu dispositivo para generar la URL final. Esta información no se transmite a nuestros servidores.</p>',
          },
          {
            title: '4. Datos del Dispositivo y Permisos',
            content: '<p>La Aplicación puede solicitar permisos básicos del sistema (como acceso al portapapeles para copiar enlaces). Estos permisos se usan únicamente para la funcionalidad correspondiente y no implican recopilación de datos personales.</p>',
          },
          {
            title: '5. Servicios de Terceros',
            content: '<p>Los enlaces que generas apuntan a YouTube (operado por Google), que tiene su propia política de privacidad. Te recomendamos consultarla para entender cómo trata tus datos cuando reproduces el video.</p>',
          },
          {
            title: '6. Cambios y Contacto',
            content: '<p>Podemos actualizar esta Política. Cualquier cambio se publicará en la Aplicación. Para preguntas, contáctanos en: soporte@youtime.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'October 1, 2023',
        sections: [
          {
            title: '1. Introduction',
            content: '<p>This Privacy Policy describes how Youtime handles information when you use the Application. Your privacy is important to us.</p>',
          },
          {
            title: '2. Information We Do NOT Collect',
            content: '<p>Youtime does not require registration or an account. We do not collect or store personally identifiable information such as name, email, address, or location.</p>',
          },
          {
            title: '3. Local Processing',
            content: '<p>The YouTube links and timestamps you enter are processed locally on your device to generate the final URL. This information is not transmitted to our servers.</p>',
          },
          {
            title: '4. Device Data and Permissions',
            content: '<p>The Application may request basic system permissions (such as clipboard access to copy links). These permissions are used solely for the corresponding feature and do not involve personal data collection.</p>',
          },
          {
            title: '5. Third-Party Services',
            content: '<p>The links you generate point to YouTube (operated by Google), which has its own privacy policy. We recommend reviewing it to understand how Google handles your data when you play the video.</p>',
          },
          {
            title: '6. Changes and Contact',
            content: '<p>We may update this Policy. Any changes will be published in the Application. For questions, contact us at: support@youtime.com</p>',
          },
        ],
      },
    },
  },
  {
    id: '3',
    name: 'Festivos del mundo',
    slug: 'festivos-del-mundo',
    description: 'Explora y celebra con los feriados mundiales: tu guía completa para los feriados globales',
    icon: '🌍',
    logo: HolidayIcon,
    iconBgColor: '#bfdbfe',
    fullDescription:
      'Explora y celebra los feriados de todo el mundo. Una guía completa con información detallada de festividades, días festivos y celebraciones de diferentes países y culturas.',
    features: [
      'Base de datos completa de feriados mundiales',
      'Información detallada de cada festividad',
      'Filtrado por país y tipo de celebración',
      'Notificaciones de próximos feriados',
      'Calendario sincronizable',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/festivos-del-mundo/id6475969475',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.holidayslatamapp',
    changelog: [
      {
        version: '1.5.0',
        date: '10 de Noviembre, 2023',
        type: 'new',
        changes: [
          'Agregados feriados de 50 países nuevos',
          'Nueva función de compartir festividades',
          'Widget para pantalla de inicio',
        ],
      },
    ],
    termsAndConditions: {
      es: {
        lastUpdated: '15 de Noviembre, 2023',
        sections: [
          {
            title: '1. Aceptación de los Términos',
            content: '<p>Al usar Festivos del mundo (\"la Aplicación\"), aceptas estar sujeto a estos Términos y Condiciones.</p>',
          },
          {
            title: '2. Uso de la Información',
            content: '<p>La información sobre feriados se proporciona únicamente con fines informativos. Te comprometes a:</p><ul><li>Verificar la información con fuentes oficiales cuando sea necesario</li><li>No usar la información para fines comerciales sin autorización</li><li>Respetar las tradiciones culturales de los feriados presentados</li></ul>',
          },
          {
            title: '3. Exactitud de la Información',
            content: '<p>Hacemos nuestro mejor esfuerzo para mantener la información actualizada, pero no garantizamos la exactitud absoluta de las fechas y descripciones de los feriados.</p>',
          },
          {
            title: '4. Privacidad',
            content: '<p>Recopilamos datos mínimos para mejorar la experiencia del usuario, como preferencias de país y notificaciones. Consulta nuestra Política de Privacidad para más detalles.</p>',
          },
          {
            title: '5. Propiedad Intelectual',
            content: '<p>El contenido de la Aplicación, incluyendo textos e imágenes, está protegido por derechos de autor. No puedes reproducir el contenido sin permiso.</p>',
          },
          {
            title: '6. Limitación de Responsabilidad',
            content: '<p>No nos hacemos responsables de:</p><ul><li>Errores en fechas o descripciones de feriados</li><li>Cambios de última hora en calendarios oficiales</li><li>Decisiones tomadas basadas en la información de la Aplicación</li></ul>',
          },
          {
            title: '7. Contacto',
            content: '<p>Para reportar errores o sugerencias, contáctanos en: info@festivosdelmundo.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'November 15, 2023',
        sections: [
          {
            title: '1. Acceptance of Terms',
            content: '<p>By using Festivos del mundo (\"the Application\"), you agree to be bound by these Terms and Conditions.</p>',
          },
          {
            title: '2. Use of Information',
            content: '<p>Holiday information is provided for informational purposes only. You agree to:</p><ul><li>Verify information with official sources when necessary</li><li>Not use the information for commercial purposes without authorization</li><li>Respect the cultural traditions of the holidays presented</li></ul>',
          },
          {
            title: '3. Information Accuracy',
            content: '<p>We make our best effort to keep information up to date, but we do not guarantee absolute accuracy of holiday dates and descriptions.</p>',
          },
          {
            title: '4. Privacy',
            content: '<p>We collect minimal data to improve user experience, such as country preferences and notifications. See our Privacy Policy for more details.</p>',
          },
          {
            title: '5. Intellectual Property',
            content: '<p>The Application\'s content, including texts and images, is protected by copyright. You may not reproduce the content without permission.</p>',
          },
          {
            title: '6. Limitation of Liability',
            content: '<p>We are not responsible for:</p><ul><li>Errors in holiday dates or descriptions</li><li>Last-minute changes in official calendars</li><li>Decisions made based on information from the Application</li></ul>',
          },
          {
            title: '7. Contact',
            content: '<p>To report errors or suggestions, contact us at: info@festivosdelmundo.com</p>',
          },
        ],
      },
    },
    privacyPolicy: {
      es: {
        lastUpdated: '15 de Noviembre, 2023',
        sections: [
          {
            title: '1. Introducción',
            content: '<p>Esta Política describe cómo Festivos del mundo maneja la información cuando usas la Aplicación.</p>',
          },
          {
            title: '2. Información que Recopilamos',
            content: '<p>Recopilamos información mínima necesaria para mejorar tu experiencia:</p><ul><li>Preferencias de país y categorías de feriados</li><li>Configuración de notificaciones</li><li>Datos técnicos del dispositivo (versión del sistema operativo, idioma)</li></ul>',
          },
          {
            title: '3. Cómo Usamos tu Información',
            content: '<p>Usamos los datos para personalizar el contenido (mostrarte feriados de los países que sigues), enviarte notificaciones de festividades próximas y mejorar la calidad del servicio.</p>',
          },
          {
            title: '4. Almacenamiento',
            content: '<p>Las preferencias se almacenan principalmente en tu dispositivo. Podemos sincronizar configuraciones con servidores seguros si activas esa opción.</p>',
          },
          {
            title: '5. Compartir Información',
            content: '<p>No vendemos ni compartimos tu información personal con terceros para fines de marketing. Podemos usar proveedores de analítica para entender el uso agregado y anónimo de la Aplicación.</p>',
          },
          {
            title: '6. Tus Derechos',
            content: '<p>Puedes restablecer tus preferencias o desinstalar la Aplicación en cualquier momento, lo que removerá los datos almacenados localmente.</p>',
          },
          {
            title: '7. Cambios y Contacto',
            content: '<p>Esta Política puede actualizarse. Para preguntas sobre privacidad, contáctanos en: info@festivosdelmundo.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'November 15, 2023',
        sections: [
          {
            title: '1. Introduction',
            content: '<p>This Policy describes how Festivos del mundo handles information when you use the Application.</p>',
          },
          {
            title: '2. Information We Collect',
            content: '<p>We collect minimal information needed to improve your experience:</p><ul><li>Country and holiday category preferences</li><li>Notification settings</li><li>Technical device data (operating system version, language)</li></ul>',
          },
          {
            title: '3. How We Use Your Information',
            content: '<p>We use the data to personalize content (showing you holidays for the countries you follow), send notifications about upcoming holidays, and improve service quality.</p>',
          },
          {
            title: '4. Storage',
            content: '<p>Preferences are primarily stored on your device. We may sync settings with secure servers if you enable that option.</p>',
          },
          {
            title: '5. Sharing Information',
            content: '<p>We do not sell or share your personal information with third parties for marketing purposes. We may use analytics providers to understand aggregated and anonymous use of the Application.</p>',
          },
          {
            title: '6. Your Rights',
            content: '<p>You can reset your preferences or uninstall the Application at any time, which will remove locally stored data.</p>',
          },
          {
            title: '7. Changes and Contact',
            content: '<p>This Policy may be updated. For privacy questions, contact us at: info@festivosdelmundo.com</p>',
          },
        ],
      },
    },
  },
  {
    id: '4',
    name: 'Simulador de mundial',
    slug: 'simulador-de-mundial',
    description:
      'Crea el camino de tu selección hacia la gloria en el Mundial de Fútbol con nuestro Simulador de Mundial. Predice resultados, analiza estadísticas y vive la emoción del torneo desde tu dispositivo móvil.',
    icon: '⚽',
    logo: SimuladorIcon,
    iconBgColor: '#bfdbfe',
    fullDescription:
      'Crea el camino de tu selección hacia la gloria en el Mundial de Fútbol con nuestro Simulador de Mundial. Predice resultados, analiza estadísticas y vive la emoción del torneo desde tu dispositivo móvil.',
    features: [
      'Simula partidos completos del mundial',
      'Estadísticas detalladas de equipos y jugadores',
      'Crea tus propias predicciones',
      'Compite con amigos',
      'Resultados en tiempo real',
    ],
    appStoreUrl: '',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mundialsimulator',
    changelog: [
      {
        version: '3.0.0',
        date: '1 de Diciembre, 2023',
        type: 'new',
        changes: [
          'Actualización para el Mundial 2026',
          'Nuevos modos de juego',
          'IA mejorada para simulaciones más realistas',
        ],
      },
      {
        version: '2.5.0',
        date: '15 de Junio, 2023',
        type: 'improvement',
        changes: [
          'Optimización de rendimiento',
          'Corrección de errores en simulaciones',
          'Nuevas estadísticas de jugadores',
        ],
      },
    ],
    termsAndConditions: {
      es: {
        lastUpdated: '1 de Diciembre, 2023',
        sections: [
          {
            title: '1. Aceptación de los Términos',
            content: '<p>Al usar el Simulador de Mundial (\"la Aplicación\"), aceptas estos Términos y Condiciones.</p>',
          },
          {
            title: '2. Naturaleza del Servicio',
            content: '<p>El Simulador de Mundial es una aplicación de entretenimiento que utiliza algoritmos para simular resultados de partidos de fútbol. Te comprometes a:</p><ul><li>Usar la Aplicación únicamente con fines de entretenimiento</li><li>No usar las predicciones para apuestas o actividades comerciales</li><li>Entender que los resultados son simulaciones y no predicciones reales</li></ul>',
          },
          {
            title: '3. Exactitud de las Simulaciones',
            content: '<p>Las simulaciones se basan en estadísticas y algoritmos, pero no garantizamos que reflejen resultados reales de partidos. Los resultados son puramente ficticios.</p>',
          },
          {
            title: '4. Datos de Jugadores y Equipos',
            content: '<p>Las estadísticas de jugadores y equipos se actualizan periódicamente pero pueden no estar 100% al día. No garantizamos la exactitud absoluta de los datos.</p>',
          },
          {
            title: '5. Propiedad Intelectual',
            content: '<p>Todos los algoritmos, diseños y contenido de la Aplicación son propiedad exclusiva del Simulador de Mundial. No puedes copiar o distribuir el contenido sin autorización.</p>',
          },
          {
            title: '6. Limitación de Responsabilidad',
            content: '<p>No nos hacemos responsables de:</p><ul><li>Decisiones tomadas basadas en simulaciones</li><li>Pérdidas derivadas del uso de la Aplicación</li><li>Errores en estadísticas o simulaciones</li></ul>',
          },
          {
            title: '7. Contacto',
            content: '<p>Para soporte técnico, contáctanos en: soporte@simuladormundial.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'December 1, 2023',
        sections: [
          {
            title: '1. Acceptance of Terms',
            content: '<p>By using World Cup Simulator (\"the Application\"), you agree to these Terms and Conditions.</p>',
          },
          {
            title: '2. Nature of Service',
            content: '<p>World Cup Simulator is an entertainment application that uses algorithms to simulate soccer match results. You agree to:</p><ul><li>Use the Application solely for entertainment purposes</li><li>Not use predictions for betting or commercial activities</li><li>Understand that results are simulations and not real predictions</li></ul>',
          },
          {
            title: '3. Simulation Accuracy',
            content: '<p>Simulations are based on statistics and algorithms, but we do not guarantee they will reflect actual match results. Results are purely fictional.</p>',
          },
          {
            title: '4. Player and Team Data',
            content: '<p>Player and team statistics are updated periodically but may not be 100% up to date. We do not guarantee absolute accuracy of the data.</p>',
          },
          {
            title: '5. Intellectual Property',
            content: '<p>All algorithms, designs, and content of the Application are the exclusive property of World Cup Simulator. You may not copy or distribute the content without authorization.</p>',
          },
          {
            title: '6. Limitation of Liability',
            content: '<p>We are not responsible for:</p><ul><li>Decisions made based on simulations</li><li>Losses arising from use of the Application</li><li>Errors in statistics or simulations</li></ul>',
          },
          {
            title: '7. Contact',
            content: '<p>For technical support, contact us at: support@worldcupsimulator.com</p>',
          },
        ],
      },
    },
    privacyPolicy: {
      es: {
        lastUpdated: '1 de Diciembre, 2023',
        sections: [
          {
            title: '1. Introducción',
            content: '<p>Esta Política describe cómo el Simulador de Mundial maneja la información cuando usas la Aplicación.</p>',
          },
          {
            title: '2. Información que Recopilamos',
            content: '<p>El Simulador de Mundial no requiere cuenta y no recopila información personal identificable. Las simulaciones, predicciones y configuraciones se almacenan localmente en tu dispositivo.</p>',
          },
          {
            title: '3. Datos Anónimos y Analítica',
            content: '<p>Podemos recopilar datos anónimos sobre el uso (por ejemplo, cuántas simulaciones se ejecutan o qué equipos se eligen con más frecuencia) para mejorar la Aplicación. Estos datos no permiten identificarte personalmente.</p>',
          },
          {
            title: '4. Permisos del Dispositivo',
            content: '<p>La Aplicación puede solicitar permisos básicos como acceso a almacenamiento para guardar simulaciones. No accedemos a contactos, ubicación ni otra información sensible.</p>',
          },
          {
            title: '5. Compartir Información',
            content: '<p>No vendemos ni compartimos información con terceros para marketing. Si la Aplicación se monetiza con publicidad, los socios publicitarios pueden recopilar datos según sus propias políticas.</p>',
          },
          {
            title: '6. Cambios y Contacto',
            content: '<p>Podemos actualizar esta Política. Para preguntas sobre privacidad, contáctanos en: soporte@simuladormundial.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'December 1, 2023',
        sections: [
          {
            title: '1. Introduction',
            content: '<p>This Policy describes how World Cup Simulator handles information when you use the Application.</p>',
          },
          {
            title: '2. Information We Collect',
            content: '<p>World Cup Simulator does not require an account and does not collect personally identifiable information. Simulations, predictions, and settings are stored locally on your device.</p>',
          },
          {
            title: '3. Anonymous Data and Analytics',
            content: '<p>We may collect anonymous usage data (for example, how many simulations are run or which teams are most often chosen) to improve the Application. This data does not allow you to be personally identified.</p>',
          },
          {
            title: '4. Device Permissions',
            content: '<p>The Application may request basic permissions such as storage access to save simulations. We do not access contacts, location, or other sensitive information.</p>',
          },
          {
            title: '5. Sharing Information',
            content: '<p>We do not sell or share information with third parties for marketing. If the Application is monetized with advertising, ad partners may collect data according to their own policies.</p>',
          },
          {
            title: '6. Changes and Contact',
            content: '<p>We may update this Policy. For privacy questions, contact us at: support@worldcupsimulator.com</p>',
          },
        ],
      },
    },
  },
  {
    id: '5',
    name: 'TaskMaster',
    slug: 'taskmaster',
    description:
      'TaskMaster es tu asistente personal de productividad. Organiza tus tareas, proyectos y objetivos en un solo lugar con una interfaz intuitiva y poderosas funciones de gestión.',
    icon: '✅',
    logo: TaskMasterIcon,
    iconBgColor: '#fcd34d',
    fullDescription:
      'TaskMaster es la solución definitiva para gestionar tu productividad. Con funciones avanzadas de organización, recordatorios inteligentes y análisis de rendimiento, podrás alcanzar tus objetivos de manera eficiente.',
    features: [
      'Gestión de tareas con prioridades y etiquetas',
      'Proyectos colaborativos en equipo',
      'Recordatorios inteligentes personalizables',
      'Estadísticas y análisis de productividad',
      'Sincronización en la nube entre dispositivos',
      'Modo enfoque para eliminar distracciones',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/taskmasterpro-plus/id6741769410',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.taskmasterpro',
    changelog: [
      {
        version: '3.5.0',
        date: '5 de Diciembre, 2023',
        type: 'new',
        changes: [
          'Nuevo modo de vista Kanban para proyectos',
          'Integración con herramientas de comunicación (Slack, Teams)',
          'Plantillas predefinidas para diferentes tipos de proyectos',
          'Widget mejorado para pantalla de inicio',
        ],
      },
      {
        version: '3.0.0',
        date: '20 de Agosto, 2023',
        type: 'new',
        changes: [
          'Rediseño completo de la interfaz',
          'Colaboración en tiempo real',
          'Modo oscuro mejorado',
        ],
      },
      {
        version: '2.8.0',
        date: '10 de Mayo, 2023',
        type: 'improvement',
        changes: [
          'Optimización del rendimiento en dispositivos de gama baja',
          'Corrección de errores en sincronización',
          'Mejoras en la búsqueda de tareas',
        ],
      },
    ],
    termsAndConditions: {
      es: {
        lastUpdated: '5 de Diciembre, 2023',
        sections: [
          {
            title: '1. Aceptación de los Términos',
            content: '<p>Al usar TaskMaster (\"la Aplicación\"), aceptas estos Términos y Condiciones. Si no estás de acuerdo, no uses la Aplicación.</p>',
          },
          {
            title: '2. Cuenta de Usuario',
            content: '<p>Para usar TaskMaster, necesitas crear una cuenta. Te comprometes a:</p><ul><li>Proporcionar información precisa y completa</li><li>Mantener la seguridad de tu contraseña</li><li>Notificarnos inmediatamente de cualquier uso no autorizado</li><li>No compartir tu cuenta con terceros</li></ul>',
          },
          {
            title: '3. Uso de la Aplicación',
            content: '<p>TaskMaster te permite gestionar tareas y proyectos. Te comprometes a:</p><ul><li>Usar la Aplicación de manera responsable</li><li>No cargar contenido ilegal o inapropiado</li><li>Respetar los derechos de otros usuarios</li><li>No intentar comprometer la seguridad del servicio</li></ul>',
          },
          {
            title: '4. Privacidad y Datos',
            content: '<p>Recopilamos y almacenamos tus tareas, proyectos y datos de colaboración. Toda la información se cifra y protege según nuestra Política de Privacidad. No compartimos tus datos con terceros sin tu consentimiento.</p>',
          },
          {
            title: '5. Suscripciones y Pagos',
            content: '<p>TaskMaster ofrece planes gratuitos y premium. Los planes premium se renuevan automáticamente a menos que los canceles. Los pagos no son reembolsables excepto según lo exija la ley.</p>',
          },
          {
            title: '6. Propiedad Intelectual',
            content: '<p>Todos los derechos sobre la Aplicación son propiedad de TaskMaster. El contenido que creas (tareas, proyectos) sigue siendo tuyo, pero nos otorgas licencia para procesarlo y mostrarlo según la funcionalidad de la Aplicación.</p>',
          },
          {
            title: '7. Limitación de Responsabilidad',
            content: '<p>No nos hacemos responsables de:</p><ul><li>Pérdida de datos debido a problemas técnicos</li><li>Interrupciones del servicio</li><li>Decisiones tomadas basadas en el uso de la Aplicación</li></ul>',
          },
          {
            title: '8. Terminación',
            content: '<p>Puedes cancelar tu cuenta en cualquier momento. Nos reservamos el derecho de suspender o terminar cuentas que violen estos términos.</p>',
          },
          {
            title: '9. Contacto',
            content: '<p>Para soporte o preguntas, contáctanos en: support@taskmaster.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'December 5, 2023',
        sections: [
          {
            title: '1. Acceptance of Terms',
            content: '<p>By using TaskMaster (\"the Application\"), you agree to these Terms and Conditions. If you do not agree, do not use the Application.</p>',
          },
          {
            title: '2. User Account',
            content: '<p>To use TaskMaster, you need to create an account. You agree to:</p><ul><li>Provide accurate and complete information</li><li>Maintain the security of your password</li><li>Notify us immediately of any unauthorized use</li><li>Not share your account with third parties</li></ul>',
          },
          {
            title: '3. Use of the Application',
            content: '<p>TaskMaster allows you to manage tasks and projects. You agree to:</p><ul><li>Use the Application responsibly</li><li>Not upload illegal or inappropriate content</li><li>Respect the rights of other users</li><li>Not attempt to compromise service security</li></ul>',
          },
          {
            title: '4. Privacy and Data',
            content: '<p>We collect and store your tasks, projects, and collaboration data. All information is encrypted and protected according to our Privacy Policy. We do not share your data with third parties without your consent.</p>',
          },
          {
            title: '5. Subscriptions and Payments',
            content: '<p>TaskMaster offers free and premium plans. Premium plans auto-renew unless you cancel. Payments are non-refundable except as required by law.</p>',
          },
          {
            title: '6. Intellectual Property',
            content: '<p>All rights to the Application are owned by TaskMaster. Content you create (tasks, projects) remains yours, but you grant us a license to process and display it according to the Application\'s functionality.</p>',
          },
          {
            title: '7. Limitation of Liability',
            content: '<p>We are not responsible for:</p><ul><li>Data loss due to technical issues</li><li>Service interruptions</li><li>Decisions made based on use of the Application</li></ul>',
          },
          {
            title: '8. Termination',
            content: '<p>You can cancel your account at any time. We reserve the right to suspend or terminate accounts that violate these terms.</p>',
          },
          {
            title: '9. Contact',
            content: '<p>For support or questions, contact us at: support@taskmaster.com</p>',
          },
        ],
      },
    },
    privacyPolicy: {
      es: {
        lastUpdated: '5 de Diciembre, 2023',
        sections: [
          {
            title: '1. Introducción',
            content: '<p>Esta Política describe cómo TaskMaster recopila, usa y protege tu información cuando usas la Aplicación.</p>',
          },
          {
            title: '2. Información que Recopilamos',
            content: '<p>Para ofrecer la funcionalidad de TaskMaster recopilamos:</p><ul><li>Datos de cuenta: nombre, correo electrónico y contraseña cifrada</li><li>Contenido del usuario: tareas, proyectos, etiquetas y archivos adjuntos</li><li>Datos de colaboración: invitaciones, comentarios y miembros del equipo</li><li>Datos técnicos: dispositivo, dirección IP y registros de uso</li><li>Información de pago para suscripciones (procesada por nuestros proveedores de pago)</li></ul>',
          },
          {
            title: '3. Cómo Usamos tu Información',
            content: '<p>Usamos tus datos para operar el servicio, sincronizar entre dispositivos, enviar recordatorios, ofrecer funciones colaborativas, procesar pagos y mejorar la Aplicación.</p>',
          },
          {
            title: '4. Compartir Información',
            content: '<p>No vendemos tu información personal. Podemos compartirla con:</p><ul><li>Otros miembros de los equipos en los que colaboras (limitado al contenido compartido)</li><li>Proveedores de servicios (hosting, pagos, analítica) bajo acuerdos de confidencialidad</li><li>Autoridades cuando la ley lo requiera</li></ul>',
          },
          {
            title: '5. Almacenamiento, Seguridad y Retención',
            content: '<p>Tus datos se cifran en tránsito y en reposo. Conservamos tu información mientras tu cuenta esté activa; al cerrar la cuenta, eliminamos tus datos en un plazo razonable, salvo obligaciones legales de retención.</p>',
          },
          {
            title: '6. Tus Derechos',
            content: '<p>Puedes acceder, exportar, corregir o eliminar tu información desde la configuración de tu cuenta. También puedes solicitar la portabilidad de tus datos contactándonos.</p>',
          },
          {
            title: '7. Menores de Edad',
            content: '<p>TaskMaster no está dirigida a menores de 13 años. No recopilamos a sabiendas datos personales de menores de esa edad.</p>',
          },
          {
            title: '8. Cambios y Contacto',
            content: '<p>Podemos actualizar esta Política. Te notificaremos cambios significativos por correo o dentro de la Aplicación. Para preguntas, contáctanos en: support@taskmaster.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'December 5, 2023',
        sections: [
          {
            title: '1. Introduction',
            content: '<p>This Policy describes how TaskMaster collects, uses, and protects your information when you use the Application.</p>',
          },
          {
            title: '2. Information We Collect',
            content: '<p>To provide TaskMaster functionality we collect:</p><ul><li>Account data: name, email, and encrypted password</li><li>User content: tasks, projects, labels, and attachments</li><li>Collaboration data: invitations, comments, and team members</li><li>Technical data: device, IP address, and usage logs</li><li>Payment information for subscriptions (processed by our payment providers)</li></ul>',
          },
          {
            title: '3. How We Use Your Information',
            content: '<p>We use your data to operate the service, sync across devices, send reminders, offer collaboration features, process payments, and improve the Application.</p>',
          },
          {
            title: '4. Sharing Information',
            content: '<p>We do not sell your personal information. We may share it with:</p><ul><li>Other members of teams you collaborate with (limited to shared content)</li><li>Service providers (hosting, payments, analytics) under confidentiality agreements</li><li>Authorities when required by law</li></ul>',
          },
          {
            title: '5. Storage, Security and Retention',
            content: '<p>Your data is encrypted in transit and at rest. We retain your information while your account is active; upon account closure, we delete your data within a reasonable period, except where legal retention obligations apply.</p>',
          },
          {
            title: '6. Your Rights',
            content: '<p>You can access, export, correct, or delete your information from your account settings. You may also request the portability of your data by contacting us.</p>',
          },
          {
            title: '7. Minors',
            content: '<p>TaskMaster is not directed at children under 13. We do not knowingly collect personal data from children under that age.</p>',
          },
          {
            title: '8. Changes and Contact',
            content: '<p>We may update this Policy. We will notify you of significant changes via email or in-app. For questions, contact us at: support@taskmaster.com</p>',
          },
        ],
      },
    },
  },
  {
    id: '6',
    name: 'Pronostigol',
    slug: 'pronostigol',
    description:
      'Pronostigol es la app definitiva para los amantes del fútbol. Crea quinielas, compite con amigos y demuestra tus conocimientos prediciendo resultados de ligas y torneos internacionales.',
    icon: '🎯',
    logo: PronostigolIcon,
    iconBgColor: '#86efac',
    fullDescription:
      'Pronostigol te permite crear y participar en quinielas de fútbol de manera fácil y divertida. Compite con amigos, colegas o únete a ligas públicas. Sistema de puntos, rankings en tiempo real y premios virtuales te esperan.',
    features: [
      'Crea quinielas personalizadas para cualquier torneo',
      'Participa en ligas públicas y privadas',
      'Sistema de puntuación personalizable',
      'Rankings y estadísticas detalladas',
      'Notificaciones de partidos próximos',
      'Chat integrado con otros participantes',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/pronostigol/id6550892183',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pronostigolapp',
    changelog: [
      {
        version: '2.8.0',
        date: '28 de Noviembre, 2023',
        type: 'new',
        changes: [
          'Soporte para Copa América 2024',
          'Nueva función de predicciones especiales (goleador, tarjetas, etc.)',
          'Modo competitivo con premios virtuales',
          'Integración con estadísticas en vivo',
        ],
      },
      {
        version: '2.5.0',
        date: '15 de Septiembre, 2023',
        type: 'improvement',
        changes: [
          'Mejoras en el sistema de notificaciones',
          'Optimización de la velocidad de carga',
          'Corrección de errores en el cálculo de puntos',
        ],
      },
      {
        version: '2.0.0',
        date: '1 de Junio, 2023',
        type: 'new',
        changes: [
          'Rediseño completo de la interfaz',
          'Sistema de chat entre participantes',
          'Nuevos modos de juego',
        ],
      },
    ],
    termsAndConditions: {
      es: {
        lastUpdated: '28 de Noviembre, 2023',
        sections: [
          {
            title: '1. Aceptación de los Términos',
            content: '<p>Al usar Pronostigol (\"la Aplicación\"), aceptas estos Términos y Condiciones en su totalidad.</p>',
          },
          {
            title: '2. Naturaleza del Servicio',
            content: '<p>Pronostigol es una plataforma de entretenimiento para crear y participar en quinielas de fútbol. Te comprometes a:</p><ul><li>Usar la Aplicación únicamente con fines recreativos</li><li>No usar la plataforma para apuestas con dinero real</li><li>Respetar las reglas de las ligas en las que participas</li><li>No crear múltiples cuentas para obtener ventajas injustas</li></ul>',
          },
          {
            title: '3. Cuenta de Usuario',
            content: '<p>Para participar en quinielas, debes crear una cuenta proporcionando información verídica. Eres responsable de mantener la confidencialidad de tu contraseña.</p>',
          },
          {
            title: '4. Ligas y Competencias',
            content: '<p>Puedes crear ligas privadas o unirte a ligas públicas. Los administradores de ligas pueden establecer reglas específicas que todos los participantes deben respetar.</p>',
          },
          {
            title: '5. Sistema de Puntuación',
            content: '<p>El sistema de puntuación puede variar según la configuración de cada liga. Pronostigol calcula automáticamente los puntos basándose en los resultados oficiales de los partidos.</p>',
          },
          {
            title: '6. Premios Virtuales',
            content: '<p>Los premios ofrecidos en Pronostigol son virtuales y no tienen valor monetario. No se pueden canjear por dinero real ni productos físicos.</p>',
          },
          {
            title: '7. Conducta del Usuario',
            content: '<p>Está prohibido:</p><ul><li>Usar lenguaje ofensivo o inapropiado en chats</li><li>Acosar o intimidar a otros usuarios</li><li>Compartir contenido ilegal o inapropiado</li><li>Intentar manipular resultados o el sistema de puntuación</li></ul>',
          },
          {
            title: '8. Privacidad',
            content: '<p>Recopilamos datos sobre tus predicciones, interacciones y preferencias. Consulta nuestra Política de Privacidad para más información.</p>',
          },
          {
            title: '9. Limitación de Responsabilidad',
            content: '<p>No nos hacemos responsables de:</p><ul><li>Errores en resultados de partidos reportados por fuentes oficiales</li><li>Interrupciones del servicio durante eventos importantes</li><li>Disputas entre usuarios de una misma liga</li><li>Pérdidas o daños derivados del uso de la Aplicación</li></ul>',
          },
          {
            title: '10. Contacto',
            content: '<p>Para soporte técnico o reportar problemas, contáctanos en: soporte@pronostigol.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'November 28, 2023',
        sections: [
          {
            title: '1. Acceptance of Terms',
            content: '<p>By using Pronostigol (\"the Application\"), you fully accept these Terms and Conditions.</p>',
          },
          {
            title: '2. Nature of Service',
            content: '<p>Pronostigol is an entertainment platform for creating and participating in soccer pools. You agree to:</p><ul><li>Use the Application solely for recreational purposes</li><li>Not use the platform for real money betting</li><li>Respect the rules of the leagues you participate in</li><li>Not create multiple accounts to gain unfair advantages</li></ul>',
          },
          {
            title: '3. User Account',
            content: '<p>To participate in pools, you must create an account providing truthful information. You are responsible for maintaining the confidentiality of your password.</p>',
          },
          {
            title: '4. Leagues and Competitions',
            content: '<p>You can create private leagues or join public leagues. League administrators can establish specific rules that all participants must respect.</p>',
          },
          {
            title: '5. Scoring System',
            content: '<p>The scoring system may vary depending on each league\'s configuration. Pronostigol automatically calculates points based on official match results.</p>',
          },
          {
            title: '6. Virtual Prizes',
            content: '<p>Prizes offered in Pronostigol are virtual and have no monetary value. They cannot be redeemed for real money or physical products.</p>',
          },
          {
            title: '7. User Conduct',
            content: '<p>The following is prohibited:</p><ul><li>Using offensive or inappropriate language in chats</li><li>Harassing or intimidating other users</li><li>Sharing illegal or inappropriate content</li><li>Attempting to manipulate results or the scoring system</li></ul>',
          },
          {
            title: '8. Privacy',
            content: '<p>We collect data about your predictions, interactions, and preferences. See our Privacy Policy for more information.</p>',
          },
          {
            title: '9. Limitation of Liability',
            content: '<p>We are not responsible for:</p><ul><li>Errors in match results reported by official sources</li><li>Service interruptions during important events</li><li>Disputes between users of the same league</li><li>Losses or damages arising from use of the Application</li></ul>',
          },
          {
            title: '10. Contact',
            content: '<p>For technical support or to report issues, contact us at: support@pronostigol.com</p>',
          },
        ],
      },
    },
    privacyPolicy: {
      es: {
        lastUpdated: '28 de Noviembre, 2023',
        sections: [
          {
            title: '1. Introducción',
            content: '<p>Esta Política describe cómo Pronostigol recopila, usa y protege tu información cuando usas la Aplicación.</p>',
          },
          {
            title: '2. Información que Recopilamos',
            content: '<p>Para participar en quinielas recopilamos:</p><ul><li>Datos de cuenta: nombre de usuario, correo electrónico y contraseña cifrada</li><li>Predicciones, resultados y participación en ligas</li><li>Mensajes y comentarios en chats de ligas</li><li>Datos del dispositivo y registros de uso</li><li>Información para notificaciones push (con tu permiso)</li></ul>',
          },
          {
            title: '3. Cómo Usamos tu Información',
            content: '<p>Usamos tus datos para:</p><ul><li>Operar las quinielas y calcular puntajes</li><li>Mostrar rankings y permitir interacción entre usuarios</li><li>Enviar notificaciones de partidos próximos y resultados</li><li>Mejorar la Aplicación y prevenir comportamientos abusivos</li></ul>',
          },
          {
            title: '4. Compartir Información',
            content: '<p>No vendemos tu información personal. Otros participantes de las ligas en las que estás pueden ver tu nombre de usuario, predicciones y mensajes en chats. También podemos usar proveedores de servicios bajo acuerdos de confidencialidad.</p>',
          },
          {
            title: '5. Almacenamiento y Seguridad',
            content: '<p>Tus datos se transmiten cifrados y se almacenan en servidores seguros. Aplicamos medidas razonables para protegerlos, aunque ningún sistema es 100% infalible.</p>',
          },
          {
            title: '6. Tus Derechos',
            content: '<p>Puedes editar tu perfil, eliminar mensajes propios o cerrar tu cuenta desde la configuración. Al cerrar la cuenta, tus datos personales se eliminan; tus predicciones pueden conservarse de forma anónima para mantener la integridad histórica de las ligas.</p>',
          },
          {
            title: '7. Menores de Edad',
            content: '<p>Pronostigol no está dirigida a menores de 13 años. No recopilamos a sabiendas datos personales de menores de esa edad.</p>',
          },
          {
            title: '8. Cambios y Contacto',
            content: '<p>Podemos actualizar esta Política y notificaremos cambios relevantes en la Aplicación. Para preguntas, contáctanos en: soporte@pronostigol.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'November 28, 2023',
        sections: [
          {
            title: '1. Introduction',
            content: '<p>This Policy describes how Pronostigol collects, uses, and protects your information when you use the Application.</p>',
          },
          {
            title: '2. Information We Collect',
            content: '<p>To participate in pools we collect:</p><ul><li>Account data: username, email, and encrypted password</li><li>Predictions, results, and league participation</li><li>Messages and comments in league chats</li><li>Device data and usage logs</li><li>Push notification information (with your permission)</li></ul>',
          },
          {
            title: '3. How We Use Your Information',
            content: '<p>We use your data to:</p><ul><li>Operate pools and calculate scores</li><li>Display rankings and enable interaction between users</li><li>Send notifications about upcoming matches and results</li><li>Improve the Application and prevent abusive behavior</li></ul>',
          },
          {
            title: '4. Sharing Information',
            content: '<p>We do not sell your personal information. Other members of leagues you participate in can see your username, predictions, and chat messages. We may also use service providers under confidentiality agreements.</p>',
          },
          {
            title: '5. Storage and Security',
            content: '<p>Your data is transmitted encrypted and stored on secure servers. We apply reasonable measures to protect it, although no system is 100% foolproof.</p>',
          },
          {
            title: '6. Your Rights',
            content: '<p>You can edit your profile, delete your own messages, or close your account from settings. Upon account closure, your personal data is deleted; your predictions may be retained anonymously to preserve the historical integrity of the leagues.</p>',
          },
          {
            title: '7. Minors',
            content: '<p>Pronostigol is not directed at children under 13. We do not knowingly collect personal data from children under that age.</p>',
          },
          {
            title: '8. Changes and Contact',
            content: '<p>We may update this Policy and will notify you of relevant changes in the Application. For questions, contact us at: support@pronostigol.com</p>',
          },
        ],
      },
    },
  },
  {
    id: '7',
    name: 'SuperLineUp',
    slug: 'superlineup',
    description:
      'Crea alineaciones de fútbol increíbles en segundos. Equipo (11) o partido completo (22), formaciones clásicas, drag & drop y personalización total.',
    icon: '⚽',
    logo: SuperLineUpIcon,
    iconBgColor: '#86efac',
    fullDescription:
      '¡Bienvenido a SuperLineUp! Crea alineaciones de fútbol increíbles en segundos: equipo (11) o partido completo (22), más de 7 formaciones clásicas, drag & drop fluido, camisetas, césped y estadio personalizables, guarda y comparte como imagen, 100% sin conexión. Arma tu alineación, muestra tu táctica y comparte tu pasión.',
    features: [
      'Diseña alineaciones de un equipo (11) o de un partido completo (22)',
      'Elige entre múltiples formaciones tácticas (4-4-2, 4-3-3, 3-5-2 y más)',
      'Personaliza camisetas, césped, estadio y tribunas',
      'Mueve jugadores con drag & drop fluido',
      'Exporta la alineación como imagen lista para redes sociales',
      'Funciona 100% sin conexión',
    ],
    appStoreUrl: '',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.davidyero.superlineup',
    changelog: [
      {
        version: '1.0.0',
        date: '6 de Mayo, 2026',
        type: 'new',
        changes: [
          'Lanzamiento inicial de SuperLineUp.',
          'Diseño de alineaciones para equipo (11) y partido completo (22).',
          'Más de 7 formaciones clásicas disponibles (4-4-2, 4-3-3, 3-5-2 y más).',
          'Personalización de camisetas, césped, estadio y tribunas.',
          'Drag & drop fluido para reposicionar jugadores.',
          'Exportación de la alineación como imagen para compartir.',
          'Funcionamiento 100% sin conexión.',
        ],
      },
    ],
    termsAndConditions: {
      es: {
        lastUpdated: '6 de Mayo, 2026',
        sections: [
          {
            title: '1. Aceptación de los Términos',
            content: '<p>Al descargar, instalar o usar SuperLineUp ("la Aplicación"), aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con estos términos, no uses la Aplicación.</p>',
          },
          {
            title: '2. Naturaleza del Servicio',
            content: '<p>SuperLineUp es una aplicación de entretenimiento que te permite diseñar alineaciones de fútbol con fines recreativos y creativos. Te comprometes a:</p><ul><li>Usar la Aplicación únicamente con fines personales, educativos o de entretenimiento</li><li>No usar la Aplicación para actividades ilegales o no autorizadas</li><li>No intentar modificar, descompilar o realizar ingeniería inversa sobre la Aplicación</li></ul>',
          },
          {
            title: '3. Funcionamiento Sin Conexión y Privacidad',
            content: '<p>SuperLineUp funciona 100% sin conexión y todos los datos (alineaciones, configuraciones, personalizaciones) se almacenan localmente en tu dispositivo. No recopilamos, transmitimos ni almacenamos información personal en servidores externos. Eres responsable de respaldar tus alineaciones si así lo deseas.</p>',
          },
          {
            title: '4. Contenido Generado por el Usuario',
            content: '<p>Las alineaciones, imágenes exportadas y demás contenido que generes con la Aplicación son de tu propiedad. Eres responsable del uso que hagas de dicho contenido al compartirlo en redes sociales u otros medios, incluyendo el cumplimiento de las normas de las plataformas en las que lo publiques.</p>',
          },
          {
            title: '5. Marcas y Equipos',
            content: '<p>SuperLineUp no está afiliado, asociado, autorizado, respaldado ni oficialmente conectado con ningún club, liga, federación, jugador o entidad deportiva real. Cualquier referencia a equipos, formaciones o estilos visuales tiene fines exclusivamente ilustrativos y de personalización por parte del usuario. Las marcas y logotipos pertenecen a sus respectivos propietarios.</p>',
          },
          {
            title: '6. Propiedad Intelectual',
            content: '<p>Todos los derechos de propiedad intelectual sobre la Aplicación, incluyendo su código, diseño, gráficos e interfaz, son propiedad de SuperLineUp o de sus licenciantes. No puedes copiar, modificar, distribuir ni explotar comercialmente la Aplicación o sus componentes sin nuestro consentimiento previo por escrito.</p>',
          },
          {
            title: '7. Limitación de Responsabilidad',
            content: '<p>SuperLineUp se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún tipo. No nos hacemos responsables de:</p><ul><li>Pérdida de datos almacenados localmente en el dispositivo</li><li>Errores, interrupciones o incompatibilidades con determinados dispositivos</li><li>Daños derivados del uso o imposibilidad de uso de la Aplicación</li><li>Uso indebido del contenido exportado por parte del usuario o de terceros</li></ul>',
          },
          {
            title: '8. Modificaciones',
            content: '<p>Nos reservamos el derecho de modificar estos Términos y Condiciones, así como las características de la Aplicación, en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en la Aplicación o en la tienda correspondiente.</p>',
          },
          {
            title: '9. Contacto',
            content: '<p>Si tienes preguntas sobre estos Términos y Condiciones, contáctanos en: soporte@superlineup.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'May 6, 2026',
        sections: [
          {
            title: '1. Acceptance of Terms',
            content: '<p>By downloading, installing, or using SuperLineUp ("the Application"), you agree to be bound by these Terms and Conditions. If you do not agree with these terms, do not use the Application.</p>',
          },
          {
            title: '2. Nature of Service',
            content: '<p>SuperLineUp is an entertainment application that lets you design soccer line-ups for recreational and creative purposes. You agree to:</p><ul><li>Use the Application only for personal, educational, or entertainment purposes</li><li>Not use the Application for illegal or unauthorized activities</li><li>Not attempt to modify, decompile, or reverse engineer the Application</li></ul>',
          },
          {
            title: '3. Offline Operation and Privacy',
            content: '<p>SuperLineUp runs 100% offline and all data (line-ups, settings, customizations) is stored locally on your device. We do not collect, transmit, or store personal information on external servers. You are responsible for backing up your line-ups if you wish to do so.</p>',
          },
          {
            title: '4. User-Generated Content',
            content: '<p>The line-ups, exported images, and any other content you generate with the Application are your property. You are responsible for how you use such content when sharing it on social media or other channels, including complying with the rules of the platforms where you publish it.</p>',
          },
          {
            title: '5. Trademarks and Teams',
            content: '<p>SuperLineUp is not affiliated, associated, authorized, endorsed by, or in any way officially connected with any real club, league, federation, player, or sports entity. Any reference to teams, formations, or visual styles is for purely illustrative and user-customization purposes. All trademarks and logos belong to their respective owners.</p>',
          },
          {
            title: '6. Intellectual Property',
            content: '<p>All intellectual property rights to the Application, including its code, design, graphics, and interface, are owned by SuperLineUp or its licensors. You may not copy, modify, distribute, or commercially exploit the Application or its components without our prior written consent.</p>',
          },
          {
            title: '7. Limitation of Liability',
            content: '<p>SuperLineUp is provided "as is" and "as available", without warranties of any kind. We are not responsible for:</p><ul><li>Loss of data stored locally on the device</li><li>Errors, interruptions, or incompatibilities with certain devices</li><li>Damages arising from use of or inability to use the Application</li><li>Misuse of exported content by the user or third parties</li></ul>',
          },
          {
            title: '8. Modifications',
            content: '<p>We reserve the right to modify these Terms and Conditions, as well as the features of the Application, at any time. Modifications will take effect upon publication in the Application or the relevant store.</p>',
          },
          {
            title: '9. Contact',
            content: '<p>If you have questions about these Terms and Conditions, contact us at: support@superlineup.com</p>',
          },
        ],
      },
    },
    privacyPolicy: {
      es: {
        lastUpdated: '6 de Mayo, 2026',
        sections: [
          {
            title: '1. Introducción',
            content: '<p>Esta Política describe cómo SuperLineUp maneja la información cuando usas la Aplicación. Tu privacidad es prioridad.</p>',
          },
          {
            title: '2. Información que NO Recopilamos',
            content: '<p>SuperLineUp funciona 100% sin conexión. No requerimos registro y no recopilamos, transmitimos ni almacenamos información personal identificable como nombre, correo electrónico o ubicación.</p>',
          },
          {
            title: '3. Almacenamiento Local',
            content: '<p>Tus alineaciones, configuraciones y personalizaciones se guardan exclusivamente en el almacenamiento local de tu dispositivo (mediante MMKV). Si desinstalas la Aplicación, estos datos se eliminan.</p>',
          },
          {
            title: '4. Permisos del Dispositivo',
            content: '<p>La Aplicación puede solicitar permisos para guardar imágenes en tu galería al exportar alineaciones. Estos permisos se usan únicamente para la funcionalidad correspondiente y no implican recopilación de datos.</p>',
          },
          {
            title: '5. Compartir Imágenes',
            content: '<p>Cuando exportas y compartes una alineación, la imagen se procesa localmente y se entrega al sistema de tu dispositivo (galería, redes sociales, mensajería). Las plataformas a las que la envíes manejarán esa imagen según sus propias políticas.</p>',
          },
          {
            title: '6. Servicios de Terceros',
            content: '<p>SuperLineUp no integra servicios de analítica ni redes publicitarias que recopilen datos personales en esta versión. Si esto cambia en futuras versiones, actualizaremos esta Política.</p>',
          },
          {
            title: '7. Cambios y Contacto',
            content: '<p>Podemos actualizar esta Política y los cambios se publicarán en la Aplicación o en la tienda correspondiente. Para preguntas, contáctanos en: soporte@superlineup.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'May 6, 2026',
        sections: [
          {
            title: '1. Introduction',
            content: '<p>This Policy describes how SuperLineUp handles information when you use the Application. Your privacy is a priority.</p>',
          },
          {
            title: '2. Information We Do NOT Collect',
            content: '<p>SuperLineUp runs 100% offline. We do not require registration and do not collect, transmit, or store personally identifiable information such as name, email, or location.</p>',
          },
          {
            title: '3. Local Storage',
            content: '<p>Your line-ups, settings, and customizations are stored exclusively in the local storage of your device (via MMKV). If you uninstall the Application, this data is deleted.</p>',
          },
          {
            title: '4. Device Permissions',
            content: '<p>The Application may request permissions to save images to your gallery when exporting line-ups. These permissions are used solely for the corresponding feature and do not involve data collection.</p>',
          },
          {
            title: '5. Sharing Images',
            content: '<p>When you export and share a line-up, the image is processed locally and handed off to your device system (gallery, social media, messaging). The platforms you send it to will handle that image according to their own policies.</p>',
          },
          {
            title: '6. Third-Party Services',
            content: '<p>SuperLineUp does not integrate analytics or advertising networks that collect personal data in this version. If this changes in future versions, we will update this Policy.</p>',
          },
          {
            title: '7. Changes and Contact',
            content: '<p>We may update this Policy, and changes will be published in the Application or relevant store. For questions, contact us at: support@superlineup.com</p>',
          },
        ],
      },
    },
  },
  {
    id: '8',
    name: 'Football Cup Simulator',
    slug: 'football-cup-simulator',
    description: 'Simula torneos de copa de fútbol y vive cada ronda hasta la final.',
    icon: '',
    logo: FootballCupIcon,
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.davidyero.footballcupsimulator',
  },
  {
    id: '9',
    name: 'Greta',
    slug: 'greta',
    description: 'Plataforma para conectar personas con fundaciones y rescatistas de animales.',
    icon: '',
    logo: GretaIcon,
  },
  {
    id: '10',
    name: 'ChamiApp',
    slug: 'chamiapp',
    description: 'Quiniela del Mundial 2026 para competir con amigos.',
    icon: '',
  },
  {
    id: '11',
    name: 'My Link Hub',
    slug: 'my-link-hub',
    description: 'Tu portafolio profesional y todos tus enlaces en un solo link.',
    icon: '',
    logo: MyLinkHubIcon,
  },
  {
    id: '12',
    name: 'Equilibra',
    slug: 'equilibra',
    description: 'Gastos compartidos, sin discusiones.',
    icon: '',
    logo: EquilibraIcon,
  },
  {
    id: '13',
    name: 'Mis Pagos',
    slug: 'mis-pagos',
    description: 'Lleva el control de tus pagos y suscripciones en un solo lugar.',
    icon: '',
  },
  {
    id: '14',
    name: 'HabitFlow',
    slug: 'habitflow',
    description:
      'Rastreador de hábitos minimalista con rachas estilo grilla de contribuciones. Local-first, con sincronización opcional en la nube para Lite y Pro.',
    icon: '',
    logo: HabitFlowIcon,
    fullDescription:
      'HabitFlow es un rastreador de hábitos minimalista y local-first. Crea hábitos, registra tus check-ins diarios y visualiza tus rachas con grillas de intensidad estilo contribuciones. Puedes usarlo como invitado con todos tus datos en el dispositivo, o crear una cuenta con correo y contraseña. Con los planes Lite y Pro, tus hábitos, check-ins y estados de ánimo se sincronizan en la nube entre tus dispositivos; en el plan gratuito tus datos permanecen 100% en el dispositivo.',
    features: [
      'Rastrea hábitos binarios, de cantidad o de abandono',
      'Rachas visuales estilo grilla de contribuciones',
      'Recordatorios con notificaciones locales',
      'Tema oscuro y claro con acentos de color por hábito',
      'Sincronización opcional en la nube con Lite o Pro',
      'Exporta, importa o elimina todos tus datos cuando quieras',
    ],
    appStoreUrl: '',
    playStoreUrl: '',
    changelog: [
      {
        version: '1.0.0',
        date: '8 de julio de 2026',
        type: 'new',
        changes: ['Lanzamiento inicial de HabitFlow.'],
      },
    ],
    termsAndConditions: {
      es: {
        lastUpdated: '19 de julio de 2026',
        sections: [
          {
            title: '1. Aceptación de los Términos',
            content:
              '<p>Al descargar, instalar o usar HabitFlow ("la Aplicación"), aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con ellos, no uses la Aplicación.</p>',
          },
          {
            title: '2. Descripción del Servicio',
            content:
              '<p>HabitFlow es una aplicación para crear y seguir hábitos personales, disponible en iOS y Android. La Aplicación es local-first: puedes usarla como invitado y todos tus datos permanecen en tu dispositivo. De forma opcional puedes crear una cuenta. En los planes de pago (Lite y Pro), tus hábitos, check-ins y estados de ánimo se sincronizan en nuestros servidores para mantenerlos actualizados entre tus dispositivos; en el plan gratuito tus datos permanecen 100% en el dispositivo.</p>',
          },
          {
            title: '3. Cuentas',
            content:
              '<p>Puedes usar la Aplicación como invitado (100% en el dispositivo) o crear una cuenta con tu nombre, correo electrónico y contraseña en nuestro backend. No ofrecemos inicio de sesión con redes sociales. Eres responsable de mantener la confidencialidad de tus credenciales y de toda actividad realizada bajo tu cuenta. Puedes eliminar tu cuenta en cualquier momento desde la Aplicación.</p>',
          },
          {
            title: '4. Suscripciones y Pagos',
            content:
              '<p>HabitFlow ofrece un plan gratuito y planes de pago que desbloquean el nivel Pro. Las compras dentro de la aplicación (mensual, anual o de por vida) se gestionan con RevenueCat y se cobran a través de la tienda correspondiente (App Store de Apple o Google Play), sujetas a sus términos. Las suscripciones se renuevan automáticamente salvo que las canceles antes del final del período. La renovación, cancelación y reembolsos se gestionan desde tu cuenta de la tienda, y no ofrecemos reembolsos más allá de la política de la tienda. El estado de tu suscripción se valida en nuestros servidores.</p>',
          },
          {
            title: '5. Códigos de Canje',
            content:
              '<p>Podemos crear códigos de canje que otorgan acceso al nivel Lite o Pro. Cada código es de un solo uso, personal e intransferible. Nos reservamos el derecho de revocar cualquier código o el acceso concedido por él en caso de uso indebido o fraude.</p>',
          },
          {
            title: '6. Uso Aceptable',
            content:
              '<p>Te comprometes a:</p><ul><li>Usar la Aplicación únicamente con fines personales y legales</li><li>No intentar modificar, descompilar ni realizar ingeniería inversa sobre la Aplicación</li><li>No interferir con el funcionamiento de la Aplicación, con nuestros servidores ni con la seguridad de otros usuarios</li></ul>',
          },
          {
            title: '7. Publicidad',
            content:
              '<p>Los planes Gratuito y Lite muestran anuncios a través de Google AdMob (un banner inferior y algún anuncio intersticial ocasional). El plan Pro elimina los anuncios. El uso de la publicidad se rige también por la Política de Privacidad.</p>',
          },
          {
            title: '8. Propiedad Intelectual',
            content:
              '<p>Todos los derechos sobre la Aplicación, incluyendo su código, diseño e interfaz, pertenecen a su autor. El contenido que registras (hábitos, notas, fotos) es tuyo; nosotros no reclamamos ningún derecho sobre él.</p>',
          },
          {
            title: '9. Limitación de Responsabilidad',
            content:
              '<p>La Aplicación se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún tipo. No nos hacemos responsables de la pérdida de datos almacenados localmente o sincronizados, de errores o incompatibilidades con determinados dispositivos, ni de daños derivados del uso o imposibilidad de uso de la Aplicación. Te recomendamos exportar tus datos periódicamente.</p>',
          },
          {
            title: '10. Modificaciones',
            content:
              '<p>Podemos modificar estos Términos y las funciones de la Aplicación en cualquier momento. Los cambios entrarán en vigor desde su publicación. El uso continuado de la Aplicación implica la aceptación de los Términos vigentes.</p>',
          },
          {
            title: '11. Contacto',
            content:
              '<p>Si tienes preguntas sobre estos Términos, contáctanos en: support@davidyero.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'July 19, 2026',
        sections: [
          {
            title: '1. Acceptance of Terms',
            content:
              '<p>By downloading, installing, or using HabitFlow ("the Application"), you agree to be bound by these Terms and Conditions. If you do not agree with them, do not use the Application.</p>',
          },
          {
            title: '2. Description of the Service',
            content:
              '<p>HabitFlow is an app for creating and tracking personal habits, available on iOS and Android. The Application is local-first: you can use it as a guest and all your data stays on your device. Optionally, you may create an account. On paid plans (Lite and Pro), your habits, check-ins, and moods are synced to our servers to keep them up to date across your devices; on the free plan your data stays 100% on the device.</p>',
          },
          {
            title: '3. Accounts',
            content:
              '<p>You can use the Application as a guest (100% on-device) or create an account with your name, email, and password on our backend. We do not offer social login. You are responsible for keeping your credentials confidential and for all activity under your account. You can delete your account at any time from within the Application.</p>',
          },
          {
            title: '4. Subscriptions and Payments',
            content:
              '<p>HabitFlow offers a free plan and paid plans that unlock the Pro tier. In-app purchases (monthly, annual, or lifetime) are managed with RevenueCat and billed through the relevant app store (Apple App Store or Google Play), subject to their terms. Subscriptions renew automatically unless canceled before the end of the period. Renewal, cancellation, and refunds are managed from your store account, and we do not offer refunds beyond the store policy. Your subscription status is validated on our servers.</p>',
          },
          {
            title: '5. Redeem Codes',
            content:
              '<p>We may create redeem codes that grant access to the Lite or Pro tier. Each code is single-use, personal, and non-transferable. We reserve the right to revoke any code or the access it granted in the event of misuse or fraud.</p>',
          },
          {
            title: '6. Acceptable Use',
            content:
              '<p>You agree to:</p><ul><li>Use the Application only for personal and lawful purposes</li><li>Not attempt to modify, decompile, or reverse engineer the Application</li><li>Not interfere with the operation of the Application, our servers, or the security of other users</li></ul>',
          },
          {
            title: '7. Advertising',
            content:
              '<p>The Free and Lite plans show ads through Google AdMob (a bottom banner and an occasional interstitial). The Pro plan removes ads. Advertising is also governed by the Privacy Policy.</p>',
          },
          {
            title: '8. Intellectual Property',
            content:
              '<p>All rights to the Application, including its code, design, and interface, belong to its author. The content you record (habits, notes, photos) is yours; we claim no rights over it.</p>',
          },
          {
            title: '9. Limitation of Liability',
            content:
              '<p>The Application is provided "as is" and "as available", without warranties of any kind. We are not responsible for loss of locally stored or synced data, errors or incompatibilities with certain devices, or damages arising from use of or inability to use the Application. We recommend exporting your data periodically.</p>',
          },
          {
            title: '10. Modifications',
            content:
              '<p>We may modify these Terms and the features of the Application at any time. Changes take effect upon publication. Continued use of the Application implies acceptance of the current Terms.</p>',
          },
          {
            title: '11. Contact',
            content:
              '<p>If you have questions about these Terms, contact us at: support@davidyero.com</p>',
          },
        ],
      },
    },
    privacyPolicy: {
      es: {
        lastUpdated: '19 de julio de 2026',
        sections: [
          {
            title: '1. Introducción',
            content:
              '<p>Esta Política de Privacidad describe cómo HabitFlow maneja tu información. HabitFlow es una aplicación local-first: puedes usarla como invitado con todos tus datos en el dispositivo, o crear una cuenta y activar la sincronización en la nube en los planes de pago.</p>',
          },
          {
            title: '2. Datos que Recopilamos',
            content:
              '<p>Podemos tratar los siguientes datos:</p><ul><li><strong>Cuenta:</strong> tu nombre y correo electrónico, junto con una versión cifrada de tu contraseña, almacenados en nuestro backend.</li><li><strong>Contenido de hábitos:</strong> tus hábitos, check-ins y estados de ánimo. Solo se sincronizan en nuestros servidores en los planes Lite y Pro; en el plan gratuito permanecen 100% en tu dispositivo.</li><li><strong>Historial de compras:</strong> gestionado a través de RevenueCat para validar tu suscripción.</li><li><strong>Identificadores de publicidad:</strong> recopilados por Google AdMob (con tu consentimiento) para mostrar anuncios.</li><li><strong>Fotos:</strong> la foto opcional que adjuntes a un check-in se guarda únicamente en tu dispositivo.</li></ul>',
          },
          {
            title: '3. Cómo Usamos tus Datos',
            content:
              '<p>Usamos tus datos para: crear y autenticar tu cuenta; sincronizar tus hábitos entre dispositivos en los planes de pago; validar tu suscripción; mostrar publicidad en los planes Gratuito y Lite; y enviarte recordatorios locales. No usamos tu contenido de hábitos con fines publicitarios.</p>',
          },
          {
            title: '4. Sincronización en la Nube (solo planes de pago)',
            content:
              '<p>La sincronización en la nube está disponible únicamente para los planes Lite y Pro. Cuando está activa, tus hábitos, check-ins y estados de ánimo se copian a nuestros servidores para mantenerlos actualizados entre tus dispositivos. <strong>En el plan gratuito, estos datos permanecen 100% en tu dispositivo y nunca se envían a nuestros servidores.</strong> Las fotos adjuntas a un check-in nunca se suben; se guardan solo en el dispositivo.</p>',
          },
          {
            title: '5. Publicidad y Seguimiento (Google AdMob)',
            content:
              '<p>Los planes Gratuito y Lite muestran anuncios a través de Google AdMob. AdMob puede recopilar identificadores de publicidad y datos del dispositivo para mostrar anuncios. En iOS usamos la Transparencia de Seguimiento de Apps (ATT) y, en general, una plataforma de gestión de consentimiento (UMP/GDPR) para pedir tu consentimiento; solo mostramos publicidad personalizada si lo aceptas, y puedes rechazarlo. Consulta la política de privacidad de Google para más detalles.</p>',
          },
          {
            title: '6. Notificaciones Locales',
            content:
              '<p>La Aplicación usa notificaciones locales en tu dispositivo para enviarte recordatorios de tus hábitos. Estas notificaciones se generan en el dispositivo y no implican el envío de tus datos a nuestros servidores.</p>',
          },
          {
            title: '7. No Vendemos tus Datos',
            content:
              '<p>No vendemos ni alquilamos tu información personal a terceros.</p>',
          },
          {
            title: '8. Tus Derechos y Control',
            content:
              '<p>Tú controlas tus datos. Desde la Aplicación puedes:</p><ul><li>Exportar e importar todos tus datos (JSON o CSV)</li><li>Eliminar tus datos de hábitos</li><li>Eliminar tu cuenta, lo que también elimina los datos que tengas sincronizados en la nube</li></ul>',
          },
          {
            title: '9. Conservación y Eliminación de Datos',
            content:
              '<p>Conservamos los datos de tu cuenta y los datos sincronizados mientras tu cuenta esté activa. Cuando eliminas tu cuenta, eliminamos tu información de cuenta y los datos asociados sincronizados en la nube. Los datos que solo existen en tu dispositivo se eliminan al desinstalar la Aplicación.</p>',
          },
          {
            title: '10. Cambios en esta Política',
            content:
              '<p>Podemos actualizar esta Política. Los cambios se publicarán en la Aplicación o en la tienda correspondiente, indicando la fecha de última actualización.</p>',
          },
          {
            title: '11. Contacto',
            content:
              '<p>Si tienes preguntas sobre esta Política de Privacidad, contáctanos en: support@davidyero.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'July 19, 2026',
        sections: [
          {
            title: '1. Introduction',
            content:
              '<p>This Privacy Policy describes how HabitFlow handles your information. HabitFlow is a local-first app: you can use it as a guest with all your data on your device, or create an account and enable cloud sync on the paid plans.</p>',
          },
          {
            title: '2. Data We Collect',
            content:
              '<p>We may process the following data:</p><ul><li><strong>Account:</strong> your name and email address, along with an encrypted version of your password, stored on our backend.</li><li><strong>Habit content:</strong> your habits, check-ins, and moods. These are only synced to our servers on the Lite and Pro plans; on the free plan they stay 100% on your device.</li><li><strong>Purchase history:</strong> handled through RevenueCat to validate your subscription.</li><li><strong>Advertising identifiers:</strong> collected by Google AdMob (with your consent) to serve ads.</li><li><strong>Photos:</strong> the optional photo you attach to a check-in is stored only on your device.</li></ul>',
          },
          {
            title: '3. How We Use Your Data',
            content:
              '<p>We use your data to: create and authenticate your account; sync your habits across devices on paid plans; validate your subscription; show advertising on the Free and Lite plans; and send you local reminders. We do not use your habit content for advertising purposes.</p>',
          },
          {
            title: '4. Cloud Sync (paid plans only)',
            content:
              '<p>Cloud sync is available only for the Lite and Pro plans. When active, your habits, check-ins, and moods are copied to our servers to keep them up to date across your devices. <strong>On the free plan, this data stays 100% on your device and is never sent to our servers.</strong> Photos attached to a check-in are never uploaded; they are stored on the device only.</p>',
          },
          {
            title: '5. Advertising and Tracking (Google AdMob)',
            content:
              '<p>The Free and Lite plans show ads through Google AdMob. AdMob may collect advertising identifiers and device data to serve ads. On iOS we use App Tracking Transparency (ATT) and, more generally, a consent management platform (UMP/GDPR) to ask for your consent; we only show personalized ads if you agree, and you may decline. See Google’s privacy policy for more detail.</p>',
          },
          {
            title: '6. Local Notifications',
            content:
              '<p>The Application uses local notifications on your device to send you habit reminders. These notifications are generated on the device and do not involve sending your data to our servers.</p>',
          },
          {
            title: '7. We Do Not Sell Your Data',
            content:
              '<p>We do not sell or rent your personal information to third parties.</p>',
          },
          {
            title: '8. Your Rights and Control',
            content:
              '<p>You are in control of your data. From within the Application you can:</p><ul><li>Export and import all your data (JSON or CSV)</li><li>Delete your habit data</li><li>Delete your account, which also removes any data you have synced to the cloud</li></ul>',
          },
          {
            title: '9. Data Retention and Deletion',
            content:
              '<p>We keep your account data and synced data while your account is active. When you delete your account, we delete your account information and the associated data synced to the cloud. Data that exists only on your device is removed when you uninstall the Application.</p>',
          },
          {
            title: '10. Changes to This Policy',
            content:
              '<p>We may update this Policy. Changes will be published in the Application or the relevant store, indicating the last updated date.</p>',
          },
          {
            title: '11. Contact',
            content:
              '<p>If you have questions about this Privacy Policy, contact us at: support@davidyero.com</p>',
          },
        ],
      },
    },
  },
  {
    id: '15',
    name: 'TrainFlow AI',
    slug: 'trainflow-ai',
    description:
      'Convierte los planes de entrenamiento que genera la IA en una app clara y legible. Tus planes viven en tu dispositivo.',
    icon: '',
    logo: TrainFlowAIIcon,
    fullDescription:
      'TrainFlow AI es la capa de presentación para planes de entrenamiento generados por inteligencia artificial (ChatGPT, Claude, Gemini…). Pides un plan en JSON o CSV, lo importas, y la app lo muestra con una interfaz editorial clara. Tus planes se guardan en tu dispositivo; con Lite o Pro se respaldan en la nube. Inicia sesión con Google o entra como invitado.',
    features: [
      'Importa planes de IA en JSON o CSV con parsing tolerante',
      'Interfaz editorial clara para seguir tu rutina día a día',
      'Planes ilimitados y copia en la nube con Lite/Pro',
      'Exporta a PDF o imagen y compártelos',
      'Inicia sesión con Google o entra como invitado',
      'Tema oscuro y claro · Español e inglés',
    ],
    appStoreUrl: '',
    playStoreUrl: '',
    changelog: [
      {
        version: '1.0.0',
        date: '19 de julio de 2026',
        type: 'new',
        changes: ['Lanzamiento inicial de TrainFlow AI.'],
      },
    ],
    termsAndConditions: {
      es: {
        lastUpdated: '19 de julio de 2026',
        sections: [
          {
            title: '1. Aceptación de los Términos',
            content:
              '<p>Al descargar, instalar o usar TrainFlow AI ("la Aplicación"), aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con ellos, no uses la Aplicación.</p>',
          },
          {
            title: '2. Descripción del Servicio',
            content:
              '<p>TrainFlow AI es una capa de presentación para planes de entrenamiento generados por inteligencia artificial de terceros (como ChatGPT, Claude o Gemini). Tú generas o proporcionas un plan en formato JSON o CSV, lo importas, y la Aplicación lo muestra de forma clara y legible. La Aplicación no genera los planes ni presta un servicio de asesoría.</p>',
          },
          {
            title: '3. No es Asesoría Médica ni Profesional',
            content:
              '<p><strong>Importante:</strong> los planes de entrenamiento provienen de fuentes de IA de terceros o de ti, no de TrainFlow AI. La Aplicación no proporciona asesoría médica, de salud, nutricional ni de acondicionamiento físico. Consulta a un profesional de la salud calificado antes de iniciar cualquier programa de entrenamiento. Usas los planes bajo tu propia responsabilidad y riesgo.</p>',
          },
          {
            title: '4. Cuentas',
            content:
              '<p>Puedes usar la Aplicación como invitado o iniciar sesión con Google. La cuenta se usa para identificarte, administrar tu plan y, en los planes de pago, respaldar tus planes en la nube. Eres responsable de la seguridad de tu cuenta de Google. Puedes eliminar tu cuenta y sus datos en cualquier momento desde la Aplicación.</p>',
          },
          {
            title: '5. Suscripciones y Planes de Pago',
            content:
              '<p>TrainFlow AI ofrece un plan gratuito y planes de pago (Lite y Pro) que desbloquean funciones adicionales. Las suscripciones se contratan y se cobran a través de la tienda correspondiente (App Store de Apple o Google Play) y se gestionan con RevenueCat, sujetas a sus términos. La renovación, cancelación y reembolsos se gestionan desde tu cuenta de la tienda. Las suscripciones se renuevan automáticamente salvo que las canceles antes del final del período.</p>',
          },
          {
            title: '6. Publicidad',
            content:
              '<p>Los planes Gratuito y Lite muestran anuncios a través de Google AdMob. El plan Pro elimina los anuncios. El uso de la publicidad se rige también por la Política de Privacidad.</p>',
          },
          {
            title: '7. Propiedad Intelectual',
            content:
              '<p>Todos los derechos sobre la Aplicación, incluyendo su código, diseño e interfaz, pertenecen a su autor. El contenido que importas (tus planes de entrenamiento) es tuyo; no reclamamos ningún derecho sobre él.</p>',
          },
          {
            title: '8. Limitación de Responsabilidad',
            content:
              '<p>La Aplicación se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún tipo. No nos hacemos responsables de lesiones o daños derivados de seguir un plan de entrenamiento, de la pérdida de datos almacenados localmente, de errores de importación ni de incompatibilidades con determinados dispositivos. Te recomendamos exportar tus planes periódicamente.</p>',
          },
          {
            title: '9. Modificaciones',
            content:
              '<p>Podemos modificar estos Términos y las funciones de la Aplicación en cualquier momento. Los cambios entrarán en vigor desde su publicación. El uso continuado de la Aplicación implica la aceptación de los Términos vigentes.</p>',
          },
          {
            title: '10. Contacto',
            content:
              '<p>Si tienes preguntas sobre estos Términos, contáctanos en: davidyero@davidyero.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'July 19, 2026',
        sections: [
          {
            title: '1. Acceptance of Terms',
            content:
              '<p>By downloading, installing, or using TrainFlow AI ("the Application"), you agree to be bound by these Terms and Conditions. If you do not agree with them, do not use the Application.</p>',
          },
          {
            title: '2. Description of the Service',
            content:
              '<p>TrainFlow AI is a presentation layer for training plans generated by third-party artificial intelligence (such as ChatGPT, Claude, or Gemini). You generate or provide a plan in JSON or CSV format, import it, and the Application displays it in a clean, readable way. The Application does not generate the plans and does not provide advisory services.</p>',
          },
          {
            title: '3. Not Medical or Professional Advice',
            content:
              '<p><strong>Important:</strong> training plans come from third-party AI sources or from you, not from TrainFlow AI. The Application does not provide medical, health, nutritional, or fitness advice. Consult a qualified health professional before starting any training program. You use the plans at your own responsibility and risk.</p>',
          },
          {
            title: '4. Accounts',
            content:
              '<p>You can use the Application as a guest or sign in with Google. The account is used to identify you, manage your plan, and — on paid plans — back up your plans to the cloud. You are responsible for the security of your Google account. You can delete your account and its data at any time from within the Application.</p>',
          },
          {
            title: '5. Subscriptions and Paid Plans',
            content:
              '<p>TrainFlow AI offers a free plan and paid plans (Lite and Pro) that unlock additional features. Subscriptions are purchased and billed through the relevant app store (Apple App Store or Google Play) and managed with RevenueCat, subject to their terms. Renewal, cancellation, and refunds are managed from your store account. Subscriptions renew automatically unless canceled before the end of the period.</p>',
          },
          {
            title: '6. Advertising',
            content:
              '<p>The Free and Lite plans show ads through Google AdMob. The Pro plan removes ads. Advertising is also governed by the Privacy Policy.</p>',
          },
          {
            title: '7. Intellectual Property',
            content:
              '<p>All rights to the Application, including its code, design, and interface, belong to its author. The content you import (your training plans) is yours; we claim no rights over it.</p>',
          },
          {
            title: '8. Limitation of Liability',
            content:
              '<p>The Application is provided "as is" and "as available", without warranties of any kind. We are not responsible for injury or damages arising from following a training plan, loss of locally stored data, import errors, or incompatibilities with certain devices. We recommend exporting your plans periodically.</p>',
          },
          {
            title: '9. Modifications',
            content:
              '<p>We may modify these Terms and the features of the Application at any time. Changes take effect upon publication. Continued use of the Application implies acceptance of the current Terms.</p>',
          },
          {
            title: '10. Contact',
            content:
              '<p>If you have questions about these Terms, contact us at: davidyero@davidyero.com</p>',
          },
        ],
      },
    },
    privacyPolicy: {
      es: {
        lastUpdated: '19 de julio de 2026',
        sections: [
          {
            title: '1. Introducción',
            content:
              '<p>Esta Política de Privacidad describe cómo TrainFlow AI maneja tu información. TrainFlow AI está diseñado para que tus planes de entrenamiento vivan en tu dispositivo; solo los planes de pago los respaldan en la nube.</p>',
          },
          {
            title: '2. Tus Planes se Guardan en tu Dispositivo',
            content:
              '<p>Tus planes de entrenamiento y tu progreso se almacenan de forma local en tu dispositivo. Si usas un plan de pago (Lite o Pro) se activa la copia en la nube (ver la sección de Copia en la Nube). <strong>Si desinstalas la Aplicación, los datos locales se eliminan de tu dispositivo.</strong></p>',
          },
          {
            title: '3. Cuenta e Inicio de Sesión',
            content:
              '<p>Puedes usar la Aplicación como invitado; en ese caso usamos un identificador anónimo de dispositivo que no te identifica como persona. Si inicias sesión con Google, guardamos en nuestro backend tu correo electrónico, nombre y foto de perfil de Google, con el fin de identificarte y administrar tu plan. Puedes eliminar tu cuenta y la información asociada en cualquier momento desde la Aplicación.</p>',
          },
          {
            title: '4. Copia en la Nube (planes de pago)',
            content:
              '<p>Si tienes un plan Lite o Pro, tus planes de entrenamiento se respaldan en nuestros servidores para poder sincronizarlos entre tus dispositivos. <strong>El plan Gratuito no sube ningún plan a la nube.</strong> Puedes eliminar esta copia eliminando tu cuenta desde la Aplicación.</p>',
          },
          {
            title: '5. Suscripciones (RevenueCat)',
            content:
              '<p>Usamos RevenueCat para gestionar las compras dentro de la Aplicación. RevenueCat procesa un identificador de usuario y el estado de tu suscripción para determinar tu plan. No recibimos los datos de tu tarjeta: los pagos los procesa la tienda (Apple o Google).</p>',
          },
          {
            title: '6. Publicidad (Google AdMob)',
            content:
              '<p>Los planes Gratuito y Lite muestran anuncios a través de Google AdMob, que puede usar identificadores del dispositivo o de publicidad. En los dispositivos que lo requieren, la Aplicación te solicitará tu consentimiento antes de habilitar publicidad personalizada; puedes rechazarlo. Consulta la política de privacidad de Google para más detalles.</p>',
          },
          {
            title: '7. Sugerencias y Soporte',
            content:
              '<p>Si nos envías una sugerencia o solicitud desde la Aplicación, recibimos tu mensaje y, si has iniciado sesión, tu nombre y correo, en davidyero@davidyero.com para poder responderte.</p>',
          },
          {
            title: '8. No Vendemos tus Datos',
            content:
              '<p>No vendemos ni alquilamos tu información personal a terceros.</p>',
          },
          {
            title: '9. Tus Derechos y Control',
            content:
              '<p>Tú controlas tus datos. Desde la Aplicación puedes:</p><ul><li>Exportar tus planes de entrenamiento a PDF o imagen</li><li>Eliminar tus planes</li><li>Eliminar tu cuenta y toda la información asociada, incluida la copia en la nube</li></ul>',
          },
          {
            title: '10. Cambios en esta Política',
            content:
              '<p>Podemos actualizar esta Política. Los cambios se publicarán en la Aplicación o en la tienda correspondiente, indicando la fecha de última actualización.</p>',
          },
          {
            title: '11. Contacto',
            content:
              '<p>Si tienes preguntas sobre esta Política de Privacidad, contáctanos en: davidyero@davidyero.com</p>',
          },
        ],
      },
      en: {
        lastUpdated: 'July 19, 2026',
        sections: [
          {
            title: '1. Introduction',
            content:
              '<p>This Privacy Policy describes how TrainFlow AI handles your information. TrainFlow AI is designed so your training plans live on your device; only paid plans back them up to the cloud.</p>',
          },
          {
            title: '2. Your Plans Are Stored on Your Device',
            content:
              '<p>Your training plans and progress are stored locally on your device. If you use a paid plan (Lite or Pro), cloud backup is enabled (see the Cloud Backup section). <strong>If you uninstall the Application, local data is deleted from your device.</strong></p>',
          },
          {
            title: '3. Account and Sign-In',
            content:
              '<p>You can use the Application as a guest; in that case we use an anonymous device identifier that does not identify you as a person. If you sign in with Google, we store on our backend your email address, name, and Google profile picture, in order to identify you and manage your plan. You can delete your account and associated information at any time from within the Application.</p>',
          },
          {
            title: '4. Cloud Backup (paid plans)',
            content:
              '<p>If you have a Lite or Pro plan, your training plans are backed up to our servers so they can sync across your devices. <strong>The Free plan does not upload any plan to the cloud.</strong> You can delete this backup by deleting your account from within the Application.</p>',
          },
          {
            title: '5. Subscriptions (RevenueCat)',
            content:
              '<p>We use RevenueCat to manage in-app purchases. RevenueCat processes a user identifier and your subscription status to determine your plan. We do not receive your card details: payments are processed by the store (Apple or Google).</p>',
          },
          {
            title: '6. Advertising (Google AdMob)',
            content:
              '<p>The Free and Lite plans show ads through Google AdMob, which may use device or advertising identifiers. On devices that require it, the Application will ask for your consent before enabling personalized ads; you may decline. See Google’s privacy policy for more detail.</p>',
          },
          {
            title: '7. Suggestions and Support',
            content:
              '<p>If you send us a suggestion or request from within the Application, we receive your message and, if you are signed in, your name and email, at davidyero@davidyero.com so we can respond.</p>',
          },
          {
            title: '8. We Do Not Sell Your Data',
            content:
              '<p>We do not sell or rent your personal information to third parties.</p>',
          },
          {
            title: '9. Your Rights and Control',
            content:
              '<p>You are in control of your data. From within the Application you can:</p><ul><li>Export your training plans to PDF or image</li><li>Delete your plans</li><li>Delete your account and all associated information, including the cloud backup</li></ul>',
          },
          {
            title: '10. Changes to This Policy',
            content:
              '<p>We may update this Policy. Changes will be published in the Application or the relevant store, indicating the last updated date.</p>',
          },
          {
            title: '11. Contact',
            content:
              '<p>If you have questions about this Privacy Policy, contact us at: davidyero@davidyero.com</p>',
          },
        ],
      },
    },
  },
];
