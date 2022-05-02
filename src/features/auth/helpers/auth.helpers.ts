import * as yup from 'yup';
import { PASSWORD_LIMIT_CHARACTER } from '../auth';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Vui lòng nhập địa chỉ email của bạn')
    .email('Địa chỉ email không chính xác'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu của bạn')
    .min(
      PASSWORD_LIMIT_CHARACTER.MIN,
      `Mật khẩu phải chứa ít nhất ${PASSWORD_LIMIT_CHARACTER.MIN} ký tự`
    )
    .max(PASSWORD_LIMIT_CHARACTER.MAX, `Mật khẩu tối đa ${PASSWORD_LIMIT_CHARACTER.MAX} ký tự`),
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required('Vui lòng nhập địa chỉ email của bạn')
    .email('Địa chỉ email không chính xác'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu của bạn')
    .min(
      PASSWORD_LIMIT_CHARACTER.MIN,
      `Mật khẩu phải chứa ít nhất ${PASSWORD_LIMIT_CHARACTER.MIN} ký tự`
    )
    .max(PASSWORD_LIMIT_CHARACTER.MAX, `Mật khẩu tối đa ${PASSWORD_LIMIT_CHARACTER.MAX} ký tự`),
  firstName: yup.string().required('Vui lòng nhập họ của bạn'),
  lastName: yup.string().required('Vui lòng nhập tên của bạn'),
  address: yup.string().required('Vui lòng nhập địa chỉ của bạn'),
  phoneNumber: yup.string().required('Vui lòng nhập số điện thoại củ bạn'),
  confirmPassword: yup
    .string()
    .required('Vui lòng nhập mật khẩu của bạn')
    .oneOf([yup.ref('password')], 'Mật khẩu nhập lại không chính xác'),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required('Vui lòng nhập địa chỉ email của bạn')
    .email('Địa chỉ email không chính xác'),
});

export const recoverPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu của bạn')
    .min(
      PASSWORD_LIMIT_CHARACTER.MIN,
      `Mật khẩu phải chứa ít nhất ${PASSWORD_LIMIT_CHARACTER.MIN} ký tự`
    )
    .max(PASSWORD_LIMIT_CHARACTER.MAX, `Mật khẩu tối đa ${PASSWORD_LIMIT_CHARACTER.MAX} ký tự`),
  confirmPassword: yup
    .string()
    .required('Vui lòng nhập mật khẩu của bạn')
    .oneOf([yup.ref('password')], 'Mật khẩu nhập lại không chính xác'),
});


export const updateUserSchema = yup.object().shape({
 
});
