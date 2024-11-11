import { Card, CardContent } from '@/components/ui/card';
import { CircleOff, Sprout, Leaf, Scale, Star, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'All Potatoes', icon: CircleOff, query: 'all' },
  { name: 'New Harvest', icon: Sprout, query: 'new' },
  { name: 'Organic', icon: Leaf, query: 'organic' },
  { name: 'By Weight', icon: Scale, query: 'bulk' },
  { name: 'Premium', icon: Star, query: 'premium' },
  { name: 'Quick Ship', icon: Clock, query: 'quick-ship' },
];

export function CategoryGrid() {
  const navigate = useNavigate();

  const handleCategoryClick = (query: string) => {
    navigate(`/catalog?category=${query}`);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card 
              key={category.name} 
              className="cursor-pointer hover:bg-accent transition-colors"
              onClick={() => handleCategoryClick(category.query)}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Icon className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium">{category.name}</span>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}