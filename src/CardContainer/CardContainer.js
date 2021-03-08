import React from 'react';
import PropTypes from 'prop-types';
import './CardContainer.css';
import RocketCard from '../RocketCard/RocketCard';

function CardContainer({rocketData}) {

  let rocketCards;
  
  if (rocketData.length > 0) {
      rocketCards = rocketData.map(rocket => {
      return (
        <RocketCard
          key={rocket.slug} 
          image={rocket.image}
          name={rocket.name}
          window_start={rocket.window_start}
          slug={rocket.slug}
        />
      )
      
    })
  } else {
    rocketCards = <p className="no-results-message">No rocket launches match that search. Sorry!</p>
  }

  return (
    <main className="card-container">
      {/* {newsCards} */}
      {rocketCards}
    </main>
  );
}

CardContainer.propTypes = {
  rocketData: PropTypes.array
}


export default CardContainer;