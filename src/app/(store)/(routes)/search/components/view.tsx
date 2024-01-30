'use client';

import qs from 'query-string';
import { LayoutGrid, LayoutList } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

export const ViewFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedView = searchParams.get('view');

  const onClick = (view: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      view,
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

  const removeView = () => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      view: null,
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

  return (
    <div className="flex items-center space-x-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button onClick={() => removeView()}>
              <LayoutGrid
                size={20}
                className={cn(
                  'text-neutral-500 hover:text-black',
                  selectedView === null && 'text-black',
                )}
              />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-semibold">GRID VIEW</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button onClick={() => onClick('list')}>
              <LayoutList
                size={20}
                className={cn(
                  'text-neutral-500 hover:text-black',
                  selectedView === 'list' && 'text-black',
                )}
              />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-semibold">LIST VIEW</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
