import { Suspense } from 'react';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton
} from '#/components/recommended-products';
import { Reviews, ReviewsSkeleton } from '#/components/reviews';
import { SingleProduct } from '#/components/single-product';
import { Ping } from '#/components/ping';
import { Sidebar } from '#/components/sidebar';
import { CartCountProvider } from '#/components/cart-count-context';
import { Header } from '#/components/header';

export default function Page() {
  return (
    <div className='space-y-8 lg:space-y-14'>
      <Sidebar />
      <div className='lg:pl-72'>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white text-center">Partial Pre Rending(PPR)</h1>
        <div className='mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8'>
          <div className='rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20'>
            <div className='rounded-lg bg-black p-3.5 lg:p-6'>
              <CartCountProvider>
                <div className='space-y-10'>
                  <Header />
                  <SingleProduct />

                  <Ping />

                  <Suspense fallback={<RecommendedProductsSkeleton />}>
                    <RecommendedProducts />
                  </Suspense>

                  <Ping />

                  <Suspense fallback={<ReviewsSkeleton />}>
                    <Reviews />
                  </Suspense>
                </div>
              </CartCountProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
