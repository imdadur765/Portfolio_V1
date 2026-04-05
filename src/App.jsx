import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import ScrollToTop from './components/ScrollToTop';
import AnimusGlitch from './components/AnimusGlitch';
import DNAScrollBar from './components/DNAScrollBar';
import HomeDashboard from './pages/HomeDashboard';
import WebFieldPage from './pages/WebFieldPage';
import AppFieldPage from './pages/AppFieldPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <AnimusGlitch />
      <DNAScrollBar />
      <ScrollToTop />
      <div className="noise" />
      
      {/* Global Animus HUD Overlay */}
      <div className="field-hud">
        <div className="hud-line-v hl-1" />
        <div className="hud-line-v hl-2" />
        <div className="hud-line-h hh-1" />
        <div className="hud-line-h hh-2" />
        <div className="hud-scanline" />
      </div>

      <Navbar />
      <main className="content-area">
        <AnimatePresence mode="wait">
          <Motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomeDashboard />} />
              <Route path="/web" element={<WebFieldPage />} />
              <Route path="/apps" element={<AppFieldPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomeDashboard />} />
            </Routes>
          </Motion.div>
        </AnimatePresence>
      </main>
      <BottomNav />
    </div>
  );
}

export default App;