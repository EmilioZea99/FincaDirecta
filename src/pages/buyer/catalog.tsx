import BuyerLayout from '@/components/layout/buyer-layout';
import { ProductGrid } from '@/components/buyer/product-grid';
import { ProductFilters } from '@/components/buyer/product-filters';

export default function BuyerCatalog() {
  return (
    <BuyerLayout>
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold">Product Catalog</h1>
        <ProductFilters />
        <ProductGrid />
      </div>
    </BuyerLayout>
  );
}