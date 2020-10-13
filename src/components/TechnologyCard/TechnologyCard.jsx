import React from 'react';
import {Link} from 'react-router-dom';
import '../TechnologyCard/TechnologyCard.css';


function TechnologyCard({technology}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{technology.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt id="detail-description">Description</dt>
          <dd>{technology.description}</dd>
          <dt id="detail-img">Image</dt>
          <dd>{technology.image}</dd>
          <dt id="detail-infoURL">Information URL</dt>
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