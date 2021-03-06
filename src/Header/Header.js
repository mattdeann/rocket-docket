import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

function Header() {

  return (
    <header className="header">
      <section className="left-header">
        <h1 className="site-title">
          Rocket Docket
        </h1>
        <p className="tagline" >
          A docket of upcoming rocket launches.
        </p>
      </section>
      <section className="right-header">
        <SearchBar />
      </section>
    </header>
  );
}


export default Header;