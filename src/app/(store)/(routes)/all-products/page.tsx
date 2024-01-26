import getProducts from '@/services/get-products';
import getBrands from '@/services/get-brands';
import getSizes from '@/services/get-sizes';
import getColors from '@/services/get-color';

import { Container } from '@/components/ui/container';
import { Banner } from '@/components/ui/banner';
import { Filter } from './components/filter';
import { FilterList } from './components/filterList';

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
      <Container>
        <div className="flex items-center justify-between py-5">
          <div>View as</div>
          <span>{products.length} Products</span>
          <div>Sort by</div>
        </div>
      </Container>
      <Container>
        <div>
          {/* filter */}
          <div className="hidden w-[280px] pr-4 lg:block">
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
        </div>
      </Container>
    </main>
  );
}
