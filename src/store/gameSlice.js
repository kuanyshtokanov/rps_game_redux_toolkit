import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTables } from '@helpers/tablesAPI';

const game = {
  gameId: null,
  bet: 0,
  started: false,
}

const initialState = {
  currentGame: null,
  game
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addToBalance:  (state, action) => {
      state.value += action.payload;
    },
    withdrawBalance:  (state, action) => {
      state.value -= action.payload;
    },
    selectGame: (state, action) => {
      state.gameId = action.payload;
    },
    selectCurrentGame: (state, action) => {
      state.currentGame = action.payload.currentGame;
      console.log('log', action.payload.game)
      state.game = action.payload.game
    },
  },
});

export const { selectGame, selectCurrentGame } = gameSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const fetchGame = (state) => state.game;

export default gameSlice.reducer;
