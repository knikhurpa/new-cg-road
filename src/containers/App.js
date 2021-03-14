import React, { Component } from 'react';
import './App.css';
import { borrowers } from '../borrowers';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      borrowers: borrowers,
      searchfield: ''
    }
  }

  // onSearchChange function will be triggered by SearchBox component
  // set the searchfield state whenever there is any input in searchbox
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { borrowers, searchfield } = this.state;
    // filter borrowers array based on searchfield state
    const filteredBorrowers = borrowers.filter((borrower) => {
      return borrower.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1 fw3">New CG Road (26241)</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList borrowers={ filteredBorrowers }/>
          </ErrorBoundary>
        </Scroll>
      </div> 
    );
  }
}

export default App;
