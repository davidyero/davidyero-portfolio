import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { HomeScreen } from './features/Home/Screens/HomeScreen/HomeScreen';
import { AboutScreen } from './features/AboutMe/Screens/AboutScreen/AboutScreen';
import { MyAppsScreen } from './features/MyApps/Screens/MyAppsScreen/MyAppsScreen';
import { AppLandingScreen } from './features/MyApps/Screens/AppLandingScreen/AppLandingScreen';
import { AppShowcaseScreen } from './features/MyApps/Screens/AppShowcaseScreen/AppShowcaseScreen';
import { ChangelogScreen } from './features/MyApps/Screens/ChangelogScreen/ChangelogScreen';
import { TermsScreen } from './features/MyApps/Screens/TermsScreen/TermsScreen';
import { PrivacyScreen } from './features/MyApps/Screens/PrivacyScreen/PrivacyScreen';
import './styles/main.scss';

// Keeps legacy /apps/:slug[...] links alive (store legal links, old shares)
// by forwarding them to the new /app/:slug[...] canonical routes.
const LegacyAppRedirect: React.FC<{ suffix?: string }> = ({ suffix = '' }) => {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/app/${slug}${suffix}`} replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Canonical routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/apps" element={<MyAppsScreen />} />
        <Route path="/app/:slug" element={<AppLandingScreen />} />
        <Route path="/app/:slug/landing" element={<AppShowcaseScreen />} />
        <Route path="/app/:slug/changelog" element={<ChangelogScreen />} />
        <Route path="/app/:slug/terms" element={<TermsScreen />} />
        <Route path="/app/:slug/privacy" element={<PrivacyScreen />} />
        <Route path="/about-me" element={<AboutScreen />} />

        {/* Legacy → canonical redirects (keep old URLs working) */}
        <Route path="/about" element={<Navigate to="/about-me" replace />} />
        <Route path="/apps/:slug" element={<LegacyAppRedirect />} />
        <Route path="/apps/:slug/changelog" element={<LegacyAppRedirect suffix="/changelog" />} />
        <Route path="/apps/:slug/terms" element={<LegacyAppRedirect suffix="/terms" />} />
        <Route path="/apps/:slug/privacy" element={<LegacyAppRedirect suffix="/privacy" />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
