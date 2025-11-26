import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Linkedin, Instagram, Facebook } from 'lucide-react';

const ContactPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    >
                        <source src="/videos/contact-hero.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a] z-10" />

                <div className="relative z-20 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif text-white mb-6"
                    >
                        Get in <span className="text-[#D4AF37] italic">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-stone-300 text-lg md:text-xl font-light max-w-2xl mx-auto"
                    >
                        We'd love to hear from you. Let's discuss how we can make your next event unforgettable.
                    </motion.p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-serif text-white mb-8">Contact Information</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="p-4 rounded-full bg-[#111111] border border-white/10 group-hover:border-[#D4AF37] transition-colors">
                                    <MapPin className="text-[#D4AF37]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Visit Us</h4>
                                    <p className="text-stone-400 leading-relaxed">
                                        Culinova Catering FZCO<br />
                                        Dubai Silicon Oasis,<br />
                                        Dubai, United Arab Emirates
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 rounded-full bg-[#111111] border border-white/10 group-hover:border-[#D4AF37] transition-colors">
                                    <Phone className="text-[#D4AF37]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Call Us</h4>
                                    <p className="text-stone-400">+971 4 123 4567</p>
                                    <p className="text-stone-400">+971 50 987 6543</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 rounded-full bg-[#111111] border border-white/10 group-hover:border-[#D4AF37] transition-colors">
                                    <Mail className="text-[#D4AF37]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Email Us</h4>
                                    <p className="text-stone-400">info@culinova.ae</p>
                                    <p className="text-stone-400">events@culinova.ae</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 rounded-full bg-[#111111] border border-white/10 group-hover:border-[#D4AF37] transition-colors">
                                    <Clock className="text-[#D4AF37]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Working Hours</h4>
                                    <p className="text-stone-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    <p className="text-stone-400">Sat - Sun: Closed (Events Only)</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-12 flex gap-4">
                            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="p-3 rounded-full bg-[#111111] border border-white/10 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] text-white transition-all duration-300">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#111111] p-8 md:p-12 rounded-sm border border-white/5"
                    >
                        <h2 className="text-3xl font-serif text-white mb-8">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Subject</label>
                                <select className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors">
                                    <option>General Inquiry</option>
                                    <option>Event Booking</option>
                                    <option>Partnership</option>
                                    <option>Careers</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-[#D4AF37] text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Google Map Integration */}
            <section className="h-[500px] w-full bg-[#111111] relative border-t border-white/5 grayscale invert-[.9] contrast-[1.1]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.662133482704!2d55.37255831500786!3d25.12459598392994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f669076f75f3b%3A0x6d923056e4046184!2sDubai%20Silicon%20Oasis!5e0!3m2!1sen!2sae!4v1629876543210!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Culinova Location"
                ></iframe>

                {/* Overlay to reduce map brightness further if needed */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </section>
        </div>
    );
};

export default ContactPage;
