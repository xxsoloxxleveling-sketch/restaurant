import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
  isAudioPlaying?: boolean;
  toggleAudio?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme = 'dark', toggleTheme, isAudioPlaying = false, toggleAudio }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', hash: '#hero' },
    { name: 'About', path: '/about', hash: '' },
    { name: 'Events', path: '/events', hash: '' },
    { name: 'Menu', path: '/menu', hash: '' },
    { name: 'Safety', path: '/', hash: '#haccp' },
    { name: 'Contact', path: '/contact', hash: '' },
  ];

  const handleNavClick = (path: string, hash: string) => {
    setIsMobileMenuOpen(false);

    if (path !== location.pathname) {
      navigate(path);
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      if (hash) {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-black/60 backdrop-blur-md border-b border-white/10 py-4 shadow-lg'
        : 'bg-transparent py-6 border-b border-transparent'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={`font-serif text-2xl md:text-3xl font-bold tracking-wider transition-colors duration-300 ${isScrolled ? 'text-gold-400' : 'text-white'}`}>
            CULINOVA
          </span>
          <span className={`text-[0.6rem] uppercase tracking-[0.3em] ${isScrolled ? 'text-stone-300' : 'text-stone-200'}`}>
            Catering FZCO
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path && (link.path !== '/' || !link.hash);
            return (
              <MagneticButton key={link.name}>
                <button
                  onClick={() => handleNavClick(link.path, link.hash)}
                  className={`text-sm uppercase tracking-widest font-medium transition-colors duration-300 hover:text-gold-400 ${isActive ? 'text-gold-400' : (isScrolled ? 'text-stone-200' : 'text-stone-200')
                    }`}
                >
                  {link.name}
                </button>
              </MagneticButton>
            );
          })}

          {/* Audio Toggle Button */}
          {toggleAudio && (
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full transition-colors duration-300 ${isScrolled ? 'hover:bg-white/10 text-stone-200' : 'hover:bg-white/10 text-white'}`}
              aria-label="Toggle Audio"
            >
              {isAudioPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          )}

          {/* Theme Toggle Button */}
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${isScrolled ? 'hover:bg-white/10 text-stone-200' : 'hover:bg-white/10 text-white'
                }`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-4">
          {toggleAudio && (
            <button
              onClick={toggleAudio}
              className="text-white p-2"
              aria-label="Toggle Audio"
            >
              {isAudioPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </button>
          )}
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="text-white p-2"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          )}
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path + link.hash}
                  onClick={() => handleNavClick(link.path, link.hash)}
                  className="text-stone-300 hover:text-gold-400 text-sm uppercase tracking-widest py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;