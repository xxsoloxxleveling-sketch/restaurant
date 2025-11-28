import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';

const cuisines = [
    { id: 'continental', name: 'Continental', image: '/continental_cuisine.png' },
    { id: 'pan-asian', name: 'Pan Asian', image: '/continental_pan_asian.webp' },
    { id: 'south-asian', name: 'South Asian', image: '/images/menu/south-asian.png' },
    { id: 'middle-eastern', name: 'Middle Eastern', image: '/images/menu/arabian.png' },
];

const starters = [
    'Chicken Tikka Skewers', 'Vegetable Spring Rolls', 'Hummus & Pita', 'Bruschetta', 'Prawn Tempura', 'Mini Sliders'
];

const mains = [
    'Butter Chicken', 'Grilled Salmon', 'Lamb Ouzi', 'Thai Green Curry', 'Beef Tenderloin', 'Vegetable Biryani'
];

const MenuBuilder: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState({
        cuisine: '',
        starters: [] as string[],
        mains: [] as string[],
    });

    const handleCuisineSelect = (id: string) => {
        setSelections({ ...selections, cuisine: id });
    };

    const handleStarterToggle = (item: string) => {
        setSelections(prev => ({
            ...prev,
            starters: prev.starters.includes(item)
                ? prev.starters.filter(i => i !== item)
                : [...prev.starters, item]
        }));
    };

    const handleMainToggle = (item: string) => {
        setSelections(prev => ({
            ...prev,
            mains: prev.mains.includes(item)
                ? prev.mains.filter(i => i !== item)
                : [...prev.mains, item]
        }));
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    // Background Slideshow Component
    const BackgroundSlideshow = () => {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        useEffect(() => {
            // If a cuisine is selected, find its index
            if (selections.cuisine) {
                const index = cuisines.findIndex(c => c.id === selections.cuisine);
                if (index !== -1) {
                    setCurrentImageIndex(index);
                    return; // Stop slideshow if selected
                }
            }

            // Otherwise, run slideshow
            const timer = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % cuisines.length);
            }, 5000);
            return () => clearInterval(timer);
        }, [selections.cuisine]);

        return (
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/70 z-10" /> {/* Dark Overlay */}
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={selections.cuisine ? selections.cuisine : currentImageIndex}
                        src={cuisines[currentImageIndex].image}
                        alt="Background"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
            </div>
        );
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-stone-50 dark:bg-black text-charcoal dark:text-white transition-colors duration-500 relative">
            <BackgroundSlideshow />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl mb-4 text-white">Build Your Menu</h1>
                    <p className="text-stone-300">Customize your perfect dining experience in a few simple steps.</p>

                    {/* Progress Bar */}
                    <div className="flex justify-center items-center mt-8 gap-4">
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} className={`w-3 h-3 rounded-full ${step >= s ? 'bg-gold-500' : 'bg-white/20'} transition-colors duration-300`} />
                        ))}
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10 min-h-[400px]">
                    {/* Step 1: Cuisine */}
                    {step === 1 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <h3 className="text-2xl font-serif mb-6 text-center text-white">Select Your Primary Cuisine</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {cuisines.map((c) => (
                                    <div
                                        key={c.id}
                                        onClick={() => handleCuisineSelect(c.id)}
                                        className={`relative h-40 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${selections.cuisine === c.id ? 'border-gold-500 scale-[1.02]' : 'border-transparent hover:border-white/30'}`}
                                    >
                                        <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <span className="text-white font-bold text-xl uppercase tracking-wider">{c.name}</span>
                                        </div>
                                        {selections.cuisine === c.id && (
                                            <div className="absolute top-4 right-4 bg-gold-500 rounded-full p-1">
                                                <Check size={16} className="text-white" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Starters */}
                    {step === 2 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <h3 className="text-2xl font-serif mb-6 text-center text-white">Choose Your Starters</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {starters.map((item) => (
                                    <div
                                        key={item}
                                        onClick={() => handleStarterToggle(item)}
                                        className={`p-4 rounded-lg cursor-pointer border transition-all duration-300 flex items-center justify-between ${selections.starters.includes(item) ? 'bg-gold-500/20 border-gold-500 text-gold-500' : 'bg-white/5 border-transparent hover:bg-white/10 text-stone-200'}`}
                                    >
                                        <span>{item}</span>
                                        {selections.starters.includes(item) && <Check size={18} />}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: Mains */}
                    {step === 3 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <h3 className="text-2xl font-serif mb-6 text-center text-white">Select Main Courses</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {mains.map((item) => (
                                    <div
                                        key={item}
                                        onClick={() => handleMainToggle(item)}
                                        className={`p-4 rounded-lg cursor-pointer border transition-all duration-300 flex items-center justify-between ${selections.mains.includes(item) ? 'bg-gold-500/20 border-gold-500 text-gold-500' : 'bg-white/5 border-transparent hover:bg-white/10 text-stone-200'}`}
                                    >
                                        <span>{item}</span>
                                        {selections.mains.includes(item) && <Check size={18} />}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 4: Summary */}
                    {step === 4 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <h3 className="text-2xl font-serif mb-6 text-center text-white">Your Menu Summary</h3>
                            <div className="bg-white/5 p-6 rounded-xl space-y-6 border border-white/10">
                                <div>
                                    <h4 className="text-gold-500 text-sm uppercase tracking-widest mb-2">Cuisine</h4>
                                    <p className="text-lg capitalize text-white">{selections.cuisine || 'Not selected'}</p>
                                </div>
                                <div>
                                    <h4 className="text-gold-500 text-sm uppercase tracking-widest mb-2">Starters</h4>
                                    <ul className="list-disc list-inside text-stone-300">
                                        {selections.starters.length > 0 ? selections.starters.map(s => <li key={s}>{s}</li>) : <li>No starters selected</li>}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-gold-500 text-sm uppercase tracking-widest mb-2">Mains</h4>
                                    <ul className="list-disc list-inside text-stone-300">
                                        {selections.mains.length > 0 ? selections.mains.map(m => <li key={m}>{m}</li>) : <li>No mains selected</li>}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <button
                                    onClick={() => navigate('/get-quote')}
                                    className="bg-gold-500 text-black font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm"
                                >
                                    Request Quote for this Menu
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 relative z-10">
                    <button
                        onClick={prevStep}
                        disabled={step === 1}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                    >
                        <ChevronLeft size={18} /> Back
                    </button>

                    {step < 4 ? (
                        <button
                            onClick={nextStep}
                            disabled={step === 1 && !selections.cuisine}
                            className="flex items-center gap-2 bg-gold-500 text-black px-6 py-3 rounded-full font-bold hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next <ChevronRight size={18} />
                        </button>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default MenuBuilder;
