import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './RocketCard.css';
import stockPhoto from '../assets/stock-photo.jpg';

// using router, is there a better way to filter for one launch in an array of launches instead of passing down all the data and filtering here?
function RocketCard({rocket}) {
  let rocketImage;

  if (rocket.image) {
    rocketImage = rocket.image
  } else {
    rocketImage = stockPhoto
  }

  return (
    <article 
      className="rocket-card"
      style={{backgroundImage: `url(${rocketImage})`}}
    >
      <section className="rocket-content">
        <h2 className="thumbnail-rocket-name">
          {rocket.name}
        </h2>
        <p className="thumbnail-start-date">
          {rocket.window_start.slice(0, 10)}
        </p>
        <p className="thumbnail-start-time">
          {rocket.window_start.slice(10)}
        </p>
        <Link to={`/rocket-docket/${rocket.slug}`} aria-label={rocket.name}>
          <h3 className="more-info">
            More Info
          </h3>
        </Link>
      </section>
    </article>
  );
}

RocketCard.propTypes = {
  rocket: PropTypes.object
}


export default RocketCard;