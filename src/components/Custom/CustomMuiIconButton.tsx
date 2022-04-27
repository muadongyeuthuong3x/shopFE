import { IconButton, Tooltip } from '@mui/material';
import { FC, MouseEventHandler } from 'react';

export interface CustomMuiIconButtonProps {
  children?: any;
  title: string;
  width?: string;
  height?: string;
  border?: string;
  margin?: string;
  padding?: string;
  boxShadow?: string;
  transition?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const CustomMuiIconButton: FC<CustomMuiIconButtonProps> = ({
  children,
  title,
  width,
  height,
  border,
  margin,
  padding,
  boxShadow,
  transition,
  onClick,
}) => {
  return (
    <Tooltip title={title} placement="top" arrow disableInteractive>
      <IconButton
        onClick={onClick}
        sx={(theme) => ({
          width,
          height,
          backgroundColor: theme.palette.primary.main,
          borderRadius: '50%',
          color: '#232529',
          padding: 0 || padding,
          margin,
          border,
          boxShadow,
          transition,
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
          },
        })}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};
