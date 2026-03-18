import { IProductApiResponse } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_DEV;

export default async function fetchProducts(
  page = 1,
  perPage = 12,
  category?: string,
  searchQuery?: string,
): Promise<IProductApiResponse> {
  const skip = (page - 1) * perPage;
  let url = `${baseUrl}/products?limit=${perPage}&skip=${skip}`;

  if (searchQuery && searchQuery.trim()) {
    url = `${baseUrl}/products/search?q=${encodeURIComponent(searchQuery.trim())}&limit=${perPage}&skip=${skip}`;
  } else if (category) {
    url = `${baseUrl}/products/category/${encodeURIComponent(category)}?limit=${perPage}&skip=${skip}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  return data as IProductApiResponse;
}
