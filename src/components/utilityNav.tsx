'use client';

import { User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Search } from '@/components/ui/search';

import { Cart } from './cart';

interface UtilityNavProps {
  data: Product[];
}

export const UtilityNav: React.FC<UtilityNavProps> = ({ data }) => {
  return (
    <nav className="flex items-center px-2">
      <Button size="icon" variant="none" className="hidden xl:flex">
        <User className="h-6 w-6 " />
      </Button>
      <Search data={data} />
      <Cart />
    </nav>
  );
};
