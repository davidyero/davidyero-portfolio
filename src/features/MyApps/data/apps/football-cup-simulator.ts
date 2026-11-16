import { type App } from "../../Screens/MyAppsScreen/MyAppsScreen.types";
import { appIcon } from "./appIcon";

export const footballCupSimulatorApp: App = {
  id: "8",
  name: "Football Cup Simulator",
  slug: "football-cup-simulator",
  description:
    "Simula torneos de copa de fútbol y vive cada ronda hasta la final.",
  logo: appIcon("football-cup-simulator"),
  appStoreUrl:
    "https://apps.apple.com/us/app/football-tournament-simulator/id6756631490",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.davidyero.footballcupsimulator",
  accountDeletion: {
    es: {
      lastUpdated: "8 de septiembre de 2026",
      sections: [
        {
          title: "1. De qué aplicación hablamos",
          content:
            "<p>Esta página explica cómo eliminar tu cuenta de <strong>Football Cup Simulator</strong>, desarrollada por David Yepes (@Davidyero) y publicada en Google Play con el identificador <code>com.davidyero.footballcupsimulator</code>.</p><p>La cuenta es opcional: puedes usar la app sin registrarte. Estas instrucciones aplican solo si creaste una.</p>",
        },
        {
          title: "2. Eliminar tu cuenta desde la app",
          content:
            "<p>Es la vía más rápida y el borrado es inmediato:</p><ol><li>Abre Football Cup Simulator.</li><li>Ve a la pestaña <strong>Perfil</strong>.</li><li>Entra en <strong>Cuenta</strong>.</li><li>Pulsa <strong>Eliminar cuenta</strong>.</li><li>Confirma en el aviso <strong>¿Eliminar cuenta?</strong>.</li></ol><p>La cuenta y sus datos se borran en ese momento. La acción no se puede deshacer.</p>",
        },
        {
          title: "3. Pedir la eliminación sin instalar la app",
          content:
            "<p>Si ya desinstalaste la aplicación, escríbenos a <strong>support@davidyero.com</strong> <em>desde la misma dirección de correo con la que te registraste</em>, con el asunto <strong>Eliminar cuenta - Football Cup Simulator</strong>.</p><p>Usamos esa dirección para verificar que la cuenta es tuya. Procesamos la solicitud en un plazo máximo de <strong>30 días</strong> y te confirmamos por correo cuando esté hecha.</p>",
        },
        {
          title: "4. Qué datos se eliminan",
          content:
            "<p>Al eliminar la cuenta se borran de forma permanente de nuestros servidores:</p><ul><li>Los datos de la cuenta: correo electrónico, nombre, nombre de usuario y la versión cifrada de la contraseña.</li><li>Tus predicciones y torneos sincronizados en la nube.</li><li>Los podios que hayas elegido.</li><li>El historial de compras registrado en nuestro servidor.</li><li>Las peticiones de competencias que hayas enviado.</li></ul><p>Los torneos que tengas guardados únicamente en el teléfono no están en nuestros servidores: desaparecen al desinstalar la app.</p>",
        },
        {
          title: "5. Qué se conserva y durante cuánto tiempo",
          content:
            "<p><strong>Registro del dispositivo para notificaciones.</strong> Guardamos un identificador de instalación y el token de notificaciones para poder enviar avisos. Al eliminar la cuenta, ese registro <strong>se desvincula de tu identidad</strong> y deja de estar asociado a ninguna persona. Se elimina cuando desinstalas la app, cuando desactivas los avisos en Ajustes, o automáticamente cuando el token deja de estar activo.</p><p><strong>Copias de seguridad.</strong> Nuestras copias de seguridad cifradas de la base de datos pueden conservar una copia de los datos hasta <strong>30 días</strong> desde el borrado, tras los cuales se sobrescriben.</p>",
        },
        {
          title: "6. Tu suscripción no se cancela sola",
          content:
            "<p>Eliminar la cuenta <strong>no cancela</strong> una suscripción activa. Las suscripciones las gestiona la tienda, así que debes cancelarla tú desde <strong>Google Play &gt; Pagos y suscripciones &gt; Suscripciones</strong> (o desde Ajustes &gt; Apple ID &gt; Suscripciones en iOS). Cancela antes de borrar la cuenta para no seguir pagando.</p>",
        },
        {
          title: "7. Contacto",
          content:
            "<p>Cualquier duda sobre la eliminación de tu cuenta o de tus datos: <strong>support@davidyero.com</strong>.</p>",
        },
      ],
    },
    en: {
      lastUpdated: "September 8, 2026",
      sections: [
        {
          title: "1. Which app this is about",
          content:
            "<p>This page explains how to delete your <strong>Football Cup Simulator</strong> account. The app is developed by David Yepes (@Davidyero) and published on Google Play under the identifier <code>com.davidyero.footballcupsimulator</code>.</p><p>An account is optional: you can use the app without signing up. These instructions only apply if you created one.</p>",
        },
        {
          title: "2. Delete your account from the app",
          content:
            "<p>This is the fastest route and the deletion is immediate:</p><ol><li>Open Football Cup Simulator.</li><li>Go to the <strong>Profile</strong> tab.</li><li>Open <strong>Account</strong>.</li><li>Tap <strong>Delete account</strong>.</li><li>Confirm on the <strong>Delete account?</strong> prompt.</li></ol><p>Your account and its data are erased right then. The action cannot be undone.</p>",
        },
        {
          title: "3. Request deletion without installing the app",
          content:
            "<p>If you already uninstalled the app, email us at <strong>support@davidyero.com</strong> <em>from the same address you signed up with</em>, using the subject <strong>Delete account - Football Cup Simulator</strong>.</p><p>We use that address to verify the account is yours. We process the request within <strong>30 days</strong> and confirm by email once it is done.</p>",
        },
        {
          title: "4. What data is deleted",
          content:
            "<p>Deleting your account permanently removes the following from our servers:</p><ul><li>Account data: email address, name, username and the encrypted version of your password.</li><li>Your predictions and tournaments synced to the cloud.</li><li>The podiums you picked.</li><li>The purchase history recorded on our server.</li><li>Any competition requests you sent us.</li></ul><p>Tournaments saved only on your phone never reach our servers: they disappear when you uninstall the app.</p>",
        },
        {
          title: "5. What is kept, and for how long",
          content:
            "<p><strong>Device record for notifications.</strong> We store an installation identifier and a notification token so we can deliver alerts. When you delete your account that record is <strong>unlinked from your identity</strong> and is no longer associated with any person. It is removed when you uninstall the app, when you turn alerts off in Settings, or automatically once the token goes inactive.</p><p><strong>Backups.</strong> Our encrypted database backups may retain a copy of the data for up to <strong>30 days</strong> after deletion, after which they are overwritten.</p>",
        },
        {
          title: "6. Your subscription is not cancelled automatically",
          content:
            "<p>Deleting your account does <strong>not</strong> cancel an active subscription. Subscriptions are handled by the store, so you must cancel it yourself under <strong>Google Play &gt; Payments and subscriptions &gt; Subscriptions</strong> (or Settings &gt; Apple ID &gt; Subscriptions on iOS). Cancel before deleting your account so you are not charged again.</p>",
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
      lastUpdated: "8 de septiembre de 2026",
      sections: [
        {
          title: "1. Aceptacion de los Terminos",
          content:
            "<p>Al descargar o usar <strong>Football Cup Simulator</strong> aceptas estos Terminos. Si no estas de acuerdo con ellos, no uses la aplicacion. La aplicacion la desarrolla y opera David Yepes (@Davidyero) a titulo individual.</p>",
        },
        {
          title: "2. Descripcion del Servicio",
          content:
            "<p>Football Cup Simulator es una aplicacion de entretenimiento para <strong>simular torneos de futbol y hacer predicciones</strong>: montas una copa o una liga, avanzas ronda a ronda, eliges tu podio y comparas tus elecciones con las del resto de la gente.</p><p>Los resultados son simulados o pronosticados por ti. <strong>La aplicacion no ofrece apuestas, ni premios en dinero, ni participacion en juegos de azar de ningun tipo.</strong></p>",
        },
        {
          title: "3. Cuentas",
          content:
            "<p>Puedes usar la aplicacion <strong>sin crear una cuenta</strong>. Crear una es opcional y sirve para guardar tus predicciones en la nube, recuperarlas en otro telefono y participar en el podio compartido.</p><p>Si creas una cuenta, te comprometes a dar datos veraces y a mantener tu contrasena a salvo. Eres responsable de la actividad que ocurra con tu cuenta. Puedes eliminarla en cualquier momento desde <em>Perfil &gt; Cuenta &gt; Eliminar cuenta</em>, o siguiendo las instrucciones de nuestra pagina de eliminacion de cuenta.</p>",
        },
        {
          title: "4. Suscripciones y Pagos",
          content:
            "<p>La aplicacion ofrece un plan <strong>gratuito</strong> y planes <strong>de pago</strong> que amplian los limites y quitan la publicidad. Las suscripciones se compran y se gestionan <strong>a traves de la tienda</strong> (Google Play o App Store), no a traves nuestro.</p><ul><li>El precio, la moneda y la duracion son los que muestre la tienda en el momento de la compra.</li><li>La suscripcion <strong>se renueva automaticamente</strong> salvo que la canceles al menos 24 horas antes de que termine el periodo en curso.</li><li>Para cancelar: <em>Google Play &gt; Pagos y suscripciones &gt; Suscripciones</em>, o <em>Ajustes &gt; Apple ID &gt; Suscripciones</em> en iOS. <strong>Eliminar tu cuenta no cancela la suscripcion.</strong></li><li>Las devoluciones las decide la tienda segun su propia politica; nosotros no podemos emitirlas.</li></ul>",
        },
        {
          title: "5. Codigos de Canje",
          content:
            "<p>Podemos emitir codigos que desbloquean funciones o un plan durante un tiempo. Los codigos son personales, de un solo uso salvo que se indique lo contrario, no son canjeables por dinero y podemos anularlos si detectamos un uso fraudulento o su reventa.</p>",
        },
        {
          title: "6. Uso Aceptable",
          content:
            "<p>Al usar la aplicacion te comprometes a no: intentar acceder a cuentas o datos de otras personas; manipular las peticiones a nuestro servidor para falsear predicciones, podios o compras; automatizar el uso de la aplicacion; ni enviar contenido ilegal, ofensivo o que infrinja derechos de terceros a traves de los formularios de la aplicacion.</p><p>Podemos suspender o eliminar una cuenta que incumpla esta seccion.</p>",
        },
        {
          title: "7. Publicidad",
          content:
            "<p>En el plan gratuito la aplicacion muestra publicidad de <strong>Google AdMob</strong>, en formato banner, anuncio a pantalla completa y anuncio bonificado (el que ves voluntariamente para obtener una ventaja puntual). Los planes de pago no muestran publicidad. El tratamiento de datos que hace la publicidad se explica en la <strong>Politica de Privacidad</strong>.</p>",
        },
        {
          title: "8. Propiedad Intelectual y Ausencia de Afiliacion",
          content:
            "<p>La aplicacion, su codigo, su diseno y sus textos son propiedad de David Yepes. No puedes copiarlos, redistribuirlos ni crear obras derivadas sin permiso escrito.</p><p><strong>Football Cup Simulator es un producto independiente y no esta afiliado, patrocinado ni respaldado por la FIFA, la UEFA, la CONMEBOL, la CONCACAF, ninguna federacion, liga, competicion, club ni jugador.</strong> Los nombres de equipos, competiciones y paises se usan unicamente con caracter descriptivo e informativo, para identificar a que se refiere cada simulacion. Todas las marcas pertenecen a sus respectivos titulares.</p>",
        },
        {
          title: "9. Limitacion de Responsabilidad",
          content:
            "<p>La aplicacion se ofrece <strong>tal cual</strong>, sin garantia de que este siempre disponible ni libre de errores. Los datos de competiciones, calendarios y equipos pueden contener imprecisiones o quedar desactualizados, y las simulaciones y predicciones <strong>no son un pronostico fiable de ningun resultado real</strong> ni deben usarse para tomar decisiones economicas.</p><p>En la medida que lo permita la ley, no respondemos por danos indirectos, perdida de datos o lucro cesante derivados del uso de la aplicacion.</p>",
        },
        {
          title: "10. Modificaciones",
          content:
            "<p>Podemos actualizar estos Terminos para reflejar cambios en la aplicacion o en la ley. Publicaremos la version nueva en esta misma pagina con su fecha de actualizacion. Si sigues usando la aplicacion despues de un cambio, se entiende que lo aceptas.</p>",
        },
        {
          title: "11. Contacto",
          content:
            "<p>Si tienes preguntas sobre estos Terminos, contactanos en: <strong>support@davidyero.com</strong></p>",
        },
      ],
    },
    en: {
      lastUpdated: "September 8, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            "<p>By downloading or using <strong>Football Cup Simulator</strong> you accept these Terms. If you do not agree with them, do not use the app. The app is developed and operated by David Yepes (@Davidyero) as an individual.</p>",
        },
        {
          title: "2. Description of the Service",
          content:
            "<p>Football Cup Simulator is an entertainment app for <strong>simulating football tournaments and making predictions</strong>: you set up a cup or a league, advance round by round, pick your podium and compare your choices with what everyone else picked.</p><p>Results are simulated or predicted by you. <strong>The app offers no betting, no cash prizes and no gambling of any kind.</strong></p>",
        },
        {
          title: "3. Accounts",
          content:
            "<p>You can use the app <strong>without creating an account</strong>. Creating one is optional and it exists to save your predictions to the cloud, recover them on another phone and take part in the shared podium.</p><p>If you create an account, you agree to provide accurate information and to keep your password safe. You are responsible for activity that happens under your account. You can delete it at any time from <em>Profile &gt; Account &gt; Delete account</em>, or by following the instructions on our account deletion page.</p>",
        },
        {
          title: "4. Subscriptions and Payments",
          content:
            "<p>The app offers a <strong>free</strong> plan and <strong>paid</strong> plans that raise the limits and remove advertising. Subscriptions are purchased and managed <strong>through the store</strong> (Google Play or the App Store), not through us.</p><ul><li>Price, currency and duration are whatever the store shows at the time of purchase.</li><li>The subscription <strong>renews automatically</strong> unless you cancel it at least 24 hours before the current period ends.</li><li>To cancel: <em>Google Play &gt; Payments and subscriptions &gt; Subscriptions</em>, or <em>Settings &gt; Apple ID &gt; Subscriptions</em> on iOS. <strong>Deleting your account does not cancel the subscription.</strong></li><li>Refunds are decided by the store under its own policy; we cannot issue them.</li></ul>",
        },
        {
          title: "5. Redeem Codes",
          content:
            "<p>We may issue codes that unlock features or a plan for a period of time. Codes are personal, single-use unless stated otherwise, cannot be exchanged for money, and we may void them if we detect fraudulent use or resale.</p>",
        },
        {
          title: "6. Acceptable Use",
          content:
            "<p>By using the app you agree not to: attempt to access other people accounts or data; tamper with requests to our server in order to fake predictions, podiums or purchases; automate use of the app; or submit illegal, offensive or infringing content through the forms in the app.</p><p>We may suspend or delete an account that breaches this section.</p>",
        },
        {
          title: "7. Advertising",
          content:
            "<p>On the free plan the app shows <strong>Google AdMob</strong> advertising as banners, full-screen ads and rewarded ads (the ones you choose to watch in exchange for a one-off benefit). Paid plans show no advertising. How advertising handles data is explained in the <strong>Privacy Policy</strong>.</p>",
        },
        {
          title: "8. Intellectual Property and No Affiliation",
          content:
            "<p>The app, its code, its design and its texts belong to David Yepes. You may not copy, redistribute or create derivative works from them without written permission.</p><p><strong>Football Cup Simulator is an independent product and is not affiliated with, sponsored by or endorsed by FIFA, UEFA, CONMEBOL, CONCACAF, or any federation, league, competition, club or player.</strong> Team, competition and country names are used purely descriptively, to identify what each simulation refers to. All trademarks belong to their respective owners.</p>",
        },
        {
          title: "9. Limitation of Liability",
          content:
            "<p>The app is provided <strong>as is</strong>, with no guarantee that it will always be available or free of errors. Competition, fixture and team data may be inaccurate or out of date, and simulations and predictions <strong>are not a reliable forecast of any real result</strong> and must not be used to make financial decisions.</p><p>To the extent permitted by law, we are not liable for indirect damages, data loss or lost profits arising from use of the app.</p>",
        },
        {
          title: "10. Modifications",
          content:
            "<p>We may update these Terms to reflect changes in the app or in the law. We will publish the new version on this page with its update date. If you keep using the app after a change, you are deemed to accept it.</p>",
        },
        {
          title: "11. Contact",
          content:
            "<p>If you have questions about these Terms, contact us at: <strong>support@davidyero.com</strong></p>",
        },
      ],
    },
  },
  privacyPolicy: {
    es: {
      lastUpdated: "8 de septiembre de 2026",
      sections: [
        {
          title: "1. Introduccion",
          content:
            "<p>Esta Politica de Privacidad explica que datos trata <strong>Football Cup Simulator</strong>, para que, con quien se comparten y como puedes controlarlos. La aplicacion la desarrolla y opera David Yepes (@Davidyero).</p><p>Lo primero y mas importante: <strong>puedes usar la aplicacion sin crear una cuenta y sin darnos tu correo</strong>. Casi todo lo que se describe aqui solo ocurre si decides registrarte.</p>",
        },
        {
          title: "2. Datos que Recopilamos",
          content:
            "<p>Podemos tratar los siguientes datos:</p><ul><li><strong>Cuenta (opcional):</strong> tu nombre, tu nombre de usuario y tu correo electronico, junto con una version cifrada de tu contrasena. Si cambias de correo, guardamos el nuevo de forma temporal hasta que confirmes el codigo que te enviamos.</li><li><strong>Tus predicciones y torneos:</strong> se copian a nuestros servidores unicamente si tienes cuenta, para que no se pierdan al cambiar de telefono.</li><li><strong>Tu podio:</strong> las tres posiciones que eliges en una competencia, para poder mostrar las estadisticas agregadas de lo que elige la gente.</li><li><strong>Peticiones que nos envias:</strong> el contenido del formulario cuando nos pides que anadamos una competencia.</li><li><strong>Historial de compras:</strong> gestionado a traves de RevenueCat, para reconocer tu plan.</li><li><strong>Identificador de instalacion y token de notificaciones:</strong> necesarios para poder enviarte avisos. Se guardan junto a la plataforma, el idioma de la aplicacion y tu plan.</li><li><strong>Identificador de publicidad:</strong> lo recoge Google AdMob para servir anuncios.</li><li><strong>Uso de la aplicacion:</strong> Google Firebase Analytics registra por que pantallas pasas, de forma agregada.</li></ul><p>No pedimos ni recogemos tu ubicacion, tus contactos, tus fotos, tu microfono ni tu agenda. La aplicacion no solicita ninguno de esos permisos.</p>",
        },
        {
          title: "3. Como Usamos tus Datos",
          content:
            "<p>Usamos los datos para: crear y autenticar tu cuenta; sincronizar tus predicciones entre dispositivos; calcular y mostrar las estadisticas agregadas del podio; reconocer y mantener tu plan; enviarte las notificaciones que hayas aceptado; mostrar publicidad en el plan gratuito; medir de forma agregada como se usa la aplicacion; y prevenir el abuso y el fraude.</p><p><strong>No usamos el contenido de tus predicciones con fines publicitarios</strong>, ni lo cruzamos con perfiles de anuncios.</p>",
        },
        {
          title: "4. La Cuenta es Opcional, y que Cambia si la Creas",
          content:
            "<p><strong>Sin cuenta:</strong> tus torneos y predicciones se guardan solo en tu telefono y nunca llegan a nuestros servidores. Lo unico que sale del dispositivo es el token de notificaciones, si has aceptado los avisos, y el identificador de publicidad si ves anuncios.</p><p><strong>Con cuenta:</strong> tus predicciones, torneos y podios se copian a nuestros servidores para que puedas recuperarlos, y quedan asociados a tu cuenta.</p>",
        },
        {
          title: "5. Notificaciones Push",
          content:
            "<p>Si aceptas las notificaciones, usamos <strong>Firebase Cloud Messaging</strong> de Google y guardamos un identificador de instalacion, el token de notificacion, la plataforma, el idioma de la aplicacion y tu plan.</p><p>El idioma sirve para escribirte en tu idioma; el plan, para no enviarte ofertas de un plan que ya tienes. <strong>El destinatario de un aviso es el dispositivo, no la persona</strong>: guardamos el token tambien si no tienes cuenta, porque de lo contrario no podriamos avisar a nadie que no se haya registrado.</p><p>Puedes desactivarlas cuando quieras desde el interruptor de <em>Ajustes</em> de la aplicacion, o desde los ajustes de notificaciones del sistema.</p>",
        },
        {
          title: "6. Publicidad y Consentimiento (Google AdMob)",
          content:
            "<p>En el plan gratuito mostramos anuncios de <strong>Google AdMob</strong>, que para servirlos trata identificadores del dispositivo, incluido el identificador de publicidad.</p><p>Donde se aplica el RGPD (Espacio Economico Europeo y Reino Unido) mostramos el <strong>formulario de consentimiento de Google</strong> antes de pedir el primer anuncio, y respetamos lo que elijas: si rechazas la personalizacion, los anuncios que se piden son <strong>no personalizados</strong>. Puedes revisar y cambiar tu eleccion en cualquier momento desde <em>Ajustes &gt; Privacidad</em> dentro de la aplicacion.</p><p>Con un plan de pago no se muestra publicidad y no se pide ningun anuncio.</p>",
        },
        {
          title: "7. Proveedores que Tratan tus Datos",
          content:
            "<p>Trabajamos con los siguientes proveedores, cada uno con su propia politica de privacidad:</p><ul><li><strong>Render</strong>: alojamiento de nuestro servidor y de la base de datos.</li><li><strong>Google Firebase</strong>: notificaciones push (Cloud Messaging) y medicion de uso (Analytics).</li><li><strong>Google AdMob</strong>: publicidad.</li><li><strong>RevenueCat</strong>: validacion de las suscripciones.</li><li><strong>Resend</strong>: envio de los correos de verificacion, cambio de correo y recuperacion de contrasena.</li></ul><p>Ademas, la compra en si la procesan <strong>Google Play</strong> o la <strong>App Store</strong>. Nosotros no vemos ni almacenamos los datos de tu tarjeta en ningun momento.</p>",
        },
        {
          title: "8. No Vendemos tus Datos",
          content:
            "<p><strong>No vendemos tus datos personales.</strong> Solo se comparten con los proveedores enumerados arriba, y unicamente para lo que hace falta que hagan. El unico dato que se transfiere a un tercero con fines publicitarios es el identificador de publicidad, para servir anuncios.</p>",
        },
        {
          title: "9. Menores",
          content:
            "<p>La aplicacion no esta dirigida a menores de la edad minima que exija la ley de su pais para consentir el tratamiento de datos, y no recogemos datos de menores a sabiendas. Si crees que un menor a tu cargo nos ha facilitado datos, escribenos y los eliminaremos.</p>",
        },
        {
          title: "10. Tus Derechos y Control",
          content:
            "<p>Puedes, en cualquier momento:</p><ul><li><strong>Acceder y corregir</strong> los datos de tu cuenta desde <em>Perfil &gt; Cuenta</em> en la aplicacion.</li><li><strong>Eliminar tu cuenta y tus datos</strong> desde <em>Perfil &gt; Cuenta &gt; Eliminar cuenta</em>, o pedirlo sin instalar la aplicacion desde nuestra <strong>pagina de eliminacion de cuenta</strong>: <em>davidyero.com/app/football-cup-simulator/delete-account</em></li><li><strong>Desactivar las notificaciones</strong> desde Ajustes.</li><li><strong>Cambiar tu consentimiento publicitario</strong> desde <em>Ajustes &gt; Privacidad</em>.</li></ul><p>Si estas en la Union Europea, tienes ademas derecho de oposicion, limitacion y portabilidad. Escribenos y lo atendemos.</p>",
        },
        {
          title: "11. Conservacion y Eliminacion de Datos",
          content:
            "<p>Conservamos los datos de tu cuenta mientras la cuenta exista. Al eliminarla, se borran de forma permanente tu cuenta, tus predicciones y torneos sincronizados, tus podios, tu registro de compras y las peticiones que nos hubieras enviado.</p><p>El registro del dispositivo para notificaciones <strong>se desvincula de tu identidad</strong> y deja de estar asociado a ninguna persona; desaparece al desinstalar la aplicacion, al desactivar los avisos, o automaticamente cuando el token deja de estar activo. Nuestras copias de seguridad cifradas pueden conservar una copia hasta <strong>30 dias</strong> desde el borrado, tras los cuales se sobrescriben.</p>",
        },
        {
          title: "12. Cambios en esta Politica y Contacto",
          content:
            "<p>Si cambiamos esta Politica, publicaremos la version nueva en esta misma pagina con su fecha de actualizacion. Si tienes cualquier pregunta sobre tus datos, escribenos a <strong>support@davidyero.com</strong></p>",
        },
      ],
    },
    en: {
      lastUpdated: "September 8, 2026",
      sections: [
        {
          title: "1. Introduction",
          content:
            "<p>This Privacy Policy explains what data <strong>Football Cup Simulator</strong> handles, what for, who it is shared with and how you can control it. The app is developed and operated by David Yepes (@Davidyero).</p><p>First and most important: <strong>you can use the app without creating an account and without giving us your email</strong>. Almost everything described here only happens if you choose to sign up.</p>",
        },
        {
          title: "2. Data We Collect",
          content:
            "<p>We may handle the following data:</p><ul><li><strong>Account (optional):</strong> your name, your username and your email address, along with an encrypted version of your password. If you change your email, we store the new one temporarily until you confirm the code we send you.</li><li><strong>Your predictions and tournaments:</strong> copied to our servers only if you have an account, so they are not lost when you change phone.</li><li><strong>Your podium:</strong> the top three you pick for a competition, so we can show aggregated stats of what people choose.</li><li><strong>Requests you send us:</strong> the content of the form when you ask us to add a competition.</li><li><strong>Purchase history:</strong> handled through RevenueCat, to recognise your plan.</li><li><strong>Installation identifier and notification token:</strong> needed to send you alerts. Stored together with the platform, the app language and your plan.</li><li><strong>Advertising identifier:</strong> collected by Google AdMob to serve ads.</li><li><strong>App usage:</strong> Google Firebase Analytics records which screens you visit, in aggregate.</li></ul><p>We do not ask for or collect your location, your contacts, your photos, your microphone or your calendar. The app requests none of those permissions.</p>",
        },
        {
          title: "3. How We Use Your Data",
          content:
            "<p>We use the data to: create and authenticate your account; sync your predictions across devices; compute and show the aggregated podium stats; recognise and maintain your plan; send you the notifications you accepted; show advertising on the free plan; measure in aggregate how the app is used; and prevent abuse and fraud.</p><p><strong>We do not use the content of your predictions for advertising</strong>, nor do we cross-reference it with ad profiles.</p>",
        },
        {
          title:
            "4. The Account is Optional, and What Changes if You Create One",
          content:
            "<p><strong>Without an account:</strong> your tournaments and predictions are stored only on your phone and never reach our servers. The only things that leave the device are the notification token, if you accepted alerts, and the advertising identifier if you see ads.</p><p><strong>With an account:</strong> your predictions, tournaments and podiums are copied to our servers so you can recover them, and they are associated with your account.</p>",
        },
        {
          title: "5. Push Notifications",
          content:
            "<p>If you accept notifications, we use Google <strong>Firebase Cloud Messaging</strong> and store an installation identifier, the notification token, the platform, the app language and your plan.</p><p>The language is there so we can write to you in your own language; the plan, so we do not send you offers for a plan you already have. <strong>The recipient of an alert is the device, not the person</strong>: we store the token even if you have no account, because otherwise we could not reach anyone who has not signed up.</p><p>You can turn them off whenever you want from the switch in the app <em>Settings</em>, or from the system notification settings.</p>",
        },
        {
          title: "6. Advertising and Consent (Google AdMob)",
          content:
            "<p>On the free plan we show <strong>Google AdMob</strong> ads, which handle device identifiers, including the advertising identifier, in order to serve them.</p><p>Where the GDPR applies (European Economic Area and United Kingdom) we show the <strong>Google consent form</strong> before requesting the first ad, and we respect your choice: if you decline personalisation, the ads requested are <strong>non-personalised</strong>. You can review and change your choice at any time from <em>Settings &gt; Privacy</em> inside the app.</p><p>On a paid plan no advertising is shown and no ad is requested at all.</p>",
        },
        {
          title: "7. Providers That Handle Your Data",
          content:
            "<p>We work with the following providers, each with its own privacy policy:</p><ul><li><strong>Render</strong>: hosting for our server and database.</li><li><strong>Google Firebase</strong>: push notifications (Cloud Messaging) and usage measurement (Analytics).</li><li><strong>Google AdMob</strong>: advertising.</li><li><strong>RevenueCat</strong>: subscription validation.</li><li><strong>Resend</strong>: sending verification, email-change and password-reset messages.</li></ul><p>The purchase itself is processed by <strong>Google Play</strong> or the <strong>App Store</strong>. We never see or store your card details at any point.</p>",
        },
        {
          title: "8. We Do Not Sell Your Data",
          content:
            "<p><strong>We do not sell your personal data.</strong> It is shared only with the providers listed above, and only for what they need to do. The only data transferred to a third party for advertising purposes is the advertising identifier, in order to serve ads.</p>",
        },
        {
          title: "9. Children",
          content:
            "<p>The app is not directed at children below the minimum age required by the law of their country to consent to data processing, and we do not knowingly collect data from children. If you believe a child in your care has given us data, write to us and we will delete it.</p>",
        },
        {
          title: "10. Your Rights and Control",
          content:
            "<p>At any time you can:</p><ul><li><strong>Access and correct</strong> your account data from <em>Profile &gt; Account</em> in the app.</li><li><strong>Delete your account and your data</strong> from <em>Profile &gt; Account &gt; Delete account</em>, or request it without installing the app from our <strong>account deletion page</strong>: <em>davidyero.com/app/football-cup-simulator/delete-account</em></li><li><strong>Turn notifications off</strong> from Settings.</li><li><strong>Change your advertising consent</strong> from <em>Settings &gt; Privacy</em>.</li></ul><p>If you are in the European Union, you also have the right to object, to restriction and to portability. Write to us and we will handle it.</p>",
        },
        {
          title: "11. Data Retention and Deletion",
          content:
            "<p>We keep your account data for as long as the account exists. When you delete it, we permanently erase your account, your synced predictions and tournaments, your podiums, your purchase record and any requests you had sent us.</p><p>The device record for notifications <strong>is unlinked from your identity</strong> and is no longer associated with any person; it disappears when you uninstall the app, when you turn alerts off, or automatically once the token goes inactive. Our encrypted backups may retain a copy for up to <strong>30 days</strong> after deletion, after which they are overwritten.</p>",
        },
        {
          title: "12. Changes to This Policy and Contact",
          content:
            "<p>If we change this Policy, we will publish the new version on this page with its update date. If you have any question about your data, write to us at <strong>support@davidyero.com</strong></p>",
        },
      ],
    },
  },
};
