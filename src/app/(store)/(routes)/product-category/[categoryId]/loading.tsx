import { Skeleton } from '@/components/ui/skeleton';
import { Container } from '@/components/ui/container';

import getProducts from '@/services/get-products';

export default async function Loading() {
  const products = await getProducts({});

  return (
    <div>
      <Skeleton className="h-[250px] w-full rounded-xl" />
      <div className="block overflow-y-auto pt-1 lg:hidden">
        <div className="flex flex-row space-x-4">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="flex items-center justify-between p-4">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
      <Container>
        <div className="hidden items-center justify-between py-5 lg:flex">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-20" />
          </div>
          <Skeleton className="h-8 w-20" />
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-20" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex space-x-4 pb-4">
          <div className="hidden min-w-[280px] pr-4 lg:block">
            <div className="space-y-4">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {products.map((product) => (
                <div key={product.id} className="space-y-4">
                  <Skeleton className="h-[300px] w-full rounded-xl" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
