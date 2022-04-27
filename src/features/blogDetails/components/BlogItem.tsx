import { Box, Typography } from '@mui/material';
import { Blog } from '../../../constants';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import BlogImage from 'assets/image/blog.png';

export interface BlogItemProps {
  blogList?: Blog[] | any;
}

const BlogItem: FC<BlogItemProps> = ({ blogList }) => {
  return (
    <>
      {blogList?.map((blog: any, index: any) => (
        <Box display="flex" padding="40px 0" borderBottom="1px solid #eaeaea" key={index}>
          <Box
            position="relative"
            overflow="hidden"
            width="50%"
            sx={{
              '& img': { transition: '0.5s', transform: 'scale(1.05)' },
              '&:hover img': { transition: '0.5s', transform: 'scale(1)' },
            }}
          >
            <Link to="">
              <img src={BlogImage} alt="" width="100%" />
            </Link>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            width="50%"
            paddingLeft="30px"
            sx={(theme) => ({
              '& a': {
                color: 'inherit',
                textDecoration: 'none',
              },
              '& a:first-child': {
                fontSize: '24px',
                fontWeight: 500,
                color: theme.palette.primary.contrastText,
                display: 'inline-block',

                '&:hover': {
                  color: theme.palette.secondary.main,
                },
              },
              '& a:last-child': {
                paddingBottom: '5px',
                marginTop: '12px',
              },
            })}
          >
            <Link to="">Help You Have Comfortable Steps</Link>
            <Typography color="#a8a8a8" fontSize="15px" margin="5px 0 15px" lineHeight="24px">
              Sports shoes are shoes used in sports activities or used when exercising to improve
              health. Now, sports shoes...
            </Typography>
            <Typography fontSize="12px" textTransform="uppercase" color="#aaa" fontWeight={500}>
              AUG 31,2021
            </Typography>
            <Link to="">
              <Typography
                variant="caption"
                fontSize="14px"
                position="relative"
                display="inline-block"
                sx={(theme) => ({
                  '&:hover': {
                    color: theme.palette.secondary.main,
                  },
                  '&:hover:after': {
                    backgroundColor: theme.palette.secondary.main,
                  },
                  '&:after': {
                    content: '""',
                    width: '100%',
                    height: '1px',
                    backgroundColor: theme.palette.secondary.contrastText,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                  },
                })}
              >
                Readmore
              </Typography>
            </Link>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default BlogItem;
