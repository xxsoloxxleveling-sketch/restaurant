import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react';

// --- Data Definitions ---

type CuisineId = 'continental' | 'pan-asian' | 'south-asian' | 'middle-eastern' | 'artisan-desserts';

interface MenuItem {
    id: CuisineId;
    name: string;
    image: string;
}

const cuisines: MenuItem[] = [
    { id: 'continental', name: 'Continental', image: '/continental_cuisine.png' },
    { id: 'pan-asian', name: 'Pan Asian', image: '/continental_pan_asian.webp' },
    { id: 'south-asian', name: 'South Asian', image: '/images/menu/south-asian.png' },
    { id: 'middle-eastern', name: 'Middle Eastern', image: '/images/menu/arabian.png' },
    { id: 'artisan-desserts', name: 'Artisan Desserts', image: '/images/menu/desserts.png' },
];

interface MenuCategory {
    name: string;
    items: string[];
}

const menuData: Record<CuisineId, MenuCategory[]> = {
    'continental': [
        { name: 'Cold Canapés', items: ['Smoked Salmon on Blinis with Dill Cream', 'Tomato & Basil Bruschetta', 'Caprese Skewer with Pesto', 'Chicken Caesar Tartlets', 'Hummus & Roasted Pepper Crostini', 'Prawn Cocktail Shots'] },
        { name: 'Hot Canapés', items: ['Chicken Satay with Peanut Dip', 'Truffle Mushroom Arancini', 'Mini Beef Sliders', 'Tempura Prawns with Wasabi Mayo', 'Spinach & Feta Mini Puffs', 'Cajun Spiced Potato Wedges with Dip'] },
        { name: 'Salads', items: ['Classic Caesar Salad', 'Greek Salad with Feta', 'Quinoa Tabbouleh with Citrus Dressing', 'Nicoise Salad', 'Roasted Beetroot & Goat Cheese Salad', 'Coleslaw / Garden Green Salad'] },
        { name: 'Soups', items: ['Cream of Mushroom', 'Roasted Tomato Basil Soup', 'Chicken Minestrone', 'Broccoli & Cheddar'] },
        { name: 'Main Course – Non-Veg', items: ['Herb-Roasted Chicken with Jus', 'Chicken Alfredo Pasta', 'Grilled Chicken with Lemon Butter Sauce', 'Chicken Stroganoff', 'Beef Lasagna', 'Grilled Beef Medallions with Peppercorn Sauce', 'Beef Stroganoff', 'Pan-Seared Salmon with Dill Cream', 'Grilled Hammour with Lemon Caper Sauce', 'Fish & Chips with Tartar Sauce'] },
        { name: 'Main Course – Vegetarian', items: ['Vegetable Lasagna', 'Grilled Vegetable Ratatouille', 'Penne Arrabbiata / Pasta Primavera', 'Paneer Steak with Tomato Coulis', 'Spinach & Cheese Cannelloni', 'Veg Shepherd’s Pie'] },
        { name: 'Sides & Breads', items: ['Sautéed Vegetables', 'Roasted Potatoes', 'Mashed Potatoes', 'Buttered Rice / Herb Rice', 'Creamy Polenta', 'Dinner Rolls, Garlic Bread, Baguette Slices with Butter'] },
        { name: 'Desserts', items: ['Tiramisu', 'Chocolate Mousse Cups', 'Blueberry Cheesecake', 'Crème Brûlée', 'Fruit Tartlets', 'Assorted Pastries', 'Fresh Fruit Platter'] },
        { name: 'Beverages', items: ['Fresh Juices (Orange, Watermelon, Pineapple)', 'Iced Tea / Lemonade', 'Coffee & Tea Station', 'Bottled Water'] }
    ],
    'pan-asian': [
        { name: 'Dim Sum & Appetizers', items: ['Chicken Siew Mai', 'Prawn Har Gow', 'Vegetable Spring Rolls', 'Edamame with Sea Salt', 'Chicken Gyoza', 'Crispy Prawn Tempura'] },
        { name: 'Soups', items: ['Tom Yum Soup', 'Miso Soup', 'Hot & Sour Chicken Soup', 'Ramen Broth Soup (Veg/Chicken)'] },
        { name: 'Salads', items: ['Thai Mango Salad', 'Asian Sesame Chicken Salad', 'Glass Noodle Salad', 'Kimchi'] },
        { name: 'Main Course – Chicken & Beef', items: ['Thai Green Curry Chicken', 'Kung Pao Chicken', 'Teriyaki Chicken', 'Chicken Katsu', 'Beef Bulgogi', 'Stir-Fried Beef with Black Pepper Sauce', 'Beef Rendang'] },
        { name: 'Main Course – Seafood', items: ['Sweet & Sour Fish', 'Chili Garlic Prawns', 'Wok-Tossed Schezwan Prawns'] },
        { name: 'Main Course – Vegetarian', items: ['Tofu Thai Green Curry', 'Vegetable Manchurian (Dry/Gravy)', 'Stir-Fried Mixed Vegetables', 'Mapo Tofu (Veg)'] },
        { name: 'Rice & Noodles', items: ['Veg/Chicken Fried Rice', 'Singapore Noodles', 'Pad Thai (Veg/Chicken/Prawn)', 'Steamed Jasmine Rice', 'Egg Fried Rice', 'Hakka Noodles'] },
        { name: 'Sides', items: ['Vegetable Tempura', 'Stir-Fried Bok Choy', 'Garlic Edamame', 'Asian Slaw'] },
        { name: 'Desserts', items: ['Mango Sticky Rice', 'Coconut Pudding', 'Fried Ice Cream', 'Green Tea Cheesecake'] },
        { name: 'Beverages', items: ['Iced Lemon Tea', 'Jasmine Green Tea', 'Thai Iced Tea', 'Fresh Juices & Water'] }
    ],
    'south-asian': [
        { name: 'Appetizers / Starters', items: ['Paneer Tikka', 'Veg Seekh Kebab', 'Aloo Tikki with Chutneys', 'Hara Bhara Kebab', 'Corn & Cheese Balls', 'Vegetable Spring Rolls (Desi Style)', 'Chicken Tikka', 'Chicken Malai Kebab', 'Mutton Seekh Kebab', 'Fish Amritsari', 'Prawn Pakora'] },
        { name: 'Soups', items: ['Mulligatawny Soup', 'Chicken Shorba', 'Tomato & Basil Rasam', 'Lentil & Spinach Soup'] },
        { name: 'Salads / Chats', items: ['Kachumber Salad', 'Raita (Boondi / Cucumber)', 'Pani Puri Shots', 'Bhel Puri', 'Chana Chaat'] },
        { name: 'Main Course – Vegetarian', items: ['Paneer Butter Masala', 'Palak Paneer', 'Vegetable Korma', 'Mixed Vegetable Curry', 'Dal Makhani', 'Malai Kofta'] },
        { name: 'Main Course – Non-Vegetarian', items: ['Butter Chicken', 'Chicken Curry', 'Chicken Do Pyaza', 'Chicken Korma', 'Mutton Rogan Josh', 'Lamb Korma', 'Mutton Curry', 'Prawn Masala', 'Fish Curry', 'Fish Tikka Masala'] },
        { name: 'Rice & Bread', items: ['Jeera Rice', 'Vegetable Pulao', 'Plain Basmati Rice', 'Chicken Biryani / Mutton Biryani', 'Naan (Plain/Garlic/Butter)', 'Roti', 'Paratha', 'Lachha Paratha', 'Rumali Roti'] },
        { name: 'Accompaniments', items: ['Mixed Pickles', 'Papadums / Masala Papad', 'Mint Chutney', 'Tamarind Chutney', 'Onion Salad'] },
        { name: 'Desserts', items: ['Gulab Jamun', 'Ras Malai', 'Kheer / Firni', 'Jalebi', 'Kulfi (Mango, Pistachio)', 'Gajar Halwa'] },
        { name: 'Beverages', items: ['Masala Chai', 'Lassi (Sweet / Salted / Mango)', 'Thandai', 'Fresh Juices', 'Soft Drinks'] }
    ],
    'middle-eastern': [
        { name: 'Cold Mezze', items: ['Hummus', 'Baba Ganoush', 'Muhammara', 'Moutabal', 'Tabbouleh', 'Fattoush', 'Vine Leaves (Warak Enab)', 'Labneh with Za’atar'] },
        { name: 'Hot Mezze', items: ['Falafel', 'Kibbeh', 'Chicken Shawarma Bites', 'Beef Sambousek', 'Cheese Sambousek', 'Spinach Fatayer', 'Halloumi Fries'] },
        { name: 'Salads', items: ['Arabic Chopped Salad', 'Rocca Salad with Pomegranate', 'Beetroot & Feta Salad', 'Lentil Salad'] },
        { name: 'Main Courses', items: ['Chicken Kabsa', 'Chicken Machboos', 'Shish Tawook', 'Chicken Shawarma', 'Zaatar Roast Chicken', 'Lamb Ouzi', 'Beef Kofta', 'Lamb Chops with Arabic Spices', 'Grilled Lamb Kofta', 'Beef Shawarma', 'Sayadieh Fish', 'Grilled Hammour with Spices', 'Shrimp Machboos', 'Vegetable Kabsa', 'Mujadara', 'Stuffed Vegetables (Mahshi)', 'Vegetable Tagine'] },
        { name: 'Rice & Bread', items: ['Vermicelli Rice', 'Saffron Rice', 'Kabsa Rice', 'Arabic Bread', 'Khubz & Saj Bread'] },
        { name: 'Desserts', items: ['Kunafa', 'Baklava', 'Basbousa', 'Date Pudding', 'Oum Ali', 'Maamoul'] },
        { name: 'Beverages', items: ['Mint Lemonade', 'Karak Tea', 'Arabic Coffee', 'Fresh Juices'] }
    ],
    'artisan-desserts': [
        { name: 'Signature Cakes & Pastries', items: ['Belgian Chocolate Truffle Cake', 'Pistachio Rose Cake', 'Salted Caramel Crunch Tart', 'Red Velvet Cream Cheese Slice', 'French Opera Cake', 'Classic Tiramisu Glass'] },
        { name: 'Mini Desserts (Bitesize)', items: ['Mini Éclairs (Vanilla/Chocolate/Coffee)', 'Berry Cheesecake Bites', 'Mini Lemon Meringue Tart', 'Chocolate Mousse Cups', 'Mini Pavlova with Fresh Berries', 'Hazelnut Praline Dome'] },
        { name: 'Plated Desserts', items: ['Warm Chocolate Fondant with Vanilla Bean Ice Cream', 'Crème Brûlée with Caramelised Top', 'Apple Crumble with Cinnamon Cream', 'Matcha Panna Cotta'] },
        { name: 'Arabic Fusion Desserts', items: ['Saffron Milk Cake Slice', 'Kunafa Cheesecake', 'Pistachio Umm Ali', 'Lotus Tres Leches'] },
        { name: 'Healthy Desserts', items: ['Chia Pudding with Mango Purée', 'Vegan Chocolate Avocado Mousse', 'Sugar-Free Date & Nut Energy Bites', 'Fresh Fruit Parfait'] },
        { name: 'Luxury Dessert Cups & Platters', items: ['Cups: Ferrero Rocher Mousse', 'Cups: Oreo Cream', 'Cups: Blueberry Cheesecake', 'Cups: Rose Pistachio Mousse', 'Platters: Luxury Petit Four Box', 'Platters: Assorted Macarons', 'Platters: Chocolate-Dipped Strawberries', 'Platters: Mixed Mini Tart Platter'] },
        { name: 'Beverages', items: ['Signature Hot Chocolate', 'French Vanilla Coffee', 'Iced Spanish Latte', 'Fresh Juices'] }
    ]
};

