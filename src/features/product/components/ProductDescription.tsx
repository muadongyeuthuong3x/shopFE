import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Product } from '../../../constants';
import * as React from 'react';
import { FC } from 'react';

export interface ProductDescriptionProps {
  product?: Product;
}

const ProductDescription: FC<ProductDescriptionProps> = ({ product }) => {
  return (
    <Table
      sx={{
        maxWidth: 900,
        border: '1px solid rgba(224, 224, 224, 1)',
        margin: '0 auto',

        '& .MuiTableCell-head': { borderRight: '1px solid rgba(224, 224, 224, 1)' },
      }}
    >
      <TableBody>
        <TableRow>
          <TableCell variant="head">Thương hiệu</TableCell>
          <TableCell>Converse</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head">Xuất xứ thương hiệu</TableCell>
          <TableCell>Mỹ</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head">Sản xuất tại</TableCell>
          <TableCell>Việt Nam</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head">SKU</TableCell>
          <TableCell>A02209C</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head">Model</TableCell>
          <TableCell>Converse Chuck Taylor</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head">Chất liệu</TableCell>
          <TableCell variant="head">Vải</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head">Hướng dẫn bảo quản</TableCell>
          <TableCell>
            <Typography variant="body1" mb={1}>
              Tránh mang sản phẩm khi trời mưa hoặc thời tiết xấu để chúng không bị ướt dẫn đến bong
              tróc
            </Typography>
            <Typography variant="body1" mb={1}>
              Cất giữ sản phẩm ở nơi thoáng mát để giữ gìn chất lượng của sản phẩm ở mức tốt nhất
            </Typography>
            <Typography variant="body1">Lau chùi sản phẩm thường xuyên để tránh bụi</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head">Chế độ bảo hành</TableCell>
          <TableCell>Bảo hành chính hãng 15 ngày theo phiếu bảo hành</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head">Quy cách đóng gói</TableCell>
          <TableCell>
            <Typography variant="body1" mb={1}>
              Giày
            </Typography>
            <Typography variant="body1" mb={1}>
              Hộp giày
            </Typography>
            <Typography variant="body1">Phiếu bảo hành chính hãng</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ProductDescription;
