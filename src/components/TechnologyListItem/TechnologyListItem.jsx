import React from 'react';
import {Link} from 'react-router-dom';
import '../TechnologyListItem/TechnologyListItem.css';

function TechnologyListItem({technology, handleDeleteTechnology, comments}) { 
  // if (props.owner === signed in user prop )
  // show delete button and edit button
  //else do not show delete or edit button
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{technology.name}</h3>
      </div>
      <div className='panel-footer TechnologyListItem-action-panel'>
      <Link
          className='btn btn-md' id="edit"
          to={{
            pathname: '/edit',
            state: {technology}
          }} 
        >
          EDIT
        </Link>
      <Link
          className='btn btn-md' id="details"
          to={{
            pathname: '/details',
            state: {technology}
          }}
        >
          DETAILS
        </Link> 
        <Link
          className='btn btn-md' id="comments-button"
          to={{
            pathname: '/comments',
            state: {technology, comments}
            
          }}
        >
          COMMENTS
        </Link> 
        <button
          className='btn btn-md' id="delete"
          onClick={() => handleDeleteTechnology(technology._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default TechnologyListItem;