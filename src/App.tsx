import { Key, useEffect, useState } from 'react';

import { axios, URIS } from './api';
import { Asteroid } from './models/Asteroid';
import { extractAsteroidInfoFromApiResponse } from './utility/mapping-info';

export const App = () => {
  const [asteroidsList, setAsteroidsList] = useState<Asteroid[]>([]);

  useEffect(() => {
    axios
      .get<{ near_earth_objects: any[] }>(URIS.LIST_ASTEROIDS, {
        params: {
          page: 1,
          size: 10,
        },
      })
      .then(response => {
        const { near_earth_objects: nearEarthObjects } = response.data;

        extractAsteroidInfoFromApiResponse({
          data: nearEarthObjects,
          afterConversion: astList => {
            setAsteroidsList(astList);
          },
        });
      })
      .catch(error => {});
  }, []);

  return (
    <>
      <div>Welcome to Asteroids Mania!</div>
      {asteroidsList.map(astInfo => (
        <div
          style={{
            width: '90%',
            maxWidth: 600,
            margin: 'auto',
            marginBottom: 40,
            padding: 16,
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          }}
          key={astInfo.id as Key}
        >
          <pre>{JSON.stringify(astInfo, undefined, 2)}</pre>
        </div>
      ))}
    </>
  );
};
