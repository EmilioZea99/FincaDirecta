import BuyerLayout from '@/components/layout/buyer-layout';
import { BuyerProfileForm } from '@/components/buyer/profile/buyer-profile-form';
import { BuyerSettings } from '@/components/buyer/profile/buyer-settings';

export default function BuyerProfile() {
  return (
    <BuyerLayout>
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold">Profile Settings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BuyerProfileForm />
          <BuyerSettings />
        </div>
      </div>
    </BuyerLayout>
  );
}