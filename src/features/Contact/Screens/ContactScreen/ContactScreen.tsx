import React from 'react';
import { useTranslation } from 'react-i18next';
import { SuperPageTemplate } from '../../../../components/SuperPageTemplate/SuperPageTemplate';
import { SuperRow } from '../../../../components/SuperRow/SuperRow';
import { BrandGlyph } from '../../../../components/SuperSocialRow/BrandGlyph';
import { CONTACT_DETAILS, SOCIAL_LINKS } from '../../../../shared/contact';
import { type ContactScreenProps } from './ContactScreen.types';
import './ContactScreen.scss';

// Contacto directo: cada fila abre su app (WhatsApp, el cliente de correo o LinkedIn).
export const ContactScreen: React.FC<ContactScreenProps> = () => {
  const { t } = useTranslation();

  return (
    <SuperPageTemplate
      variant="reading"
      eyebrow={t('contact.eyebrow')}
      title={t('contact.title')}
      subtitle={t('contact.subtitle')}
    >
      <div className="contact__rows">
        <SuperRow
          icon={<BrandGlyph network="whatsapp" size={16} />}
          title={t('contact.whatsapp')}
          subtitle={CONTACT_DETAILS.whatsappDisplay}
          href={SOCIAL_LINKS.whatsapp}
        />
        <SuperRow
          icon={<BrandGlyph network="email" size={16} />}
          title={t('contact.email')}
          subtitle={CONTACT_DETAILS.email}
          href={`mailto:${CONTACT_DETAILS.email}`}
        />
        <SuperRow
          icon={<BrandGlyph network="linkedin" size={16} />}
          title={t('contact.linkedin')}
          subtitle={CONTACT_DETAILS.linkedinDisplay}
          href={SOCIAL_LINKS.linkedin}
        />
      </div>
    </SuperPageTemplate>
  );
};
