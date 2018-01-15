import React, { Component } from 'react';
import SearchBox from './components/search_box';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
        <SearchBox />
	Test
        </p>
      </div>
    );
  }
}

export default App;
