'use client';

import { Input } from '@/components/ui/input';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '@/store/searchSlice';
import type { RootState } from '@/store/store';

export default function SearchBar() {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.search.query);

  return (
    <div className="p-4">
      <h3 className="mb-2 text-lg font-bold">Search</h3>
      <Input
        value={query}
        placeholder="Search products..."
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </div>
  );
}
