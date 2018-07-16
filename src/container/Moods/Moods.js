import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Moods.css";
import { togglePlay, changeVolume } from '../../store/actions/moods_actions';
import Mood from "../../components/Mood/Mood";

class Moods extends Component {
  render() {
    let { savedMoods, ...moods } = this.props.moods;
    console.log(savedMoods, moods);
    moods = Object.values(moods)
    //console.log(this.props.moods)
    //console.log(moods)
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
  return { moods: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePlay: (audio) => { dispatch(togglePlay(audio)) },
    changeVolume: (volume) => { dispatch(changeVolume(volume)) }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Moods);
