import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { BrandMark } from '../../../../components/BrandMark/BrandMark';
import { SuperRow } from '../../../../components/SuperRow/SuperRow';
import { SuperMetaList } from '../../../../components/SuperMetaList/SuperMetaList';
import { SOCIAL_LINKS } from '../../../../shared/contact';
import { experienceTimeline } from '../../config/experience';
import { AboutScreenProps } from './AboutScreen.types';
import './AboutScreen.scss';

// Sobre mi es la misma columna que la home: identidad, hechos y un historial.
// El bloque de IA que habia aqui se retiro: era una lista de palabras sin una
// sola cifra detras, justo lo que el sistema prohibe.
export const AboutScreen: React.FC<AboutScreenProps> = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <div className="about container container--reading">
        <section className="about__identity">
          <BrandMark size="large" className="about__avatar" />
          <h1 className="about__name">David Yepes</h1>
          <p className="about__role">{t('about.role')}</p>
          <p className="about__bio">{t('about.bio')}</p>
        </section>

        <section className="about__block">
          <span className="mono-eyebrow mono-eyebrow--section">{t('about.eyebrow')}</span>
          <ol className="about__timeline">
            {experienceTimeline.map((exp) => (
              <li key={exp.id} className="about__entry">
                <span className="about__period">
                  {exp.from} — {exp.to ?? t('about.now')}
                </span>
                <div className="about__entry-body">
                  <h2 className="about__entry-role">
                    {t(exp.roleKey)}
                    <span className="about__entry-org"> · {exp.org}</span>
                  </h2>
                  <p className="about__entry-desc">{t(exp.descKey)}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="about__block">
          <span className="mono-eyebrow mono-eyebrow--section">{t('about.links.eyebrow')}</span>
          <div className="about__rows">
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
