import { useState } from 'react';
import { Order } from '@/types';

const defaultOrders: Order[] = [
  {
    id: 1,
    productName: 'Russet Potatoes',
    quantity: 100,
    total: 75.00,
    status: 'pending',
    customerName: 'John Smith',
    orderDate: '2024-01-15',
  },
  {
    id: 2,
    productName: 'Yukon Gold Potatoes',
    quantity: 50,
    total: 47.50,
    status: 'processing',
    customerName: 'Jane Doe',
    orderDate: '2024-01-14',
  },
  {
    id: 3,
    productName: 'Red Potatoes',
    quantity: 75,
    total: 63.75,
    status: 'shipped',
    customerName: 'Bob Wilson',
    orderDate: '2024-01-13',
  },
];

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>(defaultOrders);

  const updateOrderStatus = (orderId: number, status: Order['status']) => {
    setOrders(currentOrders =>
      currentOrders.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  return {
    orders,
    updateOrderStatus,
  };
}