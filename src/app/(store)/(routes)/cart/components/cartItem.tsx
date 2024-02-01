'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';

import { TableCell, TableRow } from '@/components/ui/table';

import useCart from '@/hooks/useCart';

import { formatter } from '@/lib/utils';

interface CartItemProps {
  data: Product;
  quantity: number;
}

export const CartItem: React.FC<CartItemProps> = ({ data, quantity }) => {
  const cart = useCart();

  const handleQuantity = (type: string) => {
    if (type === 'add') {
      cart.increaseItemQuantity(data.id);
    } else if (type === 'minus' && quantity > 1) {
      cart.descreaseItemQuantity(data.id);
    }
  };

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <>
      <TableRow className="text-xs hover:bg-white">
        {/* product */}
        <TableCell>
          <div className="flex items-center space-x-4 py-5">
            <div className="relative h-24 w-24">
              <Image
                src={data.images[0].url}
                alt={data.name}
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                className="object-contain"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-medium uppercase">{data.name}</h3>
              <p className="text-xs uppercase text-gray-500">
                Color: {data.color.name}
              </p>
              <p className="text-xs uppercase text-gray-500">
                Size: {data.size.value}
              </p>
              {/* quantity mobile layout */}
              <div className="flex space-x-4 py-4 lg:hidden">
                <div className="flex w-24 items-center justify-center space-x-4 rounded-lg border py-1 lg:py-2">
                  <button
                    className="p-1 text-muted-foreground hover:text-black"
                    onClick={() => handleQuantity('minus')}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-sm font-medium">{quantity}</span>
                  <button
                    className="p-1 text-muted-foreground hover:text-black"
                    onClick={() => handleQuantity('add')}
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button className="p-1 text-red-500" onClick={onRemove}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </TableCell>
        {/* quantity */}
        <TableCell className="hidden py-14 lg:block">
          <div className="flex space-x-4">
            <div className="flex w-24 items-center justify-center space-x-4 rounded-lg border py-2">
              <button
                className="p-1 text-muted-foreground hover:text-black"
                onClick={() => handleQuantity('minus')}
              >
                <Minus size={16} />
              </button>
              <span className="text-sm font-medium">{quantity}</span>
              <button
                className="p-1 text-muted-foreground hover:text-black"
                onClick={() => handleQuantity('add')}
              >
                <Plus size={16} />
              </button>
            </div>
            <button className="p-1 text-red-500" onClick={onRemove}>
              <Trash2 size={16} />
            </button>
          </div>
        </TableCell>
        {/* price */}
        <TableCell>
          <span className="text-sm font-medium">
            {formatter.format(data.price)}
          </span>
        </TableCell>
      </TableRow>
    </>
  );
};
