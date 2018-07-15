import React, { Component } from "react";

import "./Mood.css";

class Mood extends Component {
    constructor() {
        super();
        this.audio = React.createRef();
    }
    state = {
        name: "Fireplace",
        pictureUrl: "http://is1.mzstatic.com/image/thumb/Purple3/v4/ed/69/54/ed6954c5-3223-1166-568c-9ca14b975d38/source/800x500bb.jpg",
        audioFileUrl: "https://dl.dropbox.com/s/tn0bo7jncpi0qy8/fireplace.mp3",
        volume: 50,
        playing: true
    };

    componentDidMount() {
        const audio = this.audio.current;
    }

    playSound = () => {

    };

    handleVolumeUpdate = (e) => {
        const value = e.nativeEvent.target.value;
        this.setState({ volume: value });
        console.log(this.state.volume)
        this.audio.current.volume = this.state.volume / 100;
        // audio.volume = this.value/100;
    };

    togglePlay = () => {

        console.log(this.state.playing)
        this.setState({
            playing: !this.state.playing
        });
        this.state.playing ? this.audio.current.play() : this.audio.current.pause();
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <img src={this.state.pictureUrl} />
                </div>
                <div className="card-content">
                    <button className="togglePlayButton" onClick={this.togglePlay}>{this.state.playing ? "Play" : "Pause"}</button>
                    <h3>{this.state.name}</h3>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={this.state.volume}
                        className="slider"
                        onChange={this.handleVolumeUpdate}
                    />
                </div>
                <audio
                    id="fireplace"
                    ref={this.audio}
                    src={this.state.audioFileUrl}
                />
            </div>
        );
    }
}

export default Mood;
