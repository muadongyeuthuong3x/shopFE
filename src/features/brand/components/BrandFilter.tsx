import { Box } from '@mui/material';
import { FC } from 'react';
import { sizeOptions, type } from '../brand';
import BrandFilterWidget from './BrandFilterWidget';
import FilterByPrice from './FilterByPrice';
import FilterBySize from './FilterBySize';
import FilterByType from './FilterByType';

const BrandFilter: FC = () => {
  return (
    <Box marginTop="25px">
      <BrandFilterWidget title="Loại">
        <FilterByType options={type} />
      </BrandFilterWidget>
      <BrandFilterWidget title="Giá">
        <FilterByPrice />
      </BrandFilterWidget>
      <BrandFilterWidget title="Size">
        <FilterBySize options={sizeOptions} />
      </BrandFilterWidget>
    </Box>
  );
};

export default BrandFilter;
