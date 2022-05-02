import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import { useAppSelector } from '../../../../app/hooks';
import { RootState } from 'app/store';
import { InputField } from 'components';
import { RegisterPayload, registerSchema, updateUserSchema } from 'features/auth/auth';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from 'api/api';
import { toast, ToastContainer } from 'react-toastify';

export interface ChangeInformationFormProps {
  initialValues?: RegisterPayload;
  onSubmit?: (formValues: RegisterPayload) => void;
}

const ChangeInformationForm: FC<ChangeInformationFormProps> = ({ initialValues, onSubmit }) => {
  // const [data, setData] = useState();
  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(updateUserSchema),
  });
  
  const userInfor = useAppSelector((state: RootState) => state.auth.currentUser);

  const handleFormSubmit =async (formValues: RegisterPayload) => {
    formValues.firstName= formValues?.firstName? formValues?.firstName: userInfor?.fullName?.split(" ")[0];
    formValues.lastName= formValues?.lastName? formValues?.lastName: userInfor?.fullName?.split(" ").slice(1,3).join(" ");
    formValues.email= formValues?.email? formValues?.email: userInfor?.email+'';
    formValues.address= formValues?.address? formValues?.address: userInfor?.email+'';
    formValues.phoneNumber= formValues?.phoneNumber? formValues?.phoneNumber: userInfor?.email+'';
    formValues.fullName = `${formValues?.firstName} ${formValues?.lastName}`;
    console.log('formValues');
    console.log(formValues);
    delete formValues.lastName;
    delete formValues.firstName;

    console.log(formValues);
    try {
      const res = await api.post('user/updateMe', formValues);
      if(res){
        toast.success('Cập nhật thông tin thành công!')
      }
    } catch (error) {
      toast.error('Cập nhật thông tin không thành công!')
    }
  };

  if(userInfor)
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
              <InputField control={control} label="Họ" name="firstName" defaultValue={userInfor?.fullName?.split(" ")[0]} />
            </Box>
            <Box>
              <InputField control={control} label="Tên" name="lastName" defaultValue={userInfor?.fullName?.split(" ").slice(1,3).join(" ")} />
            </Box>
          </Box>
          <InputField control={control} label="Email" name="email" defaultValue={userInfor? userInfor.email:'xx'}  />
          <InputField control={control} label="Số điện thoại" name="phoneNumber" defaultValue={userInfor?.phoneNumber}  />
          <InputField control={control} label="Địa chỉ" name="address" defaultValue={userInfor?.address} />

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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
      />
    </Box>
  )
  else return(
    <></>
  )
};

export default ChangeInformationForm;
