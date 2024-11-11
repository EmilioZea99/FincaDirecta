import { useState } from 'react';
import { InventoryItem } from '@/types';

const defaultInventory: InventoryItem[] = [
  {
    id: 1,
    name: 'Russet Potatoes',
    quantity: 500,
    unit: 'lbs',
    price: 0.75,
    quality: 'Grade A',
    description: 'Perfect for baking and frying',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500',
  },
  {
    id: 2,
    name: 'Yukon Gold Potatoes',
    quantity: 400,
    unit: 'lbs',
    price: 0.95,
    quality: 'Grade A',
    description: 'Buttery flavor, great for mashing',
    imageUrl: 'https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?auto=format&fit=crop&w=500',
  },
  {
    id: 3,
    name: 'Red Potatoes',
    quantity: 300,
    unit: 'lbs',
    price: 0.85,
    quality: 'Grade A',
    description: 'Ideal for roasting and salads',
    imageUrl: 'https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&w=500',
  },
  {
    id: 4,
    name: 'Fingerling Potatoes',
    quantity: 200,
    unit: 'lbs',
    price: 1.25,
    quality: 'Grade B',
    description: 'Gourmet variety, perfect for roasting',
    imageUrl: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=500',
  },
  {
    id: 5,
    name: 'Purple Potatoes',
    quantity: 150,
    unit: 'lbs',
    price: 1.50,
    quality: 'Grade A',
    description: 'Unique color, rich in antioxidants',
    imageUrl: 'https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?auto=format&fit=crop&w=500',
  },
];

export function useInventory() {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>(defaultInventory);

  const addProduct = (product: Omit<InventoryItem, 'id'>) => {
    const newProduct = {
      ...product,
      id: Math.max(...inventoryItems.map(item => item.id)) + 1,
    };
    setInventoryItems([...inventoryItems, newProduct]);
  };

  const updateProduct = (id: number, updates: Partial<InventoryItem>) => {
    setInventoryItems(items =>
      items.map(item =>
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };

  const deleteProduct = (id: number) => {
    setInventoryItems(items => items.filter(item => item.id !== id));
  };

  return {
    inventoryItems,
    addProduct,
    updateProduct,
    deleteProduct,
  };
}