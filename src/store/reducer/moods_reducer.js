import { TOGGLE_PLAY, CHANGE_VOLUME } from '../actions/moods_actions'

const initialState = {
    Fireplace: {
        name: "Fireplace",
        pictureUrl: require('../../assets/fireplace.jpg'),
        audioFileUrl: require('../../assets/fireplace.mp3'),
        volume: 30,
        playing: true,
        color: '#eaa612'
    },
    Rain: {
        name: "Rain",
        pictureUrl: require('../../assets/rain.jpg'),
        audioFileUrl: require('../../assets/rain.mp3'),
        volume: 30,
        playing: true,
        color: '#fae9a9'
    },
    Birds: {
        name: "Birds",
        pictureUrl: require('../../assets/birds.jpg'),
        audioFileUrl: require('../../assets/birds.mp3'),
        volume: 30,
        playing: true,
        color: '#b50804'
    },
    Stream: {
        name: "Stream",
        pictureUrl: require('../../assets/stream.jpg'),
        audioFileUrl: require('../../assets/stream.mp3'),
        volume: 30,
        playing: true,
        color: '#3e4079'
    },
    Breeze: {
        name: "Breeze",
        pictureUrl: require('../../assets/breeze.jpeg'),
        audioFileUrl: require('../../assets/breeze.mp3'),
        volume: 30,
        playing: true,
        color: '#83bcc3'
    }
};

export const moodsReducer = (state = initialState, action) => {
    console.log('In moodsReducer...');
    switch (action.type) {
        case TOGGLE_PLAY:
            const mood = { ...action.mood, playing: !action.mood.playing }
            return {
                ...state,
                [action.mood.name]: mood
            };
        case CHANGE_VOLUME:
            return {
                ...state,
                [action.mood.name]: action.mood
            }
        default:
            return state;
    }
};