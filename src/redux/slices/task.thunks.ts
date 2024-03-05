import { createAsyncThunk } from '@reduxjs/toolkit'

import { Task } from './task.types'

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text: string) => {
    const newTask: Task = {
      'id': Date.now(),
      text,
      'completed': false,
      'order': 0,
    }
    return newTask
  },
)

export const removeTask = createAsyncThunk(
  'tasks/removeTask',
  async (id: number) => {
    return id
  },
)

export const toggleTask = createAsyncThunk(
  'tasks/toggleTask',
  async (id: number) => {
    return id
  },
)

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async ({ id, text }: { id: number, text: string }) => {
    return { id, text }
  },
)
