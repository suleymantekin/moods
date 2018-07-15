import React, { Component } from "react";

import "./Mood.css";

class Mood extends Component {
    constructor() {
        super();
        this.audio = React.createRef();
    }
    state = {
        name: "",
        pictureUrl: "http://is1.mzstatic.com/image/thumb/Purple3/v4/ed/69/54/ed6954c5-3223-1166-568c-9ca14b975d38/source/800x500bb.jpg",
        audioFileUrl: "https://dl.dropbox.com/s/tn0bo7jncpi0qy8/fireplace.mp3",
        volume: 50,
        playing: false
    };

    componentDidMount() {
        //const audio = this.audio.current;
        //this.playSound(audio);
    }

    playSound = () => {
        console.log(this.audio);
        if (!this.audio.current) return; //if there is no audio just return
        this.audio.current.currentTime = 0; //rewind to start
        this.audio.current.volume = this.state.volume / 100;
        this.state.playing ? this.audio.current.play() : this.audio.current.pause();
        ;
        //key.classList.add("playing");
    };

    handleUpdate = (e) => {
        const value = e.nativeEvent.target.value;
        this.setState({ volume: value });
        console.log(this.state.volume)

        // audio.volume = this.value/100;
    };

    togglePlay = () => {
        console.log(this.state.playing)
        this.setState({
            playing: !this.state.playing
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" onClick={this.playSound()}>
                    <img src={this.state.pictureUrl} />
                </div>
                <div className="card-content">
                    <button className="togglePlay" onClick={this.togglePlay}>{this.state.playing ? "Pause" : "Play"}</button>
                    <h3>Fireplace</h3>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={this.state.volume}
                        className="slider"
                        onChange={this.handleUpdate}
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
