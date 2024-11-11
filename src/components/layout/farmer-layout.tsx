import { Link, useLocation } from 'react-router-dom';
import { Home, Package, ShoppingCart, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { icon: <Home className="h-5 w-5" />, label: 'Home', path: '/farmer' },
  { icon: <Package className="h-5 w-5" />, label: 'Inventory', path: '/farmer/inventory' },
  { icon: <ShoppingCart className="h-5 w-5" />, label: 'Orders', path: '/farmer/orders' },
  { icon: <MessageSquare className="h-5 w-5" />, label: 'Messages', path: '/farmer/messages' },
  { icon: <User className="h-5 w-5" />, label: 'Profile', path: '/farmer/profile' },
];

export function FarmerLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 p-4 space-y-4">{children}</main>

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

export default FarmerLayout;