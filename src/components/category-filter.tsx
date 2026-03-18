'use client';

import { Loading, ErrorMessage } from '@/components';
import { useCategories } from '@/hooks/use-categories';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { setCategory, clearCategory } from '@/store/categorySlice';
import { setPage } from '@/store/pageSlice';
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxInput,
  ComboboxList,
  useComboboxAnchor,
} from '@/components/ui/combobox';

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const anchor = useComboboxAnchor();
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
      <Combobox
        value={selectedCategory ?? 'all'}
        onValueChange={(value) => onCategoryChange(value as string | undefined)}
      >
        <ComboboxInput placeholder="Select a category" />

        <ComboboxContent anchor={anchor}>
          <ComboboxList>
            <ComboboxItem value="all">All</ComboboxItem>
            {categories?.map((category) => (
              <ComboboxItem key={category} value={category}>
                {category}
              </ComboboxItem>
            ))}
          </ComboboxList>

          {!categories && <ComboboxEmpty>No categories found.</ComboboxEmpty>}
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
