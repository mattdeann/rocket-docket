import './App.css';
import React, { Component } from 'react';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import CardContainer from './CardContainer/CardContainer';
import getRocketData from './util'

class App extends Component {
  constructor() {
    super();
    this.state = {
      rocketData: []
    }
  }

  componentDidMount() {
    getRocketData()
      .then(response => this.setState({rocketData: response.results}))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <CardContainer rocketData={this.state.rocketData} />
      </div>
    );
  }
}

export default App;
