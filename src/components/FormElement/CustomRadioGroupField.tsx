import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Control, useController } from 'react-hook-form';

export interface CustomRadioOption {
  label: string;
  value: number | string;
}

export interface CustomRadioGroupFieldProps {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
  options: number[];
}

export function CustomRadioGroupField({
  name,
  control,
  label,
  disabled,
  options,
}: CustomRadioGroupFieldProps) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl
      component="fieldset"
      margin="normal"
      error={invalid}
      disabled={disabled}
      sx={{ marginBottom: 0, marginTop: 0, height: '42px' }}
    >
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        sx={{ flexDirection: 'row' }}
      >
        {options.map((option) => (
          <FormControlLabel
            sx={{ marginLeft: 0, marginRight: 0 }}
            control={
              <Radio
                sx={(theme) => ({
                  display: 'none',
                  '& + span': {
                    color: theme.palette.primary.contrastText,
                    display: 'block',
                    width: '42px',
                    height: '42px',
                    border: '1px solid #ced4da',
                    marginRight: '15px',
                    lineHeight: '42px',
                    textAlign: 'center',
                    borderRadius: '4px',
                  },
                  '&.Mui-checked + span': {
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.primary.main,
                    border: `1px solid ${theme.palette.secondary.main}`,
                  },
                })}
              />
            }
            // key={option.value}
            // value={option.value}
            // label={option.label}
            key={option}
            value={option}
            label={option}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
