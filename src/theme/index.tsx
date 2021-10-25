import { ThemeOptions, alpha } from '@mui/material';

// #2d122b
// #ee4440
// #fba428
// #101d5d
// #fe336f
// #801436
// #48ce9d
// #ff7d8d

const baseFonts = [
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
];

export const primaryFonts = ['Poppins', ...baseFonts].join(',');
export const secondaryFonts = ['"Open Sans"', ...baseFonts].join(',');

export const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#a62170',
    },
    secondary: {
      main: '#fba428',
    },
    background: {
      default: '#2d122b',
      paper: alpha('#200e1f', 0.8),
    },
  },
  typography: {
    fontFamily: primaryFonts,
    allVariants: {
      color: '#fff',
    },
    h1: {
      fontFamily: `${secondaryFonts} !important`,
      fontSize: '4rem !important',
      color: '#fba428 !important',
      lineHeight: '1.5 !important',
    },
    h2: {
      color: '#ff7d8d !important',
      fontFamily: `${secondaryFonts} !important`,
      fontSize: '3.8rem !important',
    },
    h3: {
      fontSize: '0.8rem !important',
      lineHeight: '1.7 !important',
      fontFamily: `${primaryFonts} !important`,
    },
    h4: {
      color: '#48ce9d',
      fontFamily: `${secondaryFonts} !important`,
      fontWeight: '600 !important' as any,
    },
    button: {
      fontFamily: `${primaryFonts} !important`,
    },
  },
  shape: {
    borderRadius: 19.2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          padding: '0.1rem 2rem',
          boxShadow: '0 0 0.625rem 0 rgba(0, 0, 0, 0.05)',
          transition: 'all 300ms ease-in',
          lineHeight: '2.5rem',
          verticalAlign: 'middle',
          borderRadius: 10000,
          fontWeight: 700,
          color: '#2d122b',
          textTransform: 'none',
        },
        containedSecondary: {
          '&:hover': {
            color: '#fff',
            boxShadow: '0 0 1.25rem 0 rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 0 1.25rem 0 rgb(76 87 125 / 16%)',
        },
      },
    },
  },
};
