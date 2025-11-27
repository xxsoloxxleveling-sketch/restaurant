import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const menuSections = [
    {
        id: 'arabian',
        title: 'Arabian Delights',
        description: 'Experience the rich and aromatic flavors of the Middle East. Our Arabian menu features authentic dishes prepared with traditional spices and cooking methods.',
        items: [
            'Lamb Ouzi with Oriental Rice',
            'Mixed Grill Platter',
            'Chicken Machboos',
            'Hot & Cold Mezze Selection',
            'Umm Ali'
        ],
        image: '/images/menu/arabian.png'
    },
    {
        id: 'continental',
        title: 'Continental & Pan Asian',
        description: 'A fusion of global tastes. From classic European techniques to the bold and vibrant flavors of Asia, our continental and pan-asian selection offers something for everyone.',
        items: [
            'Grilled Salmon with Asparagus',
            'Beef Tenderloin with Truffle Mash',
            'Thai Green Curry',
            'Dim Sum Collection',
            'Stir-Fried Noodles'
        ],
        image: '/images/menu/continental.png'
    },
    {
        id: 'south-asian',
        title: 'South Asian Classics',
        description: 'A journey through the spices of South Asia. Rich curries, fragrant biryanis, and tandoori specialties that bring warmth and depth to your palate.',
        items: [
            'Chicken Biryani',
            'Butter Chicken',
            'Lamb Rogan Josh',
            'Dal Makhani',
            'Assorted Naan Breads'
        ],
        image: '/images/menu/south-asian.png'
    },
    {
        id: 'desserts',
        title: 'Artisan Desserts',
        description: 'The perfect sweet ending. Our pastry chefs craft exquisite desserts that are as beautiful to look at as they are delicious to eat.',
        items: [
            'Saffron Milk Cake',
            'Pistachio Baklava',
            'Chocolate Fondant',
            'Fruit Tarts',
            'Gourmet Ice Creams'
        ],
        image: '/images/menu/desserts.png'
    }
];

interface MenuSectionProps {
    section: typeof menuSections[0];
    setVisibleSection: (id: string) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ section, setVisibleSection }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setVisibleSection(section.id);
        }
    }, [isInView, section.id, setVisibleSection]);

    return (
        <div ref={ref} className="min-h-screen flex flex-col justify-center p-8 md:p-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">{section.title}</h2>
                <p className="text-stone-300 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
                    {section.description}
                </p>
                <ul className="space-y-4">
                    {section.items.map((item, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-4 text-gold-500 font-medium"
                        >
                            <span className="w-2 h-2 bg-gold-500 rounded-full" />
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

const DetailedSection = () => {
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-[#050505]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/menu/philosophy-bg.png"
                    alt="Culinary Philosophy"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4">Our Philosophy</h3>
                            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
                                Sourced with Care, <br /> Served with Passion.
                            </h2>
                            <div className="space-y-6 text-stone-300 font-light text-lg leading-relaxed mb-10">
                                <p>
                                    At Culinova, we believe that exceptional cuisine begins with exceptional ingredients. Our culinary team works directly with local organic farms and trusted international suppliers to ensure every dish features the freshest, highest-quality produce available.
                                </p>
                                <p>
                                    We understand that every event is unique. That's why we offer fully customizable menus to accommodate all dietary requirements, including vegan, gluten-free, and halal options, without compromising on taste or presentation.
                                </p>
                            </div>

                            <Link to="/contact">
                                <button className="group relative px-8 py-4 bg-gold-500 text-black font-semibold uppercase tracking-widest overflow-hidden hover:text-white transition-colors duration-300">
                                    <span className="relative z-10">Order Now</span>
                                    <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: 'Farm to Table', desc: 'Prioritizing locally sourced, seasonal ingredients.' },
                            { title: 'Sustainable', desc: 'Zero-waste initiatives and eco-friendly packaging.' },
                            { title: 'Customizable', desc: 'Tailored menus for every palate and occasion.' },
                            { title: 'Global Flavors', desc: 'Authentic recipes from chefs around the world.' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (idx * 0.1), duration: 0.6 }}
                                className="bg-white/5 p-8 border border-white/10 hover:border-gold-500/50 transition-colors duration-300 backdrop-blur-sm"
                            >
                                <h4 className="text-white font-serif text-xl mb-3">{item.title}</h4>
                                <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const MenuHero = () => {
    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/menu/arabian.png" // Using one of the menu images as background
                    alt="Menu Hero"
                    className="w-full h-full object-cover opacity-30 blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505]" />
            </div>
            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="font-serif text-5xl md:text-8xl text-white mb-6">Our Culinary Journey</h1>
                    <p className="text-stone-300 text-lg md:text-2xl font-light max-w-2xl mx-auto">
                        Explore a world of flavors, crafted with passion and precision.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const MenuPage: React.FC = () => {
    const [visibleSection, setVisibleSection] = useState(menuSections[0].id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#050505] min-h-screen">
            <MenuHero />

            <div className="flex flex-col md:flex-row">
                {/* Sticky Image Section - Floating Style (No Box) */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 z-0 flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10 pointer-events-none" />
                        {menuSections.map((section) => (
                            <motion.img
                                key={section.id}
                                src={section.image}
                                alt={section.title}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{
                                    opacity: visibleSection === section.id ? 1 : 0,
                                    scale: visibleSection === section.id ? 1 : 1.1,
                                    y: visibleSection === section.id ? [0, -15, 0] : 0 // Floating animation
                                }}
                                transition={{
                                    opacity: { duration: 0.7 },
                                    scale: { duration: 10, ease: "linear" }, // Slow zoom
                                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" } // Continuous float
                                }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        ))}
                    </div>
                </div>

                {/* Scrollable Text Section */}
                <div className="w-full md:w-1/2 relative z-10 bg-[#050505]/90 md:bg-[#050505] backdrop-blur-sm md:backdrop-blur-none border-l border-white/5">
                    {menuSections.map((section) => (
                        <MenuSection key={section.id} section={section} setVisibleSection={setVisibleSection} />
                    ))}
                </div>
            </div>

            {/* Detailed Section at the bottom */}
            <DetailedSection />
        </div>
    );
};

export default MenuPage;
