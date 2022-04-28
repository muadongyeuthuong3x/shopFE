import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { FC } from 'react';
import { Brand } from '../../../constants';

export interface FilterByTypeProps {
  options: Brand[];
  onSelect:(id:any)=>void
}

const FilterByType: FC<FilterByTypeProps> = ({ options, onSelect }) => {
  const handleSelect=(id:any)=>{
    onSelect(id)
  }
  return (
    <FormControl component="fieldset">
      <RadioGroup name="type">
        {options.map((option) => (
          <FormControlLabel
            key={option.id}
            value={option.id}
            control={<Radio color="secondary" />}
            label={option?.name}
            onChange={()=>handleSelect(option.id)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FilterByType;
