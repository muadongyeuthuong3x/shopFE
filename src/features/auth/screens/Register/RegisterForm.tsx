import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import Logo from 'assets/image/logo.png';
import { InputField, PasswordField } from 'components';
import { AuthEnumsPath, RegisterPayload, registerSchema } from 'features/auth/auth';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

export interface RegisterFormProps {
  initialValues?: RegisterPayload;
  onSubmit?: (formValues: RegisterPayload) => void;
}

const RegisterForm: FC<RegisterFormProps> = ({ initialValues, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(registerSchema),
  });

  const handleFormSubmit = async (formValues: RegisterPayload) => {
    formValues.fullName = `${formValues.firstName} ${formValues.lastName}`;
    // delete formValues.confirmPassword;
    console.log(formValues)
    try {

      var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      if (vnf_regex.test(formValues.phoneNumber) == false) {
        toast.error("Số điện thoại không hợp lệ")
      } else if (formValues.password !== formValues.confirmPassword) {

      } else {
        const form = {

          address: formValues.address,
          email: formValues.email,
          fullName: formValues.fullName,
          password: formValues.password,
          phoneNumber: formValues.phoneNumber,
          active:1
        }

        const res: any = await axios.post("http://localhost:5000/api/auth/register", form)
        toast.success(res.data.message)
      }
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  };

  return (
    <Box width="500px" padding="50px" margin="auto">
      <Box width="95%" margin="0 auto" textAlign="center">
        <Box paddingBottom="20px" borderBottom="1px solid #ccc">
          <img src={Logo} alt="logo" width={160} />
        </Box>

        <Typography
          component="h2"
          variant="h6"
          textTransform="uppercase"
          paddingTop="20px"
          fontSize="16px"
          letterSpacing="0.2em"
        >
          Đăng ký
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
          <InputField control={control} label="Email" name="email" />
          <InputField control={control} label="Số điện thoại" name="phoneNumber" />
          <InputField control={control} label="Địa chỉ" name="address" />
          <PasswordField control={control} label="Mật khẩu" name="password" />
          <PasswordField control={control} label="Nhập lại mật khẩu" name="confirmPassword" />

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
            Đăng ký
          </Button>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="30px"
          padding="10px"
          bgcolor="#f2f2f2"
          border="1px solid #e8eced"
          fontSize="14px"
          sx={(theme) => ({
            '&>a': {
              color: theme.palette.secondary.main,
              textDecoration: 'none',
              marginLeft: '8px',
            },
          })}
        >
          <Typography variant="body1">Đã có tài khoản?</Typography>
          <Link to={AuthEnumsPath.LOGIN}>Đăng nhập</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterForm;
