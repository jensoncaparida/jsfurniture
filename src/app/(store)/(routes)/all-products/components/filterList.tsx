'use client';

import qs from 'query-string';
import { X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Separator } from '@/components/ui/separator';

interface FilterListProps {
  brands: Brand[];
  sizes: Size[];
  colors: Color[];
  valueKeys: string[];
}

export const FilterList: React.FC<FilterListProps> = ({
  valueKeys,
  brands,
  sizes,
  colors,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const clearAllFilters = () => {
    const current = qs.parse(searchParams.toString());

    for (const key of valueKeys) {
      if (current[key]) {
        current[key] = null;
      }
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: current,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  // find the name of the filter by the id
  const getFilterName = (key: string) => {
    switch (key) {
      case 'brandId':
        return brands.find((brand) => brand.id === searchParams.get(key))?.name;
      case 'sizeId':
        return sizes.find((size) => size.id === searchParams.get(key))?.name;
      case 'colorId':
        return colors.find((color) => color.id === searchParams.get(key))?.name;
      default:
        return '';
    }
  };

  // clear a single filter
  const clearFilter = (key: string) => {
    const current = qs.parse(searchParams.toString());

    if (current[key]) {
      current[key] = null;

      const url = qs.stringifyUrl(
        {
          url: window.location.href,
          query: current,
        },
        { skipNull: true },
      );

      router.push(url);
    }
  };

  // remove the 'Id' from the key and capitalize the first letter
  const formatKey = (key: string) => {
    return key.slice(0, -2).charAt(0).toUpperCase() + key.slice(0, -2).slice(1);
  };

  // check if there are any selected filters
  const hasSelectedFilters = valueKeys.some((key) => !!getFilterName(key));

  return (
    <>
      {hasSelectedFilters && (
        <div className="mb-4">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-sm font-semibold uppercase">FILTERED BY</h5>
            <button onClick={clearAllFilters} className="text-xs">
              Clear All
            </button>
          </div>
          <div className="mb-4 text-sm">
            {valueKeys.map((key) => {
              const filterName = getFilterName(key);

              return filterName ? (
                <div
                  key={key}
                  className="mb-4 flex items-center justify-between"
                >
                  <div className="space-x-2">
                    <span>{formatKey(key)}:</span>
                    <span className="font-semibold">{filterName}</span>
                  </div>
                  <button onClick={() => clearFilter(key)}>
                    <X size={16} />
                  </button>
                </div>
              ) : null;
            })}
          </div>
          <Separator />
        </div>
      )}
    </>
  );
};
