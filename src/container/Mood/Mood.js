import React, { Component } from "react";
import { connect } from 'react-redux';
import "./Mood.css";
import { togglePlay, changeVolume } from '../../actions/moods_actions';

class Mood extends Component {
    constructor() {
        super();
        this.audio = React.createRef();
    }


    componentDidMount() {
        const audio = this.audio.current;
    }

    playSound = () => {

    };

    handleVolumeUpdate = (e) => {
        const value = e.nativeEvent.target.value;
        this.props.changeVolume(value);
        console.log(this.props.mood.volume)
        this.audio.current.volume = this.props.mood.volume / 100;
    };

    togglePlay = () => {
        this.props.mood.playing ? this.audio.current.play() : this.audio.current.pause();
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <img src={this.props.mood.pictureUrl} />
                </div>
                <div className="card-content">
                    <button className="togglePlayButton" onClick={() => this.props.togglePlay(this.audio.current)}>{this.props.mood.playing ? "Play" : "Pause"}</button>
                    <h3>{this.props.mood.name}</h3>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={this.props.mood.volume}
                        className="slider"
                        onChange={this.handleVolumeUpdate}
                    />
                </div>
                <audio
                    id="fireplace"
                    ref={this.audio}
                    src={this.props.mood.audioFileUrl}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { mood: state }
};

const mapDispatchToProps = (dispatch) => {
    return {
        togglePlay: (audio) => { dispatch(togglePlay(audio)) },
        changeVolume: (volume) => { dispatch(changeVolume(volume)) }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Mood);
