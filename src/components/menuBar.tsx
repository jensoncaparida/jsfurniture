'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Menu, X } from 'lucide-react';

interface MenuBarProps {
  data: Category[];
}

export const MenuBar: React.FC<MenuBarProps> = ({ data }) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="block xl:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {isOpen && (
        <div className="absolute left-0 z-50 mt-6 flex h-auto w-screen flex-col justify-center border-y bg-white p-2 shadow-sm">
          {mainRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`${route.active ? 'text-[#055A5B]' : ''} p-2 hover:bg-accent`}
              onClick={() => setIsOpen(false)}
            >
              {route.label}
            </Link>
          ))}
          {categoryRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="p-2 hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              {route.label}
            </Link>
          ))}
          {infoRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="p-2 hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              {route.label}
            </Link>
          ))}
          <Link href="/" className="p-2 hover:bg-accent">
            Account
          </Link>
        </div>
      )}
    </nav>
  );
};
