import React from 'react';
import TechnologyCard from '../../components/TechnologyCard/TechnologyCard';

function TechnologyDetailPage(props) {
  // Refer to PuppyListItem to see how puppy is being passed via the <Link>
  const technology = props.location.state.technology;
  return (
    <>
      <h1>Technology Details</h1>
      <TechnologyCard
        key={technology._id}
        technology={technology}
      />
    </>
  );
}

export default TechnologyDetailPage;