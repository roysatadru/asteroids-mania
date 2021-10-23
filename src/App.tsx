import { Fragment, useEffect, useState } from 'react';
import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes';

import { axios, URIS } from './api';
import { DateComponent } from './components/DateComponent/DateComponent';
import { Asteroid } from './models/Asteroid';
import { extractAsteroidInfoFromApiResponse } from './utility/mapping-info';
import { AsteroidCardList } from './containers/AsteroidCardList';

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

      {dateRange.findIndex(date => !date) !== -1 ? (
        <AsteroidCardList listData={asteroidsList} />
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};
