import { FavoriteBorder, Search, ShoppingBagOutlined } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import { CustomMuiIconButton } from 'components';
import ProductModal from 'features/product/components/ProductModal';
import { FC, Fragment, memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../constants';
import { ProductItemControl } from '../../home/constants/home.constants';
import ProductSlider from './ProductSlider';
import { ToastContainer, toast } from 'react-toastify';
import { LocalKey, LocalStorage } from "ts-localstorage";

export interface ProductItemProps {
  productList?: Product[];
  productColumn?: number;
}

export const productControl: ProductItemControl[] = [
  {
    id: 1,
    title: 'Thêm vào danh sách yêu thích',
    icon: <FavoriteBorder />,
  },
  {
    id: 2,
    title: 'Thêm vào giỏ hàng',
    icon: <ShoppingBagOutlined />,
  },
  {
    id: 3,
    title: 'Xem nhanh',
    icon: <Search />,
  },
];

const data: Product[] = [
  {
    id: '1',
    name: 'Shoes',
    price: 100000,
    discount: 10,
    slug: '/abc',
    summary: 'giay dep',
    image: '',
    size: [36, 27],
    amount: 100,
  },
];

const ProductItem: FC<ProductItemProps> = ({ productList, productColumn }) => {
  const [openModal, setOpenModal] = useState(false);
  const [callList, setCallList] =  useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  
  const [productListData, setproductList] = useState<any>([])

  useEffect(() => {
    const key = new LocalKey("array", "");
    const dataLC: any = LocalStorage.getItem(key);
    const count: any = JSON.parse(dataLC)
    setproductList(count)
  }, [callList]);


  const FcLocalStrogate = (data: any) => {
    const key = new LocalKey("array", "");
    const dataLC: any = LocalStorage.getItem(key);
    const a = JSON.parse(dataLC) || []
    let check = 0
    if (dataLC?.length > 0) {
      for (var i = 0; i < a.length; i++) {
        if (a[i].id === data.id) {
          a[i].count = a[i].count + 1
          console.log(a)
          check = 1
          LocalStorage.setItem(key, JSON.stringify(a))
          toast.success("Thêm sản phẩm vào giỏ hàng thành công")
          return
        }
      }
      if (check == 0) {
        const dataPush = { ...data, count: 1 };
        a.push(dataPush);
        LocalStorage.setItem(key, JSON.stringify(a))
        toast.success("Thêm sản phẩm vào giỏ hàng thành công")
      }
    } else {
      const dataPush = { ...data, count: 1 };
      a.push(dataPush)
      LocalStorage.setItem(key, JSON.stringify(a));
      toast.success("Thêm sản phẩm vào giỏ hàng thành công")
    }

  }

  const updateTim = (data: any) => {
    const key = new LocalKey("array", "");
    const dataLC: any = LocalStorage.getItem(key);
    const tim = JSON.parse(dataLC) || []
    if (tim.length > 0) {
      let checktim = tim.find((item: any) => item.id === data.id);
      if (checktim) {
        const arrNew = tim.filter((item: any) => item.id != data.id)
        LocalStorage.setItem(key, JSON.stringify(arrNew));
        toast.success("Xóa sản phẩm yêu thích thành công")
      } else {  
        tim.push(data)
        toast.success("Thêm sản phẩm yêu thích thành công")
        LocalStorage.setItem(key, JSON.stringify(tim));
      }
    } else {
      tim.push(data)
      toast.success("Thêm sản phẩm yêu thích thành công")
      LocalStorage.setItem(key, JSON.stringify(tim));
    }
    setCallList(!callList)
  }


  return (
    <>
      <Grid container spacing={3}>
        {
        // productListData?.length=0?"Chưa có sản phẩm yêu thích nào!" :
        productListData?.map((product:any) => (
          <Fragment key={product.id}>
            <Grid
              item
              lg={12 / (productColumn as number) || 3}
              xl={12 / (productColumn as number) || 3}
              textAlign="center"
            >
              <Box
                position="relative"
                sx={{
                  '&:hover': {
                    '& > .MuiBox-root > div': {
                      visibility: 'visible',
                      transform: 'none',
                      opacity: 1,
                    },
                  },
                }}
              >
                <ProductSlider imageList={product?.image}/>
                <Box
                  position="absolute"
                  right={0}
                  top="calc(50% - 37px)"
                  bgcolor="transparent"
                  display="block"
                  sx={{
                    transform: 'translateY(-50%)',
                    '& div:not(:last-child)': { marginBottom: '15px' },
                  }}
                  zIndex={10}
                >
                  <Box
                    sx={{
                      transition: '.5s',
                      visibility: 'hidden',
                      opacity: 0,
                      transform: 'translateX(30px)',
                    }}
                  >
                    <CustomMuiIconButton
                      title="Add to wishlist"
                      width="46px"
                      height="46px"
                      boxShadow="0 3px 10px rgb(0 0 0 / 8%)"
                      transition=".3s"
                      margin="0 10px"
                      onClick={() => { updateTim(product) }}
                    >
                      <FavoriteBorder />
                    </CustomMuiIconButton>
                  </Box>
                  <Box
                    sx={{
                      transition: '.5s',
                      visibility: 'hidden',
                      opacity: 0,
                      transform: 'translateX(30px)',
                    }}
                  >
                    <CustomMuiIconButton
                      title="Thêm vào giỏ hàng"
                      width="46px"
                      height="46px"
                      boxShadow="0 3px 10px rgb(0 0 0 / 8%)"
                      transition=".3s"
                      margin="0 10px"
                      onClick={() => { FcLocalStrogate(product) }}
                    >
                      <ShoppingBagOutlined />
                    </CustomMuiIconButton>
                  </Box>
               
                </Box>
              </Box>
              <Box
                sx={{
                  '&>a': {
                    color: (theme) => theme.palette.primary.contrastText,
                    textDecoration: 'none',

                    '&:hover': {
                      color: (theme) => theme.palette.secondary.main,
                    },
                  },
                }}
              >
                <Link to="">{product.name}</Link>
                <Box fontSize="15px" margin="10px 015px" display="flex" justifyContent="center">
                  <Typography color="secondary" fontWeight={700} marginRight="5px">
                    ${product.price - (product.price * product.discount) / 100}
                  </Typography>
                  <Typography
                    color="#979797"
                    sx={{ textDecoration: 'line-through' }}
                    fontWeight={700}
                  >
                    ${product.price}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <ProductModal
              open={openModal}
              onCloseModal={handleCloseModal}
              product={product}
              key={product.id}
            />
          </Fragment>
        ))}
      </Grid>
      <ProductModal open={openModal} onCloseModal={handleCloseModal} product={data[0]} />
    </>
  );
};

export default memo(ProductItem);
