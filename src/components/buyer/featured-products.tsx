import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import { useCartStore } from '@/store/cart-store';
import { useToast } from '@/hooks/use-toast';

const featuredProducts = [
  {
    id: 1,
    name: 'Russet Potatoes',
    farmer: 'Green Valley Farm',
    price: 0.75,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=300&h=200',
    description: 'Perfect for baking and frying',
  },
  {
    id: 2,
    name: 'Yukon Gold Potatoes',
    farmer: 'Sunny Meadows Farm',
    price: 0.95,
    image: 'https://images.unsplash.com/photo-1591650640260-62ca3d219e8e?auto=format&fit=crop&q=80&w=300&h=200',
    description: 'Buttery flavor, great for mashing',
  },
  {
    id: 3,
    name: 'Red Potatoes',
    farmer: 'Highland Farm',
    price: 0.85,
    image: 'https://images.unsplash.com/photo-1552661397-4b92726ac5f7?auto=format&fit=crop&q=80&w=300&h=200',
    description: 'Ideal for roasting and salads',
  },
];

export function FeaturedProducts() {
  const addItem = useCartStore((state) => state.addItem);
  const { toast } = useToast();

  const handleAddToCart = async (product: typeof featuredProducts[0]) => {
    try {
      await addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
      
      toast({
        title: 'Added to Cart',
        description: `${product.name} has been added to your cart.`,
      });
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to add item to cart. Please try again.',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">by {product.farmer}</p>
            <p className="text-sm mt-2">{product.description}</p>
            <p className="text-lg font-bold mt-2">{formatCurrency(product.price)}/lb</p>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}