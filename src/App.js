import React from 'react';
import User from './User';
import HomeContainer from './containers/HomeContainer';
import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Redux data</h1>
      <User data={{name:'Baljit Dhanoa',age:28 }} /> 
      <HomeContainer />
    </div>
  );
}

export default App;



