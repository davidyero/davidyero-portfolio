import React from 'react';
import { Header } from '../../../../components/Header/Header';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { ExperienceCard } from '../../Components/ExperienceCard/ExperienceCard';
import { ProjectCard } from '../../Components/ProjectCard/ProjectCard';
import { AboutScreenProps, ExperienceItem, ProjectItem, SkillCategory } from './AboutScreen.types';
import './AboutScreen.scss';

const experiences: ExperienceItem[] = [
  {
    id: '1',
    title: 'Senior Web Developer',
    company: 'Tech Solutions Inc.',
    period: '2020 - Present',
    description:
      'Led the development of a large-scale e-commerce platform, improving performance by 30%. Mentored junior developers and introduced agile methodologies to the team.',
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'Innovate Web Co.',
    period: '2018 - 2020',
    description:
      'Developed responsive and interactive user interfaces using React and Vue.js. Collaborated with UI/UX designers to translate mockups into functional components.',
  },
];

const projects: ProjectItem[] = [
  {
    id: '1',
    title: 'Project Dashboard',
    description:
      'A data visualization dashboard for project management, built with React and D3.js.',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: '2',
    title: 'DevBlog Platform',
    description:
      'A feature-rich blogging platform for developers using Node.js, Express, and MongoDB.',
    liveUrl: '#',
    sourceUrl: '#',
  },
];

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Django'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Docker', 'Webpack', 'Figma'],
  },
];

export const AboutScreen: React.FC<AboutScreenProps> = () => {
  return (
    <>
      <Header />
      <div className="about-screen">
        {/* Hero Section */}
        <section className="about-screen__hero">
          <div className="about-screen__avatar">
            <div className="about-screen__avatar-placeholder">DY</div>
          </div>
          <div className="about-screen__hero-info">
            <h1 className="about-screen__name">David Yepes</h1>
            <p className="about-screen__role">Full-Stack Web Developer</p>
            <div className="about-screen__social-links">
              <SuperButton variant="outline" size="small">
                LinkedIn
              </SuperButton>
              <SuperButton variant="primary" size="small">
                GitHub
              </SuperButton>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="about-screen__section">
          <h2 className="about-screen__title">About Me</h2>
          <p className="about-screen__text">
            A passionate and creative full-stack developer with a knack for building beautiful,
            functional, and user-centric web applications. I thrive on turning complex problems into
            elegant solutions and am always eager to learn and adopt new technologies. My goal is to
            create software that not only works flawlessly but also provides an exceptional user
            experience.
          </p>
        </section>

        {/* Experience Section */}
        <section className="about-screen__section">
          <h2 className="about-screen__title">Experience</h2>
          <div className="about-screen__experience-list">
            {experiences.map((exp) => (
              <ExperienceCard
                key={exp.id}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
              />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="about-screen__section">
          <h2 className="about-screen__title">Skills</h2>
          <div className="about-screen__skills-container">
            {skillCategories.map((category) => (
              <div key={category.category} className="about-screen__skill-category">
                <h4>{category.category}</h4>
                <div className="about-screen__skill-tags">
                  {category.skills.map((skill) => (
                    <span key={skill} className="about-screen__skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="about-screen__section">
          <h2 className="about-screen__title">Featured Projects</h2>
          <div className="about-screen__projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                liveUrl={project.liveUrl}
                sourceUrl={project.sourceUrl}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
