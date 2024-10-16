import { PlpProductCardGridSkeleton } from '#/components/plp-product-card-grid';
import { PLPSidebar } from '#/components/plp-sidebar';
import { getProducts } from '#/api/products';
import { PlpProductCard, PLPProductCard } from '#/components/plp-product-card';

export default async function ProductList({ params: { categoryId } }: { params: { categoryId: string } }) {
  const products = await getProducts(categoryId);

  return (
    <div className='space-y-8 lg:space-y-14'>
      <PLPSidebar />

      <div className='lg:pl-72'>
        <div className='mx-auto max-w-8xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8'>
          {
            products && products.length ? (<div className='grid grid-cols-3 xl:grid-cols-4 gap-4'>
              {products.map((product: PLPProductCard) => {
                return (
                  <PlpProductCard key={product.id} {...product} />
                );
              })}
            </div>) : <PlpProductCardGridSkeleton />
          }
        </div>
      </div>
    </div>
  );
}
