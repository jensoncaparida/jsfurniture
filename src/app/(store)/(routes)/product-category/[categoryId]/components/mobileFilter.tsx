'use client';

import { X, SlidersHorizontal } from 'lucide-react';

import { Filter } from './filter';
import { FilterList } from './filterList';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

interface MobileFilterProps {
  brands: Brand[];
  sizes: Size[];
  colors: Color[];
  products: Product[];
}

export const MobileFilter: React.FC<MobileFilterProps> = ({
  brands,
  sizes,
  colors,
  products,
}) => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="flex w-full items-center justify-between border p-2 uppercase">
          FILTERED BY <SlidersHorizontal size={16} />
        </SheetTrigger>
        <SheetContent className="block w-[85%] border-0 p-0 md:w-[60%] lg:hidden">
          <SheetClose className="absolute -left-9 top-0 bg-white p-2">
            <X size={16} />
          </SheetClose>
          <SheetHeader className="sticky top-0 z-50 border-b bg-white">
            <SheetTitle className="p-2 pt-4 text-sm">FILTERED BY</SheetTitle>
            <Separator />
            <FilterList
              valueKeys={['brandId', 'sizeId', 'colorId']}
              brands={brands}
              sizes={sizes}
              colors={colors}
            />
          </SheetHeader>
          <div className="h-[90%] overflow-y-auto p-4">
            <Filter
              valueKey="brandId"
              name="Brands"
              data={brands}
              products={products}
            />
            <Filter
              valueKey="sizeId"
              name="Sizes"
              data={sizes}
              products={products}
            />
            <Filter
              valueKey="colorId"
              name="Colors"
              data={colors}
              products={products}
            />
          </div>
          <SheetClose>
            <SheetFooter className="absolute bottom-0 w-full bg-[#055A5B] p-4">
              <p className="text-center text-white">
                Show results ({products.length})
              </p>
            </SheetFooter>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </>
  );
};
