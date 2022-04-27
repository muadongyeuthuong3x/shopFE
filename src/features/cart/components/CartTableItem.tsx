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
import { FC, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../constants';

export interface CartTableItemProps {
  productList?: Product[];
}

const CartTableItem: FC<CartTableItemProps> = ({ productList }) => {
  const [amount, setAmount] = useState<number[]>(() => {
    return productList?.map((product) => product.amount) as number[];
  });

  const total = useMemo(() => {
    return productList?.reduce((acc, product) => {
      return acc + (product.price - (product.price * product.discount) / 100) * product.amount;
    }, 0);
  }, [productList]);

  return (
    <>
      {productList?.map((product, index) => (
        <TableRow
          key={index}
          sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', '& > td': { padding: '12px' } }}
        >
          <TableCell sx={{ display: 'flex', borderBottom: 'none' }}>
            <Link to="">
              <img src={product.image} alt={product.name} width="100px" height="100px" />
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
                // onClick={() => setAmount((prev) => prev[index] - 1)}
              >
                <Remove />
              </Button>
              <TextField
                name="amount"
                value={amount[index]}
                // onChange={(e) => setAmount(+e.target.value)}
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
                // onClick={() => setAmount((prev) => prev + 1)}
              >
                <Add />
              </Button>
            </Box>
          </TableCell>
          <TableCell align="center">
            <Typography color="secondary" fontWeight={500}>
              ${(product.price - (product.price * product.discount) / 100) * product.amount}
            </Typography>
          </TableCell>
          <TableCell align="center">
            <IconButton>
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
            Thành tiền:
          </Typography>
        </TableCell>
        <TableCell align="center">
          <Typography fontSize="18px" fontWeight={600} color="secondary">
            {total}
          </Typography>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CartTableItem;
