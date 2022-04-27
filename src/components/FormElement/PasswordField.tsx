import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText, styled } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { HTMLAttributes, useState } from 'react';
import { Control, useController } from 'react-hook-form';

const CustomTextField = styled(OutlinedInput)({
  '& fieldset': {
    borderColor: '#ced4da',
  },
  '&.Mui-focused.MuiInputBase-root fieldset': {
    borderColor: '#ced4da',
  },
});

export interface PasswordFieldProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;

  label?: string;
}

export function PasswordField({ name, control, label, ...inputProps }: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({ name, control });

  const handleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <FormControl variant="outlined" fullWidth margin="normal" error={invalid}>
      <InputLabel
        htmlFor={`${name}_label`}
        sx={{ '&.Mui-focused': { color: (theme) => theme.palette.secondary.contrastText } }}
      >
        {label}
      </InputLabel>
      <CustomTextField
        id={`${name}_label`}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label={label}
        inputRef={ref}
        inputProps={inputProps}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShowPassword}
              edge="end"
            >
              {!showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
