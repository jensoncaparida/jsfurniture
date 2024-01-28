'use client';

import Image from 'next/image';

import { formatter } from '@/lib/utils';
import Link from 'next/link';

interface ProductCardListProps {
  data: Product;
}

export const ProductCardList: React.FC<ProductCardListProps> = ({ data }) => {
  return (
    <>
      <Link
        href={`/products/${data.id}`}
        className="group flex cursor-pointer border-b transition-all"
      >
        <div className="w-[240px] overflow-hidden">
          <Image
            src={data.images?.[0]?.url}
            alt="product image"
            width={200}
            height={200}
            className="rounded-md object-cover duration-500 group-hover:scale-105"
          />
        </div>
        <div className="w-full p-2 pl-4 text-left">
          <span className="text-xs uppercase">{data.brand.name}</span>
          <h6 className="mb-2 text-sm font-semibold uppercase decoration-[#055A5B] underline-offset-4 group-hover:text-[#055A5B] group-hover:underline lg:text-base">
            {data.name}
          </h6>
          <p className="mb-4 text-sm font-medium">
            {formatter.format(data.price)}
          </p>
          <p>
            {data.description.length > 200
              ? `${data.description.substring(0, 200)}...`
              : data.description}
          </p>
        </div>
      </Link>
    </>
  );
};
