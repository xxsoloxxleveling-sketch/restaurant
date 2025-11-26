import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  { id: '1', name: 'Ahmed Al-Fayed', role: 'Executive Chef', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: '2', name: 'Sarah Jenkins', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: '3', name: 'Jean-Pierre Dubois', role: 'Culinary Head', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: '4', name: 'Mariam Khalid', role: 'HS&E Specialist', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl text-charcoal mb-4">The Team</h2>
            <p className="text-neutral-500 font-light">The experts behind the excellence.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={member.id} 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold-200 p-1">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-1">{member.name}</h3>
              <p className="text-gold-600 text-xs uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;