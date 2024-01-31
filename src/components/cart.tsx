'use client';

import { useRouter } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';

import useCart from '@/hooks/useCart';

import { Button } from '@/components/ui/button';

export const Cart = () => {
  const cart = useCart();
  const router = useRouter();

  return (
    <>
      <Button
        size="icon"
        variant="none"
        className="relative"
        onClick={() => router.push('/cart')}
      >
        <ShoppingBag className="h-6 w-6" />
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
          {cart.items.length}
        </span>
      </Button>
    </>
  );
};
