import React from 'react';
import {Link} from 'react-router-dom';


function TechnologyListItem({technology}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{technology.name}</h3>
      </div>
      <div className='panel-footer TechnologyListItem-action-panel'>
      <Link
          className='btn btn-xs btn-info'
          to={{
            pathname: '/details',
            state: {technology}
          }}
        >
          DETAILS
        </Link>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {technology}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteTechnology(technology._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default TechnologyListItem;