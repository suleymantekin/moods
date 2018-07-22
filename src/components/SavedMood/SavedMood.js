import React from 'react';

import './SavedMood.css'

const SavedMood = (props) => {
    const sum = Object.keys(props.moods).reduce(function (accumulator, currentValue) {
        if (!props.moods[currentValue].playing) {
            return accumulator + parseInt(props.moods[currentValue].volume);
        }
        return accumulator;
    }, 0);
    console.log(sum);
    return (
        <div className="savedMood">
            <h3>{props.name}</h3>
            {
                Object.keys(props.moods).map((key, index) => {
                    if (!props.moods[key].playing) {
                        return <span key={key} style={{ width: (props.moods[key].volume / sum) * 200 + 'px', backgroundColor: props.moods[key].color }}>&nbsp;</span>
                    }

                })
            }
        </div>
    )
}
export default SavedMood;