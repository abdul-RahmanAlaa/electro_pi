'use client';

import { Separator } from '@/components/ui/separator';
import { Loading, ErrorMessage } from '@/components';
import { useCategories } from '@/hooks/use-categories';

export default function CategoryFilter() {
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) {
    return <Loading message="Loading categories..." />;
  }

  if (isError) {
    return <ErrorMessage message="Error occurred while fetching categories." />;
  }

  return (
    <aside className="col-span-1">
      <div className="rounded-lg bg-neutral-200">
        <h3 className="p-4 text-lg font-bold">Categories</h3>

        <Separator className="bg-neutral-400" />

        <ul className="p-4">
          {categories?.map((category, index) => (
            <li key={index} className="mb-2 list-none">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
