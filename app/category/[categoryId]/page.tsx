import { Suspense } from 'react';
import Link from 'next/link';
import { categoryList } from '#/constants';
import { NextLogo } from '#/components/next-logo';
import { PLPProductCard, PlpProductCards } from '#/components/plp-product-cards';

const sleep = (ms = 2000) => new Promise(resolve => setTimeout(resolve, ms))

export default async function ProductList({ params }: { params: { categoryId: string } }) {
  const { categoryId } = params;
  await sleep();
  const { products } = await fetch(`https://dummyjson.com/products/category/${categoryId}`).then(res => res.json());

  return (
    <div className='space-y-8 lg:space-y-14'>
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
          {categoryList.map((category) => (
            <li key={category} style={{ textTransform: 'capitalize' }}>
              <Link className='block lg:my-2' href={category}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='lg:pl-72'>
        <div className='mx-auto max-w-8xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8'>
          <div className='grid grid-cols-3 xl:grid-cols-4 gap-4'>
            {products.map((product: PLPProductCard) => {
              return (
                <PlpProductCards key={product.id} {...product} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
