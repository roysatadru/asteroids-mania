import { useMemo } from 'react';
import { bindActionCreators } from 'redux';

import { useDispatch, backdropSliceActions } from '../store';

export const useAppDispatch = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(backdropSliceActions, dispatch),
    [dispatch],
  );
};
