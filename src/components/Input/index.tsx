import { InputBase, styled, darken } from '@mui/material';

export const Input = styled(InputBase)(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#38195c',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 300ms ease-in',

  '&:hover': {
    backgroundColor: darken('#38195c', 0.15),
  },

  input: {
    fontSize: theme.typography.pxToRem(40),
    height: theme.spacing(13),
    padding: theme.spacing(0, 18, 0, 5),
    caretColor: theme.palette.secondary.main,
    color: '#ff7d8d',
    width: '100%',
    display: 'block',
  },

  '& .MuiButtonBase-root': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: theme.spacing(5),
    boxShadow: '0 0 0.625rem 0 rgba(0, 0, 0, 0.05)',
    transition: 'all 300ms ease-in',
    lineHeight: '2.5rem',
    verticalAlign: 'middle',
    fontWeight: 700,
    color: '#2d122b',
    backgroundColor: theme.palette.secondary.main,
    textTransform: 'none',

    '&:hover': {
      color: '#fff',
      backgroundColor: theme.palette.secondary.dark,
      boxShadow: '0 0 1.25rem 0 rgba(0, 0, 0, 0.2)',
    },
  },
}));
