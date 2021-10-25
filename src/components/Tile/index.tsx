import { FC, ReactNode } from 'react';
import { Box, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

interface TilesProps {
  children: ReactNode;
  heading: ReactNode;
  boxSx: SxProps<Theme>;
  headingSx: SxProps<Theme>;
}

export const Tile: FC<TilesProps> = ({
  boxSx,
  headingSx,
  heading,
  children,
}) => {
  return (
    <Box sx={boxSx}>
      <Box sx={headingSx}>{heading}</Box>

      {children}
    </Box>
  );
};
