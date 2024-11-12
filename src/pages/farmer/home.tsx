import FarmerLayout from '@/components/layout/farmer-layout';
import { OverviewCards } from '@/components/farmer/overview-cards';
import { InventorySection } from '@/components/farmer/inventory-section';
import { SalesChart } from '@/components/farmer/sales-chart';
import { useAuth } from '@/hooks/use-auth';

export default function FarmerHome() {
  const { user } = useAuth();

  return (
    <FarmerLayout>
      <h1 className="text-2xl font-bold">Welcome, {user?.name || 'Farmer'}</h1>
      <OverviewCards />
      <InventorySection />
      <SalesChart />
    </FarmerLayout>
  );
}