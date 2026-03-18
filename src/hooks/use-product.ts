'use client';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { IProduct } from '@/types/product';
import { fetchSingleProduct } from '@/lib/api';

export function useProduct(id: string): UseQueryResult<IProduct, Error> {
  return useQuery<IProduct, Error>({
    queryKey: ['product', id],
    queryFn: () => fetchSingleProduct(id),
    enabled: !!id,
  });
}
