import { createSlice } from '@reduxjs/toolkit';

enum BackdropState {
  OPENED,
  CLOSED,
}

const initialState = BackdropState.CLOSED;

const backdropSlice = createSlice({
  name: 'backdrop',
  initialState,
  reducers: {
    openBackdrop() {
      return BackdropState.OPENED;
    },
    closeBackdrop() {
      return BackdropState.CLOSED;
    },
  },
});

const { actions: backdropSliceActions, reducer: backdropSliceReducer } =
  backdropSlice;

export { backdropSliceActions, backdropSliceReducer, BackdropState };
