import './App.css';
import React, { Component } from 'react';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import CardContainer from './CardContainer/CardContainer';
import getNewsData from './util'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsData: []
    }
  }

  componentDidMount() {
    getNewsData()
      .then(response => this.setState({newsData: response}))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <CardContainer newsData={this.state.newsData} />
      </div>
    );
  }
}

export default App;
