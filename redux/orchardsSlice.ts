import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'
import { fetchOrchards } from './api'

export interface OrchardsState {
  items: []
  status: 'idle' | 'loading' | 'failed'
}

const initialState: OrchardsState = {
  items: [],
  status: 'idle',
}

export const loadOrchards = createAsyncThunk('api/orchards', async () => {
  const response = await fetchOrchards()
  return response
})

export const orchardsSlice = createSlice({
  name: 'orchards',
  initialState,
  reducers: {
    resetState: (state) => {
      state.items = []
      state.status = 'idle'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadOrchards.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadOrchards.fulfilled, (state, action) => {
        state.status = 'idle'
        state.items = action.payload
      })
  },
})

export const { resetState } = orchardsSlice.actions
export const selectOrchards = (state: AppState) => state.orchards.items
export const selectStatus = (state: AppState) => state.orchards.status

export default orchardsSlice.reducer
