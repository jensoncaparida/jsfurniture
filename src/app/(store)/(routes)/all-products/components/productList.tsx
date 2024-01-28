'use client';

import { useSearchParams } from 'next/navigation';

import { NoResults } from '@/components/ui/noResults';
import { ProductCard } from '@/components/ui/productCard';
import { ProductCardList } from '@/components/ui/productCardList';

interface ProductListProps {
  data: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ data }) => {
  const searchParams = useSearchParams();

  //check if query string is in list view
  const isListView = searchParams.get('view') === 'list';

  return (
    <>
      {isListView ? (
        <div className="h-auto w-full">
          {data && data.length > 0 ? (
            <div className="mb-4 flex flex-col space-y-2">
              {data.map((item) => (
                <ProductCardList key={item.id} data={item} />
              ))}
            </div>
          ) : (
            <NoResults />
          )}
        </div>
      ) : (
        <div className="h-auto w-full">
          {data && data.length > 0 ? (
            <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-3">
              {data.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          ) : (
            <NoResults />
          )}
        </div>
      )}
    </>
  );
};
