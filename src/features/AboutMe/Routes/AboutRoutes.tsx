import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AboutScreen } from '../Screens/AboutScreen/AboutScreen';

export const AboutRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutScreen />} />
    </Routes>
  );
};
