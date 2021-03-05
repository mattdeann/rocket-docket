import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import CardContainer from '../CardContainer/CardContainer';
import RocketDetails from '../RocketDetails/RocketDetails';
import launchData from '../mockData/launchData';
// import getRocketData from '../util'

class App extends Component {
  constructor() {
    super();
    this.state = {
      rocketData: launchData
    }
  }

  // componentDidMount() {
  //   getRocketData()
  //     .then(response => this.setState({rocketData: response.results}))
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <>
                <Nav />
                <CardContainer rocketData={this.state.rocketData} />
              </>
            )
          }} />
          <Route path="/:id" render={({match}) => {
            <RocketDetails data={this.state.rocketData} id={match.params.id}/>
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
