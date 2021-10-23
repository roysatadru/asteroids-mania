import isAfter from 'date-fns/isAfter';

import { Asteroid } from '../models/Asteroid';

interface ExtractAsteroidInfoFromApiResponseType {
  (a: { data: any[]; afterConversion: (a: Asteroid[]) => void }): void;
}

export const extractAsteroidInfoFromApiResponse: ExtractAsteroidInfoFromApiResponseType =
  ({ data, afterConversion }) => {
    const astList = data.map(astInfo => {
      const closeApproachDates: {
        prevDate: Date | null;
        nextDate: Date | null;
      } = {
        prevDate: null,
        nextDate: null,
      };

      for (let i = 0; i < (astInfo?.close_approach_data || []).length; i++) {
        const caDate = new Date(
          astInfo.close_approach_data[i]?.close_approach_date_full,
        );
        const isDateAfterNow = isAfter(caDate, new Date());

        if (i === astInfo.close_approach_data.length - 1 && !isDateAfterNow) {
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
        id: astInfo.id,
        name: astInfo.name,
        isPotentiallyHazardousAsteroid:
          astInfo.is_potentially_hazardous_asteroid,
        estimatedDiameterInKms: {
          min: astInfo.estimated_diameter.kilometers.estimated_diameter_min,
          max: astInfo.estimated_diameter.kilometers.estimated_diameter_max,
        },
        closeApproachDates,
      } as Asteroid;
    });

    afterConversion(astList);
  };
