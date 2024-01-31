'use client';

import { AddToCartButton } from '@/components/addToCartButton';

interface ActionsProps {
  data: Product;
}

export const Actions: React.FC<ActionsProps> = ({ data }) => {
  return (
    <>
      <AddToCartButton data={data} />
    </>
  );
};
