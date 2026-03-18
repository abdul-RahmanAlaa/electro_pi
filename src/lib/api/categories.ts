import { ICategory } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_DEV;

export default async function fetchCategories(): Promise<ICategory[]> {
  const res = await fetch(`${baseUrl}/categories`);

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  // API returns categories as an array (or with data wrapper), normalize for safety.
  if (Array.isArray(data)) {
    return data;
  }

  return data.data ?? [];
}
