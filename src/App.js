import './App.css';
import React, { Component } from 'react';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import CardContainer from '.,/CardContainer/CardContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <CardContainer />
      </div>
    );
  }
}

export default App;
