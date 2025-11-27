import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Utensils, Package, ClipboardCheck } from 'lucide-react';

const ServiceRow = ({ title, description, image, isReversed }: { title: string, description: string, image: string, isReversed: boolean }) => {
  const containerRef = useRef(null);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 py-20 ${isReversed ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Image Side */}
      <div className="w-full md:w-1/2 h-[300px] md:h-[450px] rounded-2xl shadow-2xl relative group bg-charcoal">
        {/* Gold Frame Offset */}
        <div className={`absolute top-4 ${isReversed ? 'left-4' : 'right-4'} w-full h-full border-2 border-gold-500/30 rounded-2xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`} />

        <div className="w-full h-full overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 px-2">
        <div className="border-l-2 border-gold-500 pl-6 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">{title}</h2>
          <p className="text-stone-300 leading-relaxed text-lg font-light">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300 group"
  >
    {/* Premium Icon Wrapper */}
    <div className="mb-6 w-20 h-20 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <Icon className="text-gold-500 w-8 h-8" strokeWidth={1.5} />
    </div>

    <h3 className="text-xl font-serif text-white mb-4">{title}</h3>
    <p className="text-stone-400 leading-relaxed text-sm max-w-xs mx-auto">
      {description}
    </p>
  </motion.div>
);

const EventsPage: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  // Hero Parallax: Background moves slower than scroll
  const yHero = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-charcoal rounded-b-3xl shadow-xl mb-20">
        <motion.div
          style={{ y: yHero }}
          className="absolute inset-0 z-0 w-full h-[120%] -top-[10%]"
        >
          <video
            src="/videos/events-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>

        {/* Overlay - Stronger for readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-gold-500 mb-6 drop-shadow-lg"
          >
            Crafting Unforgettable Moments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-stone-200 font-light max-w-2xl mx-auto drop-shadow-md"
          >
            From intimate gatherings to grand celebrations, we deliver excellence tailored to your special occasion.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            onClick={() => navigate('/contact')}
            className="mt-8 px-8 py-3 bg-gold-500 text-black font-bold uppercase tracking-widest rounded-full hover:bg-gold-400 transition-colors shadow-lg"
          >
            Plan Your Event
          </motion.button>
        </div>
      </section>

      {/* Corporate Events */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Corporate Event"
              className="rounded-lg shadow-2xl border border-white/10"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-serif text-gold-500 mb-6">Corporate Excellence</h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-6 font-light">
              Impress clients and colleagues with our sophisticated corporate catering solutions.
              Whether it's a board meeting, a product launch, or a company gala, we provide
              impeccable service and exquisite menus that reflect your brand's prestige.
            </p>
            <ul className="space-y-3 text-stone-400 mb-8">
              <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Executive Lunches & Board Meetings</li>
              <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Large-Scale Conferences</li>
              <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Networking Events & Galas</li>
            </ul>
            <button onClick={() => navigate('/contact')} className="text-gold-400 border-b border-gold-400 pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm">
              Inquire Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Weddings & Private Parties */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <img
              src="/images/wedding-outdoor-extended.png"
              alt="Wedding Setup"
              className="w-full h-[500px] object-cover rounded-lg shadow-2xl border border-white/10"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-serif text-gold-500 mb-6">Weddings & Private Celebrations</h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-6 font-light">
              Your special day deserves nothing less than perfection. We work closely with you
              to design a bespoke menu that tells your story. From intimate gatherings to
              grand wedding receptions, our team ensures every detail is flawless.
            </p>
            <ul className="space-y-3 text-stone-400 mb-8">
              <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Bespoke Wedding Menus</li>
              <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Live Cooking Stations</li>
              <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Elegant Plated Service</li>
            </ul>
            <button onClick={() => navigate('/contact')} className="text-gold-400 border-b border-gold-400 pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm">
              Start Planning
            </button>
          </motion.div>
        </div>
      </section>

      {/* Specialized Solutions */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-serif text-white mb-16"
        >
          Specialized Solutions
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Educational Institutions", desc: "Nutritious, balanced meals fueling the minds of tomorrow.", icon: "🎓" },
            { title: "Guest House Management", desc: "Comprehensive hospitality solutions for staff accommodation.", icon: "🏠" },
            { title: "Industrial Catering", desc: "High-volume, high-quality meal services for workforce efficiency.", icon: "🏭" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-gold-500/50 transition-colors group"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-serif text-gold-500 mb-4">{item.title}</h3>
              <p className="text-stone-400 font-light mb-6">{item.desc}</p>
              <button onClick={() => navigate('/contact')} className="text-xs uppercase tracking-widest text-white group-hover:text-gold-400 transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Sectors - ZigZag - Pure Black Background */}
      <section className="bg-black rounded-2xl shadow-xl p-8 md:p-12 mb-20 container mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-12 text-center">Our Event Catering Expertise</h2>
        <ServiceRow
          title="Corporate & Business Events"
          description="Elevate your corporate gatherings, conferences, and product launches with our sophisticated catering. We provide professional, seamless service and exquisite menus designed to impress."
          image="/images/corporate-business.jpg"
          isReversed={false}
        />
        <ServiceRow
          title="Weddings & Grand Celebrations"
          description="Make your special day truly unforgettable. Our bespoke wedding catering services offer personalized menus, elegant presentations, and meticulous attention to detail, ensuring a culinary experience as unique as your love story."
          image="/images/wedding-grand.jpg"
          isReversed={true}
        />
        <ServiceRow
          title="Private Parties & Social Gatherings"
          description="Host a memorable party without the stress. From intimate dinner parties to large social events, we craft delicious food and provide impeccable service, allowing you to relax and enjoy your guests."
          image="/images/private-party-social.jpg"
          isReversed={false}
        />
        <ServiceRow
          title="Festivals & Large-Scale Events"
          description="Managing catering for large crowds requires expertise and efficiency. We specialize in delivering high-quality, diverse food options for festivals, concerts, and public events, ensuring a smooth and satisfying experience for all attendees."
          image="/images/festival-event.jpg"
          isReversed={true}
        />
      </section>

      {/* Specialized Solutions - Grid - Dark Grey Background for Separation */}
      <section className="bg-[#0f0f0f] py-16 rounded-2xl shadow-xl">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl text-white mb-6">Specialized Event Offerings</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={Utensils}
              title="Live Cooking Stations"
              description="Turn your event into an unforgettable occasion. Watch as our expert chefs craft flavourful dishes in real-time using fresh ingredients."
              delay={0.1}
            />
            <FeatureCard
              icon={Package}
              title="Custom Menu Design"
              description="Collaborate with our culinary team to create a bespoke menu that perfectly reflects your event's theme, dietary needs, and personal preferences."
              delay={0.2}
            />
            <FeatureCard
              icon={ClipboardCheck}
              title="Full Event Management"
              description="Beyond food, we offer comprehensive event support including staffing, equipment rental, and logistical coordination for a seamless experience."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Footer CTA - Black Background */}
      <section className="py-32 relative text-center border-t border-white/5 rounded-2xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/videos/event-cta-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-10">Ready to plan your event?</h2>
            <button
              onClick={() => navigate('/contact')}
              className="px-12 py-5 bg-gold-500 text-black font-bold uppercase tracking-widest hover:bg-gold-400 transition-all transform hover:scale-105 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              Request a Quotation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;