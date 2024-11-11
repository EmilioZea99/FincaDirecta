import FarmerLayout from '@/components/layout/farmer-layout';
import { MessageList } from '@/components/farmer/messages/message-list';
import { MessageView } from '@/components/farmer/messages/message-view';

export default function FarmerMessages() {
  return (
    <FarmerLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Messages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MessageList />
          <MessageView />
        </div>
      </div>
    </FarmerLayout>
  );
}