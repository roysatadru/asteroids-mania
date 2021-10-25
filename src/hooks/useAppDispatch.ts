import { useMemo } from 'react';
import { bindActionCreators } from 'redux';

import {
  useDispatch,
  backdropSliceActions,
  snackbarSliceActions,
} from '../store';

const sliceActions = {
  ...backdropSliceActions,
  ...snackbarSliceActions,
};

export const useAppDispatch = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(sliceActions, dispatch), [dispatch]);
};
