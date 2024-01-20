import { User, Search, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';

export const UtilityNav = () => {
  return (
    <nav className="space-x-2">
      <Button size="icon" variant="none">
        <User className="h-6 w-6 " />
      </Button>
      <Button size="icon" variant="none">
        <Search className="h-6 w-6" />
      </Button>
      <Button size="icon" variant="none" className="relative">
        <ShoppingBag className="h-6 w-6" />
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
          0
        </span>
      </Button>
    </nav>
  );
};
