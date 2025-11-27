import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EventsPage from './components/EventsPage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import CurtainReveal from './components/CurtainReveal';
import CustomCursor from './components/CustomCursor';
import BookingModal from './components/BookingModal';
import GlobalEffects from './components/GlobalEffects';
import PageTransition from './components/PageTransition';
import { AnimatePresence } from 'framer-motion';


function App() {
  // Default to 'dark' for the luxury theme
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Audio State
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audio] = useState(new Audio('/audio/ambient-lounge.wav'));

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.3; // Low ambient volume

    if (isAudioPlaying) {
      audio.play().catch(e => {
        console.log("Audio play failed:", e);
        setIsAudioPlaying(false); // Revert if blocked
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isAudioPlaying, audio]);

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen font-sans selection:bg-gold-200 selection:text-charcoal transition-colors duration-500 cursor-none">
      <GlobalEffects />
      <CustomCursor />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Curtain Reveal Wrapper */}
      <CurtainReveal imagesToPreload={[
        '/textures/velvet.png',
        '/images/modern-kitchen.jpg',
        '/images/innovation.jpg',
        '/images/diversity.jpg',
        '/images/commitment.jpg',
        '/images/sustainability.jpg',
        '/images/artisian.jpg',
        '/images/corporate.jpg',
        '/images/wedding-home.jpg',
        '/images/private-party.jpg',
        '/images/menu/arabian.png',
        '/images/menu/continental.png',
        '/images/menu/south-asian.png',
        '/images/menu/desserts.png'
      ]}
        videosToPreload={['/videos/hero-luxury.mp4']}
      >
        <Router>
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            isAudioPlaying={isAudioPlaying}
            toggleAudio={toggleAudio}
          />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </Router>
      </CurtainReveal>

    </div>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/events" element={<PageTransition><EventsPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/menu" element={<PageTransition><MenuPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;