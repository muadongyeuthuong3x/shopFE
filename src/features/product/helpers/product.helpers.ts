import * as yup from 'yup';

export const commentSchema = yup.object().shape({
  content: yup
    .string()
    .required('Please enter your comment')
    .min(3, 'Please enter at least 3 characters'),
});
