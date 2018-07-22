export const SAVE_MOOD = 'SAVE_MOOD';
export const DELETE_MOOD = 'DELETE_MOOD';

export const saveMood = (mood, name) => {
    return {
        type: SAVE_MOOD,
        mood,
        name
    }
}

export const deleteMood = (mood) => {
    return {
        type: DELETE_MOOD,
        mood
    }
}