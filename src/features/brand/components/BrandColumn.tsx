import { GridView } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { FC } from 'react';
import { column } from '../brand';

export interface BrandColumnProps {
  productColumn?: number;
  onUpdateColumn: (value: number) => void;
}

const BrandColumn: FC<BrandColumnProps> = ({ productColumn, onUpdateColumn }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      position="relative"
      sx={{
        '&:hover div': {
          visibility: 'visible',
          opacity: 1,
          width: '135px',
        },
      }}
    >
      <IconButton sx={(theme) => ({ border: `1px solid ${theme.palette.primary.contrastText}` })}>
        <GridView />
      </IconButton>
      <Box
        display="flex"
        position="absolute"
        visibility="hidden"
        left="100%"
        top="50%"
        width={0}
        overflow="hidden"
        sx={{
          transition: 'width .3s ease-in-out,opacity .3s ease-in-out,visibility .3s ease-in-out',
          opacity: 0,
          transform: 'translateY(-50%)',
        }}
      >
        {column.map((item) => (
          <IconButton
            sx={(theme) => ({
              border:
                productColumn !== item
                  ? `1px solid ${theme.palette.primary.contrastText}`
                  : `1px solid ${theme.palette.secondary.main}`,
              width: '35px',
              height: '35px',
              marginLeft: '10px',
              '&:hover': {
                border: `1px solid ${theme.palette.secondary.main}`,
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.secondary.main,
                transition: 'all .2s ease',
              },
              color: productColumn === item ? theme.palette.primary.main : 'initial',
              backgroundColor: productColumn === item ? theme.palette.secondary.main : 'initial',
            })}
            onClick={() => onUpdateColumn(item)}
          >
            {item}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default BrandColumn;
