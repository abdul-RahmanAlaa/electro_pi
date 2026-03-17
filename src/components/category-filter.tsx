'use client';

import { Separator } from '@/components/ui/separator';
import { useCategories } from '@/hooks/use-categories';

export default function CategoryFilter() {
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching categories.</div>;
  }

  return (
    <aside className="col-span-1">
      <div className="rounded-lg bg-neutral-200">
        <h3 className="p-4 text-lg font-bold">Categories</h3>

        <Separator className="bg-neutral-400" />

        <ul className="p-4">
          {categories?.map((category) => (
            <li key={category._id} className="mb-2 list-none">
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
