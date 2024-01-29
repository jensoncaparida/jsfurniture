import getProduct from '@/services/get-product';

import { Container } from '@/components/ui/container';
import { Gallery } from '@/components/gallery';

import { formatter } from '@/lib/utils';

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
          {/* product details */}
          <div className="flex w-full flex-col space-y-4 lg:w-[1280px]">
            <div className="space-y-1">
              <p className="text-xs font-medium uppercase text-[#055a5b]">
                {product.brand.name}
              </p>
              <h1 className="text-2xl font-semibold uppercase">
                {product.name}
              </h1>
              <p className="font-medium">{formatter.format(product.price)}</p>
            </div>
            <p>{product.description}</p>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Color:</span>{' '}
                {product.color.name}
              </p>
              <div
                className="h-8 w-8 rounded-full text-xs"
                style={{
                  backgroundColor: product.color.value,
                }}
              />
            </div>
            <p>
              <span className="font-semibold">Size:</span> {product.size.value}
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
