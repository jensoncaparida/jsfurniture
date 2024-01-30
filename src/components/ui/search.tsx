'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SearchIcon, X } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from '@/components/ui/sheet';

import { Button } from './button';

import { formatter } from '@/lib/utils';

interface SearchProps {
  data: Product[];
}

export const Search: React.FC<SearchProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(data);

  useEffect(() => {
    const results = data.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredProducts(results);
  }, [searchTerm, data]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="none">
            <SearchIcon size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[85%] border-0 p-0 lg:max-w-[500px]">
          {/* searchbar */}
          <div className="flex items-center justify-between space-x-4 border-b p-4">
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search"
              className="w-full border-none py-2 text-sm font-medium placeholder-gray-500 outline-none"
            />
            <SheetClose className="flex">
              <X size={20} />
            </SheetClose>
          </div>
          {/* search results */}
          <div className="h-[85%] overflow-y-auto p-4">
            {filteredProducts.length === 0 ? (
              <p className="text-center">No results found</p>
            ) : (
              <div className="w-full">
                {searchTerm &&
                  filteredProducts.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`}>
                      <SheetClose className="group flex w-full cursor-pointer border-b transition-all">
                        <div className="w-[240px] overflow-hidden">
                          <Image
                            src={product.images?.[0]?.url}
                            alt="product image"
                            width={200}
                            height={200}
                            className="aspect-square rounded-md object-contain object-center duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="w-full p-2 pl-4 text-left">
                          <span className="text-xs uppercase">
                            {product.brand.name}
                          </span>
                          <h6 className="mb-2 text-sm font-semibold uppercase decoration-[#055A5B] underline-offset-4 group-hover:text-[#055A5B] group-hover:underline lg:text-base">
                            {product.name}
                          </h6>
                          <p className="mb-4 text-sm font-medium">
                            {formatter.format(product.price)}
                          </p>
                        </div>
                      </SheetClose>
                    </Link>
                  ))}
              </div>
            )}
          </div>
          {/* link to search results page */}
          {searchTerm && (
            <Link href={`/search?term=${searchTerm}`}>
              <SheetClose>
                <SheetFooter className="absolute bottom-0 w-full bg-[#055A5B] p-4">
                  <p className="text-center text-white">
                    Show results ({filteredProducts.length})
                  </p>
                </SheetFooter>
              </SheetClose>
            </Link>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};
