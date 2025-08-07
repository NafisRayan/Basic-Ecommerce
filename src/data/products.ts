import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Electronics', icon: 'Smartphone', slug: 'electronics' },
  { id: '2', name: 'Books', icon: 'BookOpen', slug: 'books' },
  { id: '3', name: 'Jewelry', icon: 'Gem', slug: 'jewelry' },
  { id: '4', name: 'Toys', icon: 'Gamepad2', slug: 'toys' },
  { id: '5', name: 'Sports', icon: 'Dumbbell', slug: 'sports' },
  { id: '6', name: 'Watches', icon: 'Watch', slug: 'watches' },
  { id: '7', name: 'Games', icon: 'Gamepad', slug: 'games' },
  { id: '8', name: 'Fine Arts', icon: 'Palette', slug: 'fine-arts' },
  { id: '9', name: 'Software', icon: 'Monitor', slug: 'software' },
  { id: '10', name: 'Furniture', icon: 'Armchair', slug: 'furniture' }
];

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Apple Watch Series 9',
    brand: 'Apple',
    price: 399.99,
    originalPrice: 429.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1649698/pexels-photo-1649698.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'electronics',
    subcategory: 'smartwatch',
    description: 'The most advanced Apple Watch yet with brilliant Retina display, comprehensive health tracking, and seamless connectivity.',
    features: ['GPS + Cellular', 'Always-On Retina display', 'Blood Oxygen monitoring', 'ECG app', 'Water resistant to 50 meters'],
    specifications: {
      'Display': '45mm Always-On Retina display',
      'Battery': 'Up to 18 hours',
      'Storage': '64GB',
      'Connectivity': 'GPS + Cellular'
    },
    rating: 4.7,
    reviewCount: 1250,
    inStock: true,
    discount: 7,
    isNew: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    price: 999.99,
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'electronics',
    subcategory: 'smartphone',
    description: 'Revolutionary iPhone 15 Pro with titanium design, A17 Pro chip, and advanced camera system.',
    features: ['A17 Pro chip', 'Titanium design', 'Action Button', 'Advanced camera system', '5G connectivity'],
    rating: 4.8,
    reviewCount: 2100,
    inStock: true,
    isNew: true
  },
  {
    id: '3',
    name: 'MacBook Pro 16-inch',
    brand: 'Apple',
    price: 2499.99,
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'electronics',
    subcategory: 'laptop',
    description: 'Supercharged by M3 Pro and M3 Max chips for demanding workflows.',
    features: ['M3 Pro chip', '16-inch Liquid Retina XDR display', '18-hour battery life', 'Advanced camera and audio'],
    rating: 4.9,
    reviewCount: 850,
    inStock: true,
    isFeatured: true
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5 Headphones',
    brand: 'Sony',
    price: 349.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'electronics',
    subcategory: 'headphones',
    description: 'Industry-leading noise canceling with exceptional sound quality and comfort.',
    features: ['Industry-leading noise canceling', '30-hour battery life', 'Multipoint connection', 'Touch sensor controls'],
    rating: 4.6,
    reviewCount: 920,
    inStock: true,
    discount: 12
  },
  {
    id: '5',
    name: 'Samsung 65" QLED 4K TV',
    brand: 'Samsung',
    price: 1299.99,
    originalPrice: 1599.99,
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'electronics',
    subcategory: 'tv',
    description: 'Stunning 4K QLED display with smart TV features and immersive sound.',
    features: ['4K QLED display', 'HDR10+', 'Smart TV with Tizen OS', 'Object Tracking Sound'],
    rating: 4.5,
    reviewCount: 650,
    inStock: true,
    discount: 19
  },

  // Furniture
  {
    id: '6',
    name: 'Modern Accent Chair',
    brand: 'ComfortHome',
    price: 299.99,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'furniture',
    subcategory: 'chair',
    description: 'Stylish modern accent chair perfect for any living space.',
    features: ['Premium upholstery', 'Solid wood legs', 'Ergonomic design', 'Easy assembly'],
    rating: 4.4,
    reviewCount: 180,
    inStock: true
  },
  {
    id: '7',
    name: 'Velvet Armchair',
    brand: 'LuxurySeat',
    price: 449.99,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'furniture',
    subcategory: 'chair',
    description: 'Elegant velvet armchair with deep teal upholstery and gold-finished legs.',
    features: ['Luxurious velvet fabric', 'Gold-finished legs', 'Deep cushioning', 'Contemporary design'],
    rating: 4.7,
    reviewCount: 95,
    inStock: true,
    isFeatured: true
  },
  {
    id: '8',
    name: 'Ergonomic Office Chair',
    brand: 'OfficeComfort',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/3471029/pexels-photo-3471029.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'furniture',
    subcategory: 'chair',
    description: 'Comfortable ergonomic office chair with lumbar support and adjustable height.',
    features: ['Lumbar support', 'Adjustable height', 'Breathable mesh', '360-degree swivel'],
    rating: 4.3,
    reviewCount: 340,
    inStock: true,
    discount: 20
  },
  {
    id: '9',
    name: 'Scandinavian Dining Table',
    brand: 'NordicDesign',
    price: 599.99,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'furniture',
    subcategory: 'table',
    description: 'Beautiful Scandinavian-style dining table made from sustainable oak wood.',
    features: ['Sustainable oak wood', 'Seats 6 people', 'Minimalist design', 'Easy maintenance'],
    rating: 4.8,
    reviewCount: 75,
    inStock: true
  },
  {
    id: '10',
    name: 'Modern Sofa Set',
    brand: 'ComfortLiving',
    price: 1299.99,
    originalPrice: 1599.99,
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'furniture',
    subcategory: 'sofa',
    description: 'Contemporary 3-piece sofa set with premium fabric and comfortable cushioning.',
    features: ['3-piece set', 'Premium fabric', 'High-density foam', 'Removable cushions'],
    rating: 4.6,
    reviewCount: 120,
    inStock: true,
    discount: 19
  },

  // Sports & Shoes
  {
    id: '11',
    name: 'Nike Air Max 270',
    brand: 'Nike',
    price: 149.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'sports',
    subcategory: 'shoes',
    description: 'Comfortable running shoes with Air Max cushioning technology.',
    features: ['Air Max cushioning', 'Breathable mesh upper', 'Durable rubber outsole', 'Lightweight design'],
    rating: 4.5,
    reviewCount: 890,
    inStock: true
  },
  {
    id: '12',
    name: 'Adidas Ultraboost 22',
    brand: 'Adidas',
    price: 179.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'sports',
    subcategory: 'shoes',
    description: 'Premium running shoes with Boost midsole for maximum energy return.',
    features: ['Boost midsole', 'Primeknit upper', 'Continental rubber outsole', 'Torsion System'],
    rating: 4.7,
    reviewCount: 650,
    inStock: true,
    discount: 10
  },
  {
    id: '13',
    name: 'Women\'s Running Shoes',
    brand: 'ActiveFit',
    price: 89.99,
    image: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'sports',
    subcategory: 'shoes',
    description: 'Lightweight women\'s running shoes designed for comfort and performance.',
    features: ['Lightweight construction', 'Breathable fabric', 'Cushioned midsole', 'Flexible outsole'],
    rating: 4.2,
    reviewCount: 420,
    inStock: true
  },
  {
    id: '14',
    name: 'Basketball Sneakers',
    brand: 'CourtKing',
    price: 124.99,
    image: 'https://images.pexels.com/photos/2562992/pexels-photo-2562992.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'sports',
    subcategory: 'shoes',
    description: 'High-performance basketball sneakers with superior grip and ankle support.',
    features: ['High-top design', 'Superior grip', 'Ankle support', 'Durable construction'],
    rating: 4.4,
    reviewCount: 280,
    inStock: true
  },
  {
    id: '15',
    name: 'Yoga Mat Premium',
    brand: 'ZenFit',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4327020/pexels-photo-4327020.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'sports',
    subcategory: 'equipment',
    description: 'Premium yoga mat with excellent grip and cushioning for all yoga styles.',
    features: ['Non-slip surface', 'Extra thick padding', 'Eco-friendly materials', 'Carrying strap included'],
    rating: 4.6,
    reviewCount: 520,
    inStock: true
  },

  // Watches
  {
    id: '16',
    name: 'Rolex Submariner',
    brand: 'Rolex',
    price: 8999.99,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'watches',
    subcategory: 'luxury',
    description: 'Iconic luxury dive watch with exceptional craftsmanship and timeless design.',
    features: ['Automatic movement', 'Water resistant to 300m', 'Unidirectional bezel', 'Oystersteel case'],
    rating: 4.9,
    reviewCount: 45,
    inStock: true,
    isFeatured: true
  },
  {
    id: '17',
    name: 'Casio G-Shock',
    brand: 'Casio',
    price: 149.99,
    image: 'https://images.pexels.com/photos/236739/pexels-photo-236739.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'watches',
    subcategory: 'sport',
    description: 'Rugged sports watch built to withstand the toughest conditions.',
    features: ['Shock resistant', 'Water resistant to 200m', 'Multi-function display', 'Solar powered'],
    rating: 4.5,
    reviewCount: 780,
    inStock: true
  },
  {
    id: '18',
    name: 'Citizen Eco-Drive',
    brand: 'Citizen',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'watches',
    subcategory: 'casual',
    description: 'Elegant dress watch powered by light with sophisticated design.',
    features: ['Eco-Drive solar technology', 'Sapphire crystal', 'Stainless steel case', 'Date display'],
    rating: 4.4,
    reviewCount: 320,
    inStock: true,
    discount: 20
  },

  // Books
  {
    id: '19',
    name: 'The Psychology of Programming',
    brand: 'TechBooks',
    price: 29.99,
    image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'books',
    subcategory: 'technology',
    description: 'Comprehensive guide to understanding the psychological aspects of software development.',
    features: ['480 pages', 'Updated edition', 'Case studies included', 'Expert insights'],
    rating: 4.7,
    reviewCount: 210,
    inStock: true
  },
  {
    id: '20',
    name: 'Modern Web Development',
    brand: 'DevPress',
    price: 34.99,
    image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'books',
    subcategory: 'technology',
    description: 'Complete guide to modern web development frameworks and best practices.',
    features: ['600+ pages', 'Code examples', 'Framework comparisons', 'Industry best practices'],
    rating: 4.8,
    reviewCount: 150,
    inStock: true
  },

  // Jewelry
  {
    id: '21',
    name: 'Diamond Engagement Ring',
    brand: 'Eternal',
    price: 2499.99,
    image: 'https://images.pexels.com/photos/265804/pexels-photo-265804.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'jewelry',
    subcategory: 'rings',
    description: 'Stunning 1-carat diamond engagement ring in 14k white gold setting.',
    features: ['1-carat diamond', '14k white gold', 'Certified diamond', 'Lifetime warranty'],
    rating: 4.9,
    reviewCount: 85,
    inStock: true,
    isFeatured: true
  },
  {
    id: '22',
    name: 'Pearl Necklace',
    brand: 'OceanGems',
    price: 299.99,
    image: 'https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'jewelry',
    subcategory: 'necklaces',
    description: 'Elegant freshwater pearl necklace perfect for formal occasions.',
    features: ['Freshwater pearls', 'Sterling silver clasp', '18-inch length', 'Gift box included'],
    rating: 4.6,
    reviewCount: 125,
    inStock: true
  },

  // Toys
  {
    id: '23',
    name: 'LEGO Architecture Set',
    brand: 'LEGO',
    price: 79.99,
    image: 'https://images.pexels.com/photos/4815816/pexels-photo-4815816.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'toys',
    subcategory: 'building',
    description: 'Build iconic architectural landmarks with this detailed LEGO set.',
    features: ['Ages 16+', '470 pieces', 'Detailed instructions', 'Display stand included'],
    rating: 4.8,
    reviewCount: 320,
    inStock: true
  },
  {
    id: '24',
    name: 'Remote Control Drone',
    brand: 'SkyTech',
    price: 159.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'toys',
    subcategory: 'remote-control',
    description: 'Advanced RC drone with HD camera and intelligent flight modes.',
    features: ['HD camera', '20-minute flight time', 'GPS positioning', 'Mobile app control'],
    rating: 4.4,
    reviewCount: 450,
    inStock: true,
    discount: 20
  },

  // Games
  {
    id: '25',
    name: 'PlayStation 5 Console',
    brand: 'Sony',
    price: 499.99,
    image: 'https://images.pexels.com/photos/7915288/pexels-photo-7915288.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'games',
    subcategory: 'console',
    description: 'Next-generation gaming console with lightning-fast loading and immersive gameplay.',
    features: ['Ultra-high speed SSD', '4K gaming', 'Ray tracing', 'DualSense controller'],
    rating: 4.8,
    reviewCount: 1200,
    inStock: true,
    isFeatured: true
  },

  // Continue with more products to reach 100...
  // Additional products for various categories
  {
    id: '26',
    name: 'Smart Home Hub',
    brand: 'HomeTech',
    price: 99.99,
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'electronics',
    subcategory: 'smart-home',
    description: 'Central hub for all your smart home devices with voice control.',
    features: ['Voice control', 'Multiple device support', 'Mobile app', 'Easy setup'],
    rating: 4.3,
    reviewCount: 680,
    inStock: true
  },
  {
    id: '27',
    name: 'Wireless Earbuds Pro',
    brand: 'AudioMax',
    price: 179.99,
    originalPrice: 219.99,
    image: 'https://images.pexels.com/photos/8370352/pexels-photo-8370352.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'electronics',
    subcategory: 'headphones',
    description: 'Premium wireless earbuds with active noise cancellation.',
    features: ['Active noise cancellation', '8-hour battery', 'Wireless charging case', 'IPX4 water resistance'],
    rating: 4.5,
    reviewCount: 540,
    inStock: true,
    discount: 18
  },
  {
    id: '28',
    name: 'Gaming Mechanical Keyboard',
    brand: 'GamePro',
    price: 129.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'electronics',
    subcategory: 'accessories',
    description: 'High-performance mechanical keyboard designed for gaming enthusiasts.',
    features: ['Cherry MX switches', 'RGB backlighting', 'Programmable keys', 'USB-C connection'],
    rating: 4.6,
    reviewCount: 380,
    inStock: true
  },
  {
    id: '29',
    name: 'Coffee Table Modern',
    brand: 'StyleHome',
    price: 249.99,
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'furniture',
    subcategory: 'table',
    description: 'Sleek modern coffee table with glass top and metal frame.',
    features: ['Tempered glass top', 'Metal frame', 'Contemporary design', 'Easy assembly'],
    rating: 4.4,
    reviewCount: 95,
    inStock: true
  },
  {
    id: '30',
    name: 'Bookshelf Tall',
    brand: 'ReadyShelf',
    price: 189.99,
    originalPrice: 229.99,
    image: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'furniture',
    subcategory: 'storage',
    description: 'Tall wooden bookshelf with 5 adjustable shelves.',
    features: ['5 adjustable shelves', 'Solid wood construction', 'Anti-tip hardware', 'Multiple finishes'],
    rating: 4.5,
    reviewCount: 160,
    inStock: true,
    discount: 17
  }
  // ... Continue adding products until we reach 100
];

// Generate additional products to reach 100 total
const additionalCategories = ['electronics', 'furniture', 'sports', 'watches', 'books', 'jewelry', 'toys', 'games'];
const baseImages = [
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500',
  'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500',
  'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=500',
  'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=500',
  'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=500'
];

for (let i = 31; i <= 100; i++) {
  const category = additionalCategories[i % additionalCategories.length];
  const imageIndex = i % baseImages.length;
  
  products.push({
    id: i.toString(),
    name: `Product ${i}`,
    brand: 'Brand Name',
    price: Math.floor(Math.random() * 500) + 50,
    originalPrice: Math.floor(Math.random() * 100) + 500,
    image: baseImages[imageIndex],
    category,
    description: `High-quality ${category} product with excellent features and design.`,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    rating: Math.floor(Math.random() * 10) / 2 + 4,
    reviewCount: Math.floor(Math.random() * 1000) + 50,
    inStock: Math.random() > 0.1,
    discount: Math.random() > 0.7 ? Math.floor(Math.random() * 30) + 5 : undefined
  });
}