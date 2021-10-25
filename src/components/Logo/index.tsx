import { JSXElementConstructor } from 'react';
import { styled, alpha, Box } from '@mui/material';
import { Link, LinkProps } from 'react-router-dom';

import { LogoIcon } from '../../icons/Logo';
import { secondaryFonts } from '../../theme';

const Container = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  padding: theme.spacing(4),
  borderRadius: '50%',
  fontSize: theme.typography.pxToRem(30),
  fontWeight: 700,
  fontFamily: secondaryFonts,
  display: 'flex',
  alignItems: 'center',
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  KhtmlUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginRight: theme.spacing(3),
}));

const LogoBackground = styled(Box)(({ theme }) => ({
  background: '#fe336f',
  borderRadius: '50%',
  boxShadow: `0 0 0 5px #fba428, 0 2px 15px 5px ${alpha('#fff', 0.4)}`,
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

const LogoIconWithStyles = styled(LogoIcon)(
  ({ theme }) =>
    ({
      width: `${theme.spacing(5)} !important`,
      height: `${theme.spacing(5)} !important`,
      position: 'absolute !important',
      top: '0 !important',
      right: '0 !important',
      transform: 'translate(50%, -40%) !important',
      zIndex: '2 !important',
    } as any),
);

const StyledLink = styled<JSXElementConstructor<Omit<LinkProps, 'to'>>>(
  props => (
    <Link
      to={{
        pathname: '/home',
      }}
      {...props}
    />
  ),
)({
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
});

export const Logo = () => {
  return (
    <Container>
      <LogoContainer component={StyledLink}>
        <LogoBackground />
        <LogoIconWithStyles />
      </LogoContainer>
      <StyledLink>Asteroids Mania</StyledLink>
    </Container>
  );
};
