import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTables } from '@helpers/tablesAPI';

const initialState = {
  currentGame: null
};

export const currentGameSlice = createSlice({
  name: 'currentGame',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addToBalance:  (state, action) => {
      state.value += action.payload;
    },
    withdrawBalance:  (state, action) => {
      state.value -= action.payload;
    },
    selectCurrentGame: (state, action) => {
      state.currentGame = action.payload;
    },
  },
});

export const { selectGame } = currentGameSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const fetchGame = (state) => state.game;

export default currentGameSlice.reducer;
