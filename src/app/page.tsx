"use client";

import { useProducts } from '@/hooks/use-products';

export default function Home() {
  const { data: products, isLoading, isError } = useProducts();

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
        {products?.map((product) => (
          <li key={product.id} className="rounded border p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="mt-2 text-gray-700">{product.description}</p>
            <p className="mt-2 font-bold">${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
