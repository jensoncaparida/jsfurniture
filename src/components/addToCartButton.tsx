'usec client';

import useCart from '@/hooks/useCart';

import { Button } from '@/components/ui/button';

interface AddToCartButtonProps {
  data: Product;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ data }) => {
  const cart = useCart();

  const addToCart = () => {
    cart.addItem(data);
  };

  return (
    <>
      <Button
        onClick={addToCart}
        className="w-full max-w-[200px] border-black font-semibold uppercase hover:bg-black hover:text-white"
        variant="outline"
      >
        ADD TO CART
      </Button>
    </>
  );
};
