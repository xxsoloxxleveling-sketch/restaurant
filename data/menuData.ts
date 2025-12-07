export type CuisineId = 'continental' | 'pan-asian' | 'south-asian' | 'middle-eastern' | 'artisan-desserts';

export interface MenuItem {
    id: CuisineId;
    name: string;
    image: string;
}

export interface MenuCategory {
    name: string;
    items: string[];
}

export const menuSections = [
    {
        id: 'middle-eastern',
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
        title: 'Continental Cuisine',
        description: 'From classic European techniques to modern interpretations, our continental selection offers sophisticated flavors for discerning palates.',
        items: [
            'Truffle Mushroom Arancini',
            'Tempura Prawns with Wasabi Mayo',
            'Mini Beef Sliders',
            'Pan-Seared Salmon with Dill Cream',
            'Roasted Beetroot & Goat Cheese Salad', 
            'Blueberry Cheesecake'
        ],
        image: '/continental_cuisine.png'
    }
    {
        id: 'pan-asian',
        title: 'Pan Asian Specialties',
        description: 'Bold and vibrant flavors of Asia. A journey through the culinary traditions of the East, featuring authentic spices and fresh ingredients.',
        items: [
            'Thai Green Curry',
            'Dim Sum Collection',
            'Stir-Fried Noodles',
            'Kung Pao Chicken',
            'Sushi Platter'
        ],
        image: '/continental_pan_asian.webp'
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
        id: 'artisan-desserts',
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

export const menuData: Record<CuisineId, MenuCategory[]> = {
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
