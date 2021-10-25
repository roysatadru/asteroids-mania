import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as useExtDispatch,
  useSelector,
} from 'react-redux';

import { backdropSliceReducer } from './reducers/backdropReducer';

const store = configureStore({
  reducer: {
    backdrop: backdropSliceReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useExtDispatch<AppDispatch>();

export * from './reducers/backdropReducer';
