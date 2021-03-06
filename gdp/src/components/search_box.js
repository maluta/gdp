import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props) {
      super(props);
      this.state = { term: '' };
   }

    render() { 
         return (
           <div className="row">
           <input value={this.state.term} 
                  onChange={event => this.setState({ term: event.target.value })} />
           </div>
         );
    }

}

export default SearchBox;
