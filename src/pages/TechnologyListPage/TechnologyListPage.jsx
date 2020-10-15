import React from 'react';
import TechnologyListItem from '../../components/TechnologyListItem/TechnologyListItem';
import '../TechnologyListPage/TechnologyListPage.css';


function TechnologyListPage(props) {
  return (
    <>
      {!props.user ? (
        <></>
      ) : (
        <>
        <h1>Technology List</h1>
        <div className="TechnologyListPage">
        <div className="container">
          <div className="card">
          {props.technologies ? props.technologies.map(technology => 
            <TechnologyListItem
              owner={technology.owner}
              technology={technology}
              handleDeleteTechnology={props.handleDeleteTechnology}
              key={technology._id}
            />
            ) : ''} 
          </div>
          </div>
          </div>
        </>
      )}
    </>
  );
}

export default TechnologyListPage;