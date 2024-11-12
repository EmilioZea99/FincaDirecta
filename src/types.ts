export interface CartItem {
  id: number;
  quantity: number;
  // Add other necessary properties like:
  // name?: string;
  // price?: number;
}

export interface Order {
  id: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  total: number;
  created_at: string;
  order_items: {
    quantity: number;
    price: number;
    products: {
      name: string;
    };
  }[];
} 