const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_DEV;

export default async function fetchCategories(): Promise<string[]> {
  const res = await fetch(`${baseUrl}/products/category-list`);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch categories: ${res.status} ${res.statusText}`,
    );
  }

  const data = await res.json();

  console.log(data);
  return data;
}
