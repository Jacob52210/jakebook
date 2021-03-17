import React from 'react';
import Post from './Post/Post.js'
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (

    // If posts.length is 0 it would be "not zero ( !0 )". By default zero is truthy, so not zero is falsey.
    // If falsey, it will render the h1 tag. If truthy, it will map all the posts.

    posts.length === 0 ? <h1>No Posts Yet</h1> : (
      <div className="posts-container">
        {posts.map((post) => (
          <div className="single-post" key={post._id} item>
            <Post post={post} setCurrentId={setCurrentId} />
          </div>
        ))}
      </div>
    )
  );
}

export default Posts;