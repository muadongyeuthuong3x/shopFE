import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import { sort } from '../brand';

const BrandSort: FC = () => {
  const handleSortChange = (e: SelectChangeEvent) => {};

  return (
    <FormControl variant="standard" sx={{ width: '200px' }}>
      <Select
        label="Sort"
        // value={filter._sort ? `${filter._sort}.${filter._order}` : ''}
        onChange={handleSortChange}
        sx={(theme) => ({
          '&::after': {
            content: 'none',
          },

          '&:hover::before': {
            borderBottom: '1px solid rgba(0, 0, 0, 0.42) !important',
          },

          '& > .MuiSelect-select': {
            backgroundColor: theme.palette.primary.main,
          },

          '& > .MuiSelect-select:focus': {
            backgroundColor: theme.palette.primary.main,
          },
        })}
      >
        <MenuItem
          value=""
          sx={(theme) => ({
            backgroundColor: `${theme.palette.primary.main} !important`,
            '&:hover': {
              color: theme.palette.secondary.main,
            },
          })}
        >
          <em style={{ fontWeight: 500, color: '#ff871d' }}>No sort</em>
        </MenuItem>
        {sort.map((item, index) => (
          <MenuItem
            value={item.value}
            key={index}
            sx={(theme) => ({
              color: '#969696',
              '&:hover': {
                color: theme.palette.secondary.main,
                backgroundColor: theme.palette.primary.main,
              },
            })}
          >
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BrandSort;
