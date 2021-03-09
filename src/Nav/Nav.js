import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import './Nav.css';

function Nav({filterRockets, showSelectedRockets, active}) {
  const upcomingClass = active === 'upcoming' ? 'active upcoming nav-button' : 'upcoming nav-button';
  const recentClass = active === 'recent' ? 'active recent nav-button' : 'recent nav-button';

  return (
    <nav className="nav">
      <SearchBar filterRockets={filterRockets} active={active} />
      <article className={upcomingClass} onClick={() => showSelectedRockets("upcoming")}>
        Upcoming Launches
      </article>
      <article className={recentClass} onClick={() => showSelectedRockets("recent")}>
        Recently Launched
      </article>
    </nav>
  );
}

Nav.propTypes = {
  filterRockets: PropTypes.func,
  showSelectedRockets: PropTypes.func,
  active: PropTypes.string
}

export default Nav;