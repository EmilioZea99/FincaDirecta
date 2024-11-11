import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

const messages = [
  {
    id: 1,
    sender: 'John Doe',
    preview: 'Question about tomatoes availability...',
    time: '10:30 AM',
    unread: true,
  },
  {
    id: 2,
    sender: 'Jane Smith',
    preview: 'Order #1234 update request',
    time: 'Yesterday',
    unread: false,
  },
];

export function MessageList() {
  return (
    <Card className="h-[calc(100vh-12rem)]">
      <ScrollArea className="h-full">
        <CardContent className="p-0">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex flex-col p-4 border-b cursor-pointer hover:bg-accent',
                message.unread && 'bg-accent/50'
              )}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{message.sender}</h4>
                <span className="text-xs text-muted-foreground">
                  {message.time}
                </span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {message.preview}
              </p>
            </div>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
}