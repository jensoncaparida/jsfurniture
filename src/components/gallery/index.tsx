'use client';

import Image from 'next/image';
import { Tab } from '@headlessui/react';

import GalleryTab from './galleryTab';

interface GalleryProps {
  images: Images[];
}

export const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full sm:block">
        <Tab.List className="grid grid-cols-6 gap-4">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      {/* ImageView */}
      <Tab.Panels className="aspect-square ">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
              <Image
                src={image.url}
                alt="Product image"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                priority
                className="object-contain object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
