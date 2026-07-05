import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './PageLayout.scss';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <main className="page__main">{children}</main>
      <Footer />
    </div>
  );
};
