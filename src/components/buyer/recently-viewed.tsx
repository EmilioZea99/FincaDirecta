import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { formatCurrency } from '@/lib/utils';

const recentItems = [
  {
    id: 1,
    name: 'Fingerling Potatoes',
    price: 1.25,
    image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&q=80&w=200&h=150',
  },
  {
    id: 2,
    name: 'Purple Potatoes',
    price: 1.50,
    image: 'https://images.unsplash.com/photo-1591647713089-c2b89cc2cc55?auto=format&fit=crop&q=80&w=200&h=150',
  },
  {
    id: 3,
    name: 'New Potatoes',
    price: 1.15,
    image: 'https://images.unsplash.com/photo-1635774855536-9728f2610245?auto=format&fit=crop&q=80&w=200&h=150',
  },
];

export function RecentlyViewed() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Recently Viewed</h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-4 p-4">
          {recentItems.map((item) => (
            <Card key={item.id} className="w-[200px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-sm">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold">{formatCurrency(item.price)}/lb</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}