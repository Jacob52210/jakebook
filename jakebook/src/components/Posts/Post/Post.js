import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
//import { faImage } from '@fortawesome/free-solid-svg-icons';      Use if no file is uploaded. Still gotta figure out code.
import { deletePost, likePost } from '../../../actions/posts';
import './post.css';



const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();



  const bgimg = {
    backgroundImage: `url( ${post.selectedFile} )`,
    backgroundPosition: 'center center',
  }

  return (
    <div className="post-container">
      
      <div className="post-header" style={bgimg} >
        <div className="creater-age" >
          <h1 className="post-creator">{post.creator}</h1>
          <h1 className="post-age" >{moment(post.createdAt).fromNow()}</h1>
        </div>
        <FontAwesomeIcon icon={faEdit} className="edit-btn" onClick={() => setCurrentId(post._id)}/>
      </div>
      
      <h1 className="post-title">{post.title}</h1>
      <h1 className="post-message" >"{post.message}"</h1>
      <h3 className="tags" >{post.tags.trim() === "" ? "No Tags" : post.tags.split(",").map((tag) => `#${tag} `)}</h3>
        
      <div className="btns">
        <div>
          <FontAwesomeIcon icon={faThumbsUp} className="thumbs-up" onClick={() => dispatch(likePost(post._id))}/>
          {post.likeCount} Likes
        </div>
        <FontAwesomeIcon icon={faTrashAlt} className="delete" onClick={() => dispatch(deletePost(post._id))} />
      </div>
      

    </div>
  );
}



export default Post;