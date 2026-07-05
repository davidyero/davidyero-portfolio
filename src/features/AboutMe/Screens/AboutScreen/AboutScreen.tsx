import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '../../../../components/PageLayout/PageLayout';
import { experienceTimeline } from '../../config/experience';
import { AboutScreenProps } from './AboutScreen.types';
import './AboutScreen.scss';

export const AboutScreen: React.FC<AboutScreenProps> = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <div className="about container">
        <aside className="about__profile">
          <div className="about__avatar">DY</div>
          <h1 className="about__name">David Yepes</h1>
          <p className="about__role">{t('about.role')}</p>

          <div className="about__links">
            <a
              className="about__link"
              href="https://www.linkedin.com/in/davidyero"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('about.linkedin')}
            </a>
            <a
              className="about__link"
              href="https://github.com/davidyero"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('about.github')}
            </a>
          </div>

          <p className="about__bio">{t('about.bio')}</p>
        </aside>

        <section className="about__experience">
          <span className="mono-eyebrow">{t('about.eyebrow')}</span>
          <div className="about__timeline">
            {experienceTimeline.map((exp) => (
              <article key={exp.id} className="about__exp-card">
                <div className="about__exp-head">
                  <h2 className="about__exp-role">
                    {t(exp.roleKey)} <span className="about__exp-org">· {exp.org}</span>
                  </h2>
                  <span className="about__exp-period">
                    {exp.from} — {exp.to ?? t('about.now')}
                  </span>
                </div>
                <p className="about__exp-desc">{t(exp.descKey)}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
