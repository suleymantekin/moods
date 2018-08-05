// Redux:
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const CHANGE_VOLUME = 'CHANGE_VOLUME';
export const PLAY_MOOD = 'PLAY_MOOD';
export const PAUSE_ALL = 'PAUSE_ALL';

export const togglePlay = (mood) => {
    return {
        type: TOGGLE_PLAY,
        mood
    }
};

export const changeVolume = (mood) => {
    return {
        type: CHANGE_VOLUME,
        mood
    }
}

export const playMood = (mood) => {
    return {
        type: PLAY_MOOD,
        mood
    }
}

export const pauseAll = (moods) => {
    return {
        type: PAUSE_ALL,
        moods
    }
}

