import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'

import tasksReducer from './slices/task.slice'

const rootReducer = combineReducers({
  'tasks': tasksReducer.reducer,
})

export const store = configureStore({
  'reducer': rootReducer,
  'middleware': (getDefaultMiddleware) => getDefaultMiddleware({
    'thunk': true,
  }),
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> =
  ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store
