import { Key, useEffect, useState } from 'react';
import isAfter from 'date-fns/isAfter';

import { axios, URIS } from './api';
import { Asteroid } from './models/Asteroid';

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

        const astList = nearEarthObjects.map(astInfo => {
          const closeApproachDates: {
            prevDate: Date | null;
            nextDate: Date | null;
          } = {
            prevDate: null,
            nextDate: null,
          };

          for (let i = 0; i < astInfo.close_approach_data.length; i++) {
            const caDate = new Date(
              astInfo.close_approach_data[i].close_approach_date_full,
            );
            const isDateAfterNow = isAfter(caDate, new Date());

            if (
              i === astInfo.close_approach_data.length - 1 &&
              !isDateAfterNow
            ) {
              closeApproachDates.prevDate = caDate;
            }

            if (i === 0 && isDateAfterNow) {
              closeApproachDates.nextDate = caDate;
              break;
            }

            if (isDateAfterNow) {
              closeApproachDates.prevDate = new Date(
                astInfo.close_approach_data[i - 1].close_approach_date_full,
              );
              closeApproachDates.nextDate = caDate;
              break;
            }
          }

          return {
            id: astInfo.id as String,
            name: astInfo.name_limited as String,
            isPotentiallyHazardousAsteroid:
              astInfo.is_potentially_hazardous_asteroid as boolean,
            estimatedDiameterInKms: {
              min: astInfo.estimated_diameter.kilometers
                .estimated_diameter_min as number,
              max: astInfo.estimated_diameter.kilometers
                .estimated_diameter_max as number,
            },
            closeApproachDates,
          };
        });

        setAsteroidsList(astList);
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
