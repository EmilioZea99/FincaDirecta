export interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  price: number;
  quality: string;
  description: string;
  imageUrl: string;
}

export interface Order {
  id: number;
  productName: string;
  quantity: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  customerName: string;
  orderDate: string;
}

export interface SalesDataPoint {
  name: string;
  sales: number;
}

export interface OverviewItem {
  title: string;
  value: string;
  change: string;
  icon: React.ComponentType<{ className?: string }>;
}