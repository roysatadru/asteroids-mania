import isAfter from 'date-fns/isAfter';
import parse from 'date-fns/parse';

import { Asteroid } from '../models/Asteroid';

interface ExtractAsteroidInfoFromApiResponseType {
  (a: { data: any[]; afterConversion: (a: Asteroid[]) => void }): void;
}

export const parseFullDate = (dateString: string) => {
  return parse(dateString, 'yyyy-MMM-dd HH:mm', new Date());
};

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
        const caDate = parseFullDate(
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
          closeApproachDates.prevDate = parseFullDate(
            astInfo.close_approach_data[i - 1].close_approach_date_full,
          );
          closeApproachDates.nextDate = caDate;
          break;
        }
      }

      const { prevDate, nextDate } = closeApproachDates;

      if (!prevDate && !nextDate) {
        closeApproachDates.prevDate = new Date();
        closeApproachDates.nextDate = new Date();
      }

      return {
        id: astInfo.id as String,
        name: astInfo.name as String,
        shortName: astInfo.name_limited as String | undefined,
        closeApproachDates,
      };
    });

    afterConversion(astList);
  };
