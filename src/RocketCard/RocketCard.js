import React from 'react';
import './RocketCard.css';
import stockPhoto from '../assets/stock-photo.jpg';


function RocketCard({data}) {

  return (
    <article 
      className="rocket-card"
      style={{backgroundImage: `url(${data.image || stockPhoto})`}}
    >
      <section className="rocket-content">
        <p>
          {data.net}
        </p>
        <h2>
          {data.name}
        </h2>
        <h3 className="more-info">
          More Info
        </h3>
      </section>
    </article>
  );
}


export default RocketCard;