import { FC, useEffect, useState } from 'react';
import BlogItem from './BlogItem';
import {api} from './../../../api/api';

const BlogList: FC = () => {
  const [list, setList] = useState();
  useEffect( ()=>{
    const getBlog= async() =>{
      const res= await api.get('blog/all');
      console.log(res.data.blogs.rows)
      if(res?.data)
      setList(res.data.blogs.rows)
    }
    getBlog()
  },[])
  return (
    <>
      <BlogItem blogList={list} />
    </>
  );
};

export default BlogList;
