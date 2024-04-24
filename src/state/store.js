import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modal/slice';
import repositorySlice from './repository/slice';

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    repository: repositorySlice
  },
});