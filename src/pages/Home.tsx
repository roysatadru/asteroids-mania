import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes';

import { axios, URIS } from '../api';
import { DateComponent } from '../components/DateComponent';
import { Asteroid } from '../models/Asteroid';
import { extractAsteroidInfoFromApiResponse } from '../utility/mapping-info';
import { AsteroidCardList } from '../containers/AsteroidCardList';
import { DateBasedAsteroidList } from '../containers/DateBasedAsteroidList';
import { Layout } from '../layout';
import { useAppDispatch } from '../hooks/useAppDispatch';

export const Home = () => {
  const { openBackdrop, closeBackdrop, openSnackbar } = useAppDispatch();

  const [asteroidsList, setAsteroidsList] = useState<Asteroid[]>([]);
  const [[startDate, endDate], setDateRange] = useState<DateRange<Date>>([
    null,
    null,
  ]);

  useEffect(() => {
    openBackdrop();

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
      .catch(error => {
        openSnackbar({
          message: 'Something went wrong! Please try again after sometime...',
        });
      })
      .finally(() => {
        closeBackdrop();
      });
  }, [closeBackdrop, openBackdrop, openSnackbar]);

  return (
    <Layout
      title="Home"
      heading="Home"
      subHeading="This is a fun project where we can know more about the approach dates of an asteroid"
    >
      <DateComponent onChange={newValue => setDateRange(newValue)} />

      {!startDate || !endDate ? (
        <AsteroidCardList listData={asteroidsList} />
      ) : (
        <DateBasedAsteroidList startDate={startDate} endDate={endDate} />
      )}

      <Box sx={{ height: ({ spacing }) => spacing(10) }} />
    </Layout>
  );
};
