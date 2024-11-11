import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { useCartStore } from '@/store/cart-store';

export function CartItems() {
  const { items, updateQuantity, removeItem } = useCartStore();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id}>
          <CardContent className="flex items-center gap-4 p-4">
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
            )}
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-muted-foreground">
                {formatCurrency(item.price)} each
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                value={item.quantity}
                className="w-16 text-center"
                min="0"
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
              />
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-right min-w-[100px]">
              <div className="font-medium">
                {formatCurrency(item.price * item.quantity)}
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-destructive"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      {items.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          Your cart is empty
        </div>
      )}
    </div>
  );
}