import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

export function MessageView() {
  return (
    <Card className="h-[calc(100vh-12rem)] flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">Chat with John Doe</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto space-y-4">
        <div className="flex flex-col space-y-4">
          <div className="bg-accent p-3 rounded-lg max-w-[80%] self-start">
            <p className="text-sm">
              Hi, I'm interested in your tomatoes. Do you have any available for next week?
            </p>
            <span className="text-xs text-muted-foreground">10:30 AM</span>
          </div>
          <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%] self-end">
            <p className="text-sm">
              Yes, we'll have fresh tomatoes available next week. How many pounds would you like?
            </p>
            <span className="text-xs opacity-70">10:32 AM</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-4">
        <div className="flex w-full gap-2">
          <Textarea
            placeholder="Type your message..."
            className="flex-1"
            rows={1}
          />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}