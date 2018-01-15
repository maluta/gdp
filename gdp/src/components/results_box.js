import React, { Component } from 'react';

class ResultsBox extends Component {
    constructor(props) {
      super(props);
      this.state = { term: '' };
   }

    render() { 
         return (
         <div>
	     <h3>Titulo: xxxxx</h3>
	     <p>Descrição: xxxx</p>
         </div>
         );

    }

}

export default ResultsBox;
