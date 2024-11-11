import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, ShoppingCart, ClipboardList, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { icon: <Home className="h-5 w-5" />, label: 'Home', path: '/' },
  { icon: <ShoppingBag className="h-5 w-5" />, label: 'Catalog', path: '/catalog' },
  { icon: <ShoppingCart className="h-5 w-5" />, label: 'Cart', path: '/cart' },
  { icon: <ClipboardList className="h-5 w-5" />, label: 'Orders', path: '/orders' },
  { icon: <User className="h-5 w-5" />, label: 'Profile', path: '/profile' },
];

export default function BuyerLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">{children}</main>

      <nav className="flex justify-around items-center p-4 bg-card border-t">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path}>
            <Button
              variant={location.pathname === item.path ? 'default' : 'ghost'}
              size="icon"
              className="flex flex-col items-center"
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
}