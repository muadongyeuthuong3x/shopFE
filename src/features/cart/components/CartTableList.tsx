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
import { toast, ToastContainer } from 'react-toastify';
import CartTableItem from './CartTableItem';
import { useHistory } from "react-router-dom";
const CartTableList: FC = () => {
  let history = useHistory();
  const muatiep = ()=>{
    history.push("/");
  }
  const handlePayment=()=>{
    toast.success('Đặt hàng thàng công!');
    localStorage.removeItem('card');
    setTimeout(()=>{
      history.push("/");
    },1000)
  }
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
          <CartTableItem  />
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
          onClick={handlePayment}
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
          onClick={muatiep}
        >
          Tiếp tục mua hàng
        </CustomMuiButton>
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
      />
    </>
  );
};

export default CartTableList;
