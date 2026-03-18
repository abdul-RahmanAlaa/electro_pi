import { IProductApiResponse } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_DEV;

export default async function fetchProducts(
  page = 1,
  perPage = 12,
): Promise<IProductApiResponse> {
  const skip = (page - 1) * perPage;
  const res = await fetch(`${baseUrl}/products?limit=${perPage}&skip=${skip}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  return data as IProductApiResponse;
}
