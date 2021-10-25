import { FC, Fragment, useRef, useState } from 'react';
import {
  TextField,
  TextFieldProps,
  Box,
  ButtonBase,
  styled,
  alpha,
} from '@mui/material';
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core';
import { DateRange, MobileDateRangePicker } from '@material-ui/pickers';
import format from 'date-fns/format';

import { theme } from '../../theme/mui4theme';
import { primaryFonts } from '../../theme';

const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(40),
  height: theme.typography.pxToRem(120),
  color: `${alpha('#ff7d8d', 0.4)} !important`,
  transition: 'color 300ms ease-out',
  fontWeight: 600,

  '&:hover, &:focus': {
    color: '#ff7d8d !important',
  },

  '& .enter-text': {
    fontSize: theme.typography.pxToRem(16),
    lineHeight: 1,
    marginBottom: theme.spacing(-1.1),
    color: `${alpha('#48ce9d', 0.8)} !important`,
    fontWeight: 700,
  },

  '&.first-button': {
    borderRight: '3px solid #ff7d8d',
    transform: 'skewX(340deg)',
  },

  '&.first-button > *': {
    transform: 'skewX(-340deg)',
  },
}));

interface DateComponentProps {
  onChange: (val: DateRange<Date | null>) => void;
}

export const DateComponent: FC<DateComponentProps> = ({ onChange }) => {
  const [dateRange, setDateRange] = useState<DateRange<Date>>([null, null]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);

  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: '#38195c',
          width: '120%',
          marginLeft: '-20%',
          paddingLeft: '20%',
          display: 'flex',

          '& > *': {
            flex: 1,
          },
        }}
      >
        <StyledButtonBase
          disableRipple
          onClick={() => {
            startInputRef.current!.click();
          }}
          className="first-button"
        >
          {startDate ? (
            <Box
              sx={{
                color: '#ff7d8d',
                fontSize: ({ typography }) => typography.pxToRem(20),
              }}
            >
              {format(startDate, 'PPP')}
            </Box>
          ) : (
            <div>
              <div className="enter-text">Enter</div>
              Start Date
            </div>
          )}
        </StyledButtonBase>
        <StyledButtonBase
          disableRipple
          onClick={() => {
            endInputRef.current!.click();
          }}
        >
          {endDate ? (
            <Box
              sx={{
                color: '#ff7d8d',
                fontSize: ({ typography }) => typography.pxToRem(20),
              }}
            >
              {format(endDate, 'PPP')}
            </Box>
          ) : (
            <div>
              <div className="enter-text">Enter</div>
              End Date
            </div>
          )}
        </StyledButtonBase>
      </Box>

      <ThemeProvider theme={createTheme(theme)}>
        <MobileDateRangePicker
          disableMaskedInput
          startText="Start Date"
          endText="End Date"
          cancelText="Close"
          onOpen={() => {}}
          onClose={() => {
            onChange(dateRange);
            setStartDate(dateRange[0]);
            setEndDate(dateRange[1]);
          }}
          value={dateRange}
          onChange={newValue => {
            setDateRange(newValue);
          }}
          DialogProps={{
            classes: useStyles(),
          }}
          renderInput={(startProps, endProps) => (
            <Fragment>
              <TextField
                {...(startProps as TextFieldProps)}
                onChange={() => {}}
                inputRef={startInputRef}
                style={{ display: 'none' }}
              />
              <TextField
                {...(endProps as TextFieldProps)}
                onChange={() => {}}
                inputRef={endInputRef}
                style={{ display: 'none' }}
              />
            </Fragment>
          )}
        />
      </ThemeProvider>
    </Fragment>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    fontFamily: primaryFonts,

    '& *': {
      fontFamily: 'inherit',
    },

    '& .MuiPickersModalDialog-dialogRoot': {
      backgroundColor: alpha('#230f22', 0.98),
    },

    '& .MuiPickersDateRangePickerToolbarProps-penIcon': {
      display: 'none',
    },

    '& .MuiToolbar-root': {
      alignItems: 'center',
    },

    '& .MuiPickersToolbar-dateTitleContainer': {
      justifyContent: 'center',
    },

    '& .MuiPickersDateRangePickerToolbarProps-dateTextContainer': {
      alignItems: 'center',
    },

    '& .MuiPickersToolbarButton-root': {
      padding: theme.spacing(0.5, 2.4),
    },

    '& .MuiToolbar-root span[data-mui-test="picker-toolbar-title"]': {
      fontSize: theme.typography.pxToRem(24),
      fontWeight: 600,
      textTransform: 'lowercase',
    },

    '& .MuiPickersArrowSwitcher-root': {
      '& *': {
        color: '#eee',
      },

      '& .MuiIconButton-root': {
        background: alpha('#000', 0.15),
        transition: 'background-color 300ms ease-out',
      },

      '& .MuiIconButton-root:hover, & .MuiIconButton-root:focus': {
        background: alpha('#111', 0.2),
      },
    },

    '& .MuiPickersCalendar-daysHeader *': {
      color: '#a62170',
    },

    '& .MuiPickersCalendar-weekContainer *': {
      color: '#eee',
    },

    '& .MuiPickersCalendar-weekContainer .MuiPickersDay-today': {
      borderColor: '#ff7d8d',
    },

    '& .MuiDialogActions-root': {
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },

    '& .MuiDialogActions-root .MuiButton-textPrimary': {
      padding: '0 2rem',
      boxShadow: '0 0 0.625rem 0 rgba(0, 0, 0, 0.05)',
      lineHeight: '2.5rem',
      verticalAlign: 'middle',
      borderRadius: 10000,
      fontWeight: 700,
      textTransform: 'none',
      border: '2px solid #fba428',
      width: '7rem',
      display: 'none',

      '&:first-child': {
        backgroundColor: 'transparent',
        color: '#fba428',
        display: 'flex',
        transition: 'all 300ms ease-in',
      },

      '&:hover, &:focus': {
        color: '#2d122b',
        boxShadow: '0 0 1.25rem 0 rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fba428',
        border: '2px solid #fba428',
      },
    },
  },
}));
