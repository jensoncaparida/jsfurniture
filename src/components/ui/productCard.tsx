'use client';

import Image from 'next/image';

import { formatter } from '@/lib/utils';
import Link from 'next/link';

interface ProductCardProps {
  data: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <>
      <Link
        href={`/products/${data.id}`}
        className="group cursor-pointer transition-all"
      >
        <div className="relative aspect-square h-auto w-full overflow-hidden">
          <Image
            src={data.images?.[0]?.url}
            alt="product image"
            width={400}
            height={400}
            className="aspect-square rounded-md object-contain object-center duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-2 text-left">
          <span className="text-xs uppercase">{data.brand.name}</span>
          <h6 className="text-sm font-semibold uppercase decoration-[#055A5B] underline-offset-4 group-hover:text-[#055A5B] group-hover:underline lg:text-base">
            {data.name}
          </h6>
          <span>{formatter.format(data.price)}</span>
        </div>
      </Link>
    </>
  );
};
