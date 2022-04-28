import { List, ListItem, Slide, Typography } from '@mui/material';
import { Brand } from '../../../constants';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface MenuDropDownProps {
  open: boolean;
  brands: Brand[];
}

const MenuDropDown: FC<MenuDropDownProps> = ({ open, brands }) => {
  return (
    <Slide in={open} direction="right">
      <List
        sx={{
          display: 'flex',
          position: 'absolute',
          top: '100%',
          left: '-200px',
          flexFlow: 'row wrap',
          width: '950px',
          padding: '30px',
          backgroundColor: (theme) => theme.palette.primary.main,
          boxShadow: '7px 6px 40px 0 rgb(204 204 223 / 16%)',
        }}
      >
        {brands.map((brand) => (
          <ListItem
            key={brand.id}
            sx={(theme) => ({
              flexDirection: 'column',
              width: 'auto',
              alignItems: 'flex-start',
              flex: '0 0 33.3333333%',

              '& > a': {
                color: 'inherit',
                textDecoration: 'none',

                '& > p': {
                  paddingBottom: '10px',
                  marginBottom: theme.spacing(2),
                  position: 'relative',
                  display: 'inline-block',

                  '&:hover': {
                    color: theme.palette.secondary.main,
                  },

                  '&::after': {
                    borderBottom: `1px solid ${theme.palette.secondary.main}`,
                    bottom: 0,
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    transition: 'width .4s linear 0s',
                    width: '50%',
                  },
                },
              },
            })}
          >
            <Link to={`/brand${brand.slug}-${brand.id}`}>
              <Typography variant="body1" textTransform="capitalize" fontWeight={600}>
                {brand.name}
              </Typography>
              {/* để tạm để hiển thị */}
              <img src={brand.image} width="100%" alt={brand.name} />{' '}
              {/* <img src={brand.image} width="100%" alt={brand.name} /> */}
            </Link>
          </ListItem>
        ))}
      </List>
    </Slide>
  );
};

export default MenuDropDown;
