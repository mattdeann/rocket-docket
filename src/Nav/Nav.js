import React from 'react';
import './Nav.css';

function Nav({showSelectedRockets}) {
  return (
    <nav className="nav">
      <article className="upcoming nav-button" onClick={() => showSelectedRockets("upcoming")}>
        Upcoming Launches
      </article>
      <article className="recent nav-button" onClick={() => showSelectedRockets("recent")}>
        Recently Launched
      </article>
    </nav>
  );
}


export default Nav;