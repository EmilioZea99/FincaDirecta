import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import { PostgrestError } from '@supabase/supabase-js';

export interface CartItem {
  id: number;
  product_id: number;
  quantity: number;
  name: string;
  price: number;
  image?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity' | 'id' | 'product_id'> & { id: number }) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  fetchItems: () => Promise<void>;
}

interface CartItemResponse {
  id: number;
  quantity: number;
  products: {
    id: number;
    name: string;
    price: number;
    image_url: string;
  }
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  
  fetchItems: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data: cartItems, error } = await supabase
      .from('cart_items')
      .select(`
        id,
        quantity,
        products (
          id,
          name,
          price,
          image_url
        )
      `)
      .eq('customer_id', user.id) as { data: CartItemResponse[] | null, error: PostgrestError };
    
    if (error) {
      console.error('Error fetching cart items:', error);
      return;
    }
    
    const formattedItems = cartItems?.map(item => ({
      id: item.id,
      product_id: item.products.id,
      quantity: item.quantity,
      name: item.products.name,
      price: item.products.price,
      image: item.products.image_url
    })) || [];

    set({ items: formattedItems });
  },

  addItem: async (item) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // Check if item already exists in cart
    const existingItem = await supabase
      .from('cart_items')
      .select('*')
      .eq('customer_id', user.id)
      .eq('product_id', item.id)
      .single();

    if (existingItem.data) {
      // If item exists, update quantity
      const newQuantity = existingItem.data.quantity + 1;
      const { data, error } = await supabase
        .from('cart_items')
        .update({ quantity: newQuantity })
        .eq('id', existingItem.data.id)
        .select(`
          id,
          quantity,
          products (
            id,
            name,
            price,
            image_url
          )
        `)
        .single() as { data: CartItemResponse | null, error: PostgrestError };

      if (error) {
        console.error('Error updating item:', error);
        return;
      }

      if (data) {
        set((state) => ({
          items: state.items.map((i) =>
            i.id === data.id
              ? {
                  id: data.id,
                  product_id: data.products.id,
                  quantity: data.quantity,
                  name: data.products.name,
                  price: data.products.price,
                  image: data.products.image_url
                }
              : i
          )
        }));
      }
    } else {
      // If item doesn't exist, insert new item
      const { data, error } = await supabase
        .from('cart_items')
        .insert({
          customer_id: user.id,
          product_id: item.id,
          quantity: 1
        })
        .select(`
          id,
          quantity,
          products (
            id,
            name,
            price,
            image_url
          )
        `)
        .single() as { data: CartItemResponse | null, error: PostgrestError };

      if (error) {
        console.error('Error adding item:', error);
        return;
      }

      if (data) {
        set((state) => ({
          items: [...state.items, {
            id: data.id,
            product_id: data.products.id,
            quantity: data.quantity,
            name: data.products.name,
            price: data.products.price,
            image: data.products.image_url
          }]
        }));
      }
    }
  },

  removeItem: async (id) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('id', id)
      .eq('customer_id', user.id);

    if (error) {
      console.error('Error removing item:', error);
      return;
    }

    set((state) => ({
      items: state.items.filter((item) => item.id !== id)
    }));
  },

  updateQuantity: async (id, quantity) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
      .from('cart_items')
      .update({ quantity })
      .eq('id', id)
      .eq('customer_id', user.id);

    if (error) {
      console.error('Error updating quantity:', error);
      return;
    }

    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    }));
  },

  clearCart: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('customer_id', user.id);

    if (error) {
      console.error('Error clearing cart:', error);
      return;
    }

    set({ items: [] });
  },
}));