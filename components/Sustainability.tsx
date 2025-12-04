import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <section className="relative py-32 bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("/images/home-page-background-at-the-bottom.avif")' }}>
      <div className="absolute inset-0 bg-charcoal/80" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight"
          >
            "Serving thousands daily demands an uncompromising commitment to hygiene and environment."
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-center gap-8 mt-12"
          >
            <div className="flex items-center gap-3 text-stone-200 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-sm border border-white/10">
              <CheckCircle2 className="text-gold-500" />
              <span className="text-lg font-light">Waste segregation & recycling</span>
            </div>
            <div className="flex items-center gap-3 text-stone-200 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-sm border border-white/10">
              <CheckCircle2 className="text-gold-500" />
              <span className="text-lg font-light">Certified HS&E Standards</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;