import { PlpProductCard, PLPProductCard } from '#/components/plp-product-card';
import { getProducts } from '#/api/products';

export const PlpProductCardGrid = async ({ categoryId }: { categoryId: string }) => {
  const products = await getProducts(categoryId);

  return (
    <div className='grid grid-cols-3 xl:grid-cols-4 gap-4'>
      {products.map((product: PLPProductCard) => {
        return (
          <PlpProductCard key={product.id} {...product} />
        );
      })}
    </div>

  );
};

export const PlpProductCardGridSkeleton = () => {
  return (
    <div className='grid grid-cols-3 xl:grid-cols-4 gap-4'>
      {Array(16).fill(undefined).map((_, index) => {
        return (
          <div key={`plp-product-skeleton-${index}`}
               className='max-w-sm rounded overflow-hidden shadow-lg bg-white animate-pulse'>
            {/* Image Skeleton */}
            <div className='w-full h-48 bg-gray-300'></div>

            <div className='p-4'>
              {/* Title Skeleton */}
              <div className='h-6 bg-gray-300 rounded w-3/4 mb-4'></div>

              {/* Description Skeleton */}
              <div className='h-4 bg-gray-300 rounded w-full mb-2'></div>
              <div className='h-4 bg-gray-300 rounded w-full mb-2'></div>
              <div className='h-4 bg-gray-300 rounded w-2/3'></div>

              {/* Price and Button Skeleton */}
              <div className='flex flex-col justify-between items-start gap-4 mt-4'>
                {/* Price Skeleton */}
                <div className='h-6 bg-gray-300 rounded w-1/4'></div>

                {/* Button Skeleton */}
                <div className='h-10 bg-gray-300 rounded w-1/2'></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
