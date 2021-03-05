import React from 'react';
import { Link } from 'react-router-dom';
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
          {data.window_start}
        </p>
        <h2>
          {data.name}
        </h2>
        <Link to={`/${data.id}`} aria-label={data.name}>
          <h3 className="more-info">
            More Info
          </h3>
        </Link>
      </section>
    </article>
  );
}


export default RocketCard;