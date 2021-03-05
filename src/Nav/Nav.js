import React from 'react';
import './Nav.css';

function Nav({showSelectedRockets}) {
  return (
    <nav className="nav">
      <article className="nav-button" onClick={() => showSelectedRockets("upcoming")}>
        Upcoming Launches
      </article>
      <article className="nav-button" onClick={() => showSelectedRockets("recent")}>
        Recent Launches
      </article>
    </nav>
  );
}


export default Nav;