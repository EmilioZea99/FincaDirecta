import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import { InventoryItem } from '@/types';

interface InventoryStore {
  items: InventoryItem[];
  fetchItems: () => Promise<void>;
  addItem: (item: Omit<InventoryItem, 'id'>) => Promise<void>;
  updateItem: (id: number, updates: Partial<InventoryItem>) => Promise<void>;
  removeItem: (id: number) => Promise<void>;
}

export const useInventoryStore = create<InventoryStore>((set) => ({
  items: [],

  fetchItems: async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*');

    if (error) {
      console.error('Error fetching inventory:', error);
      return;
    }

    set({ items: data || [] });
  },

  addItem: async (item) => {
    const { data, error } = await supabase
      .from('products')
      .insert([item])
      .select()
      .single();

    if (error) {
      console.error('Error adding item:', error);
      return;
    }

    set((state) => ({ items: [...state.items, data] }));
  },

  updateItem: async (id, updates) => {
    const { error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id);

    if (error) {
      console.error('Error updating item:', error);
      return;
    }

    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      ),
    }));
  },

  removeItem: async (id) => {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error removing item:', error);
      return;
    }

    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
}));