'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import Link from 'next/link';
import { formatter } from '@/lib/utils';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';

import { Progress } from '@/components/ui/progress';

interface FeaturedCarouselProps {
  title: string;
  description: string;
  data: Product[];
  link: string;
}

export const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({
  title,
  description,
  data,
  link,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const progress = (current / (count - 1)) * 100;

  return (
    <>
      <div className="w-full px-4 pt-8 lg:px-10">
        <div className="space-y-2">
          <Link href={link}>
            <h2
              className="text-2xl uppercase underline-offset-4 hover:underline"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
              }}
            >
              {title}
            </h2>
          </Link>
          <p className="text-sm">{description}</p>
        </div>
        <div className="w-full py-5">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {data.slice(0, 8).map((product) => (
                <CarouselItem
                  key={product.id}
                  className="group flex basis-1/2 cursor-pointer flex-col items-center transition-all md:basis-1/3 lg:basis-1/4"
                >
                  <Link href={`/products/${product.id}`}>
                    <div className="relative aspect-square h-auto w-full overflow-hidden">
                      <Image
                        src={product.images?.[0].url}
                        alt={`${product.name}-image`}
                        width={400}
                        height={400}
                        className="aspect-square object-contain object-center duration-500 group-hover:scale-105 "
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xs uppercase">{product.brand.name}</p>
                      <h6 className="text-sm font-semibold uppercase decoration-[#055A5B] underline-offset-4 group-hover:text-[#055A5B] group-hover:underline lg:text-base">
                        {product.name}
                      </h6>
                      <p>{formatter.format(product.price)}</p>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <Progress value={progress} className="mt-4" />
        </div>
      </div>
    </>
  );
};
