import { type App } from "../../Screens/MyAppsScreen/MyAppsScreen.types";
import { appIcon } from "./appIcon";

export const agendaPilatesApp: App = {
  id: "18",
  name: "Agenda Pilates",
  slug: "agenda-pilates",
  description:
    "Los estudios de pilates gestionan sus clases y planes, y sus miembros reservan desde la web o el móvil.",
  logo: appIcon("agenda-pilates"),
  termsAndConditions: {
    es: {
      lastUpdated: "23 de octubre de 2026",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content:
            '<p>Al descargar, instalar o usar Agenda Pilates ("la Aplicación"), aceptas estos Términos y Condiciones. Si no estás de acuerdo, no uses la Aplicación.</p>',
        },
        {
          title: "2. Qué es Agenda Pilates",
          content:
            "<p>Agenda Pilates conecta a los estudios de pilates con sus miembros. El estudio gestiona salas, horarios, planes, reservas, asistencia y pagos; el miembro reserva sus clases, consulta su plan y recibe avisos.</p><p>La app para miembros es gratuita: quien paga el servicio es el estudio.</p>",
        },
        {
          title: "3. Cuentas y acceso",
          content:
            "<p>Para usar la Aplicación necesitas una cuenta con un correo válido. Tu estudio debe invitarte o aprobar tu solicitud para que puedas reservar.</p><p>Eres responsable de la confidencialidad de tu contraseña y de la actividad que ocurra con tu cuenta. Debes tener al menos 18 años o contar con autorización de tu representante legal.</p>",
        },
        {
          title: "4. Reservas, cancelaciones y asistencia",
          content:
            "<p>Las reglas de reserva las define cada estudio: cupo de las salas, ventana de reserva, horas mínimas para cancelar, penalizaciones, congelamientos y lista de espera. La Aplicación solo las aplica.</p><ul><li>Cancelar fuera del plazo puede consumir tu clase, según lo que haya configurado tu estudio.</li><li>Si el estudio exige aprobación, tu cancelación queda pendiente hasta que la apruebe.</li><li>Si se libera un cupo, se asigna a la primera persona elegible de la lista de espera.</li></ul>",
        },
        {
          title: "5. Planes y pagos",
          content:
            "<p>Los planes, precios, vigencias y cobros a los miembros son responsabilidad de cada estudio, que puede registrarlos en la Aplicación. Los pagos entre el miembro y su estudio ocurren fuera de la Aplicación, salvo que el estudio use un medio de pago propio publicado en ella.</p><p>La suscripción que el estudio paga a la plataforma se procesa mediante Wompi. No almacenamos datos de tarjetas.</p>",
        },
        {
          title: "6. Uso aceptable",
          content:
            "<p>Te comprometes a no:</p><ul><li>Suplantar a otra persona o usar datos falsos.</li><li>Reservar de forma abusiva para bloquear cupos a otros miembros.</li><li>Intentar acceder a datos de otros usuarios o de otros estudios.</li><li>Interferir con el funcionamiento del servicio o saltarte sus límites técnicos.</li></ul>",
        },
        {
          title: "7. Contenido del estudio",
          content:
            "<p>Las novedades, avisos, fotos y datos que publica cada estudio son responsabilidad de ese estudio. Podemos retirar contenido que sea ilegal, ofensivo o que vulnere derechos de terceros.</p>",
        },
        {
          title: "8. Disponibilidad del servicio",
          content:
            '<p>La Aplicación se ofrece "tal cual". Hacemos lo razonable por mantenerla disponible, pero no garantizamos un funcionamiento ininterrumpido ni libre de errores. Podemos realizar mantenimientos o cambios que interrumpan el servicio temporalmente.</p>',
        },
        {
          title: "9. Limitación de responsabilidad",
          content:
            "<p>No somos responsables de la relación entre el miembro y su estudio: clases, cobros, lesiones o decisiones del estudio. Tampoco de daños indirectos derivados del uso de la Aplicación.</p>",
        },
        {
          title: "10. Cancelación de la cuenta",
          content:
            "<p>Puedes eliminar tu cuenta desde Ajustes en la app o en la web. Al hacerlo se cancelan tus reservas futuras y tus datos personales se anonimizan. El estudio conserva los registros propios de su operación (pagos y asistencias) sin tus datos personales.</p>",
        },
        {
          title: "11. Cambios en los Términos",
          content:
            "<p>Podemos actualizar estos Términos. Si el cambio es relevante, lo avisaremos en la Aplicación. El uso posterior implica su aceptación.</p>",
        },
        {
          title: "12. Contacto",
          content: "<p>Dudas sobre estos Términos: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "October 23, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            '<p>By downloading, installing, or using Agenda Pilates ("the Application"), you agree to these Terms and Conditions. If you do not agree, do not use the Application.</p>',
        },
        {
          title: "2. What Agenda Pilates is",
          content:
            "<p>Agenda Pilates connects pilates studios with their members. The studio manages rooms, schedules, plans, bookings, attendance and payments; the member books classes, checks their plan and receives notices.</p><p>The member app is free: the studio pays for the service.</p>",
        },
        {
          title: "3. Accounts and access",
          content:
            "<p>You need an account with a valid email address. Your studio must invite you or approve your request before you can book.</p><p>You are responsible for keeping your password confidential and for the activity on your account. You must be 18 or have your legal guardian's consent.</p>",
        },
        {
          title: "4. Bookings, cancellations and attendance",
          content:
            "<p>Each studio defines its own rules: room capacity, booking window, minimum hours to cancel, penalties, freezes and waitlist. The Application only enforces them.</p><ul><li>Cancelling past the deadline may cost you the class, depending on your studio's settings.</li><li>If your studio requires approval, your cancellation stays pending until they approve it.</li><li>When a spot frees up, it goes to the first eligible person on the waitlist.</li></ul>",
        },
        {
          title: "5. Plans and payments",
          content:
            "<p>Plans, prices, validity and charges to members are each studio's responsibility. Payments between a member and their studio happen outside the Application, unless the studio publishes its own payment method in it.</p><p>The subscription the studio pays to the platform is processed through Wompi. We never store card data.</p>",
        },
        {
          title: "6. Acceptable use",
          content:
            "<p>You agree not to:</p><ul><li>Impersonate someone else or use false data.</li><li>Book abusively to block spots from other members.</li><li>Try to access other users' or other studios' data.</li><li>Interfere with the service or bypass its technical limits.</li></ul>",
        },
        {
          title: "7. Studio content",
          content:
            "<p>News, notices, photos and data published by a studio are that studio's responsibility. We may remove content that is illegal, offensive or infringes third-party rights.</p>",
        },
        {
          title: "8. Service availability",
          content:
            '<p>The Application is provided "as is". We make reasonable efforts to keep it available, but we do not guarantee uninterrupted or error-free operation. Maintenance or changes may interrupt the service temporarily.</p>',
        },
        {
          title: "9. Limitation of liability",
          content:
            "<p>We are not responsible for the relationship between a member and their studio: classes, charges, injuries or studio decisions. Nor for indirect damages arising from using the Application.</p>",
        },
        {
          title: "10. Deleting your account",
          content:
            "<p>You can delete your account from Settings in the app or on the web. Your upcoming bookings are cancelled and your personal data is anonymized. The studio keeps its own operational records (payments and attendance) without your personal data.</p>",
        },
        {
          title: "11. Changes to these Terms",
          content:
            "<p>We may update these Terms. If a change is significant, we will announce it in the Application. Continued use means you accept it.</p>",
        },
        {
          title: "12. Contact",
          content:
            "<p>Questions about these Terms: support@davidyero.com</p>",
        },
      ],
    },
  },
  privacyPolicy: {
    es: {
      lastUpdated: "23 de octubre de 2026",
      sections: [
        {
          title: "1. Responsable del tratamiento",
          content:
            "<p>Agenda Pilates es un servicio de @Davidyero. Tratamos tus datos para que puedas reservar clases en tu estudio y para que el estudio gestione su operación.</p>",
        },
        {
          title: "2. Datos que recopilamos",
          content:
            "<p><strong>Los que tú nos das:</strong> nombre, apellido, correo, documento de identidad, celular y fecha de nacimiento (opcionales estos dos últimos), contraseña cifrada, idioma y tema.</p><p><strong>Los que genera tu uso:</strong> reservas, cancelaciones, asistencia, créditos de tu plan, congelamientos, mensajes que envías al buzón de tu estudio y avisos recibidos.</p><p><strong>Técnicos:</strong> token de notificaciones push del dispositivo y datos mínimos de la sesión.</p>",
        },
        {
          title: "3. Para qué los usamos",
          content:
            "<ul><li>Crear tu cuenta y validar tu correo.</li><li>Gestionar reservas, cupos, lista de espera y asistencia.</li><li>Enviarte recordatorios de clase, avisos de tu estudio y notificaciones de tu plan.</li><li>Mostrar a tu estudio la información necesaria para atenderte.</li><li>Mantener la seguridad del servicio y evitar abusos.</li></ul><p>No vendemos tus datos ni los usamos para publicidad.</p>",
        },
        {
          title: "4. Quién ve tus datos",
          content:
            "<p><strong>Tu estudio:</strong> el equipo del estudio al que perteneces ve tu ficha (datos de contacto, plan, reservas, asistencia, pagos que registre y notas internas que escriba sobre ti).</p><p><strong>Proveedores:</strong> Render (servidores), Resend (correos), Firebase Cloud Messaging (notificaciones push), Cloudflare R2 (imágenes) y Wompi (cobro al estudio). Cada uno trata los datos solo para prestar ese servicio.</p><p>Si tu estudio pertenece a una cadena con créditos compartidos, tus reservas son visibles para las sedes de esa cadena.</p>",
        },
        {
          title: "5. Notificaciones",
          content:
            "<p>Puedes desactivar las notificaciones push desde los ajustes de tu teléfono. Seguirás viendo los avisos dentro de la app y, según el tipo, por correo.</p>",
        },
        {
          title: "6. Conservación y eliminación",
          content:
            "<p>Conservamos tus datos mientras tu cuenta exista. Al eliminar tu cuenta anonimizamos tu información personal y cancelamos tus reservas futuras; el estudio conserva sus registros de operación (pagos y asistencias) sin tus datos personales, por obligaciones contables y de control.</p>",
        },
        {
          title: "7. Tus derechos",
          content:
            "<p>Puedes acceder a tus datos y corregirlos desde Ajustes, y eliminarlos borrando tu cuenta. También puedes escribirnos para ejercer tus derechos de acceso, rectificación, supresión u oposición: support@davidyero.com</p>",
        },
        {
          title: "8. Seguridad",
          content:
            "<p>Las contraseñas se guardan cifradas, el tráfico viaja por HTTPS y cada estudio solo accede a sus propios datos. Ningún sistema es infalible, pero revisamos periódicamente estas medidas.</p>",
        },
        {
          title: "9. Menores de edad",
          content:
            "<p>La Aplicación está dirigida a personas mayores de edad. Si un menor la usa, debe hacerlo con autorización de su representante legal.</p>",
        },
        {
          title: "10. Cambios en esta Política",
          content:
            "<p>Si la actualizamos, lo avisaremos en la Aplicación. Dudas: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "October 23, 2026",
      sections: [
        {
          title: "1. Data controller",
          content:
            "<p>Agenda Pilates is a service by @Davidyero. We process your data so you can book classes at your studio and so the studio can run its operation.</p>",
        },
        {
          title: "2. Data we collect",
          content:
            "<p><strong>What you give us:</strong> first and last name, email, ID document, phone and date of birth (the last two optional), encrypted password, language and theme.</p><p><strong>What your use generates:</strong> bookings, cancellations, attendance, plan credits, freezes, messages you send to your studio's inbox and notices received.</p><p><strong>Technical:</strong> your device's push notification token and minimal session data.</p>",
        },
        {
          title: "3. How we use it",
          content:
            "<ul><li>Create your account and verify your email.</li><li>Manage bookings, capacity, waitlist and attendance.</li><li>Send class reminders, studio notices and plan notifications.</li><li>Show your studio the information it needs to serve you.</li><li>Keep the service secure and prevent abuse.</li></ul><p>We do not sell your data or use it for advertising.</p>",
        },
        {
          title: "4. Who sees your data",
          content:
            "<p><strong>Your studio:</strong> the team of the studio you belong to sees your profile (contact details, plan, bookings, attendance, payments they record and internal notes they write about you).</p><p><strong>Providers:</strong> Render (servers), Resend (email), Firebase Cloud Messaging (push), Cloudflare R2 (images) and Wompi (billing the studio). Each one processes data only to provide that service.</p><p>If your studio belongs to a chain with shared credits, your bookings are visible to that chain's locations.</p>",
        },
        {
          title: "5. Notifications",
          content:
            "<p>You can turn push notifications off in your phone settings. You will still see notices inside the app and, depending on the type, by email.</p>",
        },
        {
          title: "6. Retention and deletion",
          content:
            "<p>We keep your data while your account exists. When you delete your account we anonymize your personal information and cancel your upcoming bookings; the studio keeps its operational records (payments and attendance) without your personal data, for accounting and control obligations.</p>",
        },
        {
          title: "7. Your rights",
          content:
            "<p>You can access and correct your data from Settings, and delete it by deleting your account. You can also write to us to exercise your rights of access, rectification, erasure or objection: support@davidyero.com</p>",
        },
        {
          title: "8. Security",
          content:
            "<p>Passwords are stored encrypted, traffic travels over HTTPS and each studio only accesses its own data. No system is infallible, but we review these measures regularly.</p>",
        },
        {
          title: "9. Minors",
          content:
            "<p>The Application is intended for adults. If a minor uses it, they must do so with their legal guardian's consent.</p>",
        },
        {
          title: "10. Changes to this Policy",
          content:
            "<p>If we update it, we will announce it in the Application. Questions: support@davidyero.com</p>",
        },
      ],
    },
  },
};
