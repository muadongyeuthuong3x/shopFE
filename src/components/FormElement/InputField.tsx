import { styled, TextField } from '@mui/material';
import { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';

const CustomTextField = styled(TextField)((props) => ({
  '& label.Mui-focused': {
    color: props.theme.palette.secondary.contrastText,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ced4da',
    },
    '&.Mui-focused fieldset': {
      border: '1px solid #ced4da',
    },
  },
}));

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
  multiline?: boolean;
  rows?: number;
}

export function InputField({
  name,
  label,
  control,
  multiline,
  rows,
  ...inputProps
}: InputFieldProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({ name, control });

  return (
    <CustomTextField
      fullWidth
      margin="normal"
      variant="outlined"
      multiline={multiline}
      rows={rows}
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      inputProps={inputProps}
      error={invalid}
      helperText={error?.message}
    />
  );
}
