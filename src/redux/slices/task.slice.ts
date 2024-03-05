import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { addTask, editTask, removeTask, toggleTask } from './task.thunks'
import { Task, TasksState } from './task.types'

const initialState: TasksState = {
  'tasks': [],
}

const tasksSlice = createSlice({
  'name': 'tasks',
  initialState,
  'reducers': {},
  'extraReducers': (builder) => {
    builder
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload)
      })
      .addCase(removeTask.fulfilled, (state, action: PayloadAction<number>) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload)
      })
      .addCase(toggleTask.fulfilled, (state, action: PayloadAction<number>) => {
        const task = state.tasks
          .find((stateTask) => stateTask.id === action.payload)
        if (task) {
          task.completed = !task.completed
        }
      })
      .addCase(
        editTask.fulfilled,
        (state, action: PayloadAction<{ id: number, text: string }>) => {
          const task = state.tasks
            .find((stateTask) => stateTask.id === action.payload.id)
          if (task) {
            task.text = action.payload.text
          }
        },
      )
  },
})

export default tasksSlice
