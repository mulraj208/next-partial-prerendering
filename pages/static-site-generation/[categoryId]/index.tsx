import { PLPSidebar } from '#/components/plp-sidebar';
import { categoryList } from '#/constants';
import { getProducts } from '#/api/products';
import { PlpProductCard, PLPProductCard } from '#/components/plp-product-card';
import { ClientRecommendedProducts } from '#/components/client/client-recommended-products';
import '#/app/styles.css';

export default function ProductList({ products }: { products: Array<PLPProductCard> }) {
  return (
    <div className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')] pb-36">
      <div className='space-y-8 lg:space-y-14'>
        <PLPSidebar />

        <div className='lg:pl-72'>
          <div className='mx-auto max-w-8xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8'>
            <div className='grid grid-cols-3 xl:grid-cols-4 gap-4'>
              {products.map((product: PLPProductCard, index) => {
                return (
                  <PlpProductCard key={product.id} {...product} index={index} />
                );
              })}
            </div>

            <ClientRecommendedProducts />
          </div>
        </div>
      </div>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on category
  const paths = categoryList.map((category) => ({
    params: { categoryId: category }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: { categoryId: string } }) {
  // If the route is like /static-site-generation/smartphones, then params.categoryId is `smartphones`
  const products = await getProducts(params.categoryId);

  // Pass product data to the page via props
  return { props: { products } };
}
