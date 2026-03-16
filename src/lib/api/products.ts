import { IProduct } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_DEV;

export async function fetchProducts(): Promise<IProduct[]> {
  const res = await fetch(`${baseUrl}/products`);

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}
