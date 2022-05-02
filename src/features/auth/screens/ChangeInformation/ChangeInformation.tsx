import { RegisterPayload } from 'features/auth/auth';
import { FC } from 'react';
import ChangeInformationForm from './ChangeInformationForm';

const ChangeInformationPage: FC = () => {
  const handleChangeInformation = (formValues: RegisterPayload) => {};

  const intialValues: RegisterPayload = {
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
  };

  return <ChangeInformationForm />;
};

export default ChangeInformationPage;
