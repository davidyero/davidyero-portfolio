import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeScreen } from './features/Home/Screens/HomeScreen/HomeScreen';
import { AboutScreen } from './features/AboutMe/Screens/AboutScreen/AboutScreen';
import { MyAppsScreen } from './features/MyApps/Screens/MyAppsScreen/MyAppsScreen';
import { AppLandingScreen } from './features/MyApps/Screens/AppLandingScreen/AppLandingScreen';
import { ChangelogScreen } from './features/MyApps/Screens/ChangelogScreen/ChangelogScreen';
import { TermsScreen } from './features/MyApps/Screens/TermsScreen/TermsScreen';
import './styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/apps" element={<MyAppsScreen />} />
        <Route path="/apps/:slug" element={<AppLandingScreen />} />
        <Route path="/apps/:slug/changelog" element={<ChangelogScreen />} />
        <Route path="/apps/:slug/terms" element={<TermsScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
