import FarmerLayout from '@/components/layout/farmer-layout';
import { InventoryHeader } from '@/components/farmer/inventory/inventory-header';
import { InventoryGrid } from '@/components/farmer/inventory/inventory-grid';

export default function FarmerInventory() {
  return (
    <FarmerLayout>
      <div className="container mx-auto p-4 space-y-6">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <InventoryHeader />
        <InventoryGrid />
      </div>
    </FarmerLayout>
  );
}