import { FC } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '@mui/material';
import { motion } from 'framer-motion';

import { AsteroidIcon } from '../../icons/Asteroid';

interface BackdropLoaderProps {
  open: boolean;
  onClose?: React.MouseEventHandler<HTMLSpanElement>;
}

// const asteroidFunFacts = [
//   'Please wait while the data loads...',
//   "Ceres was the first asteroid discovered and it's the largest known asteroid at 580 mi/933 km across.",
//   'The smallest known asteroid is 1991 BA and is on 20 ft/6 m across.',
//   'Scientists believe that asteroids were the building blocks of our planets that were never used',
//   'Asteroids crossing the orbit of the Earth are called "Apollo objects".',
//   'Some asteroids are comets that have blown out after all of the ice is gone.',
// ];

const xMovements = Array.from({ length: Math.floor(Math.random() * 100) }, () =>
  Math.floor(Math.random() * 40 - 20),
);
const yMovements = Array.from({ length: Math.floor(Math.random() * 100) }, () =>
  Math.floor(Math.random() * 40 - 20),
);

const duration = Math.min(xMovements.length, yMovements.length);

export const BackdropLoader: FC<BackdropLoaderProps> = ({ open, onClose }) => {
  // const [astFunFactsIndex, setAstFunFactsIndex] = useState<number>(0);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setAstFunFactsIndex(curIndex => ++curIndex % 6);
  //   }, 6000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [astFunFactsIndex]);

  return createPortal(
    <Backdrop
      sx={{
        zIndex: theme => `${theme.zIndex.drawer + 1} !important`,
        backgroundColor: 'rgba(0, 0, 0, 0.9) !important',
        flexDirection: 'column',
        textAlign: 'center',
      }}
      open={open}
      onClick={onClose}
    >
      {/* <Box
        sx={{
          maxWidth: ({ spacing }) => spacing(60),
          width: '90%',
          height: 150,
          borderRadius: 30,
          position: 'relative',
          listStyleType: 'none',
          margin: 0,
          padding: 0,
          fontSize: ({ typography }) => typography.pxToRem(20),
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
            initial={{ opacity: 0 }}
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
                duration: 3,
                ease: 'easeOut',
              },
            }}
          >
            {asteroidFunFacts[astFunFactsIndex]}
          </motion.li>
        </AnimatePresence>
      </Box> */}

      <motion.div
        style={{
          boxShadow: '0 200px 24px 0 rgba(255, 255, 255, 0.2)',
          position: 'relative',
          width: '175px',
          height: '5px',
        }}
        animate={{
          y: yMovements,
          x: xMovements,
          boxShadow: yMovements.map(
            item => `0 ${200 - item}px 24px 0 rgba(255, 255, 255, 0.2)`,
          ),
          transition: {
            type: 'tween',
            duration,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            type: 'tween',
            duration: 2,
            ease: 'easeInOut',
          },
        }}
      >
        <AsteroidIcon
          sx={{
            width: ({ spacing }) => `${spacing(20)} !important`,
            height: ({ spacing }) => `${spacing(20)} !important`,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </motion.div>
    </Backdrop>,
    document.getElementById('backdrop') as HTMLDivElement,
  );
};
