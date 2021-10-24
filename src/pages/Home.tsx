import { Fragment, useEffect, useState } from 'react';
import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes';

import { axios, URIS } from '../api';
import { DateComponent } from '../components/DateComponent';
import { Asteroid } from '../models/Asteroid';
import { extractAsteroidInfoFromApiResponse } from '../utility/mapping-info';
import { AsteroidCardList } from '../containers/AsteroidCardList';
import { DateBasedAsteroidList } from '../containers/DateBasedAsteroidList';
import { Layout } from '../layout';

export const Home = () => {
  const [asteroidsList, setAsteroidsList] = useState<Asteroid[]>([]);
  const [[startDate, endDate], setDateRange] = useState<DateRange<Date>>([
    null,
    null,
  ]);

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
    <Layout title="List">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '40px 32px',
        }}
      >
        <DateComponent onChange={newValue => setDateRange(newValue)} />
      </div>

      {!startDate || !endDate ? (
        <AsteroidCardList listData={asteroidsList} />
      ) : (
        <DateBasedAsteroidList startDate={startDate} endDate={endDate} />
      )}
    </Layout>
  );
};
