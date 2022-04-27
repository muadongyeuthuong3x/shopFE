import { Box, Typography } from '@mui/material';
import { FC } from 'react';

export interface BrandFilterWidgetProps {
  title: string;
  children: any;
}

const BrandFilterWidget: FC<BrandFilterWidgetProps> = ({ title, children }) => {
  return (
    <Box paddingTop="25px">
      <Box
        padding="6px 0 6px 14px"
        borderLeft={(theme) => `3px solid ${theme.palette.secondary.contrastText}`}
        position="relative"
        sx={{
          '&::after': {
            content: '""',
            borderBottom: '1px solid #e6e6e6',
            width: '70%',
            position: 'absolute',
            top: '50%',
          },
        }}
      >
        <Typography
          variant="body1"
          component="h2"
          letterSpacing="2px"
          fontWeight={500}
          textTransform="uppercase"
          paddingRight="15px"
          display="inline-block"
          bgcolor={(theme) => theme.palette.primary.main}
        >
          {title}
        </Typography>
      </Box>
      <Box paddingTop="25px" mb={2}>
        {children}
      </Box>
    </Box>
  );
};

export default BrandFilterWidget;
