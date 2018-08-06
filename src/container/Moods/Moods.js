import React, { Component } from 'react';
import { connect } from 'react-redux';

import { togglePlay, changeVolume, pauseAll } from '../../store/actions/moods_actions';
import { saveMood } from '../../store/actions/saved_moods_actions';

import Mood from "../../components/Mood/Mood";
import "./Moods.css";

class Moods extends Component {

  state = {
    input: ''
  }

  saveMoodHandler = () => {
    this.setState({ input: '' });
    this.props.saveMood(this.props.moods, this.state.input)
  }

  pauseAllHandler = () => {
    const { moods } = this.props;
    const newMoods = {};
    for (const mood in moods) {
      newMoods[mood] = { ...moods[mood], playing: false }
    }
    this.props.pauseAll(newMoods);
  }

  render() {
    const moods = Object.values(this.props.moods)

    return (
      <div>
        <button onClick={this.pauseAllHandler} className="saveButton" >Pause All</button>
        <div className="moods">
          {moods.map(mood => <Mood
            key={mood.name}
            mood={mood}
            togglePlay={this.props.togglePlay}
            changeVolume={this.props.changeVolume} />)}
        </div >
        <input
          className="inputSaveMood"
          type="text"
          placeholder="Enter a name"
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })} />
        <button onClick={this.saveMoodHandler} className="saveButton" >Save mood</button>

      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return { moods: state.moods }
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveMood: (mood, name) => { dispatch(saveMood(mood, name)) },
    togglePlay: (audio) => { dispatch(togglePlay(audio)) },
    changeVolume: (volume) => { dispatch(changeVolume(volume)) },
    pauseAll: (moods) => { dispatch(pauseAll(moods)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Moods);
