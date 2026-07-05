import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bot } from 'lucide-react';
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
          <div className="about__ai">
            <div className="about__ai-head">
              <span className="about__ai-icon"><Bot size={20} /></span>
              <div>
                <span className="mono-eyebrow">{t('about.ai.eyebrow')}</span>
                <h2 className="about__ai-title">{t('about.ai.title')}</h2>
              </div>
            </div>
            <p className="about__ai-description">{t('about.ai.description')}</p>
            <div className="about__ai-chips">
              {String(t('about.ai.chips'))
                .split(' · ')
                .map((chip: string) => (
                  <span key={chip} className="about__ai-chip">
                    {chip}
                  </span>
                ))}
            </div>
          </div>

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
