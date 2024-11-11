import { create } from 'zustand';
import { InventoryItem } from '@/types';

interface InventoryStore {
  items: InventoryItem[];
  addItem: (item: Omit<InventoryItem, 'id'>) => void;
  updateItem: (id: number, updates: Partial<InventoryItem>) => void;
  removeItem: (id: number) => void;
  updateStock: (id: number, quantity: number) => void;
}

export const useInventoryStore = create<InventoryStore>((set) => ({
  items: [
    { id: 1, name: 'Russet Potatoes', quantity: 500, unit: 'lbs', price: 0.75, quality: 'Grade A' },
    { id: 2, name: 'Red Potatoes', quantity: 300, unit: 'lbs', price: 0.85, quality: 'Grade A' },
    { id: 3, name: 'Yukon Gold Potatoes', quantity: 400, unit: 'lbs', price: 0.95, quality: 'Grade A' },
  ],

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, { ...item, id: Math.max(...state.items.map((i) => i.id)) + 1 }],
    })),

  updateItem: (id, updates) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      ),
    })),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  updateStock: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),
}));