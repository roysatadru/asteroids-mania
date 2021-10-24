import { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '@mui/material';

import { Logo } from '../components/Logo';
import { SideContent } from '../containers/SideContent';

interface LayoutProps {
  title?: String;
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? `${title} | ` : ''}Asteroids Mania</title>
      </Helmet>

      <Logo />

      <Grid container>
        <Grid item xs={4}>
          <SideContent>Hi</SideContent>
        </Grid>

        <Grid item xs={8}>
          <div style={{ height: '100vh', overflowY: 'scroll' }}>{children}</div>
        </Grid>
      </Grid>
    </div>
  );
};
