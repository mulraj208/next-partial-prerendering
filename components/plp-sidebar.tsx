'use client';

import { NextLogo } from '#/components/next-logo';
import { categoryList } from '#/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export const PLPSidebar = () => {
  const pathname = usePathname();
  const activeStyles = {
    background: 'red',
    padding: 10
  }

  return (
    <div
      className='fixed top-0 z-20 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800'>
      <div className='flex h-14 items-center px-4 py-4 lg:h-auto'>
        <div className='group flex w-full items-center gap-x-2.5'>
          <div className='h-7 w-7 rounded-full border border-white/30'>
            <NextLogo />
          </div>

          <h3 className='font-semibold tracking-wide text-gray-400'>
            Categories
          </h3>
        </div>
      </div>

      <ul className='capitalize'>
        {categoryList.map((category) => {
          const isActive = `/category/${category}` === pathname;

          return (
            <li key={category} style={{ textTransform: 'capitalize' }}>
              <Link className="block lg:my-2" style={isActive ? activeStyles : {}} href={category}>
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
