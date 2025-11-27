import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'corp',
    title: 'Corporate Events',
    description: 'Sophisticated catering for board meetings, conferences, and galas.',
    image: '/images/corporate.jpg'
  },
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Bespoke menus and elegant service for your special day.',
    image: '/images/wedding-home.jpg'
  },
  {
    id: 'private',
    title: 'Private Parties',
    description: 'Intimate gatherings to grand celebrations, handled with care.',
    image: '/images/private-party.jpg'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-stone-50 dark:bg-black py-24 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h3 className="text-gold-600 dark:text-gold-500 uppercase tracking-widest text-sm font-semibold mb-3">Our Expertise</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal dark:text-white transition-colors duration-500">Curated Experiences</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <Link to="/events" className="group flex items-center gap-2 text-gold-600 dark:text-gold-500 uppercase tracking-widest text-sm font-semibold hover:text-gold-400 transition-colors">
              View All Events
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
            >
              <Link to="/events">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl text-white mb-2">{service.title}</h3>
                  <p className="text-stone-200 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link to="/events" className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-500 uppercase tracking-widest text-sm font-semibold hover:text-gold-400 transition-colors">
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;