import { FC } from 'react';
import { Paper, styled, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { Asteroid } from '../../models/Asteroid';
import { CloseApproachDatesTile } from '../CloseApproachDatesTile';

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'block',
  maxWidth: theme.spacing(90),
  margin: 'auto',
  padding: theme.spacing(2, 4),

  '&:not(:last-child)': {
    marginBottom: theme.spacing(5),
  },
}));

const StyledLink = styled(Link)({
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
});

export const AsteroidCard: FC<Asteroid & { showSingleDate?: boolean }> =
  props => {
    return (
      <StyledPaper>
        <Typography variant="h4">{props.shortName || props.name}</Typography>

        <CloseApproachDatesTile
          showSingleDate={props.showSingleDate}
          closeApproachDates={props.closeApproachDates}
        />

        <Box
          sx={{
            textAlign: 'right',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            component={StyledLink}
            to={{
              pathname: `/lookup/${props.id}`,
            }}
          >
            Know more
            <NavigateNextIcon
              sx={{
                marginRight: -1.5,
              }}
            />
          </Button>
        </Box>
      </StyledPaper>
    );
  };
