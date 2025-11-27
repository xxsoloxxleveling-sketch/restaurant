import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface StrengthItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const strengths: StrengthItem[] = [
  {
    id: 'kitchens',
    title: 'Modern Kitchens',
    description: 'Advanced infrastructure designed to meet high-volume and diverse catering needs. Our facilities ensure meals are prepared in safe and hygienic conditions.',
    image: '/images/modern-kitchen.jpg'
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Combining traditional culinary expertise with modern techniques and creative menu designs to create unique dining experiences.',
    image: '/images/innovation.jpg'
  },
  {
    id: 'diversity',
    title: 'Diversity',
    description: 'Experience across corporate, guest house, educational, and event catering sectors. We offer Continental, Pan Asian, Middle Eastern and South Asian Cuisines.',
    image: '/images/diversity.jpg'
  },
  {
    id: 'commitment',
    title: 'Commitment',
    description: 'Consistent focus on quality, affordability, and exceeding client expectations. We prioritize punctuality and reliability in every service.',
    image: '/images/commitment.jpg'
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    description: 'Implementing eco-friendly operations, waste segregation, and responsible food management practices to contribute positively to the environment.',
    image: '/images/sustainability.jpg'
  }
];

const Features: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedStrength = strengths.find(s => s.id === selectedId);

  return (
    <section className="py-24 bg-white dark:bg-charcoal transition-colors duration-500 relative">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-charcoal dark:text-white uppercase tracking-tight transition-colors duration-500">
            Our Core Strengths
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {strengths.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer group shadow-lg bg-black"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 opacity-90"
              />

              {/* Gradient Overlay (Only on grid view) */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"
              />

              {/* Text Content (Only on grid view) */}
              <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 px-4">
                <motion.h3
                  className="text-white font-sans font-bold text-lg md:text-xl uppercase tracking-wider text-center drop-shadow-md"
                >
                  {item.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Immersive Modal Interaction */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedId && selectedStrength && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 min-h-screen">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-3xl aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden shadow-2xl bg-black"
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Shared Image expanding to fill background */}
                <motion.img
                  src={selectedStrength.image}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Heavy Dark Overlay for Readability (80% Opacity) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/80"
                />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(null);
                  }}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-30 p-2 bg-black/20 rounded-full hover:bg-black/40"
                  aria-label="Close modal"
                >
                  <X size={28} />
                </button>

                {/* Modal Text Content */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full p-8 md:p-16 text-center">
                  <motion.h3
                    className="font-sans font-bold text-3xl md:text-5xl uppercase text-white mb-8 tracking-widest"
                  >
                    {selectedStrength.title}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="w-20 h-1 bg-gold-500 mb-8 mx-auto rounded-full shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
                    <p className="text-stone-200 font-serif text-xl md:text-2xl leading-relaxed max-w-xl mx-auto">
                      {selectedStrength.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Features;