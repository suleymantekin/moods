import React, { Component } from 'react';
import { connect } from 'react-redux';


import { playMood } from '../../store/actions/moods_actions'
import SavedMood from '../../components/SavedMood/SavedMood';
import "./SavedMoods.css";

class Moods extends Component {

    play = (mood) => {
        console.log(mood, "ghfjjh")
        this.props.playMood(mood)

    }

    render() {
        const savedMoods = Object.keys(this.props.savedMoods)
        console.log(savedMoods);
        return (
            <div className="savedMoods">
                {
                    savedMoods.map((key) => <SavedMood
                        key={key}
                        name={key}
                        moods={this.props.savedMoods[key]}
                        play={this.play} />)
                }
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        savedMoods: state.savedMoods,
        moods: state.moods
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        playMood: (mood) => { dispatch(playMood(mood)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Moods);
