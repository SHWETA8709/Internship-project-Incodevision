require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    name: 'Noise Cancelling Headphones',
    description: 'Wireless over-ear headphones with active noise cancellation, deep bass and 35-hour battery life.',
    price: 129.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    stock: 18,
    rating: 4.8
  },
  {
    name: 'Smart Fitness Watch',
    description: 'Track steps, heart rate, sleep, workouts and notifications with a bright AMOLED display.',
    price: 89.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    stock: 22,
    rating: 4.6
  },
  {
    name: 'Minimal Backpack',
    description: 'Water-resistant everyday backpack with laptop compartment and clean urban styling.',
    price: 54.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
    stock: 31,
    rating: 4.7
  },
  {
    name: 'Classic Sneakers',
    description: 'Comfortable low-top sneakers made for daily wear with a durable rubber sole.',
    price: 69.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    stock: 27,
    rating: 4.5
  },
  {
    name: 'Ceramic Coffee Set',
    description: 'Hand-finished ceramic mug and pour-over dripper set for a calm morning coffee ritual.',
    price: 42.5,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80',
    stock: 14,
    rating: 4.9
  },
  {
    name: 'Desk Lamp Pro',
    description: 'Adjustable LED desk lamp with touch dimming, warm/cool modes and USB charging port.',
    price: 39.99,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80',
    stock: 20,
    rating: 4.4
  },
  {
    name: 'Mechanical Keyboard',
    description: 'Compact mechanical keyboard with tactile switches, white backlight and hot-swappable keys.',
    price: 79.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80',
    stock: 16,
    rating: 4.8
  },
  {
    name: 'Polarized Sunglasses',
    description: 'UV400 polarized sunglasses with lightweight frame and timeless shape.',
    price: 34.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
    stock: 35,
    rating: 4.3
  }
];

async function seed() {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is missing in .env');
  }
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log(`${products.length} products inserted`);
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
