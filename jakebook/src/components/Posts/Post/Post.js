import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './post.css';



const Post = ({ post }) => {
  return (
    <div className="post-container">

      <div className="post-header" >
        <div className="creater-age" >
          <h1 className="post-creator">{post.creator}</h1>
          <h1 className="post-age" >{moment(post.createdAt).fromNow()}</h1>
        </div>
        <FontAwesomeIcon icon={faEllipsisV} className="more-btn" onClick={() => {}}/>
      </div>
      <hr />
      <h1 className="post-title">{post.title}</h1>
      <h1 className="post-message" >"{post.message}"</h1>
      <h3 className="tags" >{post.tags.split(",").map((tag) => `#${tag} `)}</h3>
        
      <div className="btns">
        <div>
          <FontAwesomeIcon icon={faThumbsUp} className="thumbs-up" onClick={() => {}}/>
          {post.likeCount} Likes
        </div>
        <FontAwesomeIcon icon={faTrashAlt} className="delete" onClick={() => {}}/>
      </div>
      

    </div>
  );
}

export default Post;