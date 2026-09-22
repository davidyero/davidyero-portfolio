import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SuperPageTemplate } from '../../../../components/SuperPageTemplate/SuperPageTemplate';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { SuperRow } from '../../../../components/SuperRow/SuperRow';
import { Badge } from '../../../../components/Badge/Badge';
import { SuperStatusBadge } from '../../../../components/SuperStatusBadge/SuperStatusBadge';
import { AppIcon } from '../../Components/AppIcon/AppIcon';
import {
  getAppBySlug,
  getAppContent,
  getAppKind,
  kindI18nKey,
  resolveAppCtas,
} from '../../data/registry';
import { paths } from '../../../../shared/paths';
import { AppShowcaseScreenProps } from './AppShowcaseScreen.types';
import appStoreEN from '../../../../assets/images/stores/appStoreEN.svg';
import appStoreES from '../../../../assets/images/stores/appStoreES.svg';
import googlePlayEN from '../../../../assets/images/stores/googlePlayIconEN.png';
import googlePlayES from '../../../../assets/images/stores/googleplayIconES.png';
import './AppShowcaseScreen.scss';


// Landing de la app: la unica pantalla que puede respirar mas. Aun asi no hay
// maqueta de telefono ni ventana de navegador falsa — el sistema las prohibe:
// no aportan un dato y envejecen peor que la propia app.
export const AppShowcaseScreen: React.FC<AppShowcaseScreenProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const app = getAppBySlug(slug);
  const isEs = i18n.language?.startsWith('es');
  const appStoreImg = isEs ? appStoreES : appStoreEN;
  const googlePlayImg = isEs ? googlePlayES : googlePlayEN;

  if (!app) {
    return (
      <SuperPageTemplate variant="reading">
        <div className="showcase">
          <p className="showcase__empty">{t('apps.notFound')}</p>
          <SuperButton variant="outline" onClick={() => navigate(paths.apps)}>
            ‹ {t('apps.detail.back')}
          </SuperButton>
        </div>
      </SuperPageTemplate>
    );
  }

  const cta = resolveAppCtas(app);
  const kind = getAppKind(app);
  const content = getAppContent(app.slug, i18n.language);
  const features = content?.features ?? [];
  const screenshots = app.screenshots ?? [];

  return (
    <SuperPageTemplate variant="reading">
      <div className="showcase">
        <button className="showcase__back" onClick={() => navigate(paths.app(app.slug))}>
          ‹ {app.name}
        </button>

        <section className="showcase__hero">
          <AppIcon app={app} size="xl" />
          <h1 className="showcase__title">{app.name}</h1>
          {content?.tagline && <p className="showcase__tagline">{content.tagline}</p>}
          <div className="showcase__badges">
            <Badge tone="neutral">{t(kindI18nKey[kind])}</Badge>
            <SuperStatusBadge status={app.status} />
          </div>

          <div className="showcase__cta">
            {cta.showAppStore && (
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge"
              >
                <img src={appStoreImg} alt={t('apps.detail.appStore')} />
              </a>
            )}
            {cta.showGooglePlay && (
              <a
                href={app.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge store-badge--play"
              >
                <img src={googlePlayImg} alt={t('apps.detail.googlePlay')} />
              </a>
            )}
            {cta.showWeb && (
              <a href={app.webUrl} target="_blank" rel="noopener noreferrer">
                <SuperButton variant="primary">{t('apps.detail.openApp')}</SuperButton>
              </a>
            )}
            {!cta.hasAny && (
              <span className="showcase__coming-soon">{t('apps.detail.comingSoon')}</span>
            )}
          </div>
        </section>

        {content?.description && <p className="showcase__description">{content.description}</p>}

        {features.length > 0 && (
          <section className="showcase__block">
            <span className="mono-eyebrow mono-eyebrow--section">
              {t('apps.showcase.featuresTitle')}
            </span>
            <ul className="doc-list">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {screenshots.length > 0 && (
          <section className="showcase__block">
            <span className="mono-eyebrow mono-eyebrow--section">
              {t('apps.showcase.screenshotsTitle')}
            </span>
            <div className="showcase__shots">
              {screenshots.map((shot, index) => (
                <img
                  key={shot}
                  src={shot}
                  alt={`${app.name} ${index + 1}`}
                  className="showcase__shot"
                />
              ))}
            </div>
          </section>
        )}

        <section className="showcase__block">
          <span className="mono-eyebrow mono-eyebrow--section">{t('apps.showcase.legal')}</span>
          <div className="showcase__rows">
            {app.termsAndConditions && (
              <SuperRow
                glyph="doc"
                title={t('apps.detail.terms')}
                subtitle={paths.appTerms(app.slug)}
                onClick={() => navigate(paths.appTerms(app.slug))}
              />
            )}
            {app.privacyPolicy && (
              <SuperRow
                glyph="doc"
                title={t('apps.detail.privacy')}
                subtitle={paths.appPrivacy(app.slug)}
                onClick={() => navigate(paths.appPrivacy(app.slug))}
              />
            )}
          </div>
        </section>
      </div>
    </SuperPageTemplate>
  );
};
