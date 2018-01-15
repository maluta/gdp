import React, { Component } from 'react';
import SearchBox from './components/search_box';
import ResultsBox from './components/results_box';
import './App.css';


var GoogleSearch = require('google-search');
var googleSearch = new GoogleSearch({
  key: API_KEY,
  cx : CX,
});


googleSearch.build({
  q: "frações",
  start: 5,
  gl: "pt-BR", //geolocation, 
  lr: "lang_pt",
  num: 10 // Number of search results to return between 1 and 10, inclusive 
}, function(error, response) {
  console.log(response);
});

//-------------------------

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <h1>Busca do Professor</h1>
        <SearchBox />
        <ResultsBox />
      </div>
    );
  }
}

export default App;
