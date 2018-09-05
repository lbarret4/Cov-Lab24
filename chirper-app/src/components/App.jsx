import React, { Component } from 'react';
import ChirpsFeed from './ChirpsFeed';


class App extends Component {
    constructor(props){
      super(props);
    }
  render() {
    return (
      <div className="container">
        <header>
          <h1 className="text-center">Welcome to Chirper !</h1>
        </header>
         <ChirpsFeed items={this.props.items} />      
      </div>
      
    );
  }
}

export default App;
