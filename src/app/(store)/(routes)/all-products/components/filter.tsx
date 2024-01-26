'use client';

import { useState } from 'react';
import qs from 'query-string';
import { ChevronRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Checkbox } from '@/components/ui/checkbox';

interface FilterProps {
  valueKey: string;
  name: string;
  data: (Brand | Size | Color)[];
  products: Product[];
}

export const Filter: React.FC<FilterProps> = ({
  data,
  name,
  valueKey,
  products,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(true);

  const selectedValues = searchParams.getAll(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  const countProducts = (id: string) => {
    return products.filter((product: any) => product[valueKey] === id).length;
  };

  return (
    <>
      <div className="mb-8 hidden w-[280px] pr-4 lg:block">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="mb-4 flex cursor-pointer items-center"
        >
          <ChevronRight
            style={{ transform: isOpen ? 'rotate(90deg)' : 'none' }}
            className="mr-2 h-4 w-4"
          />
          <h5 className="text-sm font-semibold uppercase">{name}</h5>
        </div>
        {isOpen && (
          <div className="flex max-h-[240px] flex-col space-y-2 overflow-y-auto pl-2">
            {data.map((filter) => (
              <label
                key={filter.id}
                htmlFor={filter.id}
                className="flex cursor-pointer items-center justify-between"
              >
                <div className="flex items-center ">
                  <Checkbox
                    id={filter.id}
                    checked={selectedValues.includes(filter.id)}
                    onCheckedChange={() => onClick(filter.id)}
                    className="border-gray-400"
                  />
                  <span className="ml-2 font-medium">{filter.name}</span>
                </div>
                ({countProducts(filter.id)})
              </label>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
