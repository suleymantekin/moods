import React, { Component } from 'react';
import './App.css';

import Layout from './components/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Moods</h1>

        </header>
        <Layout/>
      </div>
    );
  }
}

export default App;
