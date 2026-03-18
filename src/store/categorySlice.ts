import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoryState {
  selected?: string;
}

const initialState: CategoryState = {
  selected: undefined,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string | undefined>) {
      state.selected = action.payload;
    },
    clearCategory(state) {
      state.selected = undefined;
    },
  },
});

export const { setCategory, clearCategory } = categorySlice.actions;
export default categorySlice.reducer;
