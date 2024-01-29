'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

export const Sort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedSort = searchParams.get('sort');

  const onChange = (sort: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      sort,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  const sortOptions = [
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Stock: Low to High', value: 'stock-asc' },
    { label: 'Stock: High to Low', value: 'stock-desc' },
    { label: 'Title: A to Z', value: 'name-asc' },
    { label: 'Title: Z to A', value: 'name-desc' },
  ];

  return (
    <>
      <Select onValueChange={onChange}>
        <SelectTrigger className="h-auto w-full rounded-none shadow-none focus:ring-0 lg:h-[32px] lg:w-[180px] lg:rounded-md">
          <SelectValue placeholder="Newest" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {sortOptions.map((sort) => (
              <SelectItem
                key={sort.value}
                className={cn({ 'bg-gray-100': sort.value === selectedSort })}
                value={sort.value}
              >
                {sort.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
