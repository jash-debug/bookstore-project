import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryList: [],
};

const categoriesSlice = createSlice(
  {
    name: 'category',
    initialState,
    reducers: {
      checkStatus: (state, action) => { state.categoryList = action.payload === 'Under construction' ? 'Under construction' : state.categoryList; },

    },
  },
);

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
