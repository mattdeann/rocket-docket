// import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = ({errorMessage}) => {
  let displayedError;

  errorMessage ? displayedError = errorMessage : displayedError = "No information available";

  return (
    <article className="error-page">
      <p className="error-message">
        <i>Oops! An error with title:</i><br/><br/>
        {displayedError}<br/><br/>
        <i>has occured.</i>
      </p>
      <Link to={`/rocket-docket`}>
        <article className="back-button">
          Back to Home
        </article>
      </Link>
    </article>
  )
}


export default ErrorPage;