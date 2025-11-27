import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CurtainReveal from './components/CurtainReveal';
import CustomCursor from './components/CustomCursor';
import BookingModal from './components/BookingModal';
import GlobalEffects from './components/GlobalEffects';
import PageTransition from './components/PageTransition';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';

// Lazy load pages
const Home = lazy(() => import('./components/Home'));
const EventsPage = lazy(() => import('./components/EventsPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const MenuPage = lazy(() => import('./components/MenuPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));



const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Preloader />}>
        <Routes location={location}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/events" element={<PageTransition><EventsPage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/menu" element={<PageTransition><MenuPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};


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
        '/images/menu/desserts.png',
        '/images/corporate-business.jpg',
        '/images/wedding-grand.jpg',
        '/images/private-party-social.jpg',
        '/images/festival-event.jpg'
      ]}
        videosToPreload={['/videos/hero-luxury.mp4', '/videos/about-hero-new.mp4', '/videos/event-cta-bg.mp4']}
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



export default App;