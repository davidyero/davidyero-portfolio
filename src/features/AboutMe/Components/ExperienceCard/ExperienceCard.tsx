import React from 'react';
import { ExperienceCardProps } from './ExperienceCard.types';
import './ExperienceCard.scss';

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
}) => {
  return (
    <div className="experience-card">
      <div className="experience-card__header">
        <div>
          <h4 className="experience-card__title">{title}</h4>
          <p className="experience-card__company">{company}</p>
        </div>
        <span className="experience-card__period">{period}</span>
      </div>
      <p className="experience-card__description">{description}</p>
    </div>
  );
};
