import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Facebook, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#f5f5dc] dark:bg-charcoal text-charcoal dark:text-stone-300 pt-20 pb-10 border-t border-gold-200/50 dark:border-white/10 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1">
            <div className="flex flex-col items-start">
              <span className="font-serif text-2xl font-bold tracking-wider mb-1 text-charcoal dark:text-white transition-colors duration-500">
                CULINOVA
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.3em] mb-6 text-neutral-500 dark:text-neutral-400">
                Catering FZCO
              </span>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/culinovafzco?igsh=MXh4N2U1dGxuOXI3Zg==" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-gold-600 transition-colors"><Instagram size={20} /></a>
                <a href="https://www.facebook.com/culinovacateringllc/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-gold-600 transition-colors"><Facebook size={20} /></a>
                <a href="https://ae.linkedin.com/in/culinova-fzco-1a56bb37b" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-gold-600 transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-gold-500">Explore</h4>
            <ul className="space-y-3 font-light text-sm text-stone-500 dark:text-stone-400">
              <li><Link to="/" className="hover:text-charcoal dark:hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-charcoal dark:hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/events" className="hover:text-charcoal dark:hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/menu" className="hover:text-charcoal dark:hover:text-white transition-colors">Menu Highlights</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-gold-500">Contact</h4>
            <ul className="space-y-3 font-light text-sm text-stone-500 dark:text-stone-400">
              <li>Dubai, United Arab Emirates</li>
              <li>+971 4 323 3488</li>
              <li>info@culinova.ae</li>
            </ul>
          </div>

          {/* Trust Seal */}
          <div className="col-span-1 flex flex-col items-start md:items-end">
            <div className="flex items-center gap-2 border border-gold-400 px-4 py-2 rounded-sm text-gold-700 dark:text-gold-400 hover:bg-gold-50 dark:hover:bg-white/10 transition-colors cursor-pointer">
              <ShieldCheck size={24} />
              <span className="text-xs font-semibold uppercase tracking-wider">HACCP Certified</span>
            </div>
          </div>

        </div>

        <div className="border-t border-neutral-300 dark:border-white/10 pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-xs text-neutral-400 font-light">
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p>&copy; 2025 Culinova Catering FZCO. All rights reserved.</p>
          </div>

          {/* Center: Developer Credit */}
          <div className="flex justify-center">
            <motion.a
              href="https://ae.linkedin.com/in/culinova-fzco-1a56bb37b"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 group opacity-80 hover:opacity-100 transition-opacity"
            >
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-gold-500 transition-colors">Developed by</span>
              <img src="/mahify_logo.jpg" alt="Mahify" className="h-8 w-auto object-contain" />
            </motion.a>
          </div>

          {/* Right: Links */}
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="/" className="hover:text-charcoal dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="/" className="hover:text-charcoal dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;