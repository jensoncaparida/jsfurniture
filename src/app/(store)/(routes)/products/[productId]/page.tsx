import getProduct from '@/services/get-product';

import { ProductDetails } from './components/productDetails';
import { Gallery } from '@/components/gallery';
import { Container } from '@/components/ui/container';
import { Actions } from './components/actions';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function Product({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <main className="py-4">
      <Container>
        <div className="w-full space-y-8 lg:flex lg:space-x-12 lg:space-y-0">
          <div className="w-full lg:min-w-[500px]">
            <Gallery images={product.images} />
          </div>
          {/* product details and add to cart*/}
          <div className="w-full space-y-8 lg:w-[1280px]">
            <ProductDetails data={product} />
            <Actions data={product} />
          </div>
        </div>
      </Container>
    </main>
  );
}
