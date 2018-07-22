import { SAVE_MOOD, DELETE_MOOD } from "../actions/saved_moods_actions"

export default (state = {}, action) => {
    console.log('In savedMoodsReducer...');
    console.log(state);
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