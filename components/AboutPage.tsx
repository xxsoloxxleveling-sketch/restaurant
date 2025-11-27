import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Star, Award, Users, ArrowRight, Quote, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- Reusable Components ---

const RevealText = ({ children, delay = 0, className = "" }: { children: string, delay?: number, className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    return (
        <span ref={ref} className={`inline-block overflow-hidden align-bottom ${className}`}>
            <motion.span
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay, ease: [0.33, 1, 0.68, 1] }}
                className="inline-block"
            >
                {children}
            </motion.span>
        </span>
    );
};

const MagneticButton = ({ children, onClick, className = "" }: { children: React.ReactNode, onClick?: () => void, className?: string }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x: x * 0.1, y: y * 0.1 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </motion.button>
    );
};

// --- Main Component ---

const AboutPage: React.FC = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div ref={containerRef} className="bg-[#050505] min-h-screen pt-20 overflow-hidden relative selection:bg-gold-500 selection:text-black">

            {/* Film Grain Texture */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
                aria-hidden="true"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* 1. Cinematic Hero Section */}
            <section className="relative h-[110vh] flex items-center justify-center overflow-hidden -mt-20">
                <div className="absolute inset-0 z-0">
                    <motion.div
                        style={{ scale: useTransform(smoothProgress, [0, 0.2], [1.1, 1]) }}
                        className="w-full h-full"
                    >
                        <video
                            src="/videos/about-hero-new.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-40"
                        />
                    </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505] z-10" />

                <div className="relative z-20 text-center px-6 max-w-6xl mx-auto mix-blend-difference">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h2 className="text-gold-400 uppercase tracking-[0.4em] mb-8 text-sm font-medium">Est. 2010 • Dubai</h2>
                        <h1 className="font-serif text-6xl md:text-9xl text-white mb-10 leading-[0.9] tracking-tight">
                            <RevealText delay={0.2}>A Decade of</RevealText> <br />
                            <span className="italic text-gold-500 font-light">
                                <RevealText delay={0.4}>Culinary Artistry</RevealText>
                            </span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-stone-300 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
                        >
                            We don't just cater events; we curate gastronomic experiences that linger in memory long after the last bite.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Magnetic Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
                >
                    <MagneticButton className="flex flex-col items-center gap-4 text-white/50 hover:text-white transition-colors">
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <div className="w-[1px] h-16 bg-white/20 overflow-hidden">
                            <motion.div
                                animate={{ y: ["-100%", "100%"] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="w-full h-1/2 bg-gold-500"
                            />
                        </div>
                    </MagneticButton>
                </motion.div>
            </section>

            {/* 2. The Legacy - Parallax Timeline */}
            <section className="py-40 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="text-5xl md:text-7xl font-serif text-white mb-6"><RevealText>Our Legacy</RevealText></h2>
                    </div>

                    <div className="relative">
                        {/* Animated Center Line */}
                        <motion.div
                            style={{ scaleY: useTransform(scrollYProgress, [0.1, 0.4], [0, 1]) }}
                            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-500/50 to-transparent origin-top hidden md:block"
                        />

                        {/* Timeline Items */}
                        {[
                            { year: "2010", title: "The Inception", desc: "Founded with a singular vision: to redefine luxury catering in Dubai." },
                            { year: "2015", title: "Expansion", desc: "Opened our state-of-the-art central kitchen in Dubai Silicon Oasis." },
                            { year: "2018", title: "Royal Recognition", desc: "Honoured to serve at prestigious royal weddings and government summits." },
                            { year: "2023", title: "Global Reach", desc: "Launched international consulting arm for luxury hospitality brands." }
                        ].map((item, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center justify-between mb-32 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                                <div className="w-full md:w-5/12" />

                                {/* Center Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, margin: "-20%" }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                    className="z-10 w-4 h-4 rounded-full bg-black border border-gold-500 relative mb-8 md:mb-0"
                                >
                                    <div className="absolute inset-0 bg-gold-500 rounded-full animate-ping opacity-20" />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.8 }}
                                    className={`w-full md:w-5/12 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                                >
                                    <span className="text-white/5 font-serif text-9xl absolute -mt-16 -ml-12 select-none z-0 transition-colors duration-700 group-hover:text-gold-500/10">{item.year}</span>
                                    <div className="relative z-10">
                                        <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">{item.title}</h3>
                                        <p className="text-stone-400 font-light leading-relaxed text-lg">{item.desc}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Core Values - Horizontal Parallax Scroll */}
            <section className="py-32 bg-[#0a0a0a] relative overflow-hidden border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { icon: Star, title: "Excellence", desc: "Perfection is not an act, but a habit. We pursue it in every detail." },
                            { icon: Users, title: "Service", desc: "Anticipating needs before they arise, delivering hospitality with warmth." },
                            { icon: Award, title: "Integrity", desc: "Honest sourcing, sustainable practices, and transparent relationships." }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, duration: 0.8 }}
                                className="group p-10 rounded-sm border border-white/5 hover:border-gold-500/30 bg-gradient-to-b from-white/5 to-transparent transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="mb-8 p-4 bg-gold-500/10 w-fit rounded-full text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-500">
                                    <card.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-serif text-white mb-6">{card.title}</h3>
                                <p className="text-stone-400 leading-relaxed font-light text-lg">
                                    {card.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* 5. Testimonials - Infinite Marquee */}
            <section className="py-32 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
                <div className="relative flex overflow-x-hidden py-12">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

                    <motion.div
                        className="flex gap-24 whitespace-nowrap items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    >
                        {[...Array(2)].map((_, i) => (
                            <React.Fragment key={i}>
                                {[
                                    "Burj Al Arab", "Emirates Palace", "Dubai Opera", "Museum of the Future", "Expo City", "Atlantis The Royal", "Armani Hotel", "Bulgari Resort"
                                ].map((client, idx) => (
                                    <div key={idx} className="text-5xl md:text-7xl font-serif text-white/5 hover:text-gold-500/30 transition-colors cursor-default">
                                        {client}
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 6. Grand CTA */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <motion.div
                        style={{ scale: useTransform(scrollYProgress, [0.8, 1], [1, 1.1]) }}
                        className="w-full h-full"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                            alt="Fine Dining"
                            className="w-full h-full object-cover opacity-30"
                        />
                    </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-6xl md:text-9xl font-serif text-white mb-12 tracking-tight">
                            Begin Your <span className="text-gold-500 italic">Journey</span>
                        </h2>
                        <MagneticButton
                            onClick={() => navigate('/contact')}
                            className="group relative px-16 py-6 bg-transparent border border-white/20 text-white font-bold uppercase tracking-[0.2em] overflow-hidden hover:border-gold-500 transition-colors duration-500 rounded-full"
                        >
                            <span className="relative z-10 flex items-center gap-4 group-hover:text-black transition-colors duration-500">
                                Inquire Now <ArrowRight size={20} />
                            </span>
                            <div className="absolute inset-0 bg-gold-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;