import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../assets/rocket-docket-logo.png';

function Header({filterRockets}) {

  return (
    <header className="header">
      <section className="left-header">
        <img className="logo" src={logo} alt="logo" />
        <article className="site-banner">
          <h1 className="site-title">
            Rocket Docket
          </h1>
          <p className="tagline" >
            A docket of upcoming rocket launches.
          </p>
        </article>
      </section>
      <section className="right-header">
        <SearchBar filterRockets={filterRockets} />
      </section>
    </header>
  );
}


export default Header;