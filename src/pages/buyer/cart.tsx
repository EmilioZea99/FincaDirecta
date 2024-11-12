import BuyerLayout from '@/components/layout/buyer-layout';
import { CartItems } from '@/components/buyer/cart/cart-items';
import { CartSummary } from '@/components/buyer/cart/cart-summary';
import { usePersistentCart } from '@/hooks/use-persistent-cart';

export default function BuyerCart() {
  usePersistentCart();

  return (
    <BuyerLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <CartItems />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
    </BuyerLayout>
  );
}