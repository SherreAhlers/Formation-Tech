import React from 'react';
import {Link} from 'react-router-dom';

function TechnologyCard({technology}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{technology.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Description</dt>
          <dd>{technology.description}</dd>
          <dt>Owner</dt>
          <dd>{technology.owner}</dd>
          <dt>Image</dt>
          <dd>{technology.image}</dd>
          <dd>{technology.infoURL}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default TechnologyCard;