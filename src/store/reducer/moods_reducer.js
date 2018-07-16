
import { TOGGLE_PLAY, CHANGE_VOLUME } from '../actions/moods_actions'
const birds = require('../../assets/birds.jpg');

const initialState = {
    Fireplace: {
        name: "Fireplace",
        pictureUrl: require('../../assets/fireplace.jpg'),
        audioFileUrl: require('../../assets/fireplace.mp3'),
        volume: 30,
        playing: true
    },
    Rain: {
        name: "Rain",
        pictureUrl: require('../../assets/rain.jpg'),
        audioFileUrl: require('../../assets/rain.mp3'),
        volume: 30,
        playing: true
    },
    Birds: {
        name: "Birds",
        pictureUrl: require('../../assets/birds.jpg'),
        audioFileUrl: require('../../assets/birds.mp3'),
        volume: 30,
        playing: true
    },
    Stream: {
        name: "Stream",
        pictureUrl: require('../../assets/stream.jpg'),
        audioFileUrl: require('../../assets/stream.mp3'),
        volume: 30,
        playing: true
    },
    Breeze: {
        name: "Breeze",
        pictureUrl: require('../../assets/breeze.jpeg'),
        audioFileUrl: require('../../assets/breeze.mp3'),
        volume: 30,
        playing: true
    },
    savedMoods: {
        Love: "Love"
    }
};

export const moodsReducer = (state = initialState, action) => {
    console.log('In reducer...');
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