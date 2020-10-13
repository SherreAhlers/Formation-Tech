import React from 'react';
import TechnologyCard from '../../components/TechnologyCard/TechnologyCard';
import '../TechnologyDetailPage/TechnologyDetailPage.css';


function TechnologyDetailPage(props) {
  // Refer to PuppyListItem to see how puppy is being passed via the <Link>
  const technology = props.location.state.technology;
  return (
    <>
      <h1 className="details-page">Technology Details</h1>
      <div className="card" id="detail">
      <TechnologyCard id="detail-card"
        key={technology._id}
        technology={technology}
      />
      </div>
    </>
  );
}

export default TechnologyDetailPage;