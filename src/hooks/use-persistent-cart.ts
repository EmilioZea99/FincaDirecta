import { useEffect } from 'react';
import { useCartStore } from '@/store/cart-store';

export function usePersistentCart() {
  const fetchItems = useCartStore((state) => state.fetchItems);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);
} 