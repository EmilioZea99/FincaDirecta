import BuyerLayout from '@/components/layout/buyer-layout';
import { OrderHistory } from '@/components/buyer/orders/order-history';

export default function BuyerOrders() {
  return (
    <BuyerLayout>
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold">Order History</h1>
        <OrderHistory />
      </div>
    </BuyerLayout>
  );
}