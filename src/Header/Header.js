import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../assets/rocket-docket-logo.png';

function Header({filterRockets}) {

  return (
    <header className="header">
      <section className="left-header">
        <img className="logo" src={logo} alt="logo" />
        <Link to={`/rocket-docket`}>
          <article className="site-banner">
            <h1 className="site-title">
              Rocket Docket
            </h1>
            <p className="tagline" >
              A docket of upcoming rocket launches.
            </p>
          </article>
        </Link>
      </section>
      <section className="right-header">
        <SearchBar filterRockets={filterRockets} />
      </section>
    </header>
  );
}

Header.propTypes = {
  filterRockets: PropTypes.func
}


export default Header;