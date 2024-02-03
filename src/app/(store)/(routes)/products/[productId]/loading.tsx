import { Skeleton } from '@/components/ui/skeleton';
import { Container } from '@/components/ui/container';

export default function Loading() {
  return (
    <div className="py-4">
      <Container>
        <div className="w-full space-y-8 lg:flex lg:space-x-12 lg:space-y-0">
          <div className="w-full lg:min-w-[500px]">
            <div className="flex flex-col-reverse">
              <div className="mx-auto mt-6 hidden w-full sm:block">
                <div className="grid grid-cols-6 gap-4">
                  <Skeleton className="h-20 w-full" />
                </div>
              </div>
              {/* ImageView skeleton */}
              <div className="aspect-square ">
                <div>
                  <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
                    <Skeleton className="h-full w-full object-contain object-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* product details and add to cart skeleton*/}
          <div className="w-full space-y-8 lg:w-[1280px]">
            <div className="flex flex-col space-y-4">
              <div className="space-y-1">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-8 w-1/2" />
              </div>
              <Skeleton className="h-4 w-20" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
              <div className="space-y-2 pt-4">
                <Skeleton className="h-6 w-28" />
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>
              <Skeleton className="h-6 w-28" />
            </div>
            <Skeleton className="h-12 w-1/3" />
          </div>
        </div>
      </Container>
    </div>
  );
}
