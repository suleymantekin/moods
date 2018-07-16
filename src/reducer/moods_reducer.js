
import { TOGGLE_PLAY, CHANGE_VOLUME } from '../actions/moods_actions'
const initialState = {
    name: "Fireplace",
    pictureUrl: "http://is1.mzstatic.com/image/thumb/Purple3/v4/ed/69/54/ed6954c5-3223-1166-568c-9ca14b975d38/source/800x500bb.jpg",
    audioFileUrl: "https://dl.dropbox.com/s/tn0bo7jncpi0qy8/fireplace.mp3",
    volume: 50,
    playing: true
};

export const moodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PLAY:
            console.log('in reducer');
            action.audio ? state.playing ? action.audio.play() : action.audio.pause() : null;
            return {
                ...state,
                playing: !state.playing
            };
        case CHANGE_VOLUME:
            return {
                ...state,
                volume: action.volume
            }
        default:
            return state;
    }
};