import { FC } from 'react';
import { Box, alpha } from '@mui/material';
import format from 'date-fns/format';

import { Tile } from '../../components/Tile';
import { LogoIcon } from '../../icons/Logo';

interface InnerTileProps {
  heading: String;
  date: Date;
}

export const InnerTile: FC<InnerTileProps> = ({ heading, date }) => {
  return (
    <Tile
      boxSx={{
        borderRadius: ({ shape: { borderRadius }, typography: { pxToRem } }) =>
          pxToRem(borderRadius as number),
        background: alpha('#000', 0.2),
        padding: 2,
        color: '#eee',
        textAlign: 'center',
      }}
      heading={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LogoIcon
            sx={{ fontSize: '130%', marginRight: 0.8, marginTop: -0.7 }}
          />{' '}
          {heading}
        </Box>
      }
      headingSx={{
        fontSize: ({ typography: { pxToRem } }) => pxToRem(12),
        marginBottom: 0.5,
      }}
    >
      <Box
        sx={{
          fontSize: ({ typography: { pxToRem } }) => pxToRem(12),
          marginBottom: 1,
        }}
      >
        {format(date, 'PPPP')}
      </Box>
      <Box>{format(date, 'hh:mm aa')}</Box>
    </Tile>
  );
};
