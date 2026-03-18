'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/lib/api';
import { IProductApiResponse } from '@/types';

export function useProducts(page = 1, perPage = 12) {
  return useQuery<IProductApiResponse>({
    queryKey: ['products', page, perPage],
    queryFn: () => fetchProducts(page, perPage),
  });
}
