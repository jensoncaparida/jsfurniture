import getProducts from '@/services/get-products';

import { Container } from '@/components/ui/container';

import { Sort } from './components/sort';
import { ViewFilter } from './components/view';
import { SearchBar } from './components/searchBar';
import { ProductList } from './components/productList';

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const products = await getProducts({});

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(searchParams.term.toLowerCase()),
  );

  return (
    <main>
      <div className="flex h-[250px] w-full flex-col items-center justify-center space-y-4 bg-gray-100 px-4">
        <p className="text-medium">
          Search results for{' '}
          <span className="font-semibold italic">"{searchParams.term}"</span>
        </p>
        <SearchBar />
      </div>
      {/* top options mobile */}
      <div className="block lg:hidden">
        <Sort />
        <div className="flex items-center justify-between p-4">
          <span>{results.length} Products</span>
          <ViewFilter />
        </div>
      </div>
      <Container>
        {/* top options desktop */}
        <div className="hidden items-center justify-between py-5 lg:flex">
          <div className="flex items-center space-x-4">
            <span>View as</span> <ViewFilter />
          </div>
          <span>{results.length} Products</span>
          <div className="flex items-center space-x-4">
            <span>SORT BY:</span> <Sort />
          </div>
        </div>
        <ProductList data={results} />
      </Container>
    </main>
  );
}
