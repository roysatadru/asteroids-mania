import { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useParams } from 'react-router-dom';

import { axios, URIS } from '../api';

interface MatchParams {
  id: string;
}

export const AsteroidDetails: FC<RouteComponentProps<MatchParams>> = () => {
  const params = useParams<MatchParams>();

  const [asteroidInfo, setAsteroidInfo] = useState<{ name: String }>();

  useEffect(() => {
    axios
      .get<{ name: String }>(`${URIS.ASTEROID_DETAILS}/${params.id}`)
      .then(response => {
        setAsteroidInfo(response.data);
      })
      .catch(error => {});
  }, [params.id]);

  return (
    <div>
      <h2>More Details on Asteroid - {asteroidInfo?.name}</h2>

      <pre>{JSON.stringify(asteroidInfo, undefined, 2)}</pre>
    </div>
  );
};
