import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutGrid, Smartphone, UserRound } from 'lucide-react';
import { SuperPageTemplate } from '../../../../components/SuperPageTemplate/SuperPageTemplate';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { SuperRow } from '../../../../components/SuperRow/SuperRow';
import { SuperIdentity } from '../../../../components/SuperIdentity/SuperIdentity';
import { SuperProfileMeta } from '../../../../components/SuperProfileMeta/SuperProfileMeta';
import { SuperTagList } from '../../../../components/SuperTagList/SuperTagList';
import { SuperTypography } from '../../../../components/SuperTypography/SuperTypography';
import { SuperSocialRow } from '../../../../components/SuperSocialRow/SuperSocialRow';
import { BrandGlyph } from '../../../../components/SuperSocialRow/BrandGlyph';
import { SOCIAL_LINKS } from '../../../../shared/contact';
import { paths } from '../../../../shared/paths';
import { useHomeScreen } from './useHomeScreen';
import { HomeScreenProps } from './HomeScreen.types';
import './HomeScreen.scss';

// La home es un indice, no un escaparate: quien soy, los hechos, a donde ir y
// como escribirme. Todo lo demas tiene su propia pantalla.
export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigate = useNavigate();
  const view = useHomeScreen();
  const { t, stack, featured, countsLine, appsRowLine } = view;

  return (
    <SuperPageTemplate variant="reading">
      <div className="home">
        <SuperIdentity tagline={t('home.hero.title')} description={t('home.hero.facts')}>
          {/* Las cifras salen del catalogo, no escritas a mano: al cambiar el
              estado de una app la home no se queda mintiendo. */}
          <p className="home__counts">{countsLine}</p>
          <SuperTagList tags={stack} />
        </SuperIdentity>

        <section className="home__block">
          <span className="mono-eyebrow mono-eyebrow--section">{t('home.featured.eyebrow')}</span>
          <div className="home__rows">
            {featured.map((app) => (
              <SuperRow
                key={app.slug}
                {...(app.icon !== undefined ? { image: app.icon } : {})}
                icon={<Smartphone size={16} />}
                title={app.name}
                subtitle={app.subtitle}
                {...(app.reachKey ? { meta: t(app.reachKey) } : {})}
                onClick={() => navigate(paths.app(app.slug))}
              />
            ))}
          </div>
        </section>

        <section className="home__block">
          <span className="mono-eyebrow mono-eyebrow--section">{t('home.index.eyebrow')}</span>
          <div className="home__rows">
            <SuperRow
              icon={<LayoutGrid size={16} />}
              title="apps/"
              subtitle={appsRowLine}
              onClick={() => navigate(paths.apps)}
            />
            <SuperRow
              icon={<UserRound size={16} />}
              title="sobre-mí/"
              subtitle={t('home.index.about')}
              onClick={() => navigate(paths.aboutMe)}
            />
            <SuperRow
              icon={<BrandGlyph network="github" size={16} />}
              title="GitHub"
              subtitle="github.com/davidyero"
              href={SOCIAL_LINKS.github}
            />
            <SuperRow
              icon={<BrandGlyph network="linkedin" size={16} />}
              title="LinkedIn"
              subtitle="in/davidyero"
              href={SOCIAL_LINKS.linkedin}
            />
          </div>
        </section>

        <section className="home__contact panel">
          <h2 className="home__contact-title">{t('home.subscribe.title')}</h2>
          <p className="home__contact-text">{t('home.subscribe.text')}</p>

          {/* Hecha el alta, el formulario desaparece: dejar el boton ahi
              invita a pulsarlo otra vez sin que pase nada. */}
          {view.status === 'sent' ? (
            <SuperTypography variant="small" color="accent">
              {t('home.subscribe.done')}
            </SuperTypography>
          ) : (
            <>
              <form
                className="home__contact-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  view.submitSubscription();
                }}
              >
                <input
                  type="email"
                  className="home__contact-input"
                  placeholder={t('home.subscribe.placeholder')}
                  aria-label={t('home.subscribe.placeholder')}
                  value={view.email}
                  onChange={(event) => view.setEmail(event.target.value)}
                />

                {/* Trampa para bots: fuera de la vista y fuera del orden de
                    tabulacion, y anunciado como no presente a los lectores de
                    pantalla. Un script que rellena todos los inputs cae. */}
                <input
                  type="text"
                  name="website"
                  className="home__contact-honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={view.website}
                  onChange={(event) => view.setWebsite(event.target.value)}
                />

                <SuperButton
                  type="submit"
                  variant="primary"
                  isLoading={view.status === 'sending'}
                >
                  {t('home.subscribe.cta')}
                </SuperButton>
              </form>

              {view.status === 'invalid' && (
                <SuperTypography variant="meta" color="danger">
                  {t('home.subscribe.invalid')}
                </SuperTypography>
              )}
              {view.status === 'error' && (
                <SuperTypography variant="meta" color="danger">
                  {t('home.subscribe.error')}
                </SuperTypography>
              )}
            </>
          )}
        </section>

        <SuperSocialRow />

        <SuperProfileMeta />
      </div>
    </SuperPageTemplate>
  );
};
