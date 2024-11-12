import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_ANON_KEY || ''
);

const products = [
  {
    name: 'Russet Potatoes',
    quantity: 500,
    unit: 'lbs',
    price: 0.75,
    quality: 'Grade A',
    description: 'Perfect for baking and frying',
    image_url: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500'
  },
  {
    name: 'Yukon Gold Potatoes',
    quantity: 400,
    unit: 'lbs',
    price: 0.95,
    quality: 'Grade A',
    description: 'Buttery flavor, great for mashing',
    image_url: 'https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?auto=format&fit=crop&w=500'
  },
  {
    name: 'Red Potatoes',
    quantity: 300,
    unit: 'lbs',
    price: 0.85,
    quality: 'Grade A',
    description: 'Ideal for roasting and salads',
    image_url: 'https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&w=500'
  },
  {
    name: 'Fingerling Potatoes',
    quantity: 200,
    unit: 'lbs',
    price: 1.25,
    quality: 'Grade B',
    description: 'Gourmet variety, perfect for roasting',
    image_url: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=500'
  },
  {
    name: 'Purple Potatoes',
    quantity: 150,
    unit: 'lbs',
    price: 1.50,
    quality: 'Grade A',
    description: 'Unique color, rich in antioxidants',
    image_url: 'https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?auto=format&fit=crop&w=500'
  }
];

async function seedDatabase() {
  const { data, error } = await supabase
    .from('products')
    .insert(products);

  if (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }

  console.log('Database seeded successfully:', data);
  process.exit(0);
}

seedDatabase();