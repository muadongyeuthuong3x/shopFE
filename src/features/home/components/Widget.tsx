import { Box, Button, Typography } from '@mui/material';
import { FC, memo, useState } from 'react';

export interface WidgetProps {
  title: string;
  children: any;
  buttonTitle?: string;
  buttonOption?: boolean;
  onShowMore?:(page:number)=>void
}

const Widget: FC<WidgetProps> = ({ title, children, buttonTitle, buttonOption = true, onShowMore }) => {
  const [page,setPage]= useState(1);
  const handleShowmore=()=>{
    setPage(pre=>pre+1)
    if(onShowMore)
    onShowMore(page)
  }
  return (
    <Box marginTop="90px">
      <Box textAlign="center">
        <Typography
          component="h3"
          variant="h5"
          textTransform="uppercase"
          paddingBottom="10px"
          letterSpacing={1}
          position="relative"
          mb={3}
          color="#222222"
          lineHeight={1.2}
          display="inline-block"
          sx={{
            '&::before': {
              content: '""',
              width: '50%',
              height: '2px',
              background: (theme) => theme.palette.secondary.main,
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: 0,
            },
          }}
        >
          {title}
        </Typography>
      </Box>
      {buttonOption && (
        <Box textAlign="center" marginBottom="50px">
          <Button
            sx={(theme) => ({
              minWidth: '110px',
              height: '42px',
              border: `1px solid ${theme.palette.secondary.main}`,
              color: theme.palette.secondary.main,
              padding: '0 15px',
              transition: 'all .25s ease-out',

              '&:hover': {
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.secondary.main,
              },
            })}
            onClick={handleShowmore}
          >
            {buttonTitle}
          </Button>
        </Box>
      )}
      <Box marginBottom="30px" marginTop={buttonOption ? 0 : '30px'}>
        {children}
      </Box>
    </Box>
  );
};

export default memo(Widget);
