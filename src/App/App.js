import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import CardContainer from '../CardContainer/CardContainer';
import RocketDetails from '../RocketDetails/RocketDetails';
import { getUpcomingRockets, getRecentRockets } from '../util';

class App extends Component {
  constructor() {
    super();
    this.state = {
      upcomingRocketsData: null,
      recentRocketsData: null,
      active: 'upcoming',
      searchResults: null,
      error: null
    }
  }

  componentDidMount() {
    this.setState({searchResults: null})
    getUpcomingRockets()
      .then(response => this.setState({upcomingRocketsData: response}))
      .catch(err => this.throwError(err))
    getRecentRockets()
      .then(response => this.setState({recentRocketsData: response}))
  }

  showSelectedRockets = selection => this.setState({
    searchResults: null,
    active: selection
  })

  displayHomeContent = () => {
    if (this.state.active === 'recent') {
      return this.state.recentRocketsData
    } else {
      return this.state.upcomingRocketsData
    }
  }

  findRocket = (id) => {
    if (this.displayHomeContent()) {
      return this.displayHomeContent().find(rocket => rocket.slug === id)
    } else {
      return null
    }
  }

  filterRockets = (event, searchTerm) => {
    event.preventDefault();

    const searchMatches = this.displayHomeContent().filter(rocket => {
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
