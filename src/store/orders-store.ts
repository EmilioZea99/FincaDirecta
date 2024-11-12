import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import { Order } from '@/types';

interface OrdersStore {
  orders: Order[];
  fetchOrders: () => Promise<void>;
  updateOrderStatus: (id: number, status: Order['status']) => Promise<void>;
}

export const useOrdersStore = create<OrdersStore>((set) => ({
  orders: [],

  fetchOrders: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data, error } = await supabase
      .from('orders')
      .select(`
        id,
        status,
        total,
        created_at,
        order_items (
          quantity,
          price,
          products (
            name
          )
        )
      `)
      .eq('customer_id', user.id);

    if (error) {
      console.error('Error fetching orders:', error);
      return;
    }

    set({ orders: (data || []).map(order => ({
      ...order,
      order_items: order.order_items.map(item => ({
        ...item,
        products: item.products[0] // Take first product since type expects single product
      }))
    })) });
  },

  updateOrderStatus: async (id, status) => {
    const { error } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', id);

    if (error) {
      console.error('Error updating order status:', error);
      return;
    }

    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === id ? { ...order, status } : order
      ),
    }));
  },
})); 