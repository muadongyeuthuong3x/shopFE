import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
  Typography,
} from '@mui/material';
import { CustomMuiButton } from 'components';
import { FC } from 'react';
import { cart } from '../helpers/example.data';
import CartTableItem from './CartTableItem';

const CartTableList: FC = () => {
  return (
    <>
      <Table
        sx={{
          border: '1px solid rgba(224, 224, 224, 1)',
          '& > thead th:not(:last-child)': { borderRight: '1px solid rgba(224, 224, 224, 1)' },
        }}
      >
        <TableHead
          sx={{
            padding: '0 15px',
            '& th': { fontWeight: 600 },
          }}
        >
          <TableRow>
            <TableCell align="left">Sản phẩm</TableCell>
            <TableCell align="center">Đơn giá</TableCell>
            <TableCell align="center">Số lượng</TableCell>
            <TableCell align="center">Tổng tiền</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <CartTableItem productList={cart} />
        </TableBody>
      </Table>
      <Box display="flex" mt={4} justifyContent="flex-end" width="50%" marginLeft="auto">
        <CustomMuiButton
          fullWidth
          backgroundColor="#ff871d"
          color="#ffffff"
          borderColor="#ff871d"
          textColor="#ff871d"
          margin="0 15px 0 0"
        >
          Thanh toán
        </CustomMuiButton>
        <CustomMuiButton
          fullWidth
          backgroundColor="#000000"
          color="#ffffff"
          borderColor="#000000"
          textColor="#000000"
          type="submit"
        >
          Tiếp tục mua hàng
        </CustomMuiButton>
      </Box>
    </>
  );
};

export default CartTableList;
