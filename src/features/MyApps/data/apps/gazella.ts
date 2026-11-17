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
  accountDeletion: {
    es: {
      lastUpdated: "17 de noviembre de 2026",
      sections: [
        {
          title: "1. De qué aplicación hablamos",
          content:
            "<p>Esta página explica cómo eliminar tu cuenta de <strong>Gazella</strong>, la app de competencias deportivas desarrollada por David Yepes (@Davidyero), publicada en Google Play con el identificador <code>com.gazellaSports</code> y en la App Store, y disponible también en <strong>gazella.run</strong>.</p>",
        },
        {
          title: "2. Eliminar tu cuenta desde la app",
          content:
            "<p>Es la vía más rápida y el borrado es inmediato:</p><ol><li>Abre Gazella e inicia sesión.</li><li>Ve a <strong>Ajustes</strong>.</li><li>Entra en la pestaña <strong>Cuenta</strong> y baja hasta la <strong>Zona de peligro</strong>.</li><li>Escribe <strong>ELIMINAR</strong> para confirmar.</li><li>Pulsa <strong>Eliminar mi cuenta</strong>.</li></ol><p>La cuenta y sus datos se borran en ese momento, de verdad y no solo ocultos. La acción no se puede deshacer.</p>",
        },
        {
          title: "3. Pedir la eliminación sin la app",
          content:
            "<p>Si ya no tienes la app instalada o no puedes iniciar sesión, escríbenos a <strong>support@davidyero.com</strong> <em>desde la misma dirección de correo de tu cuenta</em>, con el asunto <strong>Eliminar cuenta - Gazella</strong>.</p><p>Usamos esa dirección para comprobar que la cuenta es tuya. Procesamos la solicitud en un plazo máximo de <strong>30 días</strong> y te confirmamos por correo cuando esté hecha.</p>",
        },
        {
          title: "4. Qué datos se eliminan",
          content:
            "<p>Al eliminar la cuenta se borran de forma permanente de nuestros servidores:</p><ul><li>Los datos de la cuenta: nombre, nombre de usuario, correo electrónico, la versión cifrada (hash) de la contraseña y el vínculo con Google o Apple si entraste con ellos.</li><li>Tu perfil público y tu foto de perfil.</li><li>Tus favoritos y las competencias marcadas como \"Voy\".</li><li>Tus recordatorios.</li><li>Las competencias que hayas enviado y sus fotos de portada.</li><li>Tus planes del Coach IA y los datos de salud y forma física que diste para generarlos.</li><li>Las sugerencias que nos hayas enviado desde la app.</li></ul>",
        },
        {
          title: "5. Qué se conserva y durante cuánto tiempo",
          content:
            "<p><strong>Registros de compras.</strong> Las tiendas (App Store y Google Play) y RevenueCat conservan el historial de tus compras según sus propias políticas y obligaciones legales; nosotros no podemos borrarlo.</p><p><strong>Copias de seguridad.</strong> Nuestras copias cifradas de la base de datos pueden conservar una copia hasta <strong>30 días</strong> desde el borrado, tras los cuales se sobrescriben.</p>",
        },
        {
          title: "6. Tu suscripción Pro no se cancela sola",
          content:
            "<p>Eliminar la cuenta <strong>no cancela</strong> una suscripción Pro activa. Las suscripciones las gestiona la tienda, así que debes cancelarla tú desde <strong>Ajustes &gt; tu nombre &gt; Suscripciones</strong> en iPhone o desde <strong>Google Play &gt; Pagos y suscripciones &gt; Suscripciones</strong> en Android. Cancélala antes de borrar la cuenta para no seguir pagando.</p>",
        },
        {
          title: "7. Contacto",
          content:
            "<p>Cualquier duda sobre la eliminación de tu cuenta o de tus datos: <strong>support@davidyero.com</strong>.</p>",
        },
      ],
    },
    en: {
      lastUpdated: "November 17, 2026",
      sections: [
        {
          title: "1. Which app this is about",
          content:
            "<p>This page explains how to delete your <strong>Gazella</strong> account. Gazella is a sports competitions app developed by David Yepes (@Davidyero), published on Google Play under the identifier <code>com.gazellaSports</code> and on the App Store, and also available at <strong>gazella.run</strong>.</p>",
        },
        {
          title: "2. Delete your account from the app",
          content:
            "<p>This is the fastest route and the deletion is immediate:</p><ol><li>Open Gazella and sign in.</li><li>Go to <strong>Settings</strong>.</li><li>Open the <strong>Account</strong> tab and scroll down to the <strong>Danger zone</strong>.</li><li>Type <strong>DELETE</strong> to confirm (<strong>ELIMINAR</strong> if the app is in Spanish).</li><li>Tap <strong>Delete my account</strong>.</li></ol><p>Your account and its data are erased right then, for real and not just hidden. The action cannot be undone.</p>",
        },
        {
          title: "3. Request deletion without the app",
          content:
            "<p>If you no longer have the app installed or cannot sign in, email us at <strong>support@davidyero.com</strong> <em>from the same address as your account</em>, using the subject <strong>Delete account - Gazella</strong>.</p><p>We use that address to verify the account is yours. We process the request within <strong>30 days</strong> at most and confirm by email once it is done.</p>",
        },
        {
          title: "4. What data is deleted",
          content:
            "<p>Deleting your account permanently erases from our servers:</p><ul><li>Your account data: name, username, email address, the hashed version of your password and the link to Google or Apple if you signed in with them.</li><li>Your public profile and profile photo.</li><li>Your favorites and the competitions you marked as \"Going\".</li><li>Your reminders.</li><li>The competitions you submitted and their cover photos.</li><li>Your AI Coach plans and the health and fitness data you provided to generate them.</li><li>The suggestions you sent us from the app.</li></ul>",
        },
        {
          title: "5. What is kept and for how long",
          content:
            "<p><strong>Purchase records.</strong> The stores (App Store and Google Play) and RevenueCat keep your purchase history under their own policies and legal obligations; we cannot delete it.</p><p><strong>Backups.</strong> Our encrypted database backups may keep a copy for up to <strong>30 days</strong> after deletion, after which they are overwritten.</p>",
        },
        {
          title: "6. Your Pro subscription is not cancelled automatically",
          content:
            "<p>Deleting your account <strong>does not cancel</strong> an active Pro subscription. Subscriptions are managed by the store, so you must cancel it yourself from <strong>Settings &gt; your name &gt; Subscriptions</strong> on iPhone or from <strong>Google Play &gt; Payments &amp; subscriptions &gt; Subscriptions</strong> on Android. Cancel it before deleting your account so you are not charged again.</p>",
        },
        {
          title: "7. Contact",
          content:
            "<p>Any questions about deleting your account or your data: <strong>support@davidyero.com</strong>.</p>",
        },
      ],
    },
  },
  termsAndConditions: {
    es: {
      lastUpdated: "17 de noviembre de 2026",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content:
            '<p>Al descargar, instalar o usar Gazella ("la Aplicación"), en el móvil o en gazella.run, aceptas estos Términos y Condiciones y la <a href="/app/gazella/privacy">Política de Privacidad</a>. Si no estás de acuerdo, no uses la Aplicación.</p>',
        },
        {
          title: "2. Qué es Gazella",
          content:
            "<p>Gazella reúne competencias deportivas (running, trail, triatlón, ciclismo, patinaje, aguas abiertas y más) para que las encuentres, las sigas con tus amigos y te prepares con el Coach IA.</p><p>Gazella <strong>no organiza</strong> las competencias ni gestiona sus inscripciones. Fechas, precios, cupos y recorridos pueden cambiar o contener errores: confírmalos siempre con el organizador antes de inscribirte o viajar.</p>",
        },
        {
          title: "3. Tu cuenta",
          content:
            "<p>Para usar algunas funciones necesitas una cuenta, con correo y contraseña o con Google o Apple. Te comprometes a:</p><ul><li>Tener al menos 13 años</li><li>Dar información veraz y mantener tu contraseña en secreto</li><li>No usar la Aplicación para fines ilegales ni intentar acceder a áreas restringidas</li></ul><p>Puedes eliminar tu cuenta cuando quieras: <a href=\"/app/gazella/delete-account\">cómo eliminar tu cuenta</a>.</p>",
        },
        {
          title: "4. Contenido de los usuarios y moderación",
          content:
            "<p>Puedes publicar contenido: tu perfil público y foto, competencias que nos envías con su foto de portada y sugerencias. Eres responsable de lo que publicas y garantizas que tienes derecho a hacerlo.</p><p>Está prohibido publicar contenido ilegal, ofensivo, de odio, sexual, engañoso, spam o que infrinja derechos de terceros. <strong>Las competencias enviadas se revisan antes de publicarse</strong>, y podemos rechazar, editar o retirar cualquier contenido y suspender cuentas que incumplan estas normas. Si ves algo inapropiado, escríbenos a support@davidyero.com y lo revisaremos.</p><p>Al publicar nos das permiso, no exclusivo y gratuito, para mostrar ese contenido dentro de Gazella mientras siga publicado.</p>",
        },
        {
          title: "5. Plan Pro y suscripción autorrenovable",
          content:
            "<p>Gazella es gratuita, con anuncios. El plan <strong>Pro</strong> es una suscripción de pago que incluye el Coach IA y otras ventajas indicadas en la app.</p><ul><li>El precio y la duración de cada periodo se muestran en la app antes de comprar.</li><li>El pago se carga en tu cuenta de Apple o de Google al confirmar la compra.</li><li><strong>La suscripción se renueva automáticamente</strong> al final de cada periodo, por el mismo precio, salvo que la canceles al menos 24 horas antes de que termine.</li><li>Puedes gestionarla y cancelarla en <strong>Ajustes &gt; tu nombre &gt; Suscripciones</strong> (iPhone) o en <strong>Google Play &gt; Pagos y suscripciones &gt; Suscripciones</strong> (Android). Al cancelar, conservas Pro hasta el final del periodo pagado.</li><li>Desinstalar la app o eliminar tu cuenta <strong>no cancela</strong> la suscripción.</li><li>Si se ofrece una prueba gratuita, la parte no usada se pierde al comprar la suscripción.</li><li>Los reembolsos los gestionan Apple o Google según sus políticas.</li></ul>",
        },
        {
          title: "6. Coach IA: no es consejo médico",
          content:
            "<p>El Coach IA genera planes de entrenamiento con inteligencia artificial a partir de lo que tú le cuentas. <strong>No es consejo médico, diagnóstico ni tratamiento</strong>, y no sustituye a un médico, fisioterapeuta o entrenador profesional.</p><ul><li>Consulta a un profesional de la salud antes de empezar un plan, sobre todo si estás embarazada, tienes una condición cardíaca, lesiones o cualquier problema de salud.</li><li>Los planes pueden contener errores o no ajustarse a ti. Adáptalos a tu estado y para si sientes dolor, mareo o malestar.</li><li>Sigues un plan bajo tu propia responsabilidad.</li></ul>",
        },
        {
          title: "7. Directorio de especialistas",
          content:
            "<p>El directorio muestra profesionales (fisioterapia, nutrición, medicina, entrenadores) a título informativo. No somos parte de la relación que establezcas con ellos ni respondemos por sus servicios.</p>",
        },
        {
          title: "8. Propiedad Intelectual",
          content:
            "<p>La Aplicación, su diseño, marca y código pertenecen a David Yepes (@Davidyero) o a sus licenciantes. No puedes copiar, modificar o distribuir ninguna parte sin consentimiento previo por escrito.</p>",
        },
        {
          title: "9. Limitación de Responsabilidad",
          content:
            '<p>Gazella se ofrece "tal cual", sin garantías. En la medida en que la ley lo permita, no respondemos de:</p><ul><li>Interrupciones del servicio</li><li>Errores o cambios en la información de las competencias</li><li>Lesiones o daños derivados de entrenar o competir, sigas o no un plan del Coach IA</li><li>Daños derivados del uso de la Aplicación</li></ul>',
        },
        {
          title: "10. Modificaciones",
          content:
            "<p>Podemos modificar estos Términos. Publicaremos la versión nueva con su fecha de actualización y, si el cambio es importante, te avisaremos en la Aplicación.</p>",
        },
        {
          title: "11. Contacto",
          content:
            "<p>Si tienes preguntas sobre estos Términos, contáctanos en: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "November 17, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            '<p>By downloading, installing or using Gazella ("the Application"), on mobile or at gazella.run, you agree to these Terms and Conditions and to the <a href="/app/gazella/privacy">Privacy Policy</a>. If you do not agree, do not use the Application.</p>',
        },
        {
          title: "2. What Gazella is",
          content:
            "<p>Gazella gathers sports competitions (running, trail, triathlon, cycling, skating, open water and more) so you can find them, follow them with your friends and get ready with the AI Coach.</p><p>Gazella <strong>does not organize</strong> the competitions or handle their registrations. Dates, prices, spots and courses may change or contain errors: always confirm them with the organizer before registering or travelling.</p>",
        },
        {
          title: "3. Your account",
          content:
            "<p>Some features require an account, with email and password or with Google or Apple. You agree to:</p><ul><li>Be at least 13 years old</li><li>Provide accurate information and keep your password secret</li><li>Not use the Application for illegal purposes or try to access restricted areas</li></ul><p>You can delete your account at any time: <a href=\"/app/gazella/delete-account\">how to delete your account</a>.</p>",
        },
        {
          title: "4. User content and moderation",
          content:
            "<p>You can post content: your public profile and photo, competitions you submit with their cover photo, and suggestions. You are responsible for what you post and confirm you have the right to post it.</p><p>Illegal, offensive, hateful, sexual, misleading or spam content, or content that infringes third-party rights, is not allowed. <strong>Submitted competitions are reviewed before they are published</strong>, and we may reject, edit or remove any content and suspend accounts that break these rules. If you see something inappropriate, email support@davidyero.com and we will review it.</p><p>By posting, you give us a non-exclusive, free permission to display that content within Gazella while it remains published.</p>",
        },
        {
          title: "5. Pro plan and auto-renewing subscription",
          content:
            "<p>Gazella is free, with ads. The <strong>Pro</strong> plan is a paid subscription that includes the AI Coach and the other benefits shown in the app.</p><ul><li>The price and length of each period are shown in the app before you buy.</li><li>Payment is charged to your Apple or Google account when you confirm the purchase.</li><li><strong>The subscription renews automatically</strong> at the end of each period, at the same price, unless you cancel it at least 24 hours before it ends.</li><li>You can manage and cancel it in <strong>Settings &gt; your name &gt; Subscriptions</strong> (iPhone) or in <strong>Google Play &gt; Payments &amp; subscriptions &gt; Subscriptions</strong> (Android). After cancelling, you keep Pro until the end of the paid period.</li><li>Uninstalling the app or deleting your account <strong>does not cancel</strong> the subscription.</li><li>If a free trial is offered, any unused part is forfeited when you buy the subscription.</li><li>Refunds are handled by Apple or Google under their policies.</li></ul>",
        },
        {
          title: "6. AI Coach: not medical advice",
          content:
            "<p>The AI Coach generates training plans with artificial intelligence based on what you tell it. <strong>It is not medical advice, diagnosis or treatment</strong>, and it does not replace a doctor, physiotherapist or professional coach.</p><ul><li>Talk to a health professional before starting a plan, especially if you are pregnant, have a heart condition, injuries or any health issue.</li><li>Plans may contain errors or not suit you. Adapt them to your condition and stop if you feel pain, dizziness or discomfort.</li><li>You follow any plan at your own risk.</li></ul>",
        },
        {
          title: "7. Specialists directory",
          content:
            "<p>The directory lists professionals (physiotherapy, nutrition, medicine, coaches) for information only. We are not part of any relationship you establish with them and are not responsible for their services.</p>",
        },
        {
          title: "8. Intellectual Property",
          content:
            "<p>The Application, its design, brand and code belong to David Yepes (@Davidyero) or his licensors. You may not copy, modify or distribute any part of it without prior written consent.</p>",
        },
        {
          title: "9. Limitation of Liability",
          content:
            '<p>Gazella is provided "as is", without warranties. To the extent permitted by law, we are not responsible for:</p><ul><li>Service interruptions</li><li>Errors or changes in competition information</li><li>Injuries or damages from training or racing, whether or not you follow an AI Coach plan</li><li>Damages arising from use of the Application</li></ul>',
        },
        {
          title: "10. Modifications",
          content:
            "<p>We may modify these Terms. We will publish the new version with its update date and, if the change is significant, let you know in the Application.</p>",
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
      lastUpdated: "17 de noviembre de 2026",
      sections: [
        {
          title: "1. Introducción y responsable",
          content:
            "<p>Esta Política explica qué datos trata <strong>Gazella</strong> (la app para iOS y Android y la web gazella.run), para qué, con quién los compartimos y cómo ejercer tus derechos. El responsable es David Yepes (@Davidyero), Colombia, contacto: support@davidyero.com.</p>",
        },
        {
          title: "2. Cuenta e inicio de sesión",
          content:
            "<p>Al crear una cuenta guardamos tu <strong>nombre, nombre de usuario y correo electrónico</strong>, y tu contraseña solo como <strong>hash</strong> (nunca tal cual la escribiste). Si entras con <strong>Google</strong> o con <strong>Apple</strong>, recibimos de ellos tu correo, tu nombre y un identificador de cuenta; con Apple puedes ocultar tu correo real.</p>",
        },
        {
          title: "3. Fotos que subes",
          content:
            "<p>Si subes una <strong>foto de perfil</strong> o la <strong>foto de portada</strong> de una competencia que nos envías, la guardamos en <strong>Cloudflare R2</strong>. La foto de perfil se ve en tu perfil público y las portadas, en las competencias publicadas. Solo accedemos a las imágenes que eliges subir, no a tu galería.</p>",
        },
        {
          title: "4. Ubicación aproximada",
          content:
            "<p>Si lo permites, usamos tu <strong>ubicación aproximada</strong> únicamente para ordenar las competencias de la más cercana a la más lejana. Se usa en el momento y <strong>no se guarda</strong> en nuestros servidores. Puedes negar el permiso y la app sigue funcionando.</p>",
        },
        {
          title: "5. Coach IA y datos de salud",
          content:
            "<p>Para generar tu plan, el formulario del Coach IA (Pro) te pide datos de salud y forma física: <strong>embarazo, condición cardíaca, lesiones, notas que quieras añadir y tu nivel</strong>, junto con la competencia objetivo.</p><ul><li>Solo los tratamos si <strong>aceptas expresamente</strong> su uso en el formulario.</li><li>Se guardan <strong>cifrados</strong> en nuestra base de datos.</li><li>Se envían a <strong>Anthropic (Claude)</strong>, el proveedor de inteligencia artificial que genera el plan, solo para eso.</li><li>Puedes borrarlos eliminando tus planes o tu cuenta.</li></ul>",
        },
        {
          title: "6. Lo que haces en Gazella",
          content:
            "<p>Guardamos tus <strong>favoritos</strong>, las competencias marcadas como <strong>\"Voy\"</strong> (y la distancia, que ven otros usuarios en \"quién más va\"), tus <strong>recordatorios</strong>, las competencias que nos <strong>envías</strong> y las <strong>sugerencias</strong> que nos escribes, para darte el servicio y responderte.</p>",
        },
        {
          title: "7. Compras (RevenueCat, App Store y Google Play)",
          content:
            "<p>La suscripción Pro se compra en la App Store o en Google Play, y la validamos con <strong>RevenueCat</strong>, que trata un identificador de usuario y el estado de tus compras para saber tu plan. <strong>No vemos ni guardamos los datos de tu tarjeta</strong>.</p>",
        },
        {
          title: "8. Publicidad (Google AdMob)",
          content:
            "<p>El plan gratuito muestra anuncios de <strong>Google AdMob</strong>, que puede usar el <strong>identificador de publicidad</strong> del dispositivo. Antes de anuncios personalizados te pedimos consentimiento con la herramienta de Google (<strong>UMP</strong>) y, en iOS, con el aviso de <strong>App Tracking Transparency (ATT)</strong>. Si lo rechazas, verás anuncios no personalizados. Puedes cambiar tu decisión en los ajustes de la app o del teléfono.</p>",
        },
        {
          title: "9. Analítica y fallos",
          content:
            "<ul><li><strong>Firebase Analytics</strong> mide de forma agregada cómo se usa la app. Está <strong>apagado hasta que des tu consentimiento</strong>.</li><li><strong>Firebase Crashlytics</strong> registra los fallos de la app (modelo del dispositivo, versión del sistema y el registro técnico del error) para poder corregirlos.</li><li>En la web gazella.run, los errores se registran con <strong>Sentry</strong> con el mismo fin.</li></ul>",
        },
        {
          title: "10. Correos",
          content:
            "<p>Enviamos correos <strong>transaccionales</strong> (verificar tu correo, recuperar la contraseña, avisos de tu cuenta) a través de <strong>Resend</strong>. No te enviamos publicidad por correo.</p>",
        },
        {
          title: "11. Dónde se guardan y con quién se comparten",
          content:
            "<p>Nuestro servidor y la base de datos <strong>PostgreSQL</strong> están en <strong>Render</strong>, en <strong>Estados Unidos</strong>, así que tus datos se transfieren a ese país. Trabajamos con estos proveedores, cada uno con su propia política de privacidad: Render, Cloudflare (R2), Anthropic, Google (inicio de sesión, AdMob y Firebase), Apple (inicio de sesión y App Store), RevenueCat, Resend y Sentry.</p><p><strong>No vendemos ni alquilamos tus datos.</strong> Solo los compartimos con estos proveedores para prestar el servicio o con autoridades cuando la ley lo exija.</p>",
        },
        {
          title: "12. Base legal",
          content:
            "<ul><li><strong>Ejecutar el servicio</strong> que pides: cuenta, favoritos, \"Voy\", recordatorios, envíos, suscripción y correos transaccionales.</li><li><strong>Tu consentimiento</strong>: datos de salud del Coach IA, ubicación, anuncios personalizados y Firebase Analytics. Puedes retirarlo cuando quieras.</li><li><strong>Interés legítimo</strong>: seguridad, prevención de abuso y registro de fallos.</li><li><strong>Obligaciones legales</strong>, cuando apliquen.</li></ul>",
        },
        {
          title: "13. Cuánto tiempo los guardamos",
          content:
            "<p>Mientras tengas la cuenta. Al eliminarla, borramos tus datos de inmediato; las copias de seguridad cifradas se sobrescriben en un máximo de <strong>30 días</strong>. La ubicación no se guarda nunca. Los registros de compras los conservan las tiendas y RevenueCat según sus políticas.</p>",
        },
        {
          title: "14. Tus derechos",
          content:
            "<p>Puedes <strong>acceder</strong> a tus datos, <strong>rectificarlos</strong> desde tu perfil, <strong>borrarlos</strong>, oponerte a su tratamiento o retirar tu consentimiento. Para eliminar la cuenta y todos sus datos, sigue <a href=\"/app/gazella/delete-account\">cómo eliminar tu cuenta de Gazella</a>. Para el resto, escríbenos a support@davidyero.com. En Colombia te ampara la Ley 1581 de 2012 (habeas data).</p>",
        },
        {
          title: "15. Seguridad",
          content:
            "<p>Los datos viajan cifrados (HTTPS), las contraseñas se guardan con hash y los datos de salud, cifrados. Aplicamos medidas razonables, aunque ningún sistema es infalible.</p>",
        },
        {
          title: "16. Menores",
          content:
            "<p>Gazella no está dirigida a menores de 13 años y no recopilamos a sabiendas sus datos. Si crees que un menor a tu cargo nos ha dado datos, escríbenos a support@davidyero.com y los eliminaremos.</p>",
        },
        {
          title: "17. Cambios y contacto",
          content:
            "<p>Si cambiamos esta Política, publicaremos la versión nueva con su fecha y te avisaremos en la app si el cambio es importante. Para cualquier pregunta sobre privacidad: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "November 17, 2026",
      sections: [
        {
          title: "1. Introduction and controller",
          content:
            "<p>This Policy explains what data <strong>Gazella</strong> (the iOS and Android app and the gazella.run website) handles, why, who we share it with and how to exercise your rights. The controller is David Yepes (@Davidyero), Colombia, contact: support@davidyero.com.</p>",
        },
        {
          title: "2. Account and sign-in",
          content:
            "<p>When you create an account we store your <strong>name, username and email address</strong>, and your password only as a <strong>hash</strong> (never as you typed it). If you sign in with <strong>Google</strong> or <strong>Apple</strong>, we receive your email, your name and an account identifier from them; with Apple you can hide your real email.</p>",
        },
        {
          title: "3. Photos you upload",
          content:
            "<p>If you upload a <strong>profile photo</strong> or the <strong>cover photo</strong> of a competition you submit, we store it on <strong>Cloudflare R2</strong>. Your profile photo is shown on your public profile and cover photos on published competitions. We only access the images you choose to upload, not your gallery.</p>",
        },
        {
          title: "4. Approximate location",
          content:
            "<p>If you allow it, we use your <strong>approximate location</strong> only to sort competitions from nearest to farthest. It is used on the spot and <strong>is not stored</strong> on our servers. You can deny the permission and the app keeps working.</p>",
        },
        {
          title: "5. AI Coach and health data",
          content:
            "<p>To generate your plan, the AI Coach (Pro) form asks for health and fitness data: <strong>pregnancy, heart condition, injuries, any notes you add and your level</strong>, along with your target competition.</p><ul><li>We only process it if you <strong>expressly accept</strong> its use in the form.</li><li>It is stored <strong>encrypted</strong> in our database.</li><li>It is sent to <strong>Anthropic (Claude)</strong>, the artificial intelligence provider that generates the plan, for that purpose only.</li><li>You can erase it by deleting your plans or your account.</li></ul>",
        },
        {
          title: "6. What you do in Gazella",
          content:
            "<p>We store your <strong>favorites</strong>, the competitions you mark as <strong>\"Going\"</strong> (and the distance, which other users see in \"who else is going\"), your <strong>reminders</strong>, the competitions you <strong>submit</strong> and the <strong>suggestions</strong> you send us, to provide the service and reply to you.</p>",
        },
        {
          title: "7. Purchases (RevenueCat, App Store and Google Play)",
          content:
            "<p>The Pro subscription is bought on the App Store or Google Play, and we validate it with <strong>RevenueCat</strong>, which processes a user identifier and your purchase status to know your plan. <strong>We never see or store your card details</strong>.</p>",
        },
        {
          title: "8. Advertising (Google AdMob)",
          content:
            "<p>The free plan shows ads from <strong>Google AdMob</strong>, which may use your device's <strong>advertising identifier</strong>. Before personalized ads we ask for your consent with Google's tool (<strong>UMP</strong>) and, on iOS, with the <strong>App Tracking Transparency (ATT)</strong> prompt. If you decline, you will see non-personalized ads. You can change your choice in the app or phone settings.</p>",
        },
        {
          title: "9. Analytics and crashes",
          content:
            "<ul><li><strong>Firebase Analytics</strong> measures in aggregate how the app is used. It is <strong>off until you give your consent</strong>.</li><li><strong>Firebase Crashlytics</strong> records app crashes (device model, operating system version and the technical error log) so we can fix them.</li><li>On the gazella.run website, errors are recorded with <strong>Sentry</strong> for the same purpose.</li></ul>",
        },
        {
          title: "10. Emails",
          content:
            "<p>We send <strong>transactional</strong> emails (verifying your email, password reset, notices about your account) through <strong>Resend</strong>. We do not send you advertising by email.</p>",
        },
        {
          title: "11. Where data is stored and who it is shared with",
          content:
            "<p>Our server and <strong>PostgreSQL</strong> database run on <strong>Render</strong>, in the <strong>United States</strong>, so your data is transferred to that country. We work with these providers, each with its own privacy policy: Render, Cloudflare (R2), Anthropic, Google (sign-in, AdMob and Firebase), Apple (sign-in and App Store), RevenueCat, Resend and Sentry.</p><p><strong>We do not sell or rent your data.</strong> We only share it with these providers to run the service, or with authorities when the law requires it.</p>",
        },
        {
          title: "12. Legal basis",
          content:
            "<ul><li><strong>Providing the service</strong> you ask for: account, favorites, \"Going\", reminders, submissions, subscription and transactional emails.</li><li><strong>Your consent</strong>: AI Coach health data, location, personalized ads and Firebase Analytics. You can withdraw it at any time.</li><li><strong>Legitimate interest</strong>: security, abuse prevention and crash reporting.</li><li><strong>Legal obligations</strong>, where they apply.</li></ul>",
        },
        {
          title: "13. How long we keep it",
          content:
            "<p>For as long as you have an account. When you delete it, we erase your data immediately; encrypted backups are overwritten within <strong>30 days</strong> at most. Location is never stored. Purchase records are kept by the stores and RevenueCat under their policies.</p>",
        },
        {
          title: "14. Your rights",
          content:
            "<p>You can <strong>access</strong> your data, <strong>correct</strong> it from your profile, <strong>erase</strong> it, object to its processing or withdraw your consent. To delete your account and all its data, follow <a href=\"/app/gazella/delete-account\">how to delete your Gazella account</a>. For anything else, email support@davidyero.com. In Colombia you are protected by Law 1581 of 2012 (habeas data).</p>",
        },
        {
          title: "15. Security",
          content:
            "<p>Data travels encrypted (HTTPS), passwords are stored as hashes and health data is encrypted. We apply reasonable measures, although no system is infallible.</p>",
        },
        {
          title: "16. Children",
          content:
            "<p>Gazella is not directed at children under 13 and we do not knowingly collect their data. If you believe a child in your care has given us data, email support@davidyero.com and we will delete it.</p>",
        },
        {
          title: "17. Changes and contact",
          content:
            "<p>If we change this Policy, we will publish the new version with its date and let you know in the app if the change is significant. For any privacy question: support@davidyero.com</p>",
        },
      ],
    },
  },
};
