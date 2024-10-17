import { useEffect, useState } from 'react';
import { PlpProductCardGridSkeleton } from '#/components/plp-product-card-grid';
import { PLPSidebar } from '#/components/plp-sidebar';
import { getProducts } from '#/api/products';
import { PlpProductCard, PLPProductCard } from '#/components/plp-product-card';
import { useParams } from 'next/navigation';
import '#/app/styles.css';

export default function ProductList() {
  const [products, setProducts] = useState<Array<PLPProductCard> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams<{ categoryId: string }>();

  useEffect(() => {
    if (!params?.categoryId) {
      return;
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const products = await getProducts(params?.categoryId);
        setProducts(products);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params?.categoryId]);

  return (
    <div className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')] pb-36">
      <div className='space-y-8 lg:space-y-14'>
        <PLPSidebar />

        <div className='lg:pl-72'>
          <div className='mx-auto max-w-8xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8'>
            {
              products && products.length && !loading ? (<div className='grid grid-cols-3 xl:grid-cols-4 gap-4'>
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
    </div>
  );
}
