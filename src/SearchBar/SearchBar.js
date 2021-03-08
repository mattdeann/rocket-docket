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

  componentDidMount() {
    this.setState({value: ''})
  }

  handleChange = (event) => {
    this.setState({value: event.target.value}, this.props.filterRockets(event, event.target.value))
  }

  render() {
    return (
      <input
        className="search"
        placeholder="Search rockets"
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