import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { SuperRow } from '../../../../components/SuperRow/SuperRow';
import { SuperMetaList } from '../../../../components/SuperMetaList/SuperMetaList';
import { SuperTagList } from '../../../../components/SuperTagList/SuperTagList';
import { SuperSocialRow } from '../../../../components/SuperSocialRow/SuperSocialRow';
import { BrandMark } from '../../../../components/BrandMark/BrandMark';
import { SOCIAL_LINKS } from '../../../../shared/contact';
import { paths } from '../../../../shared/paths';
import { useHomeScreen } from './useHomeScreen';
import { HomeScreenProps } from './HomeScreen.types';
import './HomeScreen.scss';

// La home es un indice, no un escaparate: quien soy, los hechos, a donde ir y
// como escribirme. Todo lo demas tiene su propia pantalla.
export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigate = useNavigate();
  const { t, stack, featured, counts, email, setEmail, contactHref } = useHomeScreen();

  return (
    <PageLayout>
      <div className="home container container--reading">
        <section className="home__identity">
          <BrandMark size="large" className="home__avatar" />
          <h1 className="home__name">David Yepes</h1>
          <p className="home__line">{t('home.hero.title')}</p>
          <p className="home__facts">{t('home.hero.facts')}</p>
          {/* Las cifras salen del catalogo, no escritas a mano: al cambiar el
              estado de una app la home no se queda mintiendo. */}
          <p className="home__counts">{t('home.hero.counts', { ...counts })}</p>
          <SuperTagList tags={stack} />
        </section>

        <section className="home__block">
          <span className="mono-eyebrow mono-eyebrow--section">{t('home.featured.eyebrow')}</span>
          <div className="home__rows">
            {featured.map((app) => (
              <SuperRow
                key={app.slug}
                {...(app.icon !== undefined ? { icon: app.icon } : {})}
                glyph={app.name.slice(0, 2).toLowerCase()}
                title={app.name}
                subtitle={app.subtitle}
                onClick={() => navigate(paths.app(app.slug))}
              />
            ))}
          </div>
        </section>

        <section className="home__block">
          <span className="mono-eyebrow mono-eyebrow--section">{t('home.index.eyebrow')}</span>
          <div className="home__rows">
            <SuperRow
              glyph="ls"
              title="apps/"
              subtitle={t('home.index.apps', { ...counts })}
              onClick={() => navigate(paths.apps)}
            />
            <SuperRow
              glyph="~/"
              title="sobre-mí/"
              subtitle={t('home.index.about')}
              onClick={() => navigate(paths.aboutMe)}
            />
            <SuperRow
              glyph="git"
              title="GitHub"
              subtitle="github.com/davidyero"
              href={SOCIAL_LINKS.github}
            />
            <SuperRow
              glyph="in"
              title="LinkedIn"
              subtitle="in/davidyero"
              href={SOCIAL_LINKS.linkedin}
            />
          </div>
        </section>

        <section className="home__contact panel">
          <h2 className="home__contact-title">{t('home.contact.title')}</h2>
          <p className="home__contact-text">{t('home.contact.text')}</p>

          {/* El unico CTA de la pagina. Sin backend detras: abre el cliente de
              correo con la direccion del visitante ya escrita en el cuerpo. */}
          <form
            className="home__contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              window.location.href = contactHref;
            }}
          >
            <input
              type="email"
              className="home__contact-input"
              placeholder={t('home.contact.placeholder')}
              aria-label={t('home.contact.placeholder')}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <SuperButton type="submit" variant="primary">
              {t('home.contact.cta')}
            </SuperButton>
          </form>
        </section>

        <SuperSocialRow />

        <SuperMetaList
          entries={[
            { label: t('home.meta.since'), value: '2017-10-02' },
            { label: t('home.meta.location'), value: t('home.meta.locationValue') },
            { label: t('home.meta.work'), value: t('home.meta.workValue') },
          ]}
        />
      </div>
    </PageLayout>
  );
};
