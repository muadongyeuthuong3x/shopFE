import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Brand } from '../../../constants';

export interface FilterByTypeProps {
  options: Brand[];
  onSelect:(id:any)=>void
}

const FilterByType: FC<FilterByTypeProps> = ({ options, onSelect }) => {
  useEffect(()=>{
    onSelect(options.map(i=>i.id).join(","))
  },[options])
  const handleSelect=(id:any)=>{
    onSelect(id)
  }
  
  return (
    <FormControl component="fieldset">
      <RadioGroup name="type" defaultValue={options[0]?.id+''} >
        <FormControlLabel
            key='all'
            value='all'
            control={<Radio color="secondary" />}
            label='Tất cả'
            onChange={()=>handleSelect(options.map(i=>i.id).join(","))}
          />
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
