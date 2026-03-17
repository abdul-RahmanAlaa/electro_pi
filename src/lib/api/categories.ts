import { ICategory } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_DEV;

export default async function fetchCategories(): Promise<ICategory[]> {
  const res = await fetch(`${baseUrl}/categories`);

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  console.log(data);
  
  return data;
}
