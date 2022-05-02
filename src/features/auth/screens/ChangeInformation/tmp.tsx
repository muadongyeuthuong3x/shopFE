import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import { useAppSelector } from '../../../../app/hooks';
import { RootState } from 'app/store';
import { InputField } from 'components';
import { RegisterPayload, registerSchema } from 'features/auth/auth';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

export interface ChangeInformationFormProps {
  initialValues?: RegisterPayload;
  onSubmit?: (formValues: RegisterPayload) => void;
}

const ChangeInformationForm: FC<ChangeInformationFormProps> = ({ initialValues, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(registerSchema),
  });
  
  const userInfor = useAppSelector((state: RootState) => state.auth.currentUser);
  const handleFormSubmit = (formValues: RegisterPayload) => {
    console.log('formValues');
    console.log(formValues);
    formValues.fullName = `${formValues.firstName} ${formValues.lastName}`;
    delete formValues.confirmPassword;
  };

  return (
    <Box width="500px" padding="50px" margin="auto">
      <Box width="95%" margin="0 auto" textAlign="center">
        <Typography
          component="h2"
          variant="h6"
          textTransform="uppercase"
          paddingTop="20px"
          fontSize="16px"
          letterSpacing="0.2em"
        >
          Thay đổi thông tin
        </Typography>

        <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
          <Box display="flex">
            <Box mr={2}>
              <InputField control={control} label="Họ" name="firstName" />
            </Box>
            <Box>
              <InputField control={control} label="Tên" name="lastName" />
            </Box>
          </Box>
          <InputField control={control} label="Email" name="email" value={userInfor?.email}  />
          <InputField control={control} label="Số điện thoại" name="phoneNumber"  value={userInfor?.phoneNumber} />
          <InputField control={control} label="Địa chỉ" name="address" value={userInfor?.address} />

          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={(theme) => ({
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.secondary.contrastText,
              letterSpacing: '2px',
              padding: '10px 40px',
              marginTop: theme.spacing(3),

              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
              },
            })}
          >
            Thay đổi thông tin
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangeInformationForm;
