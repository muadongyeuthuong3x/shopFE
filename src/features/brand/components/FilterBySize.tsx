import { FormControl, FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import * as React from 'react';
import { FC } from 'react';

export interface FilterBySizeProps {
  options: number[];
}

const FilterBySize: FC<FilterBySizeProps> = ({ options }) => {
  const handleChange = () => {};

  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup sx={{ flexDirection: 'row' }}>
        {options.map((item) => (
          <FormControlLabel
            sx={{ marginLeft: 0, marginRight: 0 }}
            key={item}
            control={
              <Checkbox
                sx={(theme) => ({
                  display: 'none',
                  '& + span': {
                    color: theme.palette.primary.contrastText,
                    display: 'block',
                    width: '48px',
                    height: '48px',
                    border: '1px solid #ced4da',
                    margin: '0 15px 15px 0',
                    lineHeight: '48px',
                    textAlign: 'center',
                    borderRadius: '4px',
                  },
                  '&.Mui-checked + span': {
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.primary.main,
                    border: `1px solid ${theme.palette.secondary.main}`,
                  },
                })}
              />
            }
            label={item}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default FilterBySize;
