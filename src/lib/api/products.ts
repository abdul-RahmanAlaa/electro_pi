import { IProduct } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_DEV;

export default async function fetchProducts(): Promise<IProduct[]> {
  const res = await fetch(`${baseUrl}/products`);

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data;
}
