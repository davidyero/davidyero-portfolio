import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { SuperMetaList } from '../../../../components/SuperMetaList/SuperMetaList';
import { SuperRow } from '../../../../components/SuperRow/SuperRow';
import { SuperTagList } from '../../../../components/SuperTagList/SuperTagList';
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

// Ficha de app leida como el manifest de un paquete: identidad arriba,
// metadatos en filas clave:valor, descarga, y luego el contenido largo.
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
        <div className="detail container container--reading">
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

  return (
    <PageLayout>
      <div className="detail container container--reading">
        <button className="detail__back" onClick={() => navigate(paths.apps)}>
          ‹ {t('apps.detail.back')}
        </button>

        <header className="detail__head">
          <AppIcon app={app} size="lg" />
          <div className="detail__head-body">
            <h1 className="detail__title">{app.name}</h1>
            {content?.tagline && <p className="detail__tagline">{content.tagline}</p>}
            <div className="detail__badges">
              <Badge tone="neutral">{t(kindI18nKey[kind])}</Badge>
              <Badge tone={statusTone(app.status)}>{t(`apps.status.${app.status}`)}</Badge>
            </div>
          </div>
        </header>

        <SuperMetaList
          entries={[
            {
              label: t('apps.detail.meta.platforms'),
              value: app.platforms.map((p) => platformLabels[p]).join(' · '),
            },
            { label: t('apps.detail.meta.category'), value: t(`apps.category.${app.category}`) },
            ...(app.version ? [{ label: t('apps.detail.meta.version'), value: `v${app.version}` }] : []),
          ]}
        />

        {content?.description && <p className="detail__description">{content.description}</p>}

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
                  <SuperButton variant="primary">{t('apps.detail.openApp')}</SuperButton>
                </a>
              )}
              {cta.showRepo && (
                <a href={app.repoUrl} target="_blank" rel="noopener noreferrer">
                  <SuperButton variant="outline">{t('apps.detail.viewRepo')}</SuperButton>
                </a>
              )}
            </div>
          )}

          {!cta.hasAny && <span className="detail__coming-soon">{t('apps.detail.comingSoon')}</span>}
        </div>

        {tech.length > 0 && (
          <section className="detail__block">
            <span className="mono-eyebrow mono-eyebrow--section">{t('apps.detail.stack')}</span>
            <SuperTagList tags={tech} align="start" />
          </section>
        )}

        {features.length > 0 && (
          <section className="detail__block">
            <span className="mono-eyebrow mono-eyebrow--section">{t('apps.detail.features')}</span>
            <ul className="doc-list">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="detail__block">
          <span className="mono-eyebrow mono-eyebrow--section">{t('apps.detail.more')}</span>
          <div className="detail__rows">
            <SuperRow
              glyph="↗"
              title={t('apps.detail.viewLanding')}
              subtitle={paths.appLanding(app.slug)}
              onClick={() => navigate(paths.appLanding(app.slug))}
            />
            {hasChangelog && (
              <SuperRow
                glyph="log"
                title={t('apps.detail.changelog')}
                subtitle={paths.appChangelog(app.slug)}
                onClick={() => navigate(paths.appChangelog(app.slug))}
              />
            )}
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
            {app.accountDeletion && (
              <SuperRow
                glyph="rm"
                title={t('apps.legal.deleteAccount.title')}
                subtitle={paths.appDeleteAccount(app.slug)}
                onClick={() => navigate(paths.appDeleteAccount(app.slug))}
              />
            )}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
