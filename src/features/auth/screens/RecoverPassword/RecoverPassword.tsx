import { RecoverPasswordPayload } from 'features/auth/auth';
import { FC } from 'react';
import RecoverPasswordForm from './RecoverPasswordForm';

const RecoverPasswordPage: FC = () => {
  const initialValues: RecoverPasswordPayload = {
    password: '',
    confirmPassword: '',
  };

  const handleRecoverPassword = (formValues: RecoverPasswordPayload) => {};

  return <RecoverPasswordForm initialValues={initialValues} onSubmit={handleRecoverPassword} />;
};

export default RecoverPasswordPage;
