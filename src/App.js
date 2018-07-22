import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import { moodsReducer } from "./store/reducer/moods_reducer";
import savedMoodReducer from "./store/reducer/saved_moods_reducer";

import Layout from './components/Layout/Layout'

class App extends Component {

  render() {
    const store = createStore(combineReducers({
      moods: moodsReducer,
      savedMoods: savedMoodReducer
    }));
    return (
      <Provider store={store}>
        <div className="App">
          <Layout />
        </div>
      </Provider>
    );
  }
}

export default App;
