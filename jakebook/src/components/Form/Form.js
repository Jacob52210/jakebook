import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts'
import './form.css';

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  }

  const clear = () => {

  }

  return (
    <div className="form-container">
      <h1 className="form-label">Create New Post: </h1>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="creator" 
          label="Creator"
          placeholder="Creator"
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator:e.target.value })} 
        />
        
        <input 
          type="text" 
          name="title" 
          label="Title"
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title:e.target.value })} 
        />
        <input 
          type="text" 
          name="message" 
          label="Message"
          placeholder="Message"
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message:e.target.value })} 
        />
        <input 
          type="text" 
          name="tags" 
          label="Tags"
          placeholder="Tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags:e.target.value })} 
        />
        <div>
          <input 
            className="file-select-btn"
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
          />
        </div>
        <div className="button-container">
          <button type="submit">Submit</button>
          <button className="clear-btn" onClick={clear}>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default Form;