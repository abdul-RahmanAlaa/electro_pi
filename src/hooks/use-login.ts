'use client';

import { useQuery } from '@tanstack/react-query';
import { login } from '@/lib/api';

export function useLogin(username: string, password: string) {
  return useQuery({
    queryKey: ['login', username, password],
    queryFn: () => login(username, password),
    enabled: Boolean(username && password),
    retry: false,
  });
}
