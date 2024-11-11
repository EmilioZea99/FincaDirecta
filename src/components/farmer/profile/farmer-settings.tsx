import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/hooks/use-auth';
import { useNavigate } from 'react-router-dom';

export function FarmerSettings() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Manage your account preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Order Notifications</Label>
            <Switch id="notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="messages">Message Alerts</Label>
            <Switch id="messages" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="inventory">Inventory Alerts</Label>
            <Switch id="inventory" defaultChecked />
          </div>
        </div>
        <div className="space-y-4 pt-4">
          <Button variant="outline" className="w-full">
            Change Password
          </Button>
          <Button
            variant="destructive"
            className="w-full"
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}