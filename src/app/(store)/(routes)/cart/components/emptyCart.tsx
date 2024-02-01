'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export const EmptyCart = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-8 py-16">
        <h1
          className="text-4xl font-medium"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
          }}
        >
          Your cart is empty
        </h1>
        <Button onClick={() => router.push('/')}>START SHOPPING</Button>
      </div>
    </>
  );
};
