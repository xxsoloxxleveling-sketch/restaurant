import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const HaccpSection: React.FC = () => {
  return (
    <section id="haccp" className="relative w-full py-24 bg-charcoal overflow-hidden">
      {/* BACKGROUND IMAGE with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Commercial Kitchen Background" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif font-bold text-white mb-10"
        >
          We are <span className="text-gold-500 italic">HACCP Certified</span>
        </motion.h2>

        {/* Description Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-stone-300 space-y-6 leading-relaxed text-lg font-light"
        >
          <p>
            Our Central Kitchen facility has all the approved HACCP certifications to operate. 
            What does that mean? HACCP certification is a system that recognizes that a food business 
            has developed, documented, and implemented systems and procedures in accordance with 
            HACCP and Dubai Food Safety Department.
          </p>
          <p>
            HACCP stands for <strong className="text-white font-medium">Hazard Analysis Critical Control Point</strong> and 
            is a tool to help identify and control food safety hazards that may occur within the food business.
          </p>
        </motion.div>

        {/* Animated Stamp Logo */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ scale: 0, rotate: -45, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gold-500 blur-2xl opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative border-4 border-white/90 rounded-full p-8 w-48 h-48 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm shadow-2xl">
               <ShieldCheck size={64} className="text-gold-500 mb-2" />
               <span className="text-white font-bold uppercase tracking-widest text-xs">Certified</span>
               <span className="text-white/80 font-serif text-sm mt-1">Standard</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HaccpSection;