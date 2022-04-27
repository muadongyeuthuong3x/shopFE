import { Close } from '@mui/icons-material';
import { Fade, Grid, IconButton, Modal } from '@mui/material';
import { Product } from '../../../constants';
import { FC } from 'react';
import ProductInfor from './ProductInfor';
import ProductSlider from './ProductSlider';

export interface ProductModalProps {
  open: boolean;
  onCloseModal: () => void;
  product: Product;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: '20px',
  borderRadius: '6px',
};

const ProductModal: FC<ProductModalProps> = ({ open, onCloseModal, product }) => {
  return (
    <Modal open={open} onClose={onCloseModal}>
      <Fade in={open}>
        <Grid container sx={{ ...style }} spacing={2}>
          <Grid item xl={6} lg={6} md={6} paddingLeft="0 !important" paddingRight="16px">
            <ProductSlider
              flexDirection="column"
              direction="horizontal"
              width="100%"
              height="100%"
            />
          </Grid>
          <Grid item xl={6} lg={6} md={6}>
            <ProductInfor product={product} />
          </Grid>
          <IconButton
            sx={(theme) => ({
              position: 'absolute',
              top: '-15px',
              right: '-10px',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              border: `1px solid ${theme.palette.secondary.main}`,
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.primary.main,

              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.main,
              },
            })}
            onClick={() => onCloseModal()}
          >
            <Close />
          </IconButton>
        </Grid>
      </Fade>
    </Modal>
  );
};

export default ProductModal;
