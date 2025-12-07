import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { menuData, menuSections, CuisineId } from '../data/menuData';

const CuisineMenu: React.FC = () => {
    const { cuisineId } = useParams<{ cuisineId: string }>();
    const navigate = useNavigate();

    // Validate cuisineId
    const sectionInfo = menuSections.find(s => s.id === cuisineId);
    const categories = cuisineId && menuData[cuisineId as CuisineId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [cuisineId]);

    if (!sectionInfo || !categories) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-serif mb-4">Cuisine Not Found</h2>
                    <Link to="/menu" className="text-gold-500 hover:underline">Return to Menu</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={sectionInfo.image}
                        alt={sectionInfo.title}
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#050505]" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-serif text-5xl md:text-7xl mb-6 text-gold-500">{sectionInfo.title}</h1>
                        <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
                            {sectionInfo.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Menu Content */}
            <div className="container mx-auto px-6 py-20">
                <Link to="/menu" className="inline-flex items-center gap-2 text-gold-500 hover:text-white transition-colors mb-12 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="uppercase tracking-widest text-sm font-semibold">Back to Menu</span>
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-gold-500/30 transition-colors duration-300"
                        >
                            <h3 className="text-2xl font-serif text-gold-500 mb-6 border-b border-white/10 pb-4">
                                {category.name}
                            </h3>
                            <ul className="space-y-4">
                                {category.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex items-start gap-3 text-stone-300">
                                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 shrink-0" />
                                        <span className="text-lg font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 text-center">
                    <h3 className="text-3xl font-serif mb-6">Love what you see?</h3>
                    <button
                        onClick={() => navigate('/build-menu')}
                        className="px-10 py-4 bg-gold-500 text-black font-bold rounded-full hover:bg-white transition-colors duration-300 uppercase tracking-widest"
                    >
                        Build Your Custom Menu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CuisineMenu;
