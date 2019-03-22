import React, { Component } from 'react';
import { connect } from 'react-redux';

import { playMood } from '../../store/actions/moods_actions';
import { deleteMood } from '../../store/actions/saved_moods_actions';
import SavedMood from '../../components/SavedMood/SavedMood';
import './SavedMoods.css';

class SavedMoods extends Component {
  play = mood => {
    this.props.playMood(mood);
  };

  toggleDelete = name => {
    this.props.deleteMood(name);
  };

  render() {
    const savedMoods = Object.keys(this.props.savedMoods);
    return (
      <div className="savedMoods">
        {savedMoods.map(key => (
          <SavedMood
            key={key}
            name={key}
            moods={this.props.savedMoods[key]}
            play={this.play}
            toggleDelete={this.toggleDelete}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savedMoods: state.savedMoods,
  moods: state.moods,
});

const mapDispatchToProps = dispatch => ({
  playMood: mood => {
    dispatch(playMood(mood));
  },
  deleteMood: name => {
    dispatch(deleteMood(name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedMoods);
