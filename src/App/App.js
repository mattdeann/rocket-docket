import './App.css';
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
      homeContent: upcomingLaunchData.results,
      active: "upcoming",
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
  showSelectedRockets = selection => {
    this.setState({searchResults: null, active: selection})
  }

  displayHomeContent = () => {
    if (this.state.active === 'recent') {
      return this.state.recentRocketsData
    } else {
      return this.state.upcomingRocketsData
    }
  }

  findRocket = (id) => this.state.homeContent.find(rocket => rocket.slug === id)

  filterRockets = (event, searchTerm) => {
    event.preventDefault();

    const searchMatches = this.state.homeContent.filter(rocket => {
      return rocket.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    
    this.setState({searchResults: searchMatches})
  }

  render() {
    const displayedContent = this.state.searchResults ? this.state.searchResults : this.displayHomeContent()
    
    return (
      <div className="App">
        <Header 
          filterRockets={this.filterRockets} 
        />
        <Switch>
          {/* <Route exact path='/rocket-docket/error' render={() => {
            return (
              <ErrorPage errorMessage={this.state.error} />
            )
          }} /> */}
          <Route exact path='/rocket-docket/:id' render={({match}) => {
            return (
              <RocketDetails
                throwError={this.throwError}
                findRocket={this.findRocket}
                id={match.params.id} 
              />
            )
          }} />
          <Route exact path='/rocket-docket' render={() => {
            return (
              <>
                <Nav 
                  filterRockets={this.filterRockets}
                  showSelectedRockets={this.showSelectedRockets}
                  active={this.state.active} 
                />
                <CardContainer rocketData={displayedContent} />
              </>
            )
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
