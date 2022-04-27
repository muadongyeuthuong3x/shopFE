import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import { InputField } from 'components';
import { RegisterPayload, registerSchema } from 'features/auth/auth';
import { FC } from 'react';
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

  const handleFormSubmit = (formValues: RegisterPayload) => {
    formValues.fullName = `${formValues.firstName} ${formValues.lastName}`;
    delete formValues.confirmPassword;
    console.log(formValues);
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
          <InputField control={control} label="Email" name="email" />
          <InputField control={control} label="Số điện thoại" name="phoneNumber" />
          <InputField control={control} label="Địa chỉ" name="address" />

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
