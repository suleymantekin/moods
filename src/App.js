import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import moodsReducer from "./store/reducer/moods_reducer";
import savedMoodReducer from "./store/reducer/saved_moods_reducer";

import Moods from './container/Moods/Moods';
import SavedMoods from './container/SavedMoods/SavedMoods'

class App extends Component {

  render() {
    const store = createStore(combineReducers({
      moods: moodsReducer,
      savedMoods: savedMoodReducer
    }));
    return (
      <Provider store={store}>
        <div className="App">
          <SavedMoods />
          <h1>Moods</h1>
          <Moods />
        </div>
      </Provider>
    );
  }
}

export default App;
