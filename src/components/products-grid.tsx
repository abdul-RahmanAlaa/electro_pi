'use client';

import { useState } from 'react';
import { useProducts } from '@/hooks/use-products';
import ProductCard from '@/components/product-card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from '@/components/ui/pagination';

export default function ProductsGrid() {
  const [page, setPage] = useState(1);
  const { data: response, isLoading, isError } = useProducts(page, 8);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching products.</div>;
  }

  const products = response?.data || [];
  const totalPages = response?.totalPages || 1;

  return (
    <div className="col-span-3 grid gap-4 rounded-lg bg-neutral-200 p-4">
      <div className="mt-2 text-center text-sm text-gray-500">
        Showing {products.length} / {response?.totalProducts ?? 0} products
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                if (page > 1) setPage(page - 1);
              }}
              className="disabled:cursor-not-allowed disabled:opacity-50"
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => {
            const item = index + 1;
            return (
              <PaginationItem key={item}>
                <PaginationLink
                  isActive={item === page}
                  onClick={() => setPage(item)}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              onClick={() => {
                if (page < totalPages) setPage(page + 1);
              }}
              className="disabled:cursor-not-allowed disabled:opacity-50"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
