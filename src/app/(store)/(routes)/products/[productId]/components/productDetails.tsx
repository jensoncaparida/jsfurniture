'use client';

import { formatter } from '@/lib/utils';

interface ProductDetailsProps {
  data: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase text-[#055a5b]">
            {data.brand.name}
          </p>
          <h1 className="text-2xl font-semibold uppercase">{data.name}</h1>
          <p className="font-medium">{formatter.format(data.price)}</p>
        </div>
        <p>{data.description}</p>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Color:</span> {data.color.name}
          </p>
          <div
            className="h-8 w-8 rounded-full text-xs"
            style={{
              backgroundColor: data.color.value,
            }}
          />
        </div>
        <p>
          <span className="font-semibold">Size:</span> {data.size.value}
        </p>
      </div>
    </>
  );
};
