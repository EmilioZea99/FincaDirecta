import BuyerLayout from '@/components/layout/buyer-layout';
import { FeaturedProducts } from '@/components/buyer/featured-products';
import { CategoryGrid } from '@/components/buyer/category-grid';
import { RecentlyViewed } from '@/components/buyer/recently-viewed';

export default function BuyerHome() {
  return (
    <BuyerLayout>
      <div className="space-y-6 p-4">
        <h1 className="text-2xl font-bold">Fresh from Local Farmers</h1>
        <FeaturedProducts />
        <CategoryGrid />
        <RecentlyViewed />
      </div>
    </BuyerLayout>
  );
}