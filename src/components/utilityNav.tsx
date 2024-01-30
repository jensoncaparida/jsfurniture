import { User, ShoppingBag } from 'lucide-react';

import { Button } from './ui/button';

import { Search } from '@/components/ui/search';
import getProducts from '@/services/get-products';

export const UtilityNav = async () => {
  const products = await getProducts({});

  return (
    <nav className="flex items-center px-2">
      <Button size="icon" variant="none" className="hidden xl:flex">
        <User className="h-6 w-6 " />
      </Button>
      <Search data={products} />
      <Button size="icon" variant="none" className="relative">
        <ShoppingBag className="h-6 w-6" />
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
          0
        </span>
      </Button>
    </nav>
  );
};
