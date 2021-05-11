import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@features/counter/counterSlice'
import balanceReducer from '@store/balanceSlice'
import tablesReducer from '@store/tablesSlice'
import betsSlice from '@store/betsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    balance: balanceReducer,
    tables: tablesReducer,
    bets: betsSlice,
  },
});
