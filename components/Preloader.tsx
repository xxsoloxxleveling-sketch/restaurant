import React from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  // PHYSICS ENGINE: Custom "Velvet" curve
  // Updated for even slower, smoother motion
  const curtainTransition = {
    duration: 4.5, // Significantly slower for premium feel
    ease: [0.7, 0, 0.15, 1], // Refined Bezier for ultra-smooth dragging start and soft settling
    delay: 0.2,
  };

  // Velvet Texture Styles
  // Combines a deep royal blue base with repeating gradients to create "folds"
  const velvetStyle = {
    backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)),
      repeating-linear-gradient(90deg, transparent 0px, transparent 40px, rgba(0,0,0,0.2) 40px, rgba(0,0,0,0.1) 80px)
    `
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      {/* --- LEFT CURTAIN --- */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#00102b] z-20 border-r border-black/20"
        style={velvetStyle}
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={curtainTransition}
      >
        {/* Inner Shadow for 3D Fold effect at the seam */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black/60 to-transparent pointer-events-none" />
        
        {/* Bottom fold shadow for "length" feel */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
      </motion.div>

      {/* --- RIGHT CURTAIN --- */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#00102b] z-20 border-l border-black/20"
        style={velvetStyle}
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={curtainTransition}
      >
        {/* Inner Shadow for 3D Fold effect at the seam */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
        
         {/* Bottom fold shadow for "length" feel */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
      </motion.div>

      {/* --- CENTRAL LOGO (Zooms out as curtains open) --- */}
      <motion.div
        className="relative z-30 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: [0, 1, 1, 0], // Fade in, hold, fade out
          scale: [0.9, 1, 1.1, 1.5] // Subtle zoom in
        }} 
        transition={{
          duration: 4.5,
          times: [0, 0.1, 0.5, 1], // Keyframe timing adapted for longer duration
          ease: "easeInOut"
        }}
      >
        <h1 className="font-serif text-4xl md:text-6xl text-[#D4AF37] tracking-widest uppercase font-bold drop-shadow-2xl text-center">
          CULINOVA
        </h1>
        <p className="mt-2 font-sans text-xs md:text-sm text-white/70 tracking-[0.3em] uppercase text-center">
          Catering FZCO
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;