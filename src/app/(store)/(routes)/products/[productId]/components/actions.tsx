'use client';

import useCart from '@/hooks/useCart';

import { Button } from '@/components/ui/button';

interface ActionsProps {
  data: Product;
}

export const Actions: React.FC<ActionsProps> = ({ data }) => {
  const cart = useCart();

  const addToCart = () => {
    cart.addItem(data);
  };

  return (
    <>
      <Button
        onClick={addToCart}
        className="w-full max-w-[200px] border-black py-6 font-semibold uppercase hover:bg-black hover:text-white"
        variant="outline"
      >
        ADD TO CART
      </Button>
    </>
  );
};
