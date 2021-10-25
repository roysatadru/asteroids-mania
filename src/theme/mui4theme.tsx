import { ThemeOptions, alpha } from '@material-ui/core';

import { secondaryFonts, primaryFonts } from './index';

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
    fontFamily: secondaryFonts,
    allVariants: {
      color: '#fff',
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
  overrides: {
    MuiButton: {
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
    MuiPaper: {
      root: {
        boxShadow: '0 0 1.25rem 0 rgb(76 87 125 / 16%) !important',
      },
    },
  },
};
