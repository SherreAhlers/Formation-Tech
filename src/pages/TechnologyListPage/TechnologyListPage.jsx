import React from 'react';
import TechnologyListItem from '../../components/TechnologyListItem/TechnologyListItem';

function TechnologyListPage(props) {
  return (
    <>
      {!props.user ? (
        <></>
      ) : (
        <>
        <h1>Technology List</h1>
        <div className='TechnologyListPage-grid'>
          {props.technologies.map(technology => 
            <TechnologyListItem
              technology={technology}
            />
          )}
        </div>
        </>
      )}
    </>
  );
}

export default TechnologyListPage;