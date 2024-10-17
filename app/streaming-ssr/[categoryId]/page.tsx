import { Suspense } from 'react';
import { PlpProductCardGrid, PlpProductCardGridSkeleton } from '#/components/plp-product-card-grid';
import { PLPSidebar } from '#/components/plp-sidebar';
import { RecommendedProducts, RecommendedProductsSkeleton } from '#/components/recommended-products';
import { Reviews, ReviewsSkeleton } from '#/components/reviews';

export default async function ProductList({ params }: { params: { categoryId: string } }) {
  return (
    <div className='space-y-8 lg:space-y-14'>
      <PLPSidebar />

      <div className='lg:pl-72'>
        <div className='mx-auto max-w-8xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8'>
          <Suspense fallback={<PlpProductCardGridSkeleton />}>
            <PlpProductCardGrid categoryId={params.categoryId} />
          </Suspense>

          <Suspense fallback={<RecommendedProductsSkeleton />}>
            <RecommendedProducts />
          </Suspense>

          <Suspense fallback={<ReviewsSkeleton />}>
            <Reviews />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
