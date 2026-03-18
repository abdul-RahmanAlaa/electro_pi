import { IProductApiResponse } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_DEV;

export default async function fetchProducts(
  page = 1,
  perPage = 10,
): Promise<IProductApiResponse> {
  const res = await fetch(
    `${baseUrl}/products?page=${page}&perPage=${perPage}`,
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch products: ${res.status} ${res.statusText}`,
    );
  }

  const data = await res.json();

  return data as IProductApiResponse;
}
