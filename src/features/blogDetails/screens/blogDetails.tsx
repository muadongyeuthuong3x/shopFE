import { Box, Breadcrumbs, Container, Theme, Typography } from '@mui/material';
import { BlogEnumPath } from 'features/blog/blog';
import { HomeEnumPath } from 'features/home/home';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BlogImage from 'assets/image/blog.png';
import { api } from 'api/api';

const BlogDetailsPage: FC = () => {
  const [data, setData] = useState<any>()
  const path:any = useParams();
  const blogId= path?.slug
  useEffect(()=>{
    const getBlog= async ()=>{
      try {
         const res = await api.get("blog/"+blogId)
        console.log(res)
        if(res?.data){
          setData(res.data.blog)
        }
      } catch (error) {
        console.log("lỗi blog get!")
      }
    }
    getBlog()
  },[])
  return (
    <Container maxWidth="xl">
      <Box padding="20px 0">
        <Breadcrumbs
          sx={{
            '& a': {
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { color: (theme: Theme) => theme.palette.secondary.main },
            },
          }}
        >
          <Link to={HomeEnumPath.HOMEPAGE}>Trang chủ</Link>
          <Link to={BlogEnumPath.BLOG}>Tin tức</Link>
          <Typography fontWeight={500} variant="body1" color="secondary">
           {data?.title}
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box>
        <Box height="500px" position="relative">
          <img src={data?.image} alt="" width="100%" height="100%" />
          <Box
            position="absolute"
            bottom={0}
            width="100%"
            padding="60px 15px 30px"
            sx={{ background: 'linear-gradient(180deg,transparent 0,rgba(0,0,0,.85))' }}
          >
            <Typography
              fontSize="36px"
              color="primary"
              textTransform="uppercase"
              fontWeight={500}
              align="center"
            >
              {data?.title}
            </Typography>
          </Box>
        </Box>
        <Box mt={4}>
          <Typography lineHeight="28px" color="#a8a8a8" dangerouslySetInnerHTML={{__html: data?.content}}>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogDetailsPage;
