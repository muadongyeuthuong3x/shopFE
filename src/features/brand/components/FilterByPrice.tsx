import { Box, Slider } from '@mui/material';
import { CustomMuiButton } from 'components';
import { FC, useState } from 'react';
import { marks } from '../brand';

export interface FilterByPriceProps {
  onFilterPrice:(priceObj:any)=>void
}

const FilterByPrice: FC<FilterByPriceProps> = ({onFilterPrice}) => {
  const [value, setValue] = useState<number[]>([0, 3000000]);

  const valueText = (value: number) => {
    return `$${value}`;
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleSubmit = () => {
    onFilterPrice({
      priceMax:value[0]> value[1]?value[0]:value[1],
      priceMin: value[1]< value[0]?value[1]:value[0]
    })
  };

  const handleClear = () => {
    setValue([0, 0]);
  };

  return (
    <Box>
      <Slider
        getAriaLabel={() => 'price'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valueText}
        marks={marks}
        max={20000000}
        color="secondary"
        sx={{ marginLeft: '10px' }}
      />
      <Box display="flex" marginTop="15px">
        <CustomMuiButton
          fullWidth
          backgroundColor="#ff871d"
          color="#ffffff"
          borderColor="#ff871d"
          textColor="#ff871d"
          margin="0 15px 0 0"
          height="40px"
          onClick={handleSubmit}
        >
          Áp dụng
        </CustomMuiButton>
        <CustomMuiButton
          fullWidth
          backgroundColor="#000000"
          color="#ffffff"
          borderColor="#000000"
          textColor="#000000"
          type="submit"
          height="40px"
          onClick={handleClear}
        >
          Xoá
        </CustomMuiButton>
      </Box>
    </Box>
  );
};

export default FilterByPrice;
