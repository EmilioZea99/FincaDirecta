import { BarChart3, Package, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';

const overviewData = [
  {
    title: 'Total Inventory',
    value: '1,234 lbs',
    change: '+20% from last month',
    icon: Package,
  },
  {
    title: 'Recent Orders',
    value: '12',
    change: '3 pending delivery',
    icon: ShoppingCart,
  },
  {
    title: 'Revenue',
    value: formatCurrency(4321),
    change: '+15% from last month',
    icon: BarChart3,
  },
];

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {overviewData.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">{item.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}