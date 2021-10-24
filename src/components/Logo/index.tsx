import { styled, alpha } from '@mui/material';

import { LogoIcon } from '../../icons/Logo';

const Container = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  padding: theme.spacing(4),
  fontSize: theme.typography.pxToRem(30),
  fontWeight: 300,
  display: 'flex',
  alignItems: 'center',
}));

const LogoContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  marginRight: theme.spacing(3),
}));

const LogoBackground = styled('div')(({ theme }) => ({
  background: '#fe336f',
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0 0 0 5px #ffbd68, 0 2px 15px 5px ${alpha('#fff', 0.4)}`,
  width: theme.spacing(6),
  height: theme.spacing(6),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderRadius: '50%',
    background: '#101d5d',
    transform: 'translate(-60%, 60%)',
  },
}));

const LogoIconWithStyles = styled(LogoIcon)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  position: 'absolute',
  top: 0,
  right: 0,
  transform: 'translate(50%, -40%)',
  zIndex: 2,
}));

export const Logo = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoBackground />
        <LogoIconWithStyles />
      </LogoContainer>
      Asteroids Mania
    </Container>
  );
};
