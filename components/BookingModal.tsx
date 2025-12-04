import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-lg bg-charcoal/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Glassmorphism Overlay */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-md pointer-events-none" />

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-10">
                            <button
                                type="button"
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>

                            <div className="text-center mb-8">
                                <h2 className="font-serif text-3xl text-white mb-2">Book Your Event</h2>
                                <p className="text-stone-400 text-sm font-light">Let us craft an unforgettable experience for you.</p>
                            </div>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="booking-name" className="block text-xs uppercase tracking-widest text-gold-500 mb-2">Name</label>
                                    <input
                                        id="booking-name"
                                        type="text"
                                        className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="booking-email" className="block text-xs uppercase tracking-widest text-gold-500 mb-2">Email</label>
                                    <input
                                        id="booking-email"
                                        type="email"
                                        className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="booking-type" className="block text-xs uppercase tracking-widest text-gold-500 mb-2">Event Type</label>
                                        <select id="booking-type" className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors appearance-none">
                                            <option>Corporate</option>
                                            <option>Wedding</option>
                                            <option>Private Party</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="booking-date" className="block text-xs uppercase tracking-widest text-gold-500 mb-2">Date</label>
                                        <input
                                            id="booking-date"
                                            type="date"
                                            className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gold-500 text-black font-bold uppercase tracking-widest py-4 rounded-sm hover:bg-gold-400 transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                                >
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
