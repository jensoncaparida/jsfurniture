'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <input
          type="search"
          className="h-10 w-full max-w-[500px] rounded-lg rounded-r-none border-gray-300 bg-white px-5 text-sm outline-none"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button className="h-10 w-12 rounded-l-none " size="icon">
          <Link href={`/search?term=${searchTerm}`}>
            <Search size={20} />
          </Link>
        </Button>
      </div>
    </>
  );
};
