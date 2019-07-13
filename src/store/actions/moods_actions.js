// Redux:
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const CHANGE_VOLUME = 'CHANGE_VOLUME';
export const PLAY_MOOD = 'PLAY_MOOD';
export const PAUSE_ALL = 'PAUSE_ALL';

export const togglePlay = mood => ({
  type: TOGGLE_PLAY,
  mood,
});

export const changeVolume = mood => ({
  type: CHANGE_VOLUME,
  mood,
});

export const playMood = mood => ({
  type: PLAY_MOOD,
  mood,
});

export const pauseAll = moods => ({
  type: PAUSE_ALL,
  moods,
});
