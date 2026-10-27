import React from 'react';
import { useTranslation } from 'react-i18next';
import { SuperMetaList } from '../SuperMetaList/SuperMetaList';
import { SuperTypewriter } from '../SuperTypewriter/SuperTypewriter';
import { useTypewriterCycle } from '../../shared/useTypewriterCycle';
import { careerTicker } from '../../shared/career';
import { CAREER_START_ISO } from '../../shared/appVersion';
import { useExperience } from '../../shared/useExperience';
import { SuperProfileMetaProps } from './SuperProfileMeta.types';

// Metadatos del perfil: desde cuándo, cargo y dónde. Cargo y empresa se
// escriben a la vez y en bucle.
//
// El bloque entero vive aquí y no en cada pantalla porque lo usan la home y
// Sobre mí: cuando estaba duplicado, al quitar dos filas en la home la otra
// vista se quedó pintando las claves de i18n en crudo.
export const SuperProfileMeta: React.FC<SuperProfileMetaProps> = () => {
  const { t } = useTranslation();
  const steps = React.useMemo(
    () => careerTicker().map(({ roleKey, label }) => [t(roleKey), label]),
    [t]
  );
  const { lines, isStill } = useTypewriterCycle(steps);
  const experience = useExperience();

  // "8 años, 11 meses, 20 días". Las unidades se eligen a mano en vez de
  // delegarlas en la pluralización de i18next: las claves de este proyecto son
  // planas y llevan puntos, así que los sufijos _one/_other no resolverían.
  const unit = (value: number, singular: string, plural: string): string =>
    `${value} ${t(value === 1 ? singular : plural)}`;

  const sinceValue = `${CAREER_START_ISO} [${[
    unit(experience.years, 'profile.meta.year', 'profile.meta.years'),
    unit(experience.months, 'profile.meta.month', 'profile.meta.months'),
    unit(experience.days, 'profile.meta.day', 'profile.meta.days'),
  ].join(', ')}]`;

  return (
    <SuperMetaList
      entries={[
        { label: t('profile.meta.since'), value: sinceValue },
        {
          label: t('profile.meta.role'),
          value: <SuperTypewriter text={lines[0] ?? ''} showCaret={!isStill} />,
        },
        {
          label: t('profile.meta.experience'),
          value: <SuperTypewriter text={lines[1] ?? ''} showCaret={!isStill} />,
        },
      ]}
    />
  );
};
