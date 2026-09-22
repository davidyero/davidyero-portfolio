import React from 'react';
import { useTranslation } from 'react-i18next';
import { SuperMetaList } from '../SuperMetaList/SuperMetaList';
import { SuperTypewriter } from '../SuperTypewriter/SuperTypewriter';
import { useTypewriterCycle } from '../../shared/useTypewriterCycle';
import { careerTicker } from '../../shared/career';
import { CAREER_START_ISO } from '../../shared/appVersion';
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

  return (
    <SuperMetaList
      entries={[
        { label: t('profile.meta.since'), value: CAREER_START_ISO },
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
