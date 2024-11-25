import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from 'models/Item';

export interface ItemsState {
  items: Item[];
  selectedItem: Item | null;
}

const initialState: ItemsState = {
  items: [],
  selectedItem: null,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
    selectItem(state, action: PayloadAction<Item>) {
      state.selectedItem = action.payload || null;
    },
  },
});

export const selectedItem = (state: { items: ItemsState }) => state.items.selectedItem


export const { setItems, selectItem } = itemsSlice.actions;
export default itemsSlice.reducer;
