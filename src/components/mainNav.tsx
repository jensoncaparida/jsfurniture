'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';

interface MainNavProps {
  data: Category[];
}

export const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const mainRoutes = [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/',
    },
    {
      href: '/all-products',
      label: 'Shop All',
      active: pathname === '/all-products',
    },
  ];

  const categoryRoutes = data.map((route) => ({
    href: `/product-category/${route.id}`,
    label: route.name,
    active: pathname === `/product-category/${route.id}`,
  }));

  const infoRoutes = [
    {
      href: '/store-locations',
      label: 'Stores',
      active: pathname === '/store-locations',
    },
    {
      href: '/blogs',
      label: 'Blogs',
      active: pathname === '/blogs',
    },
  ];

  return (
    <nav className="hidden space-x-6 px-2 xl:block">
      {mainRoutes.map((route) => (
        <Link key={route.href} href={route.href}>
          <Button
            variant="link"
            className={`${route.active ? 'underline underline-offset-8' : ''} link-button p-0 font-semibold uppercase underline-offset-8`}
          >
            {route.label}
          </Button>
        </Link>
      ))}
      {categoryRoutes.map((route) => (
        <Link key={route.href} href={route.href}>
          <Button
            variant="link"
            className={`${route.active ? 'underline underline-offset-8' : ''} link-button p-0 font-semibold uppercase underline-offset-8`}
          >
            {route.label}
          </Button>
        </Link>
      ))}
      {infoRoutes.map((route) => (
        <Link key={route.href} href={route.href}>
          <Button
            variant="link"
            className={`${route.active ? 'underline underline-offset-8' : ''}link-button p-0 font-semibold uppercase underline-offset-8`}
          >
            {route.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
};
