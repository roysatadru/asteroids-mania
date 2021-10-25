import { FC, Fragment } from 'react';
import { Box, alpha, Grid } from '@mui/material';
import format from 'date-fns/format';

import { Asteroid } from '../../models/Asteroid';
import { Tile } from '../../components/Tile';
import { InnerTile } from './InnerTile';
import { primaryFonts } from '../../theme';
import { LogoIcon } from '../../icons/Logo';

interface CloseApproachDatesTileProps
  extends Pick<Asteroid, 'closeApproachDates'> {
  showSingleDate?: boolean;
}

export const CloseApproachDatesTile: FC<CloseApproachDatesTileProps> =
  props => {
    return (
      <Tile
        boxSx={{
          borderRadius: ({
            shape: { borderRadius },
            typography: { pxToRem },
          }) => pxToRem(borderRadius as number),
          background: alpha('#4e1762', 0.4),
          margin: ({ spacing }) => spacing(2, 0, 3, 0),
          padding: 2,
          fontFamily: primaryFonts,
          color: '#eee',
          textAlign: 'center',

          '& *': {
            fontFamily: 'inherit',
          },
        }}
        heading={
          props.showSingleDate ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <LogoIcon
                sx={{ fontSize: '140%', marginRight: 0.8, marginTop: -0.7 }}
              />{' '}
              Close Approach Date
            </Box>
          ) : (
            'Close Approach Dates'
          )
        }
        headingSx={{
          fontSize: ({ typography: { pxToRem } }) => pxToRem(13),
          textAlign: 'center',
          color: '#ddd',
          marginBottom: props.showSingleDate ? 1 : 2,
        }}
      >
        {props.showSingleDate ? (
          <Fragment>
            <Box
              sx={{
                fontSize: ({ typography: { pxToRem } }) => pxToRem(13),
                marginBottom: 2,
              }}
            >
              {format(
                (props.closeApproachDates.nextDate ||
                  props.closeApproachDates.prevDate) as Date,
                'PPPP',
              )}
            </Box>
            <Box
              sx={{
                fontSize: ({ typography: { pxToRem } }) => pxToRem(20),
              }}
            >
              {format(
                (props.closeApproachDates.nextDate ||
                  props.closeApproachDates.prevDate) as Date,
                'hh:mm aa',
              )}
            </Box>
          </Fragment>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InnerTile
                heading="Previous"
                date={props.closeApproachDates.prevDate!}
              />
            </Grid>
            <Grid item xs={6}>
              <InnerTile
                heading="Next"
                date={props.closeApproachDates.nextDate!}
              />
            </Grid>
          </Grid>
        )}
      </Tile>
    );
  };
