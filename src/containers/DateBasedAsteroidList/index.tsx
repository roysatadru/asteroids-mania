import { FC, Fragment, Key, memo, useEffect, useState } from 'react';
import format from 'date-fns/format';

import { axios, URIS } from '../../api';
import { Asteroid } from '../../models/Asteroid';
import { extractAsteroidInfoFromApiResponse } from '../../utility/mapping-info';
import { AsteroidListSection } from './AsteroidListSection';

interface DateBasedAsteroidListProps {
  startDate: Date;
  endDate: Date;
}

export const DateBasedAsteroidList: FC<DateBasedAsteroidListProps> = memo(
  ({ startDate, endDate }) => {
    const [asteroidListData, setAsteroidListData] = useState<
      Array<{ date: Date; asteroidList: Asteroid[] }>
    >([]);

    useEffect(() => {
      setAsteroidListData([]);

      axios
        .get<{ near_earth_objects: { [a: string]: any[] } }>(
          URIS.LIST_ASTEROIDS_BY_DATES,
          {
            params: {
              start_date: format(startDate, 'yyyy-MM-dd'),
              end_date: format(endDate, 'yyyy-MM-dd'),
            },
          },
        )
        .then(response => {
          const { near_earth_objects: nearEarthObjects } = response.data;

          Object.entries(nearEarthObjects).forEach(
            ([dateInStrings, asteroidList]) => {
              
              extractAsteroidInfoFromApiResponse({
                data: asteroidList,
                afterConversion: astList => {
                  setAsteroidListData(curState => [
                    ...curState,
                    {
                      date: new Date(dateInStrings),
                      asteroidList: astList,
                    },
                  ]);
                },
              });
            },
          );
        })
        .catch(error => {});
    }, [endDate, startDate]);

    return (
      <Fragment>
        {asteroidListData.map(info => {
          const { date, asteroidList } = info;

          return (
            <AsteroidListSection
              key={date.toISOString() as Key}
              date={date}
              asteroidList={asteroidList}
            />
          );
        })}
      </Fragment>
    );
  },
);
