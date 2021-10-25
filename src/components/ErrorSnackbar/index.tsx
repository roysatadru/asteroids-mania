import { FC } from 'react';
import { Alert as MuiAlert, AlertProps } from '@mui/material';
import { makeStyles, Snackbar } from '@material-ui/core';

import { useAppSelector } from '../../store';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const Alert: FC<AlertProps> = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const ErrorSnackbar: FC<{}> = () => {
  const classes = useStyles();

  const { open, duration, message } = useAppSelector(state => state.snackbar);
  const { closeSnackbar } = useAppDispatch();

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={() => {
        closeSnackbar();
      }}
      classes={{
        root: open ? '' : classes.SnackBarRoot,
      }}
    >
      <Alert
        onClose={() => {
          closeSnackbar();
        }}
        severity="error"
        sx={{
          background: ({ palette }) => palette.error.dark,
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

const useStyles = makeStyles(theme => ({
  SnackBarRoot: {
    zIndex: -9999,
  },
  AlertRoot: {
    alignItems: 'center',
  },
}));
