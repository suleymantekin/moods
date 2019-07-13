import React from 'react';

import './SavedMood.css';

const SavedMood = ({ name, moods, play, toggleDelete }) => {
  const sum = Object.keys(moods).reduce(function(accumulator, currentValue) {
    if (moods[currentValue].playing) {
      return accumulator + parseInt(moods[currentValue].volume);
    }
    return accumulator;
  }, 0);

  return (
    <div className="savedMood">
      <p>{name}</p>
      {Object.keys(moods).map(key => {
        if (moods[key].playing) {
          return (
            <span
              key={key}
              style={{
                width: `${(moods[key].volume / sum) * 250}px`,
                backgroundColor: moods[key].color,
              }}
            >
              &nbsp;
            </span>
          );
        }
        return null;
      })}
      <div className="savedMoodButtons">
        <button type="button" onClick={() => play(moods)}>
          Play
        </button>
        <button type="button" onClick={() => toggleDelete(name)}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default SavedMood;
