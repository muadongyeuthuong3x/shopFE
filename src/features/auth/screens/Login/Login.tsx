import { LoginPayload } from 'features/auth/auth';
import { FC } from 'react';
import LoginForm from './LoginForm';

const LoginPage: FC = () => {
  const handleLogin = (formValues: LoginPayload) => {};

  const intialValues: LoginPayload = {
    email: '',
    password: '',
  };

  return <LoginForm onSubmit={handleLogin} initialValues={intialValues} />;
};

export default LoginPage;
