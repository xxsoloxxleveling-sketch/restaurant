import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Do you provide food tastings?",
        answer: "Yes, we offer complimentary food tastings for confirmed bookings of over 100 guests. For smaller events or initial inquiries, we can arrange a tasting session for a nominal fee, which is deductible from your final bill upon booking."
    },
    {
        question: "What is the minimum guest count you cater for?",
        answer: "We cater to events of all sizes, from intimate private dinners of 10 guests to large-scale corporate events and weddings with over 1000 guests. Our menus and services are tailored to suit the scale of your event."
    },
    {
        question: "Can you accommodate dietary restrictions?",
        answer: "Absolutely. We take dietary requirements very seriously. We can prepare specific meals for vegan, vegetarian, gluten-free, nut-free, and other dietary needs. All our meat is Halal certified."
    },
    {
        question: "How far in advance should I book?",
        answer: "We recommend booking as early as possible to secure your preferred date, especially during the peak wedding and event season (October to April). Ideally, 2-3 months in advance is recommended, but we can often accommodate last-minute requests depending on availability."
    },
    {
        question: "Do you provide staff and equipment?",
        answer: "Yes, we offer a full-service catering experience. This includes professional waitstaff, chefs, cutlery, crockery, glassware, and buffet setups. We can also assist with table and chair rentals if needed."
    }
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-stone-50 dark:bg-charcoal transition-colors duration-500">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl text-charcoal dark:text-white mb-4">Frequently Asked Questions</h2>
                    <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full" />
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-stone-200 dark:border-white/10 rounded-lg overflow-hidden bg-white dark:bg-white/5 transition-colors duration-300">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-sans font-medium text-lg text-charcoal dark:text-stone-200">{faq.question}</span>
                                <span className="text-gold-500">
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
