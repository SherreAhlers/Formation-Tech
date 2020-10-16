import React from 'react';
import CommentCard from '../../components/CommentCard/CommentCard';



function TechnologyCommentPage(props) {
    const comments = props.location.state.comments
    return (
        <>
 <h1 className="comments-page">Comments</h1>
      <div className="card" id="comment-card">
          {console.log('THIS SPOTTTTT', comments)}
        <CommentCard id="comments-card"
        comments={comments}
        user={props.user}
        handleAddComment={props.handleAddComment}
        technology={props.location.state.technology}
        />
        </div>
        </>
    );
} 

export default TechnologyCommentPage; 