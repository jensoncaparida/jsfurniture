'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';

interface FooterNavProps {
  data: Category[];
}

export const FooterNav: React.FC<FooterNavProps> = ({ data }) => {
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
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
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
    <nav className="flex flex-col">
      <h6 className="mb-2 font-semibold text-white">Quick Links</h6>
      {mainRoutes.map((route) => (
        <Link key={route.href} href={route.href}>
          <Button
            variant="link"
            className={`${route.active ? 'underline underline-offset-8' : ''} link-button p-0 capitalize text-white underline-offset-8`}
          >
            {route.label}
          </Button>
        </Link>
      ))}
      {categoryRoutes.map((route) => (
        <Link key={route.href} href={route.href}>
          <Button
            variant="link"
            className={`${route.active ? 'underline underline-offset-8' : ''} link-button p-0 capitalize text-white underline-offset-8`}
          >
            {route.label}
          </Button>
        </Link>
      ))}
      {infoRoutes.map((route) => (
        <Link key={route.href} href={route.href}>
          <Button
            variant="link"
            className={`${route.active ? 'underline underline-offset-8' : ''} link-button p-0 capitalize text-white underline-offset-8`}
          >
            {route.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
};
