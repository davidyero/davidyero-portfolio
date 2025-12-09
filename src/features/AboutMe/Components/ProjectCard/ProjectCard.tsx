import React from 'react';
import { ProjectCardProps } from './ProjectCard.types';
import './ProjectCard.scss';

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  liveUrl,
  sourceUrl,
}) => {
  return (
    <div className="project-card">
      <div className="project-card__image">
        {image ? <img src={image} alt={title} /> : '🚀'}
      </div>
      <div className="project-card__content">
        <h4 className="project-card__title">{title}</h4>
        <p className="project-card__description">{description}</p>
        <div className="project-card__links">
          {liveUrl && (
            <a className="project-card__link" href={liveUrl} target="_blank" rel="noopener noreferrer">
              View Live
            </a>
          )}
          {sourceUrl && (
            <a className="project-card__link" href={sourceUrl} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
