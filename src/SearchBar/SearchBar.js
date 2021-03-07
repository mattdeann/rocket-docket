import React, { Component } from 'react';

class SearchForm extends Component {
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
        placeholder="Search by name"
        type="text" 
        value={this.state.value} 
        onChange={this.handleChange} 
      />
    )
  }
}


export default SearchForm;