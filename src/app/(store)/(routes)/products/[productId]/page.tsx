import getProduct from '@/services/get-product';

import { Actions } from './components/actions';
import { ProductDetails } from './components/productDetails';
import { Gallery } from '@/components/gallery';
import { Container } from '@/components/ui/container';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function Product({ params }: ProductPageProps) {
  let product;

  // Add a delay before fetching the product
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2000 ms = 2 seconds

  product = await getProduct(params.productId);

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
