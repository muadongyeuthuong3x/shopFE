import { Search } from '@mui/icons-material';
import { Box, Breadcrumbs, Button, Container, TextField, Typography } from '@mui/material';
import { HomeEnumPath } from 'features/home/home';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogList from '../components/BlogList';

const BlogPage: FC = () => {
  const [keyword, setKeyword] = useState<string>('');

  return (
    <>
      <Box
        width="100%"
        height="200px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: '#dbdbdb',
          '& a': {
            textDecoration: 'none',
            color: 'inherit',
            fontSize: '16px',
            '&:hover': { color: (theme) => theme.palette.secondary.main },
          },
        }}
      >
        <Typography fontSize="40px" fontWeight={500} letterSpacing={2} marginBottom="15px">
          Blog
        </Typography>
        <Breadcrumbs>
          <Link to={HomeEnumPath.HOMEPAGE}>Trang chủ</Link>
          <Typography fontWeight={500} variant="body1">
            Blog
          </Typography>
        </Breadcrumbs>
      </Box>

      <Container maxWidth="xl" sx={{ display: 'flex' }}>
        <Box
          flex="0 0 25%"
          maxWidth="25%"
          paddingRight="30px"
          display="flex"
          alignItems="flex-start"
          marginTop="40px"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 0,
              height: '40px',
              '&.Mui-focused': {
                border: '1px solid #000000',
              },
              '& input': {
                height: '40px',
                padding: '0 16px',
              },
            },
          }}
        >
          <TextField
            name="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            fullWidth
            placeholder="Từ khoá..."
          />
          <Button
            variant="contained"
            sx={(theme) => ({
              boxShadow: 'none',
              borderLeft: 'none',
              height: '40px',
              borderRadius: 0,
              backgroundColor: theme.palette.primary.contrastText,
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.contrastText,
                color: theme.palette.primary.main,
                boxShadow: 'none',
              },
            })}
          >
            <Search />
          </Button>
        </Box>
        <Box flex="0 0 75%" maxWidth="75%">
          <BlogList />
        </Box>
      </Container>
    </>
  );
};

export default BlogPage;
