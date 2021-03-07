import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import CardContainer from '../CardContainer/CardContainer';
import RocketDetails from '../RocketDetails/RocketDetails';
import LoadingPage from '../LoadingPage/LoadingPage';
import ErrorPage from '../ErrorPage/ErrorPage';
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
      searchResults: null,
      error: null,
      loading: false,
      showSearch: true
    }
  }

  // componentDidMount() {
  //   getUpcomingRockets()
  //     .then(response => this.setState({upcomingRocketsData: response}))
  //     .catch(err => this.throwError(err))
  //   getRecentRockets()
  //     .then(response => this.setState({recentRocketsData: response}))
  // }

  throwError = err => {
    this.setState({ error: err, loading: false })
  }

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
    const displayedContent = this.state.searchResults ? this.state.searchResults : this.state.homeContent
    let active;

    if (this.state.homeContent === this.state.upcomingRocketsData) {
      active = 'upcoming';
    } else if (this.state.homeContent === this.state.recentRocketsData) {
      active = 'recent';
    }
    
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
                <Nav showSelectedRockets={this.showSelectedRockets} active={active} />
                <CardContainer rocketData={displayedContent} />
              </>
            )
          }} />
          <Route exact path='/rocket-docket/:id' render={({match}) => {
            return (
              <RocketDetails
                throwError={this.throwError}
                findRocket={this.findRocket}
                id={match.params.id} 
              />
            )
          }} />
          <Route exact path='/rocket-docket/error' render={() => {
            return (
              <ErrorPage />
            )
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
