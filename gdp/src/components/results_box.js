import React, { Component } from 'react';

class ResultsBox extends Component {
    constructor(props) {
      super(props);
      //const r = props.results.items.map( (re) => { return <li>{re}</li> });
      console.log("ResultsBox");

   }

    render() { 
         return (
         <ul className="col-md-4 list-group">
		<li>RESULTS HERE</li>
         </ul>
         );

    }

}

export default ResultsBox;
