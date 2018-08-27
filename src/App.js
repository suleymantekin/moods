import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import moodsReducer from "./store/reducer/moods_reducer";
import savedMoodReducer from "./store/reducer/saved_moods_reducer";

import Header from './components/Header';
import Footer from './components/Footer';
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
          <Header />
          <h1>Our favorites</h1>
          <SavedMoods />
          <h1>Moods</h1>
          <Moods />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
