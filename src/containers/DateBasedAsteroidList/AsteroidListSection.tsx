import { FC } from 'react';
import format from 'date-fns/format';

import { AsteroidCardList } from '../AsteroidCardList';
import { Asteroid } from '../../models/Asteroid';

interface AsteroidListSectionProps {
  date: Date;
  asteroidList: Asteroid[];
}

export const AsteroidListSection: FC<AsteroidListSectionProps> = ({
  date,
  asteroidList,
}) => {
  return (
    <div style={{ marginBottom: 80 }}>
      <h3 style={{ textAlign: 'center' }}>{format(date, 'do MMMM, yyyy')}</h3>
      <AsteroidCardList listData={asteroidList} showSingleDate />
    </div>
  );
};
