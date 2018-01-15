import React, { Component } from 'react';
import SearchBox from './components/search_box';
import ResultsBox from './components/results_box';
import './App.css';


var GoogleSearch = require('google-search');
var googleSearch = new GoogleSearch({
  key: API_KEY,
  cx : CX,
});


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { results: [] } ; 
   

   googleSearch.build({
     q: "frações",
     start: 5,
     gl: "pt-BR", //geolocation, 
     lr: "lang_pt",
     num: 5 // Number of search results to return between 1 and 10, inclusive 
   }, (error, response) => { this.setState( { results: response } ) } );

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
	<div className="container">
        <h1 className="row" >Busca do Professor</h1>
        <SearchBox />
        <ResultsBox results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;
