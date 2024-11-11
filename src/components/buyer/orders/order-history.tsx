import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { formatCurrency, formatDate } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';

const orders = [
  {
    id: '1',
    date: '2024-03-15',
    total: 45.99,
    status: 'Delivered',
    items: [
      { name: 'Organic Tomatoes', quantity: 2, price: 3.99 },
      { name: 'Fresh Basil', quantity: 1, price: 2.99 },
    ],
  },
  {
    id: '2',
    date: '2024-03-10',
    total: 29.99,
    status: 'Processing',
    items: [
      { name: 'Local Honey', quantity: 1, price: 8.99 },
      { name: 'Fresh Eggs', quantity: 2, price: 5.99 },
    ],
  },
];

export function OrderHistory() {
  const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null);

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>#{order.id}</TableCell>
                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell>{formatCurrency(order.total)}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedOrder(order)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order #{selectedOrder?.id} Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p>{selectedOrder && formatDate(selectedOrder.date)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p>{selectedOrder?.status}</p>
              </div>
            </div>
            <div>
              <p className="font-medium mb-2">Items</p>
              {selectedOrder?.items.map((item, index) => (
                <div key={index} className="flex justify-between py-2 border-b">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))}
              <div className="flex justify-between mt-4 font-medium">
                <span>Total</span>
                <span>{selectedOrder && formatCurrency(selectedOrder.total)}</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}