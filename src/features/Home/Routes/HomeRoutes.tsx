import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../Screens/HomeScreen/HomeScreen';

export const HomeRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
};
