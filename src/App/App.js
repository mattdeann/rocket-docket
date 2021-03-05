import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import CardContainer from '../CardContainer/CardContainer';
import RocketDetails from '../RocketDetails/RocketDetails';
import upcomingLaunchData from '../mockData/upcomingLaunchData';
import recentLaunchData from '../mockData/recentLaunchData';
// import getUpcomingRockets from '../util'

class App extends Component {
  constructor() {
    super();
    this.state = {
      upcomingRocketsData: upcomingLaunchData,
      recentRocketsData: recentLaunchData,
      selectedView: "upcoming"
    }
  }

  // componentDidMount() {
  //   getUpcomingRockets()
  //     .then(response => this.setState({rocketData: response.results}))
  // }

  showSelectedRockets = (selection) => {
    this.setState({selectedView: selection})
  }

  render() {
    let homeContent;

    if (this.state.selectedView === "upcoming") {
      homeContent = <CardContainer rocketData={this.state.upcomingRocketsData.results} />
    } else if (this.state.selectedView === "recent") {
      homeContent = <CardContainer rocketData={this.state.recentRocketsData.results} />
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <>
                <Nav />
                {homeContent
                }
              </>
            )
          }} />
          <Route exact path="/:id" render={({match}) => {
            return <RocketDetails data={this.state.rocketData.results} id={match.params.id}/>
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
