import { Fragment, Key, useEffect, useState } from 'react';
import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes';

import { axios, URIS } from './api';
import { DateComponent } from './components/DateComponent/DateComponent';
import { Asteroid } from './models/Asteroid';
import { extractAsteroidInfoFromApiResponse } from './utility/mapping-info';

export const App = () => {
  const [asteroidsList, setAsteroidsList] = useState<Asteroid[]>([]);
  const [dateRange, setDateRange] = useState<DateRange<Date>>([null, null]);

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
    <Fragment>
      <div>Welcome to Asteroids Mania!</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '40px 32px',
        }}
      >
        <DateComponent onChange={newValue => setDateRange(newValue)} />
      </div>
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
    </Fragment>
  );
};
