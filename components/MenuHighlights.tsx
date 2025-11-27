import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    title: "South Asian Cuisines",
    description: "Indulge in carefully prepared authentic South Asian cuisine, rich in spices and tradition. From slow-cooked curries to aromatic biryanis, every dish tells a story of heritage.",
    image: "/south_asian_cuisine.webp"
  },
  {
    id: 2,
    title: "Middle Eastern",
    description: "Experience the essence of Middle Eastern hospitality with our selection of mezze, tender grills, and traditional dishes crafted with premium ingredients.",
    image: "/middle_eastern_cuisine.webp"
  },
  {
    id: 3,
    title: "Continental & Pan Asian",
    description: "A journey through global flavours. Expertly executed continental mains and vibrant Pan-Asian specialties that bring modern sophistication to your event.",
    image: "/continental_pan_asian.webp"
  },
  {
    id: 4,
    title: "Artisan Desserts",
    description: "Elegant pastries and traditional sweets that provide the perfect ending to any meal, handcrafted by our master pastry chefs.",
    image: "/artisan_desserts.webp"
  }
];

const MenuHighlights: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % menuItems.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % menuItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="menu" className="w-full bg-[#1a1a1a] py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row h-[600px]"
      > {/* Fixed Height Container */}

        {/* LEFT: TEXT CONTENT */}
        <div className="w-full md:w-2/5 flex flex-col justify-center px-8 md:px-16 relative z-10 bg-[#1a1a1a]">
          <p className="font-serif text-[#D4AF37] mb-4 text-lg tracking-wider italic">Our Cuisines</p>

          {/* Text Animation Container */}
          <div className="h-[300px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 w-full"
              >
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                  {menuItems[currentIndex].title}
                </h2>
                <p className="text-stone-400 leading-relaxed mb-8 text-sm md:text-base max-w-prose font-light">
                  {menuItems[currentIndex].description}
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors uppercase text-xs tracking-widest font-semibold"
                >
                  Book This Menu &rarr;
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: IMAGE SLIDER */}
        <div className="w-full md:w-3/5 relative h-full bg-black">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={menuItems[currentIndex].image}
              alt={menuItems[currentIndex].title}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-50%", opacity: 0 }} // Parallax exit effect
              transition={{ duration: 0.6, ease: "circOut" }}
            />
          </AnimatePresence>

          {/* Gradient Overlay for controls readability */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

          {/* CONTROLS - Placed at Bottom Left of IMAGE */}
          <div className="absolute bottom-0 left-0 bg-[#1a1a1a] p-6 flex gap-3 z-20 rounded-tr-3xl border-t border-r border-white/5">
            <button onClick={prevSlide} aria-label="Previous slide" className="p-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition duration-300">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} aria-label="Next slide" className="p-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition duration-300">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default MenuHighlights;