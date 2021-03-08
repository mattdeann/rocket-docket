// import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';
import logo from '../assets/rocket-docket-logo.png';

const ErrorPage = ({errorMessage}) => {
  let displayedError;

  errorMessage ? displayedError = errorMessage : displayedError = "No information available";

  return (
    <article className="error-page">
      <section className="error-message">
        <img src={logo} className="error-logo" alt="rocket"/>
        <p>
          Oops! An error with message
        </p>
        <p className="displayed-error">
          "{displayedError}"
        </p>
        <p>
          has occured.
        </p>
      </section>
      <Link to={`/rocket-docket`}>
        <article className="back-button">
          Back to Home
        </article>
      </Link>
    </article>
  )
}


export default ErrorPage;