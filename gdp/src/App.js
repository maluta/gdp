import React, { Component } from 'react';
import SearchBox from './components/search_box';
import ResultsBox from './components/results_box';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <h1>Busca do Professor</h1>
        <p className="App-intro">
        <SearchBox />
        <ResultsBox />
        </p>
      </div>
    );
  }
}

export default App;
