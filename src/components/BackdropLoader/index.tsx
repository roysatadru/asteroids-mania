import { FC } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '@mui/material';
import { motion } from 'framer-motion';

import { AsteroidIcon } from '../../icons/Asteroid';

interface BackdropLoaderProps {
  open: boolean;
  onClose?: React.MouseEventHandler<HTMLSpanElement>;
}

const xMovements = Array.from({ length: Math.floor(Math.random() * 100) }, () =>
  Math.floor(Math.random() * 40 - 20),
);
const yMovements = Array.from({ length: Math.floor(Math.random() * 100) }, () =>
  Math.floor(Math.random() * 40 - 20),
);

const duration = Math.min(xMovements.length, yMovements.length);

export const BackdropLoader: FC<BackdropLoaderProps> = ({ open, onClose }) => {
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
