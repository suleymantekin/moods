import React, { Component } from "react";
import "./Mood.css";

class Mood extends Component {
    constructor() {
        super();
        this.audio = React.createRef();
    }

    componentDidUpdate() {
        console.log(this.audio, "ASDFasd")
        this.props.mood.playing ? this.audio.current.play() : this.audio.current.pause();
    }


    handleVolumeUpdate = (e) => {
        const value = e.target.value;
        const updatedMood = { ...this.props.mood, volume: value }
        this.props.changeVolume(updatedMood);
        this.audio.current.volume = value / 100;
    };

    togglePlay = () => {
        this.props.mood.playing ? this.audio.current.play() : this.audio.current.pause();
        this.props.togglePlay(this.props.mood);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <img src={this.props.mood.pictureUrl} alt={this.props.mood.name} />
                </div>
                <div className="card-content">
                    <button
                        className="togglePlayButton"
                        onClick={this.togglePlay}>{this.props.mood.playing ? "Pause" : "Play"}
                    </button>
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
                    loop
                />
            </div>
        );
    }
}

export default Mood;
