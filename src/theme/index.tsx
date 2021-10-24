import { ThemeOptions } from '@mui/material';

// #2d122b
// #ee4440
// #ffbd68
// #101d5d
// #fe336f
// #801436

export const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#801436',
    },
    secondary: {
      main: '#ffbd68',
    },
    // background: {
    //   default: '#161616',
    //   paper: '#232323',
    // },
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    allVariants: {
      color: '#fff',
    },
  },
  shape: {
    borderRadius: '0.25rem',
  },
};
