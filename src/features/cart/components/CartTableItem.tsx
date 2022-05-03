import { Add, Delete, Remove } from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  TableCell,
  TableRow,
  TextField,
  Theme,
  Typography,
} from '@mui/material';
import { FC, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../constants';
import { toast } from 'react-toastify';
import { LocalKey, LocalStorage } from "ts-localstorage";


export interface CartTableItemProps {
  productList?: Product[];
}

const CartTableItem: FC = () => {

  const [productList, setproductList] = useState<any>([])
  const [total, setTotal] = useState<any>(0)
  useEffect(() => {
    const key = new LocalKey("card", "");
    const dataLC: any = LocalStorage.getItem(key);
    if(!dataLC){
      return
    }
    const count: any = JSON.parse(dataLC)
    setproductList(count)
    moneyTotal()
  }, []);


  const moneyTotal = () => {
    const key = new LocalKey("card", "");
    const dataLC: any = LocalStorage.getItem(key);
    const a: any = JSON.parse(dataLC)
    let count = 0;
    for (var i = 0; i < a.length; i++) {
      count += (a[i].price - ((a[i].price * a[i].discount) / 100)) * a[i].count
    }
    setTotal(count)
  }

  const deletItemCard = (id: number) => {
    const key = new LocalKey("card", "");
    const dataLC: any = LocalStorage.getItem(key);
    const count: any = JSON.parse(dataLC)
    const dataNewAfterDelete = count.filter((item: any) => item.id != id)
    if (dataNewAfterDelete.length > 0) {
      LocalStorage.setItem(key, JSON.stringify(dataNewAfterDelete));
    } else {
      LocalStorage.removeItem(key);
    }

    toast.error("Xóa sản phẩm thành công ")
    setproductList(dataNewAfterDelete)
  }

  const setDataCard = (index: number, b: boolean) => {
    console.log('index')
    console.log(index)
    const key = new LocalKey("card", "");
    const dataLC: any = LocalStorage.getItem(key);
    const a: any = JSON.parse(dataLC)
    for (var i = 0 ; i< a.length ; i++) {
      if( i==index && a[index].count == 1 && b == false){
        toast.error("Sản phẩm mua nhỏ nhất là 1 ")
      }
      else  if( i==index &&a[index].count > 1 && b == false){
        a[index].count -=1
        LocalStorage.setItem(key, JSON.stringify(a));}
        else  if( i==index && b == true){
        a[index].count +=1
        LocalStorage.setItem(key, JSON.stringify(a));
      }
    }
    setproductList(a);
  }

  return (
    <>
      {productList?.map((product: any, index: number) => (
        <TableRow
          key={index}
          sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', '& > td': { padding: '12px' } }}
        >
          <TableCell sx={{ display: 'flex', borderBottom: 'none' }}>
            <Link to="">
              <img src={product.image[0]} alt={product.name} width="100px" height="100px" />
            </Link>
            <Box
              padding="12px 12px 12px 24px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              lineHeight={1.6}
              sx={{
                '& a': {
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: '15px',

                  '&:hover': {
                    color: (theme: Theme) => theme.palette.secondary.main,
                  },
                },
              }}
            >
              <Link to={`/product/${product.slug}`}>{product.name}</Link>
              <Typography color="#959595" fontSize="14px">
                {product.size}
              </Typography>
            </Box>
          </TableCell>
          <TableCell align="center">
            <Typography color="secondary" fontWeight={500}>
              ${product.price - (product.price * product.discount) / 100}
            </Typography>
          </TableCell>
          <TableCell>
            <Box
              display="flex"
              justifyContent="center"
              sx={{
                '& .MuiFormControl-root': {
                  margin: 0,

                  '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                    '&.Mui-focused': {
                      border: '1px solid #000000',
                    },
                    '& input': {
                      textAlign: 'center',
                      width: '70px',
                      height: '40px',
                      padding: 0,
                    },
                  },
                },
              }}
            >
              <Button
                variant="contained"
                sx={(theme) => ({
                  border: '1px solid #ced4da',
                  borderRight: 'none',
                  boxShadow: 'none',
                  borderRadius: '4px 0 0 4px',
                  minWidth: '40px',
                  padding: 0,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: 'none',
                  },
                })}
                onClick={() => setDataCard(index, false)}
              >
                <Remove />
              </Button>
              <TextField
                name="amount"
                value={product.count}
                disabled
              />
              <Button
                variant="contained"
                sx={(theme) => ({
                  border: '1px solid #ced4da',
                  borderLeft: 'none',
                  boxShadow: 'none',
                  borderRadius: '0 4px 4px 0',
                  minWidth: '40px',
                  padding: 0,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: 'none',
                  },
                })}
                onClick={() => setDataCard(index, true)}
              >
                <Add />
              </Button>
            </Box>
          </TableCell>
          <TableCell align="center">
            <Typography color="secondary" fontWeight={500}>
              {(product.price - (product.price * product.discount) / 100) * product.count} VNĐ
            </Typography>
          </TableCell>
          <TableCell align="center">
            <IconButton onClick={() => deletItemCard(product.id)}>
              <Delete />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
      <TableRow
        sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', '& > td': { padding: '12px' } }}
      >
        <TableCell colSpan={3}></TableCell>
        <TableCell variant="head" align="center">
          <Typography fontSize="20px" fontWeight={600}>
            Thành tiền: {total} VNĐ
          </Typography>
        </TableCell>
        <TableCell align="center">
          <Typography fontSize="18px" fontWeight={600} color="secondary">

          </Typography>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CartTableItem;
