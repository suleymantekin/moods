import React from 'react';

import './SavedMood.css'

const SavedMood = (props) => {
    const sum = Object.keys(props.moods).reduce(function (accumulator, currentValue) {
        if (props.moods[currentValue].playing) {
            return accumulator + parseInt(props.moods[currentValue].volume);
        }
        return accumulator;
    }, 0);

    return (
        <div className="savedMood">
            <h2>{props.name}</h2>
            {
                Object.keys(props.moods).map((key, index) => {
                    if (props.moods[key].playing) {
                        return <span key={key} style={{ width: (props.moods[key].volume / sum) * 250 + 'px', backgroundColor: props.moods[key].color }}>&nbsp;</span>
                    }

                })
            }
            <button className="playButton" onClick={() => props.play(props.moods)}>Play</button>
        </div>
    )
}
export default SavedMood;