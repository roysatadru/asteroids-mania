import { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '@mui/material';

import { Logo } from '../components/Logo';
import { SideContent } from '../containers/SideContent';
import { AsteroidIcon } from '../icons/Asteroid';

interface LayoutProps {
  title?: String;
  children: ReactNode;
  heading?: ReactNode;
  subHeading?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({
  title,
  children,
  heading,
  subHeading,
}) => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <AsteroidIcon
        sx={{
          width: '20rem',
          height: '20rem',
          position: 'fixed',
          bottom: '-2rem',
          right: 0,
          zIndex: -1,
        }}
      />

      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? `${title} | ` : ''}Asteroids Mania</title>
      </Helmet>

      <Logo />

      <Grid container>
        <Grid item xs={4} component="header">
          <SideContent heading={heading} subHeading={subHeading}>
            {null}
          </SideContent>
        </Grid>

        <Grid item xs={8} component="main">
          <div style={{ height: '100vh', overflowY: 'scroll' }}>{children}</div>
        </Grid>
      </Grid>
    </div>
  );
};
