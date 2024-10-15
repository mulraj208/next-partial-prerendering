import Image from 'next/image';

export interface PLPProductCard {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
}

export const PlpProductCards = (product: PLPProductCard) => {
  if (!product.id) return null;

  return (
    <div key={product.id} className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
      <Image width={300} height={200} className='w-full h-48 object-cover' src={product.thumbnail} alt={product.title} />

      <div className='p-4'>
        <h2 className='text-xl font-bold text-gray-900 line-clamp-2'>{product.title}</h2>
        <p className='text-gray-600 text-sm mt-2 line-clamp-3'>{product.description}</p>
        <div className='flex flex-col justify-between items-start gap-4 mt-4'>
          <span className='text-lg font-semibold text-gray-800'>${product.price}</span>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
