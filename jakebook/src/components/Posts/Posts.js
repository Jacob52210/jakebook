import React from 'react';
import Post from './Post/Post.js'
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts); // Keep this one for now.

  return (
    <>
      <h1>All Posts</h1>
      <Post />
      <Post />
    </>
  );
}

export default Posts;