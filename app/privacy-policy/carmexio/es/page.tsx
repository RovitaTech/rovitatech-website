import type { Metadata } from 'next'
import Link from 'next/link'

import { EmailLink, Item, List, P, PolicyShell, Section, SubSection, linkStyle } from '../policy-ui'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad - Carmexio | Rovitatech',
  description: 'Aviso de Privacidad de Carmexio, la app para comprar y vender autos seminuevos revisados en México. Conoce cómo tratamos los datos de tu cuenta, anuncios, fotos y mensajes.',
  keywords: 'aviso de privacidad, Carmexio, autos seminuevos, autos usados México, protección de datos, derechos ARCO, Rovitatech',
}

export default function CarmexioAvisoDePrivacidad() {
  return (
    <div lang="es-MX">
      <PolicyShell
        heading="Aviso de Privacidad"
        effectiveDate="Fecha de entrada en vigor: 1 de octubre de 2026"
        footer="© 2026 RovitaTech. Todos los derechos reservados."
      >
        <Section title="Introducción">
          <P>
            Este Aviso de Privacidad explica qué información recopila Carmexio (la “app”, que incluye las aplicaciones móviles de Carmexio para iOS y Android y el sitio web de Carmexio), cómo se utiliza y qué opciones tienes. Carmexio es una agencia de autos seminuevos en México: los autos se revisan y se venden en las sucursales de Carmexio, y los compradores tratan con Carmexio, nunca directamente con el dueño del auto. La app es proporcionada por RovitaTech (“nosotros”), responsable del tratamiento de tus datos personales. ¿Dudas? Escríbenos a <EmailLink />.
          </P>
          <P>
            <Link href="/privacy-policy/carmexio" style={linkStyle}>
              Read this policy in English
            </Link>
          </P>
        </Section>

        <Section title="1. Información que recopilamos">
          <SubSection title="Datos de la cuenta">
            <P>
              Puedes explorar autos, buscar y consultar reportes de inspección sin crear una cuenta. Al crear una cuenta recopilamos tu nombre completo, correo electrónico, número de teléfono y una contraseña. También puedes agregar tu ciudad y una foto de perfil.
            </P>
          </SubSection>

          <SubSection title="Anuncios de autos que publicas">
            <P>Cuando publicas un auto en venta recopilamos los datos que capturas, entre ellos:</P>
            <List>
              <Item>Marca, modelo, versión, año, precio, kilometraje, combustible, transmisión, tipo de carrocería, color, equipamiento y descripción</Item>
              <Item>Las fotos del auto que tomas o eliges para el anuncio (una por cada ángulo requerido)</Item>
              <Item>La sucursal de Carmexio que eliges para revisar y vender el auto</Item>
            </List>
            <P>
              El personal de Carmexio revisa cada anuncio antes de publicarlo y puede agregar un reporte de inspección (calificación general, checklist y estado de la carrocería) sobre el auto.
            </P>
          </SubSection>

          <SubSection title="Mensajes">
            <P>
              Los mensajes que envías en el chat de la app son conversaciones entre tú y una sucursal de Carmexio. Se almacenan para que tú y el personal de Carmexio puedan leerlos y responderlos.
            </P>
          </SubSection>

          <SubSection title="Actividad en la app">
            <P>
              Guardamos los autos que marcas como favoritos y los anuncios que publicas, y contamos cuántas veces se ve un anuncio. Preferencias como el tema, las búsquedas recientes y si ya viste las pantallas de bienvenida se guardan únicamente en tu dispositivo.
            </P>
          </SubSection>

          <SubSection title="Datos recopilados automáticamente">
            <P>
              No usamos la app con fines publicitarios ni integramos herramientas de analítica o publicidad de terceros. Nuestros proveedores de alojamiento e infraestructura (ver abajo) pueden registrar datos técnicos estándar, como dirección IP, tipo de dispositivo y fecha y hora de las solicitudes, por motivos de seguridad y confiabilidad.
            </P>
          </SubSection>

          <P>No recopilamos datos personales sensibles ni datos financieros o de pago.</P>
        </Section>

        <Section title="2. Permisos del dispositivo">
          <List>
            <Item label="Cámara:">se usa únicamente cuando tomas fotos de tu auto para un anuncio o una foto de perfil.</Item>
            <Item label="Galería de fotos:">se usa únicamente cuando eliges una foto existente para un anuncio o tu perfil.</Item>
          </List>
          <P>
            La app no accede a tus contactos, micrófono ni ubicación precisa. Las fotos se suben solo cuando tú las tomas o las seleccionas.
          </P>
        </Section>

        <Section title="3. Finalidades del tratamiento">
          <P>Usamos la información anterior únicamente para operar las funciones principales de la app:</P>
          <List>
            <Item>Crear y proteger tu cuenta</Item>
            <Item>Revisar, inspeccionar, publicar y administrar los anuncios de autos que publicas</Item>
            <Item>Permitirte chatear con las sucursales de Carmexio y que el personal te contacte sobre tu anuncio, una visita o una prueba de manejo</Item>
            <Item>Mostrar tus favoritos y el estado de tus anuncios</Item>
            <Item>Prevenir fraudes y mantener seguro el servicio</Item>
          </List>
          <P>
            No vendemos datos personales ni los usamos para publicidad o elaboración de perfiles. No tratamos tus datos para finalidades secundarias.
          </P>
        </Section>

        <Section title="4. Qué pueden ver otras personas">
          <List>
            <Item label="Público:">una vez que Carmexio aprueba un anuncio, los datos del auto, sus fotos y el reporte de inspección son visibles para cualquier persona que use la app o el sitio web.</Item>
            <Item label="No público:">tu nombre, correo electrónico y teléfono nunca se muestran a los compradores. Los compradores contactan a la sucursal de Carmexio, no al dueño.</Item>
            <Item label="Personal de Carmexio:">el personal de la sucursal que atiende tu auto o tu conversación puede ver tu anuncio, tus mensajes y tus datos de contacto para poder atenderte.</Item>
          </List>
        </Section>

        <Section title="5. Dónde se almacenan los datos">
          <P>
            Los datos de cuenta, anuncios y chat se almacenan en Supabase (autenticación, base de datos y almacenamiento de archivos), y la API de Carmexio está alojada en Railway. Los datos viajan cifrados (HTTPS) y pueden procesarse en servidores ubicados fuera de México. Estos proveedores tratan los datos por cuenta nuestra conforme a sus propias prácticas de privacidad y seguridad:{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              supabase.com/privacy
            </a>{' '}
            y{' '}
            <a href="https://railway.com/legal/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              railway.com/legal/privacy
            </a>
            .
          </P>
        </Section>

        <Section title="6. Transferencias y con quién compartimos datos">
          <P>No compartimos datos personales con terceros, salvo con:</P>
          <List>
            <Item>El personal de las sucursales de Carmexio, como se describe arriba, para revisar anuncios, responder mensajes y agendar visitas</Item>
            <Item>Nuestros proveedores de servicios (actualmente Supabase y Railway), que tratan los datos por cuenta nuestra para operar la app</Item>
            <Item>Autoridades, cuando lo exija la ley, un reglamento o un procedimiento legal</Item>
          </List>
        </Section>

        <Section title="7. Llamadas, WhatsApp y mapas">
          <P>
            La app puede abrir el teléfono o WhatsApp con el número de una sucursal, y tu app de mapas con la dirección de una sucursal, usando las aplicaciones de tu dispositivo. Esas aplicaciones se rigen por sus propios avisos de privacidad; nosotros no recibimos el contenido de tus llamadas ni de tus mensajes de WhatsApp.
          </P>
        </Section>

        <Section title="8. Conservación de los datos">
          <P>
            Conservamos los datos de la cuenta mientras tu cuenta esté activa. Puedes eliminar desde la app un anuncio que hayas publicado; sus fotos se eliminan de nuestro almacenamiento. Los mensajes del chat se conservan mientras exista la cuenta de la conversación. Cuando se elimina una cuenta, eliminamos o anonimizamos los datos personales asociados, salvo los registros que debamos conservar para cumplir obligaciones legales.
          </P>
        </Section>

        <Section title="9. Eliminar tu cuenta">
          <P>
            Para eliminar tu cuenta y los datos asociados, escribe a <EmailLink /> desde el correo de tu cuenta con el asunto “Eliminar mi cuenta de Carmexio”. Confirmaremos y completaremos la eliminación en un plazo máximo de 30 días.
          </P>
        </Section>

        <Section title="10. Tus derechos ARCO">
          <P>
            Puedes consultar y corregir tu perfil (nombre, teléfono, ciudad, foto) y editar o eliminar tus anuncios directamente en la app. Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, tienes derecho a Acceder a tus datos, Rectificarlos, Cancelarlos u Oponerte a su tratamiento (derechos ARCO), así como a revocar tu consentimiento.
          </P>
          <P>
            Para ejercerlos, envía tu solicitud a <EmailLink /> indicando tu nombre, el correo de tu cuenta y el derecho que deseas ejercer. Te responderemos en un plazo máximo de 20 días hábiles.
          </P>
        </Section>

        <Section title="11. Privacidad de menores">
          <P>
            La app está dirigida a personas adultas (18 años o más) que desean comprar o vender un auto. No está dirigida a menores de edad y no recopilamos datos de menores de forma intencional.
          </P>
        </Section>

        <Section title="12. Cambios a este aviso">
          <P>
            Podemos actualizar este aviso ocasionalmente. Los cambios se publicarán en esta página con una nueva fecha de entrada en vigor.
          </P>
        </Section>

        <Section title="13. Contacto">
          <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
            Si tienes preguntas sobre este Aviso de Privacidad o sobre el tratamiento de tus datos, contáctanos en:
          </p>
          <p style={{ color: '#374151', lineHeight: '1.6' }}>
            <strong>RovitaTech</strong>
            <br />
            <strong>Correo:</strong> <EmailLink />
          </p>
        </Section>
      </PolicyShell>
    </div>
  )
}
