import { Suspense } from 'react';
import { PlpProductCardGrid, PlpProductCardGridSkeleton } from '#/components/plp-product-card-grid';
import { PLPSidebar } from '#/components/plp-sidebar';

export default async function ProductList({ params }: { params: { categoryId: string } }) {
  return (
    <div className='space-y-8 lg:space-y-14'>
      <PLPSidebar />

      <div className='lg:pl-72'>
        <div className='mx-auto max-w-8xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8'>
          <Suspense fallback={<PlpProductCardGridSkeleton />}>
            <PlpProductCardGrid categoryId={params.categoryId} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
