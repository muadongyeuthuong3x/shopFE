import { Button } from '@mui/material';
import { FC, MouseEventHandler } from 'react';

export interface CustomMuiButtonProps {
  children?: any;
  fullWidth?: boolean;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  margin?: string;
  padding?: string;
  height?: string;
}

export const CustomMuiButton: FC<CustomMuiButtonProps> = ({
  children,
  fullWidth,
  color,
  borderColor,
  backgroundColor,
  textColor,
  onClick,
  type,
  margin,
  padding,
  height,
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      sx={{
        backgroundColor: 'transparent',
        border: `1px solid ${borderColor}`,
        transition:
          'color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86), border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        color,
        height: height || '55px',
        margin,
        padding,

        '&::before': {
          position: 'absolute',
          content: '""',
          display: 'block',
          left: '-2px',
          top: 0,
          right: '-2px',
          bottom: 0,
          transform: 'scale(1, 1)',
          transformOrigin: 'left center',
          zIndex: -1,
          transition: 'transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86)',
          backgroundColor,
          borderRadius: '4px',
        },

        '&:hover::before': {
          transformOrigin: 'right center',
          transform: 'scale(0, 1)',
        },

        '&:hover': {
          color: textColor,
        },
      }}
    >
      {children}
    </Button>
  );
};
