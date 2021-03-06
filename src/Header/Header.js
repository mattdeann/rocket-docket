import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/rocket-docket-logo.png';

function Header() {
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
    </header>
  );
}

export default Header;