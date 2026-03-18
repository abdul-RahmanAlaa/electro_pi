import { Separator } from '@/components/ui/separator';
import { CategoryFilter, SearchBar } from '@/components';

export default function HomeFilters({ className }: { className?: string }) {
  return (
    <aside className={`col-span-1 ${className}`}>
      <div className="flex h-full flex-col gap-2 rounded-lg bg-neutral-100">
        <h2 className="p-4 text-xl font-bold">Filters</h2>

        <Separator className="bg-neutral-400" />

        <SearchBar />

        <Separator className="bg-neutral-400" />

        <CategoryFilter />

        <Separator className="bg-neutral-400" />
      </div>
    </aside>
  );
}
