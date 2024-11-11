import FarmerLayout from '@/components/layout/farmer-layout';
import { OverviewCards } from '@/components/farmer/overview-cards';
import { InventorySection } from '@/components/farmer/inventory-section';
import { SalesChart } from '@/components/farmer/sales-chart';

export default function FarmerHome() {
  return (
    <FarmerLayout>
      <h1 className="text-2xl font-bold">Welcome, Farmer John</h1>
      <OverviewCards />
      <InventorySection />
      <SalesChart />
    </FarmerLayout>
  );
}