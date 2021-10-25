import { createSlice } from '@reduxjs/toolkit';

interface InitialStateInterface {
  message: string;
  duration?: number;
}

const initialState = {
  message: '',
  duration: 5000,
  open: false,
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    openSnackbar(state, { payload }: { payload: InitialStateInterface }) {
      state.message = payload.message;
      if (payload.duration) {
        state.duration = payload.duration;
      }
      state.open = true;
    },
    closeSnackbar() {
      return { ...initialState };
    },
  },
});

const { actions: snackbarSliceActions, reducer: snackbarSliceReducer } =
  snackbarSlice;

export { snackbarSliceActions, snackbarSliceReducer };
