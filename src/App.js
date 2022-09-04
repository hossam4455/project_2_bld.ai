import React, { Component } from 'react';
import Section  from './compments/section';

class App extends Component{
  render(){
    return(
      <div className='App'>
      {Section()}
      </div>
    );
  }
}

export default App;


