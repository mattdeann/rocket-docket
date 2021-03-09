import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './RocketCard.css';
import stockPhoto from '../assets/stock-photo.jpg';

// using router, is there a better way to filter for one launch in an array of launches instead of passing down all the data and filtering here?
function RocketCard({image, name, window_start, slug}) {
  let rocketImage;

  if (image) {
    rocketImage = image
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
          {name}
        </h2>
        <p className="thumbnail-start-date">
          {window_start.slice(0, 10)}
        </p>
        <p className="thumbnail-start-time">
          {window_start.slice(11)}
        </p>
        <Link to={`/rocket-docket/${slug}`} aria-label={name}>
          <h3 className="more-info">
            More Info
          </h3>
        </Link>
      </section>
    </article>
  );
}

RocketCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  window_start: PropTypes.string,
  slug: PropTypes.string
}

export default RocketCard;