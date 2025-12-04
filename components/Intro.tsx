import React from 'react';
import { motion } from 'framer-motion';

const Intro: React.FC = () => {
  return (
    <section id="intro" className="py-24 bg-stone-50 dark:bg-charcoal transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <h3 className="text-gold-600 dark:text-gold-500 uppercase tracking-widest text-sm font-semibold mb-3">
              Our Story
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal dark:text-white mb-8">
              Culinary Artistry <br /> in the Heart of Dubai
            </h2>
            <div className="max-w-[45ch]">
              <p className="text-neutral-600 dark:text-stone-300 leading-loose mb-6 font-light text-lg">
                Headquartered in Dubai, Culinova Catering was founded with the belief that catering should blend accessibility, innovation, and excellence. We move beyond the ordinary to create dining experiences that are as visually stunning as they are delicious.
              </p>
              <p className="text-neutral-600 dark:text-stone-300 leading-loose font-light text-lg">
                Our approach merges the disciplined traditions of fine dining with modern logistical expertise, ensuring that whether we serve ten guests or a thousand, the quality remains impeccable.
              </p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:w-1/2 relative"
          >
            <div className="relative z-10 overflow-hidden shadow-2xl">
              {/* Image: Chef hands finishing a plate - detailed macro shot */}
              <img
                src="/images/artisian.jpg"
                alt="Culinary Artistry"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Decorative Gold Border */}
            <div className="absolute top-8 -right-8 w-full h-full border-2 border-gold-400/30 z-0 hidden md:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Intro;