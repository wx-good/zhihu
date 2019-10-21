import React from 'react';
import './App.css';

import Router from './assest/router/public'
import AA from './assest/router/index'

// import imgnav from './assest/images/1'

class App extends React.Component {
 
  render() {
    return (
      <div className="App">
        <div className="top"><img src={require('./assest/images/1.jpg')} alt=""/></div>
        <Router routes={AA}></Router>
      </div>
    );
  }
 
}

export default App;
