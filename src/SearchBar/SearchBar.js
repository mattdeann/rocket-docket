import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    )
  }
}


export default SearchForm;