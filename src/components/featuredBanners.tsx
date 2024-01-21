import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const FeaturedBanners = () => {
  return (
    <>
      <div className="relative flex h-[700px] w-full items-center justify-center">
        <Image
          src="/featuredBanners/banner1.png"
          alt="banner1"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="absolute flex flex-col items-center justify-center px-10">
          <h2
            className="text-center text-4xl text-white"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            BEYOND FURNITURE
          </h2>
          <p className="max-w-[470px] text-center text-white">
            Transforming Homes with style and sophistication. Explore our
            curated collection
          </p>
          <Link href="/all-products">
            <Button
              variant="outline"
              className="mt-8 bg-transparent text-white"
            >
              SHOP NOW
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
