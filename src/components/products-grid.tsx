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
import { Loading, ErrorMessage } from '@/components';

export default function ProductsGrid() {
  const [page, setPage] = useState(1);
  const { data: response, isLoading, isError } = useProducts(page, 20);

  if (isLoading) {
    return <Loading className="col-span-3" message="Loading products..." />;
  }

  if (isError) {
    return (
      <ErrorMessage
        className="col-span-3"
        message="Error occurred while fetching products."
      />
    );
  }

  const products = response?.products || [];
  const totalPages = response?.total
    ? Math.max(1, Math.ceil(response.total / 20))
    : 1;

  return (
    <div className="col-span-3 grid gap-4 rounded-lg bg-neutral-200 p-4">
      <div className="mt-2 text-center text-sm text-gray-500">
        Showing {products.length} / {response?.total ?? 0} products
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
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
