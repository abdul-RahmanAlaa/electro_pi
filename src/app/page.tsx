'use client';

import { useCategories } from '@/hooks/use-categories';
import { useProducts } from '@/hooks/use-products';

export default function Home() {
  const { data: products, isLoading, isError } = useProducts();
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useCategories();

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching products.</div>;
  }

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold">Products</h1>
      <ul className="mt-4 space-y-4">
        {categories?.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}

        {products?.map((product) => (
          <li key={product.id} className="rounded border p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="mt-1 text-sm text-gray-500">
              {product.category.name}
            </p>

            <p className="mt-3 text-gray-700">{product.description}</p>
            <p className="mt-3 text-lg font-bold">
              ${product.price.toFixed(2)}
            </p>
            <p className="mt-1 text-xs text-gray-400">
              created {new Date(product.creationAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
