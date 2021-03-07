import React from 'react';
import './Nav.css';

function Nav({showSelectedRockets, active}) {

  // active passed down as a string to avoid passing unecessary data, is the helper function in App.js the proper way to do this?
  const upcomingClass = active === 'upcoming' ? 'active upcoming nav-button' : 'upcoming nav-button'
  const recentClass = active === 'recent' ? 'active recent nav-button' : 'recent nav-button'

  return (
    <nav className="nav">
      <article className={upcomingClass} onClick={() => showSelectedRockets("upcoming")}>
        Upcoming Launches
      </article>
      <article className={recentClass} onClick={() => showSelectedRockets("recent")}>
        Recently Launched
      </article>
    </nav>
  );
}


export default Nav;