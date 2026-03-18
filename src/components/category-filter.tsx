'use client';

import { Loading, ErrorMessage } from '@/components';
import { useCategories } from '@/hooks/use-categories';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { setCategory, clearCategory } from '@/store/categorySlice';
import { setPage } from '@/store/pageSlice';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';


export default function CategoryFilter() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: RootState) => state.category.selected,
  );
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) {
    return <Loading message="Loading categories..." />;
  }

  if (isError) {
    return <ErrorMessage message="Error occurred while fetching categories." />;
  }

  const onCategoryChange = (value: string | undefined) => {
    const nextValue = value === 'all' ? undefined : value;

    if (!nextValue) {
      dispatch(clearCategory());
      dispatch(setPage(1));
      return;
    }

    dispatch(setCategory(nextValue));
    dispatch(setPage(1));
  };

  return (
    <div className="p-4">
      <h3 className="mb-2 text-lg font-bold">Category</h3>
      <Select
        value={selectedCategory ?? 'all'}
        onValueChange={(value: string) => onCategoryChange(value === 'all' ? undefined : value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {categories?.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
