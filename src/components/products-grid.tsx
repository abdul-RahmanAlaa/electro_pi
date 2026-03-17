'use client';

import { useProducts } from '@/hooks/use-products';
import ProductCard from '@/components/product-card';

export default function ProductsGrid() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching products.</div>;
  }

  return (
    <div className="col-span-3 bg-neutral-200 p-4 rounded-lg grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
