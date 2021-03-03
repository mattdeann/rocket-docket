import React from 'react';
import './CardContainer.css';
import RocketCard from '../RocketCard/RocketCard';

function CardContainer() {

  return (
    <main className="card-container">
      <RocketCard />
      <RocketCard />
      <RocketCard />
      <RocketCard />
      <RocketCard />
      <RocketCard />
      
    </main>
  );
}


export default CardContainer;