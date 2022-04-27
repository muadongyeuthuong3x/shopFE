import { FC } from 'react';
import BlogItem from './BlogItem';

const BlogList: FC = () => {
  return (
    <>
      <BlogItem blogList={[1, 2, 3, 4, 5, 6]} />
    </>
  );
};

export default BlogList;
