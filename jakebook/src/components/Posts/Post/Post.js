import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './post.css';



const Post = ({ post }) => {
  return (
    <div className="post-container">

      <div className="post-header">
        <div className="creator-age" >
          <h1 className="post-creator">{post.creator}</h1>
          
          <h1 className="post-age" >{moment(post.createdAt).fromNow()}</h1>
          <FontAwesomeIcon icon={faEllipsisH} className="more-btn" onClick={() => {}}/>
        </div>
        <h1 className="post-title">{post.title}</h1>
      </div>

      <div className="post-body">
        <h1 className="post-message" >{post.message}</h1>
        <h3>{post.tags.map((tag) => `#${tag} `)}</h3>
        
        <div className="btns">

          <div>
            <FontAwesomeIcon icon={faThumbsUp} className="thumbs-up" onClick={() => {}}/>
            {post.likeCount} Likes
          </div>
          
          <FontAwesomeIcon icon={faTrashAlt} className="delete" onClick={() => {}}/>
          
        </div>
      </div>

    </div>
  );
}

export default Post;