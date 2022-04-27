import { RegisterPayload } from 'features/auth/auth';
import { FC } from 'react';
import RegisterForm from './RegisterForm';

const RegisterPage: FC = () => {
  const handleRegister = (formValues: RegisterPayload) => {};

  const intialValues: RegisterPayload = {
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
  };

  return <RegisterForm onSubmit={handleRegister} initialValues={intialValues} />;
};

export default RegisterPage;
