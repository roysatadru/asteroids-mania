import { FC, Key, ReactNode, useEffect, useState } from 'react';
import { Paper, styled, alpha, Box, Grid, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

import wall from '../../images/wall.webp';
import { Tile } from '../../components/Tile';
import { secondaryFonts } from '../../theme';

interface SideContentProps {
  heading?: ReactNode;
  subHeading?: ReactNode;
}

const StyledSideContainer = styled(Paper)({
  background: `url(${wall})`,
  height: '100vh',
  width: '100%',
  backgroundSize: 'cover',
  boxShadow: `0 0 30px 0 ${alpha('#aaa', 0.15)}`,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  backgroundColor: 'transparent',
  overflow: 'hidden',
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  KhtmlUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
});

const asteroidFunFacts = [
  "Ceres was the first asteroid discovered and is classified as a protoplanet. It's the largest known asteroid at 580 mi/933 km across.",
  'The smallest known asteroid is 1991 BA and is on 20 ft/6 m across.',
  'Scientists believe that asteroids were the building blocks of our planets that were never used',
  'Asteroids crossing the orbit of the Earth are called "Apollo objects".',
  'The asteroid that hit the earth 65 million years ago caused devastation so great that it led to the dinosaur extinction and affected all life on Earth.',
  'An asteroid of around .1 mi/.15 km in width is believed to have exploded over Tunguska, Siberia. No crater was ever found, so scientists believed it exploded overhead, causing damage that expanded out hundreds of miles/kilometers.',
  'Most asteroids are too small to have enough gravitational pull to make them spherical so they are irregular in shape.',
  'Some asteroids are comets that have blown out after all of the ice is gone.',
  'A meteoroid is a piece of an asteroid and one meteoroid the size of a car falls into the atmosphere of the Earth once each year. When this happens a fireball effect occurs that can be seen. The meteoroid usually burns up well before it reaches the surface of our planet.',
];

export const SideContent: FC<SideContentProps> = ({ heading, subHeading }) => {
  const [astFunFactsIndex, setAstFunFactsIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAstFunFactsIndex(curIndex => ++curIndex % 6);
    }, 9000);

    return () => {
      clearTimeout(timer);
    };
  }, [astFunFactsIndex]);

  return (
    <StyledSideContainer>
      <Grid
        container
        direction="column"
        height="100%"
        alignItems="stretch"
      >
        <Grid item flex="1"></Grid>

        <Grid item flex="1">
          <Typography
            variant="h1"
            sx={{
              paddingLeft: 4,
              width: '25rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {heading}
          </Typography>

          <Typography variant="h3" sx={{ paddingLeft: 4, width: '80%' }}>
            {subHeading}
          </Typography>
        </Grid>

        <Grid item flex="1 0">
          <Tile
            boxSx={{
              borderRadius: ({
                shape: { borderRadius },
                typography: { pxToRem },
              }) => pxToRem(borderRadius as number),
              padding: 2,
              color: '#fff',
              textAlign: 'center',
              margin: ({ spacing }) => spacing(1),
            }}
            heading={
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: alpha('#ff7d8d', 0.7),
                  width: '180px',
                  margin: 'auto',
                  borderRadius: 0.2,
                }}
              >
                Fun Facts
              </Box>
            }
            headingSx={{
              fontSize: ({ typography: { pxToRem } }) => pxToRem(24),
              fontWeight: 700,
              fontFamily: secondaryFonts,
              color: '#200e1f',
              marginBottom: -3,
            }}
          >
            <Box
              sx={{
                maxWidth: ({ spacing }) => spacing(60),
                width: '90%',
                height: 150,
                borderRadius: 30,
                position: 'relative',
                listStyleType: 'none',
                margin: 0,
                padding: 0,
                fontSize: ({ typography }) => typography.pxToRem(12),
                lineHeight: 1.8,
              }}
              component="ul"
            >
              <AnimatePresence exitBeforeEnter>
                <motion.li
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                  }}
                  key={asteroidFunFacts[astFunFactsIndex] as Key}
                  initial={{ opacity: 0, transitionDelay: 3 } as any}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 3,
                      ease: 'easeIn',
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      delay: 3,
                      duration: 3,
                      ease: 'easeOut',
                    },
                  }}
                >
                  {asteroidFunFacts[astFunFactsIndex]}
                </motion.li>
              </AnimatePresence>
            </Box>
          </Tile>
        </Grid>
      </Grid>
    </StyledSideContainer>
  );
};
