import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import './style.css';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div>
      <div className="content-container">
        <div>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>

        <div className="posts-container">
          <Posts setCurrentId={setCurrentId} />
        </div>
     </div>
    </div>
  )
}

export default Home
