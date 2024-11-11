import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { formatCurrency } from '@/lib/utils';

const inventoryItems = [
  { name: 'Russet Potatoes', quantity: 500, quality: 'Grade A', price: 0.75, stock: 75 },
  { name: 'Red Potatoes', quantity: 300, quality: 'Grade A', price: 0.85, stock: 60 },
  { name: 'Yukon Gold Potatoes', quantity: 400, quality: 'Grade A', price: 0.95, stock: 85 },
];

export function InventorySection() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Inventory</h2>
        <Button>Add Product</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {inventoryItems.map((item) => (
          <Card key={item.name}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Quantity:</span>
                  <span>{item.quantity} lbs</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Quality:</span>
                  <span>{item.quality}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Price:</span>
                  <span>{formatCurrency(item.price)}/lb</span>
                </div>
                <Progress value={item.stock} className="mt-2" />
                <div className="flex justify-end space-x-2 mt-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}