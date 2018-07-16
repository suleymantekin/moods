import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import { moodsReducer } from "./store/reducer/moods_reducer";

import Layout from './components/Layout/Layout'

class App extends Component {

  render() {
    const store = createStore(moodsReducer);
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
          </header>
          <Layout />
        </div>
      </Provider>
    );
  }
}

export default App;
