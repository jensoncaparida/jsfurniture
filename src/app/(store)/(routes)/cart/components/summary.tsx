'use client';

import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';

import useCart from '@/hooks/useCart';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

import { formatter } from '@/lib/utils';

export const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const toastShownRef = useRef(false);

  useEffect(() => {
    if (!toastShownRef.current) {
      if (searchParams.get('success')) {
        toast.success('Payment completed.');
        removeAll();
        toastShownRef.current = true;
      }

      if (searchParams.get('canceled')) {
        toast.error('Something went wrong.');
        toastShownRef.current = true;
      }
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_STORE_API_URL}/checkout`,
      {
        productIds: items.map((item) => ({
          id: item.product.id,
          quantity: item.quantity,
        })),
      },
    );

    window.location = response.data.url;
  };

  return (
    <>
      <div className="max-h-[200px] w-full space-y-4 rounded-lg bg-gray-100 px-4 py-6">
        <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
        <Separator></Separator>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Order Total</h3>
            <div className="font-medium">{formatter.format(totalPrice)}</div>
          </div>
          <div className="flex w-full justify-end">
            <Button
              onClick={onCheckout}
              disabled={items.length === 0}
              className="w-full py-6 md:w-[240px]"
            >
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
