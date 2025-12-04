import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Utensils, Send, Check } from 'lucide-react';

const QuoteWizard: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        eventType: '',
        date: '',
        guests: 50,
        budget: '',
        name: '',
        email: '',
        phone: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen pt-24 pb-12 bg-stone-50 dark:bg-black text-charcoal dark:text-white transition-colors duration-500 flex items-center justify-center">
                <div className="container mx-auto px-6 max-w-2xl">
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-stone-200 dark:border-white/5 p-12 text-center">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check size={40} className="text-green-600 dark:text-green-400" />
                        </div>
                        <h2 className="text-3xl font-serif font-bold mb-4">Request Received!</h2>
                        <p className="text-stone-500 dark:text-stone-400 mb-8">
                            Thank you, {formData.name}. We have received your quote request for your {formData.eventType} on {formData.date}.
                            Our team will review the details and get back to you at {formData.email} shortly.
                        </p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="bg-gold-500 text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors"
                        >
                            Return Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 bg-stone-50 dark:bg-black text-charcoal dark:text-white transition-colors duration-500 flex items-center justify-center">
            <div className="container mx-auto px-6 max-w-2xl">
                <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-stone-200 dark:border-white/5">
                    {/* Header */}
                    <div className="bg-gold-500 p-8 text-center">
                        <h2 className="text-2xl font-serif font-bold text-black">Get a Custom Quote</h2>
                        <p className="text-black/80 text-sm mt-2">Tell us about your event and we'll craft the perfect proposal.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8">
                        {/* Step 1: Event Details */}
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                                <h3 className="text-xl font-medium flex items-center gap-2"><Calendar className="text-gold-500" /> Event Details</h3>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-stone-500">Event Type</label>
                                    <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full p-3 bg-stone-100 dark:bg-black border border-stone-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-gold-500 transition-colors">
                                        <option value="">Select Event Type</option>
                                        <option value="wedding">Wedding</option>
                                        <option value="corporate">Corporate Event</option>
                                        <option value="private">Private Party</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-stone-500">Date</label>
                                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-3 bg-stone-100 dark:bg-black border border-stone-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-gold-500 transition-colors" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-stone-500">Guest Count: {formData.guests}</label>
                                    <input type="range" name="guests" min="10" max="1000" value={formData.guests} onChange={handleChange} className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-gold-500" />
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Contact Info */}
                        {step === 2 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                                <h3 className="text-xl font-medium flex items-center gap-2"><Users className="text-gold-500" /> Contact Information</h3>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-stone-500">Your Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full p-3 bg-stone-100 dark:bg-black border border-stone-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-gold-500 transition-colors" required />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-stone-500">Email Address</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full p-3 bg-stone-100 dark:bg-black border border-stone-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-gold-500 transition-colors" required />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-stone-500">Phone Number</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+971 50 123 4567" className="w-full p-3 bg-stone-100 dark:bg-black border border-stone-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-gold-500 transition-colors" required />
                                </div>
                            </motion.div>
                        )}

                        {/* Actions */}
                        <div className="flex justify-between mt-8 pt-6 border-t border-stone-200 dark:border-white/10">
                            {step > 1 ? (
                                <button type="button" onClick={prevStep} disabled={isSubmitting} className="px-6 py-2 rounded-lg text-stone-500 hover:text-charcoal dark:hover:text-white transition-colors disabled:opacity-50">Back</button>
                            ) : <div></div>}

                            {step < 2 ? (
                                <button type="button" onClick={nextStep} className="bg-gold-500 text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">Next</button>
                            ) : (
                                <button type="submit" disabled={isSubmitting} className="bg-gold-500 text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-wait">
                                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                                    {!isSubmitting && <Send size={18} />}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuoteWizard;
