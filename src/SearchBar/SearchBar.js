import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value}, this.props.filterRockets(event, event.target.value))
  }

  render() {
    return (
      <input
        className="search"
        placeholder="Search rockets by name"
        type="text" 
        value={this.state.value} 
        onChange={this.handleChange} 
      />
    )
  }
}

SearchBar.propTypes = {
  filterRockets: PropTypes.func
}


export default SearchBar;