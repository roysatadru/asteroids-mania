import { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { Logo } from '../components/Logo';

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

      {children}
    </div>
  );
};
