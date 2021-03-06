import React from 'react';
import { Link } from 'react-router-dom';
import './RocketCard.css';
import stockPhoto from '../assets/stock-photo.jpg';

// using router, is there a better way to filter for one launch in an array of launches instead of passing down all the data and filtering here?
function RocketCard({rocket}) {

  return (
    <article 
      className="rocket-card"
      style={{backgroundImage: `url(${rocket.image || stockPhoto})`}}
    >
      <section className="rocket-content">
        <p className="start-time">
          {rocket.window_start}
        </p>
        <h2 className="rocket-name">
          {rocket.name}
        </h2>
        <Link to={`/${rocket.slug}`} aria-label={rocket.name}>
          <h3 className="more-info">
            More Info
          </h3>
        </Link>
      </section>
    </article>
  );
}


export default RocketCard;