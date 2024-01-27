import getProducts from '@/services/get-products';
import getBrands from '@/services/get-brands';
import getSizes from '@/services/get-sizes';
import getColors from '@/services/get-color';

import { Container } from '@/components/ui/container';
import { Banner } from '@/components/ui/banner';
import { Filter } from './components/filter';
import { FilterList } from './components/filterList';
import { MobileFilter } from './components/mobileFilter';
import { ProductCard } from '@/components/ui/productCard';
import { NoResults } from '@/components/ui/noResults';

interface AllProductsProps {
  searchParams: {
    brandId: string;
    sizeId: string;
    colorId: string;
  };
}

export default async function AllProducts({ searchParams }: AllProductsProps) {
  const products = await getProducts({
    brandId: searchParams.brandId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });

  const brands = await getBrands();
  const sizes = await getSizes();
  const colors = await getColors();

  return (
    <main>
      <Banner title="All Products" imageUrl="/all-products-banner.jpg" />
      {/* top options */}
      <div className="flex flex-row overflow-y-auto lg:hidden">
        <MobileFilter
          brands={brands}
          sizes={sizes}
          colors={colors}
          products={products}
        />
      </div>
      <Container>
        <div className="hidden items-center justify-between py-5 lg:flex">
          <div>View as</div>
          <span>{products.length} Products</span>
          <div>Sort by</div>
        </div>
      </Container>
      <Container>
        <div className="flex space-x-4">
          {/* filter */}
          <div className="hidden min-w-[280px] pr-4 lg:block">
            <FilterList
              valueKeys={['brandId', 'sizeId', 'colorId']}
              brands={brands}
              sizes={sizes}
              colors={colors}
            />
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
          <div className="h-auto w-full">
            {products && products.length > 0 ? (
              <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-3">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            ) : (
              <NoResults />
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
