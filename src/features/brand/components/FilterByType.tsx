import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { FC } from 'react';
import { Brand } from '../../../constants';

export interface FilterByTypeProps {
  options: Brand[];
}

const FilterByType: FC<FilterByTypeProps> = ({ options }) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup name="type">
        {options.map((option) => (
          <FormControlLabel
            key={option.id}
            value={option.id}
            control={<Radio color="secondary" />}
            label={option?.name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FilterByType;
