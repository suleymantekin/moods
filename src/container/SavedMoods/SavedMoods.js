import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveMood } from '../../store/actions/saved_moods_actions';
import { playMood } from '../../store/actions/moods_actions'
import SavedMood from '../../components/SavedMood/SavedMood';
import "./SavedMoods.css";

class Moods extends Component {
    state = {
        input: ''
    }

    saveMoodHandler = () => {
        console.log("Save mood");
        this.props.saveMood(this.props.moods, this.state.input)
    }

    play = (mood) => {
        console.log(mood, "ghfjjh")
        this.props.playMood(mood)

    }

    render() {
        const savedMoods = Object.keys(this.props.savedMoods)
        console.log(savedMoods);
        return (
            <div>
                <h1>Saved Moods</h1>
                <div className="savedMoods">
                    {
                        savedMoods.map((key) => <SavedMood
                            key={key}
                            name={key}
                            moods={this.props.savedMoods[key]}
                            play={this.play} />)
                    }
                </div>
                <input
                    type="text"
                    placeholder="Enter a name"
                    value={this.state.input}
                    onChange={(e) => this.setState({ input: e.target.value })} />
                <button onClick={this.saveMoodHandler}>Save mood</button>
            </div >
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
        saveMood: (mood, name) => { dispatch(saveMood(mood, name)) },
        playMood: (mood) => { dispatch(playMood(mood)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Moods);
