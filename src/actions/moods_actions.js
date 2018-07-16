// Redux:
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const CHANGE_VOLUME = 'CHANGE_VOLUME';

export const togglePlay = (audio) => {
    return {
        type: TOGGLE_PLAY,
        audio: audio
    }
};

export const changeVolume = (volume) => {
    return {
        type: CHANGE_VOLUME,
        volume: volume
    }
}

