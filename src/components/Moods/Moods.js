import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Moods.css";
import { togglePlay, changeVolume } from '../../actions/moods_actions';
import Mood from "../../container/Mood/Mood";
import "./Moods.css";

class Moods extends Component {
  render() {
    const moods = Object.values(this.props.moods)
    //console.log(this.props.moods)
    //console.log(moods)
    return (
      <div className="moods">
        {moods.map(mood => <Mood key={mood.name} mood={mood} />)}
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
