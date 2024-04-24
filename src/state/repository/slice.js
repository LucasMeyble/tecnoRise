import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  DataRepositorySelected: null,
};

const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    selectDataRepository: (state, action) => {
      state.DataRepositorySelected = action.payload
    }
  },
});

export const { selectDataRepository } = repositorySlice.actions;

export default repositorySlice.reducer;
