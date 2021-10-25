import { FC, Key } from 'react';
import { Box } from '@mui/material';

import { AsteroidCard } from './AsteroidCard';
import { Asteroid } from '../../models/Asteroid';

interface AsteroidCardListProps {
  listData: Asteroid[];
  showSingleDate?: boolean;
}

export const AsteroidCardList: FC<AsteroidCardListProps> = ({
  listData,
  showSingleDate,
}) => {
  return (
    <Box sx={{ margin: ({ spacing }) => spacing(4, 0, 0, 0) }}>
      {listData.map(astInfo => (
        <AsteroidCard
          key={astInfo.id as Key}
          {...astInfo}
          showSingleDate={showSingleDate}
        />
      ))}
    </Box>
  );
};

AsteroidCardList.defaultProps = {
  showSingleDate: false,
};
