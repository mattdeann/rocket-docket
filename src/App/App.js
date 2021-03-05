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
      upcomingRocketsData: upcomingLaunchData.results,
      recentRocketsData: recentLaunchData.results,
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
      homeContent = this.state.upcomingRocketsData;
    } else if (this.state.selectedView === "recent") {
      homeContent = this.state.recentRocketsData;
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <>
                <Nav showSelectedRockets={this.showSelectedRockets} />
                <CardContainer rocketData={homeContent} />
              </>
            )
          }} />
          <Route exact path="/:id" render={({match}) => {
            return <RocketDetails data={homeContent} id={match.params.id}/>
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
