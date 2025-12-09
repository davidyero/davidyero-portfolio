import React from 'react';
import { Header } from '../../../../components/Header/Header';
import { SuperButton } from '../../../../components/SuperButton/SuperButton';
import { HomeScreenProps } from './HomeScreen.types';
import './HomeScreen.scss';

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <>
      <Header />
      <div className="home-screen">
        <section className="home-screen__hero">
          <div className="home-screen__hero-content">
            <div className="home-screen__avatar">
              <div className="home-screen__avatar-placeholder">DY</div>
            </div>
            <h1 className="home-screen__title">
              Hola, soy <span className="home-screen__highlight">David Yepes</span>
            </h1>
            <h2 className="home-screen__subtitle">
              Desarrollador Full Stack
            </h2>
            <p className="home-screen__description">
              Apasionado por crear experiencias web increíbles con tecnologías modernas.
              Especializado en React, TypeScript y Node.js.
            </p>
            <div className="home-screen__cta">
              <SuperButton variant="primary" size="large">
                Ver Proyectos
              </SuperButton>
              <SuperButton variant="outline" size="large">
                Contactar
              </SuperButton>
            </div>
          </div>
        </section>

        <section className="home-screen__skills">
          <h3 className="home-screen__section-title">Tecnologías</h3>
          <div className="home-screen__skills-grid">
            <div className="home-screen__skill-card">
              <div className="home-screen__skill-icon">⚛️</div>
              <h4>React</h4>
            </div>
            <div className="home-screen__skill-card">
              <div className="home-screen__skill-icon">📘</div>
              <h4>TypeScript</h4>
            </div>
            <div className="home-screen__skill-card">
              <div className="home-screen__skill-icon">🟢</div>
              <h4>Node.js</h4>
            </div>
            <div className="home-screen__skill-card">
              <div className="home-screen__skill-icon">🎨</div>
              <h4>Sass</h4>
            </div>
            <div className="home-screen__skill-card">
              <div className="home-screen__skill-icon">📱</div>
              <h4>React Native</h4>
            </div>
            <div className="home-screen__skill-card">
              <div className="home-screen__skill-icon">🚀</div>
              <h4>Next.js</h4>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
