import React from 'react';
import { PageLayout } from '../PageLayout/PageLayout';
import { SuperListHeader } from '../SuperListHeader/SuperListHeader';
import { SuperPageTemplateProps } from './SuperPageTemplate.types';
import './SuperPageTemplate.scss';

// Template base de TODA vista del sitio. Decide el ancho por `variant` y, si se
// le pasa título, monta la cabecera de listado.
//
// Existe para que un cambio de ancho, de espaciado superior o de cabecera se
// haga en un sitio y llegue a las diez pantallas. Antes cada una repetía
// `container container--x` y su propio padding, y bastaba tocar una para que
// dejaran de parecerse.
export const SuperPageTemplate: React.FC<SuperPageTemplateProps> = ({
  variant,
  eyebrow,
  title,
  subtitle,
  headerExtra,
  children,
}) => (
  <PageLayout>
    <div className={`page-template page-template--${variant} container`}>
      {title && (
        <SuperListHeader
          eyebrow={eyebrow ?? ''}
          title={title}
          subtitle={subtitle ?? ''}
        >
          {headerExtra}
        </SuperListHeader>
      )}
      {children}
    </div>
  </PageLayout>
);
