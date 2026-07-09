import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Sparkles, Rocket, History, FileText, ShieldCheck } from 'lucide-react';
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
  platformLabels,
} from '../../data/registry';
import { paths } from '../../../../shared/paths';
import { AppLandingScreenProps } from './AppLandingScreen.types';
import appStoreEN from '../../../../assets/images/stores/appStoreEN.svg';
import appStoreES from '../../../../assets/images/stores/appStoreES.svg';
import googlePlayEN from '../../../../assets/images/stores/googlePlayIconEN.png';
import googlePlayES from '../../../../assets/images/stores/googleplayIconES.png';
import './AppLandingScreen.scss';

const statusTone = (status: string): 'live' | 'beta' | 'soon' =>
  status === 'beta' ? 'beta' : status === 'soon' ? 'soon' : 'live';

export const AppLandingScreen: React.FC<AppLandingScreenProps> = () => {
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
        <div className="detail container">
          <p className="detail__empty">{t('apps.notFound')}</p>
          <SuperButton variant="outline" onClick={() => navigate(paths.apps)}>
            ‹ {t('apps.detail.back')}
          </SuperButton>
        </div>
      </PageLayout>
    );
  }

  const cta = resolveAppCtas(app);
  const kind = getAppKind(app);
  const tech = app.tech ?? [];
  const content = getAppContent(app.slug, i18n.language);
  const features = content?.features ?? [];
  const hasChangelog = (content?.changelog?.length ?? 0) > 0;
  const metaBits = [
    ...app.platforms.map((p) => platformLabels[p]),
    app.version ? `v${app.version}` : null,
    t(`apps.category.${app.category}`),
  ].filter(Boolean);

  return (
    <PageLayout>
      <div className="detail container">
        <button className="detail__back" onClick={() => navigate(paths.apps)}>
          ‹ {t('apps.detail.back')}
        </button>

        <section className="detail__hero">
          <AppIcon app={app} size="xl" />
          <div className="detail__hero-info">
            <div className="detail__title-row">
              <h1 className="detail__title">{app.name}</h1>
              <Badge tone="neutral">{t(kindI18nKey[kind])}</Badge>
              <Badge tone={statusTone(app.status)}>{t(`apps.status.${app.status}`)}</Badge>
            </div>
            {content?.tagline && <p className="detail__tagline">{content.tagline}</p>}
            <p className="detail__meta">{metaBits.join(' · ')}</p>
          </div>
        </section>

        <p className="detail__description">{content?.description ?? ''}</p>

        {/* Adaptive CTAs */}
        <div className="detail__ctas">
          {(cta.showAppStore || cta.showGooglePlay) && (
            <div className="detail__stores">
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
            </div>
          )}

          {(cta.showWeb || cta.showRepo) && (
            <div className="detail__web-ctas">
              {cta.showWeb && (
                <a href={app.webUrl} target="_blank" rel="noopener noreferrer">
                  <SuperButton variant="primary">
                    {t('apps.detail.openApp')} <ArrowUpRight size={16} />
                  </SuperButton>
                </a>
              )}
              {cta.showRepo && (
                <a href={app.repoUrl} target="_blank" rel="noopener noreferrer">
                  <SuperButton variant="outline">{t('apps.detail.viewRepo')}</SuperButton>
                </a>
              )}
            </div>
          )}

          {!cta.hasAny && (
            <span className="detail__coming-soon">{t('apps.detail.comingSoon')}</span>
          )}
        </div>

        {/* Tech stack */}
        {tech.length > 0 && (
          <div className="detail__stack">
            <span className="mono-eyebrow">{t('apps.detail.stack')}</span>
            <div className="detail__stack-chips">
              {tech.map((item) => (
                <span key={item} className="detail__stack-chip">{item}</span>
              ))}
            </div>
          </div>
        )}

        {/* Explore: landing + docs — one consistent, evident button group */}
        <div className="detail__nav">
          <button
            className="detail__nav-btn"
            onClick={() => navigate(paths.appLanding(app.slug))}
          >
            <Rocket size={17} />
            {t('apps.detail.viewLanding')}
          </button>
          {hasChangelog && (
            <button
              className="detail__nav-btn"
              onClick={() => navigate(paths.appChangelog(app.slug))}
            >
              <History size={17} />
              {t('apps.detail.changelog')}
            </button>
          )}
          {app.termsAndConditions && (
            <button
              className="detail__nav-btn"
              onClick={() => navigate(paths.appTerms(app.slug))}
            >
              <FileText size={17} />
              {t('apps.detail.terms')}
            </button>
          )}
          {app.privacyPolicy && (
            <button
              className="detail__nav-btn"
              onClick={() => navigate(paths.appPrivacy(app.slug))}
            >
              <ShieldCheck size={17} />
              {t('apps.detail.privacy')}
            </button>
          )}
        </div>

        {/* Features */}
        {features.length > 0 && (
          <section className="detail__features">
            <span className="mono-eyebrow">{t('apps.detail.features')}</span>
            <div className="detail__features-grid">
              {features.map((feature, index) => (
                <div key={index} className="detail__feature">
                  <span className="detail__feature-icon"><Sparkles size={16} /></span>
                  <p className="detail__feature-text">{feature}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Screenshots */}
        {app.screenshots && app.screenshots.length > 0 && (
          <section className="detail__screenshots">
            <span className="mono-eyebrow">{t('apps.detail.screenshots')}</span>
            <div className="detail__screenshots-row">
              {app.screenshots.map((shot, index) => (
                <img key={index} src={shot} alt={`${app.name} ${index + 1}`} className="detail__screenshot" />
              ))}
            </div>
          </section>
        )}
      </div>
    </PageLayout>
  );
};
