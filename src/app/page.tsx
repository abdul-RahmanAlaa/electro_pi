import { CategoryFilter, ProductsGrid } from '@/components';

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-2 p-2">
      <CategoryFilter />
      <ProductsGrid />
    </div>
  );
}
