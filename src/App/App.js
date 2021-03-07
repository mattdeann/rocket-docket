import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import CardContainer from '../CardContainer/CardContainer';
import RocketDetails from '../RocketDetails/RocketDetails';
import upcomingLaunchData from '../mockData/upcomingLaunchData';
import recentLaunchData from '../mockData/recentLaunchData';
// import { getUpcomingRockets, getRecentRockets } from '../util'

class App extends Component {
  constructor() {
    super();
    this.state = {
      upcomingRocketsData: upcomingLaunchData.results,
      recentRocketsData: recentLaunchData.results,
      searchVisible: true,
      homeContent: upcomingLaunchData.results,
      searchResults: null
    }
  }

  // componentDidMount() {
  //   getUpcomingRockets()
  //     .then(response => this.setState({upcomingRocketsData: response}))
  //   getRecentRockets()
  //     .then(response => this.setState({recentRocketsData: response}))
  // }

  showSelectedRockets = selection => {
    // IS THIS COOL? IS THERE A BETTER WAY TO CLEAR THE SEARCH BAR FROM HERE?
    this.setState({searchResults: null})

    if (selection === "upcoming") {
      this.setState({homeContent: this.state.upcomingRocketsData})
    } else if (selection === "recent") {
      this.setState({homeContent: this.state.recentRocketsData})
    }
  }

  findRocket = (id) => {
    return this.state.homeContent.find(rocket => rocket.slug === id)
  }

  filterRockets = (event, searchTerm) => {
    event.preventDefault();

    const searchMatches = this.state.homeContent.filter(rocket => {
      return rocket.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    this.setState({searchResults: searchMatches})
  }

  render() {

    return (
      <div className="App">
        <Header 
          searchVisible={this.state.searchVisible} 
          filterRockets={this.filterRockets} 
        />
        <Switch>
          <Route exact path='/rocket-docket' render={() => {
            return (
              <>
                <Nav showSelectedRockets={this.showSelectedRockets} />
                <CardContainer rocketData={this.state.searchResults || this.state.homeContent} />
              </>
            )
          }} />
          <Route exact path="/rocket-docket/:id" render={({match}) => {
            return (
              <RocketDetails 
                findRocket={this.findRocket}
                id={match.params.id} 
              />
            )
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
