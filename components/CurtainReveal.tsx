import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CurtainRevealProps {
  children: React.ReactNode;
  imagesToPreload?: string[];
  videosToPreload?: string[];
}

const CurtainReveal: React.FC<CurtainRevealProps> = ({ children, imagesToPreload = [], videosToPreload = [] }) => {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // 1. Preload Critical Images
    const preloadImages = async () => {
      const imagePromises = imagesToPreload.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Resolve anyway to prevent blocking
        });
      });
      await Promise.all(imagePromises);
    };

    // 2. Preload Critical Videos
    const preloadVideos = async () => {
      const videoPromises = videosToPreload.map((src) => {
        return fetch(src)
          .then(response => response.blob())
          .then(() => true)
          .catch(() => true); // Resolve anyway
      });
      await Promise.all(videoPromises);
    };

    // 3. Wait for Window Load (Entire Site)
    const waitForPageLoad = new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve(true);
      } else {
        window.addEventListener('load', () => resolve(true), { once: true });
      }
    });

    // 4. Animation Sequence Timer
    // 2.0s (Loading Bar) + 3.5s (Curtain Open) = 5.5s Total
    const minimumTimer = new Promise(resolve => setTimeout(resolve, 5500));

    // Combine all loading tasks
    const loadingTask = Promise.all([minimumTimer, preloadImages(), preloadVideos(), waitForPageLoad]);

    // Fallback safety timer (12s - increased for video)
    const safetyTimer = new Promise(resolve => setTimeout(resolve, 12000));

    // Race the loading task against safety timer
    Promise.race([loadingTask, safetyTimer]).then(() => {
      // Wait for "Loading..." text to fade out (2.0s delay + 0.5s buffer)
      const timer = setTimeout(() => {
        setIntroFinished(true);
        document.body.style.overflow = 'auto'; // Changed from 'unset' to 'auto'

        // Play Swoosh Sound
        const audio = new Audio('/audio/curtain-swoosh.wav');
        audio.volume = 0.5;
        audio.play().catch(e => console.log("Audio play failed (user interaction needed first):", e));

      }, 2500); // This delay aligns with the animation's fade-out of the loading content

      return () => clearTimeout(timer); // Cleanup the timeout if component unmounts
    });

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [imagesToPreload, videosToPreload]);



  return (
    <>
      <AnimatePresence>
        {!introFinished && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            {/* --- LEFT CURTAIN --- */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 z-20"
              style={{
                width: "50%",
                // Fallback gradient + texture
                backgroundImage: "url('/textures/velvet.png'), linear-gradient(to right, #4a0404, #2a0202)",
                backgroundColor: "#2a0202",
                backgroundSize: "cover", // Ensure texture covers
                boxShadow: "10px 0 30px rgba(0,0,0,0.5)",
                transformOrigin: "top left"
              }}
              initial={{ x: "0%", skewX: 0, scaleX: 1, backgroundPosition: "0% 0%" }}
              animate={{
                x: "-100%",
                skewX: 5, // Bottom drags behind
                scaleX: 0.9, // Slight bunching
                backgroundPosition: "20% 0%" // Parallax: Texture moves slower than div
              }}
              transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1], delay: 2.2 }}
            >
              {/* Fabric Fold Shadows for realism */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 opacity-60" />
              <div className="absolute right-0 top-0 h-full w-[2px] bg-[#D4AF37]/50" />
            </motion.div>

            {/* --- RIGHT CURTAIN --- */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 z-20"
              style={{
                width: "50%",
                // Fallback gradient + texture
                backgroundImage: "url('/textures/velvet.png'), linear-gradient(to left, #4a0404, #2a0202)",
                backgroundColor: "#2a0202",
                backgroundSize: "cover",
                boxShadow: "-10px 0 30px rgba(0,0,0,0.5)",
                transformOrigin: "top right"
              }}
              initial={{ x: "0%", skewX: 0, scaleX: 1, backgroundPosition: "0% 0%" }}
              animate={{
                x: "100%",
                skewX: -5, // Bottom drags behind
                scaleX: 0.9, // Slight bunching
                backgroundPosition: "-20% 0%" // Parallax: Texture moves slower than div
              }}
              transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1], delay: 2.2 }}
            >
              {/* Fabric Fold Shadows for realism */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/40 opacity-60" />
              <div className="absolute left-0 top-0 h-full w-[2px] bg-[#D4AF37]/50" />
            </motion.div>

            {/* --- LOADING CONTENT (Center) --- */}
            <motion.div
              className="relative z-30 flex flex-col items-center justify-center"
              initial={{ opacity: 1 }}
              animate={{
                opacity: 0,
                scale: 1.1,
                y: -20
              }}
              transition={{
                delay: 2.0, // Disappear just before curtains open
                duration: 1.2,
                ease: "easeInOut"
              }}
            >
              <h1 className="font-serif text-5xl md:text-7xl text-white tracking-widest uppercase font-bold drop-shadow-2xl">
                Culinova
              </h1>
              <p className="mt-3 font-sans text-xs md:text-sm text-[#D4AF37] tracking-[0.4em] uppercase">
                Catering FZCO
              </p>

              {/* LAZY LOADING LINE ANIMATION */}
              <div className="mt-8 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#D4AF37]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTENT - Fades in slightly as curtains open */}
      <motion.div
        className="relative z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default CurtainReveal;