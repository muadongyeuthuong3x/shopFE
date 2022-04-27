import { Container, Typography } from '@mui/material';
import { FC } from 'react';
import BlogItem from './BlogItem';
import Widget from './Widget';

const BlogList: FC = () => {
  return (
    <Container maxWidth="xl">
      <Widget title="Tin tức" buttonTitle="blog" buttonOption={false}>
        <BlogItem />
      </Widget>
    </Container>
  );
};

export default BlogList;
