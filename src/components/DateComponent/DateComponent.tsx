import { FC, Fragment, useState } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import {
  DateRangePicker,
  DateRange,
  DateRangeDelimiter,
} from '@material-ui/pickers';

interface DateComponentProps {
  onChange: (val: DateRange<Date | null>) => void;
}

export const DateComponent: FC<DateComponentProps> = ({ onChange }) => {
  const [dateRange, setDateRange] = useState<DateRange<Date>>([null, null]);

  return (
    <DateRangePicker
      startText="Start Date"
      endText="End Date"
      value={dateRange}
      onChange={newValue => {
        onChange(newValue);
        setDateRange(newValue);
      }}
      renderInput={(startProps, endProps) => (
        <Fragment>
          <TextField {...(startProps as TextFieldProps)} />
          <DateRangeDelimiter> to </DateRangeDelimiter>
          <TextField {...(endProps as TextFieldProps)} />
        </Fragment>
      )}
    />
  );
};
