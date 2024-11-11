import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package2, Truck, CheckCircle, AlertCircle } from 'lucide-react';

const stats = [
  {
    title: 'New Orders',
    value: '12',
    icon: Package2,
    description: 'Awaiting processing',
  },
  {
    title: 'In Transit',
    value: '4',
    icon: Truck,
    description: 'Being delivered',
  },
  {
    title: 'Completed',
    value: '128',
    icon: CheckCircle,
    description: 'Last 30 days',
  },
  {
    title: 'Issues',
    value: '2',
    icon: AlertCircle,
    description: 'Needs attention',
  },
];

export function OrderStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}