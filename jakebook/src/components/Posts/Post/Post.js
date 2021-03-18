import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { deletePost, likePost } from '../../../actions/posts';
import './post.css';



const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  const bgImg = {
    backgroundImage: `url(${post.selectedFile})`
  }


  return (
    <div className="post-container">
      
      <div className="post-header" style={bgImg === "" ? "No Image" : bgImg } >
        <div className="creater-age" >
          <h1 className="post-creator">{post.creator}</h1>
          <h1 className="post-age" >{moment(post.createdAt).fromNow()}</h1>
        </div>
        <FontAwesomeIcon icon={faEdit} className="edit-btn" onClick={() => setCurrentId(post._id)}/>
      </div>
      <div className="post-body">
        <h1 className="post-title">{post.title.trim() === "" ? "No Title" : post.title.trim()}</h1>
        <h1 className="post-message" >"{post.message.trim() === "" ? "No Message" : post.message.trim()}"</h1>
        <h3 className="tags" >{post.tags.trim() === "" ? "No Tags" : post.tags.split(",").map((tag) => tag.trim() === "" ? "" : ` #${tag.trim()}` )}</h3>
          
        <div className="btns">
          <div>
            <FontAwesomeIcon icon={faThumbsUp} className="thumbs-up" onClick={() => dispatch(likePost(post._id))}/>
            {post.likeCount} Likes
          </div>
          <FontAwesomeIcon icon={faTrashAlt} className="delete" onClick={() => dispatch(deletePost(post._id))} />
        </div>
      </div>
    </div>
  );
}

// Like btn isn't updating immediatly. And remove console logs. It's logging twice with every submission.



export default Post;