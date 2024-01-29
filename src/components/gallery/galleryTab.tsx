import Image from 'next/image';
import { Tab } from '@headlessui/react';

import { cn } from '@/lib/utils';

interface GalleryTabProps {
  image: Images;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
            <Image
              fill
              sizes="(min-width: 720px) 500px, 100vw"
              src={image.url}
              alt="ImageTab"
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-1 ring-offset-4',
              selected ? 'ring-black' : 'ring-transparent',
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
