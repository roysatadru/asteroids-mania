import { FC, ReactNode } from 'react';
import { Paper, styled, alpha } from '@mui/material';

import wall from '../../images/wall.jpg';

interface SideContentProps {
  children: ReactNode;
}

const StyledSideContainer = styled(Paper)({
  background: `url(${wall})`,
  height: '100vh',
  width: '100%',
  backgroundSize: 'cover',
  boxShadow: `0 0 30px 0 ${alpha('#aaa', 0.15)}`,
});

export const SideContent: FC<SideContentProps> = () => {
  return <StyledSideContainer></StyledSideContainer>;
};
