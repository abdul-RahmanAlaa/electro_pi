'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useProducts } from '@/hooks/use-products';
import type { RootState } from '@/store/store';
import ProductCard from '@/components/product-card';
import { setPage } from '@/store/pageSlice';
import { Loading, ErrorMessage, ProductsPagination } from '@/components';

export default function ProductsGrid() {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.page.value);
  const category = useSelector((state: RootState) => state.category.selected);
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const {
    data: response,
    isLoading,
    isError,
  } = useProducts(page, 8, category, searchQuery);

  if (isLoading) {
    return (
      <Loading
        className="col-span-full mx-auto md:col-span-3"
        message="Loading products..."
      />
    );
  }

  if (isError) {
    return (
      <ErrorMessage
        className="col-span-full mx-auto md:col-span-3"
        message="Error occurred while fetching products."
      />
    );
  }

  const products = response?.products || [];
  const totalPages = response?.total
    ? Math.max(1, Math.ceil(response.total / 8))
    : 1;

  return (
    <div className="col-span-full mx-auto mb-2 grid gap-4 rounded-lg bg-neutral-100 p-4 pb-2 sm:mb-0 sm:pb-0 md:col-span-3">
      <div className="mt-2 text-center text-sm text-gray-500">
        Showing {products.length} / {response?.total ?? 0} products
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <ProductsPagination
        page={page}
        totalPages={totalPages}
        onPageChange={(nextPage) => dispatch(setPage(nextPage))}
      />
    </div>
  );
}
