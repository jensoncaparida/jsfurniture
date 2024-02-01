import useCart from '@/hooks/useCart';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

import { formatter } from '@/lib/utils';

export const Summary = () => {
  const items = useCart((state) => state.items);

  const totalPrice = items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

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
            <Button className="w-full py-6 md:w-[240px]">CHECKOUT</Button>
          </div>
        </div>
      </div>
    </>
  );
};
