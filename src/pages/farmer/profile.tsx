import FarmerLayout from '@/components/layout/farmer-layout';
import { FarmerProfileForm } from '@/components/farmer/profile/farmer-profile-form';
import { FarmerSettings } from '@/components/farmer/profile/farmer-settings';

export default function FarmerProfile() {
  return (
    <FarmerLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        <div className="grid gap-6">
          <FarmerProfileForm />
          <FarmerSettings />
        </div>
      </div>
    </FarmerLayout>
  );
}