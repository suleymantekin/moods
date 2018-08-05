import { SAVE_MOOD, DELETE_MOOD } from "../actions/saved_moods_actions"

const initialState = {
    Mixed: {
        Fireplace: {
            name: "Fireplace",
            pictureUrl: require('../../assets/fireplace.jpg'),
            audioFileUrl: require('../../assets/fireplace.mp3'),
            volume: 40,
            playing: true,
            color: '#eaa612'
        },
        Rain: {
            name: "Rain",
            pictureUrl: require('../../assets/rain.jpg'),
            audioFileUrl: require('../../assets/rain.mp3'),
            volume: 20,
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
            volume: 10,
            playing: true,
            color: '#3e4079'
        },
        Breeze: {
            name: "Breeze",
            pictureUrl: require('../../assets/breeze.jpeg'),
            audioFileUrl: require('../../assets/breeze.mp3'),
            volume: 20,
            playing: true,
            color: '#83bcc3'
        }
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_MOOD:
            return {
                ...state,
                [action.name]: action.mood
            }
        default:
            return state;
    }
}