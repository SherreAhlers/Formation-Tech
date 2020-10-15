import React from 'react';
import {Link} from 'react-router-dom';
import '../CommentCard/CommentCard.css';
import AddCommentPage from '../../pages/AddCommentPage/AddCommentPage';


function CommentCard(props) {
  return ( 
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{ props.comments }</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dd>{props.comments}</dd>
        </dl>
      </div>
      <AddCommentPage  
      comments={props.comments}
      handleAddComment={props.handleAddComment}
      technology={props.technology} />
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div> 
  
  )};


export default CommentCard;