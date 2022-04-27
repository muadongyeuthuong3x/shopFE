import { Box, Grid } from '@mui/material';
import { keyframes } from '@mui/system';
import { FC } from 'react';
import { galleryImages } from '../home';

const shine = keyframes`
  100% {
    left: 125%;
  }
`;

const Gallery: FC = () => {
  return (
    <Grid container spacing={1} marginTop="30px">
      {galleryImages.map((gallery, index) => (
        <Grid
          key={index}
          item
          md={2}
          lg={2}
          xl={2}
          sx={{
            '&:hover > div::before': {
              animation: `${shine} 1.1s`,
            },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                position: 'absolute',
                top: 0,
                left: '-100%',
                zIndex: 1,
                display: 'block',
                content: '""',
                width: '50%',
                height: '100%',
                background:
                  'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%)',
                transform: 'skew(-25deg)',
              },
            }}
          >
            <img src={gallery} alt="" width="100%" height="100%" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;
