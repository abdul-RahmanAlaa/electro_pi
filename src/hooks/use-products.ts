'use client';

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchProducts } from '@/lib/api';
import { IProductApiResponse } from '@/types';

export function useProducts(
  page = 1,
  perPage = 12,
  category?: string,
  searchQuery?: string,
): UseQueryResult<IProductApiResponse, Error> {
  return useQuery<IProductApiResponse, Error>({
    queryKey: ['products', page, perPage, category, searchQuery],
    queryFn: () => fetchProducts(page, perPage, category, searchQuery),
  });
}
