import { yupResolver } from '@hookform/resolvers/yup';
import {
  FavoriteBorder,
  Logout,
  PersonOutlineOutlined,
  Search,
  SearchOutlined,
  ShoppingBagOutlined,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';

import Logo from 'assets/image/logo.png';
import { InputField } from 'components/FormElement/InputField';
import MenuHeader from 'components/MenuHeader/MenuHeader';
import { authActions, AuthEnumsPath } from 'features/auth/auth';
import { CartEnumPath } from 'features/cart/cart';
import { FavoriteEnumPath } from 'features/favorite/favorite';
import React, { FC, MouseEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { HeaderNav, HeaderPathEnum } from './constants/Header.path';
import * as yup from 'yup';

const schema = yup.object().shape({
  keyword: yup.string().required('Vui lòng nhập tên giày'),
});



export const Header: FC = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const userInfor = useAppSelector((state: RootState) => state.auth.currentUser);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const open = Boolean(anchorEl);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      keyword: '',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
   


  const handleScroll = () => {
    if (window.scrollY === 0) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickAvatar = (event: MouseEvent<HTMLElement>) => {
    if (!userInfor) {
      history.push(AuthEnumsPath.LOGIN);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
    history.push(AuthEnumsPath.LOGIN);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleSearch = (values: any) => { };

  return (
    <>
      <AppBar
        sx={{
          padding: '15px 0',
          boxShadow: scroll
            ? '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
            : 'none',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ '& img': { verticalAlign: 'middle' } }}>
            <Link to={HeaderPathEnum.HOME}>
              <img src={Logo} alt="logo" width={150} />
            </Link>
          </Box>
          <Box>
            <MenuHeader menuOptions={HeaderNav} />
          </Box>
          <Box>
            <IconButton onClick={() => setOpenDrawer(true)}>
              <SearchOutlined
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText,
                })}
              />
            </IconButton>
            <IconButton onClick={handleClickAvatar}>
              <PersonOutlineOutlined
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText,
                })}
              />

            </IconButton>
            <IconButton onClick={() => history.push(FavoriteEnumPath.FAVORITE)}>
              <FavoriteBorder
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText,
                })}
              />

            </IconButton>
            <IconButton onClick={() => history.push(CartEnumPath.CART)}>
              <ShoppingBagOutlined
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText,
                })}
              />
            </IconButton>
          </Box>
        </Container>
      </AppBar>

      {
        userInfor && (
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={() => history.push(AuthEnumsPath.CHANGE_INFORMATION)}>
              <Avatar /> Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        )
      }
      <Drawer anchor="right" open={openDrawer} onClose={handleCloseDrawer} variant="temporary">
        <Box
          component="form"
          onSubmit={handleSubmit(handleSearch)}
          display="flex"
          padding="20px"
          flexDirection="column"
          sx={{
            '& .MuiFormControl-root': {
              margin: 0,
            },
          }}
        >
          <Typography
            align="center"
            color="secondary"
            textTransform="uppercase"
            padding="30px 0"
            letterSpacing={1}
            fontSize="20px"
          >
            Tìm kiếm
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 0,
                height: '40px',
                '&.Mui-focused': {
                  border: '1px solid #000000',
                },
                '& input': {
                  height: '40px',
                  padding: '0 16px',
                },
              },
            }}
          >
            <InputField control={control} name="keyword" />
            <Button
              variant="contained"
              type="submit"
              sx={(theme) => ({
                boxShadow: 'none',
                borderLeft: 'none',
                height: '40px',
                borderRadius: 0,
                backgroundColor: theme.palette.primary.contrastText,
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.contrastText,
                  color: theme.palette.primary.main,
                  boxShadow: 'none',
                },
              })}
            >
              <Search />
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
