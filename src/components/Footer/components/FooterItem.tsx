import React, { FC } from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FooterItemOptions } from '../constants/Footer';

interface FooterItemProps {
  label: string;
  options: FooterItemOptions[];
}

const FooterItem: FC<FooterItemProps> = ({ label, options }) => {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        fontWeight={600}
        sx={(theme) => ({
          color: theme.palette.secondary.contrastText,
          '&::after': {
            content: '""',
            height: '1px',
            width: '30px',
            marginTop: '15px',
            backgroundColor: theme.palette.secondary.contrastText,
            display: 'block',
          },
        })}
      >
        {label}
      </Typography>
      <List
        sx={{
          marginTop: '20px',
          '&>li': {
            paddingLeft: 0,

            '&>a': {
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { color: (theme) => theme.palette.secondary.main },
            },
          },
        }}
      >
        {options.map((option) => (
          <ListItem key={option.id}>
            <Link to="/">{option.label}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FooterItem;
