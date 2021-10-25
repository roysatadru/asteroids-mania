import { FC, useEffect, useRef, useState } from 'react';
import { IconButton, Box, Typography, Button, Theme } from '@mui/material';
import { RouteComponentProps, useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { SxProps } from '@mui/system';

import { axios, URIS } from '../api';
import { Input } from '../components/Input';
import { Layout } from '../layout';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { AsteroidFullDetails } from '../models/Asteroid';
import { extractAsteroidInfoFromApiResponse } from '../utility/mapping-info';
import { CloseApproachDatesTile } from '../containers/CloseApproachDatesTile';
import { secondaryFonts } from '../theme';

interface MatchParams {
  id: string;
}

const boxSx: SxProps<Theme> = {
  margin: ({ spacing }) => spacing(3, 0),
  display: 'flex',
  alignItems: 'center',
  lineHeight: 1,

  '& *:first-child': {
    marginRight: ({ spacing }) => spacing(2),
  },

  '& .label': {
    fontWeight: 700,
  },
};

export const AsteroidDetails: FC<RouteComponentProps<MatchParams>> = () => {
  const params = useParams<MatchParams>();
  const { push } = useHistory();

  const { closeBackdrop, openBackdrop } = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const [asteroidInfo, setAsteroidInfo] = useState<AsteroidFullDetails>();

  useEffect(() => {
    openBackdrop();
    axios
      .get<any>(`${URIS.ASTEROID_DETAILS}/${params.id}`)
      .then(response => {
        extractAsteroidInfoFromApiResponse({
          data: [response.data],
          afterConversion: astList => {
            setAsteroidInfo({
              ...astList[0],
              isPotentiallyHazardousAsteroid: response.data
                ?.is_potentially_hazardous_asteroid as boolean,
              estimatedDiameterInKms: {
                min: response.data?.estimated_diameter?.kilometers
                  ?.estimated_diameter_min as number,
                max: response.data?.estimated_diameter?.kilometers
                  ?.estimated_diameter_min as number,
              },
              absoluteMagnitudeH: response.data?.absolute_magnitude_h as number,
              nasaJplUrl: (
                (response.data?.nasa_jpl_url || '') as String
              ).replace('http://', 'https://'),
            });
          },
        });
      })
      .catch(error => {})
      .finally(() => {
        closeBackdrop();
      });

    inputRef.current?.focus();
  }, [closeBackdrop, openBackdrop, params.id]);

  return (
    <Layout
      title="Lookup"
      heading={asteroidInfo?.shortName || asteroidInfo?.name}
      subHeading={
        asteroidInfo?.shortName && asteroidInfo?.name
          ? `Also known as ${asteroidInfo.name}`
          : ''
      }
    >
      <Input
        inputRef={inputRef}
        placeholder="Lookup asteroids with ids"
        endAdornment={
          <IconButton
            size="large"
            onClick={() => {
              if (inputRef.current?.value) {
                push(`/lookup/${inputRef.current.value}`);
                inputRef.current.value = '';
              }
            }}
          >
            <SearchIcon fontSize="large" />
          </IconButton>
        }
      />

      {!!asteroidInfo && (
        <Box
          sx={{
            padding: ({ spacing }) => spacing(4, 6, 8, 6),
          }}
          component="main"
        >
          <Typography variant="h2" sx={{ marginBottom: 2 }}>
            {asteroidInfo?.shortName || asteroidInfo?.name}
          </Typography>

          {asteroidInfo?.shortName && asteroidInfo?.name ? (
            <Typography variant="h3">
              Also known as{' '}
              <span
                style={{
                  color: '#48ce9d',
                  fontFamily: secondaryFonts,
                  fontSize: '110%',
                }}
              >
                {asteroidInfo.name}
              </span>
            </Typography>
          ) : null}

          <Box sx={{ padding: ({ spacing }) => spacing(2, 0) }}>
            <Box sx={boxSx}>
              <span className="label">Asteroid Id:</span>{' '}
              <span style={{ color: '#48ce9d', fontFamily: secondaryFonts }}>
                {asteroidInfo?.id}
              </span>
            </Box>

            <Box sx={boxSx}>
              <span className="label">Estimated Diameter:</span> min.&nbsp;
              <span
                style={{
                  marginRight: 10,
                  color: '#48ce9d',
                  fontFamily: secondaryFonts,
                }}
              >
                {+(asteroidInfo?.estimatedDiameterInKms?.min).toFixed(4)}
                &nbsp;km
              </span>
              &nbsp;-&nbsp; max.&nbsp;
              <span style={{ color: '#48ce9d', fontFamily: secondaryFonts }}>
                {+(asteroidInfo?.estimatedDiameterInKms?.max).toFixed(4)}
                &nbsp;km
              </span>
            </Box>

            <Box sx={boxSx}>
              <Box
                sx={{
                  display: 'inline-block',
                  width: ({ typography }) => typography.pxToRem(20),
                  height: ({ typography }) => typography.pxToRem(20),
                  backgroundColor: ({ palette }) =>
                    asteroidInfo.isPotentiallyHazardousAsteroid
                      ? palette.error.dark
                      : palette.success.dark,
                  borderRadius: '50%',
                }}
              />{' '}
              {asteroidInfo.isPotentiallyHazardousAsteroid
                ? "It's a "
                : 'Not a '}
              Potentially Hazardous Asteroid
            </Box>

            <Box sx={boxSx}>
              <span className="label">Absolute Magnitude H:</span>{' '}
              <span style={{ color: '#48ce9d', fontFamily: secondaryFonts }}>
                {asteroidInfo.absoluteMagnitudeH}
              </span>
            </Box>
          </Box>

          <CloseApproachDatesTile
            closeApproachDates={asteroidInfo?.closeApproachDates!}
          />

          <Box sx={{ textAlign: 'right' }}>
            <Button
              component="a"
              href={asteroidInfo?.nasaJplUrl as string}
              color="secondary"
              variant="contained"
            >
              Learn more at NASA Jpl Site &#8594;
            </Button>
          </Box>
        </Box>
      )}

      {/* <pre>{JSON.stringify(asteroidInfo, undefined, 2)}</pre> */}
    </Layout>
  );
};
