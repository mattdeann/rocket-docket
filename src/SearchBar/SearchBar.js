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

  // IS THIS COOL? OR SHOULD I MAKE A SUBMIT BUTTON?
  handleChange = (event) => {
    this.setState({value: event.target.value}, () => this.props.filterRockets(event, this.state.value))
  }

  render() {
    return (
      <input
        className="search"
        placeholder="Search by name"
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