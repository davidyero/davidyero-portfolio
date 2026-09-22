import React from 'react';
import { useTranslation } from 'react-i18next';
import { SuperPageTemplate } from '../../../../components/SuperPageTemplate/SuperPageTemplate';
import { SuperIdentity } from '../../../../components/SuperIdentity/SuperIdentity';
import { SuperProfileMeta } from '../../../../components/SuperProfileMeta/SuperProfileMeta';
import { SuperRow } from '../../../../components/SuperRow/SuperRow';
import { SuperTagList } from '../../../../components/SuperTagList/SuperTagList';
import { SOCIAL_LINKS } from '../../../../shared/contact';
import { CAREER, FREELANCE, durationOf } from '../../../../shared/career';
import { AboutScreenProps } from './AboutScreen.types';
import './AboutScreen.scss';

export const AboutScreen: React.FC<AboutScreenProps> = () => {
  const { t } = useTranslation();

  // "3a 1m", "10m". Se compone aquí y no en i18n porque las unidades son las
  // mismas en los dos idiomas y la cifra la calcula el propio dato.
  const durationLabel = (from: string, to?: string): string => {
    const { years, months } = durationOf(from, to);
    return [years ? `${years}a` : null, months ? `${months}m` : null].filter(Boolean).join(' ');
  };

  return (
    <SuperPageTemplate variant="reading">
      <div className="about">
        <SuperIdentity tagline={t('about.role')} description={t('about.bio')} />

        <section className="about__block">
          <span className="mono-eyebrow mono-eyebrow--section">{t('about.eyebrow')}</span>
          <ol className="about__timeline">
            {CAREER.map((entry) => (
              <li key={entry.id} className="about__entry">
                <header className="about__entry-head">
                  <h2 className="about__entry-role">{t(entry.roleKey)}</h2>
                  <p className="about__entry-org">
                    {entry.company}
                    {entry.client && (
                      <span className="about__entry-client">
                        {' · '}
                        {t('about.client')}: {entry.client}
                      </span>
                    )}
                  </p>
                  <p className="about__entry-period">
                    {entry.from} → {entry.to ?? t('about.now')}
                    {' · '}
                    {durationLabel(entry.from, entry.to)}
                  </p>
                </header>

                <SuperTagList tags={entry.stack} align="start" />

                <ul className="doc-list">
                  {entry.taskKeys.map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="about__block">
          <span className="mono-eyebrow mono-eyebrow--section">
            {t('about.freelance.eyebrow')}
          </span>
          <p className="about__freelance-text">{t('about.freelance.text')}</p>
          <SuperTagList tags={FREELANCE.map((entry) => entry.company)} align="start" />
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

        <SuperProfileMeta />
      </div>
    </SuperPageTemplate>
  );
};
