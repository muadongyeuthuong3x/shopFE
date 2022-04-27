import { Box, Breadcrumbs, Container, Theme, Typography } from '@mui/material';
import { BlogEnumPath } from 'features/blog/blog';
import { HomeEnumPath } from 'features/home/home';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import BlogImage from 'assets/image/blog.png';

const BlogDetailsPage: FC = () => {
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
            Help You Have Comfortable Steps
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box>
        <Box height="500px" position="relative">
          <img src={BlogImage} alt="" width="100%" height="100%" />
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
              Help You Have Comfortable Steps
            </Typography>
          </Box>
        </Box>
        <Box mt={4}>
          <Typography lineHeight="28px" color="#a8a8a8">
            Sports shoes are shoes used in sports activities or used when exercising to improve
            health. Now, sports shoes are also used in daily activities such as going to work,
            school, going out, ... because of its convenience and fashion. It is no coincidence that
            sports shoes are created and used every time you exercise or exercise. The reason is
            that compared to other types of shoes, sports shoes carry more superior features, so
            they are more suitable for movement and training. Sports shoes are always designed to be
            smooth, comfortable, cool and ensure maximum safety for the feet. It is important that
            sports shoes also provide perfect support and support for the feet when exercising.
            Today, sports shoes not only integrate many great features, but also focus on style and
            color. That is the reason that the range of uses of sports shoes is increasingly wide,
            they are used in all activities and fashion purposes. You can see the outfits from
            young, dynamic to elegant and luxurious with sneakers anywhere on the street. It can be
            seen that the spread and influence of sports shoes in the fashion industry is
            undeniable.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogDetailsPage;