// --- Component ---

const MenuBuilder: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState({
        cuisine: [] as CuisineId[],
        items: {} as Record<string, string[]>, // Key: "cuisineId-categoryName", Value: string[]
    });
    const [expandedSections, setExpandedSections] = useState<string[]>([]);

    // --- Handlers ---

    const handleCuisineSelect = (id: CuisineId) => {
        setSelections(prev => ({
            ...prev,
            cuisine: prev.cuisine.includes(id)
                ? prev.cuisine.filter(c => c !== id)
                : [...prev.cuisine, id]
        }));
    };

    const toggleSection = (sectionId: string) => {
        setExpandedSections(prev =>
            prev.includes(sectionId) ? prev.filter(id => id !== sectionId) : [...prev, sectionId]
        );
    };

    const handleItemToggle = (cuisineId: CuisineId, categoryName: string, item: string) => {
        const key = `${cuisineId}-${categoryName}`;
        setSelections(prev => {
            const currentItems = prev.items[key] || [];
            const updatedItems = currentItems.includes(item)
                ? currentItems.filter(i => i !== item)
                : [...currentItems, item];

            return {
                ...prev,
                items: {
                    ...prev.items,
                    [key]: updatedItems
                }
            };
        });
    };

    // --- Navigation Logic ---

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    // --- Background Slideshow ---
    const BackgroundSlideshow = () => {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        useEffect(() => {
            if (selections.cuisine.length > 0) {
                const lastSelected = selections.cuisine[selections.cuisine.length - 1];
                const index = cuisines.findIndex(c => c.id === lastSelected);
                if (index !== -1) {
                    setCurrentImageIndex(index);
                    return;
                }
            }
            const timer = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % cuisines.length);
            }, 5000);
            return () => clearInterval(timer);
        }, [selections.cuisine]);

        return (
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/70 z-10" />
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={selections.cuisine.length > 0 ? selections.cuisine[selections.cuisine.length - 1] : currentImageIndex}
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
                    <p className="text-stone-300">Customize your perfect dining experience.</p>

                    {/* Progress Bar */}
                    <div className="flex justify-center items-center mt-8 gap-4">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className={`w-3 h-3 rounded-full ${step >= s ? 'bg-gold-500' : 'bg-white/20'} transition-colors duration-300`} />
                        ))}
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10 min-h-[400px]">

                    {/* Step 1: Cuisine Selection */}
                    {step === 1 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <h3 className="text-2xl font-serif mb-6 text-center text-white">Select Your Cuisines</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cuisines.map((c) => (
                                    <div
                                        key={c.id}
                                        onClick={() => handleCuisineSelect(c.id)}
                                        className={`relative h-40 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${selections.cuisine.includes(c.id) ? 'border-gold-500 scale-[1.02]' : 'border-transparent hover:border-white/30'}`}
                                    >
                                        <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <span className="text-white font-bold text-xl uppercase tracking-wider text-center px-2">{c.name}</span>
                                        </div>
                                        {selections.cuisine.includes(c.id) && (
                                            <div className="absolute top-4 right-4 bg-gold-500 rounded-full p-1">
                                                <Check size={16} className="text-white" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Customize Menu (Accordion) */}
                    {step === 2 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <h3 className="text-2xl font-serif mb-6 text-center text-white">Customize Your Menu</h3>
                            <div className="space-y-8">
                                {selections.cuisine.map(cuisineId => (
                                    <div key={cuisineId} className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <h4 className="text-2xl text-gold-500 mb-6 font-serif border-b border-white/10 pb-2">{cuisines.find(c => c.id === cuisineId)?.name}</h4>
                                        <div className="space-y-4">
                                            {menuData[cuisineId].map((category) => {
                                                const sectionId = `${cuisineId}-${category.name}`;
                                                const isExpanded = expandedSections.includes(sectionId);
                                                const selectedCount = (selections.items[sectionId] || []).length;

                                                return (
                                                    <div key={sectionId} className="border border-white/10 rounded-lg overflow-hidden bg-black/20">
                                                        <button
                                                            onClick={() => toggleSection(sectionId)}
                                                            className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-lg font-medium text-white">{category.name}</span>
                                                                {selectedCount > 0 && (
                                                                    <span className="bg-gold-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                                                                        {selectedCount} selected
                                                                    </span>
                                                                )}
                                                            </div>
                                                            {isExpanded ? <ChevronUp className="text-stone-400" /> : <ChevronDown className="text-stone-400" />}
                                                        </button>

                                                        <AnimatePresence>
                                                            {isExpanded && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: 'auto', opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.3 }}
                                                                >
                                                                    <div className="p-4 pt-0 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                        {category.items.map((item) => (
                                                                            <motion.div
                                                                                key={item}
                                                                                onClick={() => handleItemToggle(cuisineId, category.name, item)}
                                                                                whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(234, 179, 8, 0.4)", borderColor: "rgba(234, 179, 8, 0.8)" }}
                                                                                whileTap={{ scale: 0.98 }}
                                                                                animate={{
                                                                                    backgroundColor: selections.items[sectionId]?.includes(item) ? "rgba(234, 179, 8, 0.2)" : "rgba(255, 255, 255, 0.05)",
                                                                                    borderColor: selections.items[sectionId]?.includes(item) ? "rgba(234, 179, 8, 1)" : "transparent",
                                                                                    boxShadow: selections.items[sectionId]?.includes(item) ? "0 0 10px rgba(234, 179, 8, 0.3)" : "none"
                                                                                }}
                                                                                className={`p-3 rounded-lg cursor-pointer border transition-colors duration-200 flex items-center justify-between text-sm ${selections.items[sectionId]?.includes(item) ? 'text-gold-500' : 'text-stone-300'}`}
                                                                            >
                                                                                <span>{item}</span>
                                                                                {selections.items[sectionId]?.includes(item) && <Check size={16} />}
                                                                            </motion.div>
                                                                        ))}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: Summary */}
                    {step === 3 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <h3 className="text-2xl font-serif mb-6 text-center text-white">Your Menu Summary</h3>
                            <div className="bg-white/5 p-6 rounded-xl space-y-8 border border-white/10">
                                {selections.cuisine.map(cuisineId => {
                                    const cuisineName = cuisines.find(c => c.id === cuisineId)?.name;
                                    const hasSelections = Object.keys(selections.items).some(key => key.startsWith(cuisineId) && selections.items[key].length > 0);

                                    if (!hasSelections) return null;

                                    return (
                                        <div key={cuisineId}>
                                            <h4 className="text-gold-500 text-xl uppercase tracking-widest mb-4 border-b border-white/10 pb-2">{cuisineName}</h4>
                                            <div className="grid grid-cols-1 gap-4">
                                                {menuData[cuisineId].map(category => {
                                                    const key = `${cuisineId}-${category.name}`;
                                                    const selectedItems = selections.items[key] || [];

                                                    if (selectedItems.length === 0) return null;

                                                    return (
                                                        <div key={category.name}>
                                                            <h5 className="text-white font-medium mb-1 text-sm opacity-80">{category.name}</h5>
                                                            <ul className="list-disc list-inside text-stone-300 text-sm pl-2">
                                                                {selectedItems.map(item => <li key={item}>{item}</li>)}
                                                            </ul>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                                {selections.cuisine.every(c => !Object.keys(selections.items).some(k => k.startsWith(c) && selections.items[k].length > 0)) && (
                                    <p className="text-center text-stone-400 italic">No items selected yet.</p>
                                )}
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

                    {step < 3 ? (
                        <button
                            onClick={nextStep}
                            disabled={step === 1 && selections.cuisine.length === 0}
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
