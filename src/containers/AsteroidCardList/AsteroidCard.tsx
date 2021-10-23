import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Asteroid } from '../../models/Asteroid';

export const AsteroidCard: FC<Asteroid> = props => {
  return (
    <Link
      to={{
        pathname: `/lookup/${props.id}`,
      }}
      style={{ display: 'block', textDecoration: 'none', color: 'royalblue' }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: 600,
          margin: 'auto',
          marginBottom: 40,
          padding: 16,
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        <pre>{JSON.stringify(props, undefined, 2)}</pre>
      </div>
    </Link>
  );
};
