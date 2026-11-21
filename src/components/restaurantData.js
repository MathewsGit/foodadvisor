const restaurants = [
  {
    name: "McDonald's", location: 'Dubai Mall, Downtown Dubai', description: 'Burgers, fries and quick family meals', rating: '4.2', price: '$', time: '20–30 min', reviewCount: 284,
    hours: [['Monday - Thursday', '7:00 AM - 1:00 AM'], ['Friday - Sunday', '7:00 AM - 2:00 AM']],
    menu: [
      { name: 'Big Mac Meal', description: 'Big Mac, fries and a chilled drink', price: 'AED 32', picture: '🍔' },
      { name: 'McChicken Meal', description: 'Crispy chicken burger with golden fries', price: 'AED 28', picture: '🍗' },
      { name: 'Chicken McNuggets', description: 'Crispy chicken bites with dipping sauce', price: 'AED 22', picture: '🍟' },
      { name: 'McFlurry Oreo', description: 'Soft serve with crunchy Oreo pieces', price: 'AED 14', picture: '🍦' },
    ],
    reviews: [
      { title: 'Quick Big Mac lunch', rating: '4.3', dish: 'Big Mac Meal', reviewer: 'Omar Ali', experience: 'The burger was warm, the fries were crisp and the order came out quickly. Good for a fast lunch while shopping.' },
      { title: 'A sweet finish', rating: '4.1', dish: 'McFlurry Oreo', reviewer: 'Layla Noor', experience: 'The McFlurry was creamy with plenty of Oreo pieces. The queue was busy, but it moved steadily.' },
    ],
  },
  {
    name: 'KFC', location: 'Mall of the Emirates, Al Barsha', description: 'Seasoned fried chicken, burgers and sharing buckets', rating: '4.1', price: '$', time: '25–35 min', reviewCount: 196,
    hours: [['Sunday - Wednesday', '10:00 AM - 12:00 AM'], ['Thursday - Saturday', '10:00 AM - 2:00 AM']],
    menu: [
      { name: 'Spicy Twister Box', description: 'Spicy chicken wrap, fries and a drink', price: 'AED 29', picture: '🌯' },
      { name: 'Zinger Burger Meal', description: 'Crispy spicy chicken burger with fries', price: 'AED 31', picture: '🍔' },
      { name: 'Original Recipe Bucket', description: 'Seasoned chicken pieces for sharing', price: 'AED 59', picture: '🍗' },
      { name: 'Crispy Strips', description: 'Tender chicken strips with your choice of dip', price: 'AED 24', picture: '🍟' },
    ],
    reviews: [
      { title: 'A spicy Twister favourite', rating: '4.2', dish: 'Spicy Twister Box', reviewer: 'Noah Karim', experience: 'The wrap had a good kick and the chicken stayed crispy. The box made a filling meal.' },
      { title: 'Bucket for the table', rating: '4.0', dish: 'Original Recipe Bucket', reviewer: 'Rania Saeed', experience: 'There was plenty to share and the seasoning was tasty. The chicken was a little oily, but still enjoyable.' },
    ],
  },
  {
    name: 'Gazania Restaurant', location: 'Al Rigga Road, Deira', description: 'Mandi, madhbi and traditional Middle Eastern meals', rating: '4.6', price: '$$', time: '30–40 min', reviewCount: 142,
    hours: [['Daily', '11:30 AM - 12:30 AM']],
    menu: [
      { name: 'Chicken Mandi', description: 'Slow cooked chicken with fragrant mandi rice', price: 'AED 28', picture: '🍗' },
      { name: 'Chicken Madhbi', description: 'Grilled chicken, rice and house spices', price: 'AED 32', picture: '🍚' },
      { name: 'Lamb Mandi', description: 'Tender lamb served over spiced rice', price: 'AED 46', picture: '🍖' },
      { name: 'Spicy Chicken Shawarma', description: 'Grilled chicken wrap with garlic sauce', price: 'AED 15', picture: '🌯' },
    ],
    reviews: [
      { title: 'Comforting chicken mandi', rating: '4.7', dish: 'Chicken Mandi', reviewer: 'Lina Hassan', experience: 'The chicken was tender and the rice was fragrant. The portion was generous and easy to share.' },
      { title: 'Smoky madhbi with great rice', rating: '4.5', dish: 'Chicken Madhbi', reviewer: 'Faisal Nasser', experience: 'The grilled flavour came through nicely and the rice was well seasoned. Service was warm and welcoming.' },
    ],
  },
  {
    name: 'Green Garden Kitchen', location: 'Jumeirah Beach Road, Jumeirah', description: 'Fresh bowls, light lunches and vegetarian favourites', rating: '4.5', price: '$$', time: '25–35 min', reviewCount: 126,
    hours: [['Monday - Friday', '8:00 AM - 9:00 PM'], ['Saturday - Sunday', '9:00 AM - 10:00 PM']],
    menu: [
      { name: 'Garden Bowl', description: 'Greens, grains, roasted vegetables and house dressing', price: 'AED 34', picture: '🥗' },
      { name: 'Avocado Toast', description: 'Sourdough, avocado and fresh herbs', price: 'AED 22', picture: '🥑' },
      { name: 'Roasted Tomato Soup', description: 'Slow roasted tomato and basil', price: 'AED 14', picture: '🍲' },
      { name: 'Mango Smoothie', description: 'Mango blended with yoghurt and a hint of lime', price: 'AED 19', picture: '🥤' },
    ],
    reviews: [
      { title: 'A fresh garden bowl', rating: '4.6', dish: 'Garden Bowl', reviewer: 'Sarah Ahmed', experience: 'The vegetables were crisp and colourful, and the dressing brought the bowl together. A lovely fresh lunch.' },
      { title: 'Simple, satisfying toast', rating: '4.4', dish: 'Avocado Toast', reviewer: 'Mariam Zaki', experience: 'The sourdough had a nice crunch and the avocado tasted fresh. I would order it again.' },
    ],
  },
  {
    name: 'Krispy Kreme', location: 'Mall of the Emirates, Al Barsha', description: 'Doughnuts, coffee and sweet treats', rating: '4.4', price: '$', time: '15–25 min', reviewCount: 118,
    hours: [['Sunday - Wednesday', '8:00 AM - 11:00 PM'], ['Thursday - Saturday', '8:00 AM - 1:00 AM']],
    menu: [
      { name: 'Original Glazed Dozen', description: 'A dozen soft, original glazed doughnuts', price: 'AED 59', picture: '🍩' },
      { name: 'Chocolate Dream Cake', description: 'Chocolate iced doughnut with a smooth filling', price: 'AED 12', picture: '🍩' },
      { name: 'Strawberry Sprinkles', description: 'Strawberry icing topped with colourful sprinkles', price: 'AED 11', picture: '🍩' },
      { name: 'Iced Latte', description: 'Chilled espresso blended with fresh milk', price: 'AED 20', picture: '☕' },
    ],
    reviews: [
      { title: 'Fresh glazed doughnuts', rating: '4.5', dish: 'Original Glazed Dozen', reviewer: 'Hana Yusuf', experience: 'The doughnuts were soft and fresh with just the right amount of glaze. Great for sharing with family.' },
      { title: 'Chocolate treat with coffee', rating: '4.3', dish: 'Chocolate Dream Cake', reviewer: 'Ali Mansoor', experience: 'The chocolate filling was rich and paired well with the iced latte. A nice afternoon pick-me-up.' },
    ],
  },
  {
    name: "Chili's", location: 'City Centre Mirdif, Mirdif', description: 'American-style burgers, ribs, fajitas and Tex-Mex', rating: '4.3', price: '$$', time: '30–40 min', reviewCount: 173,
    hours: [['Sunday - Wednesday', '11:00 AM - 11:00 PM'], ['Thursday - Saturday', '11:00 AM - 12:00 AM']],
    menu: [
      { name: 'Baby Back Ribs', description: 'Slow cooked ribs brushed with barbecue sauce', price: 'AED 89', picture: '🍖' },
      { name: 'Oldtimer Burger', description: 'Beef patty with lettuce, tomato and pickles', price: 'AED 59', picture: '🍔' },
      { name: 'Chicken Fajitas', description: 'Sizzling chicken with peppers and warm tortillas', price: 'AED 72', picture: '🌮' },
      { name: 'Southwestern Quesadilla', description: 'Grilled tortilla filled with chicken and cheese', price: 'AED 54', picture: '🫓' },
    ],
    reviews: [
      { title: 'Ribs worth sharing', rating: '4.5', dish: 'Baby Back Ribs', reviewer: 'Tariq Hassan', experience: 'The ribs were tender and the barbecue glaze was smoky and sweet. The sides made it a hearty dinner.' },
      { title: 'Sizzling fajita dinner', rating: '4.2', dish: 'Chicken Fajitas', reviewer: 'Nora Ali', experience: 'The chicken arrived sizzling with plenty of warm tortillas. Good flavours and a generous portion.' },
    ],
  },
  {
    name: "Dunkin' Donuts", location: 'Dubai Marina Mall, Dubai Marina', description: 'Coffee, doughnuts, breakfast sandwiches and snacks', rating: '4.2', price: '$', time: '15–25 min', reviewCount: 154,
    hours: [['Daily', '7:00 AM - 12:00 AM']],
    menu: [
      { name: 'Glazed Ring Donut', description: 'Classic soft ring doughnut with a sweet glaze', price: 'AED 8', picture: '🍩' },
      { name: 'Boston Kreme Donut', description: 'Chocolate topped doughnut with creamy filling', price: 'AED 10', picture: '🍩' },
      { name: 'Iced Spanish Latte', description: 'Chilled espresso with sweet creamy milk', price: 'AED 22', picture: '☕' },
      { name: 'Turkey and Cheese Sandwich', description: 'Toasted sandwich with turkey and melted cheese', price: 'AED 24', picture: '🥪' },
    ],
    reviews: [
      { title: 'Coffee and a Boston Kreme', rating: '4.3', dish: 'Boston Kreme Donut', reviewer: 'Jana Khalid', experience: 'The filling was smooth and the chocolate topping was rich. Coffee was ready quickly.' },
      { title: 'Easy breakfast stop', rating: '4.1', dish: 'Turkey and Cheese Sandwich', reviewer: 'Rashid Omar', experience: 'A warm, convenient breakfast with a good coffee. The sandwich was simple and satisfying.' },
    ],
  },
  {
    name: 'Burger King', location: 'BurJuman Mall, Bur Dubai', description: 'Flame-grilled burgers, chicken sandwiches and fries', rating: '4.0', price: '$', time: '20–30 min', reviewCount: 137,
    hours: [['Sunday - Wednesday', '10:00 AM - 12:00 AM'], ['Thursday - Saturday', '10:00 AM - 2:00 AM']],
    menu: [
      { name: 'Whopper Meal', description: 'Flame-grilled beef burger, fries and a drink', price: 'AED 34', picture: '🍔' },
      { name: 'Chicken Royale', description: 'Crispy chicken fillet with lettuce and mayo', price: 'AED 27', picture: '🍗' },
      { name: 'Onion Rings', description: 'Golden battered onion rings', price: 'AED 13', picture: '🧅' },
      { name: 'Chocolate Sundae', description: 'Vanilla soft serve with chocolate sauce', price: 'AED 10', picture: '🍨' },
    ],
    reviews: [
      { title: 'Flame-grilled Whopper', rating: '4.2', dish: 'Whopper Meal', reviewer: 'Yousef Salem', experience: 'The smoky grilled flavour stood out and the vegetables were fresh. A filling meal for the price.' },
      { title: 'Crispy chicken and rings', rating: '3.9', dish: 'Chicken Royale', reviewer: 'Dana Rami', experience: 'The chicken sandwich was crunchy and the onion rings were a good side. The order took a little while.' },
    ],
  },
  {
    name: 'Pizza Hut', location: 'Al Ghurair Centre, Deira', description: 'Pizzas, pasta, sides and family bundles', rating: '4.1', price: '$$', time: '30–45 min', reviewCount: 165,
    hours: [['Daily', '11:00 AM - 1:00 AM']],
    menu: [
      { name: 'Margherita Pizza', description: 'Tomato sauce, mozzarella and basil', price: 'AED 39', picture: '🍕' },
      { name: 'Chicken Supreme', description: 'Chicken, peppers, mushrooms and cheese', price: 'AED 52', picture: '🍕' },
      { name: 'Creamy Chicken Pasta', description: 'Penne pasta in a creamy chicken sauce', price: 'AED 36', picture: '🍝' },
      { name: 'Garlic Bread', description: 'Oven baked bread with garlic butter', price: 'AED 16', picture: '🥖' },
    ],
    reviews: [
      { title: 'A cheesy Chicken Supreme', rating: '4.3', dish: 'Chicken Supreme', reviewer: 'Maha Fadi', experience: 'The crust was soft, the toppings were generous and it arrived hot. A good pizza for a movie night.' },
      { title: 'Pasta and garlic bread', rating: '4.0', dish: 'Creamy Chicken Pasta', reviewer: 'Khalid Nabil', experience: 'The sauce was comforting and the garlic bread was warm. The portion was just right for lunch.' },
    ],
  },
  {
    name: 'Starbucks', location: 'City Walk, Al Wasl', description: 'Coffee, teas, bakery items and light meals', rating: '4.4', price: '$$', time: '10–20 min', reviewCount: 209,
    hours: [['Sunday - Wednesday', '7:00 AM - 11:00 PM'], ['Thursday - Saturday', '7:00 AM - 12:00 AM']],
    menu: [
      { name: 'Caramel Macchiato', description: 'Espresso, steamed milk and caramel drizzle', price: 'AED 25', picture: '☕' },
      { name: 'Matcha Latte', description: 'Smooth matcha with steamed milk', price: 'AED 24', picture: '🍵' },
      { name: 'Chocolate Croissant', description: 'Flaky pastry filled with dark chocolate', price: 'AED 17', picture: '🥐' },
      { name: 'Chicken Pesto Sandwich', description: 'Chicken, pesto and cheese on toasted bread', price: 'AED 32', picture: '🥪' },
    ],
    reviews: [
      { title: 'Caramel coffee break', rating: '4.6', dish: 'Caramel Macchiato', reviewer: 'Mariam Issa', experience: 'The espresso balanced the caramel nicely and the drink was made just how I asked. A comfortable place to pause.' },
      { title: 'Good sandwich for lunch', rating: '4.2', dish: 'Chicken Pesto Sandwich', reviewer: 'Bilal Sami', experience: 'The pesto had a fresh flavour and the sandwich was toasted well. Quick service during a busy afternoon.' },
    ],
  },
  {
    name: 'Subway', location: 'Motor City, Dubai', description: 'Made-to-order sandwiches, wraps and salads', rating: '4.0', price: '$', time: '15–25 min', reviewCount: 98,
    hours: [['Daily', '8:00 AM - 11:00 PM']],
    menu: [
      { name: 'Chicken Teriyaki Sub', description: 'Chicken strips with teriyaki sauce and vegetables', price: 'AED 29', picture: '🥖' },
      { name: 'Tuna Sandwich', description: 'Tuna with crisp salad in freshly baked bread', price: 'AED 27', picture: '🥪' },
      { name: 'Steak and Cheese Wrap', description: 'Seasoned steak, cheese and crunchy vegetables', price: 'AED 32', picture: '🌯' },
      { name: 'Chocolate Chip Cookie', description: 'Soft baked cookie with chocolate chips', price: 'AED 7', picture: '🍪' },
    ],
    reviews: [
      { title: 'Fresh chicken teriyaki sub', rating: '4.2', dish: 'Chicken Teriyaki Sub', reviewer: 'Aisha Jamil', experience: 'The vegetables were crisp and I could choose exactly what went into my sandwich. A fresh lunch option.' },
      { title: 'Tuna sandwich on the go', rating: '3.9', dish: 'Tuna Sandwich', reviewer: 'Rami Saleh', experience: 'A quick, filling sandwich with plenty of salad. It was convenient to take away.' },
    ],
  },
  {
    name: 'Texas Chicken', location: 'Ibn Battuta Mall, Jebel Ali', description: 'Crispy fried chicken, biscuits and hearty combos', rating: '4.2', price: '$', time: '25–35 min', reviewCount: 111,
    hours: [['Sunday - Thursday', '10:00 AM - 12:00 AM'], ['Friday - Saturday', '10:00 AM - 1:00 AM']],
    menu: [
      { name: 'Crispy Chicken Sandwich', description: 'Crispy chicken fillet with pickles and sauce', price: 'AED 27', picture: '🍔' },
      { name: 'Spicy Chicken Combo', description: 'Spicy chicken pieces with fries and a biscuit', price: 'AED 39', picture: '🍗' },
      { name: 'Honey Butter Biscuit', description: 'Warm flaky biscuit with honey butter', price: 'AED 8', picture: '🥐' },
      { name: 'Chicken Tenders', description: 'Tender strips served with dipping sauce', price: 'AED 26', picture: '🍟' },
    ],
    reviews: [
      { title: 'Crunchy chicken sandwich', rating: '4.3', dish: 'Crispy Chicken Sandwich', reviewer: 'Saif Nasser', experience: 'The coating was crunchy and the chicken stayed juicy. The biscuit was a nice extra.' },
      { title: 'Spicy combo with a biscuit', rating: '4.1', dish: 'Spicy Chicken Combo', reviewer: 'Reem Faisal', experience: 'The chicken had a good spice level and the sides made the combo filling. I would order it again.' },
    ],
  },
  {
    name: 'Al Baik', location: 'Dubai Mall, Downtown Dubai', description: 'Broasted chicken, seafood and signature garlic sauce', rating: '4.5', price: '$', time: '20–35 min', reviewCount: 241,
    hours: [['Daily', '10:00 AM - 1:00 AM']],
    menu: [
      { name: 'Broasted Chicken Meal', description: 'Crispy broasted chicken with fries and garlic sauce', price: 'AED 26', picture: '🍗' },
      { name: 'Chicken Nuggets', description: 'Bite sized chicken nuggets with a tangy dip', price: 'AED 19', picture: '🍟' },
      { name: 'Fish Fillet Meal', description: 'Crispy fish fillet, fries and sauce', price: 'AED 24', picture: '🐟' },
      { name: 'Shrimp Meal', description: 'Crispy shrimp with cocktail sauce', price: 'AED 32', picture: '🍤' },
    ],
    reviews: [
      { title: 'Crispy broasted chicken', rating: '4.7', dish: 'Broasted Chicken Meal', reviewer: 'Abdullah Faris', experience: 'The coating was crisp and the garlic sauce added plenty of flavour. A satisfying meal at a good price.' },
      { title: 'Shrimp with signature sauce', rating: '4.3', dish: 'Shrimp Meal', reviewer: 'Nadine Khalaf', experience: 'The shrimp were crunchy and the sauce was tangy. It was a fun change from my usual chicken order.' },
    ],
  },
  {
    name: "Papa Johns",
    location: 'Al Wasl Road, Jumeirah', description: 'Freshly baked pizzas, chicken sides and desserts', rating: '4.2', price: '$$', time: '30–45 min', reviewCount: 89,
    hours: [['Sunday - Thursday', '11:00 AM - 1:00 AM'], ['Friday - Saturday', '11:00 AM - 2:00 AM']],
    menu: [
      { name: 'The Works Pizza', description: 'Pepperoni, sausage, vegetables and cheese', price: 'AED 55', picture: '🍕' },
      { name: 'Super Papa Pizza', description: 'Loaded pizza with meats, peppers and olives', price: 'AED 58', picture: '🍕' },
      { name: 'Garlic Parmesan Wings', description: 'Oven baked wings tossed in garlic parmesan', price: 'AED 34', picture: '🍗' },
      { name: 'Cinnamon Pull Aparts', description: 'Soft cinnamon bites with icing dip', price: 'AED 22', picture: '🍩' },
    ],
    reviews: [
      { title: 'Loaded Works pizza', rating: '4.4', dish: 'The Works Pizza', reviewer: 'Hadi Murad', experience: 'The toppings were plentiful and the crust had a nice chew. The garlic sauce on the side was a bonus.' },
      { title: 'Sweet cinnamon finish', rating: '4.0', dish: 'Cinnamon Pull Aparts', reviewer: 'Farah Nabil', experience: 'Warm, soft and nicely cinnamon scented. A good dessert to split after pizza.' },
    ],
  },
]

export default restaurants
