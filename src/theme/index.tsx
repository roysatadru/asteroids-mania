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
      fontSize: '4rem',
      color: '#fba428',
      lineHeight: 1.5,
    },
    h2: {
      color: '#ff7d8d',
      fontFamily: `${secondaryFonts} !important`,
      fontSize: '3.8rem',
    },
    h3: {
      fontSize: '0.8rem',
      lineHeight: 1.7,
    },
    h4: {
      color: '#48ce9d',
      fontFamily: `${secondaryFonts} !important`,
      fontWeight: '600 !important' as any,
    },
    button: {
      fontFamily: primaryFonts,
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
