import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';

import { getPosts } from './actions/posts';
//import logo from './images/';
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
   <div className="app-container">
     <header>
       <h1 className="app-name">Jakebook</h1>
     </header>
     <div className="content-container">

        <div>
          <Form />
        </div>

        <div className="posts-container">
          <Posts />
        </div>
        
     </div>
   </div>
  )
}

export default App;