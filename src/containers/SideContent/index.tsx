import { FC, ReactNode } from 'react';
import { Paper, styled, alpha } from '@mui/material';

import wall from '../../images/wall.webp';

interface SideContentProps {
  children: ReactNode;
}

const StyledSideContainer = styled(Paper)({
  background: `url(${wall})`,
  height: '100vh',
  width: '100%',
  backgroundSize: 'cover',
  boxShadow: `0 0 30px 0 ${alpha('#aaa', 0.15)}`,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
});

export const SideContent: FC<SideContentProps> = ({ children }) => {
  return <StyledSideContainer>{children}</StyledSideContainer>;
};
