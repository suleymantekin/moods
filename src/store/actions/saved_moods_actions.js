export const SAVE_MOOD = 'SAVE_MOOD';
export const DELETE_MOOD = 'DELETE_MOOD';

export const saveMoodsAction = (mood, name) => ({
  type: SAVE_MOOD,
  mood,
  name,
});

export const deleteMood = name => ({
  type: DELETE_MOOD,
  name,
});
