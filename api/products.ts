import { PLPProductCard } from '#/components/plp-product-card';

export const sleep = (ms = 2000) => new Promise(resolve => setTimeout(resolve, ms))

export const getProducts = async (categoryId: string) => {
  await sleep();
  const { products } = await fetch(`https://dummyjson.com/products/category/${categoryId}`).then(res => res.json());

  return products as Array<PLPProductCard>
}
