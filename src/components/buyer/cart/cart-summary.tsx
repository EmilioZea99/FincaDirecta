import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/lib/utils';
import { useCartStore } from '@/store/cart-store';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export function CartSummary() {
  const { items } = useCartStore();
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const { toast } = useToast();

  const shipping = items.length > 0 ? 5.00 : 0;
  const total = totalAmount + shipping;

  const handleCheckout = () => {
    toast({
      title: 'Order Placed',
      description: 'Your order has been successfully placed!',
    });
    clearCart();
    navigate('/orders');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Items ({itemCount})</span>
          <span>{formatCurrency(totalAmount)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{formatCurrency(shipping)}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={handleCheckout}
          disabled={items.length === 0}
        >
          Proceed to Checkout
        </Button>
      </CardFooter>
    </Card>
  );
}