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
      lastUpdated: "20 de noviembre de 2026",
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
            "<p>Al eliminar la cuenta se borran de forma permanente de nuestros servidores:</p><ul><li>Los datos de la cuenta: nombre, nombre de usuario, correo electrónico, la versión cifrada (hash) de la contraseña, los datos de tu perfil y el vínculo con Google o Apple si entraste con ellos. Si entraste con Apple, además revocamos el acceso de Gazella en Apple.</li><li>Tu foto de perfil y las demás imágenes que subiste a nuestro almacenamiento (Cloudflare R2), salvo las portadas de competencias ya aprobadas (ver el punto 5).</li><li>Tus favoritos, las competencias marcadas como \"Voy\", tus recordatorios y tus enlaces de invitación.</li><li>Las competencias que enviaste y <strong>no están aprobadas</strong> (pendientes, rechazadas o archivadas), con sus portadas.</li><li>Tu solicitud para el directorio de especialistas y, si se aprobó, tu perfil publicado en el directorio.</li><li>Tus planes del Coach IA, las sesiones marcadas como hechas y los datos de salud y forma física que diste para generarlos.</li><li>Las sugerencias y los reportes de planes que nos enviaste desde la app.</li><li>El estado de tu suscripción en nuestra base de datos y los códigos promocionales que canjeaste.</li></ul>",
        },
        {
          title: "5. Qué se conserva y durante cuánto tiempo",
          content:
            "<ul><li><strong>Competencias aprobadas.</strong> Las competencias que enviaste y ya están publicadas se conservan, con su portada, porque forman parte del calendario público, pero <strong>sin ningún vínculo con tu cuenta</strong>.</li><li><strong>Reportes de errores</strong> sobre competencias: se conservan para corregir la información, también sin vínculo contigo.</li><li><strong>Avisos de compra de RevenueCat.</strong> Los guardamos <strong>90 días</strong> desde que llegan, aunque elimines la cuenta antes; después se vacían y solo queda un registro técnico sin datos tuyos.</li><li><strong>Registros de compras de las tiendas.</strong> App Store, Google Play y RevenueCat conservan el historial de tus compras según sus propias políticas y obligaciones legales; nosotros no podemos borrarlo.</li><li><strong>Analítica y avisos internos.</strong> Los eventos de uso de PostHog (sin tu nombre ni tu correo) y los avisos internos de Telegram no se borran con la cuenta.</li><li><strong>Copias de seguridad.</strong> Nuestras copias cifradas de la base de datos pueden conservar una copia hasta <strong>30 días</strong> desde el borrado, tras los cuales se sobrescriben.</li></ul>",
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
      lastUpdated: "November 20, 2026",
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
            "<p>Deleting your account permanently erases from our servers:</p><ul><li>Your account data: name, username, email address, the hashed version of your password, your profile data and the link to Google or Apple if you signed in with them. If you signed in with Apple, we also revoke Gazella's access in Apple.</li><li>Your profile photo and the other images you uploaded to our storage (Cloudflare R2), except the covers of competitions that are already approved (see point 5).</li><li>Your favorites, the competitions you marked as \"Going\", your reminders and your invite links.</li><li>The competitions you submitted that are <strong>not approved</strong> (pending, rejected or archived), with their covers.</li><li>Your specialists directory application and, if it was approved, your published profile in the directory.</li><li>Your AI Coach plans, the sessions marked as done and the health and fitness data you provided to generate them.</li><li>The suggestions and plan reports you sent us from the app.</li><li>Your subscription status in our database and the promo codes you redeemed.</li></ul>",
        },
        {
          title: "5. What is kept and for how long",
          content:
            "<ul><li><strong>Approved competitions.</strong> Competitions you submitted that are already published are kept, with their cover, because they are part of the public calendar, but <strong>with no link to your account</strong>.</li><li><strong>Error reports</strong> about competitions: kept to correct the information, also with no link to you.</li><li><strong>RevenueCat purchase notices.</strong> We keep them for <strong>90 days</strong> from when they arrive, even if you delete your account earlier; after that they are emptied and only a technical record with none of your data remains.</li><li><strong>Store purchase records.</strong> The App Store, Google Play and RevenueCat keep your purchase history under their own policies and legal obligations; we cannot delete it.</li><li><strong>Analytics and internal notices.</strong> PostHog usage events (without your name or email) and internal Telegram notices are not erased with the account.</li><li><strong>Backups.</strong> Our encrypted database backups may keep a copy for up to <strong>30 days</strong> after deletion, after which they are overwritten.</li></ul>",
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
      lastUpdated: "20 de noviembre de 2026",
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
            "<p>Para usar algunas funciones necesitas una cuenta, con correo y contraseña o con Google o Apple. Te comprometes a:</p><ul><li>Tener al menos 18 años</li><li>Dar información veraz y mantener tu contraseña en secreto</li><li>No usar la Aplicación para fines ilegales ni intentar acceder a áreas restringidas</li></ul><p>Puedes eliminar tu cuenta cuando quieras: <a href=\"/app/gazella/delete-account\">cómo eliminar tu cuenta</a>.</p>",
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
            "<p>El Coach IA genera planes de entrenamiento con inteligencia artificial a partir de lo que tú le cuentas. Solo pueden usarlo personas de 18 años o más. <strong>No es consejo médico, diagnóstico ni tratamiento</strong>, y no sustituye a un médico, fisioterapeuta o entrenador profesional.</p><ul><li>Consulta a un profesional de la salud antes de empezar un plan, sobre todo si estás embarazada, tienes una condición cardíaca, lesiones o cualquier problema de salud.</li><li>Los planes pueden contener errores o no ajustarse a ti. Adáptalos a tu estado y para si sientes dolor, mareo o malestar.</li><li>Sigues un plan bajo tu propia responsabilidad.</li></ul>",
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
      lastUpdated: "November 20, 2026",
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
            "<p>Some features require an account, with email and password or with Google or Apple. You agree to:</p><ul><li>Be at least 18 years old</li><li>Provide accurate information and keep your password secret</li><li>Not use the Application for illegal purposes or try to access restricted areas</li></ul><p>You can delete your account at any time: <a href=\"/app/gazella/delete-account\">how to delete your account</a>.</p>",
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
            "<p>The AI Coach generates training plans with artificial intelligence based on what you tell it. It can only be used by people aged 18 or over. <strong>It is not medical advice, diagnosis or treatment</strong>, and it does not replace a doctor, physiotherapist or professional coach.</p><ul><li>Talk to a health professional before starting a plan, especially if you are pregnant, have a heart condition, injuries or any health issue.</li><li>Plans may contain errors or not suit you. Adapt them to your condition and stop if you feel pain, dizziness or discomfort.</li><li>You follow any plan at your own risk.</li></ul>",
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
      lastUpdated: "20 de noviembre de 2026",
      sections: [
        {
          title: "1. Introducción y responsable",
          content:
            "<p>Esta Política explica qué datos trata <strong>Gazella</strong> (la app para iOS y Android y la web gazella.run), para qué, con quién los compartimos y cómo ejercer tus derechos.</p><p>El responsable del tratamiento es <strong>David Yepes</strong> (@Davidyero), persona natural con domicilio en <strong>Colombia</strong>, que desarrolla y publica Gazella. El único canal de contacto, para privacidad y para todo lo demás, es <strong>support@davidyero.com</strong>.</p>",
        },
        {
          title: "2. Cuenta e inicio de sesión",
          content:
            "<p>Al crear una cuenta guardamos tu <strong>nombre, nombre de usuario y correo electrónico</strong>, y tu contraseña solo como <strong>hash</strong> (nunca tal cual la escribiste). Si entras con <strong>Google</strong> o con <strong>Apple</strong>, recibimos de ellos tu correo, tu nombre y un identificador de cuenta; con Apple puedes ocultar tu correo real.</p><p>También guardamos lo que configuras en tu perfil (país, deportes favoritos, idioma y si tu perfil es público), la plataforma desde la que te registraste (iOS, Android o web), la fecha en que aceptaste los términos y las fechas de tu último acceso.</p>",
        },
        {
          title: "3. Fotos que subes",
          content:
            "<p>Si subes una <strong>foto de perfil</strong> o la <strong>foto de portada</strong> de una competencia que nos envías, la guardamos en <strong>Cloudflare R2</strong>. La foto de perfil se ve en tu perfil público y las portadas, en las competencias publicadas. Solo accedemos a las imágenes que eliges subir, no a tu galería.</p>",
        },
        {
          title: "4. Ubicación",
          content:
            "<p>Si lo permites, la app usa tu ubicación <strong>solo cuando abres la pestaña \"Cerca de mí\"</strong>, para mostrarte las competencias a menos de 150 km.</p><ul><li>En Android pedimos únicamente el permiso de <strong>ubicación aproximada</strong>. En iPhone recibimos la precisión que tú autorices en el sistema.</li><li>Antes de enviarla, la app redondea las coordenadas a <strong>4 decimales (unos 11 metros)</strong> y las manda a nuestro servidor dentro de esa búsqueda.</li><li><strong>No la guardamos</strong> en nuestra base de datos ni la asociamos a tu perfil, y no entra en nuestra analítica ni en nuestro registro de errores.</li></ul><p>Puedes negar el permiso y la app sigue funcionando.</p>",
        },
        {
          title: "5. Coach IA y datos de salud",
          content:
            "<p>El Coach IA es parte del plan Pro y <strong>solo pueden usarlo personas de 18 años o más</strong>. Para generar tu plan, el formulario te pide:</p><ul><li>La competencia y la distancia objetivo, y tu objetivo (terminarla o un tiempo concreto).</li><li>Tu <strong>edad</strong> y, si quieres, tu <strong>sexo</strong>, <strong>peso</strong> y <strong>altura</strong>.</li><li>Tu <strong>nivel</strong>, tu <strong>volumen semanal</strong> en kilómetros u horas y, si quieres, tus <strong>marcas recientes</strong>.</li><li>Los días por semana y los minutos por sesión que tienes para entrenar.</li><li>Tus <strong>condiciones de salud</strong> (condición cardíaca, embarazo, lesión reciente u otra) y, si quieres, <strong>notas de salud</strong>.</li><li>El <strong>equipo</strong> que tienes (pulsómetro, potenciómetro, rodillo, gimnasio, acceso a pista o a cuestas) y el <strong>terreno</strong> donde entrenas.</li></ul><p>Además guardamos el plan generado y las sesiones que marcas como hechas.</p><ul><li>Antes de generar tu primer plan, la app te pide que <strong>aceptes expresamente</strong> el envío de estos datos.</li><li>El formulario se guarda <strong>cifrado</strong> en nuestra base de datos.</li><li>Se envía a <strong>Anthropic (Claude)</strong>, el proveedor de inteligencia artificial que genera el plan, solo para eso.</li><li>Se borra al eliminar tu cuenta. Si quieres borrar un plan concreto sin eliminar la cuenta, escríbenos a support@davidyero.com.</li></ul>",
        },
        {
          title: "6. Lo que haces en Gazella",
          content:
            "<p>Para darte el servicio y responderte guardamos:</p><ul><li>Tus <strong>favoritos</strong> y las competencias marcadas como <strong>\"Voy\"</strong>, con la distancia en la que vas. Si tu perfil es público, otros usuarios te ven en \"quién más va\".</li><li>Tus <strong>recordatorios</strong> de competencias.</li><li>Los <strong>enlaces de invitación</strong> que creas y quién se unió con ellos.</li><li>Las competencias que nos <strong>envías</strong>: se revisan y, si se aprueban, se publican.</li><li>Los <strong>reportes de errores</strong> que haces sobre una competencia (motivo y nota).</li><li>Las <strong>sugerencias</strong> que nos escribes y los reportes sobre un plan del Coach, junto con la plataforma y la versión de la app.</li></ul>",
        },
        {
          title: "7. Directorio de especialistas",
          content:
            "<p>Si pides aparecer en el directorio de especialistas desde la app, guardamos lo que escribes en el formulario: <strong>tipo de especialista</strong>, <strong>nombre</strong>, <strong>biografía</strong>, <strong>especialidades</strong>, <strong>deportes</strong>, <strong>país y ciudad</strong>, <strong>modalidad</strong> (en línea o presencial), los <strong>datos de contacto</strong> que elijas (WhatsApp, correo, web o Instagram; al menos uno) y tus <strong>servicios</strong> con precio, moneda y duración.</p><ul><li>Los usamos para <strong>revisar tu solicitud</strong>.</li><li>Si la aprobamos, <strong>esos datos se publican en el directorio</strong> y cualquier persona que use Gazella puede verlos y contactarte directamente.</li><li>Si la rechazamos, guardamos la solicitud y el motivo mientras tengas la cuenta.</li><li>Al eliminar tu cuenta se borran la solicitud y el perfil publicado. Para cambiarlo o retirarlo antes, escríbenos a support@davidyero.com.</li></ul>",
        },
        {
          title: "8. Compras (RevenueCat, App Store y Google Play)",
          content:
            "<p>La suscripción Pro se compra en la App Store o en Google Play, y la validamos con <strong>RevenueCat</strong>, que trata tu identificador de usuario y el estado de tus compras para saber tu plan. <strong>No vemos ni guardamos los datos de tu tarjeta</strong>.</p><p>Guardamos el estado de tu plan (activo o no, y su vencimiento) y los códigos promocionales que canjeas. Los avisos que RevenueCat nos envía con cada compra, renovación o cancelación (con tu identificador de usuario, el producto, la tienda, el precio y las fechas) se guardan <strong>90 días</strong> para resolver incidencias; después se vacían y solo queda un registro técnico del aviso (su identificador y su tipo), sin datos tuyos.</p>",
        },
        {
          title: "9. Publicidad (Google AdMob)",
          content:
            "<p>El plan gratuito muestra anuncios de <strong>Google AdMob</strong>, que puede usar el <strong>identificador de publicidad</strong> del dispositivo.</p><ul><li>En la <strong>Unión Europea, el Espacio Económico Europeo, el Reino Unido y Suiza</strong> te pedimos consentimiento con la herramienta de Google (<strong>UMP</strong>) antes de mostrar anuncios personalizados. Si lo rechazas, verás anuncios no personalizados, y puedes cambiar tu decisión en los ajustes de la app.</li><li><strong>Fuera de esas regiones</strong> la ley no exige ese formulario y los anuncios son personalizados por defecto. Puedes limitarlos desde los ajustes de privacidad de tu teléfono.</li><li>En <strong>iPhone</strong>, AdMob solo accede al identificador de publicidad si aceptas el aviso de seguimiento de Apple (<strong>App Tracking Transparency</strong>).</li><li>Si la herramienta de consentimiento falla, solo pedimos anuncios no personalizados.</li></ul>",
        },
        {
          title: "10. Analítica y fallos",
          content:
            "<ul><li><strong>Firebase Analytics</strong> mide de forma agregada qué pantallas y funciones se usan, sin el identificador de publicidad y sin datos personales en los eventos. Arranca apagado y se enciende según tu región: en la Unión Europea, el Espacio Económico Europeo, el Reino Unido y Suiza, <strong>solo si lo aceptas</strong> en el formulario de consentimiento; <strong>fuera de esas regiones se activa siempre</strong>.</li><li><strong>Firebase Crashlytics</strong> registra los fallos de la app (modelo del dispositivo, versión del sistema y el registro técnico del error) para poder corregirlos.</li><li><strong>Sentry</strong> registra los errores técnicos de la web gazella.run y de nuestro servidor. En el servidor solo guarda el método, la ruta y la traza del error, sin el contenido de la petición ni datos tuyos.</li><li><strong>PostHog</strong> (servidores en Estados Unidos) mide qué funciones del servidor se usan: por cada petición registra la ruta (sin sus valores), el método, la respuesta, el tiempo que tardó, si viene de iOS, Android o web y un identificador interno de tu cuenta, sin tu nombre ni tu correo. No recibe el contenido de la petición, tu IP ni tu ubicación. Lo usamos para saber qué funciones se usan y detectar fallos.</li></ul>",
        },
        {
          title: "11. Avisos internos por Telegram",
          content:
            "<p>Para atender la app, el responsable recibe avisos en un chat privado de <strong>Telegram</strong>:</p><ul><li>Cuando alguien crea una cuenta: su <strong>nombre de usuario, nombre y correo</strong>, la plataforma, el método de registro y la fecha.</li><li>Cuando alguien envía una sugerencia o un reporte de un plan: el <strong>texto</strong>, la plataforma, la versión de la app y el identificador interno de la cuenta.</li></ul><p>Solo se usan para atender la app y responderte, nunca para publicidad.</p>",
        },
        {
          title: "12. Correos",
          content:
            "<p>Enviamos correos <strong>transaccionales</strong> (verificar tu correo, recuperar la contraseña) a través de <strong>Resend</strong>. No te enviamos publicidad por correo.</p>",
        },
        {
          title: "13. Dónde se guardan y con quién se comparten",
          content:
            "<p>Nuestro servidor y la base de datos <strong>PostgreSQL</strong> están en <strong>Render</strong>, en <strong>Estados Unidos</strong>, así que tus datos se transfieren a ese país. Trabajamos con estos proveedores, cada uno con su propia política de privacidad: Render, Cloudflare (R2), Anthropic, Google (inicio de sesión, AdMob y Firebase), Apple (inicio de sesión y App Store), RevenueCat, Resend, Sentry, PostHog y Telegram.</p><p><strong>No vendemos ni alquilamos tus datos.</strong> Solo los compartimos con estos proveedores para prestar el servicio, los publicamos cuando tú lo eliges (perfil público, competencias y perfil de especialista aprobados) o los entregamos a autoridades cuando la ley lo exija.</p>",
        },
        {
          title: "14. Base legal",
          content:
            "<ul><li><strong>Ejecutar el servicio</strong> que pides: cuenta, favoritos, \"Voy\", recordatorios, invitaciones, envíos, solicitud de especialista y su publicación, suscripción y correos transaccionales.</li><li><strong>Tu consentimiento</strong>: datos de salud del Coach IA, ubicación y, en la Unión Europea, el Espacio Económico Europeo, el Reino Unido y Suiza, los anuncios personalizados y Firebase Analytics. Puedes retirarlo cuando quieras.</li><li><strong>Interés legítimo</strong>: seguridad, prevención de abuso, registro de fallos, medición de uso (PostHog y, fuera de esas regiones, Firebase Analytics) y los avisos internos para atender la app.</li><li><strong>Obligaciones legales</strong>, cuando apliquen.</li></ul>",
        },
        {
          title: "15. Cuánto tiempo los guardamos",
          content:
            "<ul><li>Tus datos, mientras tengas la cuenta. Al eliminarla los borramos en ese momento; mira el detalle en <a href=\"/app/gazella/delete-account\">cómo eliminar tu cuenta de Gazella</a>.</li><li>Las competencias que enviaste y ya están aprobadas siguen publicadas, sin ningún vínculo contigo. Los reportes de errores sobre competencias también se conservan sin vínculo contigo.</li><li>Los avisos de compra de RevenueCat, 90 días desde que llegan, aunque elimines la cuenta antes.</li><li>Las copias de seguridad cifradas de la base de datos se sobrescriben en un máximo de <strong>30 días</strong>.</li><li>Los eventos de PostHog y los avisos de Telegram no se borran al eliminar la cuenta; los de PostHog no llevan tu nombre ni tu correo.</li><li>La ubicación no se guarda nunca. Los registros de compras los conservan las tiendas y RevenueCat según sus políticas.</li></ul>",
        },
        {
          title: "16. Tus derechos",
          content:
            "<p>Puedes <strong>acceder</strong> a tus datos, <strong>rectificarlos</strong> desde tu perfil, <strong>borrarlos</strong>, oponerte a su tratamiento o retirar tu consentimiento. Para eliminar la cuenta y sus datos, sigue <a href=\"/app/gazella/delete-account\">cómo eliminar tu cuenta de Gazella</a>. Para el resto, escríbenos a support@davidyero.com. En Colombia te ampara la Ley 1581 de 2012 (habeas data).</p>",
        },
        {
          title: "17. Seguridad",
          content:
            "<p>Los datos viajan cifrados (HTTPS), las contraseñas se guardan con hash y el formulario del Coach, cifrado. Aplicamos medidas razonables, aunque ningún sistema es infalible.</p>",
        },
        {
          title: "18. Edad mínima",
          content:
            "<p>Gazella está dirigida a <strong>personas de 18 años o más</strong> y no recopilamos a sabiendas datos de menores. Si crees que un menor a tu cargo nos ha dado datos, escríbenos a support@davidyero.com y los eliminaremos.</p>",
        },
        {
          title: "19. Cambios y contacto",
          content:
            "<p>Si cambiamos esta Política, publicaremos la versión nueva con su fecha y te avisaremos en la app si el cambio es importante. Para cualquier pregunta sobre privacidad: support@davidyero.com</p>",
        },
      ],
    },
    en: {
      lastUpdated: "November 20, 2026",
      sections: [
        {
          title: "1. Introduction and controller",
          content:
            "<p>This Policy explains what data <strong>Gazella</strong> (the iOS and Android app and the gazella.run website) handles, why, who we share it with and how to exercise your rights.</p><p>The data controller is <strong>David Yepes</strong> (@Davidyero), an individual based in <strong>Colombia</strong> who develops and publishes Gazella. The only contact channel, for privacy and everything else, is <strong>support@davidyero.com</strong>.</p>",
        },
        {
          title: "2. Account and sign-in",
          content:
            "<p>When you create an account we store your <strong>name, username and email address</strong>, and your password only as a <strong>hash</strong> (never as you typed it). If you sign in with <strong>Google</strong> or <strong>Apple</strong>, we receive your email, your name and an account identifier from them; with Apple you can hide your real email.</p><p>We also store what you set in your profile (country, favorite sports, language and whether your profile is public), the platform you signed up on (iOS, Android or web), the date you accepted the terms and the dates of your last access.</p>",
        },
        {
          title: "3. Photos you upload",
          content:
            "<p>If you upload a <strong>profile photo</strong> or the <strong>cover photo</strong> of a competition you submit, we store it on <strong>Cloudflare R2</strong>. Your profile photo is shown on your public profile and cover photos on published competitions. We only access the images you choose to upload, not your gallery.</p>",
        },
        {
          title: "4. Location",
          content:
            "<p>If you allow it, the app uses your location <strong>only when you open the \"Near me\" tab</strong>, to show you competitions within 150 km.</p><ul><li>On Android we only ask for the <strong>approximate location</strong> permission. On iPhone we receive the precision you allow in the system.</li><li>Before sending it, the app rounds the coordinates to <strong>4 decimal places (about 11 meters)</strong> and sends them to our server as part of that search.</li><li>We <strong>do not store it</strong> in our database or link it to your profile, and it is not included in our analytics or error logs.</li></ul><p>You can deny the permission and the app keeps working.</p>",
        },
        {
          title: "5. AI Coach and health data",
          content:
            "<p>The AI Coach is part of the Pro plan and <strong>can only be used by people aged 18 or over</strong>. To generate your plan, the form asks for:</p><ul><li>The target competition and distance, and your goal (finishing it or a specific time).</li><li>Your <strong>age</strong> and, if you wish, your <strong>sex</strong>, <strong>weight</strong> and <strong>height</strong>.</li><li>Your <strong>level</strong>, your <strong>weekly volume</strong> in kilometers or hours and, if you wish, your <strong>recent results</strong>.</li><li>The days per week and minutes per session you have to train.</li><li>Your <strong>health conditions</strong> (heart condition, pregnancy, recent injury or other) and, if you wish, <strong>health notes</strong>.</li><li>The <strong>equipment</strong> you have (heart rate monitor, power meter, indoor trainer, gym, track or hill access) and the <strong>terrain</strong> you train on.</li></ul><p>We also store the generated plan and the sessions you mark as done.</p><ul><li>Before generating your first plan, the app asks you to <strong>expressly accept</strong> sending this data.</li><li>The form is stored <strong>encrypted</strong> in our database.</li><li>It is sent to <strong>Anthropic (Claude)</strong>, the artificial intelligence provider that generates the plan, for that purpose only.</li><li>It is erased when you delete your account. To delete a specific plan without deleting your account, email support@davidyero.com.</li></ul>",
        },
        {
          title: "6. What you do in Gazella",
          content:
            "<p>To provide the service and reply to you, we store:</p><ul><li>Your <strong>favorites</strong> and the competitions you mark as <strong>\"Going\"</strong>, with the distance you are running. If your profile is public, other users see you in \"who else is going\".</li><li>Your competition <strong>reminders</strong>.</li><li>The <strong>invite links</strong> you create and who joined through them.</li><li>The competitions you <strong>submit</strong>: they are reviewed and, if approved, published.</li><li>The <strong>error reports</strong> you file about a competition (reason and note).</li><li>The <strong>suggestions</strong> you send us and reports about an AI Coach plan, along with the platform and app version.</li></ul>",
        },
        {
          title: "7. Specialists directory",
          content:
            "<p>If you ask to be listed in the specialists directory from the app, we store what you enter in the form: <strong>specialist type</strong>, <strong>name</strong>, <strong>bio</strong>, <strong>specialties</strong>, <strong>sports</strong>, <strong>country and city</strong>, <strong>modality</strong> (online or in person), the <strong>contact details</strong> you choose (WhatsApp, email, website or Instagram; at least one) and your <strong>services</strong> with price, currency and duration.</p><ul><li>We use them to <strong>review your application</strong>.</li><li>If we approve it, <strong>this data is published in the directory</strong> and anyone using Gazella can see it and contact you directly.</li><li>If we reject it, we keep the application and the reason while you have an account.</li><li>Deleting your account erases the application and the published profile. To change or remove it earlier, email support@davidyero.com.</li></ul>",
        },
        {
          title: "8. Purchases (RevenueCat, App Store and Google Play)",
          content:
            "<p>The Pro subscription is bought on the App Store or Google Play, and we validate it with <strong>RevenueCat</strong>, which processes your user identifier and your purchase status to know your plan. <strong>We never see or store your card details</strong>.</p><p>We store your plan status (active or not, and when it expires) and the promo codes you redeem. The notices RevenueCat sends us for each purchase, renewal or cancellation (with your user identifier, the product, the store, the price and the dates) are kept for <strong>90 days</strong> to resolve issues; after that they are emptied and only a technical record of the notice remains (its identifier and type), with none of your data.</p>",
        },
        {
          title: "9. Advertising (Google AdMob)",
          content:
            "<p>The free plan shows ads from <strong>Google AdMob</strong>, which may use your device's <strong>advertising identifier</strong>.</p><ul><li>In the <strong>European Union, the European Economic Area, the United Kingdom and Switzerland</strong> we ask for your consent with Google's tool (<strong>UMP</strong>) before showing personalized ads. If you decline, you will see non-personalized ads, and you can change your choice in the app settings.</li><li><strong>Outside those regions</strong> the law does not require that form and ads are personalized by default. You can limit them in your phone's privacy settings.</li><li>On <strong>iPhone</strong>, AdMob only accesses the advertising identifier if you accept Apple's tracking prompt (<strong>App Tracking Transparency</strong>).</li><li>If the consent tool fails, we only request non-personalized ads.</li></ul>",
        },
        {
          title: "10. Analytics and crashes",
          content:
            "<ul><li><strong>Firebase Analytics</strong> measures in aggregate which screens and features are used, without the advertising identifier and without personal data in the events. It starts off and is turned on depending on your region: in the European Union, the European Economic Area, the United Kingdom and Switzerland, <strong>only if you accept it</strong> in the consent form; <strong>outside those regions it is always on</strong>.</li><li><strong>Firebase Crashlytics</strong> records app crashes (device model, operating system version and the technical error log) so we can fix them.</li><li><strong>Sentry</strong> records technical errors on the gazella.run website and on our server. On the server it only stores the method, the route and the error trace, without the request content or your data.</li><li><strong>PostHog</strong> (servers in the United States) measures which server features are used: for each request it records the route (without its values), the method, the response, how long it took, whether it came from iOS, Android or web, and an internal identifier of your account, without your name or email. It does not receive the request content, your IP or your location. We use it to know which features are used and to detect failures.</li></ul>",
        },
        {
          title: "11. Internal notices via Telegram",
          content:
            "<p>To run the app, the controller receives notices in a private <strong>Telegram</strong> chat:</p><ul><li>When someone creates an account: their <strong>username, name and email</strong>, the platform, the sign-up method and the date.</li><li>When someone sends a suggestion or a plan report: the <strong>text</strong>, the platform, the app version and the internal account identifier.</li></ul><p>They are only used to run the app and reply to you, never for advertising.</p>",
        },
        {
          title: "12. Emails",
          content:
            "<p>We send <strong>transactional</strong> emails (verifying your email, password reset) through <strong>Resend</strong>. We do not send you advertising by email.</p>",
        },
        {
          title: "13. Where data is stored and who it is shared with",
          content:
            "<p>Our server and <strong>PostgreSQL</strong> database run on <strong>Render</strong>, in the <strong>United States</strong>, so your data is transferred to that country. We work with these providers, each with its own privacy policy: Render, Cloudflare (R2), Anthropic, Google (sign-in, AdMob and Firebase), Apple (sign-in and App Store), RevenueCat, Resend, Sentry, PostHog and Telegram.</p><p><strong>We do not sell or rent your data.</strong> We only share it with these providers to run the service, publish it when you choose to (public profile, approved competitions and specialist profile) or hand it to authorities when the law requires it.</p>",
        },
        {
          title: "14. Legal basis",
          content:
            "<ul><li><strong>Providing the service</strong> you ask for: account, favorites, \"Going\", reminders, invites, submissions, specialist application and its publication, subscription and transactional emails.</li><li><strong>Your consent</strong>: AI Coach health data, location and, in the European Union, the European Economic Area, the United Kingdom and Switzerland, personalized ads and Firebase Analytics. You can withdraw it at any time.</li><li><strong>Legitimate interest</strong>: security, abuse prevention, crash reporting, usage measurement (PostHog and, outside those regions, Firebase Analytics) and the internal notices to run the app.</li><li><strong>Legal obligations</strong>, where they apply.</li></ul>",
        },
        {
          title: "15. How long we keep it",
          content:
            "<ul><li>Your data, for as long as you have an account. When you delete it we erase it right away; see the details in <a href=\"/app/gazella/delete-account\">how to delete your Gazella account</a>.</li><li>Competitions you submitted that are already approved stay published, with no link to you. Error reports about competitions are also kept with no link to you.</li><li>RevenueCat purchase notices, 90 days from when they arrive, even if you delete your account earlier.</li><li>Encrypted database backups are overwritten within <strong>30 days</strong> at most.</li><li>PostHog events and Telegram notices are not erased when you delete your account; PostHog events do not include your name or email.</li><li>Location is never stored. Purchase records are kept by the stores and RevenueCat under their policies.</li></ul>",
        },
        {
          title: "16. Your rights",
          content:
            "<p>You can <strong>access</strong> your data, <strong>correct</strong> it from your profile, <strong>erase</strong> it, object to its processing or withdraw your consent. To delete your account and its data, follow <a href=\"/app/gazella/delete-account\">how to delete your Gazella account</a>. For anything else, email support@davidyero.com. In Colombia you are protected by Law 1581 of 2012 (habeas data).</p>",
        },
        {
          title: "17. Security",
          content:
            "<p>Data travels encrypted (HTTPS), passwords are stored as hashes and the AI Coach form is encrypted. We apply reasonable measures, although no system is infallible.</p>",
        },
        {
          title: "18. Minimum age",
          content:
            "<p>Gazella is intended for <strong>people aged 18 or over</strong> and we do not knowingly collect data from minors. If you believe a minor in your care has given us data, email support@davidyero.com and we will delete it.</p>",
        },
        {
          title: "19. Changes and contact",
          content:
            "<p>If we change this Policy, we will publish the new version with its date and let you know in the app if the change is significant. For any privacy question: support@davidyero.com</p>",
        },
      ],
    },
  },
};
