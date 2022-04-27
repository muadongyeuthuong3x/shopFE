import { ForgotPasswordPayload } from 'features/auth/auth';
import { FC } from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPasswordPage: FC = () => {
  const initialValues: ForgotPasswordPayload = {
    email: '',
  };

  const handleForgotPassword = (formValues: ForgotPasswordPayload) => {};

  return <ForgotPasswordForm initialValues={initialValues} onSubmit={handleForgotPassword} />;
};

export default ForgotPasswordPage;
