import { IProduct } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_DEV;

export default async function fetchSingleProduct(id: string): Promise<IProduct> {
  const res = await fetch(`${baseUrl}/products/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data as IProduct;
}
