import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
//import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import './form.css';

const Form = ({ currentId, setCurrentId}) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const dispatch = useDispatch();

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({ 
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
     });
  }

  return (
    <div className="form-container">
      <h1 className="form-label">{currentId ? 'Editing' : 'Create New' } Post</h1>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="creator" 
          label="Creator"
          placeholder="Creator"
          required
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator:e.target.value })} 
        />
        
        <input 
          type="text" 
          name="title" 
          label="Title"
          placeholder="Title"
          required
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title:e.target.value })} 
        />
        <input 
          type="text" 
          name="message" 
          label="Message"
          placeholder="Message"
          required
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message:e.target.value })} 
        />
        <input 
          type="text" 
          name="tags" 
          label="Tags"
          placeholder="Tags (seperate with commas)"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags:e.target.value })} 
        />
        <div>
          <FileBase 
            className="file-select-btn"
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})} 
          />
        </div>
        <div className="button-container">
          <button className="submit-btn" type="submit"><FontAwesomeIcon icon={faPlus} /></button>
          
          <button className="clear-btn"  type="reset" onClick={clear}><FontAwesomeIcon icon={faBan} /></button>
        </div>
      </form>
    </div>
  );
}

export default Form;
