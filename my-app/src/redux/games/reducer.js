import { createSlice } from '@reduxjs/toolkit';

let gamesSlice = createSlice({
  name: 'games',
  initialState: {
    currentGame: [],
  },
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload;
    },
  },
});

export const { setCurrentGame } = gamesSlice.actions;
export default gamesSlice.reducer;
