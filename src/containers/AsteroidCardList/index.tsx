import { FC, Fragment, Key } from 'react';

import { AsteroidCard } from './AsteroidCard';
import { Asteroid } from '../../models/Asteroid';

interface AsteroidCardListProps {
  listData: Asteroid[];
}

export const AsteroidCardList: FC<AsteroidCardListProps> = ({ listData }) => {
  return (
    <Fragment>
      {listData.map(astInfo => (
        <AsteroidCard key={astInfo.id as Key} {...astInfo} />
      ))}
    </Fragment>
  );
};
