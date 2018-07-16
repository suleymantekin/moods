// Redux:
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const CHANGE_VOLUME = 'CHANGE_VOLUME';

export const togglePlay = (mood) => {
    return {
        type: TOGGLE_PLAY,
        mood: mood
    }
};

export const changeVolume = (mood) => {
    return {
        type: CHANGE_VOLUME,
        mood: mood
    }
}

