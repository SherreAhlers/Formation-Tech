import React from 'react';
import CommentCard from '../../components/CommentCard/CommentCard';



function TechnologyCommentPage(props) {
    const comments = props.location.state.comments
    return (
        <>
 <h1 className="comments-page">Comments</h1>
      <div className="card" id="comment-card">
        <CommentCard id="comments-card"
        comments={comments}
        handleAddComment={props.handleAddComment}
        technology={props.location.state.technology}
        />
        {/* <Link
          className='btn btn-md' id="comemnts"
          to={{
            pathname: '/comment-add',
            state: {comments}
          }}
        >
          ADD COMMENT
        </Link>  */}
        </div>
        </>
    );
}

export default TechnologyCommentPage; 