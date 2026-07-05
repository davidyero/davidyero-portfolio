import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { Badge } from '../../../../components/Badge/Badge';
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

const statusTone = (status: string): 'live' | 'beta' | 'soon' =>
  status === 'beta' ? 'beta' : status === 'soon' ? 'soon' : 'live';

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
      <PageLayout>
        <div className="showcase container">
          <p className="showcase__empty">{t('apps.notFound')}</p>
          <SuperButton variant="outline" onClick={() => navigate(paths.apps)}>
            ‹ {t('apps.detail.back')}
          </SuperButton>
        </div>
      </PageLayout>
    );
  }

  const cta = resolveAppCtas(app);
  const kind = getAppKind(app);
  const content = getAppContent(app.slug, i18n.language);
  const features = content?.features ?? [];

  return (
    <PageLayout>
      <div className="showcase">
        {/* Immersive hero with the app's own accent */}
        <section
          className="showcase__hero"
          style={{ '--app-accent': app.accent ?? 'var(--gradient)' } as React.CSSProperties}
        >
          <div className="showcase__hero-inner container">
            <button className="showcase__back" onClick={() => navigate(paths.app(app.slug))}>
              ‹ {app.name}
            </button>
            <AppIcon app={app} size="xl" />
            <div className="showcase__badges">
              <Badge tone="neutral">{t(kindI18nKey[kind])}</Badge>
              <Badge tone={statusTone(app.status)}>{t(`apps.status.${app.status}`)}</Badge>
            </div>
            <h1 className="showcase__title">{app.name}</h1>
            {content?.tagline && <p className="showcase__tagline">{content.tagline}</p>}

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
                  <SuperButton variant="primary" size="large">
                    {t('apps.detail.openApp')} <ArrowUpRight size={18} />
                  </SuperButton>
                </a>
              )}
              {!cta.hasAny && (
                <span className="showcase__soon">{t('apps.detail.comingSoon')}</span>
              )}
            </div>
          </div>
        </section>

        <div className="showcase__body container">
          <p className="showcase__description">{content?.description ?? ''}</p>

          {app.tech && app.tech.length > 0 && (
            <div className="showcase__tech">
              {app.tech.map((item) => (
                <span key={item} className="showcase__tech-chip">{item}</span>
              ))}
            </div>
          )}

          {/* Screenshots */}
          {app.screenshots && app.screenshots.length > 0 && (
            <section className="showcase__section">
              <h2 className="showcase__section-title">{t('apps.showcase.screenshotsTitle')}</h2>
              <div className="showcase__shots">
                {app.screenshots.map((shot, index) => (
                  <img key={index} src={shot} alt={`${app.name} ${index + 1}`} className="showcase__shot" />
                ))}
              </div>
            </section>
          )}

          {/* Features */}
          {features.length > 0 && (
            <section className="showcase__section">
              <h2 className="showcase__section-title">{t('apps.showcase.featuresTitle')}</h2>
              <div className="showcase__features">
                {features.map((feature, index) => (
                  <div key={index} className="showcase__feature">
                    <span className="showcase__feature-icon"><Sparkles size={18} /></span>
                    <p className="showcase__feature-text">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Legal footer */}
          {(app.termsAndConditions || app.privacyPolicy) && (
            <div className="showcase__legal">
              <span className="mono-eyebrow">{t('apps.showcase.legal')}</span>
              <div className="showcase__legal-links">
                {app.termsAndConditions && (
                  <button onClick={() => navigate(paths.appTerms(app.slug))}>
                    {t('apps.detail.terms')}
                  </button>
                )}
                {app.privacyPolicy && (
                  <button onClick={() => navigate(paths.appPrivacy(app.slug))}>
                    {t('apps.detail.privacy')}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};
