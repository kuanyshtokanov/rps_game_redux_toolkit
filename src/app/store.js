import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@features/counter/counterSlice'
import balanceReducer from '@store/balanceSlice'
import tablesReducer from '@store/tablesSlice'
// import gameReducer from '@store/gameSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    balance: balanceReducer,
    tables: tablesReducer,
    // game: gameReducer,
  },
});
