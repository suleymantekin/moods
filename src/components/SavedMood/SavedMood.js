import React from 'react';

import './SavedMood.css'

const SavedMood = ({ name, moods, play }) => {
    const sum = Object.keys(moods).reduce(function (accumulator, currentValue) {
        if (moods[currentValue].playing) {
            return accumulator + parseInt(moods[currentValue].volume);
        }
        return accumulator;
    }, 0);

    return (
        <div className="savedMood">
            <p>{name}</p>
            {
                Object.keys(moods).map((key, index) => {
                    if (moods[key].playing) {
                        return <span key={key} style={{ width: (moods[key].volume / sum) * 250 + 'px', backgroundColor: moods[key].color }}>&nbsp;</span>
                    }
                })
            }
            <button onClick={() => play(moods)}>Play</button>
        </div>
    )
}
export default SavedMood;