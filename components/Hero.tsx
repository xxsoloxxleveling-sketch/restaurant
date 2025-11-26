import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Button from './Button';
import RevealText from './ui/RevealText';
import MagneticButton from './ui/MagneticButton';

// High-quality, reliable Unsplash images for the Hero slideshow
export const heroVideos = [
  "/videos/hero-luxury.mp4"
];

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollY } = useScroll();

  // Parallax effect for background
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
    }, 8000); // Change video every 8 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal">
      {/* Background Video Slideshow with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="popLayout">
          <motion.video
            key={currentIndex}
            src={heroVideos[currentIndex]}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 8, ease: "linear" }
            }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Dark Overlay for text readability - 60% Opacity */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-charcoal to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white mix-blend-difference">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-gold-400 uppercase tracking-[0.3em] mb-6 text-sm md:text-base font-medium">
            <RevealText>Based in Dubai</RevealText>
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight drop-shadow-xl">
            <RevealText delay={0.2}>Where Tradition Meets</RevealText> <br />
            <span className="italic font-bold text-white">
              <RevealText delay={0.4}>Innovation</RevealText>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="max-w-2xl mx-auto text-stone-200 mb-12 text-lg font-light leading-relaxed drop-shadow-md"
          >
            Full-Service Catering & Events. Delivering culinary excellence with uncompromising hygiene and style.
          </motion.p>
          <div className="flex justify-center gap-6">
            <MagneticButton>
              <Button variant="primary" onClick={() => navigate('/contact')}>
                Book Now
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="outline" onClick={() => document.getElementById('menu')?.scrollIntoView()}>
                View Our Menus
              </Button>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-400 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;