import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Rating, Typography } from '@mui/material';
import { CustomMuiButton, InputField } from 'components';
import { FC, SyntheticEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { commentSchema } from '../product';

const ProductComment: FC = () => {
  const [rating, setRating] = useState<number | null>(0);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      content: '',
    },
    resolver: yupResolver(commentSchema),
  });

  const handleFormSubmit = (values: string | any) => {
    const formValues = { ...values, rating };
    console.log(formValues);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {/* <Typography fontWeight={500} color="secondary" marginBottom="20px">
        Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người đầu tiên đánh giá cho sản
        phẩm này
      </Typography> */}
      <Typography variant="h5" fontWeight={500}>
        Đánh giá của bạn về sản phẩm
      </Typography>
      <Typography margin="20px 0" variant="h6" fontWeight={500} color="secondary">
        Nike Blazer Low Pro GT
      </Typography>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="500px"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Rating
          name="rating"
          value={rating}
          onChange={(e: SyntheticEvent<any, any>, value: number | null) => setRating(value)}
          precision={0.5}
          sx={{
            fontSize: '40px',
            color: (theme) => theme.palette.secondary.main,
          }}
        />
        <InputField control={control} name="content" label="Đánh giá của bạn" multiline rows={6} />
        <CustomMuiButton
          fullWidth
          backgroundColor="#000000"
          color="#ffffff"
          borderColor="#000000"
          textColor="#000000"
          type="submit"
          margin="30px 0 0"
        >
          Đánh giá
        </CustomMuiButton>
      </Box>
    </Box>
  );
};

export default ProductComment;
