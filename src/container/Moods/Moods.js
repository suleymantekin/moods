import React, { Component } from 'react';
import { connect } from 'react-redux';

import { togglePlay, changeVolume } from '../../store/actions/moods_actions';
import Mood from "../../components/Mood/Mood";
import "./Moods.css";

class Moods extends Component {

  render() {
    const moods = Object.values(this.props.moods)

    return (
      <div className="moods">
        {moods.map(mood => <Mood
          key={mood.name}
          mood={mood}
          togglePlay={this.props.togglePlay}
          changeVolume={this.props.changeVolume} />)}
      </div >
    )
  };
}

const mapStateToProps = (state) => {
  return { moods: state.moods }
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePlay: (audio) => { dispatch(togglePlay(audio)) },
    changeVolume: (volume) => { dispatch(changeVolume(volume)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Moods);
